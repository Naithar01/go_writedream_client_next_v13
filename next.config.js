/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://ec2-3-39-230-239.ap-northeast-2.compute.amazonaws.com:8080/:path*/",
      },
    ];
  },
}

module.exports = nextConfig
