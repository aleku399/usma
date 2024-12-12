import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/tower.jpg"
          alt="URA Tower"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto h-full px-4">
            <h1 className="pt-32 text-center text-5xl font-bold text-yellow-300">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Our Mandate */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">
                OUR MANDATE
              </h2>
              <p className="text-gray-700">
                To assess, collect and account for Central Government Tax Revenue
                (including Non-Tax Revenues) and to provide advice to the
                government on matters of policy relating to all revenue sources.
              </p>
            </div>

            {/* Strategic Direction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">
                STRATEGIC DIRECTION
              </h2>
              <p className="text-gray-700">
                Cultivate a taxpaying culture through the provision of reliable
                services, leadership development, and building strategic
                partnerships.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">
                MISSION
              </h2>
              <p className="text-gray-700">
                Mobilize Revenue for National Development in a Transparent and
                Efficient manner.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">
                VISION
              </h2>
              <p className="text-gray-700">
                A transformational revenue service for Uganda&apos;s economic
                independence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

