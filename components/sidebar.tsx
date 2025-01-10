"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Box, Home, LayoutDashboard, Package, Settings, ShoppingCart, Users, LogOut, CreditCard } from 'lucide-react'
import { useAuth } from "@/components/auth-provider"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
  { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
  { icon: Users, label: "Customers", href: "/dashboard/customers" },
  { icon: BarChart, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Box, label: "Products", href: "/dashboard/products" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>SupaFast</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start gap-2" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

