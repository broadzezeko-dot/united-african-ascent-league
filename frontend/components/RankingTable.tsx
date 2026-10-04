type RankingRow = {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  points: number;
};

export function RankingTable({ rows }: { rows: RankingRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90">
      <div className="grid grid-cols-[42px_1fr_54px_54px_54px_54px_54px] gap-2 border-b border-uaal-gold/30 px-3 py-3 text-[10px] uppercase tracking-[0.12em] text-uaal-muted">
        <span>#</span>
        <span>Club</span>
        <span>P</span>
        <span>W</span>
        <span>D</span>
        <span>GF</span>
        <span>Pts</span>
      </div>
      {rows.map((row) => (
        <div key={row.team} className="grid grid-cols-[42px_1fr_54px_54px_54px_54px_54px] gap-2 border-b border-uaal-gold/10 px-3 py-3 text-sm text-white last:border-b-0">
          <span className="font-bold text-uaal-gold">{row.position}</span>
          <span className="truncate">{row.team}</span>
          <span>{row.played}</span>
          <span>{row.won}</span>
          <span>{row.drawn}</span>
          <span>{row.gf}</span>
          <span className="font-bold text-uaal-gold">{row.points}</span>
        </div>
      ))}
    </div>
  );
}
