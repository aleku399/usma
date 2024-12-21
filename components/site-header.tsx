'use client';

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, MoreVertical, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/auth-context";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();


  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect to home page
  };

  return (
    <header
      className={`sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:justify-center">
          <div className="flex items-center gap-2 lg:absolute lg:left-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/coat.png"
                alt="coatOfArms"
                width={80} /* Adjust the width */
                height={80} /* Adjust the height */
                className="h-auto max-h-[60px] w-auto" /* Ensures proper sizing */
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-4">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 shadow-none"
              />
            </form>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Select Language</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Swahili</DropdownMenuItem>
                <DropdownMenuItem>Luganda</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact">
              <Button variant="ghost">Contact Us</Button>
            </Link>

            <Link href="/about">
              <Button variant="ghost">About Us</Button>
            </Link>

            <Link href="/media">
              <Button variant="ghost">
                <Bell className="h-4 w-4 mr-2" />
                Media Center
              </Button>
            </Link>

         
          </nav>

          <div className="flex items-center lg:absolute lg:right-4">
            {isLoggedIn ? (
              <Button
                variant="default"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login" className="hidden lg:block">
                <Button variant="default">Login</Button>
              </Link>
            )}

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full bg-[#FFFBE6]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/media"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Media Center
                    <Bell className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/sitemap"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Sitemap
                  </Link>
                  {isLoggedIn ? (
                    <Button
                      variant="ghost"
                      className="text-lg font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link
                      href="/login"
                      className="text-lg font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
