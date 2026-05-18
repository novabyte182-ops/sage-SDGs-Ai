import Sidebar from "@/components/Sidebar";
import DashboardChart from "@/components/DashboardChart";
import ReportCard from "@/components/ReportCard";
import StatCard from "@/components/StatCard";
import ExportButton from "@/components/ExportButton";
import { areaWiseIssues, healthRiskTrend, riskDistribution } from "@/data/mockAnalytics";
import { mockComplaints } from "@/data/mockComplaints";
import { Building2, HeartPulse, MapPinned, Target } from "lucide-react";

const reportRows = [
  { area: "Area A", issue: "Yellow water repeated", risk: "High", recommendation: "Priority water pipeline inspection" },
  { area: "Village 3", issue: "Diarrhea reports", risk: "Emergency", recommendation: "Health camp and water testing" },
  { area: "Hostel Block A", issue: "Cloudy water", risk: "Medium", recommendation: "Storage tank cleaning and filtration check" }
];

export default function ClientDashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Client Dashboard</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-950">Community insights for decision-makers</h1>
              <p className="mt-2 text-slate-600">For NGOs, universities, water-monitoring teams, municipal bodies, and health organizations.</p>
            </div>
            <ExportButton filename="aquahealth-community-report.csv" rows={reportRows} label="Download Report" />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <StatCard label="Communities Monitored" value="18" helper="Mock coverage" icon={Building2} />
            <StatCard label="High-Risk Locations" value="7" helper="Inspection advised" icon={MapPinned} />
            <StatCard label="Health Alerts" value="24" helper="Symptoms reported" icon={HeartPulse} />
            <StatCard label="SDG Progress" value="82%" helper="Prototype score" icon={Target} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <DashboardChart title="Area-wise Water Issue Chart" data={areaWiseIssues.map((row) => ({ name: row.area, value: row.yellow + row.smell + row.cloudy }))} />
            <DashboardChart title="Health-risk Trend" data={healthRiskTrend} type="line" dataKey="risk" xKey="month" />
            <DashboardChart title="Complaint Status Overview" data={riskDistribution} />
            <div className="card p-5">
              <h3 className="mb-4 text-lg font-bold text-slate-950">Risk Heatmap Placeholder</h3>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div key={index} className={`h-16 rounded-2xl shadow-sm ${index % 5 === 0 ? "bg-red-200" : index % 3 === 0 ? "bg-orange-200" : index % 2 === 0 ? "bg-yellow-100" : "bg-green-100"}`} />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">Replace this placeholder with real map coordinates after database/GIS integration.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ReportCard title="Area A priority insight" description="Area A has repeated yellow water complaints and stomach-related symptoms." action="Pipeline inspection and public water-safety notice" />
            <ReportCard title="Village 3 health-risk cluster" description="Multiple illness reports after suspected water exposure require urgent attention." action="Water testing, medical referral, and safe water supply" />
            <ReportCard title="Hostel water storage issue" description="Cloudiness and stomach pain reports suggest storage tank or filtration concern." action="Clean tank and monitor student complaints" />
          </div>
        </div>
      </div>
    </section>
  );
}
