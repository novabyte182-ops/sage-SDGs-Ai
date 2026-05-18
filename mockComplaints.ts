import type { RiskLevel } from "./waterDataset";

export type ComplaintStatus = "Submitted" | "Under Review" | "Resolved" | "Escalated";

export type Complaint = {
  id: string;
  location: string;
  issue: string;
  peopleAffected: number;
  riskLevel: RiskLevel;
  priority: string;
  status: ComplaintStatus;
  date: string;
};

export const mockComplaints: Complaint[] = [
  { id: "AQH-1001", location: "Hostel Block A", issue: "Cloudy Water", peopleAffected: 18, riskLevel: "Medium", priority: "Priority", status: "Under Review", date: "2026-05-10" },
  { id: "AQH-1002", location: "Area A", issue: "Yellow Water", peopleAffected: 6, riskLevel: "High", priority: "Urgent", status: "Escalated", date: "2026-05-11" },
  { id: "AQH-1003", location: "Community School", issue: "Bad Smell", peopleAffected: 42, riskLevel: "High", priority: "Urgent", status: "Submitted", date: "2026-05-12" },
  { id: "AQH-1004", location: "Village 3", issue: "Diarrhea After Drinking Water", peopleAffected: 9, riskLevel: "Emergency", priority: "Critical", status: "Escalated", date: "2026-05-13" },
  { id: "AQH-1005", location: "Area B", issue: "Salty Taste", peopleAffected: 14, riskLevel: "Medium", priority: "Priority", status: "Resolved", date: "2026-05-14" }
];
