import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const clubStats = [
  { metric: 'Possession', value: '58%' },
  { metric: 'Pass Accuracy', value: '84%' },
  { metric: 'Shots on Target', value: '12' },
  { metric: 'Goal Conversion', value: '18%' },
  { metric: 'Defensive Pressure', value: '89%' },
  { metric: 'Set-Piece Success', value: '76%' },
];

export default function ClubAnalyticsPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Club Analytics</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Mamelodi Sundowns</div>
            <div className="text-sm text-uaal-muted">2024 Season Performance</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {clubStats.map((stat) => (
              <div key={stat.metric} className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">{stat.metric}</div>
                <div className="mt-2 text-2xl font-black text-uaal-gold">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
