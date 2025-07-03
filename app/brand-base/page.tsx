"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  FileText,
  Calendar,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import ProtectedRoute from "@/components/protected-route";

const documents = [
  {
    id: 1,
    title: "Quotation - Page 1",
    url: "/bb1.png",
    pageNumber: 1,
    category: "quotation",
  },
  {
    id: 2,
    title: "Quotation - Page 2",
    url: "/bb2.png",
    pageNumber: 2,
    category: "quotation",
  },
  {
    id: 3,
    title: "Tax Compliance - Page 1",
    url: "/bb3.png",
    pageNumber: 1,
    category: "tax-compliance",
  },
  {
    id: 4,
    title: "Tax Compliance - Page 2",
    url: "/bb4.png",
    pageNumber: 2,
    category: "tax-compliance",
  },
];

export default function PdfViewer() {
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDocuments =
    activeCategory === "all"
      ? documents
      : documents.filter((doc) => doc.category === activeCategory);

  const currentDocument = filteredDocuments[currentDocIndex] || documents[0];

  const goToNextPage = () => {
    if (currentDocIndex < filteredDocuments.length - 1) {
      setCurrentDocIndex(currentDocIndex + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentDocIndex > 0) {
      setCurrentDocIndex(currentDocIndex - 1);
    }
  };

  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Document</title>
            <style>
              body { margin: 0; padding: 20px; }
              img { max-width: 100%; height: auto; page-break-after: always; }
            </style>
          </head>
          <body>
            ${filteredDocuments
              .map((doc) => `<img src="${doc.url}" alt="${doc.title}" />`)
              .join("")}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  const downloadAllDocuments = () => {
    console.log("downloading")
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentDocIndex(0);
  };
  console.log("isFullscreen", isFullscreen);
  return (
    <ProtectedRoute allowedClients={["brandbaseit"]}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header for BrandBase IT */}
        <div className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">
                  BrandBase IT and Printing Solution
                </h1>
                <p className="text-blue-100">
                  Shop #5 Ndinaye House, 178 Francis Baard Street, Pretoria,
                  0001
                </p>
                <p className="text-blue-100">
                  Reg No: 2009/216225/23 | Income Tax No: 9993042150 | VAT No:
                  4630268201
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Contact Number</p>
                    <p className="font-medium">
                      Tel: 012 767 8464, 081 359 9746
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <FileText className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Fax</p>
                    <p className="font-medium">086 566 9602</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <User className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">E-mail</p>
                    <p className="font-medium">brandbaseit@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Document Viewer
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange("all")}
                >
                  All Documents
                </Button>
                <Button
                  variant={
                    activeCategory === "quotation" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange("quotation")}
                >
                  Quotation
                </Button>
                <Button
                  variant={
                    activeCategory === "tax-compliance" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange("tax-compliance")}
                >
                  Tax Compliance
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar with thumbnails */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-[200px] md:h-auto overflow-y-auto">
            <h2 className="font-semibold text-gray-700 mb-3">Document Pages</h2>
            <div className="space-y-2">
              {filteredDocuments.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-100 ${
                    currentDocIndex === index
                      ? "bg-blue-50 border border-blue-200"
                      : ""
                  }`}
                  onClick={() => setCurrentDocIndex(index)}
                >
                  <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded mr-2">
                    {doc.pageNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm truncate block">{doc.title}</span>
                    <Badge variant="outline" className="text-xs mt-1">
                      {doc.category === "quotation"
                        ? "Quotation"
                        : "Tax Compliance"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main document viewer */}
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
                        className="mr-1"
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
                        disabled={
                          currentDocIndex === filteredDocuments.length - 1
                        }
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
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomOut}
                        disabled={zoomLevel <= 50}
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Zoom out</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span className="text-sm font-medium text-gray-700">
                  {zoomLevel}%
                </span>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomIn}
                        disabled={zoomLevel >= 200}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Zoom in</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleFullscreen}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Fullscreen</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrint}
                      >
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Print all pages</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={downloadAllDocuments}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Download all</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Document display */}
            <div className="flex-1 overflow-auto p-4 flex justify-center bg-gray-50">
              <div className="relative bg-white shadow-md">
                <img
                  src={currentDocument.url || "/placeholder.svg"}
                  alt={currentDocument.title}
                  className="max-w-full transition-all duration-200 ease-in-out"
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: "top center",
                  }}
                />
              </div>
            </div>

            {/* Document info footer */}
            <div className="border-t border-gray-200 p-3 bg-gray-50 rounded-b-lg">
              <h3 className="font-medium text-gray-800">
                {currentDocument.title}
              </h3>
              <p className="text-sm text-gray-600">
                {currentDocument.id === 1 &&
                  "Quotation Page 1 - Details of items and pricing for Special Contracts Oversight Committee"}
                {currentDocument.id === 2 &&
                  "Quotation Page 2 - Continuation of items and total pricing for the contract"}
                {currentDocument.id === 3 &&
                  "Tax Compliance Page 1 - Tax compliance status issued by the South African Revenue Service"}
                {currentDocument.id === 4 &&
                  "Tax Compliance Page 2 - Additional tax compliance details and registration certificate"}
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 p-4 text-center text-gray-600 text-sm">
          <p>Confidential Document Viewer - For authorized personnel only</p>
        </footer>
      </div>
    </ProtectedRoute>
  );
}
