import { JSX, ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Gainmax I&T',
  description: 'Introduction to Gainmax I&T',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
