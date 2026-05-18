import { AlertTriangle } from "lucide-react";
import { HEALTH_DISCLAIMER } from "@/lib/aiAgent";

export default function DisclaimerBox() {
  return (
    <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-cyan-50 p-4 text-sm text-amber-900 shadow-[0_14px_30px_rgba(245,158,11,0.08)]">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 shrink-0" size={18} />
        <p>{HEALTH_DISCLAIMER}</p>
      </div>
    </div>
  );
}
