import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Home, Search, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-headline-lg text-charcoal mb-4">404</h1>
          <h2 className="text-headline-sm text-charcoal mb-4">Page Not Found</h2>
          <p className="text-body-lg text-charcoal mb-8">
            We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="border-t border-charcoal pt-8">
          <h3 className="headline-md text-charcoal mb-4">Popular Pages</h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Link href="/services" className="text-primary-green hover:text-primary-green font-medium">
              Our Services
            </Link>
            <Link href="/portfolio" className="text-primary-green hover:text-primary-green font-medium">
              Portfolio
            </Link>
            <Link href="/process" className="text-primary-green hover:text-primary-green font-medium">
              Our Process
            </Link>
            <Link href="/investment-guide" className="text-primary-green hover:text-primary-green font-medium">
              Investment Guide
            </Link>
            <Link href="/about" className="text-primary-green hover:text-primary-green font-medium">
              About Us
            </Link>
            <Link href="/reviews" className="text-primary-green hover:text-primary-green font-medium">
              Customer Reviews
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-charcoal rounded-lg text-ivory">
          <h3 className="headline-md mb-2">Need Immediate Assistance?</h3>
          <p className="text-ivory mb-4">Call us anytime for roofing emergencies</p>
          <a
            href="tel:+12145551234"
            className="text-gold hover:text-gold text-xl font-semibold"
          >
            (214) 555-1234
          </a>
        </div>
      </div>
    </div>
  )
}
