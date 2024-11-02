import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // partial prerendering for specific routes
  },
};

export default nextConfig;
