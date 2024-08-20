import { notFound } from 'next/navigation';
import { PageProps } from '@/utils/util.interface';
import { db } from '@/db';
import React from 'react';
import SnippetEditForm from '@/components/snippet-edit-form';

interface Props {
  id: string;
}

export default async function SnippetEditPage(props: PageProps<Props>) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({ where: { id } });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
