import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Generate() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("Above 18");
  const [tone, setTone] = useState("Professional");
  const [platform, setPlatform] = useState("Instagram Reels");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    setResult("");

    if (
      productName.trim() === "" ||
      description.trim() === "" ||
      targetAudience.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("/api/generate", {
        productName,
        description,
        targetAudience,
        tone,
        platform,
      });

      setResult(res.data.content);
    } catch (err: any) {
      setError(
        err.response?.data?.error ||
          "Failed to generate ad. Please check your API key or quota."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/">← Back to Home</Link>

      <h1 style={{ marginTop: "20px" }}>Generate AI Reels Ad</h1>

      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      />

      <textarea
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      />

      <select
        value={targetAudience}
        onChange={(e) => setTargetAudience(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      >
        <option value="Above 18">Above 18</option>
        <option value="Business Owners">Business Owners</option>
        <option value="Creators">Creators</option>
        <option value="Marketers">Marketers</option>
      </select>

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      >
        <option value="Professional">Professional</option>
        <option value="Energetic">Energetic</option>
        <option value="Casual">Casual</option>
      </select>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      >
        <option value="Instagram Reels">Instagram Reels</option>
        <option value="TikTok">TikTok</option>
        <option value="YouTube Shorts">YouTube Shorts</option>
      </select>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Ad"}
      </button>

      {error && (
  <p style={{ color: "red", marginTop: "15px" }}>
    {error} (Demo mode active – no API key needed)
  </p>
)}


      {result && (
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            background: "#f5f7fa",
            borderRadius: "6px",
            whiteSpace: "pre-line",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}
