import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Analytics</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">xG</div>
              <div className="mt-2 text-2xl font-black text-uaal-gold">1.83</div>
            </div>
            <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">Press</div>
              <div className="mt-2 text-2xl font-black text-uaal-gold">64%</div>
            </div>
          </div>

          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Performance</div>
            <div className="space-y-3 text-sm text-uaal-muted">
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Top side: Mamelodi Sundowns</div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Most creative team: Al Ahly</div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Weakest defence: Wydad AC</div>
            </div>
          </div>
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
