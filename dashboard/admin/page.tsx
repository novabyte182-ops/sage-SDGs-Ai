import { AlertTriangle, Database, Gauge, UsersRound } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import DashboardChart from "@/components/DashboardChart";
import ComplaintTable from "@/components/ComplaintTable";
import ExportButton from "@/components/ExportButton";
import { adminStats, complaintsOverTime, queriesByModule, riskDistribution, symptomsReported } from "@/data/mockAnalytics";
import { mockComplaints } from "@/data/mockComplaints";
import { waterDataset } from "@/data/waterDataset";

const icons = [UsersRound, Gauge, Database, AlertTriangle];

export default function AdminDashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Admin Dashboard</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-950">System monitoring, complaints, and dataset management</h1>
              <p className="mt-2 text-slate-600">For project owners, data managers, support teams, and system administrators.</p>
            </div>
            <ExportButton filename="aquahealth-complaints.csv" rows={mockComplaints} label="Export Complaint CSV" />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {adminStats.map((stat, index) => <StatCard key={stat.label} {...stat} icon={icons[index]} />)}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <DashboardChart title="Queries by Module" data={queriesByModule} />
            <DashboardChart title="Risk Level Distribution" data={riskDistribution} />
            <DashboardChart title="Symptoms Reported" data={symptomsReported} />
            <DashboardChart title="Complaints Over Time" data={complaintsOverTime} type="line" />
          </div>

          <ComplaintTable />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-5"><h2 className="text-lg font-bold text-slate-950">Dataset Management</h2><p className="mt-2 text-sm leading-6 text-slate-600">{waterDataset.length} sample records loaded. Add update/edit functionality when a database is connected.</p></div>
            <div className="card p-5"><h2 className="text-lg font-bold text-slate-950">AI Error Logs</h2><p className="mt-2 text-sm leading-6 text-slate-600">No critical errors. Local fallback protects the demo when LM Arena API is unavailable.</p></div>
            <div className="card p-5"><h2 className="text-lg font-bold text-slate-950">Content Moderation</h2><p className="mt-2 text-sm leading-6 text-slate-600">Medical diagnosis, prescriptions, panic language, and private health data collection are blocked by assistant rules.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
