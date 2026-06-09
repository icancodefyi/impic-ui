"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { groupedDocsNavigationCategories } from "@/lib/grouped-docs"

const basePath = [
  {
    href: "/docs",
    name: "Get Started",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    href: "/components",
    name: "Components",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
  },
  {
    href: "/blocks",
    name: "Blocks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>
    ),
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-full lg:block hidden">
      <div className="h-full w-full">
        <div className="h-[calc(100vh-6rem)] overflow-y-auto px-3 scrollbar-none">
          <ul className="pb-1 pt-12">
            {basePath.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex gap-2 group font-medium items-center py-1.5 transition-all",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "h-7 w-7 border transition-all rounded-md p-1",
                        isActive
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent group-hover:bg-accent"
                      )}
                    >
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="pb-16">
            {Object.entries(groupedDocsNavigationCategories).map(([group, items]) => (
              <div key={group} className="mt-6">
                <div className="relative flex w-full items-center justify-between pr-4 font-medium capitalize mb-1.5 text-xs text-muted-foreground tracking-wider">
                  {group}
                </div>
                <ul className="relative">
                  {items.map((item: { href: string; name: string; new?: boolean; updated?: boolean }) => {
                    const isActive = pathname === item.href
                    return (
                      <li
                        key={item.href}
                        className={cn(
                          "text-sm flex items-center gap-1 py-px pl-2 border-l transition-all",
                          isActive
                            ? "border-foreground text-foreground font-medium"
                            : "border-border text-muted-foreground hover:border-foreground/60 hover:text-foreground"
                        )}
                      >
                        <Link href={item.href} className="flex-1 py-1">
                          {item.name}
                        </Link>
                        {item.updated && (
                          <span className="text-[10px] italic text-muted-foreground">(Updated)</span>
                        )}
                        {item.new && (
                          <span className="text-[10px] text-muted-foreground">(New)</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
