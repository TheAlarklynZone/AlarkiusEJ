export default {
  async fetch(request, env) {
    // Try to serve the requested asset directly
    const response = await env.ASSETS.fetch(request)

    // If not found (404), serve index.html so React Router handles the path
    if (response.status === 404) {
      const indexUrl = new URL(request.url)
      indexUrl.pathname = '/'
      const indexResponse = await env.ASSETS.fetch(new Request(indexUrl.toString(), request))
      return new Response(indexResponse.body, {
        status: 200,
        headers: {
          ...Object.fromEntries(indexResponse.headers),
          'content-type': 'text/html;charset=UTF-8',
        },
      })
    }

    return response
  },
}
