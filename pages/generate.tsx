import { useState } from "react";
import axios from "axios";

export default function GeneratePage() {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [targetAudience, setTargetAudience] = useState<string>("");
  const [tone, setTone] = useState<string>("Energetic");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
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
    <div>
      <h1>Generate AI Reels Ad</h1>
      {/* Form inputs here, bind to setProductName, setDescription, etc. */}
      <button onClick={handleGenerate}>Generate</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <div>{result}</div>}
    </div>
  );
}
