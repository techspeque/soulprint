import Link from "next/link";

interface FooterProps {
  onReset: () => void;
}

export default function Footer({ onReset }: FooterProps) {
  return (
    <div
      style={{
        padding: "24px 32px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#333",
          fontFamily: "'Courier New', monospace",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span>
          <span style={{ color: "#E8927C55" }}>SOUL</span>
          <span style={{ color: "#55555588" }}>PRINT</span>
        </span>
        <Link
          href="/privacy"
          style={{
            color: "#555",
            textDecoration: "none",
            fontSize: "11px",
          }}
        >
          Privacy
        </Link>
        <Link
          href="/roadmap"
          style={{
            color: "#555",
            textDecoration: "none",
            fontSize: "11px",
          }}
        >
          Roadmap
        </Link>
      </div>
      <button
        onClick={onReset}
        style={{
          background: "none",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#666",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        Analyse another playlist
      </button>
    </div>
  );
}
