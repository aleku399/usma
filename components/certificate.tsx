'use client'
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card"
import Image from "next/image"

type Certificate = {
  regNumber: string;
  tin: string;
  certificateRegNumber: string;
  tradingLicense: string;
  supplierLegalName: string;
  businessName: string;
  plotNumber: string;
  streetName: string;
  buildingName: string;
  tradingCenter: string;
  city: string;
  county: string;
  businessActivity: string;
  regType: string;
  dateReg: string;
  expiryDate: string;
  regType1: string;
  dateReg1: string;
  expiryDate1: string;
  nameSignatory: string;
  designationSign: string;
  certificateNumber: string;
  issueDate: string;
};

export default function Certificate() {
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    // Retrieve certificate data from localStorage
    const storedCertificate = localStorage.getItem("certificate");
    if (storedCertificate) {
      const parsedCertificate = JSON.parse(storedCertificate);
      setCertificate({
        regNumber: parsedCertificate.regNumber,
        tin: parsedCertificate.tin,
        certificateRegNumber: parsedCertificate.certificateRegNumber,
        tradingLicense: parsedCertificate.tradingLicense,
        supplierLegalName: parsedCertificate.supplierLegalName,
        businessName: parsedCertificate.businessName,
        plotNumber: parsedCertificate.plotNumber,
        streetName: parsedCertificate.streetName,
        buildingName: parsedCertificate.buildingName,
        tradingCenter: parsedCertificate.tradingCenter,
        city: parsedCertificate.city,
        county: parsedCertificate.county,
        businessActivity: parsedCertificate.businessActivity,
        regType: parsedCertificate.regType,
        dateReg: parsedCertificate.dateReg,
        expiryDate: parsedCertificate.expiryDate,
        regType1: parsedCertificate.regType1,
        dateReg1: parsedCertificate.dateReg1,
        expiryDate1: parsedCertificate.expiryDate1,
        nameSignatory: parsedCertificate.nameSignatory,
        designationSign: parsedCertificate.designationSign,
        certificateNumber: parsedCertificate.certificateNumber,
        issueDate: parsedCertificate.issueDate
      });
    }
  }, []);

  if (!certificate) {
    return <div>Loading certificate details...</div>;
  }
  
  return (
    <Card className="max-w-4xl mx-auto p-8 my-3 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 relative">
            <Image
              src="/coat.png?height=96&width=96"
              alt="USA Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="text-sm space-y-1">
            <p>Uganda National Suppliers Database</p>
            <p className="text-muted-foreground">EMPOWERING UGANDAN SUPPLIERS</p>
          </div>
        </div>
        <div className="text-right text-sm space-y-1">
          <p>For General Inquiries</p>
          <p>call our Toll Free</p>
          <p className="font-bold">0800123456</p>
          <p>Or visit our website</p>
          <a href="http://UNSD.go.ug" className="text-primary hover:underline">
            http://UNSD.go.ug
          </a>
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold bg-muted py-2">
          Certificate of Registration
        </h1>
        <div className="flex justify-end gap-2 text-sm">
          <span>Certificate No: {certificate.certificateNumber}</span>
          <span>Issue Date: {certificate.issueDate}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <p className="text-center">
          This is to certify that the supplier shown herein has been registered with
          the Uganda Suppliers Association
        </p>

        {/* Section A */}
        <div className="space-y-4">
          <h2 className="font-semibold">Section A : Supplier Information</h2>
          <div className="grid grid-cols-2 gap-4 border rounded-lg p-4">
            <div>
              <p className="text-sm text-muted-foreground">
                URSB Certificate of Registration Number
              </p>
              <p className="font-medium">{certificate.regNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Taxpayer Identification Number
              </p>
              <p className="font-medium">{certificate.tin}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Business Registration Number
              </p>
              <p className="font-medium">{certificate.certificateRegNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Trading License / Business Operating License
              </p>
              <p className="font-medium">{certificate.tradingLicense}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Supplier Legal Name</p>
              <p className="font-medium">{certificate.supplierLegalName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Business Name</p>
              <p className="font-medium">{certificate.businessName}</p>
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className="space-y-4">
          <h2 className="font-semibold">
            Section B : Headquarter Office or Principal Place of Business Physical
            Address
          </h2>
          <div className="grid grid-cols-3 gap-4 border rounded-lg p-4">
            <div>
              <p className="text-sm text-muted-foreground">1) Plot Number</p>
              <p className="font-medium">{certificate.plotNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">2) Street Name</p>
              <p className="font-medium">{certificate.streetName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">3) Building Name</p>
              <p className="font-medium">{certificate.buildingName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">4) Trading Center</p>
              <p className="font-medium">{certificate.tradingCenter}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">5) District/City</p>
              <p className="font-medium">{certificate.city}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                6) County/Municipality
              </p>
              <p className="font-medium">{certificate.county}</p>
            </div>
          </div>
        </div>

        {/* Section C */}
        <div className="space-y-4">
          <h2 className="font-semibold">
            Section C : Nature of Business Activity
          </h2>
          <div className="border rounded-lg p-4">
            <p className="font-medium">{certificate.businessActivity}</p>
          </div>
        </div>

        {/* Section D */}
        <div className="space-y-4">
          <h2 className="font-semibold">Section D : Registration Details</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-2 text-left">S.N</th>
                  <th className="p-2 text-left">Registration Type</th>
                  <th className="p-2 text-left">Effective Date of Registration</th>
                  <th className="p-2 text-left">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">1</td>
                  <td className="p-2">{certificate.regType}</td>
                  <td className="p-2">{certificate.dateReg}</td>
                  <td className="p-2">{certificate.expiryDate}</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">2</td>
                  <td className="p-2">{certificate.regType1}</td>
                  <td className="p-2">{certificate.dateReg1}</td>
                  <td className="p-2">{certificate.expiryDate1}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4 text-sm">
          <p>
            The above registration details must appear on all your supplier documents and correspondences
            with Uganda Suppliers Association.
          </p>
          <p>
            This Certificate shall remain in force until its expiry date or until it is cancelled by the Association.
            Renewal must be completed before the expiry date to maintain active status.
          </p>
        </div>

        {/* Official Representative */}
        <div className="space-y-4">
          <h2 className="font-semibold">
            Section E - Official UNSD Representative
          </h2>
          <div className="grid grid-cols-2 gap-4 border rounded-lg p-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Printed Name of Signatory
              </p>
              <p className="font-medium">{certificate.nameSignatory}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Designation of Signatory
              </p>
              <p className="font-medium">{certificate.designationSign}</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Plot 30-35, Kampala Road, KAMPALA, KAMPALA CENTRAL, Uganda.
        </div>
      </div>
    </Card>
  )
}

