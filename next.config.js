/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "sbtmauspygekngsauqjd.supabase.co",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
