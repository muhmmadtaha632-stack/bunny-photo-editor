import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bunny Photo Editor - Free AI Photo Editor & Image Generator',
  description: 'Edit, generate, and design images online for free. Powered by AI technology.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
