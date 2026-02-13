import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Sent — AI-Native Agency",
  description: "Thank you for reaching out. We'll get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-light-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <div className="text-5xl mb-6 text-emerald-500">&#10003;</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-light-text">
          Message Sent
        </h1>
        <p className="mt-4 text-lg text-light-muted leading-relaxed max-w-xl mx-auto">
          Thank you for reaching out. We&apos;ll review your message and get back
          to you as soon as possible.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/blog/what-is-ai-native-agency"
            className="inline-flex items-center px-6 py-3 border border-light-border rounded-lg font-medium text-light-muted hover:text-light-text hover:border-light-text/30 transition-colors"
          >
            Read Our Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
