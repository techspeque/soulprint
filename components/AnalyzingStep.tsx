interface AnalyzingStepProps {
  songCount: number;
  progress: number;
  error: string | null;
  onReset: () => void;
}

export default function AnalyzingStep({
  songCount,
  progress,
  error,
  onReset,
}: AnalyzingStepProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px",
        animation: "fadeUp 0.6s ease",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          border: "2px solid rgba(232,146,124,0.2)",
          borderTopColor: "#E8927C",
          animation: "spin 1s linear infinite",
          marginBottom: "32px",
        }}
      />

      <h2
        style={{
          fontSize: "24px",
          fontWeight: "400",
          color: "#E5E5E5",
          margin: "0 0 12px 0",
        }}
      >
        Reading your emotional architecture
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "32px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Analysing {songCount} tracks across genre, mood, and emotional
        pattern...
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "3px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #E8927C, #C47A8C)",
            transition: "width 0.4s ease",
            borderRadius: "2px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "11px",
          color: "#444",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {progress < 30
          ? "Classifying genres..."
          : progress < 60
            ? "Mapping emotional patterns..."
            : progress < 90
              ? "Identifying core tensions..."
              : "Composing your soulprint..."}
      </div>

      {error && (
        <div
          style={{
            marginTop: "24px",
            padding: "14px 20px",
            background: "rgba(220,38,38,0.08)",
            border: "1px solid rgba(220,38,38,0.2)",
            borderRadius: "6px",
            fontSize: "13px",
            color: "#F87171",
          }}
        >
          {error}
          <button
            onClick={onReset}
            style={{
              display: "block",
              marginTop: "12px",
              background: "none",
              border: "1px solid rgba(248,113,113,0.3)",
              color: "#F87171",
              padding: "6px 14px",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
