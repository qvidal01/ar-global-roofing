"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { trackPhoneClick, trackCTAClick } from "@/src/lib/analytics"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Investment Guide", href: "/investment-guide" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/60">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 ml-4" aria-label="AR Global Roofing - Home">
            <span className="text-xl md:text-2xl font-bold text-charcoal whitespace-nowrap">
              AR Global Roofing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-charcoal hover:text-primary-green transition-colors whitespace-nowrap px-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0 mr-4">
            <a
              href="tel:+12145551234"
              className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-primary-green transition-colors whitespace-nowrap"
              onClick={() => trackPhoneClick("header_desktop")}
              aria-label="Call (214) 555-1234"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>(214) 555-1234</span>
            </a>
            <Button variant="primary" className="px-8 py-3" asChild>
              <Link
                href="/contact"
                onClick={() => trackCTAClick("Schedule Consultation", "header_desktop")}
              >
                Schedule Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={cn(
          "lg:hidden border-t border-charcoal bg-ivory",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto px-4 py-4 space-y-2" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-base font-medium text-charcoal hover:text-primary-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:+12145551234"
              className="flex items-center space-x-2 py-2 text-base font-medium text-charcoal hover:text-primary-green transition-colors"
              onClick={() => trackPhoneClick("header_mobile")}
              aria-label="Call (214) 555-1234"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>(214) 555-1234</span>
            </a>
            <Button variant="primary" className="w-full" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
