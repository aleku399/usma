import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="mb-3">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/tower.jpg"
          alt="Database Servers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70">
          <div className="container mx-auto h-full px-4">
            <h1 className="pt-32 text-center text-5xl font-bold text-white">
              ABOUT UNSD
            </h1>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Our Purpose */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                OUR PURPOSE
              </h2>
              <p className="text-gray-700">
                To maintain a comprehensive and up-to-date database of qualified suppliers 
                in Uganda, facilitating efficient procurement processes for both public and 
                private sector entities.
              </p>
            </div>

            {/* Key Objectives */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                KEY OBJECTIVES
              </h2>
              <p className="text-gray-700">
                Streamline supplier registration, enhance transparency in procurement, 
                promote fair competition among suppliers, and support the growth of 
                local businesses through increased visibility and opportunities.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                MISSION
              </h2>
              <p className="text-gray-700">
                To create a robust and reliable platform that connects qualified suppliers 
                with potential buyers, fostering economic growth and development in Uganda.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                VISION
              </h2>
              <p className="text-gray-700">
                To be the premier centralized resource for supplier information in Uganda, 
                driving efficiency, transparency, and innovation in the procurement landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

