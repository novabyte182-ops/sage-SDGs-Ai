import { waterDataset } from "../data/waterDataset";

export function handleWaterQuery(message: string, symptoms?: string) {
  const lowerMessage = message.toLowerCase() + (symptoms ? " " + symptoms.toLowerCase() : "");
  
  // Serious symptom check for AquaLife mode
  const seriousSymptoms = ['diarrhea', 'vomiting', 'fever', 'dehydration', 'child', 'sick', 'blood'];
  const hasSeriousSymptoms = seriousSymptoms.some(s => lowerMessage.includes(s));

  let matchedRecord = waterDataset[0]; // default
  
  for (const record of waterDataset) {
    if (lowerMessage.includes(record.water_issue_category.toLowerCase())) {
      matchedRecord = record;
      break;
    }
  }

  // Override if serious symptoms are present but matched record isn't emergency
  if (hasSeriousSymptoms && matchedRecord.risk_level !== 'Emergency') {
    matchedRecord = waterDataset.find(r => r.risk_level === 'Emergency') || matchedRecord;
  }

  return {
    issue_summary: matchedRecord.water_issue_category,
    possible_cause: matchedRecord.possible_cause,
    risk_level: matchedRecord.risk_level,
    immediate_safety_steps: matchedRecord.recommended_action,
    health_risk_awareness: matchedRecord.related_health_risk,
    complaint_report_suggestion: `Priority: ${matchedRecord.complaint_priority}. ${matchedRecord.resource_link}`,
    disclaimer: "I am an AI, not a doctor. I cannot diagnose diseases or prescribe medicine." + 
                (hasSeriousSymptoms ? " PLEASE CONTACT A DOCTOR OR LOCAL HEALTH CENTER IMMEDIATELY due to serious symptoms." : "")
  };
}
