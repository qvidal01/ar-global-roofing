"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Search, FileText, Calendar, Hammer, CheckCircle, Heart, Infinity } from "lucide-react"

const phases = [
  {
    number: 1,
    title: "Discovery Consultation",
    icon: Search,
    timeline: "Week 1",
    clientTime: "1-hour meeting",
    whatHappens: "Comprehensive roof and attic inspection using drone technology, review of existing documentation, discussion of your goals and concerns.",
    deliverable: "Detailed inspection report with photos and recommendations",
    color: "primary-green",
  },
  {
    number: 2,
    title: "Transparent Proposal",
    icon: FileText,
    timeline: "Within 3 Days",
    clientTime: "1-hour proposal review",
    whatHappens: "Itemized cost breakdown, material samples presentation, 3D rendering of your home with selected materials, warranty explanation.",
    deliverable: "Complete written proposal with zero hidden fees",
    color: "gold",
  },
  {
    number: 3,
    title: "Pre-Construction Planning",
    icon: Calendar,
    timeline: "Week 2",
    clientTime: "Minimal involvement",
    whatHappens: "Project manager introduction, material ordering, HOA coordination (if applicable), neighbor courtesy notifications, scheduling finalization.",
    deliverable: "Confirmed project schedule and preparation checklist",
    color: "primary-green",
  },
  {
    number: 4,
    title: "Installation Excellence",
    icon: Hammer,
    timeline: "1-3 Days Typically",
    clientTime: "You can be away",
    whatHappens: "Professional crew arrival, complete tear-off, installation of all components, daily check-ins, landscaping protection, magnetic nail sweeps.",
    deliverable: "Premium roof installed with meticulous attention to detail",
    color: "gold",
  },
  {
    number: 5,
    title: "Quality Assurance",
    icon: CheckCircle,
    timeline: "Day of Completion",
    clientTime: "30-minute walkthrough",
    whatHappens: "Owner inspection of completed work, comprehensive photo documentation, quality checklist review, final cleanup verification.",
    deliverable: "Quality assurance certificate and project photos",
    color: "primary-green",
  },
  {
    number: 6,
    title: "Post-Installation Care",
    icon: Heart,
    timeline: "Following Week",
    clientTime: "Minimal",
    whatHappens: "Warranty registration with manufacturer, maintenance guide delivery, 60-day follow-up inspection, address any questions or concerns.",
    deliverable: "Warranty documents and maintenance guide",
    color: "gold",
  },
  {
    number: 7,
    title: "Lifetime Partnership",
    icon: Infinity,
    timeline: "Ongoing",
    clientTime: "As needed",
    whatHappens: "Annual courtesy inspections, storm damage assessments, priority emergency service, transferable warranty support.",
    deliverable: "Peace of mind for as long as you own your home",
    color: "primary-green",
  },
]

