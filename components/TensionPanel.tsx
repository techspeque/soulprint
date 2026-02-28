interface TensionPanelProps {
  tension: {
    protecting: string[];
    seeking: string[];
  };
}

export default function TensionPanel({ tension }: TensionPanelProps) {
  return (
    <div
      style={{
        padding: "48px 32px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "#06060A",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          maxWidth: "720px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#DC2626",
              marginBottom: "18px",
              fontFamily: "'Courier New', monospace",
            }}
          >
            What you&apos;re protecting
          </div>
          {tension.protecting.map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: "14px",
                color: "#AAA",
                lineHeight: "1.7",
                marginBottom: "12px",
                paddingLeft: "16px",
                borderLeft: "2px solid rgba(220,38,38,0.2)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#E8927C",
              marginBottom: "18px",
              fontFamily: "'Courier New', monospace",
            }}
          >
            What you&apos;re seeking
          </div>
          {tension.seeking.map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: "14px",
                color: "#AAA",
                lineHeight: "1.7",
                marginBottom: "12px",
                paddingLeft: "16px",
                borderLeft: "2px solid rgba(232,146,124,0.3)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
