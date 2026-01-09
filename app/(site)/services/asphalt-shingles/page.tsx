import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { CheckCircle, Shield, Clock, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asphalt Shingle Roofing Installation | AR Global Roofing",
  description: "Premium architectural asphalt shingle roofing with 30-50 year warranties. Superior wind resistance and energy efficiency for North Texas homes.",
}

export default function AsphaltShinglesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal to-charcoal text-white drop-shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-green rounded-full text-sm font-semibold mb-4">
              Most Popular Choice
            </div>
            <h1 className="text-headline-lg mb-6">Asphalt Shingle Roofing</h1>
            <p className="headline-md font-normal text-white mb-8">
              Premium architectural shingles combining durability, aesthetics, and value with industry-leading warranties
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Get Expert Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body-lg text-charcoal leading-relaxed mb-4">
                Architectural asphalt shingles represent the gold standard for North Texas homes, offering an ideal balance of performance, aesthetics, and investment value. Unlike basic 3-tab shingles, architectural shingles feature multiple layers that create dimensional depth and enhanced durability.
              </p>
              <p className="text-body-lg text-charcoal leading-relaxed">
                At AR Global, we exclusively install premium architectural shingles from Owens Corning, CertainTeed, and Atlas—brands trusted by discerning homeowners for their superior wind resistance, longevity, and comprehensive warranties.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary-green mb-2" />
                  <CardTitle>130+ MPH Wind Resistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal">
                    Engineered to withstand severe Texas storms and high winds
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary-green mb-2" />
                  <CardTitle>30-50 Year Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal">
                    Industry-leading manufacturer warranties plus our 10-year workmanship guarantee
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-primary-green mb-2" />
                  <CardTitle>Energy Star Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal">
                    Cool roof technology reduces heat absorption and lowers cooling costs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">Key Benefits</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Exceptional Durability",
                  description: "Premium asphalt shingles are engineered to last 30-50 years with minimal maintenance, protecting your investment for decades.",
                },
                {
                  title: "Wide Style Selection",
                  description: "Choose from dozens of colors and profiles to perfectly complement your home's architecture—from traditional to contemporary.",
                },
                {
                  title: "Cost-Effective Value",
                  description: "Lower upfront investment than metal or tile, with proven longevity and performance that delivers exceptional ROI.",
                },
                {
                  title: "Impact Resistance",
                  description: "Class 4 impact-rated options provide superior hail protection—often qualifying for insurance discounts.",
                },
                {
                  title: "Quick Installation",
                  description: "Most residential installations complete in 1-3 days with minimal disruption to your daily routine.",
                },
                {
                  title: "Proven Performance",
                  description: "Millions of installations across North America validate architectural shingles as the reliable choice.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="headline-md text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-charcoal">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Range */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">Investment Range</h2>
            <div className="bg-ivory border-2 border-primary-green rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-green mb-2">$15,000 - $35,000</div>
                <p className="text-charcoal">Typical range for residential installations</p>
              </div>

              <h3 className="headline-md text-charcoal mb-4">Cost Variables</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Home size (square footage)",
                  "Roof pitch and complexity",
                  "Number of penetrations (vents, chimneys, skylights)",
                  "Shingle brand and style selection",
                  "Underlayment upgrades (synthetic vs. felt)",
                  "Ventilation improvements",
                  "Decking repairs (if needed)",
                ].map((variable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-green">•</span>
                    <span className="text-charcoal">{variable}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-charcoal pt-6">
                <h3 className="headline-md text-charcoal mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Complete tear-off & disposal",
                    "Premium architectural shingles",
                    "Synthetic underlayment",
                    "New flashing & drip edge",
                    "Ridge ventilation",
                    "Ice & water barrier",
                    "10-year workmanship warranty",
                    "Magnetic nail cleanup",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-green" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-charcoal mb-4">
                Every home is unique. Schedule a complimentary assessment for your exact quote.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Schedule Roof Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8 text-center">Premium Shingle Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  brand: "Owens Corning Duration",
                  warranty: "50-Year Warranty",
                  features: ["SureNail Technology", "130 MPH wind resistance", "Class 4 impact rating available"],
                  ideal: "Best for maximum wind protection",
                },
                {
                  brand: "CertainTeed Landmark",
                  warranty: "Lifetime Warranty",
                  features: ["Presidential TL Ultimate", "130 MPH wind resistance", "Algae resistance"],
                  ideal: "Best for comprehensive coverage",
                },
                {
                  brand: "Atlas StormMaster",
                  warranty: "50-Year Warranty",
                  features: ["Scotchgard protection", "Class 4 impact rating", "Hip & ridge options"],
                  ideal: "Best for hail protection",
                },
              ].map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="headline-md text-charcoal">{option.brand}</CardTitle>
                    <p className="text-sm font-semibold text-primary-green">{option.warranty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-charcoal flex items-start gap-2">
                            <span className="text-primary-green">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-charcoal">
                      <p className="text-sm text-charcoal">
                        <span className="font-semibold">Ideal for:</span> {option.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How long do asphalt shingles last in Texas?",
                  answer: "Premium architectural shingles typically last 30-50 years in Texas with proper installation and maintenance. The intense sun and occasional hail make quality materials and expert installation critical.",
                },
                {
                  question: "Are architectural shingles worth the extra cost?",
                  answer: "Absolutely. Architectural shingles offer significantly better wind resistance, longer warranties, and enhanced curb appeal compared to basic 3-tab shingles. The modest price difference delivers substantial long-term value.",
                },
                {
                  question: "Do you offer impact-resistant shingles?",
                  answer: "Yes. We install Class 4 impact-rated shingles from all major manufacturers. These provide superior hail protection and often qualify for insurance discounts of 15-35%.",
                },
                {
                  question: "What colors and styles are available?",
                  answer: "We offer 30+ color options across multiple profiles—from traditional dimensional to designer styles. Our consultation includes physical samples to help you choose the perfect complement to your home.",
                },
                {
                  question: "How long does installation take?",
                  answer: "Most residential shingle installations complete in 1-3 days, depending on size and complexity. We'll provide an exact timeline during your consultation.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-charcoal pb-6 last:border-0">
                  <h3 className="headline-md text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-charcoal">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white drop-shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-headline-md mb-6">Ready for Your Premium Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Schedule a complimentary consultation and receive a detailed proposal with material samples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-primary-green hover:bg-ivory" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
