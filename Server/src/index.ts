import { Hono } from "hono";
import { serve } from "@hono/node-server";
import mainRoute from "./routes";
import { AppError } from "./errors/app.error";

const app = new Hono();
const port = Number(process.env.PORT) || 3000;

app.route("/api", mainRoute);

app.onError((err, c) => {
  if(err instanceof AppError){
    return c.json(
    {
      message: err.message,
    },
    err.statusCode
  );
  }
  console.error(err);

  return c.json(
    {
      message: "Internal server Error",
    },
    500
  );
})

app.get("/", (c) => {
  return c.json({
    message: "Atur seplenger mungkin",
  });
});

console.log(`Server running at http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});

export default app;
