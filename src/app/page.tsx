import AboutSection from '@/components/sections/AboutSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import QASection from '@/components/sections/QASection';
import TestimonialssSection from '@/components/sections/TestimonialsSection';
import TreatmentsSection from '@/components/sections/TreatmentsSection';
import WhyChooseUseSection from '@/components/sections/WhyChooseUsSection';
import { generateHomeMetadata } from '@/lib/seo';

export const metadata = generateHomeMetadata();

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUseSection />
      <TreatmentsSection />
      <BlogSection />
      <AboutSection />
      <TestimonialssSection />
      <ContactSection />
      <QASection />
    </>
  );
}
