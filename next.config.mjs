/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { bodySizeLimit: "12mb" } },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/uploads/:filename",
          destination: "/api/legacy-files/:filename",
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/math-profile/main-hub",
        destination: "/math-profile",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
