type TopScorer = {
  name: string;
  club: string;
  goals: number;
};

export function TopScorerCard({ scorer }: { scorer: TopScorer }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 px-4 py-3">
      <div>
        <div className="font-bold text-white">{scorer.name}</div>
        <div className="text-sm text-uaal-muted">{scorer.club}</div>
      </div>
      <div className="rounded-full border border-uaal-gold/40 bg-uaal-gold/10 px-3 py-1 text-lg font-black text-uaal-gold">{scorer.goals}</div>
    </div>
  );
}
