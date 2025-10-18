export interface category {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Tags {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface featuredImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: string[];
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SEOKeywords {
  id: number;
  documentId: string;
  keyword: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface AuthorInfo {
  id: number;
  name: string;
  roles: string;
  profileImage: featuredImage;
}

export interface BlogPosts {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage: featuredImage;
  category: category;
  tags: Tags[];
  authorInfo: AuthorInfo;
  seo_keywords: SEOKeywords[];
  localizations: [];
}

export interface BlogResponse {
  data: BlogPosts[];
  meta: Meta;
}

export interface FeaturedPost {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  blogs?: BlogPosts[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ServiceFAQ {
  id: number;
  documentId: string;
  serviceName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  FAQ: FAQ[];
}

export interface ServiceFAQResponse {
  data: ServiceFAQ[];
  meta: Meta;
}
