import { MicrofrontendResponse } from "../types/gateway";

/**
 * Safely renders HTML content from microfrontends
 * 
 * @param response The response from the microfrontend
 * @param fallback Optional fallback content if rendering fails
 */
export function renderMicrofrontendContent(
  response: MicrofrontendResponse,
  fallback?: React.ReactNode
) {
  if (!response.html) {
    return fallback || <p>No content available</p>;
  }

  return (
    <>
      {/* Render any head elements if provided */}
      {response.head?.meta?.map((meta, index) => {
        const metaProps = { ...meta };
        return <meta key={`meta-${index}`} {...metaProps} />;
      })}

      {/* The actual HTML content */}
      <div dangerouslySetInnerHTML={{ __html: response.html }} />
      
      {/* Render any scripts if provided */}
      {response.head?.scripts?.map((script, index) => {
        if (script.content) {
          return (
            <script 
              key={`script-${index}`} 
              dangerouslySetInnerHTML={{ __html: script.content }} 
            />
          );
        }
        const scriptProps = { ...script };
        return <script key={`script-${index}`} {...scriptProps} />;
      })}
    </>
  );
} 