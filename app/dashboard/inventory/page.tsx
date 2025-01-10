"use client"

import { useState } from "react"
import { Metadata } from "next"
import { InventoryManagement } from "@/components/inventory-management"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Manage your supermarket inventory",
}

export default function InventoryPage() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a CSV file to upload.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the file to your backend
    // For demonstration, we'll just show a success message
    toast({
      title: "File uploaded",
      description: "Your inventory CSV has been successfully uploaded.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Inventory Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Inventory CSV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="inventory-csv">Inventory CSV</Label>
            <Input id="inventory-csv" type="file" accept=".csv" onChange={handleFileChange} />
          </div>
          <Button className="mt-4" onClick={handleUpload}>Upload CSV</Button>
        </CardContent>
      </Card>
      <InventoryManagement />
    </div>
  )
}

