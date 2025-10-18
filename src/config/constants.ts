// Centralized configuration for all URLs and environment variables
// This makes it easy to switch between development and production environments

export const CONFIG = {
  // API URLs
  STRAPI_BASE_URL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  
  // Frontend URLs
  FRONTEND_BASE_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
  
  // Image URLs - these will be used throughout the app
  getImageUrl: (imagePath: string) => {
    if (!imagePath) return '';
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) return imagePath;
    // Otherwise, prepend the Strapi base URL
    return `${CONFIG.STRAPI_BASE_URL}${imagePath}`;
  },
  
  // Social sharing URLs
  getShareUrl: (path: string) => {
    return `${CONFIG.FRONTEND_BASE_URL}${path}`;
  },
  
  // Environment detection
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

// Export individual constants for convenience
export const STRAPI_BASE_URL = CONFIG.STRAPI_BASE_URL;
export const FRONTEND_BASE_URL = CONFIG.FRONTEND_BASE_URL;
export const getImageUrl = CONFIG.getImageUrl;
export const getShareUrl = CONFIG.getShareUrl;
