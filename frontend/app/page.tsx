import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { MatchCard } from '@/components/MatchCard';
import { RankingTable } from '@/components/RankingTable';
import { StatCard } from '@/components/StatCard';
import { TopScorerCard } from '@/components/TopScorerCard';
import { standings, matches, topScorers } from '@/lib/uaal-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-[radial-gradient(circle_at_top,_rgba(217,180,93,0.18),_transparent_35%),linear-gradient(180deg,#07131d,#0d1722)] px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4 shadow-gold">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-uaal-gold/80 bg-[#0f1720] text-[10px] font-black text-uaal-gold shadow-gold">
              UAAL
            </div>
          </div>

          <div className="flex items-center gap-4 text-2xl text-white">
            <span aria-label="Notifications">◔</span>
            <Link href="/more" aria-label="Open menu" className="text-white">☰</Link>
            <span aria-label="Settings">▣</span>
          </div>
        </header>

        <section className="px-4 py-5">
          <div className="rounded-full border border-uaal-gold/80 bg-uaal-gold/10 px-4 py-3 text-center text-lg font-bold tracking-wider text-uaal-gold">
            ★ UACL 2027 — NOW UNDERWAY
          </div>
        </section>

        <section className="px-5 pb-4">
          <div className="rounded-[28px] border border-uaal-gold/60 bg-gradient-to-br from-[#0d1720] via-[#0f1d29] to-[#101b27] p-5 shadow-gold">
            <div className="mb-5 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-[5px] border-uaal-gold bg-gradient-to-br from-[#f7d170] via-[#d8a72d] to-[#804b1d] text-2xl font-black text-[#0b0d10] shadow-gold">
                UAAL
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-[2.3rem] font-black uppercase tracking-tight text-uaal-gold">United African</h1>
              <h1 className="text-[2.3rem] font-black uppercase tracking-tight text-uaal-gold">Ascent League</h1>
            </div>
          </div>
        </section>

        <section className="px-5 pb-5">
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Matches" value="156" tone="gold" />
            <StatCard label="Clubs" value="56" tone="neutral" />
            <StatCard label="Nations" value="52" tone="neutral" />
          </div>
        </section>

        <section className="px-5 pb-6">
          <p className="text-[1.05rem] leading-relaxed text-uaal-muted">
            Africa&apos;s most prestigious continental football competition. <span className="font-bold text-uaal-gold">56 clubs. 52 nations.</span>
          </p>
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Fixtures</h2>
            <Link href="/matches" className="text-sm text-uaal-gold">View all</Link>
          </div>
          {matches.slice(0, 3).map((match) => (
            <MatchCard key={match.home} match={match} />
          ))}
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Standings</h2>
            <Link href="/standings" className="text-sm text-uaal-gold">Full table</Link>
          </div>
          <RankingTable rows={standings.slice(0, 5)} />
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Top Scorers</h2>
            <Link href="/players" className="text-sm text-uaal-gold">All players</Link>
          </div>
          {topScorers.slice(0, 4).map((scorer) => (
            <TopScorerCard key={scorer.name} scorer={scorer} />
          ))}
        </section>

        <BottomNav active="Home" />
      </div>
    </main>
  );
}
