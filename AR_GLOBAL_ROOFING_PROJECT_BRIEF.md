# AR GLOBAL ROOFING - PREMIUM WEBSITE REDESIGN PROJECT BRIEF

## PROJECT OVERVIEW

**Client:** AR Global Roofing and Construction  
**Current Site:** https://www.arglobalroofing.com/  
**Project Type:** Complete website redesign and repositioning  
**Strategic Goal:** Transform from commodity roofing contractor to premium craftsman service for high-net-worth homeowners  
**Target Market:** North Texas estate homeowners (properties $500K+)  
**Budget Tier:** Mid-to-high investment (justify 20-30% premium pricing)

---

## STRATEGIC POSITIONING

### The Blue Ocean Strategy
Move away from the crowded "contractor marketplace" (red ocean) into the premium "craftsman consultancy" space (blue ocean) where AR Global competes on:
- Peace of mind over price
- Consultative expertise over transactional service  
- Generational quality over quick fixes
- White-glove experience over standard contractor approach

### Core Brand Promise
"The Last Roof Your Home Will Ever Need" — positioning AR Global as the definitive roofing solution that wealthy homeowners choose for complete peace of mind and property value protection.

---

## TECHNICAL SPECIFICATIONS

### Recommended Tech Stack

**Framework:** Next.js 14+ (App Router)
- Server-side rendering for SEO optimization
- Image optimization out of the box
- Fast page loads critical for conversion
- Easy deployment to Vercel

**Styling:** Tailwind CSS + Shadcn/ui
- Rapid development with utility-first CSS
- Consistent design system
- Easy theming with CSS variables
- Accessible components from Shadcn

**CMS:** Sanity.io (Headless CMS)
- Easy content updates for client
- Flexible content modeling
- Real-time preview
- Free tier suitable for small sites

**Forms:** React Hook Form + Zod validation
- Lead capture forms
- Consultation request
- Email integration (Resend or SendGrid)

**Analytics:** 
- Google Analytics 4
- Microsoft Clarity (heatmaps)
- Lead tracking with UTM parameters

**Hosting:** Vercel
- Automatic deployments from GitHub
- Edge network for fast global delivery
- Easy environment management

### Performance Targets
- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: All green
- Mobile PageSpeed: 85+

### Browser Support
- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile Safari iOS 14+
- Chrome Android (last 2 versions)

---

## DESIGN SYSTEM

### Color Palette

```javascript
// tailwind.config.js colors
colors: {
  // Primary Colors
  'charcoal': {
    50: '#f6f7f8',
    100: '#e1e4e7',
    200: '#c3c9cf',
    300: '#9ba4ad',
    400: '#6d7985',
    500: '#5B6770', // slate gray
    600: '#4a5560',
    700: '#3d4751',
    800: '#2B3338', // charcoal graphite
    900: '#1a1f22',
  },
  'ivory': {
    50: '#ffffff',
    100: '#F8F6F3', // warm ivory
    200: '#f0ede8',
    300: '#e8e3dc',
    400: '#d9d2c8',
    500: '#cbc1b4',
  },
  // Accent Colors
  'forest': {
    50: '#f0f7f4',
    100: '#d9ebe3',
    200: '#b3d7c7',
    300: '#85bfa5',
    400: '#5a9d81',
    500: '#2C5F4D', // deep forest green
    600: '#254d3e',
    700: '#1e3e32',
    800: '#183027',
    900: '#12231d',
  },
  'bronze': {
    50: '#f9f6f2',
    100: '#f0e9de',
    200: '#e1d3bd',
    300: '#cfb896',
    400: '#b89b6f',
    500: '#8B6F47', // burnished bronze
    600: '#705939',
    700: '#5c482f',
    800: '#4d3d28',
    900: '#423524',
  },
  'sage': {
    50: '#f7f9f7',
    100: '#e8f0e8',
    200: '#d4e4d2',
    300: '#B7C9B3', // soft sage
    400: '#9bb395',
    500: '#7f9d77',
    600: '#657e5f',
    700: '#51654d',
    800: '#435441',
    900: '#3a4737',
  },
}
```

### Typography

```javascript
// Font Stack
fonts: {
  serif: ['Cormorant Garamond', 'Georgia', 'serif'], // Headlines
  sans: ['Inter', 'system-ui', 'sans-serif'], // Body text
  display: ['Libre Baskerville', 'Georgia', 'serif'], // Alternative headlines
}

// Type Scale
fontSize: {
  'display-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
  'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }], // 56px
  'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 48px
  'headline-xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
  'headline-lg': ['2rem', { lineHeight: '1.25' }], // 32px
  'headline-md': ['1.5rem', { lineHeight: '1.3' }], // 24px
  'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
  'body-md': ['1rem', { lineHeight: '1.6' }], // 16px
  'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
  'caption': ['0.75rem', { lineHeight: '1.4' }], // 12px
}
```

### Spacing System
Use consistent spacing scale (4px base unit):
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)
- 4xl: 6rem (96px)
- 5xl: 8rem (128px)

### Component Library

**Build reusable components:**
1. Hero sections (full-screen, split, centered)
2. Service cards (with hover states)
3. Testimonial cards (text + video)
4. CTA buttons (primary, secondary, ghost)
5. Form inputs (text, email, phone, textarea, select)
6. Image galleries (grid, masonry, slider)
7. Process timeline (horizontal, vertical)
8. Stats counters
9. Badge/certification displays
10. Mobile navigation menu

---

## SITE ARCHITECTURE

### Site Map

