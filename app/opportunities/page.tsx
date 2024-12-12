import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Bookmark, FileText, GraduationCap, Gavel, Users, Printer, FileIcon, Mail } from 'lucide-react'
import Link from "next/link"

export default function Opportunities() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/stud.jpg?height=400&width=1200')",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          Opportunities
        </h1>
      </div>

      {/* Navigation Cards */}
      <div className="bg-blue-800 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
            <Gavel className="h-6 w-6 mb-2 text-blue-800" />
            <h2 className="font-semibold text-blue-800">Auctions</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
            <GraduationCap className="h-6 w-6 mb-2 text-blue-800" />
            <h2 className="font-semibold text-blue-800">URA E-Learning</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
            <Users className="h-6 w-6 mb-2 text-blue-800" />
            <h2 className="font-semibold text-blue-800">Careers</h2>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
            <FileText className="h-6 w-6 mb-2 text-blue-800" />
            <h2 className="font-semibold text-blue-800">Tenders</h2>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white p-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
              CAREERS, LEARNING, TENDERS, AUCTIONS
            </h2>
            <p className="text-xl text-blue-400">
              And More at Uganda Revenue Authority
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button variant="ghost" className="text-blue-800 hover:text-blue-900 hover:bg-blue-50">
              <Bookmark className="mr-2 h-4 w-4" />
              Add to Bookmarks
            </Button>

            <div className="flex gap-2">
              <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                <FileIcon className="mr-2 h-4 w-4" />
                PDF
              </Button>
              <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

