export default function SDGBadge({ number, label }: { number: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-bold text-cyan-900 shadow-[0_10px_24px_rgba(6,182,212,0.12)] backdrop-blur">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-700 text-xs text-white shadow-glow">{number}</span>
      {label}
    </span>
  );
}