```
/
├── / (Homepage)
├── /about
│   ├── /about/our-story
│   ├── /about/team
│   └── /about/certifications
├── /services
│   ├── /services/residential
│   ├── /services/commercial
│   ├── /services/asphalt-shingles
│   ├── /services/metal-roofing
│   ├── /services/tile-roofing
│   ├── /services/roof-coating
│   ├── /services/solar-ready
│   └── /services/emergency-repair
├── /investment-guide (pricing transparency)
├── /process (7-phase journey)
├── /portfolio
│   ├── /portfolio/[project-slug] (dynamic case studies)
│   └── /portfolio/gallery
├── /reviews
├── /resources
│   ├── /resources/blog
│   │   └── /resources/blog/[slug]
│   ├── /resources/roof-care-guide
│   ├── /resources/warranty-info
│   └── /resources/financing
├── /locations
│   ├── /locations/prosper
│   ├── /locations/frisco
│   ├── /locations/plano
│   ├── /locations/mckinney
│   ├── /locations/allen
│   └── /locations/tyler
├── /contact
└── /thank-you (form submission confirmation)
```

### URL Structure Best Practices
- Use hyphens, not underscores
- Keep URLs short and descriptive
- Include target keywords where natural
- Implement canonical tags
- Create XML sitemap automatically

---

## PAGE-BY-PAGE SPECIFICATIONS

### HOMEPAGE

**Sections (in order):**

1. **Hero Section**
   - Full viewport height
   - High-quality background image (estate home at dusk)
   - Centered content with overlay gradient
   - Headline: "The Last Roof Your Home Will Ever Need"
   - Subheadline: Premium positioning statement
   - Two CTAs: "Schedule Consultation" (primary) + "View Portfolio" (secondary)
   - Subtle scroll indicator

2. **Problem-Solution Statement**
   - 2-column layout (desktop), stacked (mobile)
   - Left: The problem (generic contractors, commodity approach)
   - Right: The AR Global difference
   - Strategic use of white space

3. **Services Overview**
   - 3-4 card grid (responsive)
   - Each card: Icon, service name, 2-sentence description, "Learn More" link
   - Hover effects: slight elevation, color accent reveal

4. **Social Proof Section**
   - Stats bar: "20+ Years | 5,000+ Projects | 98% Satisfaction"
   - Featured video testimonial (embedded, not autoplay)
   - 3-5 star review cards with client photos
   - Link to full reviews page

5. **Process Timeline** 
   - Visual 7-phase journey
   - Interactive hover states showing details
   - Emphasize "White-Glove Experience"

6. **Portfolio Preview**
   - 6-image masonry grid
   - Before/after sliders (optional)
   - "View All Projects" CTA

7. **Investment Transparency**
   - "What to Expect" investment ranges
   - 3 tiers presented professionally
   - Link to detailed investment guide
   - Financing options mentioned

8. **Certifications & Partnerships**
   - Logo grid (grayscale with color on hover)
   - Owens Corning, CertainTeed, Atlas, insurance partners
   - Links to verification pages

9. **Trust Bar**
   - BBB A+ Rating
   - Years in business
   - Insurance partnerships
   - Emergency service badge

10. **Final CTA Section**
    - Full-width, contrasting background
    - "Ready to Protect Your Investment?"
    - Contact form OR "Schedule Consultation" button
    - Phone number prominently displayed

**Technical Requirements:**
- Lazy loading for images below fold
- Intersection Observer animations (fade in, slide in)
- Mobile sticky CTA button (call/contact)
- Schema markup: Organization, LocalBusiness
- Meta description: 155-160 characters

---

### SERVICES PAGES (Template)

**Structure for each service:**

1. **Hero Section**
   - Service name as headline
   - Beautiful full-width image of completed project
   - Brief value proposition
   - Quick CTA: "Get Expert Consultation"

2. **Overview Section**
   - What it is
   - Who it's for
   - Key benefits (3-5 bullet points, expanded)

3. **Detailed Content**
   - Educational information (similar to current site but reorganized)
   - Visual aids: diagrams, material samples, cross-sections
   - Use accordion/collapsible sections for deep dives

4. **Investment Range**
   - Transparent pricing guidance
   - Variables that affect cost
   - "Schedule Roof Assessment for Exact Quote"

5. **Process Specific to Service**
   - Abbreviated 5-7 step process
   - Timeline expectations
   - What client experiences

6. **Material Options**
   - Visual comparison table
   - Pros/cons for each option
   - Help client self-educate decision

7. **Related Projects**
   - 3-4 case studies using this service
   - Before/after images
   - Brief results summary

8. **FAQ Section**
   - 6-8 most common questions
   - Accordion-style expand/collapse

9. **Consultation CTA**
   - Form specific to service
   - "What type of roof do you currently have?"
   - "What's your primary concern?" (dropdown)

**Services to Build:**
- Asphalt Shingle Installation
- Metal Roofing Systems
- Tile Roofing
- Roof Coating & Restoration
- Commercial Roofing
- Emergency Repair Services
- Solar-Ready Installation

---

### INVESTMENT GUIDE PAGE

**Purpose:** Transparency reduces friction, pre-qualifies leads

**Content Structure:**

1. **Introduction**
   - "Understanding Your Roofing Investment"
   - Why we share pricing (builds trust)
   - Variables that affect cost

2. **Investment Tiers**
   - Architectural Shingle: $15K-$35K range
   - Designer Shingle: $25K-$50K range
   - Metal/Tile Premium: $40K-$100K+ range
   - For each: what's included, warranty info, ideal for whom

3. **Cost Variables Explained**
   - Home size (sq ft calculator)
   - Pitch/complexity
   - Material selection
   - Underlayment upgrades
   - Ventilation improvements
   - Decking repairs (if needed)

