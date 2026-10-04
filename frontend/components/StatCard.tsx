type StatCardProps = {
  label: string;
  value: string;
  tone?: 'gold' | 'neutral';
};

export function StatCard({ label, value, tone = 'neutral' }: StatCardProps) {
  return (
    <div className={`rounded-2xl border px-4 py-3 ${tone === 'gold' ? 'border-uaal-gold bg-uaal-gold/10' : 'border-uaal-gold/30 bg-uaal-soft/90'}`}>
      <div className="text-[10px] uppercase tracking-[0.18em] text-uaal-muted">{label}</div>
      <div className="mt-1 text-3xl font-black text-white">{value}</div>
    </div>
  );
}
