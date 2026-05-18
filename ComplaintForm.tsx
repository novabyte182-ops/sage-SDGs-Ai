"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";

export default function ComplaintForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-[0_14px_30px_rgba(16,185,129,0.24)]"><ClipboardCheck size={22} /></div>
        <div>
          <p className="text-sm font-bold text-emerald-700">Complaint Support</p>
          <h2 className="text-xl font-extrabold text-slate-950">Submit water report</h2>
        </div>
      </div>
      {submitted ? (
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 text-sm font-medium text-emerald-800">
          Complaint submitted successfully. Demo ID: AQH-DEMO-2026. In a real system, this would be stored in a database and visible in Admin/Client dashboards.
        </div>
      ) : (
        <div className="grid gap-4">
          <input className="rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Name, optional" />
          <input className="rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Location / area" />
          <textarea className="rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" rows={3} placeholder="Describe complaint details" />
          <select className="rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
            <option>Normal</option><option>Priority</option><option>Urgent</option><option>Critical</option>
          </select>
          <div className="rounded-2xl border border-dashed border-cyan-200 bg-gradient-to-br from-cyan-50 to-emerald-50 p-4 text-center text-xs font-bold text-cyan-700">Image upload placeholder</div>
          <button onClick={() => setSubmitted(true)} className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5">Submit Complaint</button>
        </div>
      )}
    </div>
  );
}
