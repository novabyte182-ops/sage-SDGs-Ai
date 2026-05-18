const queries = [
  { query: "Yellow water and bad smell", risk: "High", date: "Today" },
  { query: "Cloudy hostel water", risk: "Medium", date: "Yesterday" },
  { query: "Sewage leakage near pipeline", risk: "Emergency", date: "May 12" }
];

export default function QueryHistory() {
  return (
    <div className="card p-5">
      <h3 className="text-lg font-bold text-slate-950">Previous Query History</h3>
      <div className="mt-4 grid gap-3">
        {queries.map((item) => (
          <div key={item.query} className="flex items-center justify-between rounded-2xl border border-cyan-100 bg-gradient-to-r from-white to-cyan-50/60 p-3 text-sm">
            <div><p className="font-semibold text-slate-900">{item.query}</p><p className="text-slate-500">{item.date}</p></div>
            <span className="font-bold text-cyan-700">{item.risk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
