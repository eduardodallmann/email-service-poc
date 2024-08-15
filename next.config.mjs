/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/_error',
        destination: '/preview',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
