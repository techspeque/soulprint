import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Soulprint",
};

export default function PrivacyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "64px 32px",
        maxWidth: "680px",
        margin: "0 auto",
        fontFamily: "'Courier New', monospace",
        color: "#ccc",
        lineHeight: "1.8",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "12px",
          color: "#555",
          textDecoration: "none",
          letterSpacing: "1px",
        }}
      >
        ← Back
      </Link>

      <h1
        style={{
          fontSize: "28px",
          fontWeight: "400",
          color: "#F0F0F0",
          marginTop: "32px",
          marginBottom: "8px",
          letterSpacing: "-0.5px",
        }}
      >
        Privacy Policy
      </h1>

      <p style={{ fontSize: "12px", color: "#555", marginBottom: "48px" }}>
        Last updated: February 28, 2026
      </p>

      <Section title="What We Collect">
        <p>
          <Strong>Email address</Strong> — provided when you sign in via magic
          link. Used solely for authentication.
        </p>
        <p>
          <Strong>Playlist data</Strong> — song titles and artist names you
          submit for analysis. This data is sent to our AI provider for
          processing and is not permanently stored.
        </p>
        <p>
          <Strong>Session cookie</Strong> — a JSON Web Token that keeps you
          signed in. See the Cookies section below.
        </p>
      </Section>

      <Section title="How We Use Your Data">
        <p>
          <Strong>Authentication</Strong> — your email is used to send a
          one-time magic link via Resend. We do not send marketing emails.
        </p>
        <p>
          <Strong>AI analysis</Strong> — your playlist is sent to
          OpenRouter/Anthropic Claude to generate your soulprint analysis. The
          playlist data is not retained by us after processing.
        </p>
        <p>
          <Strong>Session management</Strong> — a session JWT cookie keeps you
          authenticated between requests.
        </p>
      </Section>

      <Section title="Data Storage & Retention">
        <p>
          User records are stored in Vercel KV (Redis) with a{" "}
          <Strong>7-day TTL</Strong>. After 7 days of inactivity, your data is
          automatically deleted.
        </p>
        <p>
          Email verification tokens expire after <Strong>1 hour</Strong>.
        </p>
        <p>
          We do not maintain long-term databases of user information.
        </p>
      </Section>

      <Section title="Third Parties">
        <p>We share data with the following services, only as needed:</p>
        <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            <Strong>Resend</Strong> — email delivery for magic link
            authentication
          </li>
          <li>
            <Strong>OpenRouter / Anthropic</Strong> — AI processing of playlist
            data
          </li>
          <li>
            <Strong>Vercel</Strong> — hosting and KV (Redis) data storage
          </li>
        </ul>
        <p>
          We do not sell your data. We do not use analytics, advertising
          cookies, or third-party trackers.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          We use a single essential cookie for authentication:
        </p>
        <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            <code style={{ color: "#E8927C", fontSize: "13px" }}>
              authjs.session-token
            </code>{" "}
            /{" "}
            <code style={{ color: "#E8927C", fontSize: "13px" }}>
              __Secure-authjs.session-token
            </code>{" "}
            — session JWT, strictly necessary for authentication. No expiry
            beyond your session.
          </li>
        </ul>
        <p>
          We do not use analytics cookies, advertising cookies, or any
          third-party tracking cookies.
        </p>
      </Section>

      <Section title="Your Rights (GDPR)">
        <p>If you are in the EU/EEA, you have the right to:</p>
        <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            <Strong>Access</Strong> — request a copy of your data
          </li>
          <li>
            <Strong>Rectification</Strong> — correct inaccurate data
          </li>
          <li>
            <Strong>Erasure</Strong> — request deletion of your data
          </li>
          <li>
            <Strong>Portability</Strong> — receive your data in a portable
            format
          </li>
          <li>
            <Strong>Object</Strong> — object to processing of your data
          </li>
        </ul>
        <p>
          Since all user data auto-expires after 7 days, erasure happens
          automatically. For immediate requests or any other enquiries, contact{" "}
          <a
            href="mailto:privacy@soulprint.app"
            style={{ color: "#E8927C", textDecoration: "none" }}
          >
            privacy@soulprint.app
          </a>
          .
        </p>
      </Section>

      <Section title="No Tracking">
        <p>
          Soulprint does not use Google Analytics, Meta Pixel, or any other
          tracking or analytics service. We do not serve ads. Your visit is not
          tracked beyond what is necessary for the service to function.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update this policy from time to time. Changes will be reflected
          on this page with an updated date.
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#E8927C",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: "14px", color: "#999" }}>{children}</div>
    </section>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "#ccc", fontWeight: "500" }}>{children}</strong>;
}
