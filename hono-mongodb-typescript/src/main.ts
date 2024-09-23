import logger from "./lib/logger";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import env from "./utils/env";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import { authMiddleware } from "./middlewares/auth.middleware";
import { ContextWithUser } from "./utils/types";

const app = new Hono();

app.route("/auth", authRoute);
app.use("*", authMiddleware);
app.route("/users", userRoute);

app.get("/auth/me", async (c: ContextWithUser) => {
  const user = c.get("user");
  return c.json({ user });
});

async function main() {
  await mongoose.connect(env.MONGODB_URI, {
    dbName: "hono",
    auth: {
      username: "admin",
      password: "secret",
    },
  });
  logger.info("Connected to MongoDB");
  serve({
    fetch: app.fetch,
    port: env.PORT,
  });
  logger.info(`Server is running on port ${env.PORT}`);
}

main().catch((error) => {
  logger.error("Error starting server", { error });
});
