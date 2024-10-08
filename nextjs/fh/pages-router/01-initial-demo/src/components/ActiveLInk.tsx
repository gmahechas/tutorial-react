import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  text: string;
};

const isActive = (currentPath: string, href: string) => currentPath === href;

const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      {text} {isActive(href, asPath) && '*'}
    </Link>
  );
};

export default ActiveLink;
