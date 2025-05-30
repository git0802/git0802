import type { NextConfig } from "next";
import bundeAnalyzer from "@next/bundle-analyzer";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/work",
      destination: "/work/skills-and-tools",
      permanent: false,
    },
    {
      source: "/docs",
      destination: "/docs/tailwindcss-accent",
      permanent: false,
    },
  ],
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(
  withMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
    },
  })(nextConfig)
);
