'use client';

import Editor from "@monaco-editor/react";

interface Props {
    code: string;
    onChange: (value: string | undefined) => void;
}
export default function CodeEditor({ code, onChange }: Props) {
    return <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        options={
            {
                minimap: {
                    enabled: false,
                },
            }
        }
        onChange={onChange}
    />
}