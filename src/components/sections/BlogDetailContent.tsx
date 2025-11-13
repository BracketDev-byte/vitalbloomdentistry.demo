'use client';

import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
} from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { BlogDetailPageCTA } from '@/components/ui/standardizedCTAComp';
import { BlogPosts } from '@/utils/types';
import { getImageUrl, getShareUrl } from '@/config/constants';
import { formatBlogDate } from '@/utils/dateFormatter';
import { AuthorImage } from '@/components/ui/AuthorImage';
import { StructuredData } from '@/components/seo/StructuredData';

interface BlogDetailContentProps {
  blog: BlogPosts;
  relatedBlogs: BlogPosts[];
}

export function BlogDetailContent({
  blog,
  relatedBlogs,
}: BlogDetailContentProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const article = document.getElementById('article-content');
      if (!article) return;

      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top;
      const articleHeight = articleRect.height;
      const windowHeight = window.innerHeight;

      // Calculate how much of the article is visible

      const scrolledHeight = Math.max(0, -articleTop);

      // Calculate progress based on how much has been scrolled through the article
      const progress = Math.min(
        100,
        Math.max(0, (scrolledHeight / articleHeight) * 100)
      );

      setReadingProgress(Math.round(progress));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const shareUrl = getShareUrl(`/blogs/${blog.slug}`);

  const handleShare = (platform: string) => {
    const text = blog.title;
    const url = shareUrl;

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <>
      <StructuredData type="blog-post" data={blog} />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
          {/* Reading Progress Bar - positioned under navbar */}
          <div className="fixed top-12 left-0 w-full h-1 bg-gray-100 z-60">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/blogs">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('copy')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Link2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <header className="mb-12">
            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {blog.category.title}
              </span>
              <time className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatBlogDate(blog.publishedAt)}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blog.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              {blog.excerpt}
            </p>

            {/* Author and Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <AuthorImage
                  src={blog.authorInfo.profileImage?.url}
                  alt={blog.authorInfo.name}
                  name={blog.authorInfo.name}
                  size="lg"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {blog.authorInfo.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {blog.authorInfo.roles}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {tag.title}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <ImageWithFallback
              src={getImageUrl(blog.featuredImage.url)}
              alt={blog.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div
            id="article-content"
            className="prose prose-lg prose-gray max-w-none"
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-12 leading-tight tracking-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10 leading-tight tracking-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8 leading-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 mb-8">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700 leading-relaxed font-light">
                      {children}
                    </span>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-8 rounded-r">
                    <div className="text-lg text-gray-700 italic font-light">
                      {children}
                    </div>
                  </blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-gray-700">{children}</em>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Author Bio */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <AuthorImage
                    src={blog.authorInfo.profileImage?.url}
                    alt={blog.authorInfo.name}
                    name={blog.authorInfo.name}
                    size="xl"
                    className="ring-4 ring-primary/10"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {blog.authorInfo.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {blog.authorInfo.roles}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                    Dr. Sarah Martinez is a leading expert in holistic dentistry
                    with over 15 years of experience. She is committed to
                    providing mercury-free, biocompatible dental care that
                    supports overall health and wellness.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Follow on Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      More Articles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  More from Holistic Dentistry
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Continue exploring topics that matter to your oral health
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.slug}`}
                  >
                    <article className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <ImageWithFallback
                          src={getImageUrl(relatedBlog.featuredImage.url)}
                          alt={relatedBlog.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm">
                            {relatedBlog.category.title}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <time className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatBlogDate(relatedBlog.publishedAt)}
                          </time>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {relatedBlog.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                          {relatedBlog.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed font-light line-clamp-3">
                          {relatedBlog.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <BlogDetailPageCTA />
      </div>
    </>
  );
}
