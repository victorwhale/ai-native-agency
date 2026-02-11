import Link from "next/link";

const navLinks = [
  { href: "/blog/what-is-ai-native-agency", label: "What Is It?" },
  { href: "/blog/yc-ai-native-agency", label: "YC Thesis" },
  { href: "/blog/ai-native-agency-verticals", label: "Verticals" },
  { href: "/blog/ai-native-vs-traditional", label: "vs Traditional" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          AI-Native Agency
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted">
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
      </nav>
    </header>
  );
}
