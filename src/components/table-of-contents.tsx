"use client"

import Link from "next/link"

type TocItem = {
  title: string
  url: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <aside className="sticky top-24 hidden h-fit w-60 shrink-0 lg:block">
      <div className="rounded-2xl border bg-card p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">On this page</p>
        <nav className="mt-4 space-y-2 text-sm">
          {items.map((item) => (
            <Link key={item.url} href={item.url} className="block text-muted-foreground transition-colors hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}