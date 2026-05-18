# Sage SDG AI

**Tagline:** Your human-like guide for learning, well-being, and clean water action.

**GitHub Repository:** [Sage-SDG-AI](https://github.com/bhattizain2005-ux/Sage-SDG-AI)

## About the Project
Sage SDG AI is an upgraded mega-agent platform designed to address three core Sustainable Development Goals (SDGs). By unifying powerful AI routing and structured datasets, it acts as a centralized support system for global users.

### The Three Core Modules
1. **Learn Mode (Quality Education - SDG 4)**
   Provides academic support, simple explanations of complex topics, learning goals, activities, and quizzes.
2. **MindCare Mode (Mental Health and Well-being - SDG 3)**
   Acts as a supportive, non-clinical guide for stress and anxiety. Includes reflection prompts, breathing exercises, and strict crisis-safety fallbacks.
3. **AquaLife Mode (Water Solutions - SDG 6 & SDG 3)**
   *Upgraded from the previous AquaHealth AI foundation.* Provides water safety guidance, risk scoring for contamination issues, and immediate safety steps.

## System Architecture & AI Routing
At the core of Sage SDG AI is a unified routing layer located at `/api/sdg-agent`. 
- **The Routing Flow:** The frontend sends a structured JSON payload containing the user's `message` and selected `mode`. The API parses the request, applies strict safety filters (such as crisis detection or serious symptom overrides), and queries the appropriate local fallback dataset (or future LM Arena endpoints).
- **Dashboards:** A modern, 40% light, gradient-themed user dashboard houses the `AIChatBox`, allowing seamless, immediate testing of all three modules in one place.

## Datasets
The AI operates on curated, structured datasets:
- `educationDataset.ts`
- `wellbeingDataset.ts`
- `waterDataset.ts`
*(These datasets are designed to be expanded and potentially published to Kaggle in the future.)*

## Safety Rules & Ethics
- **No Diagnosis or Prescription:** The AI explicitly states it is not a doctor or therapist.
- **Crisis Overrides:** If severe distress or emergency water-health symptoms are detected, the system immediately bypasses standard responses to deliver crisis-safe guidance and recommends professional help.

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up the environment variables (see below).
4. Run the development server: `npm run dev`
5. Visit `http://localhost:3000`

## Environment Variables
Create a `.env.local` file based on the provided `.env.example`:
```env
LM_ARENA_API_KEY=your_lm_arena_api_key_here
LM_ARENA_API_URL=your_lm_arena_endpoint_here
```

## Placeholders
- **GitHub:** https://github.com/bhattizain2005-ux/Sage-SDG-AI
- **Vercel:** [Deployment Link Here]
- **Kaggle:** [Dataset Link Here]
- **Loom:** [Demo Video Link Here]

## Deliverables Checklist
- [x] Red/Black/Gradient UI Implementation
- [x] 3 Core Datasets (Learn, MindCare, AquaLife)
- [x] Unified AI Routing (`/api/sdg-agent`)
- [x] Safety Fallbacks & Overrides
- [x] Dashboard Integration

## Backup Plan
If the live deployment fails during presentation, the team will rely on:
1. Localhost instance (`npm run dev`)
2. Pre-recorded Loom Demo
3. Offline presentation slides and screenshots in `/public/screenshots`

## Future Improvements
- Integrate LM Arena for dynamic, unscripted responses.
- Expand datasets and publish to Kaggle.
- Add multi-language support.
