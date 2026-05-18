import PageHeader from "@/components/PageHeader";

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="Quality Education AI" 
        description="Your personal tutor and study guide for SDG 4."
      />
      <div className="card p-6">
        <h2 className="text-xl font-bold text-sage-light mb-4">Learn Module</h2>
        <p className="text-sage-muted">
          Generate study plans, simplify complex topics, and create practice quizzes. Designed to support active learning without encouraging cheating.
        </p>
      </div>
    </div>
  );
}
