import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { MapPin, Star, Phone, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Contractor in Prosper, TX | AR Global Roofing",
  description: "Premium roofing services in Prosper, TX. 20+ years serving Prosper homeowners with asphalt shingles, metal roofing, and emergency repairs. Licensed & insured.",
}

export default function ProsperLocationPage() {
  const cityName = "Prosper"
  const state = "TX"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-bronze-400 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold">Serving {cityName}, {state}</span>
            </div>
            <h1 className="display-lg mb-6">Premium Roofing Services in {cityName}</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8">
              Protecting {cityName} homes with premium craftsmanship and white-glove service for over 20 years
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
            <h2 className="headline-xl text-charcoal-800 mb-6">Your Trusted {cityName} Roofing Partner</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body-lg text-charcoal-700 leading-relaxed mb-4">
                As one of the fastest-growing communities in North Texas, {cityName} deserves roofing contractors who understand the area's unique needs. From the upscale neighborhoods off Coit Road to the newer developments near Frontier Parkway, we've been protecting {cityName} homes since the community began its remarkable growth.
              </p>
              <p className="text-body-lg text-charcoal-700 leading-relaxed">
                We understand {cityName}'s architectural standards, HOA requirements, and the importance of maintaining property values in this premium community. Our team is familiar with local building codes and works seamlessly with {cityName} inspectors to ensure every project exceeds expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-bronze-500 mb-2" />
                  <CardTitle>500+ {cityName} Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Hundreds of satisfied homeowners throughout {cityName}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-forest-500 mb-2" />
                  <CardTitle>HOA Approved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Experienced with all {cityName} HOA requirements
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-forest-500 mb-2" />
                  <CardTitle>Local Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Fast response for {cityName} emergency repairs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Roofing Services in {cityName}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Asphalt Shingle Roofing",
                  description: "Premium architectural shingles perfect for {cityName}'s traditional and contemporary homes",
                  link: "/services/asphalt-shingles",
                },
                {
                  service: "Metal Roofing Installation",
                  description: "Energy-efficient metal roofs ideal for {cityName}'s modern estates",
                  link: "/services/metal-roofing",
                },
                {
                  service: "Emergency Roof Repair",
                  description: "24/7 storm damage response for {cityName} homeowners",
                  link: "/services/emergency-repair",
                },
                {
                  service: "Roof Inspections",
                  description: "Comprehensive inspections for {cityName} home purchases and insurance claims",
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

      {/* Local Knowledge */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Why Choose AR Global in {cityName}?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Understanding {cityName}'s Climate",
                  description: "We account for North Texas heat, occasional hail, and wind patterns specific to this area when recommending materials and installation techniques.",
                },
                {
                  title: "HOA Expertise",
                  description: "Familiar with architectural review boards throughout {cityName}. We handle all documentation and ensure compliance with community guidelines.",
                },
                {
                  title: "Property Value Protection",
                  description: "{cityName} home values demand premium roofing. We help protect and enhance your investment with quality materials and expert installation.",
                },
                {
                  title: "Local References Available",
                  description: "We can provide references from your {cityName} neighbors who've experienced the AR Global difference firsthand.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-forest-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="headline-md text-charcoal-800 mb-2">{item.title.replace("{cityName}", cityName)}</h3>
                    <p className="text-charcoal-600">{item.description.replace(/{cityName}/g, cityName)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-charcoal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-ivory-100 mb-12 text-center">{cityName} Homeowners Love AR Global</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "AR Global handled our HOA requirements flawlessly and delivered a stunning roof that perfectly matches our home's style.",
                  author: "Jennifer M.",
                  neighborhood: "Whitley Place",
                },
                {
                  quote: "After the hailstorm, they responded immediately and worked directly with our insurance. Couldn't have asked for better service.",
                  author: "Michael R.",
                  neighborhood: "Lakes of La Cima",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-charcoal-700 border-charcoal-600">
                  <CardContent className="pt-6">
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-bronze-400 fill-bronze-400" />
                      ))}
                    </div>
                    <p className="text-ivory-200 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-ivory-300">{testimonial.neighborhood}, {cityName}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline-xl text-charcoal-800 mb-6">Serving All of {cityName}</h2>
            <p className="text-body-lg text-charcoal-700 mb-8">
              We provide roofing services throughout {cityName}, including:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                "Whitley Place",
                "Lakes of La Cima",
                "Frontier Parkway",
                "Coit Road Area",
                "Star Trail",
                "Gentle Creek",
              ].map((neighborhood, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-charcoal-700">
                  <MapPin className="h-4 w-4 text-forest-500" />
                  <span>{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready to Protect Your {cityName} Home?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Schedule your complimentary consultation with {cityName}'s trusted roofing experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">View {cityName} Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
