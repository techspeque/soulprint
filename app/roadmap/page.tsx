import Link from "next/link";

export const metadata = {
  title: "Roadmap — Soulprint",
};

const features = [
  {
    name: "YouTube Music Integration",
    description:
      "Connect your YouTube Music account to automatically pull your listening data into Soulprint.",
  },
  {
    name: "Spotify Integration",
    description:
      "Connect your Spotify account to automatically pull your listening data into Soulprint.",
  },
  {
    name: "Auto-Pull Most-Listened Songs",
    description:
      "Automatically sample the songs you listen to most instead of uploading a playlist manually.",
  },
  {
    name: "Shareable Stories",
    description:
      "Generate a predefined story or card from your soulprint, shareable directly to Instagram and TikTok.",
  },
];

export default function RoadmapPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "64px 32px",
        maxWidth: "680px",
        margin: "0 auto",
        fontFamily: "'Courier New', monospace",
        color: "#ccc",
        lineHeight: "1.8",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "12px",
          color: "#555",
          textDecoration: "none",
          letterSpacing: "1px",
        }}
      >
        ← Back
      </Link>

      <h1
        style={{
          fontSize: "28px",
          fontWeight: "400",
          color: "#F0F0F0",
          marginTop: "32px",
          marginBottom: "8px",
          letterSpacing: "-0.5px",
        }}
      >
        Roadmap
      </h1>

      <p style={{ fontSize: "12px", color: "#555", marginBottom: "48px" }}>
        What we&apos;re building next
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {features.map((feature) => (
          <div
            key={feature.name}
            style={{
              border: "1px solid rgba(232,146,124,0.15)",
              borderRadius: "8px",
              padding: "24px",
              background: "rgba(232,146,124,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#F0F0F0",
                  margin: 0,
                }}
              >
                {feature.name}
              </h2>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#E8927C",
                  border: "1px solid rgba(232,146,124,0.3)",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                Coming Soon
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                margin: 0,
                lineHeight: "1.7",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
