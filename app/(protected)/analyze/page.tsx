"use client";

import { useState } from "react";
import { parseCSV } from "@/lib/csv";
import { DEMO_SONGS } from "@/lib/demo-songs";
import { Song } from "@/lib/csv";
import { AnalysisResult } from "@/components/ResultsView";
import GrainOverlay from "@/components/GrainOverlay";
import Header from "@/components/Header";
import UploadStep from "@/components/UploadStep";
import AnalyzingStep from "@/components/AnalyzingStep";
import ResultsView from "@/components/ResultsView";

export default function AnalyzePage() {
  const [step, setStep] = useState(0); // 0=upload, 1=analysing, 2=results
  const [songs, setSongs] = useState<Song[]>([]);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFile(file: File) {
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = parseCSV(e.target?.result as string);
        setSongs(parsed);
        runAnalysis(parsed);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    reader.readAsText(file);
  }

  async function runAnalysis(songList: Song[]) {
    setStep(1);
    setProgress(0);
    setError(null);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 8;
      });
    }, 600);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songs: songList }),
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Analysis failed");
      }

      const result: AnalysisResult = await response.json();

      if (!result.clusters || !result.tension) {
        throw new Error("Incomplete analysis returned");
      }

      setAnalysis(result);
      setTimeout(() => setStep(2), 800);
    } catch (err) {
      clearInterval(progressInterval);
      setError(`Analysis failed: ${(err as Error).message}. Please try again.`);
      setStep(0);
    }
  }

  function reset() {
    setStep(0);
    setSongs([]);
    setAnalysis(null);
    setError(null);
    setProgress(0);
    setSelectedCluster(null);
  }

  function loadDemo() {
    setSongs(DEMO_SONGS);
    runAnalysis(DEMO_SONGS);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070A",
        color: "#D4D4D8",
        fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GrainOverlay />
      <Header step={step} onReset={reset} />

      {step === 0 && (
        <UploadStep
          dragOver={dragOver}
          setDragOver={setDragOver}
          onFile={handleFile}
          onDemo={loadDemo}
          error={error}
        />
      )}

      {step === 1 && (
        <AnalyzingStep
          songCount={songs.length}
          progress={progress}
          error={error}
          onReset={reset}
        />
      )}

      {step === 2 && analysis && (
        <ResultsView
          analysis={analysis}
          songCount={songs.length}
          selectedCluster={selectedCluster}
          setSelectedCluster={setSelectedCluster}
          onReset={reset}
        />
      )}
    </div>
  );
}
