import { CheckCircle2, Cpu, Database, Layout, MessageSquare, Network, ShieldAlert, Target } from "lucide-react";

const flowSteps = [
  {
    icon: Target,
    title: "1. Define Purpose & Scope",
    items: [
      "Use case",
      "User needs",
      "Success criteria",
      "Constraints"
    ]
  },
  {
    icon: ShieldAlert,
    title: "2. System Prompt Design",
    items: [
      "Goals",
      "Role/persona",
      "Instructions",
      "Guardrails"
    ]
  },
  {
    icon: Cpu,
    title: "3. Choose LLM",
    items: [
      "Base model",
      "Parameters",
      "Context window",
      "Cost/latency"
    ]
  },
  {
    icon: Network,
    title: "4. Tools & Integrations",
    items: [
      "Simple local tools",
      "API integrations",
      "MCP/server placeholder",
      "AI agent tool",
      "Custom functions"
    ]
  },
  {
    icon: Database,
    title: "5. Memory Systems",
    items: [
      "Episodic conversation memory",
      "Working memory",
      "Vector database placeholder",
      "SQL/structured database placeholder",
      "File storage placeholder"
    ]
  },
  {
    icon: MessageSquare,
    title: "6. Orchestration",
    items: [
      "Routes/workflows",
      "Triggers",
      "Parameters",
      "Message queues",
      "Agent-to-agent flow",
      "Error handling"
    ]
  },
  {
    icon: Layout,
    title: "7. User Interface",
    items: [
      "Chat interface",
      "Web app",
      "API endpoint",
      "Dashboard interface"
    ]
  },
  {
    icon: CheckCircle2,
    title: "8. Testing & Evaluations",
    items: [
      "Unit tests placeholder",
      "Latency testing",
      "Quality metrics",
      "Iterate and improve"
    ]
  }
];

export default function AgentProcessFlow() {
  return (
    <div className="card p-6 border-white/10 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">AI Agent Process Flow</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {flowSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-glow h-10 w-10 shrink-0">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-white leading-tight">{step.title}</h3>
              </div>
              <ul className="grid gap-2 text-sm text-sage-muted list-disc pl-5">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
