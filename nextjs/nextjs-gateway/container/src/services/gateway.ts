import { MicrofrontendResponse, MicrofrontendRequestContext } from '../types/gateway';

type MicrofrontendConfig = {
  name: string;
  url: string;
};

// Configuration for our microfrontends
export const microfrontends: Record<string, MicrofrontendConfig> = {
  appOne: {
    name: 'app-one',
    url: process.env.APP_ONE_URL || 'http://localhost:3001',
  },
};

/**
 * Fetches SSR content from a microfrontend via the API
 */
export async function fetchFromMicrofrontend(
  microfrontendKey: keyof typeof microfrontends,
  context: MicrofrontendRequestContext = { path: '/' }
): Promise<MicrofrontendResponse> {
  const config = microfrontends[microfrontendKey];
  
  if (!config) {
    throw new Error(`Microfrontend "${microfrontendKey}" not configured`);
  }

  try {
    console.log(`[Gateway] Fetching from ${config.name} at path ${context.path}`);
    
    // API call to the microfrontend's render endpoint
    const renderUrl = `${config.url}/api/render`;
    console.log(`[Gateway] Calling API: ${renderUrl}`);
    
    // Prepare the payload
    const payload = {
      path: context.path,
      query: context.query || {},
      headers: context.headers || {},
    };
    
    // Make the API call
    const response = await fetch(renderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Ensure we don't cache this response
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${config.name}: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`[Gateway] Received response from ${config.name}`);
    
    return data as MicrofrontendResponse;
  } catch (error) {
    console.error(`[Gateway] Error fetching from ${config.name}:`, error);
    
    // Fallback error response
    return {
      html: `
        <div class="error-content">
          <h2 class="text-red-500">Error connecting to ${config.name}</h2>
          <p>Failed to fetch content from microfrontend</p>
          <p class="text-sm text-gray-500">Error details: ${error instanceof Error ? error.message : String(error)}</p>
        </div>
      `,
      props: {},
      head: {
        title: `Error - ${config.name}`,
      }
    };
  }
} 