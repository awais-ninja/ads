/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://client.crisp.chat https://settings.crisp.chat https://va.vercel-scripts.com;
      style-src 'self' 'unsafe-inline' https://client.crisp.chat;
      img-src 'self' blob: data: https://image.crisp.chat;
      font-src 'self' https://client.crisp.chat;
      connect-src 'self' https://client.crisp.chat wss://client.crisp.chat wss://stream.crisp.chat https://vitals.vercel-insights.com;
      frame-src 'self' https://app.crisp.chat;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `;

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@heroicons/react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
