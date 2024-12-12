// import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileText, Scale, Shield, Truck } from 'lucide-react'
// import Link from "next/link"

export default function ImportExport() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/shipp.jpg?height=600&width=800')",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Back Button */}
        {/* <Link href="#" className="absolute top-4 left-4 z-10">
          <Button variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link> */}

        {/* Hero Title */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-500">
          Import & Export
        </h1>
      </div>

      {/* Navigation Cards */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-4 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Truck className="h-8 w-8 mb-2" />
            <h2 className="font-semibold">The Export Process</h2>
          </Card>

          <Card className="p-4 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Scale className="h-8 w-8 mb-2" />
            <h2 className="font-semibold">Custom Valuations</h2>
          </Card>

          <Card className="p-4 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Shield className="h-8 w-8 mb-2" />
            <h2 className="font-semibold">Customs Internal Affairs</h2>
          </Card>

          <Card className="p-4 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <FileText className="h-8 w-8 mb-2" />
            <h2 className="font-semibold">Single Customs Territory</h2>
          </Card>

          <Card className="p-4 flex flex-col items-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Download className="h-8 w-8 mb-2" />
            <h2 className="font-semibold">Download ASYCUDA</h2>
          </Card>
        </div>
      </div>
    </div>
  )
}

