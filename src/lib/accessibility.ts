// Accessibility utilities and components for Vital Bloom Biological Dentistry
// Ensures WCAG 2.1 AA compliance and optimal user experience for all users

import React from 'react';

// ARIA labels and descriptions for common elements
export const ARIA_LABELS = {
  navigation: {
    main: 'Main navigation',
    footer: 'Footer navigation',
    breadcrumb: 'Breadcrumb navigation',
    pagination: 'Pagination navigation',
  },
  content: {
    main: 'Main content',
    article: 'Article content',
    section: 'Content section',
    aside: 'Supplementary content',
  },
  forms: {
    contact: 'Contact form',
    appointment: 'Appointment booking form',
    search: 'Search form',
    newsletter: 'Newsletter subscription form',
  },
  buttons: {
    menu: 'Toggle navigation menu',
    search: 'Search',
    submit: 'Submit form',
    close: 'Close dialog',
    next: 'Next page',
    previous: 'Previous page',
  },
};

// Focus management utilities
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  function handleTabKey(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

// Color contrast utilities
export const COLOR_CONTRAST = {
  // Ensure WCAG AA compliance (4.5:1 ratio for normal text, 3:1 for large text)
  primary: '#0d9488', // Teal-600 - good contrast on white
  secondary: '#64748b', // Slate-500 - good contrast on white
  success: '#059669', // Emerald-600 - good contrast on white
  warning: '#d97706', // Amber-600 - good contrast on white
  error: '#dc2626', // Red-600 - good contrast on white
  text: {
    primary: '#111827', // Gray-900 - excellent contrast on white
    secondary: '#374151', // Gray-700 - good contrast on white
    muted: '#6b7280', // Gray-500 - acceptable contrast on white
  },
};

// Motion and animation preferences
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// High contrast mode detection
export function useHighContrast() {
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isHighContrast;
}
