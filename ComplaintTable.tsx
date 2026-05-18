import { mockComplaints } from "@/data/mockComplaints";
import RiskLevelBadge from "./RiskLevelBadge";

export default function ComplaintTable() {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-cyan-100 p-5">
        <h3 className="text-lg font-bold text-slate-950">Complaint Records</h3>
        <p className="mt-1 text-sm text-slate-500">Mock records for demo, CSV export, and dashboard analytics.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-gradient-to-r from-cyan-50 to-emerald-50 text-xs uppercase tracking-wide text-slate-500">
            <tr><th className="px-4 py-3">ID</th><th className="px-4 py-3">Location</th><th className="px-4 py-3">Issue</th><th className="px-4 py-3">Affected</th><th className="px-4 py-3">Risk</th><th className="px-4 py-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="px-4 py-3 font-semibold text-slate-900">{complaint.id}</td>
                <td className="px-4 py-3 text-slate-600">{complaint.location}</td>
                <td className="px-4 py-3 text-slate-600">{complaint.issue}</td>
                <td className="px-4 py-3 text-slate-600">{complaint.peopleAffected}</td>
                <td className="px-4 py-3"><RiskLevelBadge level={complaint.riskLevel} /></td>
                <td className="px-4 py-3"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{complaint.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
