import {
  fetchBlogs,
  fetchCategories,
  fetchFeaturedPosts,
} from '@/actions/query-actions';
import { BlogResponse, category, FeaturedPost, BlogPosts } from '@/utils/types';
import { BlogPageContent } from '@/components/sections/BlogPageContent';
import { generateBlogsMetadata } from '@/lib/seo';

export const metadata = generateBlogsMetadata();

// TODOS(Caution Do not change styling or structure without consulting me first):
// Add Pagination in the "All Blogs Section";
// Make featured Post a 1 post at a time carousel that auto advances every 5 seconds with dots at the bottom to indicate position and allow manual navigation.
// Add Category Filtering functionality;
// This server code but I want hooks so I can add loading states and error handling, so turn data components into separate components so they can use hooks.
// LAST ACTION REFER BACK TO ME BEFORE BEGINNING: Improve SEO for the page(I still don't know how to this so you will have to explain it to me so I am competent too)

// FIXING: When hovering on featured post, the whole thing shifts up and down a bit makes it look janky. It is minor but irritating abit check it out and fix it, likely height problem with hover.

export default async function BlogPage() {
  const blogs: BlogResponse = await fetchBlogs();

  const blogsArray: BlogPosts[] = blogs.data;

  const categories: category[] = await fetchCategories();

  const featuredBlogPosts: FeaturedPost = await fetchFeaturedPosts();

  console.log('Fetched blogs:', blogsArray);

  // TODO: Turn data components into separate components so they can use hooks, this file is server side.

  return (
    <BlogPageContent
      blogs={blogs}
      categories={categories}
      featuredBlogPosts={featuredBlogPosts}
    />
  );
}
