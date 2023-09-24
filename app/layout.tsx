import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

const inter = League_Spartan({ subsets: ['latin'], display: 'swap', preload: true });

export const metadata: Metadata = {
  title: `Portfolio`,
  description: 'Portfolio page for my projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
