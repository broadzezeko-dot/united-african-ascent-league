'use client';

import Link from 'next/link';
import { SignaturePad } from '@/components/SignaturePad';

const players = [
  { name: 'Khama Billiat', position: 'Forward', status: 'Ready', club: 'Kaizer Chiefs' },
  { name: 'Percy Tau', position: 'Attacking Mid', status: 'Ready', club: 'Al Ahly' },
  { name: 'Peter Shalulile', position: 'Striker', status: 'Checked', club: 'Mamelodi Sundowns' },
];

const formation = [
  { name: 'GK', x: '50%', y: '90%' },
  { name: 'LB', x: '18%', y: '65%' },
  { name: 'CB', x: '38%', y: '65%' },
  { name: 'RB', x: '82%', y: '65%' },
  { name: 'CM', x: '50%', y: '45%' },
  { name: 'LW', x: '22%', y: '30%' },
  { name: 'ST', x: '50%', y: '20%' },
  { name: 'RW', x: '78%', y: '30%' },
];

export default function CoachPortalPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Coach Portal</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-5 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Player registration & signature</div>
            <SignaturePad label="Signature on registration" />
            <SignaturePad label="Signature on pitch entry" />
          </div>

          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Registered players</div>
            <div className="space-y-3">
              {players.map((player) => (
                <div key={player.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1720] p-3">
                  <div>
                    <div className="font-bold text-white">{player.name}</div>
                    <div className="text-xs text-uaal-muted">{player.position} • {player.club}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-uaal-gold">{player.status}</div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-uaal-muted">Signed</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">Formation builder</div>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-uaal-gold/50 bg-[#091923]">
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-uaal-gold/50" />
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-uaal-gold/30" />
              <div className="absolute left-1/2 top-1/2 h-20 w-52 -translate-x-1/2 -translate-y-1/2 border border-uaal-gold/30" />
              <div className="absolute left-1/2 top-1/2 h-52 w-1 -translate-x-1/2 -translate-y-1/2 bg-uaal-gold/30" />

              {formation.map((slot) => (
                <div
                  key={slot.name}
                  className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-uaal-gold bg-[#10202b] text-[10px] font-black text-uaal-gold"
                  style={{ left: slot.x, top: slot.y }}
                >
                  {slot.name}
                </div>
              ))}
            </div>
            <div className="mt-3 text-sm text-uaal-muted">Drag and drop formation is synced to media and manager dashboard.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
