'use server';

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Snippet } from "@/generated/prisma";
import db from "@/db";

export async function createSnippet(formState: { message: string }, formData: FormData) {
    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 3) {
            return { message: "Title must be at least 3 characters long" };
        }

        if (typeof code !== "string" || code.length < 10) {
            return { message: "Code must be at least 10 characters long" };
        }

        await db.snippet.create({
            data: {
                title,
                code,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message };
        }
        return { message: "Something went wrong" };
    }
    revalidatePath('/');
    redirect(`/`);
}

export async function editSnippet(snippet: Snippet) {
    await db.snippet.update({
        where: { id: snippet.id },
        data: snippet,
    });
    revalidatePath(`/snippets/${snippet.id}`);
    redirect(`/snippets/${snippet.id}`);
}


export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });
    revalidatePath('/');
    redirect(`/`);
}