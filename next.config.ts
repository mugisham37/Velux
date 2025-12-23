import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      // Reduce memory usage
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    
    return config
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Updated image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notsellingliquid.com',
      },
      {
        protocol: 'https',
        hostname: 'notsellingliquid.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig;
