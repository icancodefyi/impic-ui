import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16">
      <main className="relative">
        <div className="mx-auto w-full lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <div className="hidden lg:block lg:sticky top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto scrollbar-none">
            <div className="py-8">
              <DocsSidebar />
            </div>
          </div>
          <div className="min-w-0 max-w-full py-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
