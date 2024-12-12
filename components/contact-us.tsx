import Link from "next/link"
import { Phone, Mail, Globe, Twitter, Facebook, MessageSquare } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Tabs defaultValue="support" className="space-y-6 ">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2">
          <TabsTrigger 
            value="support" 
            className="text-lg whitespace-normal h-auto px-4 py-2 data-[state=active]:bg-blue-100"
          >
            For Support Or To Report Or Whistleblow
          </TabsTrigger>
          <TabsTrigger 
            value="find" 
            className="text-lg whitespace-normal h-auto px-4 py-2 data-[state=active]:bg-blue-100"
          >
            Find Us
          </TabsTrigger>
        </TabsList>
        <TabsContent value="support" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Write to us for support */}
            <Card className="bg-white">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Write to us for support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Touchpoint</p>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Go to Touchpoint
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <a href="mailto:services@ura.go.ug" className="text-blue-600 hover:underline">
                        services@ura.go.ug
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/+256772140000" className="text-blue-600 hover:underline">
                        +256772140000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Twitter className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Twitter</p>
                      <Link href="https://twitter.com/URUganda" className="text-blue-600 hover:underline">
                        @URUganda
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Facebook</p>
                      <Link href="https://facebook.com/URApge" className="text-blue-600 hover:underline">
                        @URApge
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call us for support */}
            <Card className="bg-white">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Call us for support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Toll-free</p>
                      <p className="text-blue-600">0800217000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Non-Toll-free</p>
                      <p className="text-blue-600">0323444602 / 0323444603</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Or:</p>
                    <p className="text-blue-600">0417444602 / 0417444603</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call us to report/whistleblow */}
            <Card className="bg-white">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Call us to report/whistleblow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Tax Evasion</p>
                      <p className="text-blue-600">0323442055</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <p className="font-medium">Report Staff</p>
                      <p className="text-blue-600">0323443033</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="find" className="space-y-6">
          {/* Add your Find Us content here */}
          <Card className="bg-white">
            <CardContent className="pt-6">
              <p>Location information Loading.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

