import type { NextConfig } from "next";

// GitHub Pages serves this project at https://<user>.github.io/<repo>/.
// The deploy workflow sets PAGES_BASE_PATH (e.g. "/ivan-portfolio-v2"); locally it is empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build a fully static site into ./out for GitHub Pages.
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Static export has no image optimizer; this loader just prefixes basePath.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
