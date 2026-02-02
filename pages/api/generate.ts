import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { productName, description, platform, tone } = req.body;

  if (!productName || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // === DEMO MODE OUTPUT ===
  // No API key or billing required
  return res.status(200).json({
    content: `🔥 [DEMO MODE] Generated Ad for "${productName}" (${platform}, ${tone}):\n\n${description}\n\nThis is a placeholder response. Buyer can configure OpenAI API later for real ad generation.`,
  });
}
