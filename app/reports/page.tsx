import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const reports = [
  { name: 'Quarterly summary', status: 'Ready', date: 'April 2026' },
  { name: 'Campus emissions snapshot', status: 'Draft', date: 'May 2026' },
  { name: 'Reduction recommendations', status: 'Ready', date: 'June 2026' }
];

export default function ReportsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">reports</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Downloadable reports</h1>
          </div>
          <Button>Generate new report</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reports.map((report) => (
            <Card key={report.name} className="border-slate-800 bg-slate-900/70">
              <CardHeader>
                <CardTitle>{report.name}</CardTitle>
                <CardDescription>{report.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${report.status === 'Ready' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>
                  {report.status}
                </span>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
