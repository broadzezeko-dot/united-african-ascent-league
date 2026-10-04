import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

export default function LivePage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Live</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-uaal-muted">
              <span>Live</span>
              <span>64’</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-white">
              <div className="flex-1">
                <div className="text-base font-semibold">Al Ahly</div>
                <div className="mt-2 text-base font-semibold">Enyimba</div>
              </div>
              <div className="text-right text-2xl font-black text-uaal-gold">1 - 1</div>
            </div>
          </div>

          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Live updates</div>
            <div className="space-y-3 text-sm text-uaal-muted">
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Possession: Al Ahly 58% • Enyimba 42%</div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Shots: 8 • 6</div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1720] p-3">Key event: Enyimba equaliser in the 62nd minute.</div>
            </div>
          </div>
        </section>

        <BottomNav active="Matches" />
      </div>
    </main>
  );
}
