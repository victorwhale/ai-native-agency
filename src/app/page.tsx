import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

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
      "Software-like margins by replacing labor-intensive workflows with AI systems. Traditional agencies operate at 20–35%.",
    color: "text-cyan",
    bgGlow: "bg-cyan/10",
  },
  {
    metric: "10x",
    label: "Faster Delivery",
    description:
      "What used to take a team of 5 people two weeks can be delivered in hours. AI compresses timelines dramatically.",
    color: "text-orange",
    bgGlow: "bg-orange/10",
  },
  {
    metric: "∞",
    label: "Scalability",
    description:
      "No linear headcount growth. AI systems handle 10 clients or 10,000 with marginal cost increases.",
    color: "text-emerald",
    bgGlow: "bg-emerald/10",
  },
];

const verticals = [
  {
    name: "Sales",
    icon: "⚡",
    description:
      "Automate outbound prospecting, lead qualification, CRM management, and pipeline optimization. Replace entire SDR teams with intelligent systems that run 24/7.",
    examples:
      "Outbound automation, lead scoring, meeting booking, CRM enrichment",
    color: "cyan" as const,
  },
  {
    name: "Marketing",
    icon: "🎯",
    description:
      "Produce content, manage ad campaigns, optimize SEO, and generate creative assets at scale — delivering in hours what traditional agencies take weeks to produce.",
    examples: "Content creation, ad management, SEO, creative production",
    color: "orange" as const,
  },
  {
    name: "Back-Office",
    icon: "🔧",
    description:
      "Handle legal document review, accounting, HR processes, and recruiting — automating the repetitive work that traditionally required large teams of specialists.",
    examples: "Legal review, bookkeeping, HR automation, talent sourcing",
    color: "emerald" as const,
  },
];

