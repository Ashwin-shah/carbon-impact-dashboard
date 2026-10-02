import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featureCards = [
  {
    title: 'Carbon calculator',
    text: 'Capture emissions from electricity, travel, food, and waste using clearly defined calculation factors.'
  },
  {
    title: 'Interactive dashboard',
    text: 'Monitor total emissions, category trends, and month-over-month performance in real time.'
  },
  {
    title: 'Reduction planner',
    text: 'Compare scenarios like switching fleet vehicles, reducing electricity, or changing catering habits.'
  },
  {
    title: 'Goals & teams',
    text: 'Track team challenges, leaderboards, and progress toward sustainability commitments.'
  }
];

export default function Home() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              sustainability platform
            </div>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Measure, reduce, and report your carbon footprint.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Help teams and organizations understand their emissions, compare reduction scenarios, and build credible action plans.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/calculator">
                <Button size="lg">Start calculating</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  View dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-emerald-950/30">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Annual emissions</p>
                <h2 className="text-3xl font-bold text-white">1,482 tCO2e</h2>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">-12.4%</div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Electricity', value: '430 tCO2e', color: 'bg-emerald-400' },
                { label: 'Travel', value: '580 tCO2e', color: 'bg-cyan-400' },
                { label: 'Food', value: '270 tCO2e', color: 'bg-violet-400' },
                { label: 'Waste', value: '202 tCO2e', color: 'bg-amber-400' }
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: item.label === 'Travel' ? '72%' : item.label === 'Electricity' ? '55%' : item.label === 'Food' ? '35%' : '28%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Everything needed for a campus sustainability program</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 h-10 w-10 rounded-xl bg-emerald-500/15 text-center leading-10 text-emerald-300">•</div>
              <h3 className="mb-3 text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
