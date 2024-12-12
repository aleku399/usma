import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-blue-600">
      <Link href="/" className="hover:underline">Home</Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/portal" className="hover:underline">Portal</Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-500">Login Page</span>
    </nav>
  )
}

