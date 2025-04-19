'use client';
import { useState } from "react";
import { Snippet } from "@/generated/prisma";
import { editSnippet } from '@/actions/snippets.actions';
import CodeEditor from "@/components/code-editor";

interface Props {
    snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: Props) {
    const [code, setCode] = useState(snippet.code);
    const [title, setTitle] = useState(snippet.title);

    const handleCodeChange = (value = "") => {
        setCode(value);
    }
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const editSnippetAction = editSnippet.bind(null, { ...snippet, code, title });

    return (
        <form action={editSnippetAction}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="border rounded p-2 w-full" value={title} onChange={handleTitleChange} />
                </div>
                <CodeEditor code={code} onChange={handleCodeChange} />
                <button type="submit" className="bg-blue-200 p-2 rounded">Save</button>
            </div>
        </form>
    );
}
