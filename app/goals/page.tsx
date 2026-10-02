import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const goals = [
  { title: 'Reduce electricity use', current: 68, target: 50, unit: '% reduction', due: 'Q3 2026' },
  { title: 'Cut commuter travel emissions', current: 44, target: 35, unit: '% reduction', due: 'Q4 2026' },
  { title: 'Increase sustainable food procurement', current: 72, target: 85, unit: '% of spend', due: 'Q1 2027' }
];

export default function GoalsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">goals</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Goals & challenges</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal) => (
            <Card key={goal.title} className="border-slate-800 bg-slate-900/70">
              <CardHeader>
                <CardTitle>{goal.title}</CardTitle>
                <CardDescription>Due {goal.due}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-white">{goal.current}%</div>
                  <div className="text-sm text-slate-400">Target: {goal.target}%</div>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-2.5 rounded-full bg-emerald-400" style={{ width: `${goal.current}%` }} />
                </div>
                <div className="text-sm text-slate-300">{goal.unit}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
