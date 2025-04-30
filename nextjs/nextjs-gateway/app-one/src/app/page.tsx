import Link from "next/link";

/**
 * Página principal de App One
 * Esta página puede ser accedida directamente o renderizada a través del gateway (container)
 */
export default function Home() {
  return (
    <div>
      <p>Directamente en <Link href="http://localhost:3001" className="text-blue-500 hover:underline">localhost:3001</Link></p>
      <p>A través del gateway en <Link href="http://localhost:3000/app-one" className="text-blue-500 hover:underline">localhost:3000/app-one</Link></p>
      <p>Páginas de ejemplo:</p>
      <p><Link href="/pagina1" className="text-blue-500 hover:underline">Ir a Página 1</Link></p>
      <p><Link href="/pagina2" className="text-blue-500 hover:underline">Ir a Página 2</Link></p>
    </div>
  );
}
