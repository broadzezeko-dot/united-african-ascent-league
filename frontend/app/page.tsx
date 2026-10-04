import { MatchCard } from '@/components/MatchCard';
import { RankingTable } from '@/components/RankingTable';
import { StatCard } from '@/components/StatCard';
import { TopScorerCard } from '@/components/TopScorerCard';

const standings = [
  { position: 1, team: 'Mamelodi Sundowns', played: 15, won: 11, drawn: 2, lost: 2, gf: 35, ga: 12, points: 35 },
  { position: 2, team: 'Kaizer Chiefs', played: 15, won: 10, drawn: 3, lost: 2, gf: 31, ga: 14, points: 33 },
  { position: 3, team: 'Al Ahly', played: 15, won: 9, drawn: 3, lost: 3, gf: 28, ga: 15, points: 30 },
  { position: 4, team: 'Enyimba', played: 15, won: 9, drawn: 2, lost: 4, gf: 25, ga: 19, points: 29 },
  { position: 5, team: 'TP Mazembe', played: 15, won: 8, drawn: 4, lost: 3, gf: 24, ga: 18, points: 28 },
];

const matches = [
  { home: 'Mamelodi Sundowns', away: 'Kaizer Chiefs', score: '2 - 1', minute: 'FT', status: 'Full Time' },
  { home: 'Al Ahly', away: 'Enyimba', score: '1 - 1', minute: '64’', status: 'Live' },
  { home: 'TP Mazembe', away: 'Raja Casablanca', score: '18:00', minute: 'Next', status: 'Scheduled' },
];

const topScorers = [
  { name: 'Khama Billiat', club: 'Kaizer Chiefs', goals: 12 },
  { name: 'Percy Tau', club: 'Al Ahly', goals: 11 },
  { name: 'Peter Shalulile', club: 'Mamelodi Sundowns', goals: 10 },
  { name: 'Meschack Elia', club: 'TP Mazembe', goals: 9 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-gold/30 bg-[radial-gradient(circle_at_top,_rgba(217,180,93,0.12),_transparent_35%),linear-gradient(180deg,#07131d,#0d1722)]">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4 shadow-gold">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-uaal-gold/70 bg-uaal-gold/10 text-lg font-black text-uaal-gold">
              UAAL
            </div>
          </div>

          <div className="flex items-center gap-4 text-2xl text-white">
            <span>◔</span>
            <span>☰</span>
            <span>▣</span>
          </div>
        </header>

        <section className="px-4 py-5">
          <div className="rounded-full border border-uaal-gold bg-uaal-gold/10 px-4 py-3 text-center text-lg font-bold tracking-wider text-uaal-gold">
            ★ UACL 2027 — NOW UNDERWAY
          </div>
        </section>

        <section className="px-5 pb-4">
          <div className="rounded-3xl border border-uaal-gold/50 bg-gradient-to-br from-[#0e1a22] via-[#101b27] to-[#0d1720] p-5 shadow-gold">
            <div className="mb-5 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-uaal-gold bg-gradient-to-br from-[#f7d170] via-[#d8a72d] to-[#804b1d] text-2xl font-black text-[#0c0e12] shadow-gold">
                UAAL
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-black uppercase tracking-tight text-uaal-gold">United African</h1>
              <h1 className="text-4xl font-black uppercase tracking-tight text-uaal-gold">Ascent League</h1>
            </div>
          </div>
        </section>

        <section className="px-5 pb-5">
          <div className="space-y-4">
            <StatCard label="Matches" value="156" tone="gold" />
            <StatCard label="Clubs" value="56" tone="neutral" />
            <StatCard label="Nations" value="52" tone="neutral" />
          </div>
        </section>

        <section className="px-5 pb-6">
          <p className="text-xl leading-relaxed text-uaal-muted">
            Africa&apos;s most prestigious continental football competition. <span className="font-bold text-uaal-gold">56 clubs. 52 nations.</span>
          </p>
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Fixtures</h2>
            <span className="text-sm text-uaal-gold">Live</span>
          </div>
          {matches.map((match) => (
            <MatchCard key={match.home} match={match} />
          ))}
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Standings</h2>
            <span className="text-sm text-uaal-gold">Updated</span>
          </div>
          <RankingTable rows={standings} />
        </section>

        <section className="space-y-4 px-5 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Top Scorers</h2>
            <span className="text-sm text-uaal-gold">League</span>
          </div>
          {topScorers.map((scorer) => (
            <TopScorerCard key={scorer.name} scorer={scorer} />
          ))}
        </section>

        <nav className="flex items-center justify-between border-t border-uaal-gold/70 bg-uaal-soft px-5 py-4">
          <div className="flex flex-1 flex-col items-center gap-1 text-xs text-uaal-gold">
            <span className="text-lg">⌂</span>
            <span>Home</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 text-xs text-uaal-muted">
            <span className="text-lg">▣</span>
            <span>Matches</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 text-xs text-uaal-muted">
            <span className="text-lg">◉</span>
            <span>Media</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 text-xs text-uaal-muted">
            <span className="text-lg">◌</span>
            <span>Players</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 text-xs text-uaal-muted">
            <span className="text-lg">⋯</span>
            <span>More</span>
          </div>
        </nav>
      </div>
    </main>
  );
}
