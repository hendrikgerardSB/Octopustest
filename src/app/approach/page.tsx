import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Approach",
  description: "Research-first, human-centered design methodology. How we combine rigorous research with craft and collaboration.",
};

export default function ApproachPage() {
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
          Our Approach
        </h1>
        <p
          className="text-[#635545] text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          We believe great design emerges from understanding before creating,
          from craft applied with purpose, and from true partnership with the
          people we serve.
        </p>
      </header>

      {/* Research First */}
      <section className="mb-20">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Research First
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Every engagement begins with research. Not a checkbox exercise, but
            genuine investigation into how people think, what they expect, and
            where they get confused. We interview stakeholders and end users,
            observe real behavior, and map existing systems before proposing
            solutions.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Research isn&apos;t just a phase—it&apos;s continuous. We test assumptions
            throughout the design process, validate decisions with real users,
            and remain open to discovering we were wrong. This commitment to
            evidence over opinion leads to designs that actually work.
          </p>
        </div>
      </section>

      {/* Human-First Thinking */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Human-First Thinking
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Design should serve people, not impress them. We balance emotional
            intelligence with data rigor, recognizing that human experience
            cannot be fully captured in metrics alone. People are complex,
            context-dependent, and often surprising—our process makes room for
            that complexity.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Human-first doesn&apos;t mean ignoring business needs. It means
            recognizing that sustainable business value comes from genuinely
            serving human needs. When we understand what people truly need, we
            can design solutions that create value for everyone.
          </p>
        </div>
      </section>

      {/* Craftsperson Mentality */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Craftsperson Mentality
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            We approach design with the attention to detail of a woodworker or
            smith—every joint considered, every edge refined. This craft
            mentality shows in the small things: the pixel-perfect alignment,
            the thoughtfully written microcopy, the animation timing that
            feels just right.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Craft isn&apos;t about perfectionism for its own sake. It&apos;s about
            respecting the people who will use what we create. Attention to
            detail communicates care, and care builds trust. In a world of
            rushed work, craft stands out.
          </p>
        </div>
      </section>

      {/* Collaborative Partnership */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Collaborative Partnership
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            We work with you, not just for you. The best solutions emerge from
            combining your deep organizational knowledge with our design
            expertise. We facilitate workshops, share works-in-progress, and
            welcome challenging questions.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            True partnership means honest communication. We&apos;ll tell you when
            we think you&apos;re heading in the wrong direction, and we expect
            the same from you. This candor—delivered with respect—leads to
            better outcomes than polite agreement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          See our approach in action
        </h2>
        <p
          className="text-[#635545] mb-8 max-w-xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Our case studies show how research-driven design creates real results
          for organizations.
        </p>
        <Button href="/work" variant="primary">
          View Our Work
        </Button>
      </section>
    </article>
  );
}
