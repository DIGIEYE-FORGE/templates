import { z } from "zod";
import { logLevels, nodeEnv } from "./constants";

import dotenv from "dotenv";
dotenv.config();

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/)
    .transform((v) => parseInt(v, 10))
    .default("3000"),
  LOG_LEVEL: z.enum(logLevels).default("info"),
  NODE_ENV: z.enum(nodeEnv).default("development"),
  JWT_SECRET: z.string().default("secret"),
  MONGODB_URI: z.string().default("mongodb://localhost:27017"),
});

export type Env = z.infer<typeof envSchema>;

export default envSchema.parse(process.env);
