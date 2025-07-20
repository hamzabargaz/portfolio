import { Post } from "@/lib/mdx-posts";

interface Author {
  full_name: string;
  intro: string;
  website_url: string;
  social_links: Array<{ name: string; url: string }>;
  avatar: string;
}

export function PersonSchema({ author }: { author: Author }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.full_name,
    description: author.intro,
    url: author.website_url,
    sameAs: author.social_links.map((link) => link.url),
    image: author.avatar,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({ post }: { post: Post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Hamza Bargaz",
    },
    publisher: {
      "@type": "Organization",
      name: "Hamza Bargaz",
      logo: {
        "@type": "ImageObject",
        url: "https://bargaz.me/images/hb-light.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: post.hero_image.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bargaz.me/posts/${post.slug}`,
    },
    articleSection: "Technology",
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema({ author }: { author: Author }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: author.full_name,
    url: author.website_url,
    logo: {
      "@type": "ImageObject",
      url: "https://bargaz.me/images/hb-light.png",
    },
    description: author.intro,
    sameAs: author.social_links.map((link) => link.url),
    founder: {
      "@type": "Person",
      name: author.full_name,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hamza Bargaz Portfolio",
    url: "https://bargaz.me",
    description:
      "Software Engineer based in Morocco, passionate about web development and open source.",
    author: {
      "@type": "Person",
      name: "Hamza Bargaz",
    },
    publisher: {
      "@type": "Organization",
      name: "Hamza Bargaz",
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
