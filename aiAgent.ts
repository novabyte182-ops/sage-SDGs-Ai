import { waterDataset, type RiskLevel, type WaterHealthRecord } from "@/data/waterDataset";
import { calculateRiskLevel, riskPriority } from "@/lib/riskScoring";

export type AgentRequest = {
  message: string;
  category?: string;
  symptoms?: string;
  location?: string;
  peopleAffected?: number;
  urgency?: string;
};

export type AgentResponse = {
  summary: string;
  possibleCause: string;
  riskLevel: RiskLevel;
  immediateSafetySteps: string[];
  healthAwareness: string;
  complaintSuggestion: string;
  matchedCategory: string;
  complaintPriority: string;
  disclaimer: string;
};

export const HEALTH_DISCLAIMER =
  "Sage SDG AI AI provides general water safety and health-risk awareness only. It does not provide medical diagnosis, treatment, or professional health advice. For serious symptoms such as severe diarrhea, vomiting, fever, dehydration, or illness in children, contact a qualified doctor or local health center immediately.";

const fallbackSteps = [
  "Do not drink suspicious water directly.",
  "Use boiled, filtered, or verified safe water until the issue is resolved.",
  "Store safe water in a clean, covered container.",
  "Report repeated or high-risk water issues to the relevant water authority."
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function findBestRecord(input: AgentRequest): WaterHealthRecord | undefined {
  const text = normalize(`${input.category ?? ""} ${input.message} ${input.symptoms ?? ""}`);

  return waterDataset.find((record: WaterHealthRecord) => {
    const category = normalize(record.water_issue_category);
    const symptoms = normalize(record.common_symptoms);
    return text.includes(category) || category.split(" ").some((term) => term.length > 3 && text.includes(term)) || symptoms.split(",").some((symptom) => text.includes(normalize(symptom).trim()));
  });
}

export function generateFallbackAgentResponse(input: AgentRequest): AgentResponse {
  const matched = findBestRecord(input);
  const calculatedRisk = calculateRiskLevel(input);
  const riskLevel = calculatedRisk === "Low" && matched ? matched.risk_level : calculatedRisk;
  const matchedCategory = matched?.water_issue_category ?? input.category ?? "General Water Safety Concern";
  const locationText = input.location ? ` in ${input.location}` : "";
  const symptomsText = input.symptoms ? ` Reported symptoms: ${input.symptoms}.` : "";

  const emergencyStep = riskLevel === "Emergency"
    ? "Because the situation may involve serious symptoms or multiple people affected, seek medical help immediately and avoid the suspected water source."
    : "Monitor symptoms and seek medical help if diarrhea, vomiting, fever, dehydration, severe weakness, or illness in children appears.";

  return {
    summary: `You reported ${matchedCategory}${locationText}. ${symptomsText}`.trim(),
    possibleCause: matched?.possible_cause ?? "Possible causes may include poor storage, pipeline contamination, sediment, unsafe source water, or sanitation-related contamination.",
    riskLevel,
    immediateSafetySteps: [
      matched?.recommended_action ?? fallbackSteps[0],
      "Use boiled or properly filtered water for drinking and food preparation.",
      "Keep drinking water covered in clean containers.",
      emergencyStep
    ],
    healthAwareness: matched?.related_health_risk ?? "Unsafe water can increase the chance of stomach discomfort, diarrhea, vomiting, fever, or skin irritation depending on the type of contamination.",
    complaintSuggestion: `Submit a complaint/report with location, water appearance, smell/taste, people affected, and symptoms. Suggested priority: ${riskPriority(riskLevel)}.`,
    matchedCategory,
    complaintPriority: riskPriority(riskLevel),
    disclaimer: HEALTH_DISCLAIMER
  };
}

export function buildSafeSystemPrompt() {
  return `You are Sage SDG AI Assistant, a water safety and public health-risk awareness agent for SDG 6 and SDG 3. Provide simple, practical, structured guidance. Do not diagnose disease. Do not prescribe medicine. Do not claim medical certainty. For serious symptoms, tell the user to contact a qualified doctor or local health center. Always include possible cause, risk level, safety steps, health awareness, complaint/reporting advice, and disclaimer. Never request unnecessary private health data. Never expose API keys.`;
}
