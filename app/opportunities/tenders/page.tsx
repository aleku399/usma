'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Printer, FileText, Mail } from 'lucide-react'
import Link from "next/link"

export default function TendersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Tenders</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to the Enterprise Resource Planning System (ERP) Supplier Home Page.
        </p>
        
        <p>
          Oracle Sourcing Suppliers allows you quickly locate and respond to tenders. USA may invite you to register with the system. Once you receive a registration invitation and have registered and been approved, you can start participating in tenders.
        </p>
        
        <p>
          To respond to tenders to which you have been specifically invited, view the Open Invitations section of the Negotiations Home page. To respond to a negotiation, click the negotiation number. Use the Search Negotiations fields to search for a particular negotiation. To monitor the negotiations in which you are participating, check the Your Active and Draft Responses section.
        </p>
        
        <p>
          By using the online system, UNSD purchases goods, works, services and non-consultancy services to help ensure efficiency of public procurement with the standardization of electronic documents, supplier registration, goods and services information and to streamline procurement transactions for efficient service delivery.
        </p>
        
        <p>
          ERP is a single channel, portal and point of access for Uganda procuring entities allowing to negotiate better contract terms and to realize savings and achieve value for money.
        </p>

        <Card className="p-6 bg-blue-50/50">
          <Link href="/procurement-notices">
            <Button 
              variant="link" 
              className="text-blue-600 hover:text-blue-800 text-lg p-0"
            >
              Click here to access the Procurement and Disposal Notices
            </Button>
          </Link>
        </Card>

        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => {/* PDF download logic */}}
          >
            <FileText className="h-4 w-4" />
            PDF
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => {/* Email share logic */}}
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </main>
  )
}

