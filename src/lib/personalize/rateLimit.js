// In-memory per-IP rate limiter. Resets per server instance and per deploy,
// which is acceptable protection for a marketing page. Upgrade path if abuse
// ever shows up in the bill: Vercel WAF rules or an Upstash counter.

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_HITS = 6; // recommendations per IP per window
const MAX_IPS = 5000;

const hits = new Map(); // ip -> number[] of timestamps

export function allowRequest(ip) {
  const now = Date.now();
  const key = ip || "unknown";

  const timestamps = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_HITS) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Cap memory: drop the oldest entries FIFO.
  if (hits.size > MAX_IPS) {
    const excess = hits.size - MAX_IPS;
    const keys = hits.keys();
    for (let i = 0; i < excess; i++) {
      hits.delete(keys.next().value);
    }
  }

  return true;
}

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
