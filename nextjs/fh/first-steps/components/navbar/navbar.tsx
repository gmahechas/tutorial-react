import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import ActivateLink from '../active-link/activate-link';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export default function NavBar() {
  return (
    <div className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center'>
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {navItems.map((item) => (
        <ActivateLink key={item.path} {...item} />
      ))}
    </div>
  );
}
