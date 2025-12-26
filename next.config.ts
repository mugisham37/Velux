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
        pathname: '/cdn/shop/**',
      },
      {
        protocol: 'https',
        hostname: 'notsellingliquid.com',
        pathname: '/cdn/shop/**',
      },
      {
        protocol: 'http',
        hostname: 'www.notsellingliquid.com',
        pathname: '/cdn/shop/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow images with query strings
    unoptimized: false,
  },
}

export default nextConfig;
