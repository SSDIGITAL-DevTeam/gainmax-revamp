import { JSX, ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Gainmax Group',
  description: 'Introduction to Gainmax Group',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