4. **What's Included**
   - Complete tear-off
   - Disposal (no driveway bins)
   - Underlayment
   - Flashing
   - Ventilation assessment
   - Project management
   - 10-year workmanship warranty
   - Magnetic cleanup

5. **Financing Options**
   - Synchrony partnership
   - 0% introductory rates (if applicable)
   - 4%+ fixed rates
   - Application process link

6. **ROI Discussion**
   - Property value increase data
   - Energy savings potential
   - Insurance premium considerations
   - Longevity comparison (cheaper roof = replace sooner)

7. **CTA: Custom Quote**
   - "Every home is unique"
   - "Schedule complimentary assessment"
   - Form or calendar link

**Design Notes:**
- Use professional charts/graphs
- Avoid looking "salesy"
- Educational, consultant tone
- Interactive calculator (optional Phase 2)

---

### PROCESS PAGE ("Your AR Global Experience")

**Purpose:** Demystify the experience, reduce anxiety

**Layout:** Vertical timeline (desktop), stacked cards (mobile)

**7 Phases:**

1. **Discovery Consultation**
   - Icon: magnifying glass or clipboard
   - What happens: drone inspection, attic review, insurance docs
   - Timeline: Week 1
   - What client does: 1-hour meeting
   - What AR Global does: comprehensive assessment
   - Deliverable: inspection report

2. **Transparent Proposal**
   - Icon: document or calculator
   - What happens: itemized breakdown, 3D rendering
   - Timeline: Within 3 days
   - What client gets: complete proposal, material samples
   - Interactive: 3D rendering of materials on their home (future feature)

3. **Pre-Construction Planning**
   - Icon: calendar or checklist
   - Project manager introduction
   - HOA coordination (if applicable)
   - Material ordering
   - Neighbor courtesy notification
   - Timeline: Week 2

4. **Installation Excellence**
   - Icon: hammer or tools
   - Crew arrival time
   - Daily check-ins
   - Protection protocols (landscaping, magnetic sweeps)
   - Timeline: 1-3 days typically
   - Photos: crew in action

5. **Quality Assurance**
   - Icon: checkmark or inspection badge
   - Owner walkthrough
   - Photo documentation
   - Inspection checklist
   - Timeline: Day of completion

6. **Post-Installation Care**
   - Icon: handshake or document
   - Warranty registration
   - Maintenance guide
   - 60-day follow-up
   - Timeline: Following week

7. **Lifetime Partnership**
   - Icon: infinity symbol or shield
   - Annual courtesy inspections
   - Storm damage assessments
   - Priority emergency service
   - Transferable warranty
   - Timeline: Ongoing

**Interactive Elements:**
- Click each phase to expand details
- Progress bar visualization
- Client testimonial quote for each phase
- Actual timeline from recent project

**CTA:** "Experience the AR Global Difference — Schedule Your Discovery Consultation"

---

### PORTFOLIO / CASE STUDIES

**Portfolio Index Page:**
- Filterable grid (by service type, location, investment range)
- Each card: hero image, project name, brief description, "View Case Study"
- Masonry layout (not rigid grid)

**Individual Case Study Template:**

**Structure:**
1. **Hero Image**
   - After photo, stunning
   - Overlay: Project name, location, year

2. **Project Overview**
   - Client concern/need
   - Home details (size, style, age)
   - Challenge presented

3. **The AR Global Solution**
   - Materials selected (and why)
   - Special considerations
   - Timeline
   - Team assigned

4. **Before/After Gallery**
   - Image slider or side-by-side
   - Multiple angles
   - Detail shots

5. **Results**
   - Client testimonial (text + video if available)
   - Measurable outcomes (energy savings, insurance impact)
   - Property value consideration

6. **Investment Details**
   - Total investment range
   - Warranty info
   - Timeline actual

7. **Related Projects**
   - 3 similar case studies

**Case Studies to Create (Priority):**
- Prosper Estate Architectural Shingle
- Frisco Metal Roof Installation
- McKinney Historic Home Restoration
- Commercial Building Low-Slope System
- Emergency Storm Repair Success Story
- Tile Roof Replacement Mediterranean Style

**Technical:**
- Dynamic routes: `/portfolio/[slug]`
- SEO: unique meta descriptions, alt text on all images
- Schema markup: CreativeWork

---

### ABOUT PAGES

**Our Story:**
- Origin story (20 years)
- Founder background
- Company values
- "Why we do this" (legacy, craftsmanship)
- Timeline of growth
- Community involvement

**Team:**
- Owner/leadership photos and bios
- Project manager team
- "Our crews have been with us X years" (no temp labor)
- Company culture photos

**Certifications:**
- Detailed explanation of each certification
- What it means for clients
- Continuing education commitment
- Insurance partnerships
- Industry memberships

---

### REVIEWS / TESTIMONIALS PAGE

**Layout:**

1. **Overall Stats**
   - Average rating: 4.9/5 stars
   - Total reviews: 250+
   - Google rating badge (embedded)
   - BBB rating

2. **Video Testimonials**
   - Featured: 6-8 video testimonials
   - Client name, location, project type
   - Thumbnail with play overlay
   - Modal or dedicated video player

3. **Written Reviews Grid**
   - Filterable by service type, rating, date
   - Each review card:
     - Star rating
     - Client name and location
     - Project type
     - Review text (excerpt, expand to read more)
     - Date
     - Response from AR Global (if applicable)

4. **Third-Party Review Links**
   - Google Business Profile
   - Yelp
   - Angi
   - BBB
   - Each with current rating

