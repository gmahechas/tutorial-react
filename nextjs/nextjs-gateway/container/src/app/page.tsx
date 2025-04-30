import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Para ver el contenido de app-one, visita <Link href="/app-one" className="text-blue-500 underline">localhost:3000/app-one</Link></p>
    </div>
  );
}
