// SEO Keywords and Metadata for DC Technologies USA
export const seoKeywords = {
  primary: [
    'IT staffing services',
    'technology recruitment',
    'IT consulting services',
    'contract staffing solutions',
    'permanent placement services',
    'workforce solutions',
  ],
  secondary: [
    'technical recruiting',
    'IT talent acquisition',
    'software developer staffing',
    'IT project staffing',
    'technology workforce solutions',
    'IT consulting company',
    'contract-to-hire staffing',
    'IT training services',
  ],
  local: [
    'IT staffing USA',
    'technology recruitment services USA',
    'IT consulting company USA',
  ],
  longTail: [
    'how to find IT contractors',
    'best IT staffing companies',
    'software developer recruitment services',
    'IT workforce management solutions',
    'technology talent acquisition strategies',
  ],
}

export const pageSEO = {
  home: {
    title: 'IT Staffing & Technology Recruitment Services | DC Technologies USA',
    description: 'Leading IT staffing and technology recruitment company. Connect with top tech talent through our expert IT consulting, contract staffing, and permanent placement services. 30+ years experience.',
    keywords: 'IT staffing, technology recruitment, IT consulting, contract staffing, permanent placement, workforce solutions',
    ogType: 'website',
    canonical: 'https://dctechnologiesusa.com',
  },
  whoWeAre: {
    title: 'About DC Technologies USA | IT Staffing & Recruitment Experts',
    description: 'Learn about DC Technologies USA - a premier IT staffing company with 30+ years of experience connecting businesses with exceptional technology talent across the USA.',
    keywords: 'about IT staffing company, technology recruitment experts, IT consulting experience',
    ogType: 'website',
    canonical: 'https://dctechnologiesusa.com/who-we-are',
  },
  services: {
    title: 'IT Staffing Services | Technology Recruitment & Consulting Solutions',
    description: 'Comprehensive IT staffing services including contract staffing, permanent placement, IT consulting, and technology training. Expert recruitment for software developers, cloud engineers, and IT professionals.',
    keywords: 'IT staffing services, technology recruitment, contract staffing, permanent placement, IT consulting, IT training',
    ogType: 'website',
    canonical: 'https://dctechnologiesusa.com/services',
  },
  contactUs: {
    title: 'Contact DC Technologies USA | IT Staffing & Recruitment Services',
    description: 'Get in touch with DC Technologies USA for your IT staffing and technology recruitment needs. Call +1 (555) 123-4567 or email info@dctechnologiesusa.com for expert staffing solutions.',
    keywords: 'contact IT staffing company, technology recruitment inquiry, IT consulting contact',
    ogType: 'website',
    canonical: 'https://dctechnologiesusa.com/contact-us',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DC Technologies USA',
  url: 'https://dctechnologiesusa.com',
  logo: 'https://dctechnologiesusa.com/logo.png',
  description: 'Leading IT staffing and technology recruitment company providing comprehensive workforce solutions including contract staffing, permanent placement, and IT consulting services.',
  email: 'info@dctechnologiesusa.com',
  telephone: '+1-555-123-4567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/dc-technologies-usa/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'info@dctechnologiesusa.com',
    availableLanguage: ['English'],
    areaServed: 'US',
  },
  foundingDate: '1994',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 90,
  },
  knowsAbout: [
    'IT Staffing',
    'Technology Recruitment',
    'Software Developer Hiring',
    'Contract Staffing',
    'Permanent Placement',
    'IT Consulting',
    'Workforce Solutions',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DC Technologies USA',
  url: 'https://dctechnologiesusa.com',
  description: 'IT staffing and technology recruitment services',
  publisher: {
    '@type': 'Organization',
    name: 'DC Technologies USA',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dctechnologiesusa.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const breadcrumbSchemas = {
  home: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dctechnologiesusa.com',
      },
    ],
  },
  whoWeAre: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dctechnologiesusa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Who We Are',
        item: 'https://dctechnologiesusa.com/who-we-are',
      },
    ],
  },
  services: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dctechnologiesusa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://dctechnologiesusa.com/services',
      },
    ],
  },
  ourTeam: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dctechnologiesusa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Team',
        item: 'https://dctechnologiesusa.com/our-team',
      },
    ],
  },
  contactUs: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dctechnologiesusa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: 'https://dctechnologiesusa.com/contact-us',
      },
    ],
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Staffing and Technology Recruitment',
  provider: {
    '@type': 'Organization',
    name: 'DC Technologies USA',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Staffing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contract Staffing',
          description: 'Flexible staffing solutions for short-term and long-term IT projects',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Permanent Placement',
          description: 'Full-time IT talent acquisition and permanent hiring services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Consulting',
          description: 'Expert IT consulting and technology advisory services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Training',
          description: 'Professional IT training and skill development programs',
        },
      },
    ],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What IT staffing services does DC Technologies USA provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DC Technologies USA provides comprehensive IT staffing services including contract staffing, permanent placement, contract-to-hire, IT consulting, and IT training services. We specialize in placing software developers, cloud engineers, cybersecurity professionals, and other technology experts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you fill IT positions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our typical time-to-fill for IT positions ranges from 2-4 weeks depending on the role complexity and requirements. We maintain a pre-screened database of qualified candidates to accelerate the hiring process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer contract-to-hire staffing solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer flexible contract-to-hire arrangements that allow you to evaluate candidates before making a permanent hiring decision. This reduces hiring risk and ensures the right fit for your organization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve diverse industries including technology startups, healthcare, finance, retail, manufacturing, and education. Our recruiters have specialized knowledge across multiple sectors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your screening process for IT candidates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our rigorous screening process includes technical assessments, skills verification, background checks, reference validation, and cultural fit evaluation to ensure we present only the most qualified candidates.',
      },
    },
  ],
}
