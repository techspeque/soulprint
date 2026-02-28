import { useRef, useState } from "react";
import ClusterGrid from "./ClusterGrid";
import ClusterDetail from "./ClusterDetail";
import EmotionalSpectrum from "./EmotionalSpectrum";
import TensionPanel from "./TensionPanel";
import SummaryPanel from "./SummaryPanel";
import Footer from "./Footer";
import ShareCard from "./ShareCard";
import { captureShareCard } from "@/lib/share";

export interface AnalysisCluster {
  name: string;
  emotion: string;
  color: string;
  icon: string;
  trackCount?: number;
  artists?: string[];
  tracks?: string[];
  analysis: string;
  subgenres?: { name: string; note: string }[];
}

export interface AnalysisResult {
  clusters: AnalysisCluster[];
  tension: {
    protecting: string[];
    seeking: string[];
  };
  summary: string;
  oneLiner?: string;
}

interface ResultsViewProps {
  analysis: AnalysisResult;
  songCount: number;
  selectedCluster: number | null;
  setSelectedCluster: (i: number | null) => void;
  onReset: () => void;
}

export default function ResultsView({
  analysis,
  songCount,
  selectedCluster,
  setSelectedCluster,
  onReset,
}: ResultsViewProps) {
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);

  async function handleDownload() {
    if (!shareCardRef.current || sharing) return;
    setSharing(true);
    try {
      await captureShareCard(shareCardRef.current);
    } finally {
      setSharing(false);
    }
  }

  return (
    <div style={{ paddingTop: "60px", animation: "fadeUp 0.8s ease" }}>
      <ShareCard ref={shareCardRef} analysis={analysis} songCount={songCount} />
      {/* Hero */}
      <div
        style={{
          padding: "64px 32px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(232,146,124,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "12px",
            fontFamily: "'Courier New', monospace",
          }}
        >
          {songCount} tracks · {analysis.clusters.length} genre clusters · 1
          soulprint
        </div>

        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: "400",
            margin: "0 0 20px 0",
            lineHeight: "1.2",
            color: "#F5F5F5",
            maxWidth: "680px",
          }}
        >
          Your Soulprint
        </h1>

        {analysis.oneLiner && (
          <div
            style={{
              fontSize: "17px",
              fontStyle: "italic",
              color: "#E8927C",
              maxWidth: "600px",
              lineHeight: "1.6",
              borderLeft: "2px solid rgba(232,146,124,0.3)",
              paddingLeft: "20px",
            }}
          >
            &ldquo;{analysis.oneLiner}&rdquo;
          </div>
        )}

        <button
          onClick={handleDownload}
          disabled={sharing}
          style={{
            marginTop: "24px",
            padding: "10px 20px",
            background: "transparent",
            border: "1px solid rgba(232,146,124,0.3)",
            color: "#E8927C",
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: "'Courier New', monospace",
            cursor: sharing ? "wait" : "pointer",
            opacity: sharing ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {sharing ? "Generating..." : "Download Story"}
        </button>
      </div>

      <ClusterGrid
        clusters={analysis.clusters}
        selectedCluster={selectedCluster}
        setSelectedCluster={setSelectedCluster}
      />

      {selectedCluster !== null && analysis.clusters[selectedCluster] && (
        <ClusterDetail cluster={analysis.clusters[selectedCluster]} />
      )}

      <EmotionalSpectrum
        clusters={analysis.clusters}
        selectedCluster={selectedCluster}
        setSelectedCluster={setSelectedCluster}
      />

      <TensionPanel tension={analysis.tension} />

      <SummaryPanel summary={analysis.summary} />

      <Footer onReset={onReset} />
    </div>
  );
}
