import { STEP_LABELS } from "@/lib/constants";

interface HeaderProps {
  step: number;
  onReset: () => void;
}

export default function Header({ step, onReset }: HeaderProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(7,7,10,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "1px",
          color: "#F5F5F5",
        }}
      >
        <span style={{ color: "#E8927C" }}>SOUL</span>PRINT
      </div>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {STEP_LABELS.map((label, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              opacity: step === i ? 1 : 0.3,
              transition: "opacity 0.5s ease",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: step === i ? "#E8927C" : "#555",
                transition: "background 0.5s ease",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Courier New', monospace",
                color: step === i ? "#CCC" : "#555",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      {step === 2 && (
        <button
          onClick={onReset}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#999",
            padding: "6px 14px",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "11px",
            letterSpacing: "1px",
            fontFamily: "'Courier New', monospace",
            textTransform: "uppercase",
          }}
        >
          New Analysis
        </button>
      )}
    </div>
  );
}
