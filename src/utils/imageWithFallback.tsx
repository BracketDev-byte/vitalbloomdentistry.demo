'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  unoptimized?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
  loading?: 'lazy' | 'eager';
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const {
    src,
    alt,
    width,
    height,
    className,
    style,
    fill = false,
    priority = false,
    sizes,
    quality,
    placeholder,
    blurDataURL,
    unoptimized = false,
    onClick,
    onLoad,
    loading = 'lazy',
  } = props;

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            width={width || 88}
            height={height || 88}
            unoptimized={true}
            data-original-url={src}
          />
        </div>
      </div>
    );
  }

  // Check if image is from localhost (for development)
  const isLocalhost = src.includes('localhost');
  const shouldUnoptimize = unoptimized || isLocalhost;

  // Handle fill prop scenario (when no width/height needed)
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        unoptimized={shouldUnoptimize}
        onError={handleError}
        onLoad={onLoad}
        onClick={onClick}
      />
    );
  }

  // Default scenario with width/height
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      style={style}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      unoptimized={shouldUnoptimize}
      loading={loading}
      onError={handleError}
      onLoad={onLoad}
      onClick={onClick}
    />
  );
}
