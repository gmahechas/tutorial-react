/**
 * Utilidades para el manejo de URLs y paths
 */

/**
 * Normaliza un path para asegurar que comience con /
 */
export function normalizePath(path: string): string {
  if (!path) return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

/**
 * Extrae el subpath para el microfrontend
 * Ejemplo: /app-one/pagina1 -> /pagina1
 */
export function getSubPath(path: string, prefix: string): string {
  prefix = normalizePath(prefix);
  path = normalizePath(path);
  
  if (path === prefix) return '/';
  
  if (path.startsWith(prefix)) {
    const subPath = path.substring(prefix.length);
    return normalizePath(subPath);
  }
  
  return path;
}

/**
 * Construye una URL para el microfrontend manteniendo el path relativo
 */
export function buildMicrofrontendUrl(basePath: string, subPath: string): string {
  basePath = normalizePath(basePath);
  subPath = normalizePath(subPath);
  
  if (subPath === '/') return basePath;
  
  // Remove trailing slash from basePath if subPath has a leading slash
  if (basePath.endsWith('/') && subPath.startsWith('/')) {
    basePath = basePath.slice(0, -1);
  }
  
  return `${basePath}${subPath}`;
} 