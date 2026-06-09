import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    title: "Quiet hierarchy",
    description:
      "Strong type, clear spacing, and surfaces that let the content lead.",
  },
  {
    title: "Purposeful motion",
    description:
      "Only the smallest transitions, used to clarify structure rather than decorate it.",
  },
  {
    title: "Clean surfaces",
    description:
      "Neutral backgrounds, soft borders, and depth that feels physical instead of synthetic.",
  },
  {
    title: "Library-wide consistency",
    description:
      "The homepage, docs, and blocks all speak the same visual language.",
  },
]

const logos = ["Vercel", "Linear", "Notion", "Stripe", "Airtable", "Tailscale"]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(var(--foreground)/0.045),transparent_28%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.08))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-size-[5rem_5rem] mask-[radial-gradient(ellipse_at_center,black,transparent_72%)] opacity-25" />

      <section className="px-4 pb-20 pt-28 sm:px-6 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              New visual system, tuned for clarity and restraint
            </div>

            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              Landing pages and blocks that feel editorial, not generated.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              Impic UI is being reworked into a calmer component library with
              stronger hierarchy, better spacing, and a visual language that
              feels like a senior designer shaped the whole system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/components">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore components
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Read docs
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["08", "blocks"],
                ["12+", "ui primitives"],
                ["100%", "copy-paste"],
                ["MIT", "licensed"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 shadow-sm">
                  <div className="text-2xl font-semibold tracking-tight">{value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-foreground/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-border/70 bg-card/90 shadow-[0_24px_90px_hsl(var(--foreground)/0.08)]">
              <div className="flex items-center justify-between border-b border-border/70 bg-background/90 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex h-3 w-3 rounded-full bg-red-500" />
                  <span className="flex h-3 w-3 rounded-full bg-amber-400" />
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-3 text-muted-foreground">Aceternity-inspired preview</span>
                </div>
                <div className="hidden text-xs text-muted-foreground sm:block">
                  homepage / visual system
                </div>
              </div>

              <div className="grid gap-px bg-border/70 md:grid-cols-[1fr_0.9fr]">
                <div className="bg-background p-6 sm:p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">
                      live preview
                    </Badge>
                    <span className="text-xs text-muted-foreground">clean, measured, calm</span>
                  </div>

                  <div className="max-w-md">
                    <div className="h-2.5 w-28 rounded-full bg-foreground/10" />
                    <div className="mt-4 h-10 w-full rounded-2xl border border-border/70 bg-card" />
                    <div className="mt-3 h-10 w-11/12 rounded-2xl border border-border/70 bg-card" />
                    <div className="mt-5 space-y-2.5">
                      <div className="h-2.5 w-full rounded-full bg-foreground/10" />
                      <div className="h-2.5 w-[80%] rounded-full bg-foreground/10" />
                      <div className="h-2.5 w-[64%] rounded-full bg-foreground/10" />
                    </div>
                    <div className="mt-7 flex gap-2">
                      <div className="h-10 w-32 rounded-full bg-foreground" />
                      <div className="h-10 w-28 rounded-full border border-border/70 bg-background" />
                    </div>
                  </div>
                </div>

                <div className="bg-[linear-gradient(180deg,hsl(var(--muted)/0.1),hsl(var(--background)))] p-5 sm:p-6">
                  <div className="grid gap-3">
                    {logos.map((logo, index) => (
                      <div
                        key={logo}
                        className="flex items-center justify-between rounded-2xl border border-border/70 bg-card px-4 py-4 transition-transform hover:-translate-y-0.5"
                      >
                        <div>
                          <div className="text-sm font-medium">{logo}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            trusted layout reference
                          </div>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          0{index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl border-t border-border/70 pt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">
              Design intent
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Calm, premium, and easier to trust.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              The goal is not to impress with gradients or motion everywhere.
              It is to create a component library that looks confident,
              readable, and intentionally designed from top to bottom.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border/70 bg-card/80 shadow-none transition-transform hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="h-1.5 w-10 rounded-full bg-foreground/10" />
                  <h3 className="mt-5 text-sm font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-border/70 bg-background px-6 py-10 shadow-[0_12px_40px_hsl(var(--foreground)/0.05)] sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">
                Next step
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Carry this language through docs, component pages, and blocks.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Once the landing page feels right, the rest of the product needs
                to match it exactly so the whole library feels coherent.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/components">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse components
                </Button>
              </Link>
              <Link href="/blocks">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse blocks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
