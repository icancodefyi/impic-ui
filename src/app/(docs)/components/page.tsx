import Link from "next/link"
import { componentsRegistry } from "@/lib/components-registry"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs } from "@/components/ui/tabs"
import { Accordion } from "@/components/ui/accordion"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedCard } from "@/components/ui/animated-card"

const miniPreviews: Record<string, React.ReactNode> = {
  button: (
    <div className="flex gap-2 items-center">
      <Button size="sm">Default</Button>
      <Button size="sm" variant="outline">Outline</Button>
    </div>
  ),
  card: (
    <Card className="w-full max-w-[180px]">
      <CardHeader className="p-3">
        <CardTitle className="text-xs">Card Title</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-primary" />
        </div>
      </CardContent>
    </Card>
  ),
  badge: (
    <div className="flex gap-1.5 items-center">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Tag</Badge>
    </div>
  ),
  input: (
    <div className="w-full max-w-[180px]">
      <Input placeholder="Email address" />
    </div>
  ),
  tabs: (
    <div className="w-full max-w-[200px]">
      <Tabs
        tabs={[
          { label: "Tab 1", content: <p className="text-[10px] text-muted-foreground">Content one</p> },
          { label: "Tab 2", content: <p className="text-[10px] text-muted-foreground">Content two</p> },
        ]}
      />
    </div>
  ),
  accordion: (
    <div className="w-full max-w-[200px]">
      <Accordion
        items={[
          { title: "Item one", content: "Description for item one." },
          { title: "Item two", content: "Description for item two." },
        ]}
      />
    </div>
  ),
  marquee: (
    <div className="w-full overflow-hidden">
      <Marquee className="py-1" repeat={2}>
        {["React", "Next.js", "Tailwind"].map((t) => (
          <span key={t} className="mx-3 text-[10px] font-medium text-muted-foreground">{t}</span>
        ))}
      </Marquee>
    </div>
  ),
  "animated-card": (
    <div className="w-full max-w-[220px]">
      <AnimatedCard
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>}
        title="Copy-Paste"
        description="Just copy and paste components."
        variant="default"
      />
    </div>
  ),
  "hero-section": (
    <div className="w-full text-center py-4">
      <div className="text-lg font-semibold tracking-tight">Hero Section</div>
      <div className="text-[10px] text-muted-foreground mt-1">Full-screen hero with gradient text</div>
    </div>
  ),
  "features-section": (
    <div className="w-full grid grid-cols-2 gap-2 p-2">
      {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((f) => (
        <div key={f} className="rounded-lg border bg-card p-2 text-center">
          <div className="text-[10px] font-medium">{f}</div>
        </div>
      ))}
    </div>
  ),
  "pricing-section": (
    <div className="w-full flex gap-2 justify-center">
      {["Free", "Pro", "Team"].map((p, i) => (
        <div key={p} className={`rounded-lg border p-2 text-center ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
          <div className="text-[10px] font-medium">{p}</div>
        </div>
      ))}
    </div>
  ),
}

export default function ComponentsPage() {
  const uiComponents = componentsRegistry.filter((c) => c.category === "ui")
  const blocks = componentsRegistry.filter((c) => c.category === "block")

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
          Beautifully designed components that you can copy and paste into your projects.
        </p>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">UI Components</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">{uiComponents.length}</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
        {uiComponents.map((component) => (
          <Link key={component.slug} href={`/components/${component.slug}`}>
            <div className="group rounded-xl border bg-card p-3 transition-all hover:border-muted-foreground/20 hover:shadow-sm">
              <div className="aspect-[16/9] rounded-lg bg-muted/50 mb-3 flex items-center justify-center group-hover:bg-accent/50 transition-colors overflow-hidden p-4">
                {miniPreviews[component.slug] || (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                )}
              </div>
              <h3 className="text-sm font-medium capitalize">{component.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{component.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Blocks</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">{blocks.length}</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((component) => (
          <Link key={component.slug} href={`/components/${component.slug}`}>
            <div className="group rounded-xl border bg-card p-3 transition-all hover:border-muted-foreground/20 hover:shadow-sm">
              <div className="aspect-[16/9] rounded-lg bg-muted/50 mb-3 flex items-center justify-center group-hover:bg-accent/50 transition-colors overflow-hidden p-4">
                {miniPreviews[component.slug] || (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>
                )}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium capitalize">{component.title}</h3>
                <Badge variant="secondary">Block</Badge>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{component.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
