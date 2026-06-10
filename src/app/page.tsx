"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { ArrowRight, Blocks, Component, Star } from "lucide-react";

const reviews = [
  { name: "SoraiaDev", handle: "@SoraiaDev", body: "king of design" },
  {
    name: "Victor",
    handle: "@victor_bigfield",
    body: "love this minimalist style",
  },
  { name: "OrcDev", handle: "@orcdev", body: "let's go! new blood" },
  { name: "Kartik", handle: "@code_kartik", body: "this is really good man" },
  {
    name: "Daniele",
    handle: "@daniele_packard",
    body: "Looks very slick - congrats!",
  },
  { name: "Sayan", handle: "@thesayannayak", body: "This is really good !!" },
];

const projects = [
  {
    name: "Components",
    link: "/components",
    description: "Copy-paste UI primitives",
    darkGradient: "linear-gradient(125% 125% at 50% 10%, #000000 40%, #2784fd 100%)",
    lightGradient: "linear-gradient(125% 125% at 50% 10%, #ffffff 40%, #3d6aff 100%)",
  },
  {
    name: "Blocks",
    link: "/blocks",
    description: "Ready-to-use sections",
    darkGradient: "linear-gradient(125% 125% at 50% 10%, #000000 40%, #7c3aed 100%)",
    lightGradient: "linear-gradient(125% 125% at 50% 10%, #ffffff 40%, #8b5cf6 100%)",
  },
  {
    name: "Docs",
    link: "/docs",
    description: "Guides and references",
    darkGradient: "linear-gradient(125% 125% at 50% 10%, #000000 40%, #f59e0b 100%)",
    lightGradient: "linear-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)",
  },
];

