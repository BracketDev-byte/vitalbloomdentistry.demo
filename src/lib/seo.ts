// SEO configuration and utilities for Vital Bloom Dentistry

import { Metadata } from 'next';
import { BlogPosts } from '@/utils/types';
import { pageMetadata, serviceMetadata, defaultOGImages } from '@/config/metadata';
import { CONFIG } from '@/config/constants';

// Get the base URL dynamically based on environment
const getBaseUrl = () => {
  return CONFIG.isProduction 
    ? 'https://vitalbloomdentistry.com' 
    : CONFIG.FRONTEND_BASE_URL;
};

// Base SEO configuration
export const baseSEO = {
  title: {
    template: '%s | Vital Bloom Biological Dentistry', // %s is the placeholder for the child page title
    default: 'Vital Bloom Biological Dentistry', // Fallback title for pages without a specific title
  },
  description: 'Experience comprehensive biological dental care that prioritizes your overall health. Mercury-free, biocompatible treatments for your smile and well-being.',
  keywords: [
    'holistic dentist',
    'biological dentistry',
    'mercury-free fillings',
    'biocompatible dental treatments',
    'holistic dental care',
    'natural dentistry',
    'mercury-free dentist',
    'biological dental implants',
    'ozone therapy dentistry',
    'nutritional counseling dental'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getBaseUrl(),
    siteName: 'Vital Bloom Biological Dentistry',
    images: [
      {
        url: '/opengraph-image.png', // Use the actual OG image from public folder
        width: 1200,
        height: 630,
        alt: 'Vital Bloom Biological Dentistry - Holistic Dental Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VitalBloomDent',
    creator: '@VitalBloomDent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    // These will be set via environment variables in production
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.YANDEX_VERIFICATION || '',
    yahoo: process.env.YAHOO_VERIFICATION || '',
  },
};

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}): Metadata {
  const fullTitle = title;
  const baseUrl = getBaseUrl();
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  return {
    title: fullTitle,
    description,
    keywords: [...baseSEO.keywords, ...keywords],
    alternates: {
      canonical: canonicalUrl, // Add canonical URL for SEO
    },
    openGraph: {
      ...baseSEO.openGraph,
      type,
      title: fullTitle,
      description,
      url: canonicalUrl,
      images: image ? [
        {
          url: image.startsWith('http') ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : baseSEO.openGraph.images,
    },
    twitter: {
      ...baseSEO.twitter,
      title: fullTitle,
      description,
      images: image ? [image.startsWith('http') ? image : `${baseUrl}${image}`] : baseSEO.openGraph.images,
    },
    robots: baseSEO.robots,
    verification: baseSEO.verification,
  };
}

// Generate metadata for specific pages
export function generateHomeMetadata(): Metadata {
  return {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    keywords: [...baseSEO.keywords, ...pageMetadata.home.keywords],
    openGraph: {
      ...baseSEO.openGraph,
      title: pageMetadata.home.title,
      description: pageMetadata.home.description,
      url: '/',
      images: [
        {
          url: defaultOGImages.home,
          width: 1200,
          height: 630,
          alt: pageMetadata.home.title,
        },
      ],
    },
    twitter: {
      ...baseSEO.twitter,
      title: pageMetadata.home.title,
      description: pageMetadata.home.description,
      images: [defaultOGImages.home],
    },
    robots: baseSEO.robots,
    verification: baseSEO.verification,
  };
}

export function generateAboutMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    keywords: pageMetadata.about.keywords,
    image: defaultOGImages.about,
    url: '/about',
  });
}

export function generateServicesMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    keywords: pageMetadata.services.keywords,
    image: defaultOGImages.services,
    url: '/services',
  });
}

export function generateContactMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    keywords: pageMetadata.contact.keywords,
    image: defaultOGImages.contact,
    url: '/contact',
  });
}

export function generateReviewsMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.reviews.title,
    description: pageMetadata.reviews.description,
    keywords: pageMetadata.reviews.keywords,
    image: defaultOGImages.reviews,
    url: '/reviews',
  });
}

export function generateBlogsMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.blogs.title,
    description: pageMetadata.blogs.description,
    keywords: pageMetadata.blogs.keywords,
    image: defaultOGImages.blogs,
    url: '/blogs',
  });
}

export function generatePrivacyMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.privacy.title,
    description: pageMetadata.privacy.description,
    keywords: pageMetadata.privacy.keywords,
    image: defaultOGImages.privacy,
    url: '/privacy',
  });
}

export function generateTermsMetadata(): Metadata {
  return generatePageMetadata({
    title: pageMetadata.terms.title,
    description: pageMetadata.terms.description,
    keywords: pageMetadata.terms.keywords,
    image: defaultOGImages.terms,
    url: '/terms',
  });
}

// Generate service-specific metadata
export function generateServiceMetadata(slug: string): Metadata {
  const service = serviceMetadata[slug as keyof typeof serviceMetadata];
  if (!service) {
    return generateServicesMetadata(); // Fallback to services page
  }
  
  return generatePageMetadata({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    image: defaultOGImages.services,
    url: `/services/${slug}`,
  });
}

