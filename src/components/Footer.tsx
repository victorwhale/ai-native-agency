import Link from "next/link";

const pillarLinks = [
  {
    href: "/blog/what-is-ai-native-agency",
    label: "What Is an AI-Native Agency?",
  },
  {
    href: "/blog/yc-ai-native-agency",
    label: "YC & Aaron Epstein's Thesis",
  },
  {
    href: "/blog/ai-native-agency-verticals",
    label: "Sales, Marketing & Back-Office",
  },
  {
    href: "/blog/ai-native-vs-traditional",
    label: "AI-Native vs Traditional",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-bold text-lg mb-3">AI-Native Agency</p>
            <p className="text-sm text-muted leading-relaxed">
              The definitive resource on AI-native agencies — a new category of
              professional services firms that use artificial intelligence as
              their core operating system to deliver outcomes with software-like
              margins and unprecedented speed.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Pillar Articles</p>
            <ul className="space-y-2 text-sm text-muted">
              {pillarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Get in Touch</p>
            <p className="text-sm text-muted leading-relaxed">
              Want to work with an AI-native agency or learn more about this
              emerging model? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-4 text-sm text-accent-light hover:text-accent font-medium transition-colors"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} AI-Native Agency. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
