import Link from "next/link";
import { Activity, ArrowRight, BrainCircuit, Droplets, Heart, Sparkles } from "lucide-react";
import SDGBadge from "@/components/SDGBadge";
import ImpactMetrics from "@/components/ImpactMetrics";
import DisclaimerBox from "@/components/DisclaimerBox";

const features = [
  { title: "Quality Education AI", icon: BrainCircuit, text: "Generate study plans, understand difficult concepts, and track your learning progress with safe academic guidance." },
  { title: "MindCare Well-being", icon: Heart, text: "Reflect on stress, practice breathing exercises, and build positive habits for your mental wellness." },
  { title: "AquaLife Water Safety", icon: Droplets, text: "Assess drinking water risks, receive immediate safety steps, and report local water quality issues." }
];

export default function HomePage() {
  return (
    <div className="bg-sage-black min-h-screen text-sage-light">
      <section className="gradient-panel border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 flex flex-wrap gap-3">
              <SDGBadge number="4" label="Quality Education" />
              <SDGBadge number="3" label="Good Health" />
              <SDGBadge number="6" label="Clean Water" />
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-brand-gradient md:text-6xl">Your Intelligent Guide for Learning, Well-being, and Water Action</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sage-muted">
              Sage SDG AI is a unified mega-agent designed to support your personal growth and community safety. Whether you need to learn a new concept, reflect on your mental health, or report a water safety risk, Sage is here to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/modules" className="btn-primary">Explore Modules <ArrowRight size={16} /></Link>
              <Link href="/dashboard/user" className="btn-secondary">Open Dashboard</Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="rounded-3xl bg-gradient-2 p-6 text-white shadow-glow">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-sage-pink">Sage AI Assistant</p>
                  <h2 className="text-2xl font-bold">How can I help you today?</h2>
                </div>
                <Sparkles className="text-sage-pink" />
              </div>
              <div className="grid gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-4 border border-white/5 hover:bg-white/15 transition cursor-pointer flex items-center gap-3">
                  <BrainCircuit className="text-sage-light" size={18} />
                  <span>I want to learn something new</span>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 border border-white/5 hover:bg-white/15 transition cursor-pointer flex items-center gap-3">
                  <Heart className="text-sage-light" size={18} />
                  <span>I need a moment of mindfulness</span>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 border border-white/5 hover:bg-white/15 transition cursor-pointer flex items-center gap-3">
                  <Droplets className="text-sage-light" size={18} />
                  <span>I noticed a water quality issue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-sage-pink">Core Modules</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Three specialists. One intelligent platform.</h2>
          <p className="mt-4 text-sage-muted leading-7">Sage seamlessly routes your requests to the right specialist module, ensuring you get accurate, safe, and actionable guidance without jumping between different apps.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="card p-6 border border-sage-primary/20 hover:border-sage-primary/50 transition-colors" key={feature.title}>
                <div className="mb-4 icon-glow h-12 w-12"><Icon size={24} /></div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-sage-muted">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="soft-panel py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-6 border-white/10">
              <h2 className="text-2xl font-bold text-white">How Sage SDG AI Works</h2>
              <ol className="mt-5 grid gap-3 text-sm leading-6 text-sage-muted">
                <li><strong className="text-sage-pink">1. Intent Routing:</strong> Sage asks what you need and routes you to Learn, MindCare, or AquaLife modes.</li>
                <li><strong className="text-sage-pink">2. Safe Processing:</strong> Requests run through module-specific safety and logic fallbacks.</li>
                <li><strong className="text-sage-pink">3. Actionable Output:</strong> You receive structured advice, quizzes, exercises, or risk assessments.</li>
                <li><strong className="text-sage-pink">4. Dashboard Insights:</strong> Track your progress or view community-level impact metrics.</li>
              </ol>
            </div>
            <div className="card p-6 border-white/10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to start?</h2>
              <p className="text-sm leading-6 text-sage-muted mb-6">Join us in driving SDG impact through accessible, AI-powered guidance.</p>
              <div className="flex gap-4">
                <Link href="/dashboard/user" className="btn-primary w-fit">Open User Dashboard</Link>
                <Link href="/dashboard/admin" className="btn-secondary w-fit">View Admin Stats</Link>
              </div>
            </div>
          </div>
          <div className="mt-8"><DisclaimerBox /></div>
        </div>
      </section>
    </div>
  );
}
