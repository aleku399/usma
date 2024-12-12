import Image from "next/image"
import Link from "next/link"


const taxServices = [
  {
    title: "Get a TIN",
    icon: "💳",
    href: "#",
  },
  {
    title: "Make a Payment",
    icon: "💰",
    href: "#",
  },
  {
    title: "Tax Exemption",
    icon: "📋",
    href: "#",
  },
  {
    title: "EFRIS",
    icon: "📊",
    href: "#",
  },
  {
    title: "Digital Tax Stamps",
    icon: "🏷️",
    href: "#",
  },
]

export default function TaxPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/tax.jpg"
          alt="Tax Services"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50">
          {/* Back Button */}
          

          {/* Hero Content */}
          <div className="container mx-auto flex h-full items-center px-4">
            <h1 className="text-4xl font-bold text-yellow-400 sm:text-5xl md:text-6xl">
              Domestic Taxes
            </h1>
          </div>
        </div>
      </div>

      {/* Tax Services Navigation */}
      <div className="sticky top-0 bg-blue-50 shadow-md">
        <nav className="container mx-auto">
          <ul className="grid grid-cols-2 gap-4 p-4 md:flex md:items-center md:justify-between md:gap-8">
            {taxServices.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="flex flex-col items-center gap-2 text-center transition-colors hover:text-blue-600"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-sm font-medium">{service.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* Add your main content here */}
      </div>
    </div>
  )
}