// Generate blog post metadata
export function generateBlogPostMetadata(post: BlogPosts): Metadata {
  const title = `${post.title} | Vital Bloom Biological Dentistry`;
  const description = post.excerpt || `Read about ${post.title} and learn more about holistic dental care at Vital Bloom Biological Dentistry.`;
  const keywords = [
    ...baseSEO.keywords,
    post.category.title.toLowerCase(),
    ...post.tags.map(tag => tag.title.toLowerCase()),
    'dental health',
    'oral wellness',
    'holistic health',
  ];

  // Use featured image as OG image, or generate dynamic OG image with alt text overlay
  const ogImage = post.featuredImage?.url 
    ? `/api/og?title=${encodeURIComponent(post.featuredImage.alternativeText || post.title)}&image=${encodeURIComponent(post.featuredImage.url)}`
    : `/api/og?title=${encodeURIComponent(post.featuredImage?.alternativeText || post.title)}`;

  return generatePageMetadata({
    title: post.title,
    description,
    keywords,
    image: ogImage,
    url: `/blogs/${post.slug}`,
    type: 'article',
  });
}

// Generate structured data for organization
export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'DentalClinic',
    name: 'Vital Bloom Biological Dentistry',
    description: 'Holistic dental care focusing on biocompatible treatments and mercury-free dentistry',
    url: baseUrl,
    telephone: process.env.PHONE_NUMBER || '+1-555-123-4567',
    email: process.env.CONTACT_EMAIL || 'info@vitalbloomdentistry.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: process.env.STREET_ADDRESS || '123 Wellness Boulevard',
      addressLocality: process.env.CITY || 'Natural City',
      addressRegion: process.env.STATE || 'NC',
      postalCode: process.env.POSTAL_CODE || '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: process.env.LATITUDE ? parseFloat(process.env.LATITUDE) : 40.7128,
      longitude: process.env.LONGITUDE ? parseFloat(process.env.LONGITUDE) : -74.0060,
    },
    openingHours: [
      'Mo-Fr 09:00-17:00',
      'Sa 09:00-15:00',
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
    currenciesAccepted: 'USD',
    medicalSpecialty: 'Dentistry',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Mercury-Free Fillings',
            description: 'Biocompatible composite fillings without mercury',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Holistic Dental Cleanings',
            description: 'Natural dental cleaning and hygiene treatments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Ozone Therapy',
            description: 'Natural ozone therapy for dental health',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Ceramic Dental Implants',
            description: 'Metal-free zirconia implants for biocompatible restoration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Nutritional Counseling',
            description: 'Personalized nutrition guidance for optimal oral health',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Biocompatibility Testing',
            description: 'Advanced testing for dental material compatibility',
          },
        },
      ],
    },
    sameAs: [
      process.env.FACEBOOK_URL || 'https://www.facebook.com/vitalbloomdentistry',
      process.env.INSTAGRAM_URL || 'https://www.instagram.com/vitalbloomdentistry',
      process.env.LINKEDIN_URL || 'https://www.linkedin.com/company/vitalbloomdentistry',
    ],
  };
}

// Generate structured data for blog post
export function generateBlogPostSchema(post: BlogPosts) {
  const baseUrl = getBaseUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage?.url ? CONFIG.getImageUrl(post.featuredImage.url) : undefined,
    author: {
      '@type': 'Person',
      name: post.authorInfo.name,
      jobTitle: post.authorInfo.roles,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vital Bloom Biological Dentistry',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blogs/${post.slug}`,
    },
    articleSection: post.category.title,
    keywords: post.tags.map(tag => tag.title).join(', '),
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${post.readTime}M`,
  };
}

// Generate structured data for service pages
export function generateServiceSchema(slug: string, serviceData?: any) {
  const baseUrl = getBaseUrl();
  const service = serviceMetadata[slug as keyof typeof serviceMetadata];
  
  if (!service) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title.replace(' - Vital Bloom Biological Dentistry', ''),
    description: service.description,
    provider: {
      '@type': 'DentalClinic',
      name: 'Vital Bloom Biological Dentistry',
      url: baseUrl,
    },
    url: `${baseUrl}/services/${slug}`,
    category: 'Dental Treatment',
    medicalSpecialty: 'Dentistry',
    bodyLocation: 'Mouth',
    preparation: 'Consultation required before treatment',
    procedureType: 'Therapeutic',
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const baseUrl = getBaseUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate local business schema for contact page
export function generateLocalBusinessSchema() {
  const baseUrl = getBaseUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'DentalClinic',
    name: 'Vital Bloom Biological Dentistry',
    description: 'Holistic dental care focusing on biocompatible treatments and mercury-free dentistry',
    url: baseUrl,
    telephone: process.env.PHONE_NUMBER || '+1-555-123-4567',
    email: process.env.CONTACT_EMAIL || 'info@vitalbloomdentistry.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: process.env.STREET_ADDRESS || '123 Wellness Boulevard',
      addressLocality: process.env.CITY || 'Natural City',
      addressRegion: process.env.STATE || 'NC',
      postalCode: process.env.POSTAL_CODE || '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: process.env.LATITUDE ? parseFloat(process.env.LATITUDE) : 40.7128,
      longitude: process.env.LONGITUDE ? parseFloat(process.env.LONGITUDE) : -74.0060,
    },
    openingHours: [
      'Mo-Fr 09:00-17:00',
      'Sa 09:00-15:00',
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
    currenciesAccepted: 'USD',
    areaServed: {
      '@type': 'City',
      name: process.env.CITY || 'Natural City',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: process.env.LATITUDE ? parseFloat(process.env.LATITUDE) : 40.7128,
        longitude: process.env.LONGITUDE ? parseFloat(process.env.LONGITUDE) : -74.0060,
      },
      geoRadius: '50000', // 50km radius
    },
  };
}
