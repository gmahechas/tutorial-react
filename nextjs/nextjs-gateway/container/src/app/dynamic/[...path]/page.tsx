import { fetchFromMicrofrontend } from '../../../services/gateway';
import { renderMicrofrontendContent } from '../../../lib/renderContent';
import { normalizePath } from '../../../lib/utils';
import { notFound } from 'next/navigation';

interface DynamicPathProps {
  params: Promise<{ path: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export default async function DynamicPath({ 
  params, 
  searchParams 
}: DynamicPathProps) {
  // Extraer y normalizar los parámetros
  const { path } = await params;
  const queryParams = await searchParams;
  
  // Si el path es 'index', es la ruta base del microfrontend
  let normalizedPath;
  if (path.length === 1 && path[0] === 'index') {
    normalizedPath = '/';
  } else {
    normalizedPath = normalizePath(path.join('/'));
  }
  
  try {
    console.log(`[Dynamic] Processing path: ${normalizedPath}`);
    
    // Para rutas dinámicas, siempre usamos app-one
    // En una implementación más compleja, podríamos determinar qué microfrontend usar basado en la ruta
    const content = await fetchFromMicrofrontend('appOne', {
      path: normalizedPath,
      query: queryParams,
    });

    // Return 404 if the microfrontend indicates it
    if (content.status === 404) {
      return notFound();
    }

    return (
      <div className="container mx-auto p-4">
        <div className="microfrontend-container">
          {renderMicrofrontendContent(content, (
            <p className="text-red-500">Failed to load content for path: {normalizedPath}</p>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error rendering path ${normalizedPath}:`, error);
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-xl text-red-500">Error</h2>
        <p>Failed to load content for this path</p>
      </div>
    );
  }
} 