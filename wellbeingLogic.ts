import { wellbeingDataset } from "../data/wellbeingDataset";

export function handleWellbeingQuery(message: string) {
  const lowerMessage = message.toLowerCase();
  
  // Safety check for MindCare mode
  const crisisKeywords = ['suicide', 'kill', 'die', 'hurt myself', 'self-harm', 'abuse', 'panic', 'danger'];
  const isCrisis = crisisKeywords.some(keyword => lowerMessage.includes(keyword));

  if (isCrisis) {
    return {
      mood_stress_summary: "High Distress Detected",
      reflection_prompt: "Please pause and focus on your immediate safety.",
      breathing_exercise: "Take a slow, deep breath in... and slowly let it out.",
      self_care_action: "Reach out to someone you trust immediately.",
      safety_note: "CRISIS ALERT: Your safety is the most important thing right now.",
      professional_help_suggestion: "Please contact emergency services (e.g., 911) or a crisis hotline immediately.",
      disclaimer: "I am an AI, not a doctor or therapist. I cannot provide medical help or crisis support."
    };
  }

  let matchedRecord = wellbeingDataset[3]; // Default: Stressed

  for (const record of wellbeingDataset) {
    if (lowerMessage.includes(record.mood_state.toLowerCase())) {
      matchedRecord = record;
      break;
    }
  }

  return {
    mood_stress_summary: `${matchedRecord.mood_state} (Stress: ${matchedRecord.stress_level})`,
    reflection_prompt: matchedRecord.reflection_prompt,
    breathing_exercise: matchedRecord.breathing_exercise,
    self_care_action: matchedRecord.self_care_action,
    safety_note: matchedRecord.safety_note,
    professional_help_suggestion: matchedRecord.professional_help_trigger ? "Consider speaking to a mental health professional." : null,
    disclaimer: "I am an AI, not a doctor or therapist. This is not medical advice."
  };
}
