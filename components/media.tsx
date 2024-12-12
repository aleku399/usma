import Image from "next/image"

export default function MediaPage() {
  return (
    <div className="flex flex-col ">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[800px]">
        <Image
          src="/media.jpg"
          alt="URA Media Center"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60">
          {/* Hero Content */}
          <div className="container mx-auto flex h-full items-center px-4 py-8">
            <div className="max-w-2xl space-y-4 w-full">
              <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The URA Media Center
              </h1>
              <div className="space-y-2">
                <p className="text-lg text-white sm:text-xl md:text-2xl">
                  Welcome to the URA media center
                </p>
                <p className="text-base text-white/90 sm:text-lg">
                  Browse through all content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

