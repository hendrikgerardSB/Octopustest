import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ title, description, href = "/services" }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-sm">
      {/* Accent line */}
      <div className="w-10 h-[1px] bg-gradient-to-r from-[#D4880F] to-transparent opacity-40 mb-6" />

      <h3
        className="text-[1.25rem] font-bold text-[#1F1F1F] mb-4"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {title}
      </h3>

      <p
        className="text-[#635545] mb-6 leading-relaxed"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[#0D5C63] text-[0.95rem] font-medium group"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
