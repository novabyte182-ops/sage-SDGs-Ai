import type { RiskLevel } from "@/data/waterDataset";

const styles: Record<RiskLevel, string> = {
  Low: "bg-green-100 text-green-800 ring-green-200",
  Medium: "bg-yellow-100 text-yellow-800 ring-yellow-200",
  High: "bg-orange-100 text-orange-800 ring-orange-200",
  Emergency: "bg-red-100 text-red-800 ring-red-200"
};

export default function RiskLevelBadge({ level }: { level: RiskLevel }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${styles[level]}`}>{level}</span>;
}
