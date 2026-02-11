type ArticleStructuredDataProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
};

export function ArticleStructuredData({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: ArticleStructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "AI-Native Agency",
    },
    publisher: {
      "@type": "Organization",
      name: "AI-Native Agency",
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ainativeagency.com/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type FAQStructuredDataProps = {
  faqs: { question: string; answer: string }[];
};

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI-Native Agency",
    url: "https://ainativeagency.com",
    description:
      "The definitive resource on AI-native agencies — professional services firms that use AI as their core operating system.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
