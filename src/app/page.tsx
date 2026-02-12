import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const pillarArticles = [
  {
    href: "/blog/what-is-ai-native-agency",
    title: "What Is an AI-Native Agency? The Definitive Guide",
    description:
      "A comprehensive breakdown of what makes an agency AI-native, the spectrum from traditional to AI-first, and the core principles that define this new category.",
  },
  {
    href: "/blog/yc-ai-native-agency",
    title:
      "Why Y Combinator and Aaron Epstein Are Betting on AI-Native Agencies",
    description:
      "How YC's Request for Startups and GP Aaron Epstein's thesis signal a massive shift toward AI-native service delivery.",
  },
  {
    href: "/blog/ai-native-agency-verticals",
    title:
      "The 3 Pillars of AI-Native Agencies: Sales, Marketing & Back-Office",
    description:
      "Explore how AI-native agencies are disrupting sales, marketing, and back-office services — with real examples and margin analysis.",
  },
  {
    href: "/blog/ai-native-vs-traditional",
    title: "AI-Native Agency vs Traditional Agency: The Complete Comparison",
    description:
      "A side-by-side breakdown of margins, speed, scalability, and pricing models between AI-native and traditional agencies.",
  },
];

const advantages = [
  {
    metric: "65–80%",
    label: "Gross Margins",
    description:
      "AI-native agencies achieve software-like margins by replacing labor-intensive workflows with AI systems. Traditional agencies operate at 20–35%.",
  },
  {
    metric: "10x",
    label: "Faster Delivery",
    description:
      "What used to take a team of 5 people two weeks can be delivered in hours. AI compresses timelines dramatically.",
  },
  {
    metric: "∞",
    label: "Scalability",
    description:
      "Scaling doesn't require linear headcount growth. AI systems handle 10 clients or 10,000 with marginal cost increases.",
  },
];

