'use client';

import { ImageWithFallback } from '@/utils/imageWithFallback';
import { getImageUrl } from '@/config/constants';

interface AuthorImageProps {
  src?: string;
  alt: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getBackgroundColor = (name: string): string => {
  // Generate a consistent color based on the name
  const colors = [
    'bg-teal-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

export function AuthorImage({ 
  src, 
  alt, 
  name, 
  className = '', 
  size = 'md' 
}: AuthorImageProps) {
  const initials = getInitials(name);
  const bgColor = getBackgroundColor(name);
  const sizeClass = sizeClasses[size];

  // If no src provided or src is empty, show initials
  if (!src || src.trim() === '') {
    return (
      <div 
        className={`${sizeClass} ${bgColor} rounded-full flex items-center justify-center text-white font-semibold ${className}`}
        title={name}
      >
        {initials}
      </div>
    );
  }

  // If src is provided, try to load the image with fallback
  return (
    <div className={`relative ${sizeClass} ${className}`}>
      <ImageWithFallback
        src={getImageUrl(src)}
        alt={alt}
        className="w-full h-full rounded-full object-cover"
        onError={() => {
          // This will be handled by ImageWithFallback's error state
        }}
      />
      {/* Fallback initials overlay - only shown if image fails to load */}
      <div 
        className={`absolute inset-0 ${bgColor} rounded-full flex items-center justify-center text-white font-semibold opacity-0`}
        title={name}
      >
        {initials}
      </div>
    </div>
  );
}

// Alternative component that shows initials immediately if no image
export function AuthorImageWithInitials({ 
  src, 
  alt, 
  name, 
  className = '', 
  size = 'md' 
}: AuthorImageProps) {
  const initials = getInitials(name);
  const bgColor = getBackgroundColor(name);
  const sizeClass = sizeClasses[size];

  // If no src provided or src is empty, show initials
  if (!src || src.trim() === '') {
    return (
      <div 
        className={`${sizeClass} ${bgColor} rounded-full flex items-center justify-center text-white font-semibold ${className}`}
        title={name}
      >
        {initials}
      </div>
    );
  }

  // If src is provided, show image with initials as fallback
  return (
    <div className={`relative ${sizeClass} ${className}`}>
      <ImageWithFallback
        src={getImageUrl(src)}
        alt={alt}
        className="w-full h-full rounded-full object-cover"
      />
      {/* Fallback initials - shown when image fails to load */}
      <div 
        className={`absolute inset-0 ${bgColor} rounded-full flex items-center justify-center text-white font-semibold`}
        title={name}
        style={{ display: 'none' }} // Hidden by default, shown by CSS when image fails
      >
        {initials}
      </div>
    </div>
  );
}
