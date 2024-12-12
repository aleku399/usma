import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Building2, FileText, GavelIcon as GavelSquare,  Receipt } from 'lucide-react'
import Link from "next/link"

export default function LegalPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/legal.jpg')",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Back Button */}
        <Link href="/" className="absolute top-4 left-4 z-10">
          <Button variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        {/* Hero Title */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-500">
          Legal & Policy
        </h1>
      </div>

      {/* Navigation Cards */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <GavelSquare className="h-8 w-8 mb-3 text-gray-700" />
            <h2 className="font-semibold">Laws, Acts and Regulations</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <FileText className="h-8 w-8 mb-3 text-gray-700" />
            <h2 className="font-semibold">Case Summary Reports</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Receipt className="h-8 w-8 mb-3 text-gray-700" />
            <h2 className="font-semibold">Debt Collections</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center bg-yellow-50 border-yellow-200 hover:bg-yellow-100 transition-colors cursor-pointer">
            <FileText className="h-8 w-8 mb-3 text-gray-700" />
            <h2 className="font-semibold">Double Taxation Agreements</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Building2 className="h-8 w-8 mb-3 text-gray-700" />
            <h2 className="font-semibold">Delegated Competent Authority</h2>
          </Card>
        </div>
      </div>
    </div>
  )
}

