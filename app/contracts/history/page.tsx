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
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Search } from 'lucide-react'
import Image from 'next/image'

const contracts = [
  {
    id: 'MTIC/SUPLS/2023-2024/00037',
    subject: 'Air Tickets - Travel Abroad',
    provider: {
      name: 'BUNYONYI SAFARIS LIMITED',
      poNumber: 'PO-0000175'
    },
    issued: '2024-05-15',
    contract: 'lumpsum',
    status: 'Active'
  },
  {
    id: 'MTIC/NCONS/2023-2024/00189',
    subject: 'Payment for provision of Advertising services (Fundamental Ltd)',
    provider: {
      name: 'FUNDAMENTAL PRINT SERVICES LIMITED',
      poNumber: 'PO-0000187'
    },
    issued: '2024-06-10',
    contract: 'lumpsum',
    status: 'Active'
  },
  // Add more sample data as needed
]

export default function ContractHistory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)
  const [financialYear, setFinancialYear] = useState('all')
  const totalEntries = 15669
  const totalPages = Math.ceil(totalEntries / Number(itemsPerPage))

  return (
    <div className="w-full max-w-[1400px] mx-auto my-4 px-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">CONTRACTS AWARDED</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">Filter By Financial Year</span>
          <Select value={financialYear} onValueChange={setFinancialYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Select All</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
              <SelectItem value="2022-2023">2022-2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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

      {/* Table */}
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
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
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
                      <span className="font-medium">{contract.subject}</span>
                      <span className="text-sm text-muted-foreground">{contract.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{contract.provider.name}</span>
                    <span className="text-sm text-muted-foreground">{contract.provider.poNumber}</span>
                  </div>
                </TableCell>
                <TableCell>{contract.issued}</TableCell>
                <TableCell>{contract.contract}</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
                    {contract.status}
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
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Download Contract</DropdownMenuItem>
                      <DropdownMenuItem>Print History</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {itemsPerPage} of {totalEntries} entries
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
            onClick={() => setCurrentPage(1567)}
            className="w-12"
          >
            1567
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

