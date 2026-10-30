// Vercel serverless function: forwards a prompt to the Claude API and returns parsed JSON.
// Needs the ANTHROPIC_API_KEY environment variable set in your Vercel project.
const MODELS = {
  default: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
  quick: process.env.ANTHROPIC_MODEL_QUICK || "claude-haiku-4-5"
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST" });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "The site's API key isn't set up yet" });

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const prompt = String(body.prompt || "");
  if (!prompt || prompt.length > 60000) return res.status(400).json({ error: "Prompt missing or too long" });
  const model = MODELS[body.tier] || MODELS.default;

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ model, max_tokens: 4096, messages: [{ role: "user", content: prompt }] })
    });
    const data = await r.json();
    if (!r.ok) return res.status(r.status === 429 ? 429 : 502).json({ error: (data.error && data.error.message) || "AI request failed" });

    const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
    const start = text.indexOf("{"), end = text.lastIndexOf("}");
    if (start < 0 || end < start) return res.status(502).json({ error: "The AI reply wasn't in the expected format" });
    return res.status(200).json(JSON.parse(text.slice(start, end + 1)));
  } catch (e) {
    return res.status(502).json({ error: "Couldn't reach the AI service" });
  }
};

module.exports.config = { maxDuration: 60 };
