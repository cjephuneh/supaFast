"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

// Mock data for customer insights
const customerData = [
  { id: 1, name: "Alice Johnson", totalPurchases: 1500, lastPurchase: "2023-07-01", loyaltyPoints: 750 },
  { id: 2, name: "Bob Smith", totalPurchases: 2200, lastPurchase: "2023-07-05", loyaltyPoints: 1100 },
  { id: 3, name: "Charlie Brown", totalPurchases: 800, lastPurchase: "2023-06-28", loyaltyPoints: 400 },
]

export function CustomerInsights() {
  const [customers] = useState(customerData)

  const sendPersonalizedOffer = (customerId: number) => {
    // Implement logic to send personalized offer
    console.log(`Sending personalized offer to customer ${customerId}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Total Purchases</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Loyalty Points</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>${customer.totalPurchases}</TableCell>
                <TableCell>{customer.lastPurchase}</TableCell>
                <TableCell>{customer.loyaltyPoints}</TableCell>
                <TableCell>
                  <Button onClick={() => sendPersonalizedOffer(customer.id)}>
                    Send Offer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

