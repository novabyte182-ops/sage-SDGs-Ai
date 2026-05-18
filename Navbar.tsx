import Link from "next/link";
import { BrainCircuit, Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/modules", label: "Modules" },
  { href: "/dataset", label: "Dataset" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/dashboard/user", label: "Dashboard" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sage-charcoal/80 shadow-[0_10px_30px_rgba(11,11,15,0.4)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-white">
          <span className="icon-glow h-10 w-10">
            <BrainCircuit size={20} />
          </span>
          <span className="text-lg tracking-tight">Sage SDG AI</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-sage-muted transition hover:text-sage-pink">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/dashboard/user" className="hidden rounded-full btn-primary px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:inline-flex">
          Ask Sage
        </Link>
        <Menu className="md:hidden text-sage-light" size={24} />
      </nav>
    </header>
  );
}
