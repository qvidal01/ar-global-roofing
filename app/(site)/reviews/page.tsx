import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | AR Global Roofing",
  description: "Read what our satisfied customers have to say about AR Global Roofing. 5-star rated roofing services in North Texas with over 250+ verified reviews.",
}

const reviews = [
  {
    name: "Jennifer M.",
    location: "Prosper, TX",
    rating: 5,
    date: "November 2024",
    project: "Complete Roof Replacement",
    review: "AR Global transformed our dated roof into a stunning architectural masterpiece. Their attention to detail and professionalism exceeded all expectations. The crew was respectful of our property, and the project manager communicated every single day. Worth every penny!",
  },
  {
    name: "Michael R.",
    location: "Frisco, TX",
    rating: 5,
    date: "October 2024",
    project: "Metal Roof Installation",
    review: "After researching multiple companies, AR Global was the clear choice. They delivered premium quality with transparent pricing and zero surprises. The metal roof looks incredible and our energy bills have already dropped. Couldn't be happier with our decision.",
  },
  {
    name: "Sarah K.",
    location: "Plano, TX",
    rating: 5,
    date: "September 2024",
    project: "Asphalt Shingle Replacement",
    review: "The white-glove service was evident from day one. Our project manager kept us informed every step of the way. Truly a world-class experience. The crew cleaned up so well, we couldn't even tell they'd been there. Highly recommend!",
  },
  {
    name: "David & Linda T.",
    location: "McKinney, TX",
    rating: 5,
    date: "August 2024",
    project: "Tile Roof Installation",
    review: "We interviewed five roofing companies before choosing AR Global. Their knowledge of tile roofing and Mediterranean architecture was impressive. The installation took slightly longer than expected, but the quality is exceptional. Our neighbors keep asking who did our roof!",
  },
  {
    name: "Robert J.",
    location: "Allen, TX",
    rating: 5,
    date: "July 2024",
    project: "Emergency Storm Repair",
    review: "After a severe hailstorm, AR Global responded within hours. They coordinated with our insurance company seamlessly and had our roof repaired in days. Professional, efficient, and genuinely cared about protecting our home. Can't thank them enough!",
  },
  {
    name: "Patricia H.",
    location: "Tyler, TX",
    rating: 5,
    date: "June 2024",
    project: "Commercial Roof Replacement",
    review: "AR Global handled our commercial property with the same care as they would a home. Zero disruption to our business operations, completed on time and under budget. Their project management was outstanding. We'll be using them for all our properties.",
  },
  {
    name: "James & Michelle C.",
    location: "Prosper, TX",
    rating: 5,
    date: "May 2024",
    project: "Roof Replacement & Gutters",
    review: "From the initial consultation to the final walkthrough, everything was perfect. The drone inspection was thorough, the proposal was detailed, and the execution was flawless. Three months later and we still love our new roof. Best investment we've made in our home.",
  },
  {
    name: "Carlos M.",
    location: "Frisco, TX",
    rating: 5,
    date: "April 2024",
    project: "Metal Roof Installation",
    review: "I'm a general contractor and have worked with many roofing companies. AR Global is in a class of their own. Their craftsmanship is exceptional, and they use the best materials. I now recommend them to all my clients without hesitation.",
  },
  {
    name: "Elizabeth W.",
    location: "Plano, TX",
    rating: 5,
    date: "March 2024",
    project: "Asphalt Shingle Replacement",
    review: "The entire process was stress-free. AR Global coordinated with our HOA, notified our neighbors, and completed the project in just two days. The new roof has completely transformed our home's curb appeal. Couldn't have asked for a better experience.",
  },
]

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal to-charcoal text-ivory">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-lg mb-6">Customer Reviews</h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gold">{averageRating.toFixed(1)}</span>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
              Rated 4.9/5 stars from 250+ verified reviews. See why discerning homeowners choose AR Global Roofing.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= review.rating ? "text-gold fill-gold" : "text-charcoal"}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-charcoal mb-1">{review.name}</CardTitle>
                  <CardDescription className="text-sm">
                    <div className="text-charcoal">{review.location}</div>
                    <div className="text-primary-green font-medium mt-1">{review.project}</div>
                    <div className="text-charcoal text-xs mt-1">{review.date}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-charcoal leading-relaxed">{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-headline-md mb-6">Trusted by Thousands</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">5,000+</div>
              <div className="text-ivory">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-ivory">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-ivory">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">4.9/5</div>
              <div className="text-ivory">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-headline-md mb-6">Ready to Join Our Satisfied Customers?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-normal">
            Experience the AR Global difference. Schedule your complimentary consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-primary-green hover:bg-ivory" asChild>
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
