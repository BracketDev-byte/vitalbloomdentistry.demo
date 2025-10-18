import { STRAPI_BASE_URL } from '@/config/constants';
import { ServiceFAQ, ServiceFAQResponse } from '@/utils/types';

const BASE_URL = STRAPI_BASE_URL;

async function fetchFromAPI(pathName: string) {
  try {
    const url = new URL(pathName, BASE_URL);
    // console.log('Fetching from URL:', url.href); // Debug log
    const response = await fetch(url.href);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from ${pathName}:`, error);
    return { data: [] }; // Return empty data structure instead of throwing
  }
}

export async function fetchBlogs() {
  const data = await fetchFromAPI(
    '/api/blogs?populate[0]=featuredImage&populate[1]=category&populate[2]=tags&populate[3]=authorInfo&populate[4]=authorInfo.profileImage&populate[5]=seo_keywords'
  );
  return data;
}

export async function fetchCategories() {
  const data = await fetchFromAPI('/api/categories');
  return data.data || [];
}

export async function fetchFeaturedPosts() {
  const data = await fetchFromAPI(
    '/api/featured-blog?populate[blogs][populate][0]=featuredImage&populate[blogs][populate][1]=category&populate[blogs][populate][2]=tags&populate[blogs][populate][3]=authorInfo&populate[blogs][populate][4]=authorInfo.profileImage&populate[blogs][populate][5]=seo_keywords'
  );
  return data.data || null;
}

export async function fetchFAQByService(serviceSlug: string) {
  const data: ServiceFAQResponse = await fetchFromAPI(
    '/api/service-faqs?populate=*'
  );

  const foundData: ServiceFAQ | undefined = data.data.find(
    (service) => service.slug === serviceSlug
  );

  return foundData;
}
