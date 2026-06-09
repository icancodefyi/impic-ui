export interface ComponentEntry {
  slug: string
  title: string
  description: string
  category: "ui" | "block"
}

export const componentsRegistry: ComponentEntry[] = [
  {
    slug: "button",
    title: "Button",
    description: "Animated button component with multiple variants and sizes.",
    category: "ui",
  },
  {
    slug: "card",
    title: "Card",
    description: "Card component with header, title, description, content, and footer sections.",
    category: "ui",
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Badge component for labels, statuses, and tags.",
    category: "ui",
  },
  {
    slug: "input",
    title: "Input",
    description: "Text input component with label support and focus ring.",
    category: "ui",
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Tabbed interface component with animated content switching.",
    category: "ui",
  },
  {
    slug: "accordion",
    title: "Accordion",
    description: "Expandable accordion component with smooth animations.",
    category: "ui",
  },
  {
    slug: "marquee",
    title: "Marquee",
    description: "Infinite scrolling marquee for testimonials, logos, and more.",
    category: "ui",
  },
  {
    slug: "animated-card",
    title: "Animated Card",
    description: "Card with hover gradient effects and scroll-triggered animation.",
    category: "ui",
  },
  {
    slug: "hero-section",
    title: "Hero Section",
    description: "Full-screen hero with gradient text, animated entrance, and CTA buttons.",
    category: "block",
  },
  {
    slug: "features-section",
    title: "Features Section",
    description: "Responsive grid layout showcasing product features with staggered animations.",
    category: "block",
  },
  {
    slug: "pricing-section",
    title: "Pricing Section",
    description: "Three-tier pricing table with popular plan highlight and feature lists.",
    category: "block",
  },
]
