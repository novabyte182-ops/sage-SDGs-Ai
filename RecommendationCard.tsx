import { CheckCircle2, AlertTriangle, BookOpen, Heart, Activity } from "lucide-react";
import RiskLevelBadge from "./RiskLevelBadge";

export default function RecommendationCard({ response, mode }: { response: any, mode: "education" | "wellbeing" | "water" }) {
  if (mode === "education") {
    return (
      <div className="card p-5 bg-white text-slate-900 border-none rounded-2xl shadow-lg">
        <div className="mb-4">
          <p className="text-sm font-bold text-sage-red flex items-center gap-1"><BookOpen size={16}/> Learn Mode</p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-950">{response.topic_summary}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600 mb-4">{response.simple_explanation}</p>
        
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase">Learning Goal</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{response.learning_goal}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase">Activity</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{response.recommended_activity}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-sage-red/5 p-4 border border-sage-red/20 mb-4">
          <p className="text-xs font-bold text-sage-red uppercase">Pop Quiz</p>
          <p className="mt-1 text-sm font-medium text-slate-800">{response.quiz_question}</p>
        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-100 pt-3">
          <span className="font-bold bg-slate-100 px-2 py-1 rounded text-slate-700">{response.progress_metric}</span>
          <span className="font-medium">{response.sdg_connection}</span>
        </div>
      </div>
    );
  }

  if (mode === "wellbeing") {
    return (
      <div className="card p-5 bg-white text-slate-900 border-none rounded-2xl shadow-lg">
        <div className="mb-4">
          <p className="text-sm font-bold text-sage-red flex items-center gap-1"><Heart size={16}/> MindCare Mode</p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-950">{response.mood_stress_summary}</h3>
        </div>
        
        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 mb-4">
          <p className="text-xs font-bold text-slate-500 uppercase">Reflection</p>
          <p className="mt-1 text-sm text-slate-800 italic font-medium">"{response.reflection_prompt}"</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-2xl bg-sage-pink/10 p-4 border border-sage-pink/20">
            <p className="text-xs font-bold text-sage-pink uppercase flex items-center gap-1"><Activity size={14}/> Breathing</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{response.breathing_exercise}</p>
          </div>
          <div className="rounded-2xl bg-sage-red/5 p-4 border border-sage-red/20">
            <p className="text-xs font-bold text-sage-red uppercase">Self-Care</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{response.self_care_action}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 p-3 border border-amber-200 mb-4 flex items-start gap-2">
          <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
          <p className="text-sm font-medium text-amber-800">{response.safety_note}</p>
        </div>

        {response.professional_help_suggestion && (
          <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl font-medium">
            {response.professional_help_suggestion}
          </div>
        )}

        <div className="text-xs text-slate-400 border-t border-slate-100 pt-3">
          {response.disclaimer}
        </div>
      </div>
    );
  }

  // mode === "water"
  return (
    <div className="card p-5 bg-white text-slate-900 border-none rounded-2xl shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-sm font-bold text-sage-red flex items-center gap-1">AquaLife Mode</p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-950">{response.issue_summary}</h3>
        </div>
        <RiskLevelBadge level={response.risk_level} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
          <p className="text-xs font-bold text-slate-500 uppercase">Possible Cause</p>
          <p className="mt-1 text-sm font-medium text-slate-800">{response.possible_cause}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
          <p className="text-xs font-bold text-slate-500 uppercase">Health Risk</p>
          <p className="mt-1 text-sm font-medium text-slate-800">{response.health_risk_awareness}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-slate-900 uppercase">Immediate Safety Steps</p>
        <div className="mt-2 flex gap-2 rounded-2xl bg-sage-red/5 border border-sage-red/20 p-3 text-sm text-slate-700">
          <CheckCircle2 className="mt-0.5 shrink-0 text-sage-red" size={16} />
          <span className="font-medium">{response.immediate_safety_steps}</span>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 font-medium mb-4">
        {response.complaint_report_suggestion}
      </div>

      <div className="text-xs text-slate-400 border-t border-slate-100 pt-3">
        {response.disclaimer}
      </div>
    </div>
  );
}
