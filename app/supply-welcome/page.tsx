'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, ShieldCheck, TrendingUp } from 'lucide-react'

export default function WelcomeMessage() {
  return (
    <Card className="max-w-4xl my-3 mx-auto">
      <CardHeader className="space-y-4">
        <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
        <p className="text-xl text-muted-foreground">
          Welcome to the E-procurement system for Uganda.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Main Description */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="flex items-start gap-3">
            <Building2 className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
            <span>
              The E-Procurement System automates the public procurement process and enables 
              the interactions of Government to business services (G2B).
            </span>
          </p>

          <p className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
            <span>
              By using the online system, the Government purchases goods, works, services 
              and non-consultancy services to help the Government to ensure efficiency of 
              public procurement with the standardization of electronic documents, supplier 
              registration, goods and services information and to streamline public 
              procurement transactions for efficient government service delivery.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <FileText className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
            <span>
              E-procurement is a single channel, portal and point of access for Uganda 
              procuring entities allowing to negotiate better contract terms and to realize 
              savings and achieve value for money.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
            <span>
              It provides suppliers with increased access to markets without additional 
              marketing efforts and a faster and more efficient method for quoting and 
              increased order accuracy through receipt of electronic orders.
            </span>
          </p>
        </div>

        {/* Benefits Grid - Optional expansion of content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                For Government
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Streamlined procurement process</li>
                <li>Enhanced transparency</li>
                <li>Better value for money</li>
                <li>Standardized documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                For Suppliers
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Increased market access</li>
                <li>Faster quoting process</li>
                <li>Electronic order management</li>
                <li>Reduced marketing costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

