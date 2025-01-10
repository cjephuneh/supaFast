"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function QuickActions() {
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState('')

  const handleAction = () => {
    // Implement the action here
    console.log(`Performing action: ${action}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Quick Actions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Quick Action</DialogTitle>
          <DialogDescription>
            Perform a quick action on your supermarket dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="action" className="text-right">
              Action
            </Label>
            <Input
              id="action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAction}>Perform Action</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

