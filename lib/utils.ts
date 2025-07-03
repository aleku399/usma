import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function downloadAsPDF(elementId: string, filename: string) {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error(`Element with ID ${elementId} not found`)
    }

    // Create a canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })

    // Calculate dimensions to fit on A4
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Create PDF
    const pdf = new jsPDF("p", "mm", "a4")

    // Add image to PDF
    let heightLeft = imgHeight
    let position = 0

    // First page
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    // Add additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // Save the PDF
    pdf.save(`${filename}.pdf`)

    return true
  } catch (error) {
    console.error("Error generating PDF:", error)
    return false
  }
}

