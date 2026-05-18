import PageHeader from "@/components/PageHeader";

export default function AquaLifePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="AquaLife AI" 
        description="Your intelligent assistant for water safety, quality insights, and SDG 6 action."
      />
      <div className="card p-6">
        <h2 className="text-xl font-bold text-sage-light mb-4">Water Solutions Module</h2>
        <p className="text-sage-muted">
          This module is the evolution of the Sage SDG AI AI prototype. It provides risk-level assessment, health-risk awareness, and complaint reporting for water quality issues.
        </p>
      </div>
    </div>
  );
}
