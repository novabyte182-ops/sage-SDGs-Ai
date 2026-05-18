import { Siren } from "lucide-react";

export default function EmergencyAlert() {
  return (
    <div className="rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-orange-50 p-4 text-sm text-red-900 shadow-[0_14px_30px_rgba(220,38,38,0.08)]">
      <div className="flex gap-3">
        <Siren className="mt-0.5 shrink-0" size={18} />
        <p>
          Emergency symptoms such as severe diarrhea, repeated vomiting, fever, dehydration, weakness, or illness in children require prompt medical support from a qualified doctor or local health center.
        </p>
      </div>
    </div>
  );
}
