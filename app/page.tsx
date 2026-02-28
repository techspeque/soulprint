import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
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

      <div
        style={{
          position: "absolute",
          bottom: "24px",
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
      </div>
    </div>
  );
}
