# Environment Setup for Production Deployment

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# For production, replace with your actual Strapi URL:
# NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com

# Frontend URL (used for social sharing)
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
# For production, replace with your actual frontend URL:
# NEXT_PUBLIC_FRONTEND_URL=https://your-domain.com

# Optional: Strapi API Token (if you need to query protected content)
# BACKEND_API_TOKEN=your_strapi_token_here
```

## Production Deployment Checklist

1. **Update Environment Variables**: Replace localhost URLs with your production URLs
2. **Build the Application**: Run `npm run build` to create production build
3. **Deploy**: Deploy the built files to your hosting platform
4. **Verify**: Test all functionality with production URLs

## URL Configuration

All URLs are now centralized in `src/config/constants.ts`:
- API calls use `STRAPI_BASE_URL`
- Social sharing uses `FRONTEND_BASE_URL`
- Image URLs are automatically constructed using the centralized configuration

This makes it easy to switch between development and production environments by simply changing the environment variables.
