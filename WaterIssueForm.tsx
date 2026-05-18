"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { type AgentResponse } from "@/lib/aiAgent";

const categories = ["Yellow Water", "Brown Water", "Cloudy Water", "Bad Smell", "Salty Taste", "Sewage Leakage", "Diarrhea After Drinking Water", "Skin Irritation"];

export type WaterIssuePayload = {
  message: string;
  category: string;
  symptoms: string;
  location: string;
  peopleAffected: number;
  urgency: string;
};

const inputClass = "rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 font-normal outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

export default function WaterIssueForm({ onResult }: { onResult: (response: AgentResponse) => void }) {
  const [form, setForm] = useState<WaterIssuePayload>({
    message: "My tap water is yellow and smells bad. My younger brother has stomach pain after drinking it.",
    category: "Yellow Water",
    symptoms: "Stomach pain",
    location: "Hostel Block A",
    peopleAffected: 2,
    urgency: "High"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/sdg-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Request failed");
      onResult(data.response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card overflow-hidden p-5">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400" />
      <div className="mb-4 flex items-center gap-3">
        <div className="icon-glow h-11 w-11"><Sparkles size={20} /></div>
        <div>
          <p className="text-sm font-bold text-cyan-700">Water Issue Form</p>
          <h2 className="text-xl font-extrabold text-slate-950">Start water risk check</h2>
        </div>
      </div>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Location
          <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} placeholder="Area, hostel, school, village" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Water issue category
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass}>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Water description
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={inputClass} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Symptoms, optional
            <input value={form.symptoms} onChange={(e) => setForm({ ...form, symptoms: e.target.value })} className={inputClass} placeholder="e.g., stomach pain" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            People affected
            <input type="number" min={0} value={form.peopleAffected} onChange={(e) => setForm({ ...form, peopleAffected: Number(e.target.value) })} className={inputClass} />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Urgency level
          <select value={form.urgency} onChange={(e) => setForm({ ...form, urgency: e.target.value })} className={inputClass}>
            <option>Low</option><option>Medium</option><option>High</option><option>Emergency</option>
          </select>
        </label>
        <button onClick={submit} disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
          {loading && <Loader2 className="animate-spin" size={16} />}
          Generate AI Guidance
        </button>
        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
      </div>
    </div>
  );
}
