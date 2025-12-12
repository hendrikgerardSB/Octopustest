import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hommel Design",
    template: "%s | Hommel Design",
  },
  description: "Research-driven design that serves people first. Full-service design agency in Antwerp specializing in service design, product design, UX, UI, and development.",
  keywords: ["design agency", "UX design", "UI design", "service design", "product design", "Antwerp", "Belgium"],
  authors: [{ name: "Hommel Design" }],
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "https://hommel.be",
    siteName: "Hommel Design",
    title: "Hommel Design",
    description: "Research-driven design that serves people first.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
