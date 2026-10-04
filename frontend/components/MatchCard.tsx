type Match = {
  home: string;
  away: string;
  score: string;
  minute: string;
  status: 'Live' | 'Full Time' | 'Scheduled';
};

export function MatchCard({ match }: { match: Match }) {
  return (
    <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4 shadow-gold">
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-uaal-muted">
        <span>{match.status}</span>
        <span>{match.minute}</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-base font-semibold text-white">{match.home}</div>
          <div className="mt-2 text-base font-semibold text-white">{match.away}</div>
        </div>
        <div className="text-right text-2xl font-black text-uaal-gold">{match.score}</div>
      </div>
    </div>
  );
}
