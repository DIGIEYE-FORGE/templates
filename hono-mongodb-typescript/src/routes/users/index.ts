import { zValidator } from "@hono/zod-validator";
import db from "../../db";
import { Hono } from "hono";
import { z } from "zod";

const userRoute = new Hono();

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
