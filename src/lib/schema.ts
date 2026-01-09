// Schema.org JSON-LD structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "AR Global Roofing",
  "image": "https://www.arglobalroofing.com/logo.png",
  "@id": "https://www.arglobalroofing.com",
  "url": "https://www.arglobalroofing.com",
  "telephone": "+1-214-555-1234",
  "email": "info@arglobalroofing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Prosper",
    "addressRegion": "TX",
    "postalCode": "75078",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.2362",
    "longitude": "-96.8011"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Prosper",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Frisco",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Plano",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "McKinney",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Allen",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Tyler",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/arglobalroofing",
    "https://www.instagram.com/arglobalroofing",
    "https://www.linkedin.com/company/ar-global-roofing"
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AR Global Roofing",
  "image": "https://www.arglobalroofing.com/logo.png",
  "@id": "https://www.arglobalroofing.com",
  "url": "https://www.arglobalroofing.com",
  "telephone": "+1-214-555-1234",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Prosper",
    "addressRegion": "TX",
    "postalCode": "75078",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.2362",
    "longitude": "-96.8011"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ]
}

export function getServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "RoofingContractor",
      "name": "AR Global Roofing",
      "telephone": "+1-214-555-1234",
      "url": "https://www.arglobalroofing.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Texas"
    },
    "url": serviceUrl
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}
