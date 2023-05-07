import { Nunito } from 'next/font/google';

import NavMenu from '@/components/NavMenu/NavMenu';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'MySpace Clone',
  description: 'Clone following fireship.io tutorials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
