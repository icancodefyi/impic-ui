import React from 'react'
import { ArrowRight, Blocks, Component, ExternalLink } from 'lucide-react'

const features = [
  {
    icon: Blocks,
    title: 'Copy & Paste',
    desc: 'Grab any component, drop it in your project. No packages, no dependencies, no bloat.',
  },
  {
    icon: Component,
    title: 'Built for React',
    desc: 'Every component is crafted with React and Tailwind CSS. Works with Next.js out of the box.',
  },
]

const stats = [
  { value: '50+', label: 'Components' },
  { value: '0', label: 'Dependencies' },
  { value: '100%', label: 'Free & Open' },
]

const components = [
  'Hero Sections',
  'Feature Cards',
  'Pricing Tables',
  'Testimonials',
  'CTA Sections',
  'Navigation Bars',
  'Footer Layouts',
  'Auth Forms',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-1.5 text-sm text-zinc-600 mb-8">
            <span className="size-2 bg-green-500 rounded-full animate-pulse" />
            Open Source
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-zinc-950 leading-[1.1] mb-6">
            Copy, Paste UI
            <br />
            Components
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10">
            Production-ready React components you can drop into your projects. 
            No packages to install. Just copy the code and ship faster.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="/components"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
            >
              <Component className="size-5" />
              Browse Components
            </a>
            <a
              href="https://github.com/icancodefyi/impic-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-200 px-6 py-3 rounded-xl font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              GitHub
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid pattern section */}
      <section className="relative border-t border-zinc-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative max-w-7xl mx-auto px-5 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <f.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-zinc-500 text-sm max-w-xs">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-5xl md:text-6xl font-medium tracking-tighter text-zinc-950 mb-2">
                  {s.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components list */}
      <section className="border-t border-zinc-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-950 mb-4">
              What You Get
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              A growing library of production-ready components, all free and open source.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {components.map((c) => (
              <div
                key={c}
                className="bg-white rounded-2xl p-6 border border-zinc-200 text-center font-medium text-zinc-700 hover:border-zinc-300 transition-colors"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-950 mb-6">
            Start Building Today
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto mb-10">
            No sign-up required. Just browse, copy, and paste into your project.
          </p>
          <a
            href="/components"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Components
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xl font-semibold tracking-tight">impic-ui</span>
              <p className="text-zinc-500 text-sm mt-2">
                Copy-paste UI components for React.
              </p>
            </div>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://github.com/icancodefyi/impic-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-zinc-950 transition-colors"
              >
                GitHub
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
            © 2026 impic-ui. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
