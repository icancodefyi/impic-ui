"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav
        ref={navRef}
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled
            ? "bg-background/90 shadow-[0_10px_40px_hsl(var(--foreground)/0.05)]"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-foreground text-[13px] font-semibold text-background shadow-sm transition-transform group-hover:scale-[1.03]">
            i
          </span>
          <div className="leading-none">
            <span className="block text-[15px] font-semibold tracking-tight text-foreground">
              impic-ui
            </span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              component library
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <NavLink href="/components">Components</NavLink>
          <NavLink href="/blocks">Blocks</NavLink>
          <NavLink href="/docs">Templates</NavLink>
          <NavLink href="/components">Pricing</NavLink>
          <NavLink href="/docs">Changelog</NavLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-11 w-46 items-center justify-between rounded-full border border-border/70 bg-background px-4 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-muted/40 sm:flex"
            aria-label="Search"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </span>
            <span className="rounded-md border border-border/70 bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              ⌘ K
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>

          <button
            type="button"
            className="hidden h-11 w-11 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground sm:grid"
            aria-label="Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
          </button>

          <span className="hidden h-6 w-px bg-border/70 sm:block" />

          <Link
            href="/docs"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block"
          >
            Login
          </Link>

          <Link
            href="/components"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border/70 bg-foreground px-5 text-sm font-semibold text-background shadow-[0_12px_30px_hsl(var(--foreground)/0.16)] transition-transform hover:scale-[1.01]"
          >
            Get All-Access
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border/60 bg-background/95 px-4 pb-4 pt-2 shadow-[0_24px_60px_hsl(var(--foreground)/0.08)] backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <MobileNavLink href="/components" onClick={() => setMobileOpen(false)}>Components</MobileNavLink>
            <MobileNavLink href="/blocks" onClick={() => setMobileOpen(false)}>Blocks</MobileNavLink>
            <MobileNavLink href="/docs" onClick={() => setMobileOpen(false)}>Templates</MobileNavLink>
            <MobileNavLink href="/components" onClick={() => setMobileOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="/docs" onClick={() => setMobileOpen(false)}>Changelog</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
    >
      {children}
    </Link>
  )
}
