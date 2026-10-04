import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { players } from '@/lib/uaal-data';

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Players</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-3 px-5 py-5">
          {players.map((player) => (
            <div key={player.name} className="flex items-center justify-between rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
              <div>
                <div className="font-bold text-white">{player.name}</div>
                <div className="text-xs text-uaal-muted">{player.position} • {player.club}</div>
              </div>
              <div className="rounded-full border border-uaal-gold/50 bg-uaal-gold/10 px-2 py-1 text-sm font-black text-uaal-gold">
                {player.rating}
              </div>
            </div>
          ))}
        </section>

        <BottomNav active="Players" />
      </div>
    </main>
  );
}
