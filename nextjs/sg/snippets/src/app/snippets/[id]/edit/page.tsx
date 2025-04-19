import { notFound } from "next/navigation";
import db from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

export default async function SnippetEditPage(props: {
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

    return <SnippetEditForm snippet={snippet} />
}