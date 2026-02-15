import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-light-bg min-h-[calc(100vh-65px)] flex items-center">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-accent font-mono text-sm mb-4 tracking-wide uppercase">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-light-text font-[family-name:var(--font-space-grotesk)]">
          Page Not Found
        </h1>
        <p className="mt-6 text-light-muted text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-light-border rounded-xl font-medium text-light-muted hover:text-light-text hover:border-light-text/30 transition-all duration-300"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
