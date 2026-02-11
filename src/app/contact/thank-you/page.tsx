import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Sent — AI-Native Agency",
  description: "Thank you for reaching out. We'll get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
      <div className="text-5xl mb-6">&#10003;</div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
        Message Sent
      </h1>
      <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl mx-auto">
        Thank you for reaching out. We&apos;ll review your message and get back
        to you as soon as possible.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/blog/what-is-ai-native-agency"
          className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          Read Our Guide
        </Link>
      </div>
    </section>
  );
}
