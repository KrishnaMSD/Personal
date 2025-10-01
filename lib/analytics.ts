let enabled = false;

export function enableAnalytics() {
  enabled = true;
}

export function disableAnalytics() {
  enabled = false;
}

export function track(event: string, payload: Record<string, unknown> = {}) {
  if (!enabled) return;
  // Replace with privacy-friendly analytics endpoint (e.g., Umami, Plausible)
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, payload);
  }
}
