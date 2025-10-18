import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchBlogs } from '@/actions/query-actions';
import { BlogResponse, BlogPosts } from '@/utils/types';
import { generateBlogPostMetadata } from '@/lib/seo';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { StructuredData } from '@/components/seo/StructuredData';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogs: BlogResponse = await fetchBlogs();
  const blog = blogs.data.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Vital Bloom Biological Dentistry',
      description: 'The article you are looking for could not be found.',
    };
  }

  return generateBlogPostMetadata(blog);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blogs: BlogResponse = await fetchBlogs();
  const blog = blogs.data.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.data
    .filter((b) => b.category.slug === blog.category.slug && b.id !== blog.id)
    .slice(0, 2);

  return (
    <>
      <StructuredData type="blog-post" data={blog} />
      <BlogDetailContent blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
