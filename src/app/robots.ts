import { MetadataRoute } from 'next';
import { CONFIG } from '@/config/constants';

export default function robots(): MetadataRoute.Robots {
  // Use environment-specific base URL for production, fallback for development
  const baseUrl = CONFIG.isProduction 
    ? 'https://vitalbloomdentistry.com' 
    : CONFIG.FRONTEND_BASE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',           // API routes - no need to index
        '/admin/',         // Admin panel - keep private
        '/_next/',         // Next.js internal files
        '/private/',       // Private content
        '/test/',          // Test pages
        '/temp/',          // Temporary files
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
