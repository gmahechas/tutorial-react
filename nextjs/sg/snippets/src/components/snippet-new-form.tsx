'use client';
import { startTransition, useActionState, useState } from "react";
import { createSnippet } from "@/actions/snippets.actions";
import CodeEditor from "./code-editor";

export default function SnippetNewForm() {
    const [code, setCode] = useState('');
    const handleCodeChange = (value = "") => {
        setCode(value);
    }

    const [formState, action] = useActionState(createSnippet, {
        message: ''
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set('code', code);
        startTransition(() => action(formData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="font-bold m-3">Create Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="border rounded p-2 w-full" />
                </div>
                <CodeEditor code={code} onChange={handleCodeChange} />
                {formState.message ? <div className="my-3 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
                <button type="submit" className="bg-blue-200 p-2 rounded">Create Snippet</button>
            </div>
        </form>
    )
}
