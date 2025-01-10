"use client"

import { useState } from "react"
// import { Metadata } from "next"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"


// export const metadata: Metadata = {
//   title: "Analytics",
//   description: "Advanced analytics and reporting for your supermarket",
// }

export default function AnalyticsPage() {
  const [reportType, setReportType] = useState("sales")
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])

  const generateReport = () => {
    // Here you would generate the report based on the selected type and date range
    console.log("Generating report:", reportType, startDate, endDate)
    // For a real implementation, you might want to call an API endpoint here
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,560</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$75.50</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Custom Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales by Date</SelectItem>
                  <SelectItem value="product">Sales by Product</SelectItem>
                  <SelectItem value="category">Sales by Category</SelectItem>
                  <SelectItem value="promotion">Promotional Performance</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <Button onClick={generateReport}>Generate Report</Button>
            </div>
            <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
              Report visualization will be displayed here
            </div>
          </div>
        </CardContent>
      </Card>
      <AnalyticsDashboard />
    </div>
  )
}

