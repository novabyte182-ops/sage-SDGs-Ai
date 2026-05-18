import Link from "next/link";
import { BarChart3, ClipboardList, LayoutDashboard } from "lucide-react";

const links = [
  { href: "/dashboard/user", label: "User Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/admin", label: "Admin Dashboard", icon: ClipboardList },
  { href: "/dashboard/client", label: "Client Dashboard", icon: BarChart3 }
];

export default function Sidebar() {
  return (
    <aside className="card h-fit overflow-hidden p-4 lg:sticky lg:top-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400" />
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-cyan-700">Dashboard Views</p>
      <div className="grid gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-100 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 hover:text-cyan-800">
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
