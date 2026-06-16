import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.use(
  "/public/*",
  serveStatic({
    root: "./public",
    rewriteRequestPath: (path) =>
      path.replace(/^\/public\/?/, "").replace(/^\//, "") || ".",
  }),
);

// Storage file serving
app.use(
  "/storage/*",
  serveStatic({
    root: "./storage",
  }),
);
export default app;
