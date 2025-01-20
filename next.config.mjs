/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 segundos
    pagesBufferLength: 2,
  },
  experimental: {
    runtime: 'nodejs',
    serverComponentsExternalPackages: ['react', 'react-dom'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/page',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;