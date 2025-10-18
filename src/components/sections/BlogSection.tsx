'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchFeaturedPosts } from '@/actions/query-actions';
import { BlogPosts, FeaturedPost } from '@/utils/types';
import { getImageUrl } from '@/config/constants';
import { formatBlogDate } from '@/utils/dateFormatter';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPosts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredBlogPosts: FeaturedPost = await fetchFeaturedPosts();
        const blogs = featuredBlogPosts.blogs?.slice(0, 3) || [];
        setBlogs(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest News and Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in holistic dentistry
            and learn how to maintain optimal oral health naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs?.map((post) => (
            <Card
              key={post.id}
              className="bg-white overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={getImageUrl(post.featuredImage.url)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatBlogDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category?.title}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blogs/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blogs">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
