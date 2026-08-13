import { Context } from "hono";
import { registerUser, loginUser } from "../services/auth.services";
import { deleteCookie, setCookie } from "hono/cookie";

export const register = async (c: Context) => {
  const { email, name, password } = await c.req.json();

  const user = await registerUser(email, name, password);

  return c.json({ message: "Register akun berhasil", user }, 201);
};

export const login = async (c: Context) => {
  const { email, password } = await c.req.json();

  const { user, token } = await loginUser(email, password);

  setCookie(c, "token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    path: "/",
  });

  return c.json({ message: "Login berhasil", ...user }, 200);
};

export const logoutController = async (c: Context) => {
  deleteCookie(c, "token", {
    path: "/",
  });

  return c.json({
    message: "Logout sucessful!",
  });
};
