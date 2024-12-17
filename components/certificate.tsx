'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Certificate() {
  return (
    <Card className="max-w-4xl mx-auto p-8 my-3 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 relative">
            <Image
              src="/logo.png?height=96&width=96"
              alt="URA Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="text-sm space-y-1">
            <p>Uganda Revenue Authority</p>
            <p className="text-muted-foreground">DEVELOPING UGANDA TOGETHER</p>
          </div>
        </div>
        <div className="text-right text-sm space-y-1">
          <p>For General Tax Questions</p>
          <p>call our Toll Free</p>
          <p className="font-bold">0800117000</p>
          <p>Or log onto URA web portal</p>
          <a href="http://ura.go.ug" className="text-primary hover:underline">
            http://ura.go.ug
          </a>
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold bg-muted py-2">
          Certificate of Registration
        </h1>
        <div className="flex justify-end gap-2 text-sm">
          <span>Notice DT-1112</span>
          <span>Notice Date: 22/04/2016</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <p className="text-center">
          This is to certify that taxpayer shown herein has been registered with
          Uganda Revenue Authority
        </p>

        {/* Section A */}
        <div className="space-y-4">
          <h2 className="font-semibold">Section A : Taxpayer Information</h2>
          <div className="grid grid-cols-2 gap-4 border rounded-lg p-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Taxpayer Identification Number
              </p>
              <p className="font-medium">1008904187</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Taxpayer Legal Name
              </p>
              <p className="font-medium">UNI OASIS ESTATES LIMITED</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Business Name</p>
              <p className="font-medium">UNI OASIS LIMITED</p>
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
              <p className="font-medium">PLOT 214</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">2) Street Name</p>
              <p className="font-medium">BLOCK 9</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">3) Building Name</p>
              <p className="font-medium">OASIS ESTATE</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">4) Trading Center</p>
              <p className="font-medium">KIGUMBA</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">5) District/City</p>
              <p className="font-medium">KIRYANDONGO</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                6) County/Municipality
              </p>
              <p className="font-medium">KIBANDA</p>
            </div>
          </div>
        </div>

        {/* Section C */}
        <div className="space-y-4">
          <h2 className="font-semibold">
            Section C : Nature of Business Activity
          </h2>
          <div className="border rounded-lg p-4">
            <p className="font-medium">Real estate activities</p>
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
                  <th className="p-2 text-left">Tax Type Registered for</th>
                  <th className="p-2 text-left">Effective Date of Registration</th>
                  <th className="p-2 text-left">Effective Date of Cancellation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">1</td>
                  <td className="p-2">TIN Non Individual</td>
                  <td className="p-2">22/04/2016</td>
                  <td className="p-2"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">2</td>
                  <td className="p-2">PAYE</td>
                  <td className="p-2">01/05/2016</td>
                  <td className="p-2"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">3</td>
                  <td className="p-2">Stamp Duty</td>
                  <td className="p-2">22/04/2016</td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4 text-sm">
          <p>
            The above TIN must appear on all your tax invoices and correspondences
            with Uganda Revenue Authority.
          </p>
          <p>
            Your accounting date is 30 June as per Sec 39(1) of The Income Tax Act,
            Cap 340 unless a change has been approved by the Commissioner General.
            This Certificate shall remain in force until it is cancelled.
          </p>
        </div>

        {/* Official Representative */}
        <div className="space-y-4">
          <h2 className="font-semibold">
            Section D - Official URA Representative
          </h2>
          <div className="grid grid-cols-2 gap-4 border rounded-lg p-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Printed Name of Signatory
              </p>
              <p className="font-medium">Jenipher Mukyala</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Designation of Signatory
              </p>
              <p className="font-medium">Officers Grade 1</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Plot 17-21, Old Kampala, Next To Gaddaffi Mosque, KAMPALA, KAMPALA
          SOUTH, Uganda.
        </div>
      </div>
    </Card>
  )
}

