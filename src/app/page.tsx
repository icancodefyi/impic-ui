import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex min-h-screen flex-col justify-center">
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Build beautiful UIs{" "}
          <span className="text-primary">at the speed of copy-paste</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Production-ready React components you can copy, paste, and own.
          Zero dependencies. Dark mode included. MIT licensed.
        </p>
        <div className="mt-10 flex gap-3">
          <Link href="/components">
            <Button size="lg">Browse Components</Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="lg">Documentation</Button>
          </Link>
        </div>
      </div>

      <div className="space-y-6 pb-24">
        {[
          {
            name: "Button",
            preview: (
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Default</Button>
                <Button size="sm" variant="outline">Outline</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
              </div>
            ),
          },
          {
            name: "Badge",
            preview: (
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>
            ),
          },
          {
            name: "Input",
            preview: (
              <div className="flex max-w-xs gap-2">
                <Input placeholder="Enter text..." />
                <Button size="sm">Submit</Button>
              </div>
            ),
          },
          {
            name: "Tabs",
            preview: (
              <div className="flex border-b gap-0">
                <span className="border-b-2 border-primary px-4 py-2 text-xs font-medium">Active</span>
                <span className="px-4 py-2 text-xs text-muted-foreground">Inactive</span>
                <span className="px-4 py-2 text-xs text-muted-foreground">Inactive</span>
              </div>
            ),
          },
          {
            name: "Card",
            preview: (
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="rounded border px-3 py-2">Header</span>
                <span className="rounded border px-3 py-2">Content</span>
                <span className="rounded border px-3 py-2">Footer</span>
              </div>
            ),
          },
          {
            name: "Accordion",
            preview: (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded border px-2 py-1">▸ Section 1</span>
                <span className="rounded border px-2 py-1">▸ Section 2</span>
              </div>
            ),
          },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-baseline gap-6 border-b border-border/30 pb-6"
          >
            <p className="min-w-20 text-sm font-medium">{item.name}</p>
            <div className="flex min-h-9 items-center">{item.preview}</div>
          </div>
        ))}
        <div className="pt-2">
          <Link
            href="/components"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View all 8 components &rarr;
          </Link>
        </div>
      </div>

      <div className="border-t py-24">
        <div className="max-w-2xl">
          <p className="text-muted-foreground leading-relaxed">
            Components should be simple to use and trivial to own.
            No build step, no registry, no package to maintain.
            Each one is a single file you can read, modify, and ship.
            MIT licensed, zero dependencies, dark mode included.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/components">
              <Button>Browse Components</Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline">Documentation</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t py-8 text-xs text-muted-foreground">
        <p>Built by zaid · MIT</p>
        <Link
          href="https://github.com/icancodefyi/impic-ui"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          GitHub &rarr;
        </Link>
      </div>
    </div>
  )
}
