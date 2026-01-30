import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
  const [usage, setUsage] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // For MVP demo, we use a dummy email. Replace with auth in full version.
  const email = "demo@reelforge.com";

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const res = await axios.get(`/api/usage?email=${email}`);
        setUsage(res.data.usage);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsage();
  }, []);

  return (
    <main style={{
      maxWidth: 800,
      margin: "2rem auto",
      padding: "2rem",
      fontFamily: "sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ marginBottom: 20 }}>Dashboard</h1>

      {loading ? (
        <p>Loading usage...</p>
      ) : (
        <p>Daily usage: <strong>{usage} / 20</strong></p>
      )}

      <Link href="/generate">
        <button style={{
          marginTop: 20,
          padding: "1rem 2rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}>
          Generate New Ad
        </button>
      </Link>
    </main>
  );
}
