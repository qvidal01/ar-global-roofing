import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { AlertCircle, Phone, Clock, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Repair | AR Global Roofing North Texas",
  description: "24/7 emergency roofing services for storm damage, leaks, and urgent repairs. Rapid response, insurance assistance, and temporary protection. Call now!",
}

export default function EmergencyRepairPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red to-charcoal text-white drop-shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red rounded-full text-sm font-semibold mb-4 animate-pulse">
              24/7 Available
            </div>
            <h1 className="display-lg mb-6">Emergency Roof Repair</h1>
            <p className="headline-md font-normal text-white mb-8">
              Storm damage? Active leak? We provide immediate response and temporary protection when you need it most
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red hover:bg-red text-ivory" asChild>
                <a href="tel:+12145551234" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Service Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8 text-center">When to Call Emergency Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: AlertCircle,
                  title: "Active Leaks",
                  description: "Water entering your home through the roof",
                  urgent: true,
                },
                {
                  icon: AlertCircle,
                  title: "Storm Damage",
                  description: "Missing shingles, holes, or visible damage after severe weather",
                  urgent: true,
                },
                {
                  icon: AlertCircle,
                  title: "Fallen Tree/Debris",
                  description: "Tree branches or objects penetrating your roof",
                  urgent: true,
                },
                {
                  icon: AlertCircle,
                  title: "Structural Damage",
                  description: "Sagging, cracking, or compromised roof structure",
                  urgent: true,
                },
              ].map((situation, index) => (
                <Card key={index} className="border-2 border-red bg-red">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-red flex items-center justify-center flex-shrink-0">
                        <situation.icon className="h-6 w-6 text-ivory" />
                      </div>
                      <div>
                        <CardTitle className="text-charcoal">{situation.title}</CardTitle>
                        <p className="text-sm text-charcoal mt-2">{situation.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-charcoal rounded-lg p-8 text-center">
              <h3 className="text-headline-lg mb-4">Don't Wait—Call Now</h3>
              <p className="text-white mb-6">
                Delaying emergency repairs can lead to extensive water damage, mold growth, and structural issues.
                Our team is standing by to help.
              </p>
              <a
                href="tel:+12145551234"
                className="inline-flex items-center gap-3 text-3xl font-bold text-red hover:text-red"
              >
                <Phone className="h-8 w-8" />
                (214) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Emergency Process */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8 text-center">Our Emergency Response Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Immediate Response",
                  description: "Call us 24/7. We answer emergency calls immediately and dispatch a crew within 1-2 hours for urgent situations.",
                  icon: Phone,
                },
                {
                  step: "2",
                  title: "On-Site Assessment",
                  description: "Our experienced team assesses the damage, identifies the source of the problem, and explains the situation in clear terms.",
                  icon: AlertCircle,
                },
                {
                  step: "3",
                  title: "Temporary Protection",
                  description: "We provide immediate tarping, boarding, or temporary repairs to prevent further damage and protect your belongings.",
                  icon: Shield,
                },
                {
                  step: "4",
                  title: "Permanent Repair Plan",
                  description: "We document all damage (with photos for insurance), provide a detailed estimate, and schedule permanent repairs.",
                  icon: Clock,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 h-16 w-16 rounded-full bg-red text-ivory flex items-center justify-center font-bold text-2xl">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="headline-md text-charcoal mb-2">{item.title}</h3>
                    <p className="text-charcoal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Assistance */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-6">Insurance Claim Assistance</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-body-lg text-charcoal leading-relaxed">
                We work with insurance companies daily and understand the claims process inside and out. Our team will:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Document all damage with detailed photos and measurements",
                "Provide comprehensive damage reports for your adjuster",
                "Meet with insurance adjusters on your behalf",
                "Identify damage that might be missed",
                "Help you understand your policy coverage",
                "Work within your deductible and policy limits",
                "Handle direct billing when applicable",
                "Advocate for complete and fair settlements",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary-green flex-shrink-0 mt-1" />
                  <span className="text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary-green border-2 border-primary-green rounded-lg p-6">
              <h3 className="headline-md text-charcoal mb-3">We Work With All Major Insurers</h3>
              <p className="text-charcoal">
                State Farm • Allstate • Farmers • USAA • Liberty Mutual • Nationwide • Progressive • And more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergency Scenarios */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-headline-sm text-charcoal mb-8 text-center">Common Emergency Scenarios</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Hail Damage",
                  description: "North Texas hailstorms can devastate roofs. We assess impact damage, document for insurance, and provide rapid replacement.",
                },
                {
                  title: "Wind Damage",
                  description: "High winds can tear off shingles and damage flashing. We secure your roof and prevent water infiltration.",
                },
                {
                  title: "Fallen Trees",
                  description: "Tree damage requires immediate attention. We safely remove debris and repair structural damage.",
                },
                {
                  title: "Ice Dam Leaks",
                  description: "Rare but serious in Texas. We remove ice dams and repair underlying damage from water backup.",
                },
                {
                  title: "Flashing Failure",
                  description: "Failed flashing around chimneys, vents, or valleys can cause major leaks. We repair quickly to prevent interior damage.",
                },
                {
                  title: "Sudden Leaks",
                  description: "Mysterious leaks need immediate diagnosis. We find the source and provide lasting repairs.",
                },
              ].map((scenario, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-charcoal">{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-charcoal">{scenario.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline-sm text-charcoal mb-6">Emergency Service Area</h2>
            <p className="text-body-lg text-charcoal mb-8">
              We provide emergency roofing services throughout North Texas
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              {[
                "Prosper", "Frisco", "Plano", "McKinney", "Allen", "Celina",
                "Little Elm", "The Colony", "Lewisville", "Carrollton", "Denton", "Tyler"
              ].map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red" />
                  <span className="text-charcoal">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red text-white drop-shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="h-16 w-16 mx-auto mb-6 text-ivory" />
          <h2 className="text-headline-md mb-6">Roofing Emergency? We're Here to Help</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Available 24 hours a day, 7 days a week for emergency roofing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-red hover:bg-ivory text-xl py-6" asChild>
              <a href="tel:+12145551234" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                (214) 555-1234
              </a>
            </Button>
          </div>
          <p className="text-sm text-ivory mt-6">
            For non-emergency inquiries, use our contact form or call during business hours
          </p>
        </div>
      </section>
    </div>
  )
}
