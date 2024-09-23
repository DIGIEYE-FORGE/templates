import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import db from "../../db";
import logger from "../../lib/logger";
import { sign } from "jsonwebtoken";
import env from "../../utils/env";
import { hash, verify } from "argon2";

const authRoute = new Hono();

const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

authRoute.post("/signup", zValidator("json", signUpSchema), async (c) => {
  const { firstName, lastName, email, password } = c.req.valid("json");

  const userExists = await db.user.findOne({ email });
  if (userExists) {
    c.status(409);
    return c.text("User already exists");
  }
  const hashedPassword = await hash(password);
  logger.info("Creating user", { hashedPassword });
  const user = await db.user.create({
    name: `${firstName} ${lastName}`,
    email,
    password: hashedPassword,
  });

  const data = {
    email: user.email,
    name: user.name,
  };
  const accessToken = sign(data, env.JWT_SECRET, { expiresIn: "1m" });
  const refreshToken = sign(data, env.JWT_SECRET, { expiresIn: "7d" });

  return c.json({ user, accessToken, refreshToken });
});

authRoute.post("/signin", zValidator("json", signInSchema), async (c) => {
  const { email, password } = c.req.valid("json");
  const user = await db.user.findOne({ email });
  if (!user) {
    c.status(404);
    return c.text("User not found");
  }
  const isValid = await verify(user.password, password);
  if (!isValid) {
    c.status(401);
    return c.text("Invalid password");
  }

  const signData = {
    id: user.id,
    email: user.email,
    name: user.name,
  };
  const accessToken = sign(signData, env.JWT_SECRET, { expiresIn: "1m" });
  const refreshToken = sign(signData, env.JWT_SECRET, { expiresIn: "7d" });

  return c.json({
    user: { ...user.toJSON(), password: undefined },
    accessToken,
    refreshToken,
  });
});

export default authRoute;
