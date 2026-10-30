/* Stand-ins for the claude.ai artifact runtime, so the page runs on Vercel.
   db        -> this browser's localStorage
   user      -> one anonymous id per browser
   sample    -> /api/claude (server function that calls the Claude API)
   downloads -> a normal browser file download */
(function () {
  const KEY = "gfg:";
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(KEY + k)); } catch (e) { return null; } },
    set(k, v) { localStorage.setItem(KEY + k, JSON.stringify(v)); }
  };

  const db = {
    doc(path) {
      return {
        async get() { const d = store.get(path); return { exists: d != null, data: () => d }; },
        async set(v) { try { store.set(path, v); } catch (e) { const err = new Error("Storage full"); err.code = "storage"; throw err; } }
      };
    }
  };

  let uid = store.get("uid");
  if (!uid) { uid = "local-" + Math.random().toString(36).slice(2, 10); try { store.set("uid", uid); } catch (e) {} }
  const user = { async id() { return uid; } };

  const sample = {
    async json(prompt, opts) {
      const r = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tier: (opts && opts.modelTier) || "default" })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        const err = new Error(data.error || "The AI service returned an error");
        if (r.status === 429) err.code = "rate_limited";
        throw err;
      }
      return data;
    }
  };

  const downloads = {
    async save({ filename, data }) {
      const url = URL.createObjectURL(new Blob([data], { type: "text/html" }));
      const a = Object.assign(document.createElement("a"), { href: url, download: filename });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };

  const caps = { db, user, sample, downloads };
  window.claude = { use: (n) => caps[n] ? Promise.resolve(caps[n]) : Promise.reject(new Error("unavailable")) };
})();
