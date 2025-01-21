/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  experimental: {
    // This is experimental but can be enabled to allow for more efficient builds
    forceSwcTransforms: true
  }
}

module.exports = nextConfig 