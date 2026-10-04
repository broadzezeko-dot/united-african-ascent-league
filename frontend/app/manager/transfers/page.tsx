import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const pendingTransfers = [
  {
    id: 't1',
    player: 'Khama Billiat',
    from: 'Kaizer Chiefs',
    to: 'Mamelodi Sundowns',
    fee: '$1.4M',
    status: 'pending',
  },
  {
    id: 't2',
    player: 'Percy Tau',
    from: 'Al Ahly',
    to: 'Raja Casablanca',
    fee: '$2.1M',
    status: 'pending',
  },
  {
    id: 't3',
    player: 'Meschack Elia',
    from: 'TP Mazembe',
    to: 'Wydad AC',
    fee: '$1.9M',
    status: 'approved',
  },
];

export default function TransferManagementPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/manager" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Transfer Control</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Pending Approvals</h2>
              <span className="rounded-full bg-uaal-gold/10 px-2 py-1 text-sm font-black text-uaal-gold">2</span>
            </div>
          </div>

          {pendingTransfers.map((transfer) => (
            <div key={transfer.id} className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{transfer.player}</div>
                  <div className="text-xs text-uaal-muted">{transfer.from} → {transfer.to}</div>
                </div>
                <div className={`rounded-full px-2 py-1 text-xs font-bold uppercase ${
                  transfer.status === 'approved'
                    ? 'border-uaal-green bg-uaal-green/10 text-uaal-green'
                    : 'border-uaal-gold/50 bg-uaal-gold/10 text-uaal-gold'
                }`}>
                  {transfer.status}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-bold text-white">{transfer.fee}</span>
                {transfer.status === 'pending' && (
                  <div className="flex gap-2">
                    <button className="rounded px-3 py-1 text-sm font-bold text-uaal-green hover:bg-uaal-green/10">
                      Approve
                    </button>
                    <button className="rounded px-3 py-1 text-sm font-bold text-uaal-red hover:bg-uaal-red/10">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
