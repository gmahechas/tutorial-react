import db from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/actions/snippets.actions";

export default async function SnippetShowPage(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    const snippet = await db.snippet.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!snippet) {
        notFound();
    }

    const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippet.title}</h1>
                <div className="flex gap-2">
                    <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">Edit</Link>
                    <button onClick={deleteSnippetAction} className="p-2 border rounded">Delete</button>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200"><code>{`${snippet.code}`}</code></pre>
        </div>
    )
}


export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();
    return snippets.map((snippet) => ({
        id: snippet.id.toString(),
    }));
}