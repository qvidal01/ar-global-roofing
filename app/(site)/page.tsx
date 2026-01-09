import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Shield, Clock, Award, Users, CheckCircle, Star, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal-700 to-forest-900 text-ivory-100 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/roofer.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

        {/* Trust Badge */}
        <div className="absolute top-24 right-8 z-20 hidden lg:block">
          <div className="bg-forest-500/20 backdrop-blur-sm border-2 border-forest-400 rounded-full p-6 text-center">
            <div className="text-3xl font-bold text-forest-300">20+</div>
            <div className="text-xs text-ivory-100">Years</div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 z-20 text-center relative">
          {/* Badge */}
          <div className="inline-block mb-6 px-6 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full">
            <span className="text-forest-300 font-semibold">★ 4.9/5 from 250+ Reviews</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-ivory px-4 drop-shadow-lg">
            The Last Roof Your Home Will Ever Need
          </h1>
          <p className="headline-md mb-8 text-ivory max-w-3xl mx-auto font-normal px-4 drop-shadow">
            Premium roofing craftsmanship for discerning homeowners who value peace of mind and generational quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-forest-500 hover:bg-forest-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:text-white shadow-lg"
              asChild
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-ivory-100">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-forest-400" />
              <span>(214) 555-1234</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-forest-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-forest-400" />
              <span>A+ BBB Rating</span>
            </div>
          </div>

          <div className="mt-16">
            <div className="inline-block animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-forest-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Statement */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-headline-sm text-charcoal">The Typical Roofing Experience</h2>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Competing on price, cutting corners on quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Unreliable communication and missed deadlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Subcontracted crews with varying skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Hidden costs and surprise charges</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-headline-sm text-primary-green">The AR Global Difference</h2>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-green mr-2 h-5 w-5 mt-0.5" />
                  <span>Premium materials and meticulous craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>White-glove service and transparent communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>Our own experienced, certified crews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-transparent to-bronze-50 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-forest-100 rounded-full mb-4">
              <span className="text-forest-700 font-semibold text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-headline-md text-charcoal mb-4">The AR Global Advantage</h2>
            <p className="text-lg text-charcoal leading-relaxed">
              We don't just install roofs—we provide peace of mind through unmatched quality and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Lifetime Warranty",
                description: "Industry-leading warranty coverage on materials and workmanship",
                color: "forest"
              },
              {
                icon: Award,
                title: "Premium Materials",
                description: "Only the highest-grade roofing systems from top manufacturers",
                color: "bronze"
              },
              {
                icon: Users,
                title: "Expert Craftsmen",
                description: "Factory-certified installers with 20+ years of experience",
                color: "sage"
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "Projects completed on schedule with transparent communication",
                color: "forest"
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className={`inline-flex p-6 bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-200 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg group-hover:shadow-2xl`}>
                  <benefit.icon className={`h-12 w-12 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-forest-700 transition-colors">{benefit.title}</h3>
                <p className="text-charcoal-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-ivory via-forest-50 to-ivory relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-forest-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bronze-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 max-w-4xl mx-auto px-4">
            <div className="inline-block px-4 py-2 bg-forest-100 rounded-full mb-4">
              <span className="text-forest-700 font-semibold text-sm">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-headline-md text-charcoal mb-4">Our Roofing Solutions</h2>
            <p className="text-lg text-charcoal leading-relaxed">
              From residential to commercial, we provide comprehensive roofing solutions tailored to your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Asphalt Shingles",
                description: "Premium architectural shingles with superior wind resistance and longevity",
                icon: Shield,
                color: "forest",
                badge: "Most Popular"
              },
              {
                title: "Metal Roofing",
                description: "Energy-efficient metal systems designed for Texas heat and severe weather",
                icon: Award,
                color: "bronze",
                badge: "Energy Star"
              },
              {
                title: "Tile Roofing",
                description: "Elegant tile installations that complement Mediterranean and Spanish architecture",
                icon: Users,
                color: "sage",
                badge: "Lifetime"
              },
              {
                title: "Emergency Repair",
                description: "24/7 emergency response for storm damage and urgent roofing issues",
                icon: Clock,
                color: "forest",
                badge: "24/7 Service"
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-forest-300 group relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <CardHeader className="relative z-10">
                  {/* Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs px-2 py-1 bg-${service.color}-100 text-${service.color}-700 rounded-full font-semibold`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon with colored background */}
                  <div className={`inline-flex p-3 bg-${service.color}-100 rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-10 w-10 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="group-hover:text-forest-700 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="mb-4 text-charcoal-600">{service.description}</CardDescription>
                  <Link href="/services" className="text-forest-600 hover:text-forest-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span>→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-forest-500 hover:bg-forest-600 text-white shadow-lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-ivory overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-forest-400 transition-colors">
                <div className="text-headline-sm text-bronze-400 mb-2 group-hover:text-bronze-300 transition-colors">20+</div>
                <div className="text-ivory">Years in Business</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-forest-400 transition-colors">
                <div className="text-headline-sm text-bronze-400 mb-2 group-hover:text-bronze-300 transition-colors">5,000+</div>
                <div className="text-ivory">Projects Completed</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-forest-400 transition-colors">
                <div className="text-headline-sm text-bronze-400 mb-2 group-hover:text-bronze-300 transition-colors">98%</div>
                <div className="text-ivory">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Featured Reviews */}
          <div className="text-center mb-12">
            <h2 className="text-headline-md text-ivory mb-4">What Our Clients Say</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-ivory">Rated 4.9/5 from 250+ reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Jennifer M.",
                location: "Prosper, TX",
                review: "AR Global transformed our dated roof into a stunning architectural masterpiece. Their attention to detail and professionalism exceeded all expectations.",
              },
              {
                name: "Michael R.",
                location: "Frisco, TX",
                review: "After researching multiple companies, AR Global was the clear choice. They delivered premium quality with transparent pricing and zero surprises.",
              },
              {
                name: "Sarah K.",
                location: "Plano, TX",
                review: "The white-glove service was evident from day one. Our project manager kept us informed every step of the way. Truly a world-class experience.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-charcoal border-charcoal text-ivory">
                <CardHeader>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <CardTitle className="text-ivory">{testimonial.name}</CardTitle>
                  <CardDescription className="text-ivory">{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ivory">{testimonial.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 via-forest-500 to-teal-500 text-ivory overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-10 left-10 opacity-10">
          <Shield className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Award className="w-32 h-32 text-white" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-semibold text-sm">🎯 LIMITED TIME OFFER</span>
          </div>

          <h2 className="text-headline-md mb-6 drop-shadow-lg">Ready to Protect Your Investment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal drop-shadow">
            Schedule a complimentary consultation and discover why discerning homeowners choose AR Global
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-ivory-100">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span>Free Roof Inspection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span>No-Obligation Quote</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span>Same-Day Response</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-forest-700 hover:bg-ivory-100 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-bold"
              asChild
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <a
              href="tel:+12145551234"
              className="flex items-center space-x-2 text-white hover:text-ivory-100 transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-white/30"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">(214) 555-1234</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-ivory-100">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span>A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>5,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
