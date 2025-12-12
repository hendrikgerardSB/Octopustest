import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies showcasing research-driven design results for Proximus, ENGIE, Red Cross Flanders, and other organizations.",
};

const caseStudies = [
  {
    id: "proximus",
    client: "Proximus",
    title: "Fiber Personalization Strategy",
    challenge: `Proximus needed to increase fiber service adoption among existing customers. The conversion funnel showed significant drop-off, but traditional analytics couldn't explain why qualified leads weren't converting.`,
    approach: `We conducted behavioral research with both converted and unconverted customers, discovering that the generic value proposition wasn't connecting with diverse customer contexts. A homeowner working from home has different fiber priorities than a family with gaming teenagers.

We designed a personalization framework that adapts messaging, feature emphasis, and even pricing presentation based on detected customer profiles. The system uses existing behavioral data to infer context without requiring explicit segmentation.`,
    results: `The personalized experience achieved a 40% increase in conversion rate and reduced customer acquisition costs by 25%. More importantly, post-purchase satisfaction scores improved, suggesting better expectation-setting during the sales process.`,
  },
  {
    id: "engie",
    client: "ENGIE",
    title: "Member Referral Redesign",
    challenge: `ENGIE's existing referral program had low participation despite attractive incentives. Members weren't sharing, and when they did, referred contacts rarely converted.`,
    approach: `Research revealed two key barriers. First, the sharing mechanism felt transactional and slightly embarrassing—members didn't want to seem like they were selling to friends. Second, the referral landing experience was generic and didn't acknowledge the personal recommendation.

We redesigned the program around social friction reduction. The new sharing flow emphasizes genuine recommendation over incentive, with personalized messages and a landing experience that feels like a warm introduction rather than a sales pitch. We also ensured complete GDPR compliance throughout the referral tracking process.`,
    results: `Participation increased by 300%, with referred customers showing higher retention rates than other acquisition channels. The program now generates a meaningful percentage of new customer acquisition.`,
  },
  {
    id: "red-cross",
    client: "Red Cross Flanders",
    title: "Digital Ecosystem Transformation",
    challenge: `Red Cross Flanders serves multiple distinct audiences—volunteers, donors, blood donors, and beneficiaries—through fragmented digital touchpoints. Each group had different needs, but the organization wanted a cohesive digital presence that reflected its unified mission.`,
    approach: `We conducted stakeholder research across all audience groups, mapping their journeys and identifying both unique needs and shared moments. The resulting digital ecosystem strategy balanced audience-specific experiences with organizational coherence.

The design system we created allows each audience pathway to feel tailored while maintaining consistent brand expression. Shared components reduce development complexity while flexible content architecture supports diverse use cases.`,
    results: `The new digital ecosystem improved engagement metrics across all audience groups, with particularly strong results in volunteer recruitment and donor retention. Internal stakeholders reported better ability to serve their specific audiences while feeling connected to the broader organizational mission.`,
  },
];

export default function WorkPage() {
  return (
    <article className="pt-56 pb-24 max-w-[1000px] mx-auto px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-20">
        <h1
          className="text-[#1F1F1F] mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          }}
        >
          Our Work
        </h1>
        <p
          className="text-[#635545] text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Selected case studies demonstrating how research-driven design creates
          measurable results for organizations.
        </p>
      </header>

      {/* Case Studies */}
      <div className="space-y-0">
        {caseStudies.map((study, index) => (
          <section
            key={study.id}
            id={study.id}
            className={`py-16 ${index !== caseStudies.length - 1 ? "border-b border-[#1F1F1F]/[0.08]" : ""}`}
          >
            {/* Case Study Header */}
            <div className="mb-10">
              {/* Image Placeholder */}
              <div
                className="aspect-[16/9] rounded-sm mb-8"
                style={{
                  background: "linear-gradient(135deg, #0D5C63 0%, #D4880F 100%)",
                }}
              />

              <p
                className="text-[0.85rem] uppercase tracking-wider text-[#635545] mb-2"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {study.client}
              </p>
              <h2
                className="text-[#1F1F1F]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                }}
              >
                {study.title}
              </h2>
            </div>

            {/* Challenge */}
            <div className="mb-10">
              <h3
                className="text-[#1F1F1F] text-lg font-bold mb-4"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                The Challenge
              </h3>
              <p
                className="text-[#635545] leading-relaxed max-w-[700px]"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {study.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="mb-10">
              <h3
                className="text-[#1F1F1F] text-lg font-bold mb-4"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Our Approach
              </h3>
              <div className="space-y-4 max-w-[700px]">
                {study.approach.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[#635545] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3
                className="text-[#1F1F1F] text-lg font-bold mb-4"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Results
              </h3>
              <p
                className="text-[#635545] leading-relaxed max-w-[700px]"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {study.results}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Ready to create results like these?
        </h2>
        <p
          className="text-[#635545] mb-8 max-w-xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Let&apos;s discuss how research-driven design can help your organization
          achieve its goals.
        </p>
        <Button href="/contact" variant="primary">
          Start a Conversation
        </Button>
      </section>
    </article>
  );
}
