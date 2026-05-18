export type WellbeingRecord = {
  id: number;
  mood_state: string;
  stress_level: "Low" | "Medium" | "High";
  reflection_prompt: string;
  breathing_exercise: string;
  self_care_action: string;
  safety_note: string;
  professional_help_trigger: boolean;
  sdg_target: string;
};

export const wellbeingDataset: WellbeingRecord[] = [
  {
    id: 1,
    mood_state: "Anxious",
    stress_level: "High",
    reflection_prompt: "What is one small thing you can control right now?",
    breathing_exercise: "Box breathing: Inhale 4s, Hold 4s, Exhale 4s, Hold 4s.",
    self_care_action: "Step away from the screen for 5 minutes.",
    safety_note: "If anxiety feels overwhelming, please reach out to a support hotline.",
    professional_help_trigger: false,
    sdg_target: "SDG 3.4 - Promote mental health and well-being"
  },
  {
    id: 2,
    mood_state: "Overwhelmed",
    stress_level: "High",
    reflection_prompt: "Can you break down your biggest task into 3 tiny steps?",
    breathing_exercise: "4-7-8 breathing: Inhale 4s, Hold 7s, Exhale 8s.",
    self_care_action: "Write down your thoughts to clear your mind.",
    safety_note: "Remember to take breaks. Chronic overwhelm might require professional guidance.",
    professional_help_trigger: true,
    sdg_target: "SDG 3.4 - Promote mental health and well-being"
  },
  {
    id: 3,
    mood_state: "Sad",
    stress_level: "Medium",
    reflection_prompt: "What is a gentle activity that usually brings you comfort?",
    breathing_exercise: "Deep belly breathing: Inhale deeply into your stomach, exhale slowly.",
    self_care_action: "Listen to your favorite calming music.",
    safety_note: "It is okay to feel sad. If this feeling persists for weeks, consider talking to a professional.",
    professional_help_trigger: false,
    sdg_target: "SDG 3.4 - Promote mental health and well-being"
  },
  {
    id: 4,
    mood_state: "Stressed",
    stress_level: "Medium",
    reflection_prompt: "What is the worst-case scenario, and how likely is it really?",
    breathing_exercise: "Alternate nostril breathing.",
    self_care_action: "Do a quick 5-minute stretch.",
    safety_note: "Stress is normal, but managing it is key to long-term health.",
    professional_help_trigger: false,
    sdg_target: "SDG 3.4 - Promote mental health and well-being"
  }
];
