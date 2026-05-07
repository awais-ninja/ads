import { ImageResponse } from "next/og";

export const alt = "Awais Digital Services (ADS) – Affordable Website Design & Digital Marketing UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1120 0%, #1a2744 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Awais Digital Services
          </div>
          <div
            style={{
              width: 120,
              height: 4,
              background: "#c80000",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Affordable Website Design, Branding & Digital Marketing for UK Startups & Small Businesses
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              marginTop: 24,
            }}
          >
            www.awaisdigitalservices.co.uk
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
