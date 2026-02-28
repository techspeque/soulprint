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
        }}
      >
        <span style={{ color: "#E8927C55" }}>SOUL</span>
        <span style={{ color: "#55555588" }}>PRINT</span>
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
