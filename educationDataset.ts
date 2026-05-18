export type EducationRecord = {
  id: number;
  topic: string;
  subject: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  learning_goal: string;
  sample_prompt: string;
  recommended_activity: string;
  quiz_question: string;
  progress_metric: string;
  sdg_target: string;
};

export const educationDataset: EducationRecord[] = [
  {
    id: 1,
    topic: "Water Cycle basics",
    subject: "Science",
    difficulty: "Beginner",
    learning_goal: "Understand evaporation, condensation, and precipitation.",
    sample_prompt: "Can you explain the water cycle like I'm 10?",
    recommended_activity: "Draw a diagram of the water cycle.",
    quiz_question: "What is the process called when water turns into vapor?",
    progress_metric: "Concepts Mastered: 1",
    sdg_target: "SDG 4.7 - Education for sustainable development"
  },
  {
    id: 2,
    topic: "Introduction to Algebra",
    subject: "Math",
    difficulty: "Beginner",
    learning_goal: "Solve simple equations with one variable.",
    sample_prompt: "How do I solve for x in 2x + 4 = 10?",
    recommended_activity: "Complete 5 practice equations.",
    quiz_question: "If 3x = 12, what is x?",
    progress_metric: "Equations Solved: 5",
    sdg_target: "SDG 4.4 - Relevant skills for decent work"
  },
  {
    id: 3,
    topic: "Climate Change Causes",
    subject: "Geography",
    difficulty: "Intermediate",
    learning_goal: "Identify human and natural causes of climate change.",
    sample_prompt: "What are the top 3 causes of global warming?",
    recommended_activity: "Write a short paragraph on the greenhouse effect.",
    quiz_question: "Which gas is primarily responsible for the greenhouse effect?",
    progress_metric: "Assignments Completed: 1",
    sdg_target: "SDG 13.3 - Climate change education"
  },
  {
    id: 4,
    topic: "Basic Grammar Rules",
    subject: "English",
    difficulty: "Beginner",
    learning_goal: "Correctly use subject-verb agreement.",
    sample_prompt: "Can you check my sentence for grammar mistakes?",
    recommended_activity: "Read the provided article and highlight verbs.",
    quiz_question: "What is wrong with 'He go to the store'?",
    progress_metric: "Grammar Score: 85%",
    sdg_target: "SDG 4.6 - Universal literacy and numeracy"
  }
];
