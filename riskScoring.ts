import type { RiskLevel } from "@/data/waterDataset";

type RiskInput = {
  category?: string;
  message?: string;
  symptoms?: string;
  peopleAffected?: number;
  urgency?: string;
};

const emergencyKeywords = ["diarrhea", "vomit", "vomiting", "fever", "dehydration", "child", "children", "weakness", "sewage", "multiple people sick"];
const highKeywords = ["bad smell", "smell", "yellow", "brown", "dirty", "rust", "stomach pain", "skin irritation", "many people"];
const mediumKeywords = ["cloudy", "salty", "particles", "taste", "sediment", "mild"];

function containsAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

export function calculateRiskLevel(input: RiskInput): RiskLevel {
  const combined = `${input.category ?? ""} ${input.message ?? ""} ${input.symptoms ?? ""} ${input.urgency ?? ""}`.toLowerCase();
  const peopleAffected = Number(input.peopleAffected ?? 0);

  if (containsAny(combined, emergencyKeywords) || peopleAffected >= 8 || combined.includes("emergency")) {
    return "Emergency";
  }

  if (containsAny(combined, highKeywords) || peopleAffected >= 3 || combined.includes("high")) {
    return "High";
  }

  if (containsAny(combined, mediumKeywords) || combined.includes("medium")) {
    return "Medium";
  }

  return "Low";
}

export function riskPriority(level: RiskLevel) {
  const map: Record<RiskLevel, string> = {
    Low: "Normal",
    Medium: "Priority",
    High: "Urgent",
    Emergency: "Critical"
  };
  return map[level];
}
