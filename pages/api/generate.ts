import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { productName, description, targetAudience, tone, platform } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OpenAI API key is missing. Please add it to environment variables.",
    });
  }

  if (!productName || !description || !platform) {
    return res.status(400).json({
      error: "Please fill in all required fields.",
    });
  }

  try {
    const prompt = `
Create a short ${platform} ad.

Product: ${productName}
Description: ${description}
Target audience: ${targetAudience}
Tone: ${tone}

Return valid JSON only:
{
  "hooks": ["hook1", "hook2", "hook3"],
  "script": "...",
  "caption": "...",
  "hashtags": ["..."]
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content || "{}";

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = {
        hooks: ["AI-generated hook"],
        script: "AI-generated script",
        caption: "AI-generated caption",
        hashtags: ["#reels", "#marketing"],
      };
    }

    return res.status(200).json({ content: parsed });
  } catch (err: any) {
    const message = err?.message || "";

    if (message.includes("429")) {
      return res.status(429).json({
        error:
          "API quota exceeded. Please check your OpenAI plan or billing details.",
      });
    }

    if (message.includes("401") || message.includes("API key")) {
      return res.status(401).json({
        error:
          "Invalid OpenAI API key. Please verify your environment variables.",
      });
    }

    return res.status(500).json({
      error: "AI service is temporarily unavailable. Please try again later.",
    });
  }
}
