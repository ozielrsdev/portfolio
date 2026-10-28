import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Rotas da versão antiga (SPA com páginas separadas) apontam para as seções da página única.
  async redirects() {
    return [
      { source: '/projects', destination: '/#projetos', permanent: true },
      { source: '/contact', destination: '/#contato', permanent: true },
    ]
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
