"use client";

export type ChartDatum = Record<string, string | number>;

export default function DashboardChart({ title, data, type = "bar", dataKey = "value", xKey = "name" }: { title: string; data: ChartDatum[]; type?: "bar" | "line"; dataKey?: string; xKey?: string }) {
  const values = data.map((item) => Number(item[dataKey]) || 0);
  const max = Math.max(...values, 1);

  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>
        <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-glow" />
      </div>
      {type === "line" ? (
        <div className="flex h-72 items-end gap-3 rounded-3xl border border-cyan-100/70 bg-gradient-to-br from-slate-50 to-cyan-50/70 p-4">
          {data.map((item) => {
            const value = Number(item[dataKey]) || 0;
            return (
              <div key={String(item[xKey])} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div className="rounded-t-2xl bg-gradient-to-t from-teal-700 to-cyan-400 shadow-[0_10px_18px_rgba(6,182,212,0.18)]" style={{ height: `${Math.max((value / max) * 90, 8)}%` }} />
                <p className="truncate text-center text-xs font-semibold text-slate-500">{String(item[xKey])}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4 rounded-3xl border border-cyan-100/70 bg-gradient-to-br from-slate-50 to-cyan-50/70 p-4">
          {data.map((item) => {
            const value = Number(item[dataKey]) || 0;
            return (
              <div key={String(item[xKey])}>
                <div className="mb-1 flex justify-between text-xs font-semibold text-slate-600">
                  <span>{String(item[xKey])}</span>
                  <span>{value}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white shadow-inner">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400" style={{ width: `${Math.max((value / max) * 100, 5)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
