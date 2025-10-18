import { generateAboutMetadata } from '@/lib/seo';
import AboutPageContent from '@/components/sections/AboutPageContent';

export const metadata = generateAboutMetadata();

export default function AboutPage() {
  return <AboutPageContent />;
}
