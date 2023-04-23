/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://ec2-15-164-129-199.ap-northeast-2.compute.amazonaws.com:8080/api/:path*/",
        // http://ec2-15-164-129-199.ap-northeast-2.compute.amazonaws.com:8080/api/:path*/ Deploy 
        // http://localhost:8080/api/:path*/ Loadl
      },
    ];
  },
  images: {
    domains: ['localhost', 'ec2-15-164-129-199.ap-northeast-2.compute.amazonaws.com'],
  },
}

module.exports = nextConfig
