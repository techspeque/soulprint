interface ErrorBannerProps {
  error: string;
  onReset?: () => void;
}

export default function ErrorBanner({ error, onReset }: ErrorBannerProps) {
  return (
    <div
      style={{
        marginTop: "24px",
        padding: "14px 20px",
        background: "rgba(220,38,38,0.08)",
        border: "1px solid rgba(220,38,38,0.2)",
        borderRadius: "6px",
        fontSize: "13px",
        color: "#F87171",
        maxWidth: "520px",
        width: "100%",
      }}
    >
      {error}
      {onReset && (
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
      )}
    </div>
  );
}
