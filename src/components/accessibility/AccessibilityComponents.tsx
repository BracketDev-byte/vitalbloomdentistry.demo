'use client';

import React from 'react';
import { trapFocus } from '@/lib/accessibility';
import Image from 'next/image';

// Skip links for keyboard navigation
export function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Skip to main content
      </a>
      <a
        href="#main-navigation"
        className="absolute top-4 left-32 bg-primary text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Skip to navigation
      </a>
    </div>
  );
}

// Screen reader only text
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

// Accessible button component
interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export function AccessibleButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: AccessibleButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary',
    ghost: 'hover:bg-accent hover:text-accent-foreground focus:ring-primary',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <ScreenReaderOnly>Loading</ScreenReaderOnly>
        </>
      )}
      {children}
    </button>
  );
}

// Accessible form field component
interface AccessibleFormFieldProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  description?: string;
  children: React.ReactNode;
}

export function AccessibleFormField({
  label,
  id,
  required = false,
  error,
  description,
  children,
}: AccessibleFormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const descriptionId = description ? `${id}-description` : undefined;
  const describedBy = [errorId, descriptionId].filter(Boolean).join(' ');

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {description && (
        <p id={descriptionId} className="text-sm text-gray-600">
          {description}
        </p>
      )}

      {React.cloneElement(children as React.ReactElement, {
        id,
        'aria-describedby': describedBy || undefined,
        'aria-invalid': error ? 'true' : undefined,
        'aria-required': required,
      })}

      {error && (
        <p
          id={errorId}
          className="text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// Accessible image component
interface AccessibleImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
}

export function AccessibleImage({
  src,
  alt,
  fallbackSrc,
  loading = 'lazy',
  className = '',
  ...props
}: AccessibleImageProps) {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [imageError, setImageError] = React.useState(false);

  const handleError = () => {
    if (!imageError && fallbackSrc) {
      setImageSrc(fallbackSrc);
      setImageError(true);
    }
  };

  return (
    <Image
      fill
      src={imageSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}

// Accessible modal/dialog component
interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function AccessibleModal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}: AccessibleModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      const cleanup = trapFocus(modalRef.current);
      return cleanup;
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}
      >
        <div className="p-6">
          <h2 id="modal-title" className="text-lg font-semibold mb-4">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}
