import { notFound } from "next/navigation"
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
import { TableOfContents } from "@/components/table-of-contents"
import { GapPattern } from "@/components/gap-pattern"
import Link from "next/link"

type ComponentDoc = {
  element: React.ReactNode
  code: string
  install: string
  deps: string[]
  props: { name: string; type: string; default: string }[]
}

const componentDocs: Record<string, ComponentDoc> = {
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
    install: "Copy the component into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "variant", type: '"default" | "outline" | "ghost" | "secondary"', default: '"default"' },
      { name: "size", type: '"sm" | "md" | "lg" | "icon"', default: '"md"' },
      { name: "className", type: "string", default: '""' },
    ],
  },
  card: {
    element: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>A description for the card component.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Card content with header, title, description, and content sections.</p>
        </CardContent>
      </Card>
    ),
    code: `<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Content</p>\n  </CardContent>\n</Card>`,
    install: "Copy the component into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "className", type: "string", default: '""' },
    ],
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
    install: "Copy the component into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "variant", type: '"default" | "outline" | "secondary"', default: '"default"' },
      { name: "className", type: "string", default: '""' },
    ],
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
    install: "Copy the component into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "label", type: "string", default: "undefined" },
      { name: "id", type: "string", default: "undefined" },
      { name: "className", type: "string", default: '""' },
    ],
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
    install: "Copy the component into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "tabs", type: '{ label: string; content: React.ReactNode }[]', default: "required" },
      { name: "className", type: "string", default: '""' },
    ],
  },
  accordion: {
    element: (
      <div className="w-full max-w-md">
        <Accordion
          items={[
            { title: "What is impic-ui?", content: "An open-source copy-paste component library for React and Next.js." },
            { title: "How do I install it?", content: "No install needed. Just copy-paste the component code into your project." },
            { title: "Is it free?", content: "Yes, it's MIT licensed and completely free to use." },
          ]}
        />
      </div>
    ),
    code: `<Accordion\n  items={[\n    { title: "Question 1", content: "Answer 1" },\n    { title: "Question 2", content: "Answer 2" },\n  ]}\n/>`,
    install: "Copy the component into your project. No external dependencies required.",
    deps: ["motion"],
    props: [
      { name: "items", type: '{ title: string; content: string }[]', default: "required" },
      { name: "className", type: "string", default: '""' },
    ],
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
    install: "Copy the component into your project. Install the required dependency:",
    deps: [],
    props: [
      { name: "reverse", type: "boolean", default: "false" },
      { name: "pauseOnHover", type: "boolean", default: "false" },
      { name: "repeat", type: "number", default: "4" },
      { name: "className", type: "string", default: '""' },
    ],
  },
  "animated-card": {
    element: (
      <div className="grid gap-4 sm:grid-cols-3 w-full max-w-3xl">
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>} title="Copy-Paste" description="Just copy and paste components into your project." variant="default" />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>} title="Animations" description="Smooth animations powered by Framer Motion." variant="muted" />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>} title="Dark Mode" description="Dark mode support built into every component." variant="strong" />
      </div>
    ),
    code: `<AnimatedCard\n  icon={<Icon />}\n  title="Feature"\n  description="Description"\n  variant="default"\n/>`,
    install: "Copy the component into your project. Make sure you have the required dependencies:",
    deps: ["motion"],
    props: [
      { name: "icon", type: "React.ReactNode", default: "required" },
      { name: "title", type: "string", default: "required" },
      { name: "description", type: "string", default: "required" },
      { name: "variant", type: '"default" | "muted" | "strong"', default: '"default"' },
      { name: "className", type: "string", default: '""' },
    ],
  },
  "hero-section": {
    element: (
      <div className="w-full overflow-hidden max-h-[400px]">
        <HeroSection />
      </div>
    ),
    code: `<section className="relative min-h-screen flex items-center justify-center">\n  <h1 className="text-4xl font-semibold sm:text-6xl">Heading</h1>\n  <p className="text-muted-foreground">Subtext</p>\n</section>`,
    install: "Copy the block into your project. Dependencies required:",
    deps: ["motion", "next/image"],
    props: [
      { name: "variant", type: '"default" | "center" | "split"', default: '"default"' },
      { name: "title", type: "string", default: "required" },
      { name: "description", type: "string", default: "required" },
    ],
  },
  "features-section": {
    element: (
      <div className="w-full overflow-hidden max-h-[400px]">
        <FeaturesSection />
      </div>
    ),
    code: `<section>\n  <h2 className="text-3xl font-semibold">Everything you need</h2>\n  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">\n    {features.map((f) => (\n      <div key={f.title}>\n        <h3>{f.title}</h3>\n        <p>{f.description}</p>\n      </div>\n    ))}\n  </div>\n</section>`,
    install: "Copy the block into your project. Dependencies required:",
    deps: ["motion"],
    props: [
      { name: "columns", type: "number", default: "3" },
      { name: "features", type: "Feature[]", default: "required" },
    ],
  },
  "pricing-section": {
    element: (
      <div className="w-full overflow-hidden max-h-[400px]">
        <PricingSection />
      </div>
    ),
    code: `<section className="py-24">\n  <div className="grid gap-6 lg:grid-cols-3">\n    {plans.map((plan) => (\n      <div key={plan.name} className="rounded-xl border p-6">\n        <h3>{plan.name}</h3>\n        <span className="text-3xl font-semibold">{plan.price}</span>\n        <ul>{plan.features.map(f => <li>{f}</li>)}</ul>\n      </div>\n    ))}\n  </div>\n</section>`,
    install: "Copy the block into your project. No external dependencies required.",
    deps: [],
    props: [
      { name: "plans", type: "Plan[]", default: "required" },
      { name: "popularIndex", type: "number", default: "1" },
    ],
  },
}

