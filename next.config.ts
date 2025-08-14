import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    unoptimized: true, // Required for Netlify to serve images correctly
  },
}

export default nextConfig

