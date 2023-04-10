import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
  files: ["src/**/*.test.js", "src/**.*test.ts", "test/**/*.js", "test/**..ts"],
  plugins: [esbuildPlugin({ ts: true, target: "es2021" })],
  esbuildTarget: "es2021",
  nodeResolve: true,
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
};
