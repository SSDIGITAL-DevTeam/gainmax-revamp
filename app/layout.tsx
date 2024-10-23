import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layouts/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Gainmax Group',
  description: 'Gainmax Group',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