const componentPreviews = [
  { name: "Animated Card", category: "Interactive" },
  { name: "Code Block", category: "Display" },
  { name: "Accordion", category: "Layout" },
  { name: "Badge", category: "Data Display" },
  { name: "Button", category: "Form" },
  { name: "Tabs", category: "Navigation" },
  { name: "Input", category: "Form" },
  { name: "Marquee", category: "Animation" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full px-2">
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
          {/* Decorative side columns */}
          <div className="border-x border-border w-5 bg-background h-full absolute top-0 left-0 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />
          <div className="border-x border-border w-5 bg-background h-full absolute top-0 right-0 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />

          {/* Hero */}
          <section className="relative pt-2">
            <div className="border-b border-border w-full h-16 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />

            <div className="relative z-10">
              {/* Background artwork behind hero content */}
              <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
                <div className="relative w-[900px] h-[450px] opacity-40">
                  <Image
                    src="https://assets.aceternity.com/components/mountains-snow.webp"
                    alt="mountains"
                    fill
                    priority
                    className="object-cover blur-[1px]"
                  />

                  {/* fade bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

                  {/* fade sides */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
                </div>
              </div>

              <article className="grid gap-4 p-5 2xl:p-10">
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    Open Source
                    <span className="text-muted-foreground/50">·</span>
                    <span>Free to use</span>
                  </span>
                </div>

                <h1 className="2xl:text-6xl xl:text-6xl md:text-6xl sm:text-5xl text-[1.7rem] tracking-tighter text-center font-semibold">
                  <span className="xl:text-[3.35rem] md:text-5xl sm:text-4xl text-[1.7rem]">
                    Copy, Paste UI Components,
                  </span>
                  <br />
                  <span>& Blocks for</span>
                  <span className="ml-2 bg-muted mt-3 relative w-fit leading-[100%] inline-block px-1.5 py-0.5 border border-border">
                    <span className="bg-linear-to-t from-blue-400 to-blue-600 bg-clip-text text-transparent font-semibold pr-1">
                      React
                    </span>
                  </span>
                </h1>

                <p className="mx-auto 2xl:w-[600px] lg:w-[450px] 2xl:text-lg sm:w-[80%] text-center sm:text-base text-sm text-muted-foreground">
                  Production-ready components you can drop into your projects.
                  No packages to install. Just copy the code and ship faster.
                </p>

                <div className="flex gap-3 justify-center items-center">
                  <Link
                    href="/components"
                    className="flex items-center gap-2 w-fit sm:text-base text-sm text-primary-foreground bg-gradient-to-b from-blue-500 to-blue-600 px-5 py-3 rounded-xl"
                  >
                    <Blocks className="w-5 h-5" /> Browse Components
                  </Link>
                  <Link
                    href="https://github.com/icancodefyi/impic-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-fit sm:text-base text-sm text-foreground px-5 py-3 rounded-xl border border-border bg-background"
                  >
                    <Component className="w-5 h-5" /> GitHub
                  </Link>
                </div>

                {/* Trust badge */}
                <div className="flex w-fit mx-auto sm:items-center justify-center mt-5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="bg-background p-1 shrink-0 relative z-10 hover:z-20"
                        style={{ marginLeft: i > 1 ? "-0.5rem" : 0 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="-translate-x-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      Trusted by developers
                    </div>
                  </div>
                </div>
              </article>

              {/* GapPattern */}
              <div className="border-y border-border w-full h-6 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />

              {/* Reviews Marquee */}
              <div className="relative py-10 px-5">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                  <Marquee pauseOnHover className="[--duration:80s]">
                    {reviews.map((review) => (
                      <div
                        key={review.name}
                        className="shrink-0 w-72 flex flex-col justify-center h-28 bg-card border border-border p-4 transition-all duration-300 hover:scale-105 mx-2 rounded-xl"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {review.name.charAt(0)}
                          </div>
                          <div className="ml-2 flex-1">
                            <div className="flex items-center gap-1">
                              <span className="font-semibold text-xs">
                                {review.name}
                              </span>
                              <Star className="w-2.5 h-2.5 text-blue-500 fill-current" />
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {review.handle}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {review.body}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
                </div>
              </div>

              {/* GapPattern */}
              <div className="border-y border-border w-full h-6 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />

              {/* Project Cards — uilayouts style */}
              <div className="grid grid-cols-3 relative">
                {projects.map((project, index) => (
                  <div key={project.name}>
                    <div
                      className={`relative ${index < projects.length - 1 ? "pr-5 lg:pr-7 2xl:pr-10" : "pr-0"}`}
                    >
                      {index < projects.length - 1 && (
                        <div className="absolute top-0 right-0 h-full w-5 lg:w-7 2xl:w-10 border-x border-border bg-background bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col relative items-center overflow-hidden justify-center bg-white dark:bg-black p-6 transition"
                      >
                        {/* Noise texture */}
                        <svg className="absolute top-0 left-0 z-2 w-full h-full mix-blend-multiply opacity-50" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <filter id={`noise-${index}`}>
                              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" />
                            </filter>
                          </defs>
                          <rect width="100%" height="100%" filter={`url(#noise-${index})`} />
                        </svg>

                        {/* Unique logo per card */}
                        <div className="mb-4 flex h-60 relative z-10 items-center justify-center">
                          {index === 0 && (
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="5" y="5" width="50" height="50" rx="8" className="fill-foreground dark:fill-white" />
                              <rect x="65" y="5" width="50" height="50" rx="8" className="fill-foreground/50 dark:fill-white/50" />
                              <rect x="5" y="65" width="50" height="50" rx="8" className="fill-foreground/50 dark:fill-white/50" />
                              <rect x="65" y="65" width="50" height="50" rx="8" className="fill-foreground/30 dark:fill-white/30" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="10" y="5" width="120" height="26" rx="6" className="fill-foreground dark:fill-white" />
                              <rect x="20" y="37" width="100" height="26" rx="6" className="fill-foreground/60 dark:fill-white/60" />
                              <rect x="30" y="69" width="80" height="26" rx="6" className="fill-foreground/35 dark:fill-white/35" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M60 10C45 10 30 18 20 30V85C30 73 45 65 60 65C75 65 90 73 100 85V30C90 18 75 10 60 10Z" className="fill-foreground dark:fill-white" />
                              <path d="M60 10C45 10 30 18 20 30V85C30 73 45 65 60 65" className="fill-foreground/60 dark:fill-white/60" />
                              <line x1="60" y1="10" x2="60" y2="65" className="stroke-foreground/20 dark:stroke-white/40" strokeWidth="2" />
                            </svg>
                          )}
                        </div>

                        {/* Grid pattern overlay */}
                        <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#2120202e_1px,transparent_1px),linear-gradient(to_bottom,#2120202e_1px,transparent_1px)] bg-[linear-gradient(to_right,#acacac2d_1px,transparent_1px),linear-gradient(to_bottom,#acacac2d_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                        {/* Theme-responsive gradient background */}
                        <div
                          className="absolute inset-0 z-0 mask-[radial-gradient(ellipse_115%_60%_at_50%_100%,#000_70%,transparent_110%)] dark:block hidden"
                          style={{ background: project.darkGradient }}
                        />
                        <div
                          className="absolute inset-0 z-0 mask-[radial-gradient(ellipse_115%_60%_at_50%_100%,#000_70%,transparent_110%)] dark:hidden block"
                          style={{ background: project.lightGradient }}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* GapPattern */}
              <div className="border-y border-border w-full h-6 bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)]" />
            </div>
          </section>

          {/* Components Showcase */}
          <section className="relative p-5">
            <h2 className="xl:text-5xl md:text-4xl text-2xl font-medium tracking-tighter text-center mb-10">
              Ready-to-Use Components
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {componentPreviews.map((component) => (
                <Link
                  key={component.name}
                  href="/components"
                  className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-md"
                >
                  <span className="absolute top-2 transition-all group-hover:opacity-100 opacity-0 text-xs px-2 py-0.5 bg-muted right-2 z-10 rounded-md">
                    Preview
                  </span>
                  <div className="p-5 min-h-[160px] flex flex-col justify-end">
                    <div className="text-sm font-medium text-foreground">
                      {component.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {component.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/components"
              className="flex w-fit mx-auto mt-8 text-sm py-2 px-4 bg-muted justify-center group font-medium items-center gap-2 rounded-lg border border-border"
            >
              Browse all{" "}
              <span className="text-muted-foreground">Components</span>
              <ArrowRight className="group-hover:translate-x-1 transition-all" />
            </Link>
          </section>

          {/* GapPattern */}
          <div className="border-y border-border w-full h-5 bg-[repeating-linear-gradient(135deg,hsl(var(--muted)/0.5)_0px_1px,transparent_1px_10px)]" />

          {/* Stats */}
          <section className="py-20 px-5">
            <div className="max-w-5xl mx-auto">
              <div className="md:flex justify-between items-center border-b border-border pb-10 mb-10">
                <div className="flex flex-col md:flex-row items-baseline gap-4">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-foreground">
                    50+
                  </span>
                  <div className="max-w-xs">
                    <h3 className="text-xl font-semibold tracking-tight">
                      Components
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Production-ready React components you can copy and paste.
                    </p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    React
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground mb-2">
                    0
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Dependencies
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground mb-2">
                    100%
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Free & Open Source
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground mb-2">
                    MIT
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    License
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA */}
      <section className="pt-20 bg-background">
        <div className="max-w-6xl mx-auto px-5">
          <div className="relative z-10 -mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden h-80 relative group shadow-2xl">
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-10 md:p-16">
                <h2 className="text-white text-4xl md:text-5xl font-bold max-w-xl mb-6">
                  Start building beautiful interfaces today
                </h2>
                <Link
                  href="/components"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full w-fit font-semibold hover:bg-blue-50 transition-colors group"
                >
                  Browse components
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-foreground rounded-t-3xl pt-32 pb-16 px-5 md:px-10 text-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pb-8">
              <div className="space-y-8">
                <div className="text-3xl font-bold tracking-tighter">
                  <span>impic</span>
                  <span className="text-blue-400">-ui</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Connect
                  </h4>
                  <a
                    href="https://github.com/icancodefyi/impic-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-full text-sm hover:bg-background hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="space-y-4 lg:text-right">
                <h3 className="text-lg font-medium text-muted-foreground">
                  Copy-paste UI components for React
                </h3>
                <p className="text-sm text-muted-foreground max-w-md lg:ml-auto">
                  Production-ready components you can drop into your projects.
                  No packages, no dependencies.
                </p>
              </div>
            </div>

            <nav className="border-t border-border py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-medium text-muted-foreground">
              <Link
                href="/components"
                className="hover:text-foreground transition-colors"
              >
                Components
              </Link>
              <Link
                href="/blocks"
                className="hover:text-foreground transition-colors"
              >
                Blocks
              </Link>
              <Link
                href="/docs"
                className="hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <a
                href="https://github.com/icancodefyi/impic-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </nav>

            <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="font-semibold text-lg">impic-ui</span>
              <span className="text-muted-foreground text-sm">
                © 2026 impic-ui. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
