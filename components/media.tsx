import Image from "next/image"
// import Link from "next/link"
// import { ChevronLeft } from 'lucide-react'
// import { Button } from "@/components/ui/button"

export default function MediaPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[800px] w-full">
        <Image
          src="/media.jpg"
          alt="URA Media Center"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60">
          {/* Back Button */}
          {/* <div className="container mx-auto px-4 pt-6">
            <Button
              variant="outline"
              size="sm"
              className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div> */}

          {/* Hero Content */}
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                The URA Media Center
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-white sm:text-2xl">
                  Welcome to the URA media center
                </p>
                <p className="text-lg text-white/90">
                  Browser through all content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     
    </div>
  )
}

