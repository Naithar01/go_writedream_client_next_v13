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
        destination: "http://ec2-3-39-230-239.ap-northeast-2.compute.amazonaws.com:8080/:path*/",
      },
    ];
  },
}

module.exports = nextConfig
