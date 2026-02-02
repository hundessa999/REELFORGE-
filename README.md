# Reelforge – AI Reels Ad Generator

Reelforge is a flip-ready SaaS built with Next.js and TypeScript that generates high-converting ad scripts for TikTok, Instagram Reels, and YouTube Shorts using AI.

Designed for fast resale, easy extension, and Vercel deployment.

---

## Features

- AI-powered reels ad script generation
- Supports TikTok, Instagram Reels, and YouTube Shorts
- Tone selection (Professional, Energetic, Casual)
- Clean, modern UI
- Error-safe frontend validation
- Vercel-ready deployment
- Buyer adds own OpenAI API key

---

## Tech Stack

- Next.js 13
- TypeScript
- React 18
- Axios
- OpenAI API (optional, buyer configured)

---

## Live Demo

https://reelforge-eta.vercel.app

---

## Getting Started (Local)

1. Clone the repository
2. Install dependencies

```bash
npm install
touch .env.local
OPENAI_API_KEY=your_openai_api_key
npm run dev
Deployment (Vercel)

Push the repository to GitHub

Import project into Vercel

Framework: Next.js

Build command: npm run build

Root directory: ./

Add environment variable OPENAI_API_KEY

Deploy

Monetization Ideas

Charge per generated ad

Monthly SaaS subscription

White-label for agencies

Bundle with video generation tools

License
## Demo Mode

Reelforge works fully in demo mode without an OpenAI API key.
Users can see ad generation instantly with placeholder content.
Buyers can add their own OpenAI API key in `.env.local` to generate real ads.

MIT License. Free to modify, resell, and commercialize.
