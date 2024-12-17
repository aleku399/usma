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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Menu, Search } from 'lucide-react'
import Image from 'next/image'

// Sample data
const agreements = [
  {
    id: 'MOJCA/WRKS/2024-2025/00007',
    subject: 'Electrical Machinery -SERVICE OF 300KVA VOLVO PENTA GENERATOR AT BAUMAN HOUSE/MOJCA HQ',
    provider: {
      name: 'PERFECT MULTIPLE ENGINEERING AND CONSULTANCY SERVICES U LTD',
      poNumber: 'PO-00001860'
    },
    issued: '2024-11-19',
    contract: 'lumpsum',
    status: 'Active'
  },
  {
    id: 'JINJ511/SUPLS/2024-2025/00083',
    subject: 'Fuel and Lubriants for PDU',
    provider: {
      name: 'TOTALENERGIES MARKETING UGANDA LIMITED',
      poNumber: 'PO-00001174'
    },
    issued: '2024-11-19',
    contract: 'lumpsum',
    status: 'Active'
  },
  // Add more items as needed
]

export default function AgreementsTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')

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
              <TableHead className="min-w-[300px]">
                Subject of procurement
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[250px]">
                Provider
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[120px]">
                Issued
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[120px]">
                Contract
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="min-w-[100px]">
                Status
                <ChevronDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agreements.map((agreement) => (
              <TableRow key={agreement.id}>
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
                      <span className="font-medium">{agreement.subject}</span>
                      <span className="text-sm text-muted-foreground">{agreement.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{agreement.provider.name}</span>
                    <span className="text-sm text-muted-foreground">{agreement.provider.poNumber}</span>
                  </div>
                </TableCell>
                <TableCell>{agreement.issued}</TableCell>
                <TableCell>{agreement.contract}</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
                    {agreement.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
                      >
                        <Menu className="w-4 h-4 mr-2" />
                        Options
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Agreement</DropdownMenuItem>
                        <DropdownMenuItem>Print</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {itemsPerPage} of {agreements.length} entries
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="w-8"
          >
            1
          </Button>
        </div>
      </div>
    </div>
  )
}

