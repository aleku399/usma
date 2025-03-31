"use client";

import { useState, useRef } from "react";
import {
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  Calendar,
  FileText,
  User,
  QrCode,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { downloadAsPDF } from "@/lib/utils";
import ProtectedRoute from "@/components/protected-route";

export default function LannerDocumentViewer() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const documentContentRef = useRef<HTMLDivElement>(null);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);

  const documents = [
    {
      id: 1,
      title: "Contract Document",
      category: "contract",
      description:
        "Contract document for Lanner OÜ with details about the company's operations in Uganda's scientific and healthcare infrastructure development.",
    },
    {
      id: 2,
      title: "Uganda Vision 2040",
      category: "presentation",
      description:
        "Science, Technology and Innovation section from Uganda Vision 2040 strategic document.",
    },
    {
      id: 3,
      title: "ID Document - Merlin",
      category: "identification",
      description: "Estonian passport for Merlin Langel.",
    },
    {
      id: 4,
      title: "ID Document - Kent",
      category: "identification",
      description: "Estonian passport for Kent Langel.",
    },
  ];

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
      if (documentContentRef.current) {
        const originalZoom = zoomLevel;
        setZoomLevel(100);

        setTimeout(async () => {
          await downloadAsPDF("document-content", "lanner-contract-document");

          setZoomLevel(originalZoom);
          setIsDownloading(false);
        }, 100);
      } else {
        throw new Error("Document content element not found");
      }
    } catch (error) {
      console.error("Error downloading document:", error);
      alert("Failed to download the document. Please try again.");
      setIsDownloading(false);
    }
  };

  const goToNextPage = () => {
    if (currentDocIndex < documents.length - 1) {
      setCurrentDocIndex(currentDocIndex + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentDocIndex > 0) {
      setCurrentDocIndex(currentDocIndex - 1);
    }
  };

  const renderDocumentContent = () => {
    switch (documents[currentDocIndex].id) {
      case 1:
        return (
          <>
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                to transparent, professional execution in accordance with
                international best practices, and aims to establish a lasting
                presence in Uganda&apos;s scientific and healthcare
                infrastructure development.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Quote created by: Merlin L
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Signature ...................................
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="mb-6">
                    <p className="font-bold">Lanmer OÜ</p>
                    <p>Fortuna 1</p>
                    <p>50603 Tartu</p>
                    <p>Tartumaa</p>
                    <p>Estonia</p>
                    <p className="mt-2">lanmer.eu</p>
                    <p>finance@lanmer.eu</p>
                  </div>
                  <div>
                    <p>Phone: +372 5564 6678</p>
                    <p>Reg. no.: 12647876</p>
                    <p>VAT ID: EE102115000</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-end items-start">
                  <div className="text-right">
                    <p className="font-bold">Bank</p>
                    <p>Swedbank AS</p>
                    <p>SWIFT: HABAEE2X</p>
                    <p>IBAN: EE602200221059587612</p>
                  </div>
                  <div className="ml-6">
                    <QrCode size={80} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
            <img
              src="/lp.jpeg"
              alt="Uganda Vision 2040 - Title"
              className="w-full max-w-2xl mb-8"
            />
            <img
              src="/lp1.jpeg"
              alt="Uganda Vision 2040 - Science and Technology"
              className="w-full max-w-2xl mb-8"
            />
            <img
              src="/lp3.jpeg"
              alt="Uganda Vision 2040 - Innovation"
              className="w-full max-w-2xl mb-8"
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <img
              src="/l1.jpeg"
              alt="Estonian Passport - Merlin Langel"
              className="w-full max-w-2xl mb-8"
            />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <img
              src="/l2.jpeg"
              alt="Estonian Passport - Kent Langel"
              className="w-full max-w-2xl mb-8"
            />
          </div>
        );
      default:
        return <div>Document not found</div>;
    }
  };

  console.log(isFullscreen);

  return (
    <ProtectedRoute allowedClients={["lanmer"]}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Contract Summary Banner */}
        <div className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">LANMER OÜ</h1>
                <p className="text-blue-100">Contract No. LNR/2025/03/31</p>
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
                    <p className="font-medium">USD 19,500,000</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 rounded-md px-3 py-2">
                  <User className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-xs text-blue-200">Director</p>
                    <p className="font-medium">Kent LAngel</p>
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
                {documents.map((doc, index) => (
                  <Button
                    key={doc.id}
                    variant={currentDocIndex === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentDocIndex(index)}
                  >
                    {doc.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-md flex flex-col">
            <div className="border-b border-gray-200 p-3 flex items-center justify-between bg-gray-50 rounded-t-lg">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-4">
                  {documents[currentDocIndex].title}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevPage}
                  disabled={currentDocIndex === 0}
                  className="mr-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNextPage}
                  disabled={currentDocIndex === documents.length - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
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

            <div className="flex-1 overflow-auto p-4 flex justify-center bg-gray-50">
              <div
                id="document-content"
                ref={documentContentRef}
                className="bg-white shadow-md p-8 max-w-4xl w-full transition-all duration-200 ease-in-out"
                style={{
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: "top center",
                }}
              >
                {renderDocumentContent()}
              </div>
            </div>

            <div className="border-t border-gray-200 p-3 bg-gray-50 rounded-b-lg">
              <h3 className="font-medium text-gray-800">
                {documents[currentDocIndex].title}
              </h3>
              <p className="text-sm text-gray-600">
                {documents[currentDocIndex].description}
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
