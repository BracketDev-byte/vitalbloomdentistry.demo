'use client';

import Script from 'next/script';
import { BlogPosts } from '@/utils/types';
import { 
  generateOrganizationSchema, 
  generateBlogPostSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema
} from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'blog-post' | 'service' | 'breadcrumb' | 'faq' | 'local-business';
  data?: BlogPosts | string | Array<{ name: string; url: string }> | Array<{ question: string; answer: string }>;
  slug?: string; // For service pages
}

export function StructuredData({ type, data, slug }: StructuredDataProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return generateOrganizationSchema();
      case 'blog-post':
        return data ? generateBlogPostSchema(data as BlogPosts) : null;
      case 'service':
        return slug ? generateServiceSchema(slug) : null;
      case 'breadcrumb':
        return data ? generateBreadcrumbSchema(data as Array<{ name: string; url: string }>) : null;
      case 'faq':
        return data ? generateFAQSchema(data as Array<{ question: string; answer: string }>) : null;
      case 'local-business':
        return generateLocalBusinessSchema();
      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}
