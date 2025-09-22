import AppProviders from '@/components/providers/AppProviders';
import { vt323 } from '@/styles/Fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZKFlexoor',
  description: 'Flex your HYPE Balance ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
