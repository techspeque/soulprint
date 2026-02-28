import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
        paddingTop: "min(20vh, 160px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 100,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          fontSize: "11px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "#E8927C",
          marginBottom: "20px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        Discover your emotional architecture
      </div>

      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: "400",
          textAlign: "center",
          lineHeight: "1.15",
          color: "#F0F0F0",
          margin: "0 0 16px 0",
          letterSpacing: "-1px",
        }}
      >
        Your music knows
        <br />
        <span style={{ color: "#E8927C" }}>who you really are</span>
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#777",
          textAlign: "center",
          maxWidth: "480px",
          lineHeight: "1.7",
          marginBottom: "48px",
        }}
      >
        Upload your playlist and let AI reveal the emotional patterns hidden in
        your music — what you&apos;re protecting, what you&apos;re seeking, and
        the tension that defines you.
      </p>

      <Link
        href="/login"
        style={{
          background: "rgba(232,146,124,0.12)",
          border: "1px solid rgba(232,146,124,0.3)",
          color: "#E8927C",
          padding: "14px 32px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px",
          letterSpacing: "1px",
          fontFamily: "'Courier New', monospace",
          transition: "all 0.2s ease",
        }}
      >
        Get started →
      </Link>

      {/* Roadmap section */}
      <div
        style={{
          marginTop: "96px",
          width: "100%",
          maxWidth: "560px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#E8927C",
            marginBottom: "24px",
            fontFamily: "'Courier New', monospace",
            textAlign: "center",
          }}
        >
          Coming Soon
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {[
            {
              name: "YouTube Music Integration",
              description:
                "Connect YouTube Music to automatically pull your listening data.",
            },
            {
              name: "Spotify Integration",
              description:
                "Connect Spotify to automatically pull your listening data.",
            },
            {
              name: "Auto-Pull Most-Listened Songs",
              description:
                "Automatically sample the songs you listen to most — no manual upload.",
            },
            {
              name: "Shareable Stories",
              description:
                "Generate a story card from your soulprint, shareable to Instagram & TikTok.",
            },
          ].map((feature) => (
            <div
              key={feature.name}
              style={{
                border: "1px solid rgba(232,146,124,0.12)",
                borderRadius: "8px",
                padding: "20px 24px",
                background: "rgba(232,146,124,0.03)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#F0F0F0",
                  marginBottom: "4px",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {feature.name}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "64px",
          marginBottom: "24px",
          fontSize: "12px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        <Link
          href="/privacy"
          style={{ color: "#555", textDecoration: "none" }}
        >
          Privacy Policy
        </Link>
        <span style={{ color: "#333" }}> · </span>
        <Link
          href="/roadmap"
          style={{ color: "#555", textDecoration: "none" }}
        >
          Roadmap
        </Link>
      </div>
    </div>
  );
}
