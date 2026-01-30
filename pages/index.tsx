import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Reelforge</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>AI Reels Ad Generator</p>
      <Link href="/dashboard">
        <button style={{
          padding: "1rem 2rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Go to Dashboard
        </button>
      </Link>
    </main>
  );
}
