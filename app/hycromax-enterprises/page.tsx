import { Mail, Phone, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <Building2 className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Hycromax Zambian Enterprises Ltd
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            For detailed information about your company, please reach out to our
            committee
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Contact Our Committee
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Our committee members are ready to provide you with comprehensive
              details about Hycromax Zambian Enterprises Ltd.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Methods */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">Call our office</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Contact Committee Now
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                We typically respond within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Hycromax Zambian Enterprises Ltd - Committed to Excellence
          </p>
          <div className="flex justify-center space-x-2 text-xs text-gray-400">
            <span>Zambia</span>
            <span>•</span>
            <span>Professional Services</span>
            <span>•</span>
            <span>Trusted Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
