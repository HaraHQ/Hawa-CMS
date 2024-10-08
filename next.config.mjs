/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.mode = "development";
    }
    return config;
  },
};

export default nextConfig;
