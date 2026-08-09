import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();
const port = Number(process.env.PORT) || 3000;

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
