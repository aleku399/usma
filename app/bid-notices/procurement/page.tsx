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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, Download, Eye, FileText } from 'lucide-react'
import Image from 'next/image'

type ProcurementNotice = {
  id: string
  reference: string
  entity: string
  type: 'Supplies' | 'Non Consultancy Services' | 'Consultancy Services'
  subject: string
  published: string
  deadline: string
}

const notices: ProcurementNotice[] = [
  {
    id: '1',
    reference: 'DCIC/NCONS/2024-2025/00312',
    entity: 'Directorate of Citizenship and Immigration Control',
    type: 'Non Consultancy Services',
    subject: 'PROCUREMENT OF NEW (4) DOUBLE CABIN PICKUPS',
    published: '2024-12-06',
    deadline: '2025-01-07'
  },
  {
    id: '2',
    reference: 'DCIC/SUPLS/2024-2025/00051',
    entity: 'Directorate of Citizenship and Immigration Control',
    type: 'Supplies',
    subject: 'PROCUREMENT FOR 2 ENTEPRISE FIREWALLS',
    published: '2024-12-05',
    deadline: '2024-12-31'
  },
  // Add more notices as needed
]

export default function ProcurementTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(notices.length / itemsPerPage)

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Supplies':
        return 'secondary'
      case 'Non Consultancy Services':
        return 'default'
      case 'Consultancy Services':
        return 'outline'
      default:
        return 'secondary'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <div className="w-full max-w-[1400px] my-4 mx-auto">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                Procuring Entity
                <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead>
                Type
                <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead>
                Subject of procurement
                <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead>
                published
                <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead>
                Deadline
                <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                      <Image
                        src="/coat.png"
                        alt="Organization logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{notice.reference}</span>
                      <span className="text-sm text-muted-foreground">{notice.entity}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(notice.type)}>
                    {notice.type}
                  </Badge>
                </TableCell>
                <TableCell>{notice.subject}</TableCell>
                <TableCell>{formatDate(notice.published)}</TableCell>
                <TableCell>{formatDate(notice.deadline)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        Bid Document
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2 py-4">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {itemsPerPage} of {notices.length} entries
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

