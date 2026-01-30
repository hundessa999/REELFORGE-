import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { productName, description, targetAudience, tone, platform } = req.body

  if (!productName || !description) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const prompt = `
      Generate a short ad for ${platform}:
      Product: ${productName}
      Description: ${description}
      Target Audience: ${targetAudience}
      Tone: ${tone}
      
      Return in JSON:
      {
        "hooks": ["hook1", "hook2", "hook3"],
        "script": "...",
        "caption": "...",
        "hashtags": ["..."]
      }
    `

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })

    const text = completion.choices[0].message?.content || '{}'
    const json = JSON.parse(text)
    res.status(200).json({ content: json })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: err.message || 'Error generating ad' })
  }
}