const verticals = [
  {
    name: "Sales",
    description:
      "AI-native sales agencies automate outbound prospecting, lead qualification, CRM management, and pipeline optimization. They replace entire SDR teams with intelligent systems that run 24/7.",
    examples:
      "Outbound automation, lead scoring, meeting booking, CRM enrichment",
  },
  {
    name: "Marketing",
    description:
      "AI-native marketing agencies produce content, manage ad campaigns, optimize SEO, and generate creative assets at scale — delivering in hours what traditional agencies take weeks to produce.",
    examples: "Content creation, ad management, SEO, creative production",
  },
  {
    name: "Back-Office",
    description:
      "AI-native back-office agencies handle legal document review, accounting, HR processes, and recruiting — automating the repetitive work that traditionally required large teams of specialists.",
    examples: "Legal review, bookkeeping, HR automation, talent sourcing",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-15" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <p className="text-accent-light font-mono text-sm mb-4 tracking-wide uppercase">
            The Future of Professional Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
            The Age of the{" "}
            <span className="text-accent-light">AI-Native Agency</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            A new category of professional services firm is emerging — one that
            uses artificial intelligence as its core operating system, not just a
            bolt-on tool. These AI-native agencies deliver outcomes with
            software-like margins, 10x speed, and infinite scalability.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/blog/what-is-ai-native-agency"
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              Read the Definitive Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What Is an AI-Native Agency */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Is an AI-Native Agency?
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            An <strong className="text-foreground">AI-native agency</strong> is
            a professional services firm built from the ground up with artificial
            intelligence at its core. Unlike traditional agencies that add AI
            tools on top of existing human-driven processes, an AI-native agency
            designs every workflow around AI capabilities first, using human
            expertise to supervise, refine, and handle edge cases.
          </p>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            The result is a fundamentally different business model: one that
            operates with{" "}
            <strong className="text-foreground">software-like margins</strong>{" "}
            (65–80% vs. the traditional 20–35%), delivers at{" "}
            <strong className="text-foreground">10x the speed</strong>, and can{" "}
            <strong className="text-foreground">
              scale without linear headcount growth
            </strong>
            .
          </p>
          <Link
            href="/blog/what-is-ai-native-agency"
            className="inline-flex items-center mt-6 text-accent-light hover:text-accent font-medium transition-colors"
          >
            Read the full definition &rarr;
          </Link>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Now?
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-3xl">
            The AI-native agency model isn&apos;t theoretical — it&apos;s being
            validated by the world&apos;s top startup accelerator.{" "}
            <strong className="text-foreground">Y Combinator</strong> included
            &quot;AI-powered professional services&quot; in their official{" "}
            <strong className="text-foreground">
              Request for Startups (RFS)
            </strong>
            , and Group Partner{" "}
            <strong className="text-foreground">Aaron Epstein</strong> has
            publicly championed the thesis that AI-native agencies will capture
            the $700B+ professional services market.
          </p>
          <div className="mt-10 p-6 rounded-xl bg-surface-light border border-border">
            <blockquote className="text-lg italic text-muted leading-relaxed">
              &quot;The professional services industry is ripe for disruption.
              AI-native agencies can deliver the same outcomes as traditional
              firms but with software-like margins and scalability.&quot;
            </blockquote>
            <p className="mt-3 text-sm text-muted">
              — The thesis behind Y Combinator&apos;s push into AI-powered
              services
            </p>
          </div>
          <Link
            href="/blog/yc-ai-native-agency"
            className="inline-flex items-center mt-8 text-accent-light hover:text-accent font-medium transition-colors"
          >
            Read the full YC analysis &rarr;
          </Link>
        </div>
      </section>

      {/* The 3 Verticals */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          The 3 Verticals of AI-Native Agencies
        </h2>
        <p className="mt-4 text-muted text-lg max-w-2xl">
          AI-native agencies are emerging across three major categories of
          professional services.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {verticals.map((v) => (
            <div
              key={v.name}
              className="p-6 rounded-xl border border-border bg-surface hover:bg-surface-light transition-colors"
            >
              <h3 className="text-xl font-bold">{v.name}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {v.description}
              </p>
              <p className="mt-4 text-xs text-muted font-mono">{v.examples}</p>
            </div>
          ))}
        </div>
        <Link
          href="/blog/ai-native-agency-verticals"
          className="inline-flex items-center mt-8 text-accent-light hover:text-accent font-medium transition-colors"
        >
          Explore all verticals in detail &rarr;
        </Link>
      </section>

      {/* Key Advantages */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The AI-Native Advantage
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {advantages.map((a) => (
              <div key={a.label}>
                <p className="text-4xl font-bold text-accent-light">
                  {a.metric}
                </p>
                <p className="mt-2 text-lg font-semibold">{a.label}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/blog/ai-native-vs-traditional"
            className="inline-flex items-center mt-8 text-accent-light hover:text-accent font-medium transition-colors"
          >
            See the full comparison &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Featured Articles
        </h2>
        <p className="mt-4 text-muted text-lg max-w-2xl">
          Deep-dive research on every aspect of the AI-native agency model.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {pillarArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group p-6 rounded-xl border border-border hover:border-accent/40 bg-surface hover:bg-surface-light transition-all"
            >
              <h3 className="text-lg font-semibold group-hover:text-accent-light transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {article.description}
              </p>
              <span className="inline-flex items-center mt-4 text-sm text-accent-light font-medium">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Form + Booking */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-accent)_0%,_transparent_50%)] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-accent-light font-mono text-sm mb-4 tracking-wide uppercase">
              Start Your Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get Matched with an AI-Native Agency
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Fill out the form or book a free call — we&apos;ll connect you
              with the right AI-native agency to deliver results with 10x speed
              and software-like efficiency.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Describe Your Project</h3>
              <ContactForm />
            </div>
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Book a Free Call</h3>
              <p className="text-muted text-sm mb-6">
                Prefer to talk? Schedule a free 30-minute consultation to
                discuss your project and find the right AI-native agency.
              </p>
              <iframe
                src="https://cal.eu/victor-jaikin/30min?embed=true&theme=dark&layout=month_view"
                className="w-full border-0 rounded-lg"
                style={{ height: 500 }}
                title="Book a call"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
