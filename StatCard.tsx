import type { LucideIcon } from "lucide-react";

export default function StatCard({ label, value, helper, icon: Icon }: { label: string; value: string; helper?: string; icon?: LucideIcon }) {
  return (
    <div className="card overflow-hidden p-5 transition duration-200 hover:-translate-y-1 hover:shadow-glow">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-cyan-100/80 to-emerald-100/50" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">{value}</p>
        </div>
        {Icon && <div className="icon-glow h-12 w-12"><Icon size={22} /></div>}
      </div>
      {helper && <p className="mt-3 text-sm font-medium text-slate-500">{helper}</p>}
    </div>
  );
}
