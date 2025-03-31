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
    title: "Contract Cover Page",
    url: "/solly.jpeg",
    pageNumber: 1,
    category: "contract",
  },
  {
    id: 2,
    title: "Contract Parties",
    url: "/solly1.jpeg",
    pageNumber: 2,
    category: "contract",
  },
  {
    id: 3,
    title: "Contract Definitions",
    url: "/solly2.jpeg",
    pageNumber: 3,
    category: "contract",
  },
  {
    id: 4,
    title: "Country of Origin & Standards",
    url: "/solly3.jpeg",
    pageNumber: 4,
    category: "contract",
  },
  {
    id: 5,
    title: "Inspection and Packaging",
    url: "/solly4.jpeg",
    pageNumber: 5,
    category: "contract",
  },
  {
    id: 6,
    title: "Delivery and Warranty",
    url: "/solly5.jpeg",
    pageNumber: 6,
    category: "contract",
  },
  {
    id: 7,
    title: "Payment Terms",
    url: "/solly6.jpeg",
    pageNumber: 7,
    category: "contract",
  },
  {
    id: 8,
    title: "Contract Amendments",
    url: "/solly8.jpeg",
    pageNumber: 8,
    category: "contract",
  },
  {
    id: 9,
    title: "Force Majeure",
    url: "/solly9.jpeg",
    pageNumber: 9,
    category: "contract",
  },
  {
    id: 10,
    title: "Applicable Law",
    url: "/solly10.jpeg",
    pageNumber: 10,
    category: "contract",
  },
  {
    id: 11,
    title: "Contract Signatures",
    url: "/solly11.jpeg",
    pageNumber: 11,
    category: "contract",
  },
  {
    id: 12,
    title: "Supplier's Banking Credentials",
    url: "/solly12.jpeg",
    pageNumber: 12,
    category: "contract",
  },
  {
    id: 13,
    title: "Account Confirmation Letter",
    url: "/solly13.jpeg",
    pageNumber: 13,
    category: "contract",
  },
  {
    id: 14,
    title: "ID Document - Page 1",
    url: "/id.png", // Assuming you've saved the ID document in public folder
    pageNumber: 14,
    category: "identification",
  },
  {
    id: 15,
    title: "ID Document - Page 2",
    url: "/id.png", // Assuming you've saved the ID document in public folder
    pageNumber: 15,
    category: "identification",
  },
];

export default function DocumentViewer() {
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
    // Create a link to download a zip file (in a real app, you'd generate this on the server)
    alert(
      "In a production environment, this would download all documents as a ZIP file."
    );
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentDocIndex(0);
  };

  console.log("isFullscreen", isFullscreen);

  return (
    <ProtectedRoute allowedClients={["sollybeds"]}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Contract Summary Banner */}
        <div className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">SOLLYS BEDS (PTY) LTD</h1>
                <p className="text-blue-100">
                  Contract No. SCOC/SPLS/WRKS/CKVS/24-25/10/1
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Contract Duration</p>
                    <p className="font-medium">3 Years</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <FileText className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Contract Value</p>
                    <p className="font-medium">USD 3,400,000</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <User className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Director</p>
                    <p className="font-medium">Abrar Ahmed Limbada</p>
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
                    activeCategory === "contract" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange("contract")}
                >
                  Contract
                </Button>
                <Button
                  variant={
                    activeCategory === "identification" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange("identification")}
                >
                  ID Documents
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
                      {doc.category === "contract" ? "Contract" : "ID"}
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
                  "Contract cover page between the Government of Uganda and SOLLYS BEDS (PTY) LIMITED"}
                {currentDocument.id === 2 &&
                  "Contract parties and agreement details for the supply of goods and services"}
                {currentDocument.id === 3 &&
                  "Contract definitions including the supply of 60,000 units of Rest Easy 5-star Single Mattresses"}
                {currentDocument.id === 4 &&
                  "Country of origin requirements and standards for goods supplied under the contract"}
                {currentDocument.id === 5 &&
                  "Inspection, testing, and packaging requirements for the goods"}
                {currentDocument.id === 6 &&
                  "Delivery terms, insurance requirements, and warranty information (3-year warranty)"}
                {currentDocument.id === 7 &&
                  "Payment terms and schedule for the contract"}
                {currentDocument.id === 8 &&
                  "Contract amendments and assignment clauses"}
                {currentDocument.id === 9 &&
                  "Force majeure and dispute resolution clauses"}
                {currentDocument.id === 10 &&
                  "Contract clauses regarding applicable law and notices"}
                {currentDocument.id === 11 &&
                  "Contract signatures from all parties"}
                {currentDocument.id === 12 &&
                  "Supplier's banking details for SOLLYS BEDS (PTY) LTD"}
                {currentDocument.id === 13 &&
                  "Official bank account confirmation letter from First National Bank"}
                {currentDocument.id === 14 &&
                  "ID Document for Abrar Ahmed Limbada (ID No. 720802 5893 084)"}
                {currentDocument.id === 15 &&
                  "Additional ID Document information and certification"}
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
