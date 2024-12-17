'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Play, ChevronDown } from 'lucide-react'
import Link from "next/link"

export default function SupplierInfo() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 my-3">
      {/* Main Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            What is eGP supplier Portal?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            The E-Procurement System automates the public procurement process and enables 
            the interactions of Governemnt to business services (G2B). E-procurement is 
            a single channel, portal and point of access for Uganda procuring entities 
            allowing to negotiate better contract terms and to realize savings and achieve 
            value for money.
          </p>
          
          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link 
              href="/contact" 
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              href="/help" 
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Help Desk
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              href="/faqs" 
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              FAQs
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Training Videos Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            SUPPLIER PORTAL GUIDE/TRAINING VIDEOS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    SUPPLIER PORTAL GUIDE - 01 - Landing Page
                  </span>
                </div>
                <ChevronDown className="w-5 h-5" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}

