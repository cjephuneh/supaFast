import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { PageTransition } from '@/components/page-transition'
import { DollarSign, Users, CreditCard, Activity, TrendingUp, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Main dashboard for SupaFast management system",
}

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button>
            <TrendingUp className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Product A
                    </p>
                    <p className="text-sm text-muted-foreground">
                      1,234 units sold
                    </p>
                  </div>
                  <div className="ml-auto font-medium">$12,345</div>
                </div>
                <div className="flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Product B
                    </p>
                    <p className="text-sm text-muted-foreground">
                      987 units sold
                    </p>
                  </div>
                  <div className="ml-auto font-medium">$9,876</div>
                </div>
                <div className="flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Product C
                    </p>
                    <p className="text-sm text-muted-foreground">
                      654 units sold
                    </p>
                  </div>
                  <div className="ml-auto font-medium">$6,543</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium leading-none">
                    Product A
                  </p>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    75% in stock
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium leading-none">
                    Product B
                  </p>
                  <Progress value={50} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    50% in stock
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium leading-none">
                    Product C
                  </p>
                  <Progress value={25} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    25% in stock
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-5xl font-bold">4.8</div>
                <p className="text-sm text-muted-foreground">
                  Average rating out of 5
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-6 w-6 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on 1,234 reviews
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}

