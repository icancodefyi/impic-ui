import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Get Started</h1>
      <p className="text-sm text-muted-foreground mt-2 mb-8 max-w-2xl">
        Welcome to impic-ui. Here&apos;s how to start using our components in your projects.
      </p>

      <div className="max-w-2xl space-y-8">
        <section className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold mb-3">Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            impic-ui is a copy-paste component library. No npm install required — just copy the component code into your project.
          </p>
          <div className="rounded-lg border bg-codebg p-4 mb-4">
            <p className="text-xs text-muted-foreground mb-2">Required dependencies:</p>
            <pre className="text-sm font-mono">npm install motion clsx tailwind-merge</pre>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            Add the <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">cn()</code> utility to your <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">lib/utils.ts</code>:
          </p>
          <div className="rounded-lg border bg-codebg p-4">
            <pre className="text-xs font-mono leading-relaxed">{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</pre>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold mb-3">Usage</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Browse the components, copy the code, and paste it into your project. Each component is fully typed and customizable with Tailwind CSS.
          </p>
          <div className="flex gap-3">
            <Link href="/components">
              <Button size="sm">Browse Components</Button>
            </Link>
            <Link href="/blocks">
              <Button variant="outline" size="sm">Browse Blocks</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
