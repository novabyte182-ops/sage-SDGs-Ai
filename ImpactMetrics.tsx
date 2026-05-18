const metrics = [
  { label: "Users Helped", value: "1,240" },
  { label: "Complaints Submitted", value: "214" },
  { label: "High-Risk Cases", value: "67" },
  { label: "SDG Impact Score", value: "82%" }
];

export default function ImpactMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-3xl border border-white/70 bg-white/75 p-5 text-center shadow-premium backdrop-blur transition hover:-translate-y-1 hover:shadow-glow">
          <p className="text-3xl font-extrabold text-brand-gradient">{metric.value}</p>
          <p className="mt-1 text-sm font-bold text-slate-700">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
