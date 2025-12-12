import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Hommel is led by Hendrik Gerard, bringing 25+ years of enterprise design experience from organizations like Proximus, KBC, ENGIE, and Red Cross.",
};

export default function AboutPage() {
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
          About Hommel
        </h1>
        <p
          className="text-[#635545] text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          A full-service design agency based in Antwerp, Belgium, specializing in
          research-driven design for medium-to-large organizations.
        </p>
      </header>

      {/* Founder Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Founder Image Placeholder */}
          <div
            className="aspect-[3/4] rounded-sm flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1F1F1F 0%, #635545 100%)",
            }}
          >
            <span
              className="text-[6rem] text-[#D4880F]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              HG
            </span>
          </div>

          {/* Founder Bio */}
          <div>
            <h2
              className="text-[#1F1F1F] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Hendrik Gerard
            </h2>
            <div className="space-y-4">
              <p
                className="text-[#635545] leading-relaxed"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Hendrik brings over 25 years of experience leading design for
                major Belgian and European organizations. His client portfolio
                includes Proximus, KBC Bank, ENGIE, Red Cross Flanders, the
                National Lottery Belgium, and D&apos;Ieteren.
              </p>
              <p
                className="text-[#635545] leading-relaxed"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Before founding Hommel, Hendrik held design leadership positions
                at iO and Humix, where he built and led multidisciplinary teams
                delivering complex digital transformation programs.
              </p>
              <p
                className="text-[#635545] leading-relaxed"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                He holds a degree in Design Leadership from the University of
                Antwerp, where he studied the intersection of design practice,
                business strategy, and organizational change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="mb-20 bg-[#1F1F1F] -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 rounded-sm">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div>
            <span
              className="text-[6rem] text-[#D4880F] leading-none"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              25+
            </span>
          </div>
          <p
            className="text-[#F5F2EE] text-[1.3rem] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Years of Enterprise Design Experience
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Design Philosophy
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Design should be in service of people, not the designer&apos;s portfolio.
            We practice what we call &ldquo;white label energy&rdquo;—elevating our clients
            rather than overshadowing them. Our best work often goes unnoticed
            precisely because it feels inevitable, like it couldn&apos;t have been
            designed any other way.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            We believe in the craftsperson approach: careful attention to every
            detail, respect for materials and constraints, pride in work well done.
            This mentality extends from the highest-level strategy to the smallest
            interface element.
          </p>
        </div>
      </section>

      {/* Why Hommel */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Why &ldquo;Hommel&rdquo;?
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Hommel is Dutch for &ldquo;bumblebee.&rdquo; Like the bumblebee, we&apos;re
            methodical workers who move purposefully between touchpoints,
            cross-pollinating insights and ideas. And like the bumblebee&apos;s
            famously &ldquo;impossible&rdquo; flight, we believe in making things work
            that others might dismiss as too complex.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-20 pt-16 border-t border-[#1F1F1F]/[0.08]">
        <h2
          className="text-[#1F1F1F] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          How We Work
        </h2>
        <div className="space-y-6 max-w-[700px]">
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            We work as a strategic design partner, not a vendor. This means
            fewer formal presentations and more collaborative working sessions.
            We prefer to think alongside you rather than disappear and return
            with finished deliverables.
          </p>
          <p
            className="text-[#635545] leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            For larger projects, we assemble focused teams from a network of
            trusted specialists—researchers, designers, developers—each selected
            for the specific needs of your project. This model gives you senior
            expertise without agency overhead.
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
          Let&apos;s talk
        </h2>
        <p
          className="text-[#635545] mb-8 max-w-xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Interested in working together? We&apos;d love to hear about your
          challenges and explore how we might help.
        </p>
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </section>
    </article>
  );
}
