import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { TopScorerCard } from '@/components/TopScorerCard';
import { topScorers, players } from '@/lib/uaal-data';

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-3xl font-bold text-uaal-gold">Players</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <h2 className="mb-3 text-xl font-bold text-white">Top Scorers</h2>
            {topScorers.map((scorer) => (
              <TopScorerCard key={scorer.name} scorer={scorer} />
            ))}
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <h2 className="mb-3 text-xl font-bold text-white">Featured Players</h2>
            <div className="space-y-3">
              {players.map((player) => (
                <div key={player.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1720] px-3 py-3">
                  <div>
                    <div className="font-semibold text-white">{player.name}</div>
                    <div className="text-sm text-uaal-muted">{player.club} • {player.position}</div>
                  </div>
                  <div className="text-sm font-bold text-uaal-gold">{player.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BottomNav active="Players" />
      </div>
    </main>
  );
}
