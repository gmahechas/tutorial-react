import NavBar from '@/components/navbar/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Desc',
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className='flex flex-col items-center p-24'>
        <span className='text-la'></span>
        {children}
      </main>
    </>
  );
}
