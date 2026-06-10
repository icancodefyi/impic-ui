"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
            animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 left-1/2 h-[300px] w-[300px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex min-h-screen flex-col justify-center pb-24 pt-32">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Open source · MIT · v0.1.0
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]"
                >
                  Build beautiful UIs{" "}
                  <span className="text-primary">at the speed of copy-paste</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed"
                >
                  Production-ready components you can copy, modify, and ship.
                  Zero dependencies. Dark mode included.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <Link href="/components">
                    <Button size="lg" className="shadow-lg shadow-primary/20">
                      Browse Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="outline" size="lg" className="border-2">
                      Documentation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10 flex items-center gap-4"
                >
                  <div className="flex -space-x-3">
                    {["AB", "CD", "EF", "GH"].map((initials, i) => (
                      <div
                        key={initials}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-50 to-blue-100 text-[10px] font-semibold text-blue-600 shadow-sm"
                        style={{ zIndex: 4 - i }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">2,400+</span> developers
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-2xl" />
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-5 py-3.5">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                      </div>
                      <div className="mx-auto rounded-md bg-muted/80 px-4 py-1 text-[11px] text-muted-foreground font-mono">
                        impic-ui / button.tsx
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] divide-x divide-border">
                      <div className="bg-muted/20 p-5">
                        <pre className="text-xs font-mono leading-relaxed text-muted-foreground">
                          <span className="text-blue-500">import</span>{" "}
                          <span>{'{'} Button {'}'}</span>{" "}
                          <span className="text-blue-500">from</span>{" "}
                          <span className="text-emerald-600">"impic-ui"</span>
                          {"\n\n"}
                          <span className="text-blue-500">export default function</span>{" "}
                          <span className="text-amber-600">Page</span>() {"{"}
                          {"\n"}
                          <span className="text-blue-500">  return</span> (
                          {"\n"}
                          <span className="text-muted-foreground/50">    {'<'}div className="flex gap-2"{' >'}</span>
                          {"\n"}
                          <span className="text-primary/80">      {'<'}Button{' >'}</span>Get Started<span className="text-primary/80">{'<'}/Button{' >'}</span>
                          {"\n"}
                          <span className="text-primary/80">      {'<'}Button variant="outline"{' >'}</span>Learn More<span className="text-primary/80">{'<'}/Button{' >'}</span>
                          {"\n"}
                          <span className="text-muted-foreground/50">    {'<'}/div{' >'}</span>
                          {"\n"}
                          <span className="text-foreground/70">  )</span>
                          {"\n"}
                          {"}"}
                        </pre>
                      </div>
                      <div className="flex items-center justify-center p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <Button size="sm">Default</Button>
                          <Button size="sm" variant="outline">Outline</Button>
                          <Button size="sm" variant="secondary">Ghost</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">Components</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to build UIs
              </h2>
            </div>
            <Link
              href="/components"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors sm:flex"
            >
              View all 8 components
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Button",
                desc: "4 variants · 4 sizes",
                preview: (
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Default</Button>
                    <Button size="sm" variant="outline">Outline</Button>
                    <Button size="sm" variant="secondary">Ghost</Button>
                  </div>
                ),
              },
              {
                name: "Badge",
                desc: "3 variants",
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
                desc: "With label, disabled, placeholder",
                preview: (
                  <div className="flex w-full gap-2">
                    <Input placeholder="Enter text..." className="h-8 text-xs" />
                    <Button size="sm">Go</Button>
                  </div>
                ),
              },
              {
                name: "Card",
                desc: "Container with header, content, footer",
                preview: (
                  <div className="flex w-full flex-col gap-1.5 rounded-lg border p-3 text-xs">
                    <div className="font-medium">Card Header</div>
                    <div className="text-muted-foreground">Card content goes here</div>
                  </div>
                ),
              },
              {
                name: "Tabs",
                desc: "Interactive tab strip",
                preview: (
                  <div className="flex w-full border-b">
                    <span className="border-b-2 border-primary px-4 py-2 text-xs font-medium">Active</span>
                    <span className="px-4 py-2 text-xs text-muted-foreground">Tab 2</span>
                    <span className="px-4 py-2 text-xs text-muted-foreground">Tab 3</span>
                  </div>
                ),
              },
              {
                name: "Accordion",
                desc: "Collapsible content panels",
                preview: (
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium">
                      <span className="text-muted-foreground">▸</span> Section 1
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs text-muted-foreground">
                      <span className="text-muted-foreground">▸</span> Section 2
                    </div>
                  </div>
                ),
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group rounded-xl border border-border bg-white p-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex min-h-[56px] items-center">{item.preview}</div>
                <div className="mt-4 border-t border-border/50 pt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/components"
            className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-white py-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground sm:hidden"
          >
            View all 8 components
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">Philosophy</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Copy. Paste. Own.
              </h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Components should be simple to use and trivial to own.
                  No build step, no registry, no package to maintain.
                </p>
                <p>
                  Each component is a single file. Read it. Modify it. Ship it.
                  The code is yours — MIT licensed, zero dependencies.
                </p>
                <p>
                  Built with React and Tailwind CSS. Dark mode included.
                  Accessible by default. No lock-in.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/docs">
                  <Button variant="outline" className="border-2">
                    Read the docs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-white p-6">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase">One rule</p>
                <p className="mt-3 text-lg font-semibold leading-relaxed">
                  If you can&apos;t read the source, you don&apos;t own the component.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  No minified code. No generated files. Every component is a plain
                  TypeScript file you can open and understand in seconds.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase">Quick start</p>
                <div className="mt-3 rounded-lg bg-muted/50 p-4">
                  <pre className="text-sm font-mono text-muted-foreground">
                    <span className="text-primary">$</span> npx impic-ui add button<span className="animate-pulse"> ▊</span>
                  </pre>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  That&apos;s it. One command, one component, zero setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Start building today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              MIT licensed. Zero dependencies. Drop into any Next.js or React project.
              8 components and growing.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/components">
                <Button
                  size="lg"
                  className="bg-white text-primary shadow-xl shadow-primary/30 hover:bg-white/90"
                >
                  Browse Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/icancodefyi/impic-ui" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-xs text-muted-foreground">
            Built by zaid · MIT
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/components"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </Link>
            <Link
              href="/docs"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/icancodefyi/impic-ui"
              target="_blank"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
