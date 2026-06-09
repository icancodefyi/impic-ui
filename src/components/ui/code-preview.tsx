"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface CodePreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function CodePreview({ children, code, className }: CodePreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border bg-card", className)}>
      <div className="flex items-center justify-between border-b bg-card/70 px-3">
        <div className="flex gap-0">
          <button
            onClick={() => setTab("preview")}
            className={cn(
              "border-b-2 px-3 py-2 text-xs font-semibold transition-colors",
              tab === "preview"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={cn(
              "border-b-2 px-3 py-2 text-xs font-semibold transition-colors",
              tab === "code"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
        </div>
        {tab === "code" && (
          <button
            onClick={handleCopy}
            className="rounded-md border bg-card px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      <div className="relative">
        {tab === "preview" ? (
          <div className="lab-grid flex min-h-[240px] items-center justify-center bg-background p-8">
            {children}
          </div>
        ) : (
          <pre className="overflow-x-auto bg-codebg p-4 text-xs leading-relaxed text-white/90">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
