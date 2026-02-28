"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleConsent(value: "accepted" | "declined") {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "16px 24px",
        background: "rgba(18, 18, 18, 0.95)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
        fontFamily: "'Courier New', monospace",
        animation: "slideUp 0.3s ease-out",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <p
        style={{
          fontSize: "13px",
          color: "#888",
          margin: 0,
          lineHeight: "1.5",
        }}
      >
        This site uses essential cookies for authentication.{" "}
        <Link
          href="/privacy"
          style={{ color: "#E8927C", textDecoration: "none" }}
        >
          Privacy Policy
        </Link>
      </p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => handleConsent("accepted")}
          style={{
            background: "rgba(232,146,124,0.15)",
            border: "1px solid rgba(232,146,124,0.3)",
            color: "#E8927C",
            padding: "8px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.5px",
          }}
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent("declined")}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#555",
            padding: "8px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.5px",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
