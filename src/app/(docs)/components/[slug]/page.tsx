import { notFound } from "next/navigation"
import Link from "next/link"
import { componentsRegistry } from "@/lib/components-registry"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs } from "@/components/ui/tabs"
import { Accordion } from "@/components/ui/accordion"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedCard } from "@/components/ui/animated-card"
import { HeroSection } from "@/components/blocks/hero-section"
import { FeaturesSection } from "@/components/blocks/features-section"
import { PricingSection } from "@/components/blocks/pricing-section"
import { ComponentPagination } from "@/components/component-pagination"

interface CategoryTag {
  name: string
  slug: string
}

const categoryTags: Record<string, CategoryTag[]> = {
  button: [{ name: "button", slug: "button" }, { name: "form", slug: "form" }],
  card: [{ name: "card", slug: "card" }, { name: "layout", slug: "layout" }],
  badge: [{ name: "badge", slug: "badge" }, { name: "data-display", slug: "data-display" }],
  input: [{ name: "input", slug: "input" }, { name: "form", slug: "form" }],
  tabs: [{ name: "tabs", slug: "tabs" }, { name: "navigation", slug: "navigation" }],
  accordion: [{ name: "accordion", slug: "accordion" }, { name: "data-display", slug: "data-display" }],
  marquee: [{ name: "marquee", slug: "marquee" }, { name: "animation", slug: "animation" }],
  "animated-card": [{ name: "card", slug: "card" }, { name: "animation", slug: "animation" }],
  "hero-section": [{ name: "hero", slug: "hero" }, { name: "block", slug: "block" }],
  "features-section": [{ name: "features", slug: "features" }, { name: "block", slug: "block" }],
  "pricing-section": [{ name: "pricing", slug: "pricing" }, { name: "block", slug: "block" }],
}

const componentPreviews: Record<string, { element: React.ReactNode; code: string }> = {
  button: {
    element: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    ),
    code: `<Button>Default</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="secondary">Secondary</Button>`,
  },
  card: {
    element: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>A description for the card component.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Card content supports header, title, description, content, and footer.</p>
        </CardContent>
      </Card>
    ),
    code: `<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Content</p>\n  </CardContent>\n</Card>`,
  },
  badge: {
    element: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Badge>Default</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    ),
    code: `<Badge>Default</Badge>\n<Badge variant="outline">Outline</Badge>\n<Badge variant="secondary">Secondary</Badge>`,
  },
  input: {
    element: (
      <div className="w-full max-w-sm space-y-4">
        <Input placeholder="Default input" />
        <Input placeholder="With label" label="Email" id="email-preview" type="email" />
        <Input placeholder="Disabled" disabled />
      </div>
    ),
    code: `<Input placeholder="Default input" />\n<Input label="Email" id="email" />\n<Input placeholder="Disabled" disabled />`,
  },
  tabs: {
    element: (
      <div className="w-full max-w-md">
        <Tabs
          tabs={[
            { label: "Account", content: <p className="text-sm text-muted-foreground">Account settings content.</p> },
            { label: "Password", content: <p className="text-sm text-muted-foreground">Password settings content.</p> },
            { label: "Notifications", content: <p className="text-sm text-muted-foreground">Notification preferences.</p> },
          ]}
        />
      </div>
    ),
    code: `<Tabs\n  tabs={[\n    { label: "Account", content: <p>Account content</p> },\n    { label: "Password", content: <p>Password content</p> },\n  ]}\n/>`,
  },
  accordion: {
    element: (
      <div className="w-full max-w-md">
        <Accordion
          items={[
            { title: "What is impic-ui?", content: "impic-ui is an open-source copy-paste component library for React and Next.js." },
            { title: "How do I install it?", content: "No install needed. Just copy-paste the component code into your project." },
            { title: "Is it free?", content: "Yes, it's MIT licensed and completely free to use." },
          ]}
        />
      </div>
    ),
    code: `<Accordion\n  items={[\n    { title: "Question 1", content: "Answer 1" },\n    { title: "Question 2", content: "Answer 2" },\n  ]}\n/>`,
  },
  marquee: {
    element: (
      <div className="w-full overflow-hidden rounded-xl border bg-card">
        <Marquee className="py-4">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"].map((text) => (
            <span key={text} className="mx-6 text-sm font-medium text-muted-foreground">{text}</span>
          ))}
        </Marquee>
      </div>
    ),
    code: `<Marquee>\n  {items.map((item) => (\n    <span key={item}>{item}</span>\n  ))}\n</Marquee>`,
  },
  "animated-card": {
    element: (
      <div className="grid gap-4 sm:grid-cols-3 w-full max-w-3xl">
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>} title="Copy-Paste" description="Just copy and paste components into your project." />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>} title="Animations" description="Smooth animations powered by Framer Motion." />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>} title="Dark Mode" description="Dark mode support built into every component." />
      </div>
    ),
    code: `<AnimatedCard\n  icon={<Icon />}\n  title="Feature"\n  description="Description"\n  variant="blue"\n/>`,
  },
  "hero-section": {
    element: <HeroSection />,
    code: `<section className="relative min-h-screen flex items-center justify-center">\n  <h1 className="text-4xl font-semibold sm:text-6xl">Copy, paste, and build</h1>\n  <p className="text-muted-foreground">Production-ready components</p>\n</section>`,
  },
  "features-section": {
    element: <FeaturesSection />,
    code: `<section>\n  <h2 className="text-3xl font-semibold">Everything you need</h2>\n  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">\n    {features.map((f) => (\n      <div key={f.title}><h3>{f.title}</h3><p>{f.description}</p></div>\n    ))}\n  </div>\n</section>`,
  },
  "pricing-section": {
    element: <PricingSection />,
    code: `<section className="py-24">\n  <div className="grid gap-6 lg:grid-cols-3">\n    {plans.map((plan) => (\n      <div key={plan.name} className="rounded-xl border p-6">\n        <h3>{plan.name}</h3>\n        <span className="text-3xl font-semibold">{plan.price}</span>\n        <ul>{plan.features.map(f => <li>{f}</li>)}</ul>\n      </div>\n    ))}\n  </div>\n</section>`,
  },
}

