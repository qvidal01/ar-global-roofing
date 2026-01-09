import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { CheckCircle, TrendingUp, Shield, DollarSign } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Investment Guide | Transparent Pricing | AR Global",
  description: "Understand roofing costs in North Texas. Investment ranges, cost variables, financing options, and ROI analysis for asphalt, metal, and tile roofing.",
}

export default function InvestmentGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-lg mb-6">Investment Guide</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8">
              Transparent pricing guidance to help you make an informed decision about your roofing investment
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-6">Why We Share Our Pricing</h2>
            <p className="text-body-lg text-charcoal-700 leading-relaxed mb-4">
              At AR Global, we believe transparency builds trust. While every home is unique and requires a custom quote, we provide investment ranges to help you budget and make informed decisions. Understanding what factors influence cost helps set realistic expectations and demonstrates our commitment to honest pricing.
            </p>
            <p className="text-body-lg text-charcoal-700 leading-relaxed">
              These ranges reflect premium materials, experienced crews, comprehensive warranties, and white-glove service—everything we include in the AR Global experience.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-headline-md text-center text-charcoal mb-12">Investment Tiers</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  tier: "Architectural Shingle",
                  range: "$15,000 - $35,000",
                  icon: Shield,
                  color: "forest",
                  description: "Premium asphalt shingles with 30-50 year warranties",
                  included: [
                    "Owens Corning, CertainTeed, or Atlas shingles",
                    "Synthetic underlayment",
                    "Ice & water barrier",
                    "Complete tear-off & disposal",
                    "Ridge ventilation",
                    "10-year workmanship warranty",
                  ],
                  idealFor: "Homeowners seeking proven performance with excellent value",
                  typical: "2,000-3,500 sq ft home",
                },
                {
                  tier: "Designer Shingle",
                  range: "$25,000 - $50,000",
                  icon: TrendingUp,
                  color: "bronze",
                  description: "Premium designer shingles with enhanced aesthetics",
                  included: [
                    "High-end architectural shingles",
                    "Premium synthetic underlayment",
                    "Class 4 impact rating",
                    "Enhanced ventilation system",
                    "Custom flashing details",
                    "Lifetime limited warranty options",
                  ],
                  idealFor: "Those prioritizing curb appeal and maximum protection",
                  typical: "2,500-4,500 sq ft home",
                },
                {
                  tier: "Metal/Tile Premium",
                  range: "$40,000 - $100,000+",
                  icon: DollarSign,
                  color: "charcoal",
                  description: "Lifetime roofing systems with maximum durability",
                  included: [
                    "Standing seam metal or authentic tile",
                    "Specialized underlayment systems",
                    "Custom fabricated components",
                    "Energy Star certification",
                    "40-50 year paint/material warranty",
                    "Lifetime craftsmanship warranty",
                  ],
                  idealFor: "Homeowners investing in generational quality",
                  typical: "Any size home, varies by material",
                },
              ].map((tier, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`h-14 w-14 rounded-full bg-${tier.color} flex items-center justify-center mb-4`}>
                      <tier.icon className={`h-7 w-7 text-${tier.color}`} />
                    </div>
                    <CardTitle className="text-headline-sm text-charcoal">{tier.tier}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-bold text-primary-green">{tier.range}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-charcoal">{tier.description}</p>

                    <div>
                      <h4 className="font-semibold text-charcoal mb-3 text-sm">What's Included:</h4>
                      <ul className="space-y-2">
                        {tier.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-charcoal">
                            <CheckCircle className="h-4 w-4 text-primary-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-charcoal space-y-2">
                      <div>
                        <span className="text-xs font-semibold text-charcoal">Ideal For: </span>
                        <span className="text-xs text-charcoal">{tier.idealFor}</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-charcoal">Typical Project: </span>
                        <span className="text-xs text-charcoal">{tier.typical}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Variables */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">What Affects Your Investment?</h2>
            <div className="space-y-6">
              {[
                {
                  factor: "Home Size",
                  description: "Measured in square feet of roof surface (not floor space). A 2,000 sq ft home typically has 2,200-2,500 sq ft of roof.",
                },
                {
                  factor: "Roof Pitch & Complexity",
                  description: "Steeper roofs (8/12 pitch or greater) require additional safety equipment and labor. Multiple valleys, dormers, and angles increase complexity.",
                },
                {
                  factor: "Material Selection",
                  description: "Premium shingle lines, metal types, or tile styles vary in cost. Energy-efficient options may cost more upfront but save long-term.",
                },
                {
                  factor: "Number of Penetrations",
                  description: "Chimneys, skylights, vents, and pipes each require custom flashing and careful waterproofing.",
                },
                {
                  factor: "Underlayment Upgrades",
                  description: "Synthetic underlayment costs more than felt but provides superior protection and longevity.",
                },
                {
                  factor: "Ventilation Improvements",
                  description: "Proper ventilation extends roof life. Upgrading intake/exhaust vents adds cost but delivers value.",
                },
                {
                  factor: "Decking Repairs",
                  description: "Rotted or damaged plywood decking must be replaced. Usually discovered during tear-off and priced per sheet.",
                },
                {
                  factor: "Disposal & Haul-Away",
                  description: "We include complete disposal in our pricing. Some contractors charge extra for multiple layers or specific materials.",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-charcoal pb-6 last:border-0">
                  <h3 className="headline-md text-charcoal mb-2">{item.factor}</h3>
                  <p className="text-charcoal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">Financing Options</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-body-lg text-charcoal leading-relaxed">
                We partner with Synchrony Financial to offer flexible payment options that make premium roofing accessible. Our financing includes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>0% Introductory APR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal mb-4">
                    6-18 month promotional financing with approved credit. Pay no interest when paid in full during promotional period.
                  </p>
                  <p className="text-xs text-charcoal">Subject to credit approval. Terms vary by promotion.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fixed Rate Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal mb-4">
                    24-60 month fixed APR plans starting at 4.99%. Predictable monthly payments that fit your budget.
                  </p>
                  <p className="text-xs text-charcoal">Rates depend on creditworthiness and term length.</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary-green border-2 border-primary-green rounded-lg p-6">
              <h3 className="headline-md text-charcoal mb-3">Quick & Easy Application</h3>
              <p className="text-charcoal mb-4">
                Apply online in minutes with instant credit decisions. No impact to your credit score to check pre-qualification.
              </p>
              <Button variant="primary" asChild>
                <Link href="/resources/financing">Learn More About Financing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Discussion */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">Return on Investment</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  metric: "85-95%",
                  label: "Cost Recouped at Resale",
                  description: "Roofing consistently ranks among the top home improvements for ROI",
                },
                {
                  metric: "$10-15K",
                  label: "Average Value Increase",
                  description: "New premium roof adds significant appraised value to your home",
                },
                {
                  metric: "10-25%",
                  label: "Energy Savings",
                  description: "Cool roof technology and proper ventilation reduce cooling costs",
                },
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="text-3xl font-bold text-primary-green mb-2">{stat.metric}</div>
                    <CardTitle className="text-base">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-charcoal">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="headline-md text-charcoal">Beyond Dollar Value</h3>
              <ul className="space-y-3">
                {[
                  "Peace of mind from comprehensive warranties",
                  "Protection from water damage and structural issues",
                  "Insurance premium discounts (15-35% with impact-rated materials)",
                  "Enhanced curb appeal and neighborhood prestige",
                  "Elimination of ongoing maintenance and repair costs",
                  "Environmental benefits through recyclable materials",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white drop-shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-headline-md mb-6">Get Your Custom Quote</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Every home is unique. Schedule a complimentary assessment for an exact, transparent proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-primary-green hover:bg-ivory" asChild>
              <Link href="/contact">Schedule Free Assessment</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
