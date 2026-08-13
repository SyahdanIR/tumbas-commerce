import { Context } from "hono";

export const getMe = async (c: Context) => {
  const payload = c.get("jwtPayload");

  return c.json({
    message: "User authenticated",
    payload,
  });
};
