import { AnalysisCluster } from "./ResultsView";

interface ClusterGridProps {
  clusters: AnalysisCluster[];
  selectedCluster: number | null;
  setSelectedCluster: (i: number | null) => void;
}

export default function ClusterGrid({
  clusters,
  selectedCluster,
  setSelectedCluster,
}: ClusterGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1px",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {clusters.map((cluster, i) => (
        <button
          key={i}
          onClick={() =>
            setSelectedCluster(selectedCluster === i ? null : i)
          }
          style={{
            background:
              selectedCluster === i
                ? `linear-gradient(135deg, ${cluster.color}18, #07070A)`
                : "#07070A",
            border: "none",
            padding: "26px 22px",
            textAlign: "left",
            cursor: "pointer",
            transition: "all 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            if (selectedCluster !== i)
              e.currentTarget.style.background = "#0D0D10";
          }}
          onMouseLeave={(e) => {
            if (selectedCluster !== i)
              e.currentTarget.style.background = "#07070A";
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "3px",
              height: "100%",
              background: cluster.color || "#E8927C",
              opacity: selectedCluster === i ? 1 : 0.25,
              transition: "opacity 0.3s",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "20px", opacity: 0.7 }}>
              {cluster.icon || "◈"}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontFamily: "'Courier New', monospace",
                color: cluster.color || "#E8927C",
                opacity: 0.7,
              }}
            >
              {cluster.trackCount || cluster.tracks?.length || "?"} tracks
            </span>
          </div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#E5E5E5",
              marginBottom: "5px",
            }}
          >
            {cluster.name}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: cluster.color || "#E8927C",
              fontStyle: "italic",
              opacity: 0.85,
            }}
          >
            {cluster.emotion}
          </div>
        </button>
      ))}
    </div>
  );
}
