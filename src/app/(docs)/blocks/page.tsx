import Link from "next/link"
import { componentsRegistry } from "@/lib/components-registry"
import { Badge } from "@/components/ui/badge"

export default function BlocksPage() {
  const blocks = componentsRegistry.filter((c) => c.category === "block")

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blocks</h1>
      <p className="text-sm text-muted-foreground mt-2 mb-8 max-w-2xl">
        Pre-built sections and layouts that you can copy and paste into your projects.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((component) => (
          <Link key={component.slug} href={`/components/${component.slug}`}>
            <div className="group rounded-xl border bg-card p-3 transition-all hover:border-muted-foreground/20 hover:shadow-sm">
              <div className="aspect-[16/9] rounded-lg bg-muted/50 mb-3 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>
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
