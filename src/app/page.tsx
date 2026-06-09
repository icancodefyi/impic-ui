import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center px-4">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build beautiful UIs{" "}
              <span className="text-primary">at the speed of copy-paste</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg leading-relaxed">
              Production-ready components for your next project.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/components">
                <Button size="lg">Browse Components</Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg">Documentation</Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-xl border bg-codebg">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">install.sh</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed text-muted-foreground">
                <span className="text-primary">$</span> npx impic-ui add button<span className="animate-pulse text-primary">▊</span>
                {"\n"}
                <span className="text-green-400/80">✓</span> Installed button to <span className="text-muted-foreground/60">components/ui/button.tsx</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
            The components
          </p>
          <div className="mt-10 space-y-px">
            {[
              {
                name: "Button",
                preview: <div className="flex flex-wrap gap-2"><Button size="sm">Default</Button><Button size="sm" variant="outline">Outline</Button><Button size="sm" variant="secondary">Secondary</Button></div>,
                types: "4 variants · 4 sizes",
              },
              {
                name: "Badge",
                preview: <div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="outline">Outline</Badge><Badge variant="secondary">Secondary</Badge></div>,
                types: "3 variants",
              },
              {
                name: "Input",
                preview: <div className="flex max-w-xs gap-2"><Input placeholder="Enter text..." /><Button size="sm" variant="default">Submit</Button></div>,
                types: "With label, disabled, placeholder states",
              },
              {
                name: "Card",
                preview: <div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="outline">Outline</Badge></div>,
                types: "Content container with header and footer slots",
              },
              {
                name: "Tabs",
                preview: <div className="flex items-center gap-4"><div className="flex border-b"><span className="border-b-2 border-primary px-3 py-1.5 text-xs font-medium">Active</span><span className="px-3 py-1.5 text-xs text-muted-foreground">Inactive</span><span className="px-3 py-1.5 text-xs text-muted-foreground">Disabled</span></div></div>,
                types: "Interactive tab strip",
              },
              {
                name: "Accordion",
                preview: <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="rounded border px-2 py-1">▸ Section 1</span><span className="rounded border px-2 py-1">▸ Section 2</span></div>,
                types: "Collapsible content panels",
              },
            ].map((item, i) => (
              <div
                key={item.name}
                className="grid items-center gap-4 bg-background px-0 py-4 sm:grid-cols-[10rem_1fr_7rem] sm:gap-6"
              >
                <p className="text-[13px] font-medium leading-none">{item.name}</p>
                <div className="flex min-h-9 items-center">{item.preview}</div>
                <p className="hidden text-[10px] text-muted-foreground font-mono leading-none sm:block">
                  {item.types}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t pt-6">
            <Link
              href="/components"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wider uppercase"
            >
              View all 8 components &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
                Philosophy
              </p>
              <p className="mt-6 text-sm text-muted-foreground leading-[1.8] max-w-prose">
                Components should be simple to use and trivial to own.
                No build step. No registry. No package to maintain.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-[1.8] max-w-prose">
                Each component is a single file. Read it. Modify it. Ship it.
                The code is yours — MIT licensed, zero dependencies.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-[1.8] max-w-prose">
                Dark mode included. Accessible by default.
                Built with React and Tailwind CSS.
              </p>
            </div>
            <div className="border-l border-border/40 pl-8">
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
                One rule
              </p>
              <p className="mt-6 text-lg font-medium leading-relaxed text-foreground">
                If you can&apos;t read the source, you don&apos;t own the component.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                No minified code. No generated files. Every component is a plain
                TypeScript file you can open and understand in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
                Get started
              </p>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-prose">
                MIT licensed. Zero dependencies. Drop into any Next.js or React project.
              </p>
              <div className="mt-6">
                <Link href="/components">
                  <Button>Browse Components</Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-lg border bg-codebg p-4">
                <pre className="text-xs font-mono text-muted-foreground leading-relaxed">
                  <span className="text-muted-foreground/40"># Install a single component</span>
                  {"\n"}
                  <span className="text-primary">$</span> npx impic-ui add button
                  {"\n"}
                  <span className="text-muted-foreground/40"># Or add them all</span>
                  {"\n"}
                  <span className="text-primary">$</span> npx impic-ui add --all
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">
            Built by zaid · MIT
          </p>
          <Link
            href="https://github.com/icancodefyi/impic-ui"
            target="_blank"
            className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wider uppercase"
          >
            GitHub &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
