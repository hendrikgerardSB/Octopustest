import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service design capability from strategy through delivery. Service design, product design, UX & UI design, and development.",
};

const services = [
  {
    title: "Service Design",
    description: `We map the complete landscape of how people interact with your organization—every touchpoint, every handoff, every moment of truth. Through stakeholder interviews, journey mapping, and systems thinking, we uncover where experiences break down and where opportunities hide.

Our service design work goes beyond individual interactions to consider the entire ecosystem: the internal processes that support external experiences, the organizational capabilities required, and the metrics that matter.`,
    approach: "We begin with discovery research to understand current state, then collaboratively workshop future possibilities before designing detailed service blueprints.",
    deliverables: ["Service blueprints", "Journey maps", "Ecosystem diagrams", "Implementation roadmaps", "Measurement frameworks"],
  },
  {
    title: "Product Design",
    description: `From initial concept through market launch, we design digital products that solve real problems for real people. Our process integrates continuous user research with iterative prototyping, ensuring every feature decision is grounded in evidence.

We think about products as living systems—considering not just the launch experience but how the product will evolve, scale, and adapt over time.`,
    approach: "We combine generative research for opportunity discovery with evaluative research throughout development, maintaining tight feedback loops between design and engineering.",
    deliverables: ["Product strategy", "Feature specifications", "Interaction design", "Visual design systems", "Prototype validation"],
  },
  {
    title: "UX & UI Design",
    description: `Interfaces should feel inevitable—like they couldn't have been designed any other way. We achieve this through deep understanding of user mental models, behavioral patterns, and the specific context of use.

Our visual design balances aesthetic refinement with functional clarity. Every color choice, typographic decision, and animation serves a purpose beyond decoration.`,
    approach: "We ground every interface decision in behavioral research, then refine through rapid iteration and usability testing until interactions feel natural.",
    deliverables: ["User flows", "Wireframes", "High-fidelity designs", "Design systems", "Interaction specifications", "Accessibility audits"],
  },
  {
    title: "Development",
    description: `Good design deserves good implementation. We write clean, maintainable code that respects the design intent while meeting real-world performance and accessibility requirements.

Our development practice emphasizes sustainable architecture, thorough testing, and documentation that enables long-term maintenance.`,
    approach: "We work in close collaboration with design throughout development, treating implementation as a continuation of the design process rather than a handoff.",
    deliverables: ["Frontend development", "Design system implementation", "Performance optimization", "Accessibility compliance", "Technical documentation"],
  },
];

export default function ServicesPage() {
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
          Our Services
        </h1>
        <p
          className="text-[#635545] text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          We offer full-service design capability, from early research and strategy
          through detailed design and implementation. Every engagement is tailored to
          your specific needs and context.
        </p>
      </header>

      {/* Services */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`py-16 ${index !== services.length - 1 ? "border-b border-[#1F1F1F]/[0.08]" : ""}`}
          >
            <h2
              className="text-[#1F1F1F] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              {service.title}
            </h2>

            <div className="space-y-6">
              {service.description.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#635545] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8">
                <h3
                  className="text-[#1F1F1F] text-lg font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Our Approach
                </h3>
                <p
                  className="text-[#635545] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  {service.approach}
                </p>
              </div>

              <div className="mt-6">
                <h3
                  className="text-[#1F1F1F] text-lg font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Typical Deliverables
                </h3>
                <p
                  className="text-[#635545]"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  {service.deliverables.join(" · ")}
                </p>
              </div>
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
          Let&apos;s discuss your project
        </h2>
        <p
          className="text-[#635545] mb-8 max-w-xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Every project is different. We&apos;d love to understand your specific
          challenges and explore how we might help.
        </p>
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </section>
    </article>
  );
}
