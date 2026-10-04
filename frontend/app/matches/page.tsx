import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { matches } from '@/lib/uaal-data';

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Fixtures</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          {matches.map((match) => (
            <div key={`${match.home}-${match.away}`} className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4 shadow-gold">
              <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-uaal-muted">
                <span>{match.status}</span>
                <span>{match.minute}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 text-base font-semibold text-white">
                  <div>{match.home}</div>
                  <div className="mt-2">{match.away}</div>
                </div>
                <div className="text-right text-2xl font-black text-uaal-gold">{match.score}</div>
              </div>
            </div>
          ))}
        </section>

        <BottomNav active="Matches" />
      </div>
    </main>
  );
}
