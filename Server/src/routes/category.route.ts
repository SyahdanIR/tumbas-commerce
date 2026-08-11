import { Hono } from "hono";
import { createCategoryController } from "../controllers/category.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const categoryRoute = new Hono();

categoryRoute.post("/", authMiddleware, createCategoryController);

export default categoryRoute;
