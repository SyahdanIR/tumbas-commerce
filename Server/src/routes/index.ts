import { Hono } from "hono";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import categoryRoute from "./category.route";

const mainRoute = new Hono();

mainRoute.route("/auth", authRoute);
mainRoute.route("/users", userRoute);
mainRoute.route("/category", categoryRoute);

export default mainRoute;
