// User Dashboard Cards
export const userDashboardCards = [
  { label: "Active Goals", value: "3", helper: "2 Study, 1 Wellness" },
  { label: "Study Streak", value: "5 Days", helper: "Keep it up!" },
  { label: "Mood Avg", value: "Calm", helper: "Based on 4 logs" },
  { label: "Local Water Risk", value: "Low", helper: "No active alerts" }
];

// Admin Dashboard Charts
export const adminDashboardCharts = {
  totalUsers: "2,450",
  activeSessions: "1,120",
  queriesByMode: [
    { name: "Learn Mode", value: 5120 },
    { name: "MindCare Mode", value: 1840 },
    { name: "AquaLife Mode", value: 312 }
  ]
};

// Client Dashboard SDG Insights
export const clientSDGInsights = [
  { target: "SDG 4.7 (Education)", progress: 78, impact: "High engagement in sustainable development topics" },
  { target: "SDG 3.4 (Well-being)", progress: 65, impact: "Consistent daily mood check-ins" },
  { target: "SDG 6.1 (Water Safety)", progress: 40, impact: "Community reports tracking local contamination" }
];

// Learn Mode Metrics
export const learnModeMetrics = [
  { subject: "Science", queries: 1200 },
  { subject: "Math", queries: 980 },
  { subject: "History", queries: 640 },
  { subject: "Geography", queries: 430 }
];

// MindCare Mode Metrics
export const mindCareModeMetrics = [
  { mood: "Anxious", count: 450 },
  { mood: "Overwhelmed", count: 320 },
  { mood: "Calm", count: 610 },
  { mood: "Stressed", count: 280 }
];

// AquaLife Mode Metrics
export const aquaLifeModeMetrics = [
  { category: "Yellow Water", count: 120 },
  { category: "Bad Smell", count: 85 },
  { category: "Cloudy Water", count: 64 },
  { category: "Health Issue", count: 43 }
];

// Re-exporting legacy for backwards compatibility if needed
export const adminStats = [
  { label: "Total Users", value: adminDashboardCharts.totalUsers, helper: "+22% this month" },
  { label: "Learn Queries", value: "5,120", helper: "Study plans & quizzes" },
  { label: "MindCare Check-ins", value: "1,840", helper: "Mood logs & exercises" },
  { label: "AquaLife Reports", value: "312", helper: "Water risk complaints" }
];

export const queriesByModule = adminDashboardCharts.queriesByMode;

export const riskDistribution = [
  { name: "Low", value: 18 },
  { name: "Medium", value: 39 },
  { name: "High", value: 31 },
  { name: "Emergency", value: 12 }
];

export const symptomsReported = [
  { name: "Stomach pain", value: 42 },
  { name: "Diarrhea", value: 24 },
  { name: "Vomiting", value: 18 },
  { name: "Fever", value: 14 },
  { name: "Skin irritation", value: 9 }
];

export const complaintsOverTime = [
  { name: "May 8", value: 12 },
  { name: "May 9", value: 16 },
  { name: "May 10", value: 23 },
  { name: "May 11", value: 19 },
  { name: "May 12", value: 32 },
  { name: "May 13", value: 28 },
  { name: "May 14", value: 37 }
];

export const areaWiseIssues = [
  { area: "Area A", yellow: 18, smell: 12, cloudy: 8 },
  { area: "Area B", yellow: 7, smell: 6, cloudy: 12 },
  { area: "Hostel", yellow: 4, smell: 5, cloudy: 19 },
  { area: "Village 3", yellow: 14, smell: 9, cloudy: 6 }
];

export const healthRiskTrend = [
  { month: "Jan", risk: 22 },
  { month: "Feb", risk: 28 },
  { month: "Mar", risk: 31 },
  { month: "Apr", risk: 37 },
  { month: "May", risk: 45 }
];
