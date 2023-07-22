import { build, BuildOptions } from "esbuild";

const shared = {
  bundle: true,
  entryPoints: ["src/index.ts", "src/async/index.ts", "src/sync/index.ts"],
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
    outExtension: { ".js": ".mjs" },
    splitting: true,
  }),
  build({
    ...shared,
    format: "cjs",
    outExtension: { ".js": ".cjs" },
  }),
]);
