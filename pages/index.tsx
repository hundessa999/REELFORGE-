import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 720, padding: "2rem" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>
          Reelforge
        </h1>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          AI Reels Ad Generator
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Create high-converting TikTok, Instagram Reels, and YouTube Shorts ads
          in seconds using AI.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link href="/generate">
            <button
              style={{
                padding: "0.9rem 1.8rem",
                fontSize: "1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Generate Ads
            </button>
          </Link>

          <Link href="/dashboard">
            <button
              style={{
                padding: "0.9rem 1.8rem",
                fontSize: "1rem",
                backgroundColor: "#f3f3f3",
                color: "#000",
                border: "1px solid #ddd",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              View Demo
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
