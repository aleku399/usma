"use client"

import { useState, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  FileText,
  User,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { documents } from "@/lib/hycromax-data"
import { documentImages } from "@/lib/doc-images"

export default function HycromaxDocumentViewer() {
  const [currentDocIndex, setCurrentDocIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isDownloading, setIsDownloading] = useState(false)
  const documentContentRef = useRef<HTMLDivElement>(null)

  const filteredDocuments =
    activeCategory === "all" ? documents : documents.filter((doc) => doc.category === activeCategory)

  const currentDocument = filteredDocuments[currentDocIndex] || documents[0]

  const goToNextPage = () => {
    if (currentDocIndex < filteredDocuments.length - 1) {
      setCurrentDocIndex(currentDocIndex + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentDocIndex > 0) {
      setCurrentDocIndex(currentDocIndex - 1)
    }
  }

  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25)
    }
  }

  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const downloadDocument = async () => {
    setIsDownloading(true)
    try {
      // Simulate download process
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert(`${currentDocument.title} downloaded successfully!`)
    } catch (error) {
      console.error("Error downloading document:", error)
      alert("Failed to download the document. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentDocIndex(0)
  }

  const renderDocumentContent = () => {
    return (
      <div className="p-8">
        <div className="flex justify-center mb-8">
          <Image
            src={documentImages[currentDocument.id - 1] || "/placeholder.svg"}
            alt={currentDocument.title}
            width={900}
            height={700}
            className="border border-gray-300 rounded-lg shadow-lg max-w-full h-auto"
            priority
          />
        </div>
      </div>
    )
  }

  console.log("isFullscreen", isFullscreen)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">HYCROMAX ZAMBIA ENTERPRISES LIMITED</h1>
              <p className="text-green-100">Registration No. 120100084313 | Incorporated: 03 May 2010</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center bg-green-700 rounded-md px-3 py-2">
                <Building2 className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-xs text-green-200">Business Type</p>
                  <p className="font-medium">Construction & Retail</p>
                </div>
              </div>
              <div className="flex items-center bg-green-700 rounded-md px-3 py-2">
                <FileText className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-xs text-green-200">Nominal Capital</p>
                  <p className="font-medium">K15,000</p>
                </div>
              </div>
              <div className="flex items-center bg-green-700 rounded-md px-3 py-2">
                <User className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-xs text-green-200">Chairman/CEO</p>
                  <p className="font-medium">Kawina C. Nyundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Header */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Company Document Viewer</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("all")}
              >
                All Documents
              </Button>
              <Button
                variant={activeCategory === "registration" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("registration")}
              >
                Registration
              </Button>
              <Button
                variant={activeCategory === "corporate" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("corporate")}
              >
                Corporate
              </Button>
              <Button
                variant={activeCategory === "compliance" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("compliance")}
              >
                Compliance
              </Button>
              <Button
                variant={activeCategory === "correspondence" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange("correspondence")}
              >
                Correspondence
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar - Fixed Height with Scrollable Content */}
        <div className="w-full md:w-80 bg-white rounded-lg shadow-md flex flex-col h-[400px] md:h-[calc(100vh-280px)]">
          {/* Sidebar Header - Fixed */}
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <h2 className="font-semibold text-gray-700">Document Pages</h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredDocuments.length} document{filteredDocuments.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-4 pt-2">
            <div className="space-y-2">
              {filteredDocuments.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`flex items-center p-3 rounded cursor-pointer hover:bg-gray-100 transition-colors ${
                    currentDocIndex === index ? "bg-green-50 border border-green-200" : ""
                  }`}
                  onClick={() => setCurrentDocIndex(index)}
                >
                  <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded mr-3 text-sm font-medium flex-shrink-0">
                    {doc.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium truncate block">{doc.title}</span>
                    <Badge variant="outline" className="text-xs mt-1">
                      {doc.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Document Viewer */}
        <div className="flex-1 bg-white rounded-lg shadow-md flex flex-col">
          {/* Toolbar */}
          <div className="border-b border-gray-200 p-3 flex items-center justify-between bg-gray-50 rounded-t-lg">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-4">
                Page {currentDocIndex + 1} of {filteredDocuments.length}
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToPrevPage}
                      disabled={currentDocIndex === 0}
                      className="mr-1 bg-transparent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Previous page</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToNextPage}
                      disabled={currentDocIndex === filteredDocuments.length - 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Next page</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={zoomOut} disabled={zoomLevel <= 50}>
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom out</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm font-medium text-gray-700 min-w-[50px] text-center">{zoomLevel}%</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={zoomIn} disabled={zoomLevel >= 200}>
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom in</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={toggleFullscreen}>
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Fullscreen</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={handlePrint}>
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Print document</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={downloadDocument} disabled={isDownloading}>
                      {isDownloading ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-green-600" />
                      ) : (
                        <Download className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Download document</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Document Display */}
          <div className="flex-1 overflow-auto bg-gray-50">
            <div
              id="document-content"
              ref={documentContentRef}
              className="bg-white shadow-md max-w-5xl mx-auto transition-all duration-200 ease-in-out"
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: "top center",
              }}
            >
              {renderDocumentContent()}
            </div>
          </div>

          {/* Document Info Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-lg">
            <h3 className="font-medium text-gray-800 mb-1">{currentDocument.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{currentDocument.description}</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {currentDocument.category}
              </Badge>
              <span className="text-xs text-gray-500">
                Document {currentDocument.id} of {documents.length}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 text-center text-gray-600 text-sm">
        <p>HYCROMAX ZAMBIA ENTERPRISES LIMITED - Confidential Document Viewer</p>
        <p className="text-xs mt-1">Plot No. 3B Sheki Sheki Road, Light Industrial Area, Lusaka, Zambia</p>
      </footer>
    </div>
  )
}
