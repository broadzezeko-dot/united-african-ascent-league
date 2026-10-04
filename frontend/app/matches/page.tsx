import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { MatchCard } from '@/components/MatchCard';
import { matches } from '@/lib/uaal-data';

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-3xl font-bold text-uaal-gold">Matches</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          {matches.map((match) => (
            <MatchCard key={`${match.home}-${match.away}`} match={match} />
          ))}
        </section>

        <BottomNav active="Matches" />
      </div>
    </main>
  );
}
