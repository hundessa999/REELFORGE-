import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <main style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
      {/* HERO SECTION */}
      <section style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "44px", fontWeight: 700 }}>Reelforge</h1>
        <p style={{ fontSize: "18px", marginTop: 12, color: "#555" }}>
          AI Reels Ad Generator
        </p>
        <p
          style={{
            marginTop: 20,
            fontSize: "20px",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.5,
            color: "#333",
          }}
        >
          Generate high-converting Instagram and TikTok reel ads in seconds.
          Scripts, hooks, captions, and hashtags powered by AI.
        </p>
        <Link href="/generate">
          <a
            style={{
              display: "inline-block",
              marginTop: 30,
              padding: "14px 28px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Generate Ads
          </a>
        </Link>
      </section>

      {/* VALUE STRIP */}
      <section
        style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          textAlign: "center",
        }}
      >
        <div>
          <strong>AI-Generated Scripts</strong>
          <p style={{ color: "#555" }}>
            Hooks, captions, and hashtags optimized for reels.
          </p>
        </div>
        <div>
          <strong>Multiple Tones</strong>
          <p style={{ color: "#555" }}>
            Energetic, professional, or casual in one click.
          </p>
        </div>
        <div>
          <strong>Platform Ready</strong>
          <p style={{ color: "#555" }}>Built for Instagram Reels and TikTok.</p>
        </div>
        <div>
          <strong>API-Powered</strong>
          <p style={{ color: "#555" }}>Easy to extend, white-label, or resell.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: 90 }}>
        <h2 style={{ textAlign: "center", fontSize: 32 }}>How it works</h2>
        <ol
          style={{
            maxWidth: 700,
            margin: "30px auto 0",
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          <li>Enter your product details</li>
          <li>Select tone and platform</li>
          <li>Generate a ready-to-post ad instantly</li>
        </ol>
      </section>

      {/* USE CASES */}
      <section style={{ marginTop: 90 }}>
        <h2 style={{ textAlign: "center", fontSize: 32 }}>Who is this for?</h2>
        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div>Marketing agencies</div>
          <div>Dropshippers</div>
          <div>Content creators</div>
          <div>SaaS founders</div>
          <div>Small businesses</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          marginTop: 100,
          padding: 40,
          backgroundColor: "#f6f6f6",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <h2>Start generating ads in seconds</h2>
        <p style={{ marginTop: 10, color: "#555" }}>
          No signup required. Plug in your API key and go live.
        </p>
        <Link href="/generate">
          <a
            style={{
              display: "inline-block",
              marginTop: 20,
              padding: "12px 26px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Open Generator
          </a>
        </Link>
      </section>
    </main>
  );
};

export default Home;
