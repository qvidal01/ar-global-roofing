"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Label } from "@/src/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { trackFormSubmission, trackPhoneClick } from "@/src/lib/analytics"
import { useScrollDepth } from "@/src/hooks/useAnalytics"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyAddress: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  preferredContact: z.enum(["phone", "email"]),
  bestTime: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
  heardFrom: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Track scroll depth for engagement
  useScrollDepth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form data:", data)
      setIsSubmitted(true)
      trackFormSubmission("contact_form", true)
      reset()

      // In production, you would send this to your API
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // })
    } catch (error) {
      trackFormSubmission("contact_form", false)
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-forest-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-forest-600" />
            </div>
            <CardTitle className="headline-xl">Thank You!</CardTitle>
            <CardDescription className="text-base">
              We've received your consultation request
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-charcoal-700">
              A member of our team will contact you within 2 business hours to schedule your
              complimentary consultation.
            </p>
            <p className="text-sm text-charcoal-600">
              Need immediate assistance? Call us at{" "}
              <a
                href="tel:+12145551234"
                className="text-forest-600 hover:text-forest-700 font-semibold"
                onClick={() => trackPhoneClick("contact_thank_you")}
              >
                (214) 555-1234
              </a>
            </p>
            <Button
              variant="primary"
              className="w-full mt-6"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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
              <span className="text-white font-semibold drop-shadow text-sm">✓ FREE CONSULTATION</span>
            </div>
            <h1 className="display-lg mb-6 drop-shadow-lg">Schedule Your Consultation</h1>
            <p className="headline-md font-normal text-ivory-200 drop-shadow">
              Get expert guidance and a transparent proposal for your roofing project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="headline-xl">Request a Consultation</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you within 2 business hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Smith"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@example.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="(214) 555-1234"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Property Address */}
                    <div>
                      <Label htmlFor="propertyAddress">Property Address</Label>
                      <Input
                        id="propertyAddress"
                        {...register("propertyAddress")}
                        placeholder="123 Main St, Prosper, TX 75078"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <Label htmlFor="serviceInterest">Service Interest *</Label>
                      <select
                        id="serviceInterest"
                        {...register("serviceInterest")}
                        className="flex h-12 w-full rounded-md border border-charcoal-300 bg-ivory-50 px-4 py-2 text-base ring-offset-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="asphalt">Asphalt Shingle Installation</option>
                        <option value="metal">Metal Roofing</option>
                        <option value="tile">Tile Roofing</option>
                        <option value="coating">Roof Coating</option>
                        <option value="commercial">Commercial Roofing</option>
                        <option value="emergency">Emergency Repair</option>
                        <option value="inspection">Roof Inspection</option>
                        <option value="unsure">Not Sure / Consultation</option>
                      </select>
                      {errors.serviceInterest && (
                        <p className="text-sm text-red-500 mt-1">{errors.serviceInterest.message}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <Label>Preferred Contact Method *</Label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="phone"
                            {...register("preferredContact")}
                            className="h-4 w-4 text-forest-600"
                          />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="email"
                            {...register("preferredContact")}
                            className="h-4 w-4 text-forest-600"
                          />
                          <span className="text-sm">Email</span>
                        </label>
                      </div>
                      {errors.preferredContact && (
                        <p className="text-sm text-red-500 mt-1">{errors.preferredContact.message}</p>
                      )}
                    </div>

                    {/* Best Time to Contact */}
                    <div>
                      <Label htmlFor="bestTime">Best Time to Reach You</Label>
                      <select
                        id="bestTime"
                        {...register("bestTime")}
                        className="flex h-12 w-full rounded-md border border-charcoal-300 bg-ivory-50 px-4 py-2 text-base"
                      >
                        <option value="">Select a time...</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="evening">Evening (5pm - 8pm)</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Please describe your roofing needs, any concerns, or questions you have..."
                        rows={5}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* How Did You Hear About Us */}
                    <div>
                      <Label htmlFor="heardFrom">How Did You Hear About Us?</Label>
                      <select
                        id="heardFrom"
                        {...register("heardFrom")}
                        className="flex h-12 w-full rounded-md border border-charcoal-300 bg-ivory-50 px-4 py-2 text-base"
                      >
                        <option value="">Select an option...</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Friend/Neighbor Referral</option>
                        <option value="facebook">Facebook</option>
                        <option value="nextdoor">Nextdoor</option>
                        <option value="instagram">Instagram</option>
                        <option value="yard-sign">Yard Sign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request Consultation"}
                      </Button>
                      <p className="text-xs text-charcoal-500 text-center mt-4">
                        We respect your privacy and never share your information
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:+12145551234"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-forest-50 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-forest-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-charcoal-800 group-hover:text-forest-700">
                        Call Us
                      </div>
                      <div className="text-base font-semibold text-forest-600">(214) 555-1234</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@arglobalroofing.com"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-forest-50 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-forest-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-charcoal-800 group-hover:text-forest-700">
                        Email Us
                      </div>
                      <div className="text-sm text-charcoal-600">info@arglobalroofing.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3">
                    <MapPin className="h-5 w-5 text-forest-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-charcoal-800">Visit Us</div>
                      <div className="text-sm text-charcoal-600">
                        Serving North Texas
                        <br />
                        Prosper, TX 75078
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3">
                    <Clock className="h-5 w-5 text-forest-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-charcoal-800">Business Hours</div>
                      <div className="text-sm text-charcoal-600">
                        Mon-Fri: 8am - 6pm
                        <br />
                        Sat: 9am - 4pm
                        <br />
                        Sun: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="bg-charcoal-800 text-ivory-100 border-charcoal-700">
                <CardHeader>
                  <CardTitle className="text-white">Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ivory-200 mb-4">
                    Storm damage? Leak? We offer 24/7 emergency roofing services.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+12145551234">Call Emergency Line</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-charcoal-700 space-y-1">
                    <p>• Prosper</p>
                    <p>• Frisco</p>
                    <p>• Plano</p>
                    <p>• McKinney</p>
                    <p>• Allen</p>
                    <p>• Tyler</p>
                    <p>• And surrounding areas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
