import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Shield, Zap, Home, Factory, Wrench, AlertCircle, Sun, Droplet } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Services in North Texas | AR Global Roofing",
  description: "Premium roofing services including asphalt shingles, metal roofing, tile installation, roof coating, commercial roofing, and emergency repairs. Serving North Texas.",
}

const services = [
  {
    title: "Asphalt Shingle Roofing",
    slug: "asphalt-shingles",
    icon: Shield,
    description: "Premium architectural shingles with superior wind resistance and longevity. The most popular choice for North Texas homes.",
    features: ["30-50 year warranty", "130+ MPH wind resistance", "Wide style selection", "Energy-efficient options"],
    investmentRange: "$15K - $35K",
  },
  {
    title: "Metal Roofing Systems",
    slug: "metal-roofing",
    icon: Zap,
    description: "Energy-efficient metal roofing designed for Texas heat and severe weather. Lifetime durability with modern aesthetics.",
    features: ["50+ year lifespan", "Energy Star certified", "Hail resistant", "Lightning safe"],
    investmentRange: "$40K - $100K+",
  },
  {
    title: "Tile Roofing Installation",
    slug: "tile-roofing",
    icon: Home,
    description: "Elegant tile installations that complement Mediterranean and Spanish architecture with unmatched durability.",
    features: ["Lifetime material warranty", "Fire resistant", "Low maintenance", "Classic aesthetics"],
    investmentRange: "$45K - $100K+",
  },
  {
    title: "Roof Coating & Restoration",
    slug: "roof-coating",
    icon: Droplet,
    description: "Extend your roof's life by 10-20 years with our premium coating systems. Cost-effective alternative to replacement.",
    features: ["10-20 year extension", "Energy savings", "Leak prevention", "UV protection"],
    investmentRange: "$8K - $20K",
  },
  {
    title: "Commercial Roofing",
    slug: "commercial",
    icon: Factory,
    description: "Low-slope and flat roofing systems for commercial properties. TPO, EPDM, and modified bitumen installations.",
    features: ["Minimal downtime", "Warranty options", "Energy efficient", "Code compliant"],
    investmentRange: "Custom quote",
  },
  {
    title: "Emergency Roof Repair",
    slug: "emergency-repair",
    icon: AlertCircle,
    description: "24/7 emergency response for storm damage, leaks, and urgent roofing issues. Fast, reliable service when you need it most.",
    features: ["24/7 availability", "Rapid response", "Insurance assistance", "Temporary protection"],
    investmentRange: "Varies",
  },
  {
    title: "Solar-Ready Roofing",
    slug: "solar-ready",
    icon: Sun,
    description: "Future-proof your roof with solar panel-ready installation. Proper structure and flashing for solar integration.",
    features: ["Solar compatible", "Structural analysis", "Future expansion", "Energy optimization"],
    investmentRange: "Add $2K - $5K",
  },
  {
    title: "Residential Roofing",
    slug: "residential",
    icon: Home,
    description: "Comprehensive residential roofing solutions tailored to your home's architecture, style, and budget.",
    features: ["Free inspection", "Transparent pricing", "Lifetime support", "Warranty transfer"],
    investmentRange: "$15K - $100K+",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full mb-6">
              <span className="text-white font-semibold drop-shadow text-sm">8 PREMIUM SERVICES</span>
            </div>
            <h1 className="display-lg mb-6 px-4 drop-shadow-lg">Premium Roofing Services</h1>
            <p className="headline-md font-normal text-white mb-8 px-4 drop-shadow">
              From residential to commercial, we provide comprehensive roofing solutions backed by 20+ years of excellence
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-forest-500 hover:bg-forest-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              asChild
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-ivory via-forest-50 to-ivory relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-forest-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bronze-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-forest-300 group relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <CardHeader className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <service.icon className="h-7 w-7 text-forest-600" />
                  </div>
                  <CardTitle className="headline-md group-hover:text-forest-700 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-charcoal">
                    Investment: <span className="font-semibold text-forest-600 group-hover:text-forest-700">{service.investmentRange}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-sm text-charcoal-700">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-charcoal">
                        <div className="h-2 w-2 rounded-full bg-forest-500 group-hover:bg-forest-600 transition-colors" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 border-forest-300 text-forest-700 hover:bg-forest-500 hover:text-white transition-all group-hover:shadow-lg"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AR Global */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-md text-center text-charcoal mb-12">Why Choose AR Global?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Premium Materials Only",
                  description: "We exclusively use top-tier roofing materials from Owens Corning, CertainTeed, and Atlas with industry-leading warranties.",
                },
                {
                  title: "Experienced Crews",
                  description: "No subcontractors. Our certified crews have been with us for years, ensuring consistent quality on every project.",
                },
                {
                  title: "Transparent Pricing",
                  description: "Detailed proposals with itemized costs. No hidden fees, no surprises—just honest pricing from start to finish.",
                },
                {
                  title: "Lifetime Support",
                  description: "Annual courtesy inspections, storm damage assessments, and priority emergency service for as long as you own your home.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-green flex items-center justify-center text-ivory font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="headline-md text-charcoal mb-2">{item.title}</h3>
                    <p className="text-charcoal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-ivory relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full mb-6">
            <span className="text-white font-semibold drop-shadow text-sm">7-PHASE PROCESS</span>
          </div>
          <h2 className="text-headline-md mb-6 drop-shadow-lg">Our White-Glove Process</h2>
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto drop-shadow">
            Every project follows our proven 7-phase process designed to deliver exceptional results with zero stress
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-6xl mx-auto mb-12">
            {[
              "Discovery",
              "Proposal",
              "Planning",
              "Installation",
              "Quality Check",
              "Post-Care",
              "Partnership",
            ].map((phase, index) => (
              <div key={index} className="bg-forest-500/10 border-2 border-forest-500/30 p-4 rounded-xl backdrop-blur-sm hover:border-forest-400 hover:scale-105 transition-all group">
                <div className="text-bronze-400 font-bold text-lg mb-2 group-hover:text-bronze-300 transition-colors">{index + 1}</div>
                <div className="text-sm text-white drop-shadow-lg">{phase}</div>
              </div>
            ))}
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:text-white shadow-lg"
            asChild
          >
            <Link href="/process">View Detailed Process</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 via-forest-500 to-teal-500 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-semibold text-sm">🎯 FREE CONSULTATION</span>
          </div>

          <h2 className="text-headline-md mb-6 drop-shadow-lg">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal drop-shadow">
            Schedule your complimentary consultation and receive a detailed proposal within 3 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-forest-700 hover:bg-ivory-100 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-bold"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:text-white shadow-lg"
              asChild
            >
              <Link href="/investment-guide">View Investment Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
