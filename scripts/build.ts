import { build, BuildOptions } from "esbuild";
import { swcPlugin } from "esbuild-plugin-swc";

const shared = {
  bundle: true,
  entryPoints: ["src/index.ts", "src/async/index.ts", "src/sync/index.ts"],
  plugins: [swcPlugin()],
  logLevel: "info",
  minify: true,
  platform: "node",
  sourcemap: "linked",
  treeShaking: true,
  outdir: "dist",
  target: ["esnext", "node18.0.0"],
} as BuildOptions;

Promise.all([
  build({
    ...shared,
    format: "esm",
    outExtension: { ".js": ".mjs.js" },
    splitting: true,
  }),
  build({
    ...shared,
    format: "cjs",
    outExtension: { ".js": ".cjs.js" },
  }),
]);
