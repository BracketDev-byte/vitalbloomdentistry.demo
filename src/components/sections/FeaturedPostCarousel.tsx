'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { getImageUrl } from '@/config/constants';
import { formatBlogDate } from '@/utils/dateFormatter';
import { AuthorImage } from '@/components/ui/AuthorImage';
import { BlogPosts } from '@/utils/types';

interface FeaturedPostCarouselProps {
  posts: BlogPosts[];
  className?: string;
}

export function FeaturedPostCarousel({ posts, className = '' }: FeaturedPostCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || posts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  if (!posts || posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Featured Post */}
          <Link
            href={`/blogs/${currentPost.slug}`}
            className="group block"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <article className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 relative overflow-hidden rounded-2xl h-[500px]">
                <ImageWithFallback
                  src={getImageUrl(currentPost.featuredImage.url)}
                  alt={currentPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 text-primary backdrop-blur-sm">
                    Featured • {currentPost.category.title}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <time className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatBlogDate(currentPost.publishedAt)}
                  </time>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {currentPost.readTime} read
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {currentPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    {currentPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <AuthorImage
                    src={currentPost.authorInfo.profileImage?.url}
                    alt={currentPost.authorInfo.name}
                    name={currentPost.authorInfo.name}
                    size="md"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {currentPost.authorInfo.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentPost.authorInfo.roles}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium gap-2">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Link>

          {/* Navigation Arrows */}
          {posts.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Previous post"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Next post"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {posts.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Auto-play indicator */}
          {posts.length > 1 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
