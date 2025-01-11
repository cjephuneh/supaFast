/* eslint-disable react/no-unescaped-entities */

"use client"

import { useState } from "react"
// import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export const metadata: Metadata = {
//   title: "Settings",
//   description: "Manage your supermarket settings and team members",
// }

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Support';
}

type Role = 'Admin' | 'Manager' | 'Support';

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("My Supermarket")
  const [email, setEmail] = useState("admin@mysupermarket.com")
  const [address, setAddress] = useState("123 Main St, City, Country")
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Support" },
  ])
  const [newMember, setNewMember] = useState<{ name: string; email: string; role: Role }>({
    name: "",
    email: "",
    role: "Support",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ storeName, email, address })
    toast({
      title: "Settings updated",
      description: "Your supermarket settings have been successfully updated.",
    })
  }

  const handleAddMember = () => {
    if (newMember.name && newMember.email) {
      setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length + 1 }])
      setNewMember({ name: "", email: "", role: "Support" })
      toast({
        title: "Team member added",
        description: "The new team member has been successfully added.",
      })
    }
  }

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id))
    toast({
      title: "Team member removed",
      description: "The team member has been successfully removed.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Supermarket Settings</CardTitle>
            <CardDescription>Manage your supermarket's basic information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store-name">Store Name</Label>
              <Input
                id="store-name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their roles.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Button variant="destructive" onClick={() => handleRemoveMember(member.id)}>Remove</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Input
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              />
              <Select
                value={newMember.role}
                onValueChange={(value: 'Admin' | 'Manager' | 'Support') => setNewMember({ ...newMember, role: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAddMember}>Add Team Member</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

