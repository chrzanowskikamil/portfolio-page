import { FC } from 'react';
import Link from 'next/link';
import { GithubIcon } from '@/public/icon-github';

const links = [
  { id: 0, href: '/about', label: 'About' },
  { id: 1, href: '/projects', label: 'Projects' },
  { id: 2, href: '/contact', label: 'Contact' },
  { id: 3, href: '/resume', label: 'Resume' },
  {
    id: 4,
    href: 'https://github.com/chrzanowskikamil',
    label: <GithubIcon />,
    isExternal: true,
  },
];

export const Navbar: FC = () => {
  const renderedLinks = links.map((link) => {
    return (
      <>
        <li
          key={link.id}
          className='p-2'>
          <Link
            className='flex p-4 hover:text-emerald-400 tracking-wider'
            href={link.href}
            target={link.isExternal ? '_blank' : '_self'}>
            {link.label}
          </Link>
        </li>
      </>
    );
  });

  return (
    <nav
      className='flex justify-between px-20 border-b border-b-emerald-950 text-primary-100 text-opacity-85 text-emerald-800'
      role='navigation'>
      <Link
        className='p-6 font-bold'
        href='/'>
        kamch.
      </Link>
      <ul className='flex px-20'>{renderedLinks}</ul>
    </nav>
  );
};
