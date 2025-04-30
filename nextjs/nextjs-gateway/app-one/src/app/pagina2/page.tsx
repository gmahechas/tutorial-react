import Link from "next/link";

export default function Pagina2() {
  return (
    <div>
      <h2>AppOne - Pagina 1</h2>
      <Link href="/">Volver a inicio</Link>
      <Link href="/pagina1">Ir a Página 1</Link>
    </div>
  );
} 