import Link from 'next/link';

export function BottomNav({ active }: { active: string }) {
  const items = [
    { label: 'Home', href: '/', icon: '⌂' },
    { label: 'Matches', href: '/matches', icon: '▣' },
    { label: 'Media', href: '/media', icon: '◉' },
    { label: 'Players', href: '/players', icon: '◌' },
    { label: 'More', href: '/more', icon: '⋯' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-uaal-gold/70 bg-uaal-soft px-5 py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-1 text-xs ${active === item.label ? 'text-uaal-gold' : 'text-uaal-muted'}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
