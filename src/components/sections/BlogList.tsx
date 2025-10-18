'use client';

import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchBlogs } from '@/actions/query-actions';
import { BlogPosts, BlogResponse } from '@/utils/types';
import { getImageUrl } from '@/config/constants';
import { formatBlogDate } from '@/utils/dateFormatter';
import { Pagination, CompactPagination } from '@/components/ui/Pagination';
import {Button} from '../ui/button';

interface BlogListProps {
  initialBlogs: BlogPosts[];
  initialMeta: any;
  selectedCategory?: string | null;
  onCategoryChange?: (categorySlug: string | null) => void;
  className?: string;
}

const POSTS_PER_PAGE = 6;

export function BlogList({ 
  initialBlogs, 
  initialMeta, 
  selectedCategory = null,
  onCategoryChange,
  className = '' 
}: BlogListProps) {
  const [blogs, setBlogs] = useState<BlogPosts[]>(initialBlogs);
  const [meta, setMeta] = useState(initialMeta);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory 
    ? blogs.filter(blog => blog.category.slug === selectedCategory)
    : blogs;

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  // Get paginated blogs
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => {
            setError(null);
            setCurrentPage(1);
          }}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-2 text-gray-600">Loading blogs...</p>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedBlogs.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative">
              <ImageWithFallback
                src={getImageUrl(post.featuredImage.url)}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category.title}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatBlogDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((t) => (
                  <span
                    key={t.id}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {t.title}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{post.authorInfo.name}</span>
                </div>
                <Link href={`/blogs/${post.slug}`}>
                  <Button variant="secondary" size="sm" asChild>
                    <span>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center space-y-4">
        {/* Desktop Pagination */}
        <div className="hidden md:block">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Mobile Pagination */}
        <div className="md:hidden w-full">
          <CompactPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Page Info */}
        <p className="text-sm text-gray-500 text-center">
          Showing {paginatedBlogs.length} of {filteredBlogs.length} articles
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      </div>
    </div>
  );
}
