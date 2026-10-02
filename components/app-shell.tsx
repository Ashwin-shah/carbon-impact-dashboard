import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/scenarios', label: 'Scenarios' },
  { href: '/goals', label: 'Goals' },
  { href: '/reports', label: 'Reports' }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-lg font-bold text-emerald-300">
              C
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-emerald-300">CARBON</div>
              <div className="text-xs text-slate-400">impact dashboard</div>
            </div>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/dashboard" className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20">
            Open dashboard
          </Link>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
