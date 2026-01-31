import { useState } from "react";
import axios from "axios";

export default function GeneratePage() {
  // 1. All inputs declared with useState
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [targetAudience, setTargetAudience] = useState<string>("");
  const [tone, setTone] = useState<string>("Energetic");

  // 2. Result and error state
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // 3. Generate button handler
  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await axios.post("/api/generate", {
        productName,
        description,
        targetAudience,
        tone,
      });
      setResult(res.data.content);
    } catch (err: unknown) {
      let message = "Error generating ad";
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        message = err.response.data.error;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, textAlign: "center" }}>
        Generate AI Reels Ad
      </h1>

      <div style={{ marginTop: 30 }}>
        <label>
          Product Name
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 20 }}>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 20 }}>
          Target Audience
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 20 }}>
          Tone
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          >
            <option>Energetic</option>
            <option>Professional</option>
            <option>Casual</option>
          </select>
        </label>

        <button
          onClick={handleGenerate}
          style={{
            marginTop: 25,
            padding: "12px 24px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600,
          }}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Ad"}
        </button>

        {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
        {result && (
          <div
            style={{
              marginTop: 20,
              padding: 16,
              backgroundColor: "#f6f6f6",
              borderRadius: 8,
            }}
          >
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
