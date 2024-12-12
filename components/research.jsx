'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { categories } from "../data/categories"
import { CategoryCard } from "./category-card"

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/stud.jpg')",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Back Button */}
        <Link href="/" className="absolute top-4 left-4 z-10">
          <Button variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        {/* Hero Title */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-500">
          Research & Publications
        </h1>
      </div>

      {/* Search Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Type here to search"
              className="w-full h-12 pl-4 pr-12 rounded-lg shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              className="absolute right-0 top-0 h-12 px-6"
              variant="ghost"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex-1 bg-gradient-to-b from-gray-100 to-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

