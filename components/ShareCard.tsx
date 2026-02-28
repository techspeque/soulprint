import { forwardRef } from "react";
import { AnalysisResult } from "./ResultsView";

interface ShareCardProps {
  analysis: AnalysisResult;
  songCount: number;
}

const W = 1080;
const H = 1920;

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ analysis, songCount }, ref) => {
    const topClusters = analysis.clusters.slice(0, 6);

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: `${W}px`,
          height: `${H}px`,
          background: "#07070A",
          color: "#D4D4D8",
          fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
          display: "flex",
          flexDirection: "column",
          padding: "80px 72px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#555",
            fontFamily: "'Courier New', monospace",
            marginBottom: "48px",
          }}
        >
          SOULPRINT
        </div>

        {/* One-liner */}
        {analysis.oneLiner && (
          <div
            style={{
              fontSize: "38px",
              fontStyle: "italic",
              color: "#E8927C",
              lineHeight: "1.5",
              borderLeft: "4px solid rgba(232,146,124,0.4)",
              paddingLeft: "32px",
              marginBottom: "64px",
              maxHeight: "280px",
              overflow: "hidden",
            }}
          >
            &ldquo;{analysis.oneLiner}&rdquo;
          </div>
        )}

        {/* Spectrum label */}
        <div
          style={{
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#555",
            fontFamily: "'Courier New', monospace",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          &mdash; Emotional Spectrum &mdash;
        </div>

        {/* Spectrum bar */}
        <div
          style={{
            display: "flex",
            height: "40px",
            borderRadius: "6px",
            overflow: "hidden",
            gap: "3px",
            marginBottom: "64px",
          }}
        >
          {analysis.clusters.map((c, i) => (
            <div
              key={i}
              style={{
                flex: c.trackCount || c.tracks?.length || 5,
                background: c.color || "#E8927C",
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Cluster list */}
        <div style={{ marginBottom: "64px", flexGrow: 1 }}>
          {topClusters.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "28px",
                gap: "20px",
              }}
            >
              <div style={{ fontSize: "36px", lineHeight: "1", flexShrink: 0, width: "44px", textAlign: "center" }}>
                {c.icon || "\u25C8"}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "28px",
                    color: "#E5E5E5",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    color: c.color || "#E8927C",
                    fontStyle: "italic",
                    marginTop: "4px",
                  }}
                >
                  {c.emotion}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tension */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Protecting */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#DC2626",
                fontFamily: "'Courier New', monospace",
                marginBottom: "16px",
              }}
            >
              Protecting
            </div>
            {analysis.tension.protecting.slice(0, 3).map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "21px",
                  color: "#AAA",
                  marginBottom: "10px",
                  lineHeight: "1.4",
                }}
              >
                &bull; {item}
              </div>
            ))}
          </div>
          {/* Seeking */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#E8927C",
                fontFamily: "'Courier New', monospace",
                marginBottom: "16px",
              }}
            >
              Seeking
            </div>
            {analysis.tension.seeking.slice(0, 3).map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "21px",
                  color: "#AAA",
                  marginBottom: "10px",
                  lineHeight: "1.4",
                }}
              >
                &bull; {item}
              </div>
            ))}
          </div>
        </div>

        {/* Stats + watermark */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "3px",
              color: "#555",
              fontFamily: "'Courier New', monospace",
              textTransform: "uppercase",
            }}
          >
            {songCount} tracks &middot; {analysis.clusters.length} clusters
          </div>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "2px",
              color: "#E8927C",
              fontFamily: "'Courier New', monospace",
            }}
          >
            soulprint.fyi
          </div>
        </div>
      </div>
    );
  }
);

ShareCard.displayName = "ShareCard";

export default ShareCard;
