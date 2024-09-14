/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
         protocol: "https",
         hostname: "*.google.com",
      }
      
    ]
  }
};

export default nextConfig;
