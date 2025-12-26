/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://client.crisp.chat https://settings.crisp.chat https://va.vercel-scripts.com https://connect.facebook.net;
      style-src 'self' 'unsafe-inline' https://client.crisp.chat;
      img-src 'self' blob: data: https://image.crisp.chat;
      font-src 'self' https://client.crisp.chat;
      connect-src 'self' https://client.crisp.chat wss://client.crisp.chat wss://stream.crisp.chat wss://client.relay.crisp.chat https://vitals.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://region1.google-analytics.com https://region2.google-analytics.com https://region3.google-analytics.com https://region4.google-analytics.com https://region5.google-analytics.com https://region6.google-analytics.com https://region7.google-analytics.com https://region8.google-analytics.com https://region9.google-analytics.com https://*.analytics.google.com https://region1.analytics.google.com https://region2.analytics.google.com https://region3.analytics.google.com https://region4.analytics.google.com https://region5.analytics.google.com https://region6.analytics.google.com https://region7.analytics.google.com https://region8.analytics.google.com https://region9.analytics.google.com https://analytics.google.com;
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
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www (canonical domain)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "awaisdigitalservices.co.uk",
          },
        ],
        destination: "https://www.awaisdigitalservices.co.uk/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/appspecific/com.chrome.devtools.json",
        destination: "/api/chrome-devtools",
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
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
