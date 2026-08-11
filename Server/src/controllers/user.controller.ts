import { Context } from "hono";
import { AppError } from "../errors/app.error";

export const getMe = async (c: Context) => {
  const payload = c.get("jwtPayload");

  return c.json({
    message: "User authenticated",
    payload,
  });
};
