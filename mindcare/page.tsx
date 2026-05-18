import PageHeader from "@/components/PageHeader";

export default function MindCarePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="MindCare AI" 
        description="Your companion for emotional well-being and stress management (SDG 3)."
      />
      <div className="card p-6">
        <h2 className="text-xl font-bold text-sage-light mb-4">Mental Health Module</h2>
        <p className="text-sage-muted">
          Access breathing exercises, journaling prompts, and positive habit planners. Remember: this is not a substitute for professional therapy.
        </p>
      </div>
    </div>
  );
}
