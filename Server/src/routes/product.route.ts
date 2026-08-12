import { Hono } from "hono";
import {
  createProductController,
  deleteProductController,
  editProductController,
  showAllProductController,
  showProductByIdController,
} from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const productRoute = new Hono();

productRoute.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createProductController,
);

productRoute.get("/", showAllProductController);

productRoute.patch(
  "/:id",
  authMiddleware,
  adminMiddleware,
  editProductController,
);

productRoute.get("/:id", showProductByIdController);

productRoute.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteProductController,
);

export default productRoute;
