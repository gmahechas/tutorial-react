import { NextRequest, NextResponse } from 'next/server';

/**
 * API endpoint para renderizar contenido de app-one para el gateway
 * Este endpoint permite que el contenedor (gateway) solicite fragmentos de contenido
 * renderizados en el servidor para incrustarlos en su propia respuesta.
 */

// Genera HTML para la página de inicio
function getHomePageHTML() {
  return `
    <div>
      <p>Directamente en <a href="http://localhost:3001" class="text-blue-500 hover:underline">localhost:3001</a></p>
      <p>A través del gateway en <a href="http://localhost:3000/app-one" class="text-blue-500 hover:underline">localhost:3000/app-one</a></p>
      <p>Páginas de ejemplo:</p>
      <p><a href="/app-one/pagina1" class="text-blue-500 hover:underline">Ir a Página 1</a></p>
      <p><a href="/app-one/pagina2" class="text-blue-500 hover:underline">Ir a Página 2</a></p>
    </div>
  `;
}

// Genera HTML para la página 1
function getPagina1HTML() {
  return `
    <div>
      <h2>AppOne - Pagina 1</h2>
      <a href="/app-one" class="text-blue-500 hover:underline mr-4">Volver a inicio</a>
      <a href="/app-one/pagina2" class="text-blue-500 hover:underline">Ir a Página 2</a>
    </div>
  `;
}

// Genera HTML para la página 2
function getPagina2HTML() {
  return `
    <div>
      <h2>AppOne - Pagina 2</h2>
      <a href="/app-one" class="text-blue-500 hover:underline mr-4">Volver a inicio</a>
      <a href="/app-one/pagina1" class="text-blue-500 hover:underline">Ir a Página 1</a>
    </div>
  `;
}

// Mapeo de rutas a funciones generadoras de HTML
const routeHtmlMap: Record<string, () => string> = {
  '/': getHomePageHTML,
  '/pagina1': getPagina1HTML,
  '/pagina2': getPagina2HTML,
};

/**
 * Maneja solicitudes POST para renderizar contenido
 */
export async function POST(request: NextRequest) {
  try {
    // Obtener datos de la solicitud
    const data = await request.json();
    const { path = '/' } = data;
    
    console.log(`[App-One API] Rendering content for path: ${path}`);
    
    // Obtener la función generadora de HTML
    const getHtml = routeHtmlMap[path];
    
    if (!getHtml) {
      // Si no se encuentra la ruta, devolver 404
      const notFoundHtml = `
        <div>
          <h2>Página no encontrada</h2>
          <p>La ruta ${path} no existe en app-one</p>
          <a href="/app-one">Volver a inicio</a>
        </div>
      `;
      
      return NextResponse.json({
        html: notFoundHtml,
        head: {
          title: `App One - Página no encontrada`,
          meta: [
            { name: 'description', content: `Página no encontrada - ${path}` }
          ]
        },
        props: {},
        status: 404
      });
    }
    
    // Generar el HTML usando la función correspondiente
    const html = getHtml();
    
    // Crear respuesta con metadatos para SEO
    const response = {
      html,
      head: {
        title: path === '/' ? 'App One - Homepage' : `App One - ${path.substring(1)}`,
        meta: [
          { name: 'description', content: `App One microfrontend - ${path}` }
        ]
      },
      props: {},
      status: 200
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('[App-One API] Error rendering content:', error);
    return NextResponse.json(
      { error: 'Error rendering content' },
      { status: 500 }
    );
  }
} 