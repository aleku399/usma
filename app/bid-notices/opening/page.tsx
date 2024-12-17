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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronLeft, ChevronRight, FileText, Search } from 'lucide-react'
import Image from 'next/image'

// Sample data
const bids = [
  {
    id: 'DCIC/NCONS/2024-2025/00115',
    entity: 'Directorate of Citizenship and Immigration Control',
    method: 'RESTRICTED DOMESTIC BIDDING METHOD',
    details: 'Replacement Equipmen...',
    deadline: '2024-12-16',
    openingDate: '2024-12-17',
  },
  {
    id: 'DCIC/NCONS/2024-2025/00167',
    entity: 'Directorate of Citizenship and Immigration Control',
    method: 'MICRO PROCUREMENT',
    details: 'REQUEST TO REPAIR M/...',
    deadline: '2024-12-06',
    openingDate: '2024-12-06',
  },
  // Add more items as needed
]

export default function OpeningBidsTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(500 / Number(itemsPerPage))

  return (
    <div className="w-full max-w-[1400px] my-4 mx-auto px-4">
      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:w-[300px]">
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

      {/* Table with horizontal scroll on small screens */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[250px]">
                Procurement & Disposal Entity
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[200px]">
                Procurement Method
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[200px]">
                Bid Details
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[120px]">
                Deadline
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[120px]">
                Opening Date/Time
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bids.map((bid) => (
              <TableRow key={bid.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/coat.png"
                        alt="Organization logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{bid.id}</span>
                      <span className="text-sm text-muted-foreground">{bid.entity}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{bid.method}</TableCell>
                <TableCell>{bid.details}</TableCell>
                <TableCell>{bid.deadline}</TableCell>
                <TableCell>{bid.openingDate}</TableCell>
                <TableCell>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-blue-500 hover:bg-blue-600"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {itemsPerPage} of 500 entries
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="w-8"
            >
              {page}
            </Button>
          ))}
          <span className="px-2">...</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(50)}
            className="w-8"
          >
            50
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

