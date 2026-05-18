export type RiskLevel = "Low" | "Medium" | "High" | "Emergency";

export type WaterHealthRecord = {
  id: number;
  water_issue_category: string;
  water_issue_description: string;
  possible_cause: string;
  related_health_risk: string;
  common_symptoms: string;
  risk_level: RiskLevel;
  recommended_action: string;
  complaint_priority: "Normal" | "Priority" | "Urgent" | "Critical";
  sdg_6_target: string;
  sdg_3_target: string;
  location: string;
  resource_link: string;
  date_added: string;
};

export const waterDataset: WaterHealthRecord[] = [
  {
    id: 1,
    water_issue_category: "Yellow Water",
    water_issue_description: "Water appears yellow, rusty, or stained from tap or storage tank.",
    possible_cause: "Rust, old pipeline, sediment disturbance, storage tank corrosion, or possible contamination.",
    related_health_risk: "Possible stomach infection risk if consumed untreated, especially when smell or symptoms are present.",
    common_symptoms: "Stomach pain, diarrhea, vomiting",
    risk_level: "High",
    recommended_action: "Avoid direct drinking, use boiled or properly filtered water, clean storage tanks, and report to the authority.",
    complaint_priority: "Urgent",
    sdg_6_target: "SDG 6.1 - Safe and affordable drinking water",
    sdg_3_target: "SDG 3.3 - Reduce waterborne disease risk",
    location: "Urban households",
    resource_link: "[Add local water authority or WHO safe water link]",
    date_added: "2026-05-14"
  },
  {
    id: 2,
    water_issue_category: "Bad Smell",
    water_issue_description: "Water has sewage-like, rotten, chemical, or unusual odor.",
    possible_cause: "Organic contamination, sewage leakage, poor storage hygiene, or pipeline cross-contamination.",
    related_health_risk: "Possible bacterial exposure and digestive illness risk if consumed.",
    common_symptoms: "Nausea, stomach discomfort, vomiting",
    risk_level: "High",
    recommended_action: "Do not consume directly, use a safe alternative source, boil when suitable, and report urgently.",
    complaint_priority: "Urgent",
    sdg_6_target: "SDG 6.2 - Sanitation and hygiene",
    sdg_3_target: "SDG 3.9 - Reduce illness from contamination",
    location: "Hostels and dense neighborhoods",
    resource_link: "[Add local water authority or WHO safe water link]",
    date_added: "2026-05-14"
  },
  {
    id: 3,
    water_issue_category: "Cloudy Water",
    water_issue_description: "Water looks cloudy, milky, or contains suspended particles.",
    possible_cause: "Suspended particles, air bubbles, sediment, or pipeline disturbance.",
    related_health_risk: "Possible digestive discomfort if caused by contamination or sediment.",
    common_symptoms: "Mild stomach pain, digestive discomfort",
    risk_level: "Medium",
    recommended_action: "Let water settle, filter it, boil it before drinking, and observe whether cloudiness continues.",
    complaint_priority: "Priority",
    sdg_6_target: "SDG 6.1 - Improved drinking water quality",
    sdg_3_target: "SDG 3.4 - Prevent avoidable health risk",
    location: "Schools and communities",
    resource_link: "[Add local water authority or WHO safe water link]",
    date_added: "2026-05-14"
  },
  {
    id: 4,
    water_issue_category: "Salty Taste",
    water_issue_description: "Water tastes salty, bitter, or unusually mineral-heavy.",
    possible_cause: "High dissolved salts, groundwater salinity, pipe corrosion, or source contamination.",
    related_health_risk: "May be unsuitable for sensitive groups if consumed heavily over time.",
    common_symptoms: "Thirst, dehydration risk if consumed heavily, stomach discomfort",
    risk_level: "Medium",
    recommended_action: "Use tested drinking water, avoid heavy consumption, and request water quality testing.",
    complaint_priority: "Priority",
    sdg_6_target: "SDG 6.3 - Improve water quality",
    sdg_3_target: "SDG 3.9 - Reduce contamination-related health risk",
    location: "Groundwater-dependent areas",
    resource_link: "[Add local water authority or WHO safe water link]",
    date_added: "2026-05-14"
  },
  {
    id: 5,
    water_issue_category: "Diarrhea After Drinking Water",
    water_issue_description: "One or more people report diarrhea after drinking suspected water.",
    possible_cause: "Possible microbial contamination, unsafe storage, or polluted source water.",
    related_health_risk: "Waterborne illness risk. Children, elderly people, and dehydrated people need special attention.",
    common_symptoms: "Diarrhea, fever, vomiting, weakness, dehydration",
    risk_level: "Emergency",
    recommended_action: "Seek medical help, avoid suspected water, use safe water source, and report contamination immediately.",
    complaint_priority: "Critical",
    sdg_6_target: "SDG 6.1 - Safe drinking water access",
    sdg_3_target: "SDG 3.3 - Combat waterborne diseases",
    location: "Homes, hostels, schools",
    resource_link: "[Add local health center or WHO safe water link]",
    date_added: "2026-05-14"
  },
  {
    id: 6,
    water_issue_category: "Sewage Leakage",
    water_issue_description: "Sewage leakage is near drinking water pipeline or water source.",
    possible_cause: "Broken sewage line, damaged water pipeline, flooding, or cross-connection.",
    related_health_risk: "High risk of microbial contamination and disease spread if drinking water is exposed.",
    common_symptoms: "Diarrhea, vomiting, fever, stomach pain, skin irritation",
    risk_level: "Emergency",
    recommended_action: "Stop using suspected water for drinking, use safe alternative water, report urgently, and seek medical care for symptoms.",
    complaint_priority: "Critical",
    sdg_6_target: "SDG 6.2 - Sanitation and hygiene",
    sdg_3_target: "SDG 3.9 - Reduce health impact of contamination",
    location: "Low-income communities and dense urban areas",
    resource_link: "[Add municipal complaint link]",
    date_added: "2026-05-14"
  },
  {
    id: 7,
    water_issue_category: "Brown Water",
    water_issue_description: "Water appears brown, muddy, or visibly dirty.",
    possible_cause: "Sediment, pipeline repair work, tank contamination, rust, or source pollution.",
    related_health_risk: "Potential digestive illness risk if consumed without treatment.",
    common_symptoms: "Stomach discomfort, diarrhea, vomiting",
    risk_level: "High",
    recommended_action: "Avoid direct drinking, filter and boil, clean tank, and report if issue continues.",
    complaint_priority: "Urgent",
    sdg_6_target: "SDG 6.3 - Water quality improvement",
    sdg_3_target: "SDG 3.9 - Reduce illness from pollution",
    location: "Households and schools",
    resource_link: "[Add local water authority link]",
    date_added: "2026-05-14"
  },
  {
    id: 8,
    water_issue_category: "Skin Irritation",
    water_issue_description: "Skin irritation occurs after using suspected water for washing or bathing.",
    possible_cause: "Chemical contamination, microbial contamination, high mineral content, or poor sanitation.",
    related_health_risk: "Possible skin irritation, allergic reaction, or infection risk depending on exposure.",
    common_symptoms: "Itching, redness, rashes, burning feeling",
    risk_level: "High",
    recommended_action: "Avoid direct skin exposure where possible, use safer water, and consult a doctor if irritation continues or worsens.",
    complaint_priority: "Urgent",
    sdg_6_target: "SDG 6.3 - Improve water quality",
    sdg_3_target: "SDG 3.9 - Reduce health risk from contaminated water",
    location: "Communities and hostels",
    resource_link: "[Add health center link]",
    date_added: "2026-05-14"
  }
];
