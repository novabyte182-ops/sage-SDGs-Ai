export default function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <section className="gradient-panel border-b border-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-cyan-700">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-brand-gradient md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}
