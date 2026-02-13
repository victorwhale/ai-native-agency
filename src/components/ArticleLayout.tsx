import Link from "next/link";

type ArticleLayoutProps = {
  children: React.ReactNode;
};

const relatedArticles = [
  {
    href: "/blog/what-is-ai-native-agency",
    title: "What Is an AI-Native Agency?",
  },
  {
    href: "/blog/yc-ai-native-agency",
    title: "Why YC Is Betting on AI-Native Agencies",
  },
  {
    href: "/blog/ai-native-agency-verticals",
    title: "Sales, Marketing & Back-Office Verticals",
  },
  {
    href: "/blog/ai-native-vs-traditional",
    title: "AI-Native vs Traditional Agency",
  },
];

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <article className="bg-light-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="prose prose-lg max-w-none [&>h1]:text-light-text [&>h1]:text-4xl [&>h1]:md:text-5xl [&>h1]:font-bold [&>h1]:tracking-tight [&>h1]:leading-[1.15] [&>h1]:mb-6 [&>h2]:text-light-text [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 [&>h3]:text-light-text [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:text-light-muted [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-light-muted [&>ul]:mb-6 [&>ul]:space-y-2 [&>ol]:text-light-muted [&>ol]:mb-6 [&>ol]:space-y-2 [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-light-muted [&>blockquote]:my-8 [&_strong]:text-light-text [&_a]:text-accent-light [&_a]:underline [&_a:hover]:text-accent [&>hr]:border-light-border [&>hr]:my-12">
        {children}
      </div>

      {/* Related Articles */}
      <nav className="mt-20 pt-10 border-t border-light-border">
        <p className="text-sm font-semibold text-light-muted uppercase tracking-wide mb-6">
          Continue Reading
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {relatedArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group p-4 rounded-lg border border-light-border hover:border-accent/40 hover:bg-light-surface shadow-sm transition-all"
            >
              <p className="text-sm font-medium text-light-text group-hover:text-accent-light transition-colors">
                {article.title}
              </p>
            </Link>
          ))}
        </div>
      </nav>
      </div>
    </article>
  );
}
