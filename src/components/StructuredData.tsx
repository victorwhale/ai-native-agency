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
      url: "https://ai-native-agency.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AI-Native Agency",
      url: "https://ai-native-agency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ai-native-agency.com/og-image.png",
      },
    },
    datePublished,
    dateModified,
    image: "https://ai-native-agency.com/og-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ai-native-agency.com/blog/${slug}`,
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
    url: "https://ai-native-agency.com",
    description:
      "The definitive resource on AI-native agencies — professional services firms that use AI as their core operating system.",
    publisher: {
      "@type": "Organization",
      name: "AI-Native Agency",
      url: "https://ai-native-agency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ai-native-agency.com/og-image.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "victor@jaikin.eu",
        contactType: "customer service",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI-Native Agency",
    url: "https://ai-native-agency.com",
    logo: "https://ai-native-agency.com/og-image.png",
    description:
      "The definitive resource on AI-native agencies — professional services firms that use AI as their core operating system.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "victor@jaikin.eu",
      contactType: "customer service",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
