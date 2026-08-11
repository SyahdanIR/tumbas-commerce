import { Hono } from "hono";
import { createProductController } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const productRoute = new Hono();

productRoute.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createProductController,
);

export default productRoute;
