"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4">
        <div className="from-primary/20 via-background to-background pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="from-primary/15 pointer-events-none absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />
        <div className="from-primary/10 pointer-events-none absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full blur-[100px]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-[11px] font-mono tracking-wider text-muted-foreground/80 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              v0.1.0 · MIT
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build beautiful UIs{" "}
              <span className="text-primary">at the speed of copy-paste</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-lg text-base text-muted-foreground/80 sm:text-lg leading-relaxed"
            >
              Production-ready components you can copy, modify, and ship. Zero
              dependencies. Dark mode included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex gap-3"
            >
              <Link href="/components">
                <Button size="lg">
                  Browse Components
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-1.5 h-4 w-4" />
                  Documentation
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="overflow-hidden rounded-xl border border-border/60 bg-codebg shadow-2xl shadow-primary/10">
              <div className="flex items-center border-b border-border/60">
                <div className="flex items-center gap-1.5 border-r border-border/60 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex">
                  <span className="relative border-r border-border/60 px-4 py-3 text-[11px] font-mono text-foreground/80">
                    button.tsx
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
                  </span>
                  <span className="px-4 py-3 text-[11px] font-mono text-muted-foreground/60">
                    page.tsx
                  </span>
                  <span className="px-4 py-3 text-[11px] font-mono text-muted-foreground/60">
                    styles.css
                  </span>
                </div>
              </div>
              <div className="grid min-h-[240px] grid-cols-[1fr_1fr]">
                <div className="border-r border-border/60 p-5">
                  <pre className="text-[11px] font-mono leading-[1.8] text-muted-foreground/80">
                    <span className="text-blue-400/90">import</span>{" "}
                    <span className="text-foreground/70">{'{'} Button {'}'}</span>{" "}
                    <span className="text-blue-400/90">from</span>{" "}
                    <span className="text-green-400/80">"impic-ui"</span>
                    {"\n"}
                    <span className="text-blue-400/90">import</span>{" "}
                    <span className="text-foreground/70">{'{'}</span>{" "}
                    <span className="text-yellow-400/80">Card</span>
                    <span className="text-foreground/70">{', '}</span>{" "}
                    <span className="text-yellow-400/80">Badge</span>{" "}
                    <span className="text-foreground/70">{'}'}</span>{" "}
                    <span className="text-blue-400/90">from</span>{" "}
                    <span className="text-green-400/80">"impic-ui"</span>
                    {"\n\n"}
                    <span className="text-blue-400/90">export default</span>{" "}
                    <span className="text-blue-400/90">function</span>{" "}
                    <span className="text-yellow-400/80">Page</span>(){" "}
                    <span className="text-foreground/70">{'{'}</span>
                    {"\n"}
                    <span className="text-blue-400/90">  return</span>{" "}
                    <span className="text-foreground/70">(</span>
                    {"\n"}
                    <span className="text-muted-foreground/40">    {'<'}div{'>'}</span>
                    {"\n"}
                    <span className="text-primary/90">      {'<'}Button{' >'}</span>
                    <span className="text-muted-foreground/70">Get Started</span>
                    <span className="text-primary/90">{'</'}Button{' >'}</span>
                    {"\n"}
                    <span className="text-muted-foreground/40">    {'<'}div{'>'}</span>
                    {"\n"}
                    <span className="text-foreground/70">  )</span>
                    {"\n"}
                    <span className="text-foreground/70">{'}'}</span>
                  </pre>
                </div>
                <div className="flex items-center justify-center bg-background/30 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm">Button</Button>
                    <Button size="sm" variant="outline">
                      Outline
                    </Button>
                    <Button size="sm" variant="secondary">
                      Ghost
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t"
        />
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
                preview: <div className="flex max-w-xs gap-2"><Input placeholder="Enter text..." /><Button size="sm">Submit</Button></div>,
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
