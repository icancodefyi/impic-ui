"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Search, Sun, Moon, Menu, X, Layers, LayoutGrid, BookOpen } from "lucide-react"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
              <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1" />
              <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
              <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
              <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.3" />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              impic-ui
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink href="/components" icon={<Layers className="size-3.5" />}>Components</NavLink>
          <NavLink href="/blocks" icon={<LayoutGrid className="size-3.5" />}>Blocks</NavLink>
          <NavLink href="/docs" icon={<BookOpen className="size-3.5" />}>Docs</NavLink>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="Search"
          >
            <Search className="size-4" />
          </button>

          <a
            href="https://github.com/icancodefyi/impic-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>

          <Link
            href="/components"
            className="ml-1 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get Pro
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            <MobileNavLink href="/components" icon={<Layers className="size-4" />} onClick={() => setMobileOpen(false)}>Components</MobileNavLink>
            <MobileNavLink href="/blocks" icon={<LayoutGrid className="size-4" />} onClick={() => setMobileOpen(false)}>Blocks</MobileNavLink>
            <MobileNavLink href="/docs" icon={<BookOpen className="size-4" />} onClick={() => setMobileOpen(false)}>Docs</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-border hover:bg-muted hover:text-foreground hover:shadow-sm"
    >
      <span className="flex items-center justify-center size-5 rounded-md bg-background/80 border border-border/50 text-muted-foreground transition-all duration-200 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
        {icon}
      </span>
      {children}
    </Link>
  )
}

function MobileNavLink({ href, icon, onClick, children }: { href: string; icon: React.ReactNode; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-border"
    >
      <span className="flex items-center justify-center size-8 rounded-lg bg-muted border border-border/50 text-muted-foreground">
        {icon}
      </span>
      {children}
    </Link>
  )
}
