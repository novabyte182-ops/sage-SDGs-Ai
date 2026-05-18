"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function FeedbackWidget() {
  const [rating, setRating] = useState<number | null>(null);
  return (
    <div className="card p-5">
      <p className="text-sm font-bold text-cyan-700">Feedback</p>
      <h3 className="mt-1 text-lg font-bold text-slate-950">Was this guidance helpful?</h3>
      <div className="mt-4 flex gap-2 rounded-2xl border border-cyan-100 bg-gradient-to-r from-white to-cyan-50/60 p-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <button key={item} onClick={() => setRating(item)} className={item <= (rating ?? 0) ? "text-yellow-500 transition hover:scale-110" : "text-slate-300 transition hover:scale-110 hover:text-yellow-300"}>
            <Star fill="currentColor" size={24} />
          </button>
        ))}
      </div>
      {rating && <p className="mt-3 text-sm text-slate-600">Thank you. Demo rating saved locally.</p>}
    </div>
  );
}
