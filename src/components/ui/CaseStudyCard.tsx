import Link from "next/link";

interface CaseStudyCardProps {
  client: string;
  title: string;
  result: string;
  slug: string;
}

export default function CaseStudyCard({ client, title, result, slug }: CaseStudyCardProps) {
  return (
    <Link href={`/work#${slug}`} className="block card-hover group">
      {/* Image placeholder with gradient */}
      <div
        className="aspect-[16/10] rounded-t-sm overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D5C63 0%, #D4880F 100%)",
        }}
      />

      {/* Card content */}
      <div className="bg-white p-6 rounded-b-sm">
        <p
          className="text-[0.85rem] uppercase tracking-wider text-[#635545] mb-2"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          {client}
        </p>

        <h3
          className="text-[1.5rem] text-[#1F1F1F] mb-3 group-hover:text-[#0D5C63] transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {title}
        </h3>

        <p
          className="text-[#635545] text-[0.95rem]"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          {result}
        </p>
      </div>
    </Link>
  );
}
