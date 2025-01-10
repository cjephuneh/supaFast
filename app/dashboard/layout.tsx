import { Sidebar } from "@/components/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/mode-toggle"
import { QuickActions } from "@/components/quick-actions"
import { Notifications } from "@/components/notifications"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center justify-between px-4">
          <h1 className="text-lg font-semibold">SuperFast Dashboard</h1>
          <div className="flex items-center space-x-4">
            <QuickActions />
            <Notifications />
            <ModeToggle />
          </div>
        </header>
        <ScrollArea className="flex-1">
          <main className="p-8">{children}</main>
        </ScrollArea>
      </div>
    </div>
  )
}