function getTocItems() {
  const sections = ["preview", "installation", "props", "usage"]
  return sections.map((s) => ({
    title: s.charAt(0).toUpperCase() + s.slice(1),
    url: `#${s}`,
  }))
}

export default async function ComponentPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const entry = componentsRegistry.find((c) => c.slug === slug)
  if (!entry) notFound()

  const doc = componentDocs[slug]
  const tocItems = getTocItems()

  return (
    <div className="flex w-full lg:gap-10">
      <div className="w-full relative">
        {/* Header */}
        <div className="mb-8 rounded-2xl border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="grid h-9 w-9 place-content-center rounded-xl border bg-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </span>
                <h1 className="text-2xl font-semibold tracking-tight">{entry.title}</h1>
              </div>
              <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl">{entry.description}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {entry.category === "block" && <Badge variant="secondary">Block</Badge>}
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Tailwind</Badge>
            </div>
          </div>
          {doc && doc.deps.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/50">
              <span className="rounded-lg border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
                npm install {doc.deps.join(" ")}
              </span>
              <span className="rounded-lg border bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground">
                {entry.category}
              </span>
            </div>
          )}
        </div>

        {/* Preview */}
        {doc && (
          <section id="preview" className="scroll-mt-24 mb-8">
            <h2 className="text-lg font-semibold tracking-tight mb-3">Preview</h2>
            <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border bg-background p-8">
              {doc.element}
            </div>
            <details className="group mt-3 overflow-hidden rounded-xl border bg-foreground/[0.03] dark:bg-white/[0.03]">
              <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-xs font-medium text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-90"><polyline points="9 18 15 12 9 6"/></svg>
                View code
              </summary>
              <pre className="m-0 overflow-x-auto border-t border-border/50 p-4 text-sm text-foreground bg-foreground/[0.02] dark:bg-white/[0.02]"><code>{doc.code}</code></pre>
            </details>
          </section>
        )}

        {/* Installation */}
        {doc && (
          <section id="installation" className="scroll-mt-24 mb-8">
            <h2 className="text-lg font-semibold tracking-tight mb-3">Installation</h2>
            <p className="text-sm text-muted-foreground mb-3">{doc.install}</p>
            {doc.deps.length > 0 && (
              <pre className="overflow-x-auto rounded-xl border bg-foreground/[0.03] dark:bg-white/[0.03] p-4 text-sm text-foreground"><code>npm install {doc.deps.join(" ")}</code></pre>
            )}
            <p className="text-sm text-muted-foreground mt-3">Make sure you have the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">cn()</code> utility in your project:</p>
            <pre className="overflow-x-auto rounded-xl border bg-foreground/[0.03] dark:bg-white/[0.03] p-4 text-sm text-foreground mt-2"><code>{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</code></pre>
          </section>
        )}

        {/* Props */}
        {doc && doc.props.length > 0 && (
          <section id="props" className="scroll-mt-24 mb-8">
            <h2 className="text-lg font-semibold tracking-tight mb-3">Props</h2>
            <div className="overflow-x-auto rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-medium text-xs text-muted-foreground">Prop</th>
                    <th className="text-left py-3 px-4 font-medium text-xs text-muted-foreground">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-xs text-muted-foreground">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.props.map((prop) => (
                    <tr key={prop.name} className="border-b border-border/50 last:border-0">
                      <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">{prop.name}</code></td>
                      <td className="py-3 px-4 text-muted-foreground text-xs font-mono">{prop.type}</td>
                      <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">{prop.default}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Usage */}
        {doc && (
          <section id="usage" className="scroll-mt-24 mb-8">
            <h2 className="text-lg font-semibold tracking-tight mb-3">Usage</h2>
            <p className="text-sm text-muted-foreground mb-3">Here&apos;s how to use the component in your project:</p>
            <pre className="overflow-x-auto rounded-xl border bg-foreground/[0.03] dark:bg-white/[0.03] p-4 text-sm text-foreground"><code>{doc.code}</code></pre>
          </section>
        )}

        {/* Pagination */}
        <div className="mt-12">
          <ComponentPagination currentSlug={slug} />
        </div>

        {/* Footer */}
        <div className="mx-auto not-prose p-2 mt-10 rounded-md text-balance text-center text-sm text-muted-foreground">
          Built by zaid. The source code is available on{" "}
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            GitHub
          </Link>
          .
        </div>

        <GapPattern className="absolute -right-8 top-0 h-full w-[1px] border-x border-y-0 hidden lg:block opacity-50" />
      </div>

      <TableOfContents items={tocItems} />
    </div>
  )
}
