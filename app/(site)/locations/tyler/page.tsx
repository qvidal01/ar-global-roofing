import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { MapPin, Star, Phone, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Contractor in Tyler, TX | AR Global Roofing",
  description: "Premium roofing services in Tyler, TX. 20+ years serving Tyler homeowners with asphalt shingles, metal roofing, and emergency repairs. Licensed & insured.",
}

export default function TylerLocationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-bronze-400 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold">Serving Tyler, TX</span>
            </div>
            <h1 className="display-lg mb-6">Premium Roofing Services in Tyler</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8">
              Protecting Tyler homes with premium craftsmanship and white-glove service for over 20 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+12145551234" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (214) 555-1234
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-6">Your Trusted Tyler Roofing Partner</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body-lg text-charcoal-700 leading-relaxed mb-4">
                Serving Tyler homeowners for over 20 years, AR Global Roofing understands the unique needs of this vibrant community. We're familiar with local building codes, HOA requirements, and the architectural styles that make Tyler homes distinctive.
              </p>
              <p className="text-body-lg text-charcoal-700 leading-relaxed">
                From initial consultation to final inspection, we provide the white-glove service that Tyler homeowners expect and deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Roofing Services in Tyler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Asphalt Shingle Roofing",
                  description: "Premium architectural shingles perfect for Tyler's diverse architectural styles",
                  link: "/services/asphalt-shingles",
                },
                {
                  service: "Metal Roofing Installation",
                  description: "Energy-efficient metal roofs ideal for modern Tyler homes",
                  link: "/services/metal-roofing",
                },
                {
                  service: "Emergency Roof Repair",
                  description: "24/7 storm damage response for Tyler homeowners",
                  link: "/services/emergency-repair",
                },
                {
                  service: "Roof Inspections",
                  description: "Comprehensive inspections for Tyler home purchases and insurance",
                  link: "/contact",
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="headline-md">{item.service}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-charcoal-700">{item.description}</p>
                    <Link href={item.link} className="text-forest-600 hover:text-forest-700 font-medium text-sm">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready to Protect Your Tyler Home?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Schedule your complimentary consultation with Tyler's trusted roofing experts
          </p>
          <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
