/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*/",
        // http://ec2-3-34-53-123.ap-northeast-2.compute.amazonaws.com:8080/api/:path*/ Deploy 
        // http://localhost:8080/api/:path*/ Loadl
      },
    ];
  },
  images: {
    domains: ['localhost', 'ec2-3-34-53-123.ap-northeast-2.compute.amazonaws.com'],
  },
}

module.exports = nextConfig
