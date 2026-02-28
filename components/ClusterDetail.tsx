import { AnalysisCluster } from "./ResultsView";

interface ClusterDetailProps {
  cluster: AnalysisCluster;
}

export default function ClusterDetail({ cluster: c }: ClusterDetailProps) {
  return (
    <div
      style={{
        background: "#0B0B0E",
        borderTop: `2px solid ${c.color || "#E8927C"}`,
        padding: "40px 32px",
        animation: "fadeUp 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "760px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "28px" }}>{c.icon || "◈"}</span>
          <div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "400",
                margin: 0,
                color: "#F5F5F5",
              }}
            >
              {c.name}
            </h2>
            <div
              style={{
                fontSize: "14px",
                color: c.color || "#E8927C",
                fontStyle: "italic",
              }}
            >
              {c.emotion}
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.75",
            color: "#B5B5B5",
            marginBottom: "28px",
            borderLeft: `2px solid ${c.color || "#E8927C"}33`,
            paddingLeft: "20px",
          }}
        >
          {c.analysis}
        </p>

        {/* Subgenres */}
        {c.subgenres && c.subgenres.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "12px",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Subgenres
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              {c.subgenres.map((sub, j) => (
                <div
                  key={j}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    padding: "12px 16px",
                    borderRadius: "4px",
                    borderLeft: `2px solid ${c.color || "#E8927C"}44`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#CCC",
                      marginBottom: "3px",
                    }}
                  >
                    {sub.name}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      fontStyle: "italic",
                    }}
                  >
                    {sub.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Artists & Tracks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          {c.artists && c.artists.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "10px",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                Artists
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {c.artists.slice(0, 15).map((a, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "11px",
                      padding: "3px 8px",
                      background: `${c.color || "#E8927C"}12`,
                      border: `1px solid ${c.color || "#E8927C"}25`,
                      borderRadius: "3px",
                      color: "#AAA",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
          {c.tracks && c.tracks.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "10px",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                Tracks
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#888",
                  lineHeight: "1.9",
                }}
              >
                {c.tracks.slice(0, 10).map((t, j) => (
                  <div key={j}>
                    <span
                      style={{
                        color: `${c.color || "#E8927C"}66`,
                        marginRight: "6px",
                        fontFamily: "monospace",
                        fontSize: "10px",
                      }}
                    >
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
