import { Hono } from "hono";
import {
  createCategoryController,
  deleteCategoryController,
  editCategoryController,
  showAllCategoryController,
} from "../controllers/category.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const categoryRoute = new Hono();

categoryRoute.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createCategoryController,
);

categoryRoute.patch(
  "/:id",
  authMiddleware,
  adminMiddleware,
  editCategoryController,
);

categoryRoute.get("/", showAllCategoryController);

categoryRoute.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteCategoryController,
);

export default categoryRoute;
