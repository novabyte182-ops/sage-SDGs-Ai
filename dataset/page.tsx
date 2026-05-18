import PageHeader from "@/components/PageHeader";
import DatasetTable from "@/components/DatasetTable";
import { waterDataset } from "@/data/waterDataset";

const columns = ["id", "water_issue_category", "water_issue_description", "possible_cause", "related_health_risk", "common_symptoms", "risk_level", "recommended_action", "complaint_priority", "sdg_6_target", "sdg_3_target", "location", "resource_link", "date_added"];

export default function DatasetPage() {
  return (
    <div>
      <PageHeader eyebrow="Dataset" title="Sage SDG AI Water Safety and Health Risk Dataset" description="A sample local dataset for the working prototype. The same dataset can be exported as CSV/JSON and uploaded to Kaggle for final submission." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-slate-950">Dataset Summary</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <p><strong className="text-slate-900">Format:</strong> CSV or JSON</p>
              <p><strong className="text-slate-900">Records:</strong> {waterDataset.length} sample records</p>
              <p><strong className="text-slate-900">License:</strong> [Add license here]</p>
              <p><strong className="text-slate-900">Kaggle link:</strong> [Add Kaggle Dataset Link Here]</p>
              <p><strong className="text-slate-900">Use:</strong> The AI Agent uses this dataset to match water issue categories with possible causes, health-risk awareness, risk levels, and recommended actions.</p>
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-slate-950">Dataset Columns</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {columns.map((column) => <span key={column} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{column}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-8"><DatasetTable /></div>
      </section>
    </div>
  );
}
