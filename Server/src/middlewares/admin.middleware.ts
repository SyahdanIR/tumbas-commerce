import { Context, Next } from "hono";
import { AppError } from "../errors/app.error";
import { JwtPayload } from "../types/auth";

export const adminMiddleware = async (c: Context, next: Next) => {
  const payload = c.get("jwtPayload") as JwtPayload;

  if (payload.role !== "ADMIN") {
    throw new AppError("Admin access required!", 403);
  }

  await next();
};
