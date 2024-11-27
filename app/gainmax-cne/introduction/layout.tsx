import { JSX, ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introduction | Gainmax C&E',
  description: 'Gainmax initially operated as a small family business involved in subcontracting projects.',
  icons: {
    icon: '/svg/logo.svg',
  },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
