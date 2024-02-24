import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  dts: true,
  external: ["react", "react-dom"],
  bundle: true,
  format: ["esm"],
  clean: true,
  sourcemap: true,
});
