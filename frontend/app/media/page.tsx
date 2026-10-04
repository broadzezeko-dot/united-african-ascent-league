import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Media</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          {[1, 2, 3].map((item) => (
            <div key={item} className="overflow-hidden rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90">
              <div className="h-40 bg-[radial-gradient(circle_at_top,_rgba(217,180,93,0.25),_transparent_40%),linear-gradient(135deg,#0d1720,#101b27)] p-4">
                <div className="flex h-full items-end justify-between">
                  <span className="rounded-full border border-uaal-gold/50 bg-black/30 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-uaal-gold">
                    Match Highlight
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white">▶</span>
                </div>
              </div>
              <div className="p-4 text-lg font-bold text-white">Match highlight #{item}</div>
            </div>
          ))}
        </section>

        <BottomNav active="Media" />
      </div>
    </main>
  );
}
