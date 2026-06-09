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
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        ref={navRef}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between border transition-all duration-300",
          scrolled
            ? "glass rounded-full px-3 py-2 shadow-[0_12px_40px_hsl(var(--foreground)/0.08)]"
            : "rounded-full border-transparent bg-background/75 px-3 py-2 backdrop-blur-xl"
        )}
      >
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border bg-card text-[12px] font-semibold">
            i
          </span>
          <span className="text-sm font-semibold tracking-tight">impic-ui</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/components">Components</NavLink>
          <NavLink href="/blocks">Blocks</NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="grid h-8 w-8 place-items-center rounded-full border bg-card text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-8 w-8 place-items-center rounded-full border bg-card text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="glass absolute left-4 right-4 top-16 rounded-2xl p-3 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="/docs" onClick={() => setMobileOpen(false)}>Docs</MobileNavLink>
            <MobileNavLink href="/components" onClick={() => setMobileOpen(false)}>Components</MobileNavLink>
            <MobileNavLink href="/blocks" onClick={() => setMobileOpen(false)}>Blocks</MobileNavLink>
            <MobileNavLink href="https://github.com" onClick={() => setMobileOpen(false)}>GitHub</MobileNavLink>
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
      className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
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
      className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
    >
      {children}
    </Link>
  )
}
