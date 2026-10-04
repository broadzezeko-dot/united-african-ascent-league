import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const managerStats = [
  { label: 'Active Teams', value: '56' },
  { label: 'Total Players', value: '1,848' },
  { label: 'Pending Transfers', value: '42' },
  { label: 'Scouting Reports', value: '156' },
];

const managerActions = [
  { title: 'League Settings', desc: 'Configure UAAL competition rules', icon: '⚙️' },
  { title: 'Approve Transfers', desc: '12 pending approvals', icon: '↔️' },
  { title: 'Manage Fixtures', desc: 'Schedule and update matches', icon: '📅' },
  { title: 'Monitor Compliance', desc: 'Player registration and contracts', icon: '✓' },
  { title: 'Audit Logs', desc: 'View all system activity', icon: '📋' },
  { title: 'Financial Reports', desc: 'League revenue and spending', icon: '💰' },
];

export default function ManagerDashboardPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-uaal-gold/80 bg-[#0f1720] text-sm font-black text-uaal-gold">M</div>
            <h1 className="text-2xl font-bold text-uaal-gold">Manager</h1>
          </div>
          <Link href="/" className="text-2xl text-white">⨯</Link>
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">League Overview</div>
            <div className="grid grid-cols-2 gap-3">
              {managerStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">{stat.label}</div>
                  <div className="mt-2 text-2xl font-black text-uaal-gold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {managerActions.map((action) => (
              <Link
                key={action.title}
                href={`/manager/${action.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-3 rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4 transition hover:border-uaal-gold/60"
              >
                <div className="text-2xl">{action.icon}</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{action.title}</div>
                  <div className="text-xs text-uaal-muted">{action.desc}</div>
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
