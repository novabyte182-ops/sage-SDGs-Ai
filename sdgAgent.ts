import { handleEducationQuery } from "./educationLogic";
import { handleWellbeingQuery } from "./wellbeingLogic";
import { handleWaterQuery } from "./waterRiskScoring";

export type AgentRequest = {
  mode: "education" | "wellbeing" | "water";
  message: string;
  category?: string;
  symptoms?: string;
  location?: string;
  urgency?: string;
};

export async function processAgentRequest(req: AgentRequest) {
  // Placeholder for LM Arena integration
  // const lmApiKey = process.env.LM_ARENA_API_KEY;
  // const lmApiUrl = process.env.LM_ARENA_API_URL;
  
  // TODO: In Phase 4+, if LM Arena is available, call it here.
  // For now, use local fallback logic based on the existing datasets.

  switch (req.mode) {
    case "education":
      return handleEducationQuery(req.message);
    case "wellbeing":
      return handleWellbeingQuery(req.message);
    case "water":
      return handleWaterQuery(req.message, req.symptoms);
    default:
      throw new Error("Unknown mode. Please choose Learn, MindCare, or AquaLife.");
  }
}