export default function ProcessPage() {
  const [activePhase, setActivePhase] = useState(1)
  const phase = phases.find((p) => p.number === activePhase) || phases[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-forest-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-forest-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-bronze-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-forest-500/20 backdrop-blur-sm border border-forest-400 rounded-full mb-6">
              <span className="text-white font-semibold text-sm drop-shadow">7-PHASE WHITE-GLOVE PROCESS</span>
            </div>
            <h1 className="text-headline-lg mb-6 text-white drop-shadow-lg">Your AR Global Experience</h1>
            <p className="headline-md font-normal text-white mb-8 drop-shadow-lg">
              Our proven 7-phase process delivers exceptional results with zero stress
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Phase Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {phases.map((p) => (
                <button
                  key={p.number}
                  onClick={() => setActivePhase(p.number)}
                  className={`p-4 rounded-lg text-center transition-all ${
                    activePhase === p.number
                      ? `bg-${p.color} text-ivory shadow-lg scale-105`
                      : "bg-ivory text-charcoal hover:bg-ivory"
                  }`}
                >
                  <div className="font-bold text-2xl mb-1">{p.number}</div>
                  <div className="text-xs">{p.title}</div>
                </button>
              ))}
            </div>

            {/* Active Phase Detail */}
            <Card className="overflow-hidden">
              <div className={`h-2 bg-${phase.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`h-16 w-16 rounded-full bg-${phase.color} flex items-center justify-center flex-shrink-0`}>
                    <phase.icon className={`h-8 w-8 text-${phase.color}`} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-charcoal mb-2">Phase {phase.number}</div>
                    <h2 className="text-headline-sm text-charcoal mb-4">{phase.title}</h2>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div>
                        <span className="font-semibold text-charcoal">Timeline: </span>
                        <span className="text-charcoal">{phase.timeline}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-charcoal">Your Time: </span>
                        <span className="text-charcoal">{phase.clientTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">What Happens</h3>
                    <p className="text-charcoal leading-relaxed">{phase.whatHappens}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">What You Receive</h3>
                    <p className="text-charcoal leading-relaxed">{phase.deliverable}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-charcoal flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => setActivePhase(Math.max(1, activePhase - 1))}
                    disabled={activePhase === 1}
                  >
                    ← Previous Phase
                  </Button>
                  {activePhase < 7 ? (
                    <Button
                      variant="primary"
                      onClick={() => setActivePhase(Math.min(7, activePhase + 1))}
                    >
                      Next Phase →
                    </Button>
                  ) : (
                    <Button variant="primary" asChild>
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Timeline View */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-md text-center text-charcoal mb-12">Complete Timeline</h2>
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.number} className="flex gap-8">
                  <div className="flex-shrink-0 w-32 text-right">
                    <div className={`inline-block h-16 w-16 rounded-full bg-${phase.color} text-ivory flex items-center justify-center font-bold text-2xl`}>
                      {phase.number}
                    </div>
                  </div>
                  <div className={`flex-grow border-l-4 border-${phase.color} pl-8 pb-12 ${index === phases.length - 1 ? "border-l-0" : ""}`}>
                    <div className="mb-2 text-sm font-semibold text-primary-green">{phase.timeline}</div>
                    <h3 className="headline-lg text-charcoal mb-2">{phase.title}</h3>
                    <p className="text-charcoal mb-4">{phase.whatHappens}</p>
                    <div className="bg-ivory rounded-lg p-4 border-l-4 border-${phase.color}">
                      <div className="text-sm font-semibold text-charcoal mb-1">Deliverable:</div>
                      <div className="text-sm text-charcoal">{phase.deliverable}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-center text-charcoal mb-12">What Sets Our Process Apart</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Dedicated Project Manager",
                  description: "One point of contact from consultation through completion—no handoffs or confusion.",
                },
                {
                  title: "Daily Communication",
                  description: "Text, email, or call updates every day. You're never left wondering what's happening.",
                },
                {
                  title: "No Subcontractors",
                  description: "Our experienced crews have been with us for years. Consistent quality, every project.",
                },
                {
                  title: "Neighbor Courtesy",
                  description: "We notify neighbors before starting, minimize noise, and keep the area clean throughout.",
                },
                {
                  title: "Protection Protocols",
                  description: "Tarps for landscaping, magnetic sweeps for nails, and careful handling of your property.",
                },
                {
                  title: "Transparent Pricing",
                  description: "Itemized proposals with zero hidden fees. What we quote is what you pay.",
                },
                {
                  title: "Photo Documentation",
                  description: "Before, during, and after photos for your records and insurance documentation.",
                },
                {
                  title: "Lifetime Support",
                  description: "Annual inspections and priority service for as long as you own your home.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="headline-md text-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-charcoal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="headline-md font-normal text-ivory mb-8">
              From the first consultation to the final walkthrough, AR Global's process was flawless. They communicated every step, protected our property meticulously, and delivered exactly what they promised. This is how roofing should be done.
            </blockquote>
            <div>
              <div className="font-semibold text-ivory">Michael & Jennifer T.</div>
              <div className="text-sm text-ivory">Prosper, TX</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-headline-md mb-6">Experience the AR Global Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Schedule your discovery consultation and see our process in action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-primary-green hover:bg-ivory" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">View Completed Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
