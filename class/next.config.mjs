/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // rewrites 추가
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://7f6b-1-227-117-250.ngrok-free.app/GRCP_Backend/api/:path*`, // ngrok URL로 변경하세요
      },
    ];
  },
};

export default nextConfig;
