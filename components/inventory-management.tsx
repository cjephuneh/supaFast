"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for inventory items
const initialInventory = [
  { id: 1, name: "Apples", quantity: 100, price: 0.5, expiryDate: "2023-12-31" },
  { id: 2, name: "Milk", quantity: 50, price: 2.5, expiryDate: "2023-07-15" },
  { id: 3, name: "Bread", quantity: 30, price: 1.5, expiryDate: "2023-07-10" },
]

export function InventoryManagement() {
  const [inventory, setInventory] = useState(initialInventory)
  const [newItem, setNewItem] = useState({ name: "", quantity: 0, price: 0, expiryDate: "" })

  const addItem = () => {
    setInventory([...inventory, { id: inventory.length + 1, ...newItem }])
    setNewItem({ name: "", quantity: 0, price: 0, expiryDate: "" })
  }

  const deleteItem = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
        />
        <Input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        />
        <Input
          type="date"
          placeholder="Expiry Date"
          value={newItem.expiryDate}
          onChange={(e) => setNewItem({ ...newItem, expiryDate: e.target.value })}
        />
        <Button onClick={addItem}>Add Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.quantity}
                {item.quantity < 10 && (
                  <Badge variant="destructive" className="ml-2">
                    Low Stock
                  </Badge>
                )}
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.expiryDate}</TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

