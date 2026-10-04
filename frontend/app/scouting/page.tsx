import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const scoutReports = [
  {
    id: 's1',
    player: 'Ahmed Al-Sayed',
    age: 23,
    position: 'Midfielder',
    club: 'FC Cairo',
    rating: 7.8,
    report: 'Strong technical ability, good vision',
  },
  {
    id: 's2',
    player: 'Blessing Eleke',
    age: 21,
    position: 'Winger',
    club: 'Lagos FC',
    rating: 7.5,
    report: 'Pace and dribbling skills impressive',
  },
  {
    id: 's3',
    player: 'Samuel Osei',
    age: 26,
    position: 'Defender',
    club: 'Accra Hearts',
    rating: 7.9,
    report: 'Solid defender, leadership qualities',
  },
];

export default function ScoutingPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Scouting</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Scouting Reports</h2>
              <span className="rounded-full bg-uaal-gold/10 px-2 py-1 text-sm font-black text-uaal-gold">3</span>
            </div>
          </div>

          {scoutReports.map((report) => (
            <div key={report.id} className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{report.player}</div>
                  <div className="text-xs text-uaal-muted">{report.position} • {report.club}</div>
                </div>
                <div className="text-center">
                  <div className="rounded-full border border-uaal-gold/50 bg-uaal-gold/10 px-2 py-1 text-sm font-black text-uaal-gold">
                    {report.rating}
                  </div>
                  <div className="text-[10px] text-uaal-muted">Age {report.age}</div>
                </div>
              </div>
              <div className="text-xs text-uaal-muted">{report.report}</div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-lg border border-uaal-gold/50 bg-uaal-gold/10 py-1 text-xs font-bold text-uaal-gold hover:bg-uaal-gold/20">
                  View Profile
                </button>
                <button className="flex-1 rounded-lg border border-uaal-gold/50 bg-uaal-gold/10 py-1 text-xs font-bold text-uaal-gold hover:bg-uaal-gold/20">
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
