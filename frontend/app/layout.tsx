import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAAL | United African Ascent League',
  description: 'Premier analytics-driven football league platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
