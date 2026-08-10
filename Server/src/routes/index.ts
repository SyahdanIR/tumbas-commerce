import { Hono } from "hono";
import authRoute from "./auth.route";

const mainRoute = new Hono();

mainRoute.route("/auth", authRoute);

export default mainRoute;
