import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { RankingTable } from '@/components/RankingTable';
import { standings } from '@/lib/uaal-data';

export default function StandingsPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-3xl font-bold text-uaal-gold">Standings</h1>
          <div className="w-8" />
        </header>

        <section className="px-5 py-5">
          <RankingTable rows={standings} />
        </section>

        <BottomNav active="Matches" />
      </div>
    </main>
  );
}
