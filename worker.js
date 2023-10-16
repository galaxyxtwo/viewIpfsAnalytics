addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
  
    // Handle ping request
    if (request.url.endsWith("/ping")) {
      return new Response("Pong", { status: 200 });
    }
  
    // Handle data request
    if (request.url.endsWith("/analytics")) {
      // Validate CID presence here
  
      // Make a request to the original API
      const apiResponse = await fetch('https://api.leto.gg/analytics', {
        method: 'POST', // Adjust the method as needed
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers needed for the original API
        },
        body: JSON.stringify({
          // Add request data if required
        }),
      });
  
      // Check if the response from the original API is OK
      if (apiResponse.ok) {
        // Process the response, if needed
        const responseData = await apiResponse.json();
  
        // Modify the response data or headers as required
        const modifiedResponseData = responseData; // Modify this as needed
  
        // Return the modified response
        return new Response(JSON.stringify(modifiedResponseData), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // CORS headers
          },
        });
      } else {
        // Handle API error response, if needed
        return new Response("Error from original API", { status: apiResponse.status });
      }
    }
  
    // Handle other requests here
  
    return new Response("Not Found", { status: 404 });
  }