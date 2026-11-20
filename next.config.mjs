/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ['x-blogs-ten.vercel.app', 'www.xushnud.dev'].map((hostname) => ({
      source: '/:path*',
      has: [{ type: 'host', value: hostname }],
      destination: 'https://xushnud.dev/:path*',
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
