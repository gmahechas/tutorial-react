'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';



export async function createSnippet(formState: { message: string }, formData: FormData) {
	try {
		const title = formData.get('title') as string;
		const code = formData.get('code') as string;

		if (typeof title !== 'string' || title.length < 3) {
			return {
				message: 'Title must be longer',
			}
		}

		if (typeof code !== 'string' || code.length < 3) {
			return {
				message: 'Code must be longer',
			}
		}

		const snippet = await db.snippet.create({ data: { title, code } });
	} catch (error: unknown) {
		if (error instanceof Error) {
			return {
				message: error.message,
			}
		}

		return {
			message: 'something went wrong...',
		}
	}

	revalidatePath('/');
	redirect('/');
}

export async function editSnippet(id: number, code: string) {
	await db.snippet.update({
		where: { id },
		data: { code },
	});

	revalidatePath(`/snippets/${id}`);
	redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
	await db.snippet.delete({
		where: { id },
	});

	revalidatePath('/');
	redirect('/');
}