import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Us Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3 text-gray-600">
              <p>Toll Free: 0800 117 000 / 0800 217 000</p>
              <p>
                Help:{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Click here for HELP/SUPPORT
                </Link>
              </p>
              <p>Report Tax Evasion: +256 (0)323442055</p>
              <p>Email: services@ura.go.ug</p>
              <p>WhatsApp: 0772140000</p>
              <div>
                <p className="mb-2">Headquarters Address:</p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Uganda Revenue Authority Headquarters,
                  <br />
                  Plot M193/M194, Nakawa Industrial Area
                  <br />
                  P. O. Box 7279, Kampala
                </Link>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Useful Links</h3>
            <div className="space-y-3">
              {[
                "Ministry of Finance, Planning and Economic Development",
                "The Uganda Electronic Single Window",
                "Investors Protection",
                "The East African Customs Union",
                "Uganda Clearing Industry and Forwarding Association (UCIFA)",
                "More Related Links",
              ].map((link) => (
                <div key={link} className="flex items-center">
                  <span className="mr-2 text-blue-600">›</span>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Follow Us</h3>
            <div className="space-y-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                  { Icon: MessageCircle, label: "TikTok" },
                ].map(({ Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Link>
                ))}
              </div>

              {/* WhatsApp Button */}
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Chat on WhatsApp
              </Button>

              {/* Action Buttons */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Button variant="outline">Book An Appointment</Button>
                <Button>Help</Button>
              </div>

              {/* Subscribe Form */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Subscribe for updates
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="flex-1"
                    />
                    <Button type="submit">Submit</Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="unsubscribe" />
                    <label
                      htmlFor="unsubscribe"
                      className="text-sm leading-none text-gray-600"
                    >
                      Unsubscribe from updates (Check if already subscribed)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {[
              "Terms of Use",
              "Disclaimer Notice",
              "Feedback",
              "My Bookmarks",
              "Taxpayer Obligations",
              "Taxpayers Rights",
              "Ask URA App",
              "Forum",
            ].map((item) => (
              <Link key={item} href="#" className="hover:text-blue-600">
                {item}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-center text-sm text-gray-600">
            ©2024 - Uganda Revenue Authority (URA)
          </p>
        </div>
      </div>
    </footer>
  )
}

