import PageHeader from "@/components/PageHeader";
import AgentProcessFlow from "@/components/AgentProcessFlow";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="Project Roadmap & Architecture" 
        description="The 12-phase execution plan and AI architecture for the Sage SDG AI Mega-Agent platform."
      />
      <div className="card p-6 border-white/10">
        <h2 className="text-xl font-bold text-sage-light mb-4">Current Progress</h2>
        <ul className="list-disc pl-5 text-sage-muted space-y-2">
          <li className="text-sage-pink font-semibold">Phase 1: Foundation and UI Theme (Completed)</li>
          <li className="text-sage-pink font-semibold">Phase 2: Mock Datasets & Process Flow (Completed)</li>
          <li>Phase 3: AI Routing Logic (Pending)</li>
          <li>Phase 4: AquaLife AI Upgrade (Pending)</li>
          <li>Phase 5: Education and MindCare AI Modules (Pending)</li>
          <li>Phase 6: Mega-agent routing logic (Pending)</li>
          <li>Phase 7: Dashboard integration (Pending)</li>
          <li>Phase 8: Dataset/Kaggle preparation (Pending)</li>
          <li>Phase 9: GitHub setup (Pending)</li>
          <li>Phase 10: Vercel deployment (Pending)</li>
        </ul>
      </div>

      <AgentProcessFlow />
    </div>
  );
}
