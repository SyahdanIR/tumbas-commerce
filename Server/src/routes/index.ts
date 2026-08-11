import { Hono } from "hono";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import categoryRoute from "./category.route";
import productRoute from "./product.route";

const mainRoute = new Hono();

mainRoute.route("/auth", authRoute);
mainRoute.route("/users", userRoute);
mainRoute.route("/category", categoryRoute);
mainRoute.route("/product", productRoute);

export default mainRoute;
