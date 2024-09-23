import { Context } from "hono";
import { IUser } from "../db";

export type TDoceded = Pick<IUser, "_id" | "name" | "email">;

export type ContextWithUser = Context<{
  Variables: { user: TDoceded };
}>;
