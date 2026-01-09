"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Prosper Estate Architectural Shingle",
    slug: "prosper-estate-architectural-shingle",
    location: "Prosper, TX",
    service: "Asphalt Shingles",
    investment: "$28,500",
    year: "2024",
    image: "/portfolio/prosper-estate.jpg",
    excerpt: "Complete roof replacement with premium Owens Corning Duration shingles on a 3,500 sq ft estate home.",
    featured: true,
  },
  {
    id: 2,
    title: "Frisco Modern Metal Roof",
    slug: "frisco-modern-metal-roof",
    location: "Frisco, TX",
    service: "Metal Roofing",
    investment: "$75,000",
    year: "2024",
    image: "/portfolio/frisco-metal.jpg",
    excerpt: "Standing seam metal roof installation on contemporary 4,200 sq ft home with energy-efficient cool roof coating.",
    featured: true,
  },
  {
    id: 3,
    title: "McKinney Historic Restoration",
    slug: "mckinney-historic-restoration",
    location: "McKinney, TX",
    service: "Tile Roofing",
    investment: "$82,000",
    year: "2023",
    image: "/portfolio/mckinney-historic.jpg",
    excerpt: "Authentic Spanish tile roof restoration on historic 1920s home, preserving architectural integrity.",
    featured: true,
  },
  {
    id: 4,
    title: "Plano Commercial Complex",
    slug: "plano-commercial-complex",
    location: "Plano, TX",
    service: "Commercial",
    investment: "$125,000",
    year: "2024",
    image: "/portfolio/plano-commercial.jpg",
    excerpt: "TPO roofing system for 15,000 sq ft office building with 20-year warranty.",
    featured: false,
  },
  {
    id: 5,
    title: "Allen Storm Damage Recovery",
    slug: "allen-storm-damage-recovery",
    location: "Allen, TX",
    service: "Emergency Repair",
    investment: "$31,000",
    year: "2024",
    image: "/portfolio/allen-storm.jpg",
    excerpt: "Complete roof replacement after severe hail damage, working directly with insurance.",
    featured: false,
  },
  {
    id: 6,
    title: "Celina Ranch Style Upgrade",
    slug: "celina-ranch-style-upgrade",
    location: "Celina, TX",
    service: "Asphalt Shingles",
    investment: "$22,500",
    year: "2023",
    image: "/portfolio/celina-ranch.jpg",
    excerpt: "Architectural shingle installation with enhanced ventilation system on sprawling ranch home.",
    featured: false,
  },
]

const filters = ["All", "Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Commercial", "Emergency Repair"]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.service === activeFilter)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-ivory-100 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full mb-6">
              <span className="text-forest-300 font-semibold text-sm">5,000+ PROJECTS COMPLETED</span>
            </div>
            <h1 className="display-lg mb-6 px-4 drop-shadow-lg">Our Portfolio</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8 px-4 drop-shadow">
              Explore our recent projects showcasing premium craftsmanship and attention to detail
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-forest-400 transition-all">
                <div className="text-3xl font-bold text-bronze-400">5,000+</div>
                <div className="text-sm text-ivory-200">Projects Completed</div>
              </div>
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-forest-400 transition-all">
                <div className="text-3xl font-bold text-bronze-400">98%</div>
                <div className="text-sm text-ivory-200">Client Satisfaction</div>
              </div>
              <div className="bg-forest-500/10 border-2 border-forest-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-forest-400 transition-all">
                <div className="text-3xl font-bold text-bronze-400">20+</div>
                <div className="text-sm text-ivory-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-ivory-100 border-b border-charcoal-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-forest-600 text-ivory-100"
                    : "bg-ivory-50 text-charcoal-700 hover:bg-forest-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video bg-charcoal-200 relative overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-700 to-charcoal-800 text-ivory-100">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <div className="text-sm">Project Image</div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-bronze-500 text-ivory-100 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="headline-md">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-charcoal-700">{project.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-charcoal-200">
                    <div>
                      <div className="text-xs text-charcoal-500">Service</div>
                      <div className="text-sm font-semibold text-forest-600">{project.service}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-charcoal-500">Investment</div>
                      <div className="text-sm font-semibold text-charcoal-800">{project.investment}</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/portfolio/${project.slug}`}>
                      View Case Study →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal-600 text-lg">No projects found in this category.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setActiveFilter("All")}
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Join our portfolio of satisfied homeowners with a premium roofing installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/investment-guide">View Investment Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
