import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/', icon: '⌂' },
  { label: 'Fixtures', href: '/matches', icon: '▣' },
  { label: 'Table', href: '/standings', icon: '🏆' },
  { label: 'Players', href: '/players', icon: '◌' },
  { label: 'Live', href: '/live', icon: '◉' },
  { label: 'Media', href: '/media', icon: '◍' },
  { label: 'Analytics', href: '/analytics', icon: '▤' },
  { label: 'Player Health', href: '/player-health', icon: '❤' },
  { label: 'Fan Store', href: '/store', icon: '🛍' },
  { label: 'Fan Betting', href: '/betting', icon: '↗' },
  { label: 'Player Registration', href: '/player-registration', icon: '✍' },
  { label: 'Coach Portal', href: '/coach', icon: '🧑‍🏫' },
  { label: 'Manager', href: '/manager', icon: '⚙' },
  { label: 'National Anthem', href: '/manager/national-anthem', icon: '♫' },
  { label: 'Settings', href: '/manager/settings', icon: '⚑' },
];

export default function MorePage() {
  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-uaal-gold/80 bg-[#0f1720] text-[10px] font-black text-uaal-gold">
              UAAL
            </div>
          </div>
          <div className="flex items-center gap-4 text-2xl text-white">
            <span aria-label="notifications">◔</span>
            <span aria-label="close">✕</span>
            <span aria-label="settings">▣</span>
          </div>
        </header>

        <section className="space-y-3 px-5 py-5">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                index === 0 ? 'border-uaal-gold/80 bg-uaal-gold/10' : 'border-white/10 bg-uaal-soft/90'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-2xl font-medium text-white">{item.label}</span>
              </div>
              <span className="text-uaal-gold">→</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
