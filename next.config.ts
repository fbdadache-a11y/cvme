import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  // إعداداتك الأصلية
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // الإعدادات الجديدة لإصلاح مشكلة GitHub Pages
  basePath: isGithubActions ? "/cvme" : "",
  assetPrefix: isGithubActions ? "/cvme/" : "",
};

export default nextConfig;
