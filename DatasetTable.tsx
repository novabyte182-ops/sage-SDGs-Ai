import { waterDataset } from "@/data/waterDataset";
import RiskLevelBadge from "./RiskLevelBadge";

export default function DatasetTable() {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-gradient-to-r from-cyan-50 to-emerald-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Possible Cause</th>
              <th className="px-4 py-3">Symptoms</th>
              <th className="px-4 py-3">Risk</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">SDG Links</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {waterDataset.map((record: any) => (
              <tr key={record.id} className="align-top">
                <td className="px-4 py-3 font-semibold text-slate-900">{record.water_issue_category}</td>
                <td className="px-4 py-3 text-slate-600">{record.possible_cause}</td>
                <td className="px-4 py-3 text-slate-600">{record.common_symptoms}</td>
                <td className="px-4 py-3"><RiskLevelBadge level={record.risk_level} /></td>
                <td className="px-4 py-3 text-slate-600">{record.recommended_action}</td>
                <td className="px-4 py-3 text-slate-600">{record.sdg_6_target}<br />{record.sdg_3_target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
