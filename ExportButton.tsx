"use client";

import { Download } from "lucide-react";
import { convertToCsv, downloadCsv } from "@/lib/exportCsv";

export default function ExportButton<T extends object>({ filename, rows, label = "Export CSV" }: { filename: string; rows: T[]; label?: string }) {
  return (
    <button onClick={() => downloadCsv(filename, convertToCsv(rows))} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-950 via-teal-800 to-cyan-700 px-4 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5">
      <Download size={16} />
      {label}
    </button>
  );
}
