'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search } from 'lucide-react'

export default function EmptyProcurementTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')

  return (
    <div className="w-full max-w-[1400px]  my-4 mx-auto space-y-4">
      {/* Table Controls */}
      <div className="flex justify-between items-center">
        <div className="relative w-[300px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show:</span>
          <Select
            value={itemsPerPage}
            onValueChange={setItemsPerPage}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">
                Procurement & Disposal Entity
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead>
                Method
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead>
                Disposal Details
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead>
                published
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead>
                Deadline
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <p>No data available in table</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination Info */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-muted-foreground">
          Showing 0 to 0 of 0 entries
        </p>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 disabled:opacity-50"
            disabled={true}
            aria-label="Previous page"
          >
            ←
          </button>
          <button
            className="p-2 disabled:opacity-50"
            disabled={true}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