const verticalColorMap = {
  cyan: {
    border: "border-t-cyan",
    iconBg: "bg-cyan/10",
    iconText: "text-cyan",
  },
  orange: {
    border: "border-t-orange",
    iconBg: "bg-orange/10",
    iconText: "text-orange",
  },
  emerald: {
    border: "border-t-emerald",
    iconBg: "bg-emerald/10",
    iconText: "text-emerald",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Full viewport, immersive entry
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[calc(100vh-65px)] flex items-center">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,_var(--color-accent)_0%,_transparent_50%),radial-gradient(ellipse_at_80%_20%,_var(--color-cyan)_0%,_transparent_40%),radial-gradient(ellipse_at_50%_80%,_var(--color-emerald)_0%,_transparent_35%)] opacity-15" />

        {/* Subtle grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 w-full">
          <ScrollReveal>
            <p className="text-accent-light font-mono text-sm mb-6 tracking-wide uppercase">
              The Future of Professional Services
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl">
              The Age of the{" "}
              <span className="bg-gradient-to-r from-accent via-accent-light to-cyan bg-clip-text text-transparent">
                AI-Native Agency
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              A new category of professional services firm — one that uses AI as
              its core operating system to deliver outcomes with{" "}
              <strong className="text-foreground">software-like margins</strong>
              , <strong className="text-foreground">10x speed</strong>, and{" "}
              <strong className="text-foreground">infinite scalability</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Your Free Strategy Call
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/blog/what-is-ai-native-agency"
                className="inline-flex items-center px-8 py-4 border border-border/60 rounded-xl font-medium text-muted hover:text-foreground hover:border-foreground/30 hover:bg-surface/50 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2 text-muted/50">
            <span className="text-xs font-mono uppercase tracking-widest">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT IS — Light section, clean explanation
          ═══════════════════════════════════════════ */}
      <section className="bg-light-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-accent font-mono text-sm mb-4 tracking-wide uppercase">
                Definition
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text">
                What Is an AI-Native Agency?
              </h2>
              <p className="mt-8 text-light-muted text-lg md:text-xl leading-relaxed">
                An{" "}
                <strong className="text-light-text">AI-native agency</strong> is
                a professional services firm built from the ground up with
                artificial intelligence at its core. Unlike traditional agencies
                that add AI tools on top of existing human-driven processes, an
                AI-native agency designs every workflow around AI capabilities
                first, using human expertise to supervise, refine, and handle
                edge cases.
              </p>
              <p className="mt-6 text-light-muted text-lg md:text-xl leading-relaxed">
                The result is a fundamentally different business model: one that
                operates with{" "}
                <strong className="text-light-text">
                  software-like margins
                </strong>{" "}
                (65–80% vs. the traditional 20–35%), delivers at{" "}
                <strong className="text-light-text">10x the speed</strong>, and
                can{" "}
                <strong className="text-light-text">
                  scale without linear headcount growth
                </strong>
                .
              </p>
              <Link
                href="/blog/what-is-ai-native-agency"
                className="group inline-flex items-center mt-8 text-accent font-semibold transition-colors hover:text-accent-light"
              >
                Read the full definition
                <span className="ml-1 group-hover:ml-2 transition-all">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY NOW — Dark, social proof, YC badge
          ═══════════════════════════════════════════ */}
      <section className="bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wide">
                Backed by YC Thesis
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Why Now?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-8 text-muted text-lg md:text-xl leading-relaxed max-w-3xl">
              The AI-native agency model isn&apos;t theoretical — it&apos;s
              being validated by the world&apos;s top startup accelerator.{" "}
              <strong className="text-foreground">Y Combinator</strong> included
              &quot;AI-powered professional services&quot; in their official{" "}
              <strong className="text-foreground">
                Request for Startups (RFS)
              </strong>
              , and Group Partner{" "}
              <strong className="text-foreground">Aaron Epstein</strong> has
              publicly championed the thesis that AI-native agencies will
              capture the{" "}
              <strong className="text-foreground">
                $700B+ professional services market
              </strong>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-surface-light to-surface border border-border/60 relative">
              <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-accent to-cyan rounded-full" />
              <blockquote className="pl-8 text-xl md:text-2xl italic text-foreground/80 leading-relaxed font-light">
                &quot;The professional services industry is ripe for disruption.
                AI-native agencies can deliver the same outcomes as traditional
                firms but with software-like margins and scalability.&quot;
              </blockquote>
              <p className="mt-4 pl-8 text-sm text-muted font-mono">
                — The thesis behind Y Combinator&apos;s push into AI-powered
                services
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              href="/blog/yc-ai-native-agency"
              className="group inline-flex items-center mt-10 text-accent-light font-semibold transition-colors hover:text-accent"
            >
              Read the full YC analysis
              <span className="ml-1 group-hover:ml-2 transition-all">
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 VERTICALS — Light, cards with personality
          ═══════════════════════════════════════════ */}
      <section className="bg-light-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <p className="text-accent font-mono text-sm mb-4 tracking-wide uppercase">
              Three Pillars
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text">
              AI-Native Agency Verticals
            </h2>
            <p className="mt-4 text-light-muted text-lg md:text-xl max-w-2xl">
              Emerging across three major categories of professional services.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {verticals.map((v, i) => {
              const colors = verticalColorMap[v.color];
              return (
                <ScrollReveal key={v.name} delay={i * 100}>
                  <div
                    className={`group p-8 rounded-2xl border border-light-border bg-light-surface shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 ${colors.border} h-full`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center text-2xl mb-6`}
                    >
                      {v.icon}
                    </div>
                    <h3 className="text-xl font-bold text-light-text">
                      {v.name}
                    </h3>
                    <p className="mt-4 text-light-muted text-sm leading-relaxed">
                      {v.description}
                    </p>
                    <p className="mt-6 text-xs text-light-muted/70 font-mono border-t border-light-border pt-4">
                      {v.examples}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={400}>
            <Link
              href="/blog/ai-native-agency-verticals"
              className="group inline-flex items-center mt-10 text-accent font-semibold transition-colors hover:text-accent-light"
            >
              Explore all verticals in detail
              <span className="ml-1 group-hover:ml-2 transition-all">
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ADVANTAGES — Dark, bold metrics with glow
          ═══════════════════════════════════════════ */}
      <section className="bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-cyan)_0%,_transparent_60%)] opacity-[0.05]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <p className="text-cyan font-mono text-sm mb-4 tracking-wide uppercase">
              The Numbers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              The AI-Native Advantage
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 150}>
                <div
                  className={`relative p-8 rounded-2xl border border-border/40 bg-surface-light/50 backdrop-blur-sm`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${a.bgGlow} rounded-full blur-2xl -translate-y-1/2 translate-x-1/4`}
                  />
                  <p
                    className={`relative text-5xl md:text-6xl font-bold ${a.color} tracking-tight`}
                  >
                    {a.metric}
                  </p>
                  <p className="mt-3 text-lg font-semibold">{a.label}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <Link
              href="/blog/ai-native-vs-traditional"
              className="group inline-flex items-center mt-10 text-accent-light font-semibold transition-colors hover:text-accent"
            >
              See the full comparison
              <span className="ml-1 group-hover:ml-2 transition-all">
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED ARTICLES — Light, rich cards
          ═══════════════════════════════════════════ */}
      <section className="bg-light-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <p className="text-accent font-mono text-sm mb-4 tracking-wide uppercase">
              Deep Dives
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text">
              Featured Articles
            </h2>
            <p className="mt-4 text-light-muted text-lg md:text-xl max-w-2xl">
              Research-backed analysis on every aspect of the AI-native agency
              model.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {pillarArticles.map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 100}>
                <Link
                  href={article.href}
                  className="group flex flex-col p-8 rounded-2xl border border-light-border bg-light-surface shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-light-text group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT — Dark, warm gradient, single column
          ═══════════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-orange)_0%,_transparent_40%),radial-gradient(ellipse_at_bottom_right,_var(--color-accent)_0%,_transparent_40%)] opacity-15" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-orange font-mono text-sm mb-4 tracking-wide uppercase">
                Let&apos;s Talk
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Get Your Free Strategy Call
              </h2>
              <p className="mt-6 text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Tell us about your project — we&apos;ll connect you with the
                right AI-native agency to deliver results with 10x speed.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="p-8 md:p-10 rounded-2xl border border-border/60 bg-surface/50 backdrop-blur-sm">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
