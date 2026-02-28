import { useRef } from "react";

interface UploadStepProps {
  dragOver: boolean;
  setDragOver: (v: boolean) => void;
  onFile: (file: File) => void;
  onDemo: () => void;
  error: string | null;
}

export default function UploadStep({
  dragOver,
  setDragOver,
  onFile,
  onDemo,
  error,
}: UploadStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onFile(file);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px 48px",
        animation: "fadeUp 0.6s ease",
      }}
    >
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

      {/* Upload zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          width: "100%",
          maxWidth: "520px",
          border: `2px dashed ${dragOver ? "#E8927C" : "rgba(255,255,255,0.1)"}`,
          borderRadius: "8px",
          padding: "48px 32px",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          background: dragOver
            ? "rgba(232,146,124,0.04)"
            : "rgba(255,255,255,0.02)",
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.tsv,.txt"
          style={{ display: "none" }}
          onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
        />
        <div style={{ fontSize: "36px", marginBottom: "16px", opacity: 0.5 }}>
          ◎
        </div>
        <div style={{ fontSize: "15px", color: "#AAA", marginBottom: "8px" }}>
          Drop your playlist CSV here, or click to browse
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#555",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Supports YouTube Music, Spotify exports, or any CSV with song titles &
          artists
        </div>
      </div>

      {/* Format help */}
      <div
        style={{
          marginTop: "24px",
          fontSize: "12px",
          color: "#444",
          textAlign: "center",
          maxWidth: "480px",
          lineHeight: "1.6",
        }}
      >
        <span style={{ color: "#666" }}>Accepted formats:</span> CSV with
        columns for Song Title and Artist Name. Export from{" "}
        <a
          href="https://watsonbox.github.io/exportify/"
          target="_blank"
          rel="noopener"
          style={{ color: "#E8927C99", textDecoration: "none" }}
        >
          Spotify (Exportify)
        </a>
        , YouTube Music takeout, or any spreadsheet with song data.
      </div>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          margin: "32px 0",
          width: "100%",
          maxWidth: "520px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            color: "#444",
            fontFamily: "'Courier New', monospace",
          }}
        >
          OR
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      </div>

      {/* Demo button */}
      <button
        onClick={onDemo}
        style={{
          background: "rgba(232,146,124,0.08)",
          border: "1px solid rgba(232,146,124,0.2)",
          color: "#E8927C",
          padding: "12px 28px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "13px",
          letterSpacing: "1px",
          fontFamily: "'Courier New', monospace",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(232,146,124,0.14)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(232,146,124,0.08)")
        }
      >
        Try with a sample playlist →
      </button>

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
            maxWidth: "520px",
            width: "100%",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
