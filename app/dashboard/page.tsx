'use client';

import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const monthlyData = [
  { name: 'Jan', electricity: 180, travel: 220, food: 150, waste: 95 },
  { name: 'Feb', electricity: 170, travel: 210, food: 145, waste: 88 },
  { name: 'Mar', electricity: 165, travel: 205, food: 138, waste: 82 },
  { name: 'Apr', electricity: 160, travel: 198, food: 132, waste: 79 },
  { name: 'May', electricity: 150, travel: 188, food: 125, waste: 72 },
  { name: 'Jun', electricity: 142, travel: 180, food: 120, waste: 69 }
];

const categoryData = [
  { name: 'Electricity', value: 430 },
  { name: 'Travel', value: 580 },
  { name: 'Food', value: 270 },
  { name: 'Waste', value: 202 }
];

const leaderboard = [
  { name: 'Green Campus Team', score: 92 },
  { name: 'Operations', score: 88 },
  { name: 'Facilities', score: 81 },
  { name: 'Food Services', score: 76 }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Overview</h1>
          </div>
          <div className="flex items-center gap-3">
            <Input className="max-w-xs bg-slate-900" placeholder="Search data" />
            <Button>Export report</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Total footprint', value: '1,482 tCO2e', note: '-12.4% vs last year' },
            { label: 'Reduction plan', value: '294 tCO2e', note: 'Projected savings' },
            { label: 'Active goals', value: '14', note: '7 on track' },
            { label: 'Team score', value: '84/100', note: 'Top 12% in org' }
          ].map((stat) => (
            <Card key={stat.label} className="border-slate-800 bg-slate-900/70">
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-sm text-emerald-300">{stat.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Emissions by category</CardTitle>
              <CardDescription>Monthly category performance over the last six months</CardDescription>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="electricity" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="travel" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="electricity" stroke="#10b981" fill="url(#electricity)" strokeWidth={2} />
                  <Area type="monotone" dataKey="travel" stroke="#22d3ee" fill="url(#travel)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>Best performing teams this quarter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaderboard.map((team, index) => (
                <div key={team.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 font-semibold text-emerald-300">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-white">{team.name}</div>
                      <div className="text-xs text-slate-400">Reduction relative to baseline</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-emerald-300">{team.score}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Category breakdown</CardTitle>
            </CardHeader>
            <CardContent className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/70">
            <CardHeader>
              <CardTitle>Priority actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'Transition campus lighting to low-energy LEDs',
                'Shift fleet travel to hybrid vehicles and route optimization',
                'Introduce low-carbon food choices in dining halls',
                'Expand recycling and composting program coverage'
              ].map((action) => (
                <div key={action} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="text-sm text-slate-300">{action}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
