import { JSX, ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Gainmax C&E',
  description: 'Introduction to Gainmax C&E',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
