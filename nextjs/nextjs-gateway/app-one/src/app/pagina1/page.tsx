import Link from "next/link";

export default function Pagina1() {
  return (
    <div>
      <h2>AppOne - Pagina 1</h2>
      <Link href="/">Volver a inicio</Link>
      <Link href="/pagina2">Ir a Página 2</Link>
    </div>
  );
} 