import PageHeader from "@/components/PageHeader";
import SDGBadge from "@/components/SDGBadge";
import DisclaimerBox from "@/components/DisclaimerBox";

const blocks = [
  { title: "Project Purpose", text: "Sage SDG AI AI helps citizens understand possible drinking water risks, receive basic safety guidance, and submit water-related complaints through a working AI Agent web prototype." },
  { title: "Why SDG 6 and SDG 3 Are Connected", text: "Unsafe drinking water can directly affect health through diarrhea, vomiting, stomach pain, fever, skin irritation, dehydration, and other public health concerns. Clean water awareness therefore supports good health awareness." },
  { title: "Target Users", text: "The platform supports citizens, students, families, hostel residents, rural communities, NGOs, local government bodies, universities, and community health organizations." },
  { title: "Ethical AI Statement", text: "The assistant gives awareness only. It avoids diagnosis, prescription, certainty claims, unnecessary private health data collection, and panic-based language." }
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About the Project" title="Sage SDG AI AI: Clean water awareness connected with health-risk guidance" description="A working SDG-based AI Agent prototype designed for public awareness, complaint support, dashboard analytics, and professional presentation." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <SDGBadge number="6" label="Clean Water and Sanitation" />
          <SDGBadge number="3" label="Good Health and Well-Being" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.title} className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">{block.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{block.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-slate-950">How Sage SDG AI AI Works</h2>
            <p className="mt-4 leading-7 text-slate-600">The user describes a water issue, optional symptoms, location, affected people, and urgency level. The frontend sends the request to a Next.js API route. The route can call LM Arena API when configured, but it also includes local fallback logic that matches the issue with the mock dataset and returns structured guidance.</p>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-slate-950">Vision Alignment</h2>
            <p className="mt-4 leading-7 text-slate-600">Vision 2030 alignment includes clean water access, public health awareness, digital transformation, AI for social good, and better citizen services. Vision 2035 alignment includes long-term AI adoption, smart governance, scalable digital public service systems, youth innovation, and sustainable community problem solving.</p>
          </div>
        </div>
        <div className="mt-8"><DisclaimerBox /></div>
      </section>
    </div>
  );
}
