"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const initialOrders = [
  { id: 1, customer: "Alice Johnson", total: 150, status: "Pending", date: "2023-07-10" },
  { id: 2, customer: "Bob Smith", total: 200, status: "Shipped", date: "2023-07-09" },
  { id: 3, customer: "Charlie Brown", total: 100, status: "Delivered", date: "2023-07-08" },
]

export function OrderManagement() {
  const [orders] = useState(initialOrders)
  const [filter, setFilter] = useState("")

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(filter.toLowerCase()) ||
      order.status.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Filter orders..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "Delivered"
                      ? "default"
                      : order.status === "Shipped"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

