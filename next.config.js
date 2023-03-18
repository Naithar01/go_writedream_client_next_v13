/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://ec2-3-34-53-123.ap-northeast-2.compute.amazonaws.com:8080/api/:path*/",
      },
    ];
  },
}

module.exports = nextConfig
