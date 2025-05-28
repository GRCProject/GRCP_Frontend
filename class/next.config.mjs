/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // rewrites 추가
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:8080/:path*`, // ngrok URL로 변경하세요
      },
    ];
  },
};

export default nextConfig;
