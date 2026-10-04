import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const coachStats = [
  { label: 'Players', value: '28' },
  { label: 'Next Match', value: '3d' },
  { label: 'Form', value: '5W 2D' },
  { label: 'Avg Rating', value: '8.2' },
];

const coachTools = [
  { title: 'Squad Management', desc: 'View and manage player roster', icon: '👥' },
  { title: 'Match Prep', desc: 'Analyze opponent and tactics', icon: '📊' },
  { title: 'Training Sessions', desc: 'Schedule and track workload', icon: '🏋️' },
  { title: 'Player Performance', desc: 'Detailed match and season stats', icon: '📈' },
  { title: 'Injury Reports', desc: 'Player health and recovery status', icon: '🏥' },
  { title: 'Video Analysis', desc: 'Breakdown and highlights library', icon: '🎬' },
];

export default function CoachDashboardPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-uaal-gold/80 bg-[#0f1720] text-sm font-black text-uaal-gold">C</div>
            <h1 className="text-2xl font-bold text-uaal-gold">Coach</h1>
          </div>
          <Link href="/" className="text-2xl text-white">⨯</Link>
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Squad Overview</div>
            <div className="grid grid-cols-2 gap-3">
              {coachStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">{stat.label}</div>
                  <div className="mt-2 text-2xl font-black text-uaal-gold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {coachTools.map((tool) => (
              <Link
                key={tool.title}
                href={`/coach/${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-3 rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4 transition hover:border-uaal-gold/60"
              >
                <div className="text-2xl">{tool.icon}</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{tool.title}</div>
                  <div className="text-xs text-uaal-muted">{tool.desc}</div>
                </div>
                <div className="text-uaal-gold">→</div>
              </Link>
            ))}
          </div>
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
