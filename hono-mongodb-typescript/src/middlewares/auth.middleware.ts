import { bearerAuth } from "hono/bearer-auth";
import logger from "../lib/logger";
import jwt from "jsonwebtoken";
import db from "../db";
import { TDoceded } from "../utils/types";
import env from "../utils/env";

export const authMiddleware = bearerAuth({
  verifyToken: async (token, c) => {
    try {
      const { email } = jwt.verify(token, env.JWT_SECRET) as TDoceded;
      const user = await db.user.findOne({ email });
      c.set("user", user);
      return !!user;
    } catch (error) {
      logger.warn("Error verifying token", { error });
      return false;
    }
  },
});
