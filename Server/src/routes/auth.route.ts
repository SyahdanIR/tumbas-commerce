import { Hono } from "hono";
import {
  register,
  login,
  logoutController,
} from "../controllers/auth.controller";

const authRoute = new Hono();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logoutController);

export default authRoute;