export default async function ComponentPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const entry = componentsRegistry.find((c) => c.slug === slug)
  if (!entry) notFound()

  const preview = componentPreviews[slug]
  const tags = categoryTags[slug] ?? []

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/components" className="hover:text-foreground transition-colors">
          Components
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        <span className="text-foreground">{entry.title}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {entry.title}
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          {entry.description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/categories/${tag.slug}`}
                className="inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {preview && (
        <div className="mb-12">
          <div className="flex items-center gap-1 border-b border-border mb-6">
            <span className="px-4 py-2 text-sm font-medium text-foreground border-b-2 border-foreground">
              Preview
            </span>
            <span className="px-4 py-2 text-sm text-muted-foreground cursor-not-allowed">
              Code
            </span>
          </div>

          <div className="rounded-xl border bg-card p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
            {preview.element}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <code className="flex-1 rounded-lg border bg-codebg px-4 py-2.5 text-sm text-muted-foreground font-mono overflow-x-auto">
              npx shadcn@latest add impic-ui/{slug}
            </code>
            <button className="shrink-0 rounded-lg border px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
          </div>
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-xl font-semibold tracking-tight mb-4">
          Installation
        </h2>
        <div className="flex items-center gap-1 border-b border-border mb-6">
          <span className="px-4 py-2 text-sm font-medium text-foreground border-b-2 border-foreground">
            CLI
          </span>
          <span className="px-4 py-2 text-sm text-muted-foreground cursor-not-allowed">
            Manual
          </span>
        </div>
        <div className="rounded-lg border bg-codebg p-4">
          <pre className="text-sm font-mono">npx shadcn@latest add impic-ui/{slug}</pre>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Make sure you have the required dependencies installed:
        </p>
        <div className="rounded-lg border bg-codebg p-4 mt-2">
          <pre className="text-sm font-mono">npm install motion clsx tailwind-merge</pre>
        </div>
      </section>

      {preview && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Usage
          </h2>
          <div className="rounded-lg border bg-codebg p-4 overflow-x-auto">
            <pre className="text-sm font-mono"><code>{preview.code}</code></pre>
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-xl font-semibold tracking-tight mb-4">
          Props
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left py-3 px-4 font-medium">Prop</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">variant</code></td>
                <td className="py-3 px-4 text-muted-foreground"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&quot;default&quot; | &quot;outline&quot; | &quot;ghost&quot; | &quot;secondary&quot;</code></td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&quot;default&quot;</code></td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">size</code></td>
                <td className="py-3 px-4 text-muted-foreground"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;icon&quot;</code></td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&quot;md&quot;</code></td>
              </tr>
              <tr>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">children</code></td>
                <td className="py-3 px-4 text-muted-foreground"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">React.ReactNode</code></td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">—</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t pt-8">
        <ComponentPagination currentSlug={slug} />
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        Built by zaid. The source code is available on{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
          GitHub
        </a>
        .
      </div>
    </div>
  )
}
