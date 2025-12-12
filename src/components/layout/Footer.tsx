export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#1F1F1F]/[0.08] py-8">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.9rem] text-[#635545]/80">
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Hommel Design — Gerard UX (BE 1005.360.161) — Antwerp, Belgium
          </p>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
