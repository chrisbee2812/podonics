"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="icon-small.png" className="h-8 w-auto text-primary" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <img src="icon-small.png" className="h-8 w-auto text-primary" />
                </Link>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "transition-colors hover:text-foreground/80",
                          pathname === link.href ? "text-foreground" : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center">
             <Link href="/" className="flex items-center space-x-2 md:hidden">
                <img src="icon-small.png" className="h-8 w-auto text-primary" />
            </Link>
          </div>
          
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if needed in the future */}
          </div>

          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