5. **CTA: "Join Our Satisfied Clients"**

**Technical:**
- Pull reviews from Google API (if possible) or manual entry in CMS
- Schema markup: Review, AggregateRating
- Lazy load videos

---

### CONTACT PAGE

**Elements:**

1. **Contact Form**
   - Name (required)
   - Email (required, validated)
   - Phone (required, formatted)
   - Service Interest (dropdown)
   - Property Address
   - Message
   - Preferred contact method
   - Best time to reach
   - How did you hear about us? (tracking)
   - Submit button: "Request Consultation"

2. **Alternative Contact Methods**
   - Phone (click to call on mobile)
   - Email
   - Office address (with map)
   - Hours of operation

3. **Service Area Map**
   - Visual map showing coverage area
   - List of cities served

4. **Quick Response Promise**
   - "We respond within 2 business hours"
   - "Emergency? Call now for immediate assistance"

**Form Handling:**
- Client-side validation (React Hook Form + Zod)
- Server-side validation
- Email notifications to AR Global sales
- Confirmation email to client
- CRM integration (optional: HubSpot, Salesforce)
- Thank you page redirect with next steps

---

### BLOG / RESOURCES

**Blog Index:**
- Grid layout (3 columns desktop, 1 mobile)
- Each card: featured image, title, excerpt, date, category, "Read More"
- Filtering by category
- Search functionality

**Blog Post Template:**
- Hero image
- Title (H1)
- Date, author, category, read time
- Table of contents (for long articles)
- Content (rich text, images, videos)
- Related posts
- CTA at bottom: "Need Expert Help?"
- Social share buttons

**Content Calendar (Recommended Topics):**
1. Ultimate Guide to Metal Roofing in Texas Heat (3,000+ words)
2. How to Read Your Insurance Claim for Roof Damage
3. Asphalt vs. Metal vs. Tile: Cost-Benefit Analysis Over 30 Years
4. 10 Warning Signs Your Roof Needs Attention
5. Storm Damage Assessment: What to Look For After Severe Weather
6. Understanding Roof Warranties: Manufacturer vs. Workmanship
7. How Your Roof Impacts Home Resale Value in North Texas
8. Energy Efficiency: Cool Roofing Technologies Explained
9. HOA Roofing Requirements: Navigating Architectural Review Boards
10. Roof Maintenance Checklist: Seasonal Care Guide

**Resources Section:**
- Downloadable PDFs
- Roof care guide
- Warranty information
- Financing application
- Emergency contact card

---

### LOCATION PAGES (SEO)

**Purpose:** Rank for "roofing contractor [city name]"

**Template for Each City:**

1. **Hero:** "Premium Roofing Services in [City Name]"
2. **Intro:** Serving [City] homeowners since [year]
3. **Local Knowledge:** Specific to city (HOAs, climate considerations, common home styles)
4. **Projects in [City]:** Portfolio filtered by location
5. **Service Area Map:** Highlighted city
6. **Local Reviews:** Testimonials from that area
7. **CTA:** "Schedule Your [City] Roof Assessment"

**Cities to Create:**
- Prosper, TX
- Frisco, TX
- Plano, TX
- McKinney, TX
- Allen, TX
- Tyler, TX
- (Add more as needed)

**SEO Notes:**
- Unique content for each (no duplicate)
- Local schema markup
- Local backlinks where possible
- Google Business Profile optimization

---

## CONTENT STRATEGY

### Voice & Tone Guidelines

**Voice (Consistent Brand Personality):**
- Authoritative but approachable
- Consultative, not salesy
- Confident without arrogance
- Educational and transparent
- Professional but warm

**Tone (Adapts to Context):**
- Homepage: Inspirational, premium, confident
- Services: Educational, detailed, helpful
- About: Personal, authentic, values-driven
- Blog: Informative, friendly, expert
- Forms: Reassuring, clear, low-pressure

**Writing Principles:**
1. **Customer-centric:** Focus on benefits, not features
   - Bad: "We use synthetic underlayment"
   - Good: "Your roof stays protected from ice dams with advanced waterproof barriers"

2. **Specificity builds trust:** Avoid vague claims
   - Bad: "Quality materials"
   - Good: "Owens Corning Duration shingles with 130 MPH wind resistance"

3. **Address concerns proactively:** Answer objections
   - "You might wonder if a premium roof is worth the investment..."

4. **Use power words sparingly:** Premium, legacy, craftsmanship, investment, peace of mind

5. **Active voice preferred:** "We protect your investment" not "Your investment is protected"

6. **Short paragraphs:** 2-3 sentences max for web readability

7. **Scannable content:** Headers, bullet points, bold key phrases

### SEO Strategy

**Target Keywords (Priority):**
- Primary: "roofing contractor [city]", "roof replacement [city]", "roof repair [city]"
- Secondary: "metal roofing [city]", "tile roofing [city]", "emergency roof repair [city]"
- Long-tail: "how much does roof replacement cost in Texas", "best roofing materials for Texas heat"

**On-Page SEO Checklist:**
- [ ] Unique title tags (55-60 characters)
- [ ] Meta descriptions (155-160 characters)
- [ ] H1 tag (one per page)
- [ ] H2-H6 hierarchy
- [ ] Alt text on all images (descriptive, keyword-relevant)
- [ ] Internal linking strategy
- [ ] External links to authoritative sources
- [ ] URL structure optimization
- [ ] Schema markup (Organization, LocalBusiness, Service, Review, FAQPage)
- [ ] Mobile-friendly design
- [ ] Fast load times
- [ ] HTTPS security

