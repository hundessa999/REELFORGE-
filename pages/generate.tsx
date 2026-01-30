import { useState } from "react";
import axios from "axios";

export default function GeneratePage() {
  const [form, setForm] = useState({
    productName: "",
    description: "",
    targetAudience: "",
    tone: "Energetic",
    platform: "Instagram Reels",
    email: "demo@reelforge.com" // Demo email for MVP
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.post("/api/generate", form);
      setResult(res.data.content);
    } catch (err: any) {
      setError(err.response?.data?.error || "Error generating ad");
    }
    setLoading(false);
  };

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
      <h1>Generate AI Reels Ad</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <input type="text" name="productName" placeholder="Product Name" value={form.productName} onChange={handleChange} required />
        <textarea name="description" placeholder="Short Description" value={form.description} onChange={handleChange} required />
        <input type="text" name="targetAudience" placeholder="Target Audience" value={form.targetAudience} onChange={handleChange} required />

        <select name="tone" value={form.tone} onChange={handleChange}>
          <option>Energetic</option>
          <option>Professional</option>
          <option>Funny</option>
          <option>Premium</option>
        </select>

        <select name="platform" value={form.platform} onChange={handleChange}>
          <option>Instagram Reels</option>
          <option>TikTok</option>
          <option>YouTube Shorts</option>
        </select>

        <button type="submit" disabled={loading} style={{
          padding: "1rem 2rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}>
          {loading ? "Generating..." : "Generate Ad"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 24 }}>
          <h2>Hooks</h2>
          <ul>{result.hooks?.map((hook: string, i: number) => <li key={i}>{hook}</li>)}</ul>

          <h2>Script</h2>
          <p>{result.script}</p>

          <h2>Caption</h2>
          <p>{result.caption}</p>

          <h2>Hashtags</h2>
          <p>{result.hashtags?.join(" ")}</p>
        </div>
      )}
    </main>
  );
}
