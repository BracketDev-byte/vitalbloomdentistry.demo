import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderComp from '@/components/ui/Header';
import FooterSection from '@/components/sections/FooterSection';
import { StructuredData } from '@/components/seo/StructuredData';
import { baseSEO } from '@/lib/seo';
import { SkipLinks } from '@/components/accessibility/AccessibilityComponents';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = baseSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased box-border`}
      >
        <SkipLinks />
        <StructuredData type="organization" />
        <HeaderComp />
        <main id="main-content" role="main">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
