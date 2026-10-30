# Grounds for Good

Static page (`public/index.html`) plus one serverless function (`api/claude.js`) for the AI steps.

## Deploy to Vercel
1. Put this folder in a GitHub repo (or run `npx vercel` inside it).
2. In Vercel: **Add New → Project → Import** the repo. No build settings needed.
3. Done. No API key is needed: the demo account shows pre-written sample answers for the AI steps (`public/samples.js`).

Optional: to turn on live AI for every church, add `ANTHROPIC_API_KEY` in **Settings → Environment Variables** and redeploy.

Optional: `ANTHROPIC_MODEL` and `ANTHROPIC_MODEL_QUICK` override the models used.

Notes: workspaces save in each visitor's browser (localStorage). The AI endpoint is public, so set a monthly spend limit in the Anthropic Console.
