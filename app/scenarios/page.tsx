'use client';

import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { compareScenario } from '@/lib/emissions';

const scenarios = [
  { name: 'Switch transport fleet', baseline: 420, reduction: 96 },
  { name: 'Reduce electricity consumption', baseline: 310, reduction: 72 },
  { name: 'Lower food emissions', baseline: 280, reduction: 61 },
  { name: 'Expand waste diversion', baseline: 205, reduction: 47 }
];

export default function ScenariosPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">scenarios</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Reduction planner</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {scenarios.map((scenario) => {
            const result = compareScenario(scenario.baseline, scenario.reduction);

            return (
              <Card key={scenario.name} className="border-slate-800 bg-slate-900/70">
                <CardHeader>
                  <CardTitle>{scenario.name}</CardTitle>
                  <CardDescription>Projected impact over current baseline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Baseline</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{scenario.baseline}</div>
                    </div>
                    <div className="rounded-xl bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Savings</div>
                      <div className="mt-2 text-2xl font-semibold text-emerald-300">{result.savings}</div>
                    </div>
                    <div className="rounded-xl bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Projected</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{result.projected}</div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Reduction achieved</span>
                      <span>{result.savingsPercent}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-800">
                      <div className="h-2.5 rounded-full bg-emerald-400" style={{ width: `${result.savingsPercent}%` }} />
                    </div>
                  </div>

                  <Button>Compare scenario</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
