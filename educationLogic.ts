import { educationDataset } from "../data/educationDataset";

export function handleEducationQuery(message: string) {
  // Simple keyword matching for fallback logic
  const lowerMessage = message.toLowerCase();
  let matchedRecord = educationDataset[0]; // default

  for (const record of educationDataset) {
    if (lowerMessage.includes(record.topic.toLowerCase()) || lowerMessage.includes(record.subject.toLowerCase())) {
      matchedRecord = record;
      break;
    }
  }

  return {
    topic_summary: matchedRecord.topic,
    simple_explanation: `Here is a simple explanation for ${matchedRecord.topic} in ${matchedRecord.subject}.`,
    learning_goal: matchedRecord.learning_goal,
    recommended_activity: matchedRecord.recommended_activity,
    quiz_question: matchedRecord.quiz_question,
    progress_metric: matchedRecord.progress_metric,
    sdg_connection: matchedRecord.sdg_target
  };
}
