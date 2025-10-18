import { MetadataRoute } from 'next';
import { fetchBlogs } from '@/actions/query-actions';
import { BlogResponse } from '@/utils/types';
import { CONFIG } from '@/config/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use environment-specific base URL for production, fallback for development
  const baseUrl = CONFIG.isProduction 
    ? 'https://vitalbloomdentistry.com' 
    : CONFIG.FRONTEND_BASE_URL;
  
  // Static pages with proper priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority for services page
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Service pages with dynamic slugs
  const servicePages = [
    'mercury-free-fillings',
    'holistic-dental-cleanings',
    'ozone-therapy',
    'ceramic-implants',
    'nutritional-counseling',
    'biocompatibility-testing',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority for individual services
  }));

  // Blog pages with error handling
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs: BlogResponse = await fetchBlogs();
    blogPages = blogs.data.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Medium priority for blog posts
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // Continue without blog pages if there's an error
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
