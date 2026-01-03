import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add empty turbopack config to silence the warning
  turbopack: {},
  
  // Webpack optimizations
  webpack: (config, { dev }) => {
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
    ],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Set minimum cache TTL
    minimumCacheTTL: 60,
    // Device and image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig;