**Technical SEO:**
- XML sitemap
- Robots.txt
- Canonical tags
- 301 redirects for old site URLs
- Structured data testing
- Google Search Console setup
- Google Analytics 4 setup
- Google Business Profile optimization

**Content SEO:**
- Blog posts: 1,500-3,000 words for pillar content
- Target featured snippets (answer questions directly)
- Use natural keyword density (2-3%)
- Include related keywords (LSI)
- Update content regularly

---

## CONVERSION OPTIMIZATION

### Primary Conversion Goals
1. **Consultation requests** (main goal)
2. **Phone calls** (secondary)
3. **Email inquiries**
4. **Newsletter signups** (nurture)

### CTA Strategy

**Button Hierarchy:**
- Primary CTA: "Schedule Consultation", "Request Assessment", "Get Started"
  - Color: Forest green (#2C5F4D) or Bronze (#8B6F47)
  - Size: Large, prominent
  - Placement: Multiple per page (hero, bottom, sticky mobile)

- Secondary CTA: "View Portfolio", "Learn More", "Read Reviews"
  - Style: Outlined or ghost button
  - Color: Charcoal border

**CTA Best Practices:**
- Action-oriented verbs
- Specific (not generic "Click Here")
- Create urgency without being pushy
- A/B test different copy

### Forms Optimization
- Keep short (only essential fields)
- Clear labels
- Inline validation
- Progress indicators (multi-step forms)
- Privacy assurance ("We never share your information")
- Mobile-optimized (large touch targets)

### Trust Signals
- Display throughout site:
  - BBB A+ rating badge
  - Industry certifications
  - Insurance partner logos
  - "20+ Years in Business"
  - "No Subcontractors"
  - "Licensed & Insured"
  - Real client photos (not stock)
  - Video testimonials

### Social Proof Placement
- Homepage: Featured testimonial video
- Service pages: Relevant reviews
- Portfolio: Client results
- Before conversion: "Join 5,000+ satisfied homeowners"

---

## MOBILE STRATEGY

### Mobile-First Approach
Design for mobile, enhance for desktop

**Mobile-Specific Features:**
1. **Sticky CTA Bar**
   - Fixed at bottom of screen
   - Two options: "Call Now" | "Contact"
   - Doesn't obstruct content
   - Hides on scroll down, appears on scroll up

2. **Click-to-Call**
   - Phone numbers are `<a href="tel:...">` links
   - Prominently displayed in header

3. **Simplified Navigation**
   - Hamburger menu
   - Search icon
   - Logo (links to home)
   - CTA button

4. **Touch Optimization**
   - Buttons: minimum 44x44px
   - Adequate spacing between clickable elements
   - Swipe gestures for galleries

5. **Performance**
   - Compress images aggressively
   - Lazy load below fold
   - Minimize initial JavaScript
   - Defer non-critical CSS

### Responsive Breakpoints
```javascript
// Tailwind default breakpoints (customize if needed)
sm: '640px',   // Small devices
md: '768px',   // Medium devices  
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
2xl: '1536px', // 2x extra large devices
```

---

## ANALYTICS & TRACKING

### Key Metrics to Track

**Traffic:**
- Total visitors
- Source/medium (organic, direct, referral, social, paid)
- New vs. returning
- Geographic location
- Device type

**Engagement:**
- Pages per session
- Average session duration
- Bounce rate
- Scroll depth
- Video play rate

**Conversion:**
- Form submissions
- Phone calls (call tracking)
- Email clicks
- CTA click-through rate
- Thank you page views

**SEO:**
- Organic traffic growth
- Keyword rankings
- Featured snippets
- Backlinks acquired

### Event Tracking Setup

**Google Analytics 4 Events:**
```javascript
// Example events to track
- click_cta: { cta_name, cta_location, page_path }
- form_submit: { form_name, form_location }
- video_play: { video_title, video_location }
- phone_click: { phone_number }
- scroll_depth: { depth_percentage }
- file_download: { file_name, file_type }
```

**Heatmaps (Microsoft Clarity):**
- Where users click
- Scroll depth
- Rage clicks (frustration)
- Dead clicks (non-functional elements)

### A/B Testing Opportunities
- Hero headline variations
- CTA button copy
- Form length (short vs. detailed)
- Pricing transparency (ranges shown vs. "Contact for quote")
- Image style (people vs. architecture)

---

## ACCESSIBILITY (WCAG 2.1 AA)

### Requirements

**Visual:**
- Color contrast ratio: 4.5:1 (normal text), 3:1 (large text)
- Don't rely on color alone to convey information
- Text resizable up to 200% without loss of functionality
- Sufficient spacing between interactive elements

**Navigation:**
- Keyboard accessible (tab order logical)
- Skip to main content link
- Focus indicators visible
- No keyboard traps

**Content:**
- Descriptive link text (not "Click Here")
- Alt text on all images
- Captions for videos
- Transcripts for audio
- Clear headings hierarchy

**Forms:**
- Labels associated with inputs
- Error messages descriptive and helpful
- Required fields clearly marked
- Sufficient time to complete

**Semantic HTML:**
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1>-<h6> (proper hierarchy)
<button> (not <div> with click handler)
<a> for links, <button> for actions
```

### Testing Tools
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension
- Screen reader testing (NVDA, JAWS)

---

## DEVELOPMENT WORKFLOW

### Git Workflow

**Branches:**
```
main (production)
├── develop (staging)
    ├── feature/homepage-hero
    ├── feature/service-pages
    ├── feature/portfolio-case-studies
    └── fix/mobile-nav-issue
```

**Commit Message Convention:**
```
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Examples:
- feat(homepage): add hero section with CTA
- fix(forms): validate phone number format
- docs(readme): update installation instructions
```

### Development Phases

**Phase 1: Foundation (Weeks 1-2)**
- [ ] Project setup (Next.js, Tailwind, Sanity)
- [ ] Design system implementation (colors, fonts, components)
- [ ] Base components (Button, Card, Input, etc.)
- [ ] Header/Footer layout
- [ ] Responsive navigation
- [ ] 404 page

**Phase 2: Core Pages (Weeks 3-4)**
- [ ] Homepage (all sections)
- [ ] About page
- [ ] Contact page + form functionality
- [ ] Thank you page

**Phase 3: Service Pages (Week 5)**
- [ ] Service template component
- [ ] Individual service pages (6-7 pages)
- [ ] Dynamic routing if needed

**Phase 4: Portfolio/Case Studies (Week 6)**
- [ ] Portfolio index page (filterable grid)
- [ ] Case study template
- [ ] Dynamic routing for case studies
- [ ] Image galleries/sliders

**Phase 5: Investment & Process (Week 7)**
- [ ] Investment guide page
- [ ] Process timeline page (interactive)
- [ ] Financing resources

**Phase 6: Content & SEO (Week 8)**
- [ ] Location pages (template + 6 cities)
- [ ] Blog setup (CMS integration)
- [ ] 2-3 initial blog posts
- [ ] Resources/downloads page
- [ ] Schema markup implementation

**Phase 7: Optimization & Launch (Weeks 9-10)**
- [ ] Performance optimization
- [ ] Mobile testing (all pages)
- [ ] Browser testing
- [ ] Accessibility audit
- [ ] SEO audit
- [ ] Analytics/tracking setup
- [ ] Forms testing (actual submissions)
- [ ] 301 redirects from old site
- [ ] Launch checklist
- [ ] Post-launch monitoring

### Code Quality Standards

**Linting & Formatting:**
- ESLint (Next.js recommended config)
- Prettier (consistent code formatting)
- Husky (pre-commit hooks)

**Component Structure:**
```javascript
// Example component structure
components/
├── ui/              // Shadcn/ui components
├── layout/          // Header, Footer, Navigation
├── sections/        // Homepage sections, reusable blocks
├── forms/           // Form components
└── shared/          // Shared utilities

// Component file naming
ComponentName.jsx
ComponentName.module.css (if needed)
```

**Best Practices:**
- Functional components with hooks
- PropTypes or TypeScript for type checking
- Separate business logic from UI
- Reusable components
- Consistent naming conventions
- Comments for complex logic
- Performance: React.memo, useMemo, useCallback where beneficial

---

## CONTENT MANAGEMENT (SANITY CMS)

### Schema Structure

**Documents to Create:**

1. **Project/Case Study**
```javascript
{
  title: string,
  slug: slug,
  heroImage: image,
  location: string,
  year: number,
  serviceType: reference(serviceType),
  challenge: blockContent,
  solution: blockContent,
  results: blockContent,
  investment: string,
  timeline: string,
  beforeImages: array(image),
  afterImages: array(image),
  testimonial: reference(testimonial),
  relatedProjects: array(reference(project))
}
```

2. **Service**
```javascript
{
  title: string,
  slug: slug,
  heroImage: image,
  description: blockContent,
  benefits: array(string),
  processSteps: array({ title, description }),
  investmentRange: string,
  relatedProjects: array(reference(project)),
  faqs: array({ question, answer })
}
```

3. **Testimonial**
```javascript
{
  clientName: string,
  location: string,
  projectType: reference(service),
  rating: number,
  reviewText: text,
  date: date,
  videoUrl: url (optional),
  featured: boolean
}
```

4. **Blog Post**
```javascript
{
  title: string,
  slug: slug,
  author: reference(author),
  publishedAt: datetime,
  featuredImage: image,
  excerpt: text,
  body: blockContent,
  category: reference(category),
  tags: array(string),
  relatedPosts: array(reference(post))
}
```

5. **Team Member**
```javascript
{
  name: string,
  role: string,
  bio: blockContent,
  photo: image,
  order: number
}
```

### CMS Features to Configure
- Preview functionality (see draft content)
- Image optimization pipeline
- SEO fields (meta title, meta description)
- Publishing workflow (draft → review → published)
- Media library organization

---

## THIRD-PARTY INTEGRATIONS

### Forms & Email
**Recommended: Resend + React Email**
- Send transactional emails
- Beautiful HTML email templates
- Deliverability tracking
- Affordable pricing

**Alternative: SendGrid, Mailgun, AWS SES**

**Setup:**
1. User submits form → validated
2. POST to API route
3. API route sends:
   - Email to AR Global sales team (lead notification)
   - Confirmation email to user (thank you + next steps)
4. Store submission in database (optional)
5. CRM integration (optional)

### Scheduling (Optional)
**Calendly or Acuity Scheduling**
- Embed booking widget
- Allow clients to schedule consultations
- Sync with company calendar
- Confirmation emails automated

### Live Chat (Optional Phase 2)
**Intercom, Drift, or Tidio**
- Live chat widget
- After-hours bot
- Lead capture
- Mobile responsive

### Phone Tracking
**CallRail or similar**
- Dynamic number insertion
- Track which marketing source drove call
- Call recording
- Analytics integration

---

## SECURITY & PERFORMANCE

### Security Checklist
- [ ] HTTPS enforced (SSL certificate)
- [ ] Environment variables (.env file, never committed)
- [ ] API keys secured (server-side only)
- [ ] Form spam protection (reCAPTCHA or honeypot)
- [ ] Input sanitization
- [ ] SQL injection prevention (if using database)
- [ ] XSS protection
- [ ] CORS configured properly
- [ ] Security headers (Next.js config)
- [ ] Regular dependency updates

### Performance Optimization
- [ ] Image optimization (Next.js Image component)
- [ ] Lazy loading images
- [ ] Code splitting (automatic with Next.js)
- [ ] Font optimization (next/font)
- [ ] Minimize JavaScript bundle
- [ ] CSS purging (Tailwind JIT)
- [ ] CDN delivery (Vercel Edge Network)
- [ ] Caching strategy
- [ ] Compress assets (Gzip/Brotli)

### Monitoring
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (Lighthouse CI)
- [ ] Analytics (GA4, Clarity)

---

## CONTENT MIGRATION FROM OLD SITE

### Audit Current Content
1. Identify pages with good SEO value
2. Save content that should be preserved
3. Note current URL structure
4. Check for broken links
5. Export any blog posts

### 301 Redirect Map
```
Old URL → New URL
/asphal → /services/asphalt-shingles
/tile-roofing → /services/tile-roofing
/roof-coating → /services/roof-coating
/solar → /services/solar-ready
/commercial → /services/commercial
/our-work → /portfolio
/reviews → /reviews (keep or redirect to /testimonials)
/synchrony-financing → /resources/financing
/blog → /resources/blog
/resources → /resources
/contact → /contact
```

### Content Rewrite Priority
1. Homepage (complete rewrite)
2. Service pages (reorganize + enhance)
3. About (add personality)
4. Contact (simplify)
5. Reviews (restructure)
6. Blog (migrate + improve)

---

## LAUNCH CHECKLIST

### Pre-Launch (1 Week Before)
- [ ] All pages built and reviewed
- [ ] Content proofread (no typos)
- [ ] Forms tested (actual submissions)
- [ ] Mobile testing (all pages, all devices)
- [ ] Browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit passed
- [ ] Performance audit (Lighthouse 90+)
- [ ] SEO audit (meta tags, alt text, schema)
- [ ] Analytics/tracking verified
- [ ] 404 page configured
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Redirects tested
- [ ] Favicon and social share images
- [ ] Legal pages (Privacy Policy, Terms if needed)

### Launch Day
- [ ] Point domain to new site
- [ ] SSL certificate active
- [ ] Test all redirects
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor analytics for errors
- [ ] Test forms again on live site
- [ ] Check email deliverability
- [ ] Announce on social media (if applicable)

### Post-Launch (First Week)
- [ ] Monitor Google Search Console for errors
- [ ] Check analytics daily
- [ ] Review form submissions
- [ ] Track phone calls
- [ ] Fix any reported issues
- [ ] Gather client feedback
- [ ] Set up regular backups

### Post-Launch (First Month)
- [ ] Monthly analytics review
- [ ] SEO ranking check
- [ ] User feedback review
- [ ] A/B testing initiation
- [ ] Blog content planning
- [ ] Social media content schedule

---

## MAINTENANCE PLAN

### Monthly Tasks
- Review analytics
- Update blog (2 new posts/month)
- Check for broken links
- Review form submissions
- Update portfolio (new projects)
- Backup site

### Quarterly Tasks
- Performance audit
- SEO keyword review
- Content refresh (update stats, dates)
- Security updates
- User testing / feedback
- Competitor analysis

### Annual Tasks
- Full content audit
- Design refresh evaluation
- Major feature additions
- Hosting/domain renewal
- Legal compliance review (ADA, privacy)

---

## APPENDIX: DESIGN INSPIRATION

### Websites to Reference

**Premium Home Services:**
- https://www.restorationhardware.com (luxury aesthetic)
- https://www.williams-sonoma.com (clean, high-end)
- https://www.terrain.com (sophisticated, natural)

**Construction/Architecture:**
- https://www.houzz.com (portfolio inspiration)
- https://www.archdaily.com (architectural photography)
- https://www.dezeen.com (modern design)

**Service-Based Premium:**
- https://www.theblacktux.com (process clarity)
- https://www.warbyparker.com (transparency, trust)
- https://www.casper.com (clean, benefit-focused)

### Design Principles to Emulate
1. **Generous white space** — premium brands breathe
2. **Large, high-quality photography** — show don't tell
3. **Clear typography hierarchy** — guide the eye
4. **Strategic color use** — not overwhelming
5. **Minimal navigation** — focused user journey
6. **Trust signals throughout** — not just footer
7. **Mobile-first** — majority of traffic
8. **Fast loading** — attention spans short

---

## FINAL NOTES FOR CLAUDE CODE

### Project Priorities
1. **Build the design system first** — ensures consistency
2. **Homepage is critical** — invest time here
3. **Mobile experience matters most** — test constantly
4. **Performance is non-negotiable** — luxury = fast
5. **Forms must work flawlessly** — lead capture is revenue

### Creative Freedom
You have flexibility to:
- Improve component architecture
- Suggest better UX patterns
- Optimize code structure
- Add micro-interactions
- Enhance accessibility beyond minimums

### Questions to Ask
If uncertain about:
- Specific content/copy
- Client preferences for features
- Budget for third-party services
- Image assets availability
- Timeline constraints

### Success Metrics
Site is successful if:
1. Lighthouse score 90+ (all categories)
2. Mobile experience is excellent
3. Load time < 3 seconds
4. Forms convert (10%+ form fill rate)
5. Client can easily update content (CMS)
6. Site ranks for target keywords (within 6 months)
7. Leads increase 50%+ vs. old site

---

## REPOSITORY STRUCTURE

```
ar-global-roofing/
├── .github/
│   └── workflows/         # CI/CD pipelines
├── public/
│   ├── images/           # Static images
│   ├── fonts/            # Custom fonts (if self-hosting)
│   └── favicon.ico
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (site)/       # Main site pages
│   │   │   ├── page.jsx  # Homepage
│   │   │   ├── layout.jsx
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   ├── contact/
│   │   │   └── ...
│   │   ├── api/          # API routes
│   │   │   ├── contact/
│   │   │   └── newsletter/
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/           # Shadcn components
│   │   ├── layout/       # Header, Footer, Nav
│   │   ├── sections/     # Homepage sections
│   │   ├── forms/        # Form components
│   │   └── shared/       # Shared utilities
│   ├── lib/
│   │   ├── sanity.js     # Sanity client
│   │   ├── utils.js      # Utility functions
│   │   └── constants.js  # Site constants
│   ├── hooks/            # Custom React hooks
│   └── styles/           # Additional styles if needed
├── sanity/               # Sanity CMS (if in monorepo)
│   ├── schemas/
│   ├── sanity.config.js
│   └── ...
├── .env.local            # Environment variables (gitignored)
├── .env.example          # Example env file
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.js
├── package.json
├── README.md
└── DEPLOYMENT.md
```

---

## GETTING STARTED COMMANDS

```bash
# Create Next.js project
npx create-next-app@latest ar-global-roofing --typescript --tailwind --app --eslint

# Navigate to project
cd ar-global-roofing

# Install additional dependencies
npm install @sanity/client @sanity/image-url
npm install react-hook-form zod @hookform/resolvers
npm install framer-motion  # For animations
npm install lucide-react  # Icons
npm install @radix-ui/react-* # Headless UI components (via Shadcn)

# Install Shadcn UI
npx shadcn-ui@latest init

# Add Shadcn components as needed
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
# ... etc

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## SUPPORT RESOURCES

### Documentation Links
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Docs](https://ui.shadcn.com/)
- [Sanity Docs](https://www.sanity.io/docs)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

### Community & Help
- Next.js Discord
- Tailwind Discord
- Stack Overflow
- GitHub Issues for specific libraries

---

## PROJECT TIMELINE ESTIMATE

**Total: 10-12 weeks for complete implementation**

- Weeks 1-2: Setup, design system, base components
- Weeks 3-4: Core pages (home, about, contact)
- Week 5: Service pages
- Week 6: Portfolio/case studies
- Week 7: Investment guide, process page
- Week 8: Location pages, blog, resources
- Weeks 9-10: Optimization, testing, launch prep
- Week 11: Launch & monitoring
- Week 12: Post-launch fixes & refinements

---

## BUDGET CONSIDERATIONS

### Development Costs (Estimate)
- Development: $15K-$30K (depending on complexity & developer rates)
- Design assets: $2K-$5K (photography, graphics)
- Copywriting: $3K-$6K (professional content writer)
- **Total estimated:** $20K-$41K

### Ongoing Costs (Annual)
- Domain: $15-$30/year
- Hosting (Vercel Pro): $20/month = $240/year
- Sanity CMS: $0-$99/month (depends on usage)
- Email service (Resend): $0-$20/month
- Analytics (GA4): Free
- Maintenance: $200-$500/month

### Optional Costs
- Premium photography: $1K-$3K
- Video production (testimonials): $500-$2K per video
- SEO consultant: $1K-$3K/month
- Paid advertising setup: $500-$2K
- Call tracking: $50-$100/month

---

## SUCCESS CRITERIA

### Technical Success
- [ ] Site loads in < 3 seconds
- [ ] Lighthouse score 90+ (all categories)
- [ ] Mobile-friendly (Google test pass)
- [ ] Zero console errors
- [ ] Forms work 100% of the time
- [ ] No broken links
- [ ] Accessible (WCAG AA)

### Business Success
- [ ] Lead volume increases 50%+ vs. old site
- [ ] Lead quality improves (higher project values)
- [ ] Lower bounce rate (under 50%)
- [ ] Higher time on site (3+ minutes average)
- [ ] Ranking for target keywords (top 10 within 6 months)
- [ ] Client satisfaction with CMS ease of use

### User Experience Success
- [ ] Users can find information easily (task success rate 80%+)
- [ ] Forms complete without friction (10%+ conversion)
- [ ] Mobile users have excellent experience
- [ ] Site feels premium and trustworthy
- [ ] Clear next steps at every stage

---

## CONCLUSION

This project brief provides comprehensive guidance for building a premium roofing website that positions AR Global Roofing as the definitive choice for high-net-worth homeowners in North Texas.

**Key Differentiation Strategy:**
- Move from commodity contractor to premium craftsman
- Transparency builds trust (pricing, process, results)
- White-glove experience throughout customer journey
- Educational content positions as consultative experts
- Social proof architecture validates premium positioning

**Remember:** Every design decision, every word of copy, every interaction should reinforce the core promise: "The Last Roof Your Home Will Ever Need" — complete peace of mind for discerning homeowners who view their roof as a critical investment in their most valuable asset.

Build with excellence, ship with confidence, and create an experience that reflects the craftsmanship AR Global brings to every roofing project.

---

**Project Start Date:** [To be determined]
**Estimated Completion:** [10-12 weeks from start]
**Project Lead:** [Claude Code + QV (Project Manager)]

---

*This brief is a living document. Update as project evolves, requirements clarify, and new insights emerge.*

**Version:** 1.0  
**Last Updated:** November 20, 2025  
**Author:** Claude (Senior Brand Strategist & Web Designer)
