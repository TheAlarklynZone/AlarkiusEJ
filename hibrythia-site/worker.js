/**
 * Hibrythia Site — Cloudflare Worker
 * Serves the built Vite/React SPA via Cloudflare Pages Assets.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Security headers
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    };

    // Cache static assets aggressively
    if (
      url.pathname.startsWith('/assets/') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.woff2') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.svg')
    ) {
      const response = await env.ASSETS.fetch(request);
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      Object.entries(securityHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
      return newResponse;
    }

    // SPA fallback — serve index.html for all routes
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    Object.entries(securityHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
    return newResponse;
  },
};
