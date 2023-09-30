import './globals.css';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import { Navbar } from '@/components';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], display: 'swap', preload: true, weight: ['200', '300', '400', '500'] });

export const metadata: Metadata = {
  title: `Portfolio`,
  description: 'Portfolio page for my projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={sourceCodePro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
