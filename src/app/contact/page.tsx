"use client";

import { useState } from "react";
import { Metadata } from "next";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <article className="pt-56 pb-24 max-w-[1000px] mx-auto px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-16">
        <h1
          className="text-[#1F1F1F] mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          }}
        >
          Get in Touch
        </h1>
        <p
          className="text-[#635545] text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Have a project in mind? We&apos;d love to hear about it. Fill out the
          form below or reach out directly.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Form */}
        <div>
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-sm border border-[#0D5C63]/20">
              <h2
                className="text-[#1F1F1F] mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.5rem",
                }}
              >
                Thank you for reaching out
              </h2>
              <p
                className="text-[#635545]"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="primary">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          <div>
            <h2
              className="text-[#1F1F1F] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
              }}
            >
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <p
                  className="text-[#635545] text-sm uppercase tracking-wider mb-1"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@hommel.be"
                  className="text-[#0D5C63] text-lg hover:underline"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  hello@hommel.be
                </a>
              </div>

              <div>
                <p
                  className="text-[#635545] text-sm uppercase tracking-wider mb-1"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Location
                </p>
                <p
                  className="text-[#1F1F1F] text-lg"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Antwerp, Belgium
                </p>
              </div>

              <div>
                <p
                  className="text-[#635545] text-sm uppercase tracking-wider mb-1"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Company
                </p>
                <p
                  className="text-[#1F1F1F] text-lg"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Gerard UX
                </p>
                <p
                  className="text-[#635545] text-sm"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  BE 1005.360.161
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1F1F1F]/[0.08]">
            <p
              className="text-[#635545] italic"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
