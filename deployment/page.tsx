import PageHeader from "@/components/PageHeader";

export default function DeploymentPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader 
        title="Deployment Plan" 
        description="Architecture and hosting strategy for Sage SDG AI."
      />
      <div className="card p-6">
        <h2 className="text-xl font-bold text-sage-light mb-4">Vercel Deployment</h2>
        <p className="text-sage-muted">
          This application is designed for seamless deployment on Vercel using Next.js App Router, Tailwind CSS, and local mock datasets.
        </p>
      </div>
    </div>
  );
}
