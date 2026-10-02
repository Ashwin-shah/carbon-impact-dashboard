'use client';

import { useMemo, useState } from 'react';

import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { calculateEmissions } from '@/lib/emissions';

const categories = [
  { value: 'electricity', label: 'Electricity', modes: ['grid', 'solar'] },
  { value: 'travel', label: 'Travel', modes: ['car', 'bus', 'train', 'flight'] },
  { value: 'food', label: 'Food', modes: ['meat', 'dairy', 'vegan', 'local'] },
  { value: 'waste', label: 'Waste', modes: ['landfill', 'recycled', 'compost', 'mixed'] }
] as const;

export default function CalculatorPage() {
  const [category, setCategory] = useState<(typeof categories)[number]['value']>('electricity');
  const [amount, setAmount] = useState(120);
  const [mode, setMode] = useState('grid');

  const result = useMemo(() => calculateEmissions({ category, amount, mode }), [category, amount, mode]);

  const selectedCategory = categories.find((item) => item.value === category) ?? categories[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">calculator</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Carbon calculator</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Enter your activity</CardTitle>
              <CardDescription>Use the emission factors below to estimate emissions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Category</label>
                <select
                  value={category}
                  onChange={(event) => {
                    const nextCategory = event.target.value as (typeof categories)[number]['value'];
                    const nextMode = categories.find((item) => item.value === nextCategory)?.modes[0] ?? 'default';
                    setCategory(nextCategory);
                    setMode(nextMode);
                  }}
                  className="h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none"
                >
                  {categories.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Amount</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(Number(event.target.value) || 0)}
                  placeholder="Enter amount"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Emission source</label>
                <select
                  value={mode}
                  onChange={(event) => setMode(event.target.value)}
                  className="h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none"
                >
                  {selectedCategory.modes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                <div className="text-sm text-emerald-200">Estimated emissions</div>
                <div className="mt-2 text-3xl font-bold text-white">{result.label}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Default factors</CardTitle>
              <CardDescription>These values are clearly stated and auditable.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ['Electricity', '0.233 kgCO2e/kWh'],
                ['Travel (car)', '0.18 kgCO2e/km'],
                ['Travel (train)', '0.04 kgCO2e/km'],
                ['Food (meat)', '2.5 kgCO2e/meal'],
                ['Waste (landfill)', '0.5 kgCO2e/kg']
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-medium text-emerald-300">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
