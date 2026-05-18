"use client";

import { useState } from "react";
import { Bot, Send, UserRound, GraduationCap, HeartPulse, Droplets } from "lucide-react";
import RecommendationCard from "./RecommendationCard";

type Mode = "education" | "wellbeing" | "water";

const demoQueries = {
  education: "Explain the water cycle",
  wellbeing: "I feel stressed today",
  water: "My tap water smells bad and my child has diarrhea"
};

export default function AIChatBox() {
  const [mode, setMode] = useState<Mode>("education");
  const [message, setMessage] = useState(demoQueries["education"]);
  const [responses, setResponses] = useState<{ question: string; answer: any; mode: Mode }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setMessage(demoQueries[newMode]);
  };

  async function sendMessage(customMessage?: string) {
    const finalMessage = customMessage ?? message;
    if (!finalMessage.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const payload: any = { mode, message: finalMessage };
      if (mode === "water") {
        payload.symptoms = "diarrhea"; // Adding mock symptom for testing
      }

      const res = await fetch("/api/sdg-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch");

      setResponses((current) => [{ question: finalMessage, answer: data.data, mode }, ...current]);
      setMessage("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card flex min-h-[600px] flex-col overflow-hidden p-5 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage-red via-sage-pink to-sage-orange" />
      
      {/* Mode Selector */}
      <div className="mb-6 flex flex-wrap gap-2 relative z-10">
        <button onClick={() => handleModeChange("education")} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${mode === "education" ? "bg-sage-red text-white" : "bg-white/10 text-slate-300 hover:bg-white/20"}`}>
          <GraduationCap size={16} /> Learn Mode
        </button>
        <button onClick={() => handleModeChange("wellbeing")} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${mode === "wellbeing" ? "bg-sage-red text-white" : "bg-white/10 text-slate-300 hover:bg-white/20"}`}>
          <HeartPulse size={16} /> MindCare Mode
        </button>
        <button onClick={() => handleModeChange("water")} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${mode === "water" ? "bg-sage-red text-white" : "bg-white/10 text-slate-300 hover:bg-white/20"}`}>
          <Droplets size={16} /> AquaLife Mode
        </button>
      </div>

      <div className="mb-4 flex items-center gap-3 relative z-10">
        <div className="icon-glow h-12 w-12 bg-sage-red/20 text-sage-red rounded-xl flex items-center justify-center"><Bot size={22} /></div>
        <div>
          <p className="text-sm font-bold text-sage-pink">Sage SDG AI</p>
          <h2 className="text-xl font-extrabold text-white">
            {mode === "education" ? "Academic Support" : mode === "wellbeing" ? "Mental Well-being Support" : "Water Safety Guidance"}
          </h2>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 relative z-10">
        <button onClick={() => sendMessage(demoQueries[mode])} className="rounded-full border border-sage-red/50 bg-sage-red/10 px-3 py-1.5 text-xs font-bold text-sage-pink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-sage-red/20">
          Demo: {demoQueries[mode]}
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/10 bg-slate-800/50 p-4 relative z-10 shadow-inner">
        {responses.length === 0 && !loading && !error && (
          <div className="rounded-3xl border border-white/5 bg-white/5 p-4 text-sm leading-6 text-slate-300 shadow-sm backdrop-blur text-center">
            Select a mode above and ask a question to see the unified AI agent in action.
          </div>
        )}
        
        {error && (
          <div className="rounded-3xl border border-red-500/50 bg-red-500/10 p-4 text-sm leading-6 text-red-200 shadow-sm backdrop-blur">
            Error: {error}
          </div>
        )}

        {responses.map((item, index) => (
          <div key={`${item.question}-${index}`} className="space-y-3">
            <div className="flex gap-2 rounded-2xl bg-slate-700/80 p-3 text-sm font-medium text-slate-200 shadow-sm"><UserRound size={18} className="shrink-0 text-sage-pink" />{item.question}</div>
            <RecommendationCard response={item.answer} mode={item.mode} />
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-center p-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-sage-red border-t-transparent"></div>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2 relative z-10">
        <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sage-red focus:ring-4 focus:ring-sage-red/20 placeholder:text-slate-500" placeholder="Ask something..." />
        <button onClick={() => sendMessage()} disabled={loading} className="rounded-2xl bg-gradient-to-br from-sage-red to-rose-700 px-4 text-white shadow-glow transition hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
