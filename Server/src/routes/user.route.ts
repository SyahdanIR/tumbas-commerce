import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getMe } from "../controllers/user.controller";

const userRoute = new Hono();

userRoute.get("/me", authMiddleware, getMe);

export default userRoute;