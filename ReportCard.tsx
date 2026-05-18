import { Lightbulb } from "lucide-react";

export default function ReportCard({ title, description, action }: { title: string; description: string; action?: string }) {
  return (
    <div className="card p-5 transition duration-200 hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-4 icon-glow h-11 w-11">
        <Lightbulb size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {action && <p className="mt-4 rounded-2xl border border-cyan-100 bg-gradient-to-br from-slate-50 to-cyan-50 p-3 text-sm font-semibold text-slate-700">Recommended action: {action}</p>}
    </div>
  );
}
