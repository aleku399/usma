"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/waiver.png",
    title: "",
    subtitle: "",
    description: "",
    deadline: "",
    align: "right"
  },
  {
    image: "/meet.jpg",
    title: "At URA we shall serve you with",
    highlight: ["Patriotism", "Integrity", "Professionalism"],
    description: "at all times",
    align: "right"
  },
  {
    image: "/efris.png",
    title: "There are",
    highlight: ["no lost Receipts"],
    description: "on the EFRIS streets",
    align: "right"
  },
]

const quickLinks = [
  "Make a Payment",
  "Get a TIN",
  "File a Return",
  "EFRIS",
  "DTS",
  "Tax Incentives",
  "Get a Refund",
]

const bottomLinks = [
  { title: "Choose a Tax Agent", icon: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 7h6m-6 4h6m-6 4h6" },
  { title: "Compute Tax", icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm4 12h8m-8-4h8M8 8h8" },
  { title: "Whistle Blow", icon: "M15.5 9.5l-3-3m3 3l3-3m-3 3V4M4 21h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4L9 1H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" },
  { title: "Exchange Rates", icon: "M12 21v-2m0-4v2m0-10V5m0 4V7m8 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[600px] w-full">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className={cn(
                  "absolute inset-0 flex items-center px-4 text-white",
                  slide.align === "right" ? "justify-end" : "justify-center"
                )}>
                  <div className={cn(
                    "max-w-3xl space-y-4",
                    slide.align === "right" ? "text-right pr-8" : "text-center"
                  )}>
                    <h2 className="text-4xl font-bold md:text-5xl text-yellow-400">
                      {slide.title}{" "}
                      {slide.highlight?.map((text, i) => (
                        <span key={i} className="text-yellow-400">
                          {text}{i < slide.highlight.length - 1 ? ", " : " "}
                        </span>
                      ))}
                    </h2>
                    {slide.subtitle && (
                      <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                    )}
                    <p className="text-xl md:text-2xl">{slide.description}</p>
                    {slide.deadline && (
                      <div className="mt-8 inline-block rounded-full bg-teal-400/20 px-6 py-2 text-xl backdrop-blur-sm">
                        {slide.deadline}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Quick Links */}
      <div className="absolute bottom-28 left-0 right-0 z-20">
        <div className="w-screen ">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-lg bg-white/80 px-4  pt-4 pb-7 backdrop-blur-sm">
            {quickLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="absolute bottom-0 left-0 right-0 z-20 ">
        <div className="w-screen ">
          <div className="mb-2 ">
            <h3 className="text-xl font-medium text-white text-center">Investors Protection</h3>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg bg-black/40 p-4 backdrop-blur-sm sm:grid-cols-4">
            {bottomLinks.map((link) => (
              <Link
                key={link.title}
                href="#"
                className="flex flex-col items-center gap-2 text-center"
              >
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={link.icon}
                  />
                </svg>
                <span className="text-sm font-medium text-white">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full",
              index === selectedIndex ? "bg-yellow-400" : "bg-white/50"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

