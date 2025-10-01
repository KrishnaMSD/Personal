import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = withMDX({
  experimental: {
    optimizeCss: true,
  },
  typedRoutes: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
});

export default nextConfig;
