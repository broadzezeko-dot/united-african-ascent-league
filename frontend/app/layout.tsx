import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UAAL | United African Ascent League',
  description: 'Premier African football league platform with live scores, standings, analytics and privacy-first data features.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
