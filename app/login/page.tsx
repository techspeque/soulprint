"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const verify = searchParams.get("verify") === "true";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await signIn("email", { email, callbackUrl: "/analyze" });
  }

  if (verify) {
    return (
      <div style={{ textAlign: "center", maxWidth: "400px" }}>
        <div style={{ fontSize: "36px", marginBottom: "16px", opacity: 0.5 }}>
          ✉
        </div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#E5E5E5",
            margin: "0 0 12px 0",
          }}
        >
          Check your email
        </h2>
        <p style={{ fontSize: "14px", color: "#777", lineHeight: "1.7" }}>
          We sent you a magic link. Click it to sign in and discover your
          emotional architecture.
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "400",
          color: "#E5E5E5",
          margin: "0 0 8px 0",
          textAlign: "center",
        }}
      >
        Sign in
      </h2>
      <p
        style={{
          fontSize: "14px",
          color: "#777",
          textAlign: "center",
          marginBottom: "32px",
          lineHeight: "1.7",
        }}
      >
        Enter your email to receive a magic link
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "6px",
            color: "#E5E5E5",
            fontSize: "15px",
            fontFamily: "inherit",
            outline: "none",
            marginBottom: "16px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: "rgba(232,146,124,0.12)",
            border: "1px solid rgba(232,146,124,0.3)",
            color: "#E8927C",
            borderRadius: "6px",
            cursor: loading ? "wait" : "pointer",
            fontSize: "14px",
            letterSpacing: "1px",
            fontFamily: "'Courier New', monospace",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Sending..." : "Send magic link"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070A",
        color: "#D4D4D8",
        fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "1px",
          color: "#F5F5F5",
          marginBottom: "48px",
        }}
      >
        <span style={{ color: "#E8927C" }}>SOUL</span>PRINT
      </div>

      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
