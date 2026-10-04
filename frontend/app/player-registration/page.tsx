import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';

const regSteps = [
  { step: 1, title: 'Personal Info', status: 'completed' },
  { step: 2, title: 'Medical Check', status: 'completed' },
  { step: 3, title: 'Contract Details', status: 'in-progress' },
  { step: 4, title: 'Final Approval', status: 'pending' },
];

export default function PlayerRegistrationPage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Registration</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="text-lg font-bold text-white">Registration Progress</div>
            <div className="mt-4 space-y-3">
              {regSteps.map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                    item.status === 'completed'
                      ? 'border-uaal-green bg-uaal-green/10 text-uaal-green'
                      : item.status === 'in-progress'
                      ? 'border-uaal-gold/50 bg-uaal-gold/10 text-uaal-gold'
                      : 'border-white/10 bg-[#0d1720] text-uaal-muted'
                  }`}>
                    {item.status === 'completed' ? '✓' : item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-uaal-muted capitalize">{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <h2 className="text-lg font-bold text-white">Contract Details</h2>
            <div className="mt-4 space-y-3 text-sm text-uaal-muted">
              <div className="flex items-center justify-between">
                <span>Club</span>
                <span className="text-white">Mamelodi Sundowns</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Position</span>
                <span className="text-white">Forward</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Contract Length</span>
                <span className="text-white">3 years</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Salary (Annual)</span>
                <span className="text-uaal-gold">$450K</span>
              </div>
            </div>
          </div>
        </section>

        <BottomNav active="More" />
      </div>
    </main>
  );
}
