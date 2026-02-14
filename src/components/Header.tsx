import Link from "next/link";

const navLinks = [
  { href: "/blog/ai-native-agency-complete-guide", label: "Complete Guide" },
  { href: "/blog/yc-ai-native-agency", label: "YC Thesis" },
  { href: "/blog/ai-native-agency-verticals", label: "Verticals" },
  { href: "/blog/ai-native-vs-traditional", label: "vs Traditional" },
];

export function Header() {
  return (
    <header className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          AI-Native Agency
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {navLinks.map((link) => (
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
          <Link
            href="#contact"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent to-accent-light text-white text-sm rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
