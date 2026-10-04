import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const squad = [
  { name: 'Khama Billiat', pos: 'FW', num: '11', rating: 8.9, status: 'fit' },
  { name: 'Percy Tau', pos: 'AM', num: '10', rating: 8.7, status: 'fit' },
  { name: 'Peter Shalulile', pos: 'ST', num: '9', rating: 8.8, status: 'fit' },
  { name: 'Meschack Elia', pos: 'LW', num: '7', rating: 8.4, status: 'recovering' },
];

export default function CoachSquadPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/coach/dashboard" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Squad Management</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-3 px-5 py-5">
          {squad.map((player) => (
            <div key={player.name} className="flex items-center justify-between rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
              <div>
                <div className="font-bold text-white">{player.name}</div>
                <div className="text-xs text-uaal-muted">{player.pos} • #{player.num}</div>
              </div>
              <div className="text-right">
                <div className="font-black text-uaal-gold">{player.rating}</div>
                <div className={`text-[10px] uppercase ${
                  player.status === 'fit' ? 'text-uaal-green' : 'text-uaal-gold'
                }`}>
                  {player.status}
                </div>
              </div>
            </div>
          ))}
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
