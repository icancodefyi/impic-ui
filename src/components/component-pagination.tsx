import Link from "next/link"
import { componentsRegistry } from "@/lib/components-registry"

interface ComponentPaginationProps {
  currentSlug: string
}

export function ComponentPagination({ currentSlug }: ComponentPaginationProps) {
  const allItems = componentsRegistry.map((c) => ({
    href: `/components/${c.slug}`,
    name: c.title,
  }))

  const currentIndex = allItems.findIndex(
    (item) => item.href === `/components/${currentSlug}`
  )

  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null
  const next =
    currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null

  return (
    <div className="flex items-center justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 rounded-lg border p-3 transition-all hover:border-muted-foreground/20 hover:shadow-sm"
        >
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Previous
          </span>
          <span className="text-xs font-medium">{prev.name}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col gap-1 rounded-lg border p-3 text-right transition-all hover:border-muted-foreground/20 hover:shadow-sm"
        >
          <span className="text-[10px] text-muted-foreground flex items-center gap-1 justify-end">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
          <span className="text-xs font-medium">{next.name}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
