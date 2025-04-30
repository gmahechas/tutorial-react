import { NextRequest, NextResponse } from 'next/server';
import { microfrontends } from './services/gateway';
import { getSubPath } from './lib/utils';

/**
 * Middleware to handle routing between microfrontends
 * This enables route sharing while preserving SSR capabilities
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // For now, we're just logging the request path
  // In future steps, we'll implement more advanced routing logic
  console.log(`[Middleware] Request for: ${pathname}`);
  
  // Capturar tanto /app-one como /app-one/cualquier-cosa
  if (pathname === '/app-one' || pathname.startsWith('/app-one/')) {
    // Obtener el path después de /app-one
    const subPath = getSubPath(pathname, '/app-one');
    
    // Rewrite a la ruta dinámica
    const url = request.nextUrl.clone();
    
    // Para la ruta base /app-one usamos /dynamic/index como valor predeterminado
    // ya que [...path] requiere al menos un segmento
    if (subPath === '/') {
      url.pathname = `/dynamic/index`;
    } else {
      url.pathname = `/dynamic/${subPath.substring(1)}`;
    }
    
    console.log(`[Middleware] Rewriting ${pathname} to ${url.pathname}`);
    return NextResponse.rewrite(url);
  }
  
  // Continue normal processing - will be enhanced in future steps
  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  // Apply this middleware to all routes except
  // - API routes (/api/*)
  // - Static files (/_next/*, /favicon.ico, etc.)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 