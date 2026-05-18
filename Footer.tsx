import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-sage-black text-sage-muted">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-semibold text-white">Sage SDG AI</p>
          <p className="mt-2 text-sage-light/70">Your human-like guide for learning, well-being, and clean water action.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Project Links</p>
          <div className="mt-2 flex flex-col gap-2">
            <Link className="hover:text-sage-pink transition-colors" href="/modules">SDG Modules</Link>
            <Link className="hover:text-sage-pink transition-colors" href="/dataset">Kaggle Dataset Placeholder</Link>
            <Link className="hover:text-sage-pink transition-colors" href="/roadmap">Project Roadmap</Link>
            <Link className="hover:text-sage-pink transition-colors" href="/deployment">Deployment Plan</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Safety Disclaimer</p>
          <p className="mt-2 text-sage-light/70">Sage SDG AI provides general guidance only. It does not replace medical advice, therapy, or certified professional diagnosis.</p>
        </div>
      </div>
    </footer>
  );
}
