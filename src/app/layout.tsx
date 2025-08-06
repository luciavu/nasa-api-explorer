import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nasa Explorer',
  description: 'A web appplication to explore NASA API data',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased mt-5 mb-5 ml-10 mr-10`}>
        <Breadcrumb />
        {children}
      </body>
    </html>
  );
}
