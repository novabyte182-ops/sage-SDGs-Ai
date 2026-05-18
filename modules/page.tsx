import PageHeader from "@/components/PageHeader";

export default function ModulesPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="Sage SDG Modules" 
        description="Explore the three core pillars of the Sage SDG AI mega-agent."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <a href="/education" className="card p-6 hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-sage-light mb-2">Quality Education</h2>
          <p className="text-sage-muted text-sm">Study plans, quizzes, and concept simplification.</p>
        </a>
        <a href="/mindcare" className="card p-6 hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-sage-light mb-2">MindCare AI</h2>
          <p className="text-sage-muted text-sm">Mental well-being, breathing routines, and emotional support.</p>
        </a>
        <a href="/aqualife" className="card p-6 hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-sage-light mb-2">AquaLife AI</h2>
          <p className="text-sage-muted text-sm">Water safety guidance and community health reporting.</p>
        </a>
      </div>
    </div>
  );
}
