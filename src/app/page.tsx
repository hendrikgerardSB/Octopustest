import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const services = [
  {
    title: "Service Design",
    description:
      "Map service ecosystems, uncover opportunities, and design seamless experiences that connect touchpoints into coherent journeys.",
  },
  {
    title: "Product Design",
    description:
      "From concept through launch, we build digital products that solve real problems and create lasting value for users and businesses.",
  },
  {
    title: "UX & UI Design",
    description:
      "Interfaces built on deep behavioral understanding, balancing aesthetic refinement with intuitive usability.",
  },
  {
    title: "Development",
    description:
      "Clean, maintainable code with focus on performance, accessibility, and long-term sustainability.",
  },
];

const clients = [
  "Proximus",
  "KBC Bank",
  "ENGIE",
  "Red Cross Flanders",
  "National Lottery Belgium",
  "D'Ieteren",
];

const caseStudies = [
  {
    client: "Proximus",
    title: "Fiber Personalization Strategy",
    result: "40% conversion increase",
    slug: "proximus",
  },
  {
    client: "ENGIE",
    title: "Member Referral Redesign",
    result: "300% participation increase",
    slug: "engie",
  },
  {
    client: "Red Cross Flanders",
    title: "Digital Ecosystem Transformation",
    result: "Multi-audience service platform",
    slug: "red-cross",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden paper-texture">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            {/* Kicker */}
            <p className="kicker mb-6">Full-Service Design</p>

            {/* Main Headline */}
            <h1
              className="text-[#1F1F1F] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              Research-driven design that serves people first
            </h1>

            {/* Introduction */}
            <p
              className="text-[#635545] text-[1.35rem] leading-relaxed mb-10 max-w-[650px]"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              We combine rigorous research methodology with emotional intelligence
              to create experiences that genuinely understand and serve human needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
              <Button href="/approach" variant="secondary">
                Our Approach
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract organic shape */}
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] pointer-events-none animate-float hidden lg:block"
          style={{
            transform: "translateX(20%)",
          }}
        >
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M250 50C320 80 380 150 370 230C360 310 290 370 210 360C130 350 60 290 50 210C40 130 80 60 150 40C180 30 220 35 250 50Z"
              stroke="#D4880F"
              strokeWidth="1"
              strokeOpacity="0.3"
              fill="none"
            />
            <path
              d="M280 100C330 140 350 200 330 260C310 320 250 350 190 330C130 310 90 250 100 190C110 130 160 90 220 90C250 90 270 95 280 100Z"
              stroke="#D4880F"
              strokeWidth="1"
              strokeOpacity="0.2"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 border-t border-[#1F1F1F]/[0.08]">
        <div className="container mx-auto px-6 lg:px-24">
          <p
            className="text-[0.85rem] uppercase tracking-wider text-[#635545] mb-8"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Trusted by
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <p
                key={client}
                className="text-[1.4rem] text-[#1F1F1F]/40 hover:text-[#1F1F1F]/80 transition-opacity duration-300 cursor-default"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {client}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="kicker kicker-teal mb-4">What We Do</p>
            <h2
              className="text-[#1F1F1F] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              }}
            >
              Full-service design capability from strategy through delivery
            </h2>
            <p
              className="text-[#635545] text-lg"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              We partner with organizations to research, design, and build digital
              products and services that create real value.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container mx-auto px-6 lg:px-24">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="kicker mb-4">Selected Work</p>
              <h2
                className="text-[#1F1F1F]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                }}
              >
                Research-driven results
              </h2>
            </div>
            <Button href="/work" variant="secondary">
              View All Work
            </Button>
          </div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                client={study.client}
                title={study.title}
                result={study.result}
                slug={study.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1F1F1F]">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <h2
            className="text-[#F5F2EE] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            }}
          >
            Ready to start a project?
          </h2>
          <p
            className="text-[#F5F2EE]/70 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Let&apos;s discuss how research-driven design can help your organization
            create better experiences.
          </p>
          <Button href="/contact" variant="primary" className="bg-[#D4880F] hover:bg-[#c07a0d]">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
