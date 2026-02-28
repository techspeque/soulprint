import { AnalysisCluster } from "./ResultsView";

interface EmotionalSpectrumProps {
  clusters: AnalysisCluster[];
  selectedCluster: number | null;
  setSelectedCluster: (i: number | null) => void;
}

export default function EmotionalSpectrum({
  clusters,
  selectedCluster,
  setSelectedCluster,
}: EmotionalSpectrumProps) {
  return (
    <div
      style={{
        padding: "40px 32px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "14px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        Emotional Spectrum
      </div>
      <div
        style={{
          display: "flex",
          height: "28px",
          borderRadius: "4px",
          overflow: "hidden",
          gap: "2px",
        }}
      >
        {clusters.map((c, i) => (
          <div
            key={i}
            style={{
              flex: c.trackCount || c.tracks?.length || 5,
              background: c.color || "#E8927C",
              opacity:
                selectedCluster === i
                  ? 1
                  : selectedCluster !== null
                    ? 0.15
                    : 0.55,
              transition: "opacity 0.3s",
              cursor: "pointer",
            }}
            onClick={() =>
              setSelectedCluster(selectedCluster === i ? null : i)
            }
            title={`${c.name}: ${c.emotion}`}
          />
        ))}
      </div>
    </div>
  );
}
