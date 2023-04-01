import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["src/**/index.ts", "benchmarks/**/*", "tests/**/*"],
    },
  },
});
