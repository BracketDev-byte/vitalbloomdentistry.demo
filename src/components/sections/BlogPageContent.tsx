'use client';

import { useState } from 'react';
import { BlogPosts, BlogResponse, category, FeaturedPost } from '@/utils/types';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { BlogList } from '@/components/sections/BlogList';
import { FeaturedPostCarousel } from '@/components/sections/FeaturedPostCarousel';
import { BlogPageCTA } from '@/components/ui/standardizedCTAComp';

interface BlogPageContentProps {
  blogs: BlogResponse;
  categories: category[];
  featuredBlogPosts: FeaturedPost;
}

export function BlogPageContent({
  blogs,
  categories,
  featuredBlogPosts,
}: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Holistic Dental Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on natural dentistry, biocompatible treatments,
              and the connection between oral health and overall wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Featured Post Carousel */}
      {featuredBlogPosts.blogs && featuredBlogPosts.blogs.length > 0 && (
        <FeaturedPostCarousel posts={featuredBlogPosts.blogs} />
      )}

      {/* All Blog Posts with Pagination and Filtering */}
      <section id="all-blogs-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our latest insights on holistic dental care
            </p>
          </div>

          <BlogList
            initialBlogs={blogs.data}
            initialMeta={blogs.meta}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <BlogPageCTA />
    </div>
  );
}
