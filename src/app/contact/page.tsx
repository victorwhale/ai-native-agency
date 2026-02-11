import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get Matched with an AI-Native Agency",
  description:
    "Describe your project and get matched with the right AI-native agency. We connect businesses with top AI-first teams for sales, marketing, and back-office projects.",
  alternates: {
    canonical: "https://ai-native-agency.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
        Start Your Project with an AI-Native Agency
      </h1>
      <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
        Tell us about your project and we&apos;ll match you with the right
        AI-native agency — whether you need sales automation, marketing at
        scale, or back-office optimization.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  );
}
