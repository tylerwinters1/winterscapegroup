/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['example.com', 'images.unsplash.com'], // Add your image domains here
    unoptimized: true,
  },
}

export default nextConfig
