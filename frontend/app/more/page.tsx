import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const menuItems = [
  'Home',
  'Fixtures',
  'Table',
  'Top Scorers',
  'Players',
  'Media',
  'Live',
  'Analytics',
  'Club History',
  'Winners Calendar',
  'Trophy Cabinets',
  'Fantasy League',
  'Fan Store',
  'Player Health',
  'Fan Betting',
  'Fan Tokens',
  'Report',
  'Players Hub',
  'Coach Performance',
  'Player Comparison',
  'Confidential Docs',
  'Match Schedule',
  'Player Ratings',
];

export default function MorePage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-uaal-gold/80 bg-[#0f1720] text-uaal-gold">UA</div>
            <h1 className="text-2xl font-bold text-uaal-gold">Menu</h1>
          </div>
          <Link href="/" className="text-2xl text-white">×</Link>
        </header>

        <section className="grid grid-cols-2 gap-4 px-5 py-5">
          {menuItems.map((item, index) => (
            <div key={item} className={`rounded-xl border px-3 py-3 text-lg font-medium ${index === 0 ? 'border-uaal-gold/50 bg-uaal-gold/10 text-uaal-gold' : 'border-white/10 bg-[#101b27] text-white'}`}>
              {item}
            </div>
          ))}
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
