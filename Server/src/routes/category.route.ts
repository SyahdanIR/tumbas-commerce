import { Hono } from "hono";
import { createCategoryController } from "../controllers/category.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const categoryRoute = new Hono();

categoryRoute.post("/", authMiddleware, adminMiddleware, createCategoryController);

export default categoryRoute;
