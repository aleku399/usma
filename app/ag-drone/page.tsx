"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  Calendar,
  FileText,
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
import { downloadAsPDF } from "@/lib/utils";
import ProtectedRoute from "@/components/protected-route";

const documents = [
  {
    id: 1,
    title: "Contract Cover Page",
    category: "contract",
    description:
      "Contract cover page between the Government of Uganda and AG DRONE CANADA INC",
  },
  {
    id: 2,
    title: "Company Registration",
    category: "registration",
    description:
      "Service provider registration form for AG DRONE CANADA with company details and contact information",
  },
  {
    id: 3,
    title: "Banking Information",
    category: "banking",
    description:
      "Banking details for AG DRONE CANADA with Royal Bank of Canada account information",
  },
];

export default function AgDroneDocumentViewer() {
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const [isDownloading, setIsDownloading] = useState(false);

  const documentContentRef = useRef<HTMLDivElement>(null);

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
    window.print();
  };

  const downloadDocument = async () => {
    setIsDownloading(true);

    try {
      // Method 1: Client-side PDF generation
      if (documentContentRef.current) {
        await downloadAsPDF(
          "document-content",
          `ag-drone-${currentDocument.title.toLowerCase().replace(/\s+/g, "-")}`
        );
      }
    } catch (error) {
      console.error("Error downloading document:", error);
      alert("Failed to download the document. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentDocIndex(0);
  };

  const renderDocumentContent = () => {
    switch (currentDocument.id) {
      case 1:
        return (
          <div className="p-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl font-bold mb-2">REPUBLIC OF UGANDA</h1>
              <h2 className="text-xl mb-6">CONTRACT BETWEEN</h2>
              <h2 className="text-xl mb-8">
                THE GOVERNMENT OF THE REPUBLIC OF UGANDA
              </h2>
              <h3 className="text-lg mb-2">AND</h3>
              <h2 className="text-xl font-bold mb-8">AG DRONE CANADA INC</h2>
              <p className="text-lg">FOR</p>
              <p className="text-lg mb-8">
                THE SUPPLY OF AGRICULTURAL DRONES AND SERVICES
              </p>
              <p className="text-md">
                Contract No. SCOC/AGTECH/DRONES/2025-28/03
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                This contract aims to establish a comprehensive agricultural
                drone program in Uganda, with professional execution in
                accordance with international best practices, and aims to
                establish a lasting presence in Uganda&apos;s agricultural
                technology infrastructure development.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-8">
            <h2 className="text-xl font-bold mb-6 text-center">
              CONTRACTOR / SERVICE PROVIDER REGISTRATION FORM
            </h2>

            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <h3 className="font-bold text-blue-800 mb-2">
                SECTION 1: SERVICE PROVIDER INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Service Provider name</p>
                  <p className="font-medium">Ag Drone Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Company registration No.
                  </p>
                  <p className="font-medium">102168643</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valid From</p>
                  <p className="font-medium">April 2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tax ID No.</p>
                  <p className="font-medium">720815349 RC0001</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Products / Services to Supply
                  </p>
                  <p className="font-medium">MED and MoS Drones</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-medium">Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Identity Document Type
                  </p>
                  <p className="font-medium">Passport</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Identity document no.</p>
                  <p className="font-medium">GT934281</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Issue date</p>
                  <p className="font-medium">Sept 17, 2015</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry date</p>
                  <p className="font-medium">Sept 17, 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2">
                SECTION 2: SERVICE PROVIDER CONTACT INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Permanent street address
                  </p>
                  <p className="font-medium">Box 276</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium">Codette</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Postal code (ZIP)</p>
                  <p className="font-medium">S0E 0P0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">State/province</p>
                  <p className="font-medium">Saskatchewan</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-medium">Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tel.</p>
                  <p className="font-medium">1-306-276-6840</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-8">
            <h2 className="text-xl font-bold mb-6 text-center">
              SERVICE PROVIDER BANKING INFORMATION
            </h2>

            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Name of banking institution
                  </p>
                  <p className="font-medium">Royal Bank of Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Name</p>
                  <p className="font-medium">Ag Drone Canada Inc</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">IBAN No.</p>
                  <p className="font-medium">-</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bank account No.</p>
                  <p className="font-medium">10016327</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Clearing code (ACH/Routing No.)
                  </p>
                  <p className="font-medium">021000021</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">SWIFT/BIC code</p>
                  <p className="font-medium">ROYCCAT2</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Branch code</p>
                  <p className="font-medium">
                    Transit # 05538, Institution # 003
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bank account currency</p>
                  <p className="font-medium">CANADIAN</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Branch name</p>
                  <p className="font-medium">Nipawin Royal Bank of Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bank account type</p>
                  <p className="font-medium">Checking/Current/Cheque</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Bank&apos;s street address
                  </p>
                  <p className="font-medium">118 1 Ave W</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium">Nipawin</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">State/province</p>
                  <p className="font-medium">Saskatchewan</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Postal code (ZIP)</p>
                  <p className="font-medium">S0E 1E0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-medium">Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Conditions to tender:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You are to pay registration fee of USD$ 8,400 for a period of
                  three (3) years, i.e USD$2,800 yearly, in cash, or to the
                  Committee&apos;s nominated Advocate/Solicitor, refundable
                  after satisfactory completion of the supply of the
                  items/services.
                </li>
                <li>
                  Quotation of the items / services you intend to supply in
                  United States Dollars.
                </li>
                <li>
                  To enclose copies of company Registration Certificate of
                  Incorporation.
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div>Document not found</div>;
    }
  };
  console.log("isFullscreen", isFullscreen);
  return (
    <ProtectedRoute allowedClients={["ag-drone"]}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">AG DRONE CANADA INC</h1>
                <p className="text-blue-100">
                  Contract No. SCOC/AGTECH/DRONES/2025-28/03
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
                    <p className="font-medium">USD 117,000,000</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <User className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Director</p>
                    <p className="font-medium">Ag Drone Canada</p>
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
                    activeCategory === "registration" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange("registration")}
                >
                  Registration
                </Button>
                <Button
                  variant={activeCategory === "banking" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange("banking")}
                >
                  Banking
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
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
                    {doc.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm truncate block">{doc.title}</span>
                    <Badge variant="outline" className="text-xs mt-1">
                      {doc.category}
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
                    <TooltipContent>Print document</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={downloadDocument}
                        disabled={isDownloading}
                      >
                        {isDownloading ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
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

            {/* Document display */}
            <div className="flex-1 overflow-auto bg-gray-50">
              <div
                id="document-content"
                ref={documentContentRef}
                className="bg-white shadow-md max-w-4xl mx-auto transition-all duration-200 ease-in-out"
                style={{
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: "top center",
                }}
              >
                {renderDocumentContent()}
              </div>
            </div>

            {/* Document info footer */}
            <div className="border-t border-gray-200 p-3 bg-gray-50 rounded-b-lg">
              <h3 className="font-medium text-gray-800">
                {currentDocument.title}
              </h3>
              <p className="text-sm text-gray-600">
                {currentDocument.description}
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
