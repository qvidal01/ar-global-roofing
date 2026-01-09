import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Shield, Award, Users, Heart, CheckCircle, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AR Global Roofing - Our Story | Premium Roofing Services",
  description: "Learn about AR Global Roofing's 20+ year legacy of excellence in premium roofing. Discover our values, certifications, and commitment to generational quality.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-ivory-100 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full mb-6">
              <span className="text-forest-300 font-semibold text-sm">20+ YEARS OF EXCELLENCE</span>
            </div>
            <h1 className="display-lg mb-6 drop-shadow-lg">Our Story</h1>
            <p className="headline-md font-normal text-ivory-200 drop-shadow">
              For over 20 years, we've been protecting North Texas homes with uncompromising craftsmanship and white-glove service
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="headline-xl text-charcoal-800 mb-6">The AR Global Difference</h2>
              <div className="space-y-4 text-body-lg text-charcoal-700 leading-relaxed">
                <p>
                  AR Global Roofing was founded on a simple principle: homeowners deserve better than the commodity approach that dominates the roofing industry. Too often, roofing is treated as a race to the bottom on price, with quality, communication, and customer experience suffering as a result.
                </p>
                <p>
                  We saw an opportunity to serve a different kind of homeowner—one who values peace of mind over the lowest bid, who understands that true quality is an investment in their home's future, and who expects the same level of professionalism from their roofer as they do from their architect or interior designer.
                </p>
                <p>
                  Over two decades later, that vision has become our reality. We've built a reputation as North Texas's premier roofing craftsmen, serving discerning homeowners who refuse to compromise on quality.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-ivory-50 p-8 rounded-lg">
                <h3 className="headline-md text-charcoal-800 mb-4">Our Mission</h3>
                <p className="text-charcoal-700">
                  To provide the last roof your home will ever need, backed by meticulous craftsmanship, transparent communication, and a generational warranty you can trust.
                </p>
              </div>
              <div className="bg-ivory-50 p-8 rounded-lg">
                <h3 className="headline-md text-charcoal-800 mb-4">Our Vision</h3>
                <p className="text-charcoal-700">
                  To redefine what homeowners expect from a roofing company by delivering consultative expertise and white-glove service at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="display-md text-charcoal-800 mb-4">Our Values</h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every roof we install
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Uncompromising Quality",
                description: "We use only premium materials and employ master craftsmen who take pride in their work. Every installation is built to last generations.",
              },
              {
                icon: Heart,
                title: "Customer-First Service",
                description: "Your peace of mind is our priority. We provide transparent communication, detailed proposals, and white-glove service from consultation to completion.",
              },
              {
                icon: Target,
                title: "Attention to Detail",
                description: "From magnetic sweeps to daily check-ins, we obsess over the details that other contractors overlook.",
              },
              {
                icon: Users,
                title: "Experienced Team",
                description: "No subcontractors. Our crews have been with us for years, ensuring consistent quality and professionalism on every project.",
              },
              {
                icon: Award,
                title: "Continuous Excellence",
                description: "We invest in ongoing training and certifications to stay at the forefront of roofing technology and best practices.",
              },
              {
                icon: CheckCircle,
                title: "Integrity Always",
                description: "We price fairly, communicate honestly, and stand behind our work with comprehensive warranties.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-forest-100 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle className="text-charcoal-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-md text-charcoal-800 mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                {
                  year: "2003",
                  title: "AR Global Roofing Founded",
                  description: "Started with a vision to bring premium craftsmanship to North Texas homeowners.",
                },
                {
                  year: "2008",
                  title: "Expanded Service Area",
                  description: "Grew to serve Prosper, Frisco, Plano, McKinney, Allen, and surrounding communities.",
                },
                {
                  year: "2012",
                  title: "Achieved Elite Certifications",
                  description: "Became certified installers for Owens Corning, CertainTeed, and Atlas.",
                },
                {
                  year: "2018",
                  title: "5,000th Project Milestone",
                  description: "Celebrated completing 5,000 premium roofing installations with 98% client satisfaction.",
                },
                {
                  year: "2023",
                  title: "20 Years of Excellence",
                  description: "Two decades of protecting North Texas homes with generational quality.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0 w-24">
                    <div className="headline-lg text-forest-600 font-bold">{milestone.year}</div>
                  </div>
                  <div className="flex-grow border-l-2 border-forest-300 pl-8 pb-8">
                    <h3 className="headline-md text-charcoal-800 mb-2">{milestone.title}</h3>
                    <p className="text-charcoal-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-charcoal-800 text-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md mb-6">Certifications & Partnerships</h2>
            <p className="text-body-lg text-ivory-200 mb-12">
              Our elite certifications ensure you receive the highest quality materials and workmanship
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {["Owens Corning", "CertainTeed", "Atlas Roofing", "BBB A+ Rating"].map((cert, index) => (
                <div key={index} className="bg-charcoal-700 p-6 rounded-lg">
                  <div className="text-bronze-400 font-semibold">{cert}</div>
                  <div className="text-sm text-ivory-300 mt-2">Certified Partner</div>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/about/certifications">View All Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Experience the AR Global Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Join thousands of satisfied homeowners who chose quality, transparency, and peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
