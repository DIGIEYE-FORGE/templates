import { zValidator } from "@hono/zod-validator";
import db from "../../db";
import { Hono } from "hono";
import { z } from "zod";
import { hash } from "argon2";
import jwt from "jsonwebtoken";
import env from "../../utils/env";
import logger from "../../lib/logger";

const userRoute = new Hono();

// const findByIdSchema = z.object({
//   id: z.string().uuid({ message: "Invalid id" }),
// });

// const findManySchema = z.object({
//   limit: z
//     .string()
//     .regex(/^\d+$/, { message: "Invalid limit" })
//     .default("10")
//     .transform((v) => parseInt(v, 10)),
//   skip: z
//     .string()
//     .regex(/^\d+$/, { message: "Invalid skip" })
//     .default("0")
//     .transform((v) => parseInt(v, 10)),
// });

userRoute.get("/", async (c) => {
  const users = await db.user.find();
  return c.json(users);
});

userRoute.get(
  "/:id",
  zValidator(
    "param",
    z.object({
      id: z.string().uuid({ message: "Invalid id" }),
    }),
  ),
  async (c) => {
    const { id } = c.req.valid("param");
    const user = await db.user.findById(id);
    if (!user) {
      c.status(404);
      return c.text("User not found");
    }
    return c.text("hello");
  },
);
userRoute.delete("/", async (c) => {
  const users = await db.user.deleteMany();
  return c.json(users);
});

export default userRoute;
