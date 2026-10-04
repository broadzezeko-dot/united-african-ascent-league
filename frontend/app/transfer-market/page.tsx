import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const marketListings = [
  {
    id: 'tm1',
    player: 'Khama Billiat',
    position: 'Forward',
    club: 'Kaizer Chiefs',
    price: '$1.4M',
    interest: '3 clubs',
  },
  {
    id: 'tm2',
    player: 'Percy Tau',
    position: 'Attacking Mid',
    club: 'Al Ahly',
    price: '$2.1M',
    interest: '5 clubs',
  },
  {
    id: 'tm3',
    player: 'Meschack Elia',
    position: 'Winger',
    club: 'TP Mazembe',
    price: '$1.9M',
    interest: '4 clubs',
  },
];

export default function TransferMarketPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Transfer Market</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Available Players</div>
            <div className="text-sm text-uaal-muted">Players available for transfer this window</div>
          </div>

          {marketListings.map((listing) => (
            <div key={listing.id} className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{listing.player}</div>
                  <div className="text-xs text-uaal-muted">{listing.position} • {listing.club}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-uaal-gold">{listing.price}</div>
                  <div className="text-[10px] text-uaal-muted">{listing.interest}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg bg-uaal-gold/10 py-2 text-xs font-bold text-uaal-gold hover:bg-uaal-gold/20">
                  Make Offer
                </button>
                <button className="flex-1 rounded-lg border border-uaal-gold/30 py-2 text-xs font-bold text-uaal-gold hover:bg-uaal-gold/10">
                  Details
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
