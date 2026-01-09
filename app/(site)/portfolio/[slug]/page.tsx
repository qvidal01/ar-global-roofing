import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { CheckCircle, Home, Calendar, DollarSign, Award } from "lucide-react"

// This would come from your CMS in production
const projects: Record<string, any> = {
  "prosper-estate-architectural-shingle": {
    title: "Prosper Estate Architectural Shingle",
    location: "Prosper, TX",
    year: "2024",
    service: "Asphalt Shingle Installation",
    investment: "$28,500",
    timeline: "2 days",
    homeSize: "3,500 sq ft",
    challenge: "The homeowners wanted to upgrade from basic 3-tab shingles to premium architectural shingles while matching their home's elegant colonial architecture. The existing roof had moderate hail damage and was nearing end-of-life at 22 years old.",
    solution: "We installed Owens Corning Duration shingles in Estate Gray, providing superior wind and impact resistance with a dimensional appearance that complements the home's traditional style. The project included complete tear-off, synthetic underlayment upgrade, and enhanced ridge ventilation.",
    results: [
      "130 MPH wind resistance (up from 60 MPH)",
      "Class 4 impact rating for hail protection",
      "50-year warranty vs. 20-year on previous roof",
      "Improved energy efficiency with reflective shingles",
      "Insurance premium discount of 18%",
      "Appraised home value increase of $15,000",
    ],
    testimonial: {
      quote: "AR Global exceeded our expectations in every way. From the detailed proposal with 3D renderings to the meticulous installation and cleanup, everything was handled professionally. Our new roof looks stunning and we have complete peace of mind knowing it's built to last.",
      author: "Jennifer & Michael T.",
      location: "Prosper, TX",
    },
    details: {
      materials: "Owens Corning Duration - Estate Gray architectural shingles",
      underlayment: "Synthetic underlayment with ice & water barrier",
      ventilation: "Ridge vent system with upgraded intake vents",
      warranty: "50-year manufacturer + 10-year workmanship",
    },
  },
  "frisco-modern-metal-roof": {
    title: "Frisco Modern Metal Roof",
    location: "Frisco, TX",
    year: "2024",
    service: "Metal Roofing Installation",
    investment: "$75,000",
    timeline: "4 days",
    homeSize: "4,200 sq ft",
    challenge: "Modern contemporary home requiring energy-efficient roofing solution that matched the home's clean architectural lines. Previous asphalt roof was only 15 years old but showing premature aging from Texas heat.",
    solution: "Standing seam metal roof in Charcoal Gray with Energy Star cool roof coating. The concealed fastener system provides sleek modern appearance while delivering maximum energy efficiency and durability.",
    results: [
      "40% reduction in cooling costs",
      "Lifetime material durability",
      "Zero maintenance required",
      "Contemporary aesthetic perfectly matched",
      "Increased home value by $45,000",
      "50-year paint warranty",
    ],
    testimonial: {
      quote: "The transformation is incredible. Our cooling bills dropped immediately, and the modern look perfectly complements our home's design. AR Global's expertise with metal roofing was evident throughout the entire process.",
      author: "David & Sarah K.",
      location: "Frisco, TX",
    },
    details: {
      materials: "24-gauge standing seam metal panels with Kynar 500 finish",
      underlayment: "High-temperature synthetic underlayment",
      ventilation: "Continuous ridge ventilation with metal closure",
      warranty: "50-year paint + lifetime material perforation",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-ivory-200 hover:text-ivory-100 mb-6 text-sm"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="display-lg mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-ivory-200">
              <span className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {project.investment}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-charcoal-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[21/9] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">📷</div>
                <div>Project Hero Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-forest-600 mb-1">{project.homeSize}</div>
                  <div className="text-sm text-charcoal-600">Home Size</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-forest-600 mb-1">{project.timeline}</div>
                  <div className="text-sm text-charcoal-600">Timeline</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-forest-600 mb-1">{project.investment}</div>
                  <div className="text-sm text-charcoal-600">Investment</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-forest-600 mx-auto mb-1" />
                  <div className="text-sm text-charcoal-600">Premium Quality</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="headline-xl text-charcoal-800 mb-4">The Challenge</h2>
                <p className="text-body-lg text-charcoal-700 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="headline-xl text-charcoal-800 mb-4">The AR Global Solution</h2>
                <p className="text-body-lg text-charcoal-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8 text-center">Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-700 to-charcoal-600 rounded-lg flex items-center justify-center text-ivory-100 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <div>Before Image</div>
                  </div>
                </div>
                <p className="text-center text-sm text-charcoal-600">Before: Original roof condition</p>
              </div>
              <div>
                <div className="aspect-[4/3] bg-gradient-to-br from-forest-700 to-forest-600 rounded-lg flex items-center justify-center text-ivory-100 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <div>After Image</div>
                  </div>
                </div>
                <p className="text-center text-sm text-charcoal-600">After: AR Global installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Results & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-700">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-charcoal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="headline-md font-normal text-ivory-200 mb-8">
              {project.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold text-white">{project.testimonial.author}</div>
              <div className="text-sm text-ivory-300">{project.testimonial.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-800 mb-2">Materials</h3>
                <p className="text-charcoal-700">{project.details.materials}</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-800 mb-2">Underlayment</h3>
                <p className="text-charcoal-700">{project.details.underlayment}</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-800 mb-2">Ventilation</h3>
                <p className="text-charcoal-700">{project.details.ventilation}</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-800 mb-2">Warranty</h3>
                <p className="text-charcoal-700">{project.details.warranty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8 text-center">More Projects</h2>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready for Your Premium Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Schedule a complimentary consultation and see how we can transform your home
          </p>
          <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
