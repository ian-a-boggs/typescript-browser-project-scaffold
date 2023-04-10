import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  watch: true,
  nodeResolve: true,
  rootDir: "src/",
  appIndex: "src/index.html",
  plugins: [esbuildPlugin({ ts: true, target: "es2021" })],
  middleware: [
    function rewriteJs(context, next) {
      context.url = context.url.replace(/\.js/u, ".ts");
      context.url = context.url.replace(
        "/__web-dev-server__web-socket.ts",
        "/__web-dev-server__web-socket.js",
      );
      return next();
    },
  ],
};
