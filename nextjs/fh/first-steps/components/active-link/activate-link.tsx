'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './active-link.module.css';

interface Props {
  path: string;
  text: string;
}

export default function ActivateLink({ path, text }: Props) {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style['active-link']}`}
      href={path}
    >
      {text}
    </Link>
  );
}
