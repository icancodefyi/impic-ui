import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            Open-source UI components
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Copy, paste, and build{" "}
            <span className="text-primary">beautiful UIs</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Production-ready components for your next project.
            Open-source, responsive, and ready to copy-paste.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link href="/components">
              <Button size="lg">Browse Components</Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="lg">View on GitHub</Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="border-t px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Components
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Every component ships with multiple variants.
              </p>
            </div>
            <Link
              href="/components"
              className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors sm:block"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/60 overflow-hidden">
              <CardContent className="flex flex-wrap items-center gap-2 p-5">
                <Badge>Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </CardContent>
              <div className="border-t border-border/60 px-5 py-2.5">
                <p className="text-xs font-medium">Badge</p>
                <p className="text-[10px] text-muted-foreground">
                  3 variants, compact design
                </p>
              </div>
            </Card>
            <Card className="border-border/60 overflow-hidden">
              <CardContent className="flex flex-wrap items-center gap-2 p-5">
                <Button size="sm" variant="default">Default</Button>
                <Button size="sm" variant="outline">Outline</Button>
                <Button size="sm" variant="ghost">Ghost</Button>
                <Button size="sm" variant="secondary" className="mr-0">Secondary</Button>
              </CardContent>
              <div className="border-t border-border/60 px-5 py-2.5">
                <p className="text-xs font-medium">Button</p>
                <p className="text-[10px] text-muted-foreground">
                  4 variants, 4 sizes, active states
                </p>
              </div>
            </Card>
            <Card className="border-border/60 overflow-hidden sm:col-span-2 lg:col-span-1">
              <CardContent className="space-y-2 p-5">
                <Input placeholder="Placeholder" />
                <Input placeholder="Disabled" disabled />
              </CardContent>
              <div className="border-t border-border/60 px-5 py-2.5">
                <p className="text-xs font-medium">Input</p>
                <p className="text-[10px] text-muted-foreground">
                  With label, placeholder, disabled states
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/components"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all components &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why copy-paste?
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              No build step. No lock-in. Just components you own.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border bg-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </div>
              <h3 className="mt-4 text-sm font-medium">Copy what you need</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[32ch] mx-auto">
                Pick any component and copy its source directly into your project.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border bg-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="mt-4 text-sm font-medium">Own every line</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[32ch] mx-auto">
                Modify the code however you want. No dependencies, no lock-in.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border bg-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
              </div>
              <h3 className="mt-4 text-sm font-medium">Ship without bloat</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[32ch] mx-auto">
                No runtime, no CSS-in-JS, no unnecessary abstractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to start building?
          </h2>
          <p className="mx-auto mt-1.5 max-w-lg text-sm text-muted-foreground">
            Browse the collection and copy the components you need.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/components">
              <Button size="lg">Browse Components</Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg">Documentation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
