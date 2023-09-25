import './globals.css';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import { Navbar } from '@/components';

const kanit = Kanit({ subsets: ['latin'], display: 'swap', preload: true, weight: ['100', '200', '300', '400', '500'] });

export const metadata: Metadata = {
  title: `Portfolio`,
  description: 'Portfolio page for my projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
