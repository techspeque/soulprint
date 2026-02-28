# soulprint

AI-powered emotional analysis through your music taste. Upload a playlist and discover the psychological patterns hidden in the songs you listen to.

## What it does

Soulprint takes a CSV export of your playlist (YouTube Music, Spotify via Exportify, or any generic CSV) and uses AI to reveal your emotional architecture — what you're protecting, what you're seeking, and the tension that defines you.

Songs are classified into emotional clusters, each with a deep psychological reading. The result is a shareable story card optimised for Instagram and TikTok.

## Tech stack

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **NextAuth v5** — passwordless magic link auth via **Resend**
- **Vercel KV** (Redis) — session and user data with 7-day TTL
- **OpenRouter / Claude** — AI analysis
- **html2canvas-pro** — story card export

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your keys
npm run dev
```

### Environment variables

| Variable | Description |
|---|---|
| `AUTH_SECRET` | JWT signing secret — generate with `npx auth secret` |
| `AUTH_URL` | App URL, e.g. `http://localhost:3000` |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `EMAIL_FROM` | Sender address, e.g. `noreply@yourdomain.com` |
| `OPENROUTER_API_KEY` | API key from [openrouter.ai](https://openrouter.ai) |
| `NEXT_PUBLIC_APP_URL` | Public app URL (used for OpenRouter referer) |
| `KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN` | Vercel KV credentials (auto-set when linked) |

## Project structure

```
app/
  page.tsx                        Landing page with roadmap
  login/page.tsx                  Magic link auth
  (protected)/analyze/page.tsx    Upload → analyse → results
  api/auth/[...nextauth]/route.ts Auth handler
  api/analyze/route.ts            AI analysis endpoint
  privacy/page.tsx                Privacy policy
  roadmap/page.tsx                Upcoming features
components/                       UI components (results, clusters, share card, etc.)
lib/
  auth.ts                         NextAuth config
  csv.ts                          Playlist CSV parser
  constants.ts                    AI prompt + labels
  kv-adapter.ts                   Vercel KV adapter
  share.ts                        Canvas export for story cards
```

## Deploy

1. Connect repo to Vercel
2. Link a Vercel KV database (auto-sets KV env vars)
3. Add the remaining env vars in the Vercel dashboard
4. Deploy
