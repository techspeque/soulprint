interface SummaryPanelProps {
  summary: string;
}

export default function SummaryPanel({ summary }: SummaryPanelProps) {
  return (
    <div
      style={{
        padding: "48px 32px 64px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "20px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        The Emotional Architecture
      </div>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.8",
          color: "#AAA",
          maxWidth: "640px",
        }}
      >
        {summary}
      </p>
    </div>
  );
}
