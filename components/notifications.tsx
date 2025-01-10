"use client"

import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

type Notification = {
  id: number;
  message: string;
  read: boolean;
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New order received", read: false },
    { id: 2, message: "Low stock alert: Apples", read: false },
    { id: 3, message: "Payment processed successfully", read: true },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {unreadCount > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px]">
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} onClick={() => markAsRead(notification.id)}>
            <span className={notification.read ? 'text-gray-500' : 'font-bold'}>
              {notification.message}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

