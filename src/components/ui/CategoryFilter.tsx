'use client';

import { Button } from '@/components/ui/button';
import { category } from '@/utils/types';

interface CategoryFilterProps {
  categories: category[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  className?: string;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  className = '' 
}: CategoryFilterProps) {
  const handleCategoryClick = (categorySlug: string | null) => {
    onCategoryChange(categorySlug);
    
    // Scroll to the all blogs section
    setTimeout(() => {
      const allBlogsSection = document.getElementById('all-blogs-section');
      if (allBlogsSection) {
        allBlogsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => handleCategoryClick(null)}
        className="rounded-full transition-all duration-200"
      >
        All Posts
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          onClick={() => handleCategoryClick(category.slug)}
          className="rounded-full transition-all duration-200"
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}
