import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { demoQueries } from "@/data/demoQueries";

export default function DemoPage() {
  return (
    <div>
      <PageHeader eyebrow="Demo" title="Presentation-ready demo scenarios" description="Use these scenarios during your live demo, Loom recording, and project explanation. The working dashboard already includes clickable sample prompts." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demoQueries.map((query, index) => (
            <div className="card p-6 border-white/10" key={query.text}>
              <p className="text-sm font-bold text-sage-pink">Scenario {index + 1} ({query.module})</p>
              <h2 className="mt-2 text-lg font-bold text-white">{query.text}</h2>
              <p className="mt-3 text-sm leading-6 text-sage-muted">Expected output: Structured guidance per module.</p>
              <Link href="/dashboard/user" className="mt-5 btn-primary px-4 py-2">Try Demo Query</Link>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="card p-6"><h2 className="text-xl font-bold text-slate-950">Loom Placeholder</h2><p className="mt-2 text-sm leading-6 text-slate-600">Add Loom demo video link here after recording. The video should show intro, SDGs, AI Agent, all dashboards, Kaggle, GitHub, Vercel, and impact.</p></div>
          <div className="card p-6"><h2 className="text-xl font-bold text-slate-950">Dashboard Screenshot Placeholder</h2><p className="mt-2 text-sm leading-6 text-slate-600">Add screenshots to /public/screenshots after the UI is finalized. Use them in slides and backup presentation material.</p></div>
          <div className="card p-6"><h2 className="text-xl font-bold text-slate-950">Backup Demo Plan</h2><p className="mt-2 text-sm leading-6 text-slate-600">Keep recorded demo, screenshots, GitHub repository, Vercel link, Kaggle link, offline slides, charger, and hotspot ready.</p></div>
        </div>
      </section>
    </div>
  );
}
