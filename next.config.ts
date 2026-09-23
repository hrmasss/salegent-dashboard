import type { NextConfig } from "next"

/*
 * Static export. On GitHub Pages the site lives under /<repo>, so CI sets
 * NEXT_PUBLIC_BASE_PATH=/salegent-dashboard. Locally it is served from /.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
