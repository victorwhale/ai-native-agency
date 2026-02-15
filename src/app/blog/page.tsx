import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Blog — AI-Native Agency Research & Insights",
  description:
    "Research-backed articles on AI-native agencies: business models, tech stacks, pricing, verticals, and the YC thesis. Updated weekly.",
  alternates: {
    canonical: "https://ai-native-agency.com/blog",
  },
  openGraph: {
    title: "Blog — AI-Native Agency Research & Insights",
    description:
      "Research-backed articles on AI-native agencies: business models, tech stacks, pricing, verticals, and the YC thesis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI-Native Agency Research & Insights",
    description:
      "Research-backed articles on AI-native agencies: business models, tech stacks, pricing, verticals, and the YC thesis.",
  },
};

const articles = [
  {
    href: "/blog/ai-native-agency-complete-guide",
    title: "The Complete Guide to AI-Native Agencies (2026)",
    description:
      "Everything you need to know about AI-native agencies in one place: definition, business model, tech stack, pricing, verticals, case studies, and how to start one.",
    date: "2026-02-13",
    category: "Pillar",
    readTime: "38 min",
  },
  {
    href: "/blog/what-is-ai-native-agency",
    title: "What Is an AI-Native Agency? The Definitive Guide",
    description:
      "A comprehensive breakdown of what makes an agency AI-native, the spectrum from traditional to AI-first, and the core principles that define this new category.",
    date: "2026-02-15",
    category: "Definition",
    readTime: "12 min",
  },
  {
    href: "/blog/yc-ai-native-agency",
    title:
      "Why Y Combinator and Aaron Epstein Are Betting on AI-Native Agencies",
    description:
      "How YC's Request for Startups and GP Aaron Epstein's thesis signal a massive shift toward AI-native service delivery.",
    date: "2026-02-15",
    category: "Industry",
    readTime: "10 min",
  },
  {
    href: "/blog/ai-native-agency-verticals",
    title:
      "The 3 Pillars of AI-Native Agencies: Sales, Marketing & Back-Office",
    description:
      "Explore how AI-native agencies are disrupting sales, marketing, and back-office services — with real examples and margin analysis.",
    date: "2026-02-15",
    category: "Verticals",
    readTime: "14 min",
  },
  {
    href: "/blog/ai-native-vs-traditional",
    title: "AI-Native Agency vs Traditional Agency: The Complete Comparison",
    description:
      "A side-by-side breakdown of margins, speed, scalability, and pricing models between AI-native and traditional agencies.",
    date: "2026-02-15",
    category: "Comparison",
    readTime: "11 min",
  },
  {
    href: "/blog/how-to-start-ai-native-agency",
    title: "How to Start an AI-Native Agency in 2026",
    description:
      "Step-by-step guide to launching an AI-native agency — from choosing a vertical to building your tech stack and landing your first clients.",
    date: "2026-02-12",
    category: "Guide",
    readTime: "15 min",
  },
  {
    href: "/blog/ai-native-agency-tech-stack",
    title: "The AI-Native Agency Tech Stack: Tools & Infrastructure",
    description:
      "The essential tools, platforms, and AI models powering modern AI-native agencies — from automation to client delivery.",
    date: "2026-02-12",
    category: "Tech",
    readTime: "13 min",
  },
  {
    href: "/blog/ai-native-agency-pricing",
    title: "AI-Native Agency Pricing Models: How to Price AI Services",
    description:
      "Pricing strategies for AI-native agencies — outcome-based, subscription, and hybrid models that capture the value AI creates.",
    date: "2026-02-12",
    category: "Business",
    readTime: "10 min",
  },
];

export default function BlogIndex() {
  return (
    <section className="bg-light-bg min-h-screen">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://ai-native-agency.com" },
          { name: "Blog", url: "https://ai-native-agency.com/blog" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-accent font-mono text-sm mb-4 tracking-wide uppercase">
          Research & Insights
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-light-text font-[family-name:var(--font-space-grotesk)]">
          AI-Native Agency Blog
        </h1>
        <p className="mt-6 text-light-muted text-lg md:text-xl max-w-2xl leading-relaxed">
          Research-backed analysis on every aspect of the AI-native agency model
          — from business fundamentals to tech stack deep dives.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col p-8 rounded-2xl border border-light-border bg-light-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-light-muted/70 mb-4">
                <span className="px-2 py-1 rounded-md bg-accent/10 text-accent font-medium">
                  {article.category}
                </span>
                <span>{article.readTime} read</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-lg font-bold text-light-text group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-light-muted leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="inline-flex items-center mt-6 text-sm text-accent font-semibold group-hover:text-accent-light transition-colors">
                Read article
                <span className="ml-1 group-hover:ml-2 transition-all">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
