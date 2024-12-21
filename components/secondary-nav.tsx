"use client"

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = {
  Suppliers: [
    "Welcome to Supplier Portal",
    "What is supplier Portal",
    "Validation of Registration Certificate",
    "Complaints",
  ],
  "Bid Notices": ["Procurement Notices", "Disposal Notices", "Bid Opening"],
  "Contracts Awarded": ["Agreements", "Agreements History"],
  Opportunities: ["Careers", "Tenders", "Partnerships", "Programs"],

};

const categoryUrls: Record<keyof typeof navItems, string> = {
  Suppliers: "/supply-welcome",
  "Bid Notices": "/import",
  "Contracts Awarded": "/legal-policy",
  Opportunities: "/opportunities",
};

const subMenuUrls: Record<string, string> = {
  "Welcome to Supplier Portal": "/supply-welcome",
  "What is supplier Portal": "/supply-portal",
  "Validation of Registration Certificate": "/supply-validate",
  "Complaints": "/supply-complaint",
  "Procurement Notices": "/bid-notices/procurement",
  "Disposal Notices": "/bid-notices/disposal",
  "Bid Opening": "/bid-notices/opening",
  "Agreements": "/contracts/agreements",
  "Agreements History": "/contracts/history",
  "Careers": "/opportunities/careers",
  "Tenders": "/opportunities/tenders",
  "Partnerships": "/opportunities/partnerships",
  "Programs": "/opportunities/programs",
  "Reports": "/research-publications/reports",
  "Statistics": "/research-publications/statistics",
  "Papers": "/research-publications/papers",
  "Newsletters": "/research-publications/newsletters",
};

export function SecondaryNav() {
  const [mobileMenu, setMobileMenu] = React.useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1e4c9a] text-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {Object.entries(navItems).map(([category, items]) => {
              const typedCategory = category as keyof typeof categoryUrls;
              return (
                <div key={typedCategory} className="group relative">
                  <Link
                    href={categoryUrls[typedCategory]}
                    className="h-12 rounded-none border-b-2 border-transparent px-4 text-white hover:bg-blue-800 hover:text-white group-hover:border-white flex items-center"
                  >
                    {typedCategory}
                  </Link>
                  {/* Mega Menu Panel */}
                  <div className="invisible absolute left-0 top-full w-screen bg-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-4 gap-8 py-8">
                        {items.map((item) => (
                          <Link
                            key={item}
                            href={subMenuUrls[item] || "#"}
                            className="text-sm text-gray-700 hover:text-[#1e4c9a]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 h-14">
        <h1 className="text-lg font-semibold">Developing Uganda Together</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-blue-800"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <SheetHeader className="border-b px-4 py-6">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 py-4">
              {Object.entries(navItems).map(([category, items]) => (
                <div key={category} className="px-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-between font-medium"
                    onClick={() =>
                      setMobileMenu(mobileMenu === category ? null : category)
                    }
                  >
                    {category}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        mobileMenu === category ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>
                  {mobileMenu === category && (
                    <div className="mt-2 space-y-2 pl-4">
                      {items.map((item) => (
                        <Link
                          key={item}
                          href={subMenuUrls[item] || "#"}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
