addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // Define the URL of your API server
    const apiServerURL = 'https://api.leto.gg/analytics';
  
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204, // No Content
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400', // 24 hours cache
        },
      });
    }
  
    // Forward the request to the API server
    const apiResponse = await fetch(apiServerURL, {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' ? request.body : undefined,
    });
  
    // Check if the API response is OK
    if (!apiResponse.ok) {
      return new Response('API server error', {
        status: apiResponse.status,
        statusText: apiResponse.statusText,
      });
    }
  
    // Modify the API response as needed
    const modifiedResponse = new Response(apiResponse.body, {
      status: apiResponse.status,
      statusText: apiResponse.statusText,
      headers: {
        'Content-Type': apiResponse.headers.get('Content-Type'),
        // Add any other headers if necessary
      },
    });
  
    // Set CORS headers to allow requests from your React app's origin
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  
    return modifiedResponse;
  }