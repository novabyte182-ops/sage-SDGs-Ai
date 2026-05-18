"use client";

import { useState } from "react";
import { ClipboardList, Droplet, MessageSquare, ShieldAlert } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import AIChatBox from "@/components/AIChatBox";
import WaterIssueForm from "@/components/WaterIssueForm";
import RecommendationCard from "@/components/RecommendationCard";
import ComplaintForm from "@/components/ComplaintForm";
import FeedbackWidget from "@/components/FeedbackWidget";
import QueryHistory from "@/components/QueryHistory";
import EmergencyAlert from "@/components/EmergencyAlert";
import DisclaimerBox from "@/components/DisclaimerBox";
import type { AgentResponse } from "@/lib/aiAgent";

export default function UserDashboardPage() {
  const [response, setResponse] = useState<AgentResponse | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <div className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">User Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">Water safety guidance and complaint support</h1>
            <p className="mt-2 text-slate-600">For citizens, students, families, hostel residents, and communities.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <StatCard label="My Queries" value="12" helper="3 saved" icon={MessageSquare} />
            <StatCard label="Submitted Complaints" value="4" helper="1 under review" icon={ClipboardList} />
            <StatCard label="Current Risk" value={response?.riskLevel ?? "High"} helper="Based on last query" icon={ShieldAlert} />
            <StatCard label="Saved Advice" value="7" helper="Download ready" icon={Droplet} />
          </div>

          <EmergencyAlert />
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <AIChatBox />
            <WaterIssueForm onResult={setResponse} />
          </div>
          {response && <RecommendationCard response={response} />}
          <div className="grid gap-6 lg:grid-cols-2">
            <ComplaintForm />
            <div className="space-y-6"><QueryHistory /><FeedbackWidget /></div>
          </div>
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}
