import { Context } from "hono";
import { registerUser, loginUser } from "../services/auth.services";

export const register = async (c: Context) => {
  const { email, name, password } = await c.req.json();

  const user = await registerUser(email, name, password);

  return c.json({ message: "Register akun berhasil", user }, 201);
};

export const login = async (c: Context) => {
  const { email, password } = await c.req.json();

  const user = await loginUser(email, password);

  return c.json({ message: "Login berhasil", ...user }, 200);
};
