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
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>} title="Copy-Paste" description="Just copy and paste components into your project." variant="default" />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>} title="Animations" description="Smooth animations powered by Framer Motion." variant="muted" />
        <AnimatedCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>} title="Dark Mode" description="Dark mode support built into every component." variant="strong" />
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

  const preview = componentPreviews[slug]
  const tocItems = getTocItems()

  return (
    <div className="lg:px-0 lg:pt-0 pt-6 px-3 mt-0 flex w-full lg:gap-10">
      <div className="w-full relative xl:pl-0 lg:pl-4 pl-0">
        <section className="3xl:max-w-5xl 2xl:max-w-[900px] xl:max-w-[800px] lg:max-w-[640px] max-w-5xl mx-auto prose prose-zinc pb-5 dark:prose-invert prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h2:mt-10 prose-h2:mb-3 prose-h3:mt-6 prose-h3:mb-2 prose-p:text-sm prose-p:leading-7 prose-p:text-muted-foreground prose-code:text-sm prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-code:font-normal prose-strong:font-medium prose-a:text-foreground prose-table:text-sm lg:pt-4">
          <article className="not-prose mb-8 mt-0 overflow-hidden rounded-2xl border bg-card p-5">
            <div className="space-y-4 rounded-md">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h1 className="flex scroll-m-20 items-center gap-3 text-3xl font-semibold tracking-tight">
                  <span className="grid h-10 w-10 place-content-center rounded-xl border bg-background">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  </span>
                  {entry.title}
                </h1>
                <div className="flex items-center gap-2">
                  {entry.category === "block" && <Badge variant="secondary">Block</Badge>}
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{entry.description}</p>
              <div className="flex flex-wrap gap-2 border-t pt-4">
                <span className="rounded-lg border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  npm install motion clsx tailwind-merge
                </span>
                <span className="rounded-lg border bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  {entry.category}
                </span>
              </div>
            </div>
          </article>

          {preview && (
            <section id="preview" className="scroll-mt-24">
              <h2>Preview</h2>
              <div className="not-prose lab-grid flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border bg-background p-8">
                {preview.element}
              </div>
              <div className="not-prose mt-4">
                <details className="group overflow-hidden rounded-xl border bg-codebg text-white">
                  <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-xs font-medium text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-90"><polyline points="9 18 15 12 9 6"/></svg>
                    View code
                  </summary>
                  <pre className="m-0 overflow-x-auto border-t border-white/10 p-4 text-sm text-white/86"><code>{preview.code}</code></pre>
                </details>
              </div>
            </section>
          )}

          <section id="installation" className="scroll-mt-24">
            <h2>Installation</h2>
            <p>Copy the component code into your project. Make sure you have the required dependencies:</p>
            <pre className="not-prose overflow-x-auto rounded-xl border bg-codebg p-4 text-sm text-white"><code>npm install motion clsx tailwind-merge</code></pre>
            <p>Ensure you have the <code>cn()</code> utility in your <code>lib/utils.ts</code>:</p>
            <pre className="not-prose overflow-x-auto rounded-xl border bg-codebg p-4 text-sm text-white"><code>{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</code></pre>
          </section>

          <section id="props" className="scroll-mt-24">
            <h2>Props</h2>
            <div className="not-prose overflow-x-auto rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/70">
                    <th className="text-left py-2.5 px-4 font-medium">Prop</th>
                    <th className="text-left py-2.5 px-4 font-medium">Type</th>
                    <th className="text-left py-2.5 px-4 font-medium">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2.5 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">variant</code></td>
                    <td className="py-2.5 px-4 text-muted-foreground text-xs"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">&quot;default&quot; | &quot;outline&quot; | &quot;ghost&quot; | &quot;secondary&quot;</code></td>
                    <td className="py-2.5 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">&quot;default&quot;</code></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2.5 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">size</code></td>
                    <td className="py-2.5 px-4 text-muted-foreground text-xs"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;icon&quot;</code></td>
                    <td className="py-2.5 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">&quot;md&quot;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="usage" className="scroll-mt-24">
            <h2>Usage</h2>
            <p>Here&apos;s how to use the component in your project:</p>
            {preview && (
              <pre className="not-prose overflow-x-auto rounded-xl border bg-codebg p-4 text-sm text-white"><code>{preview.code}</code></pre>
            )}
          </section>
        </section>

        <ComponentPagination currentSlug={slug} />

        <div className="max-w-5xl mx-auto not-prose xl:pb-2 p-2 mt-10 rounded-md text-balance text-center text-sm text-muted-foreground">
          Built by zaid. The source code is available on{" "}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            GitHub
          </a>
          .
        </div>

        <GapPattern className="absolute -right-8 top-0 h-full w-[1px] border-x border-y-0 hidden lg:block opacity-50" />
      </div>

      <TableOfContents items={tocItems} />
    </div>
  )
}
