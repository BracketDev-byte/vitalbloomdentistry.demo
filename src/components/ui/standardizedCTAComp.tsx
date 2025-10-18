// Standardized CTA Sections for All Pages
// Copy and paste these into your respective page files

'use client';

import { ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { motion } from 'framer-motion';

// ===============================
// REVIEWS PAGE CTA
// ===============================
export const ReviewsPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4">Ready to Join Our Happy Patients?</h2>
        <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Experience the difference of biological, biocompatible dental care.
          Book your consultation and start your journey to better health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            className="gap-2 shadow-lg hover:shadow-xl transition-all"
            onClick={() => (window.location.href = '/contact')}
          >
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </Button>
          <Button
            variant="secondary"
            className="gap-2 shadow-lg hover:shadow-xl transition-all"
            onClick={() => (window.location.href = '/services')}
          >
            <ArrowRight className="w-4 h-4" />
            View Our Services
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ===============================
// BLOG PAGE CTA
// ===============================
export const BlogPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Stay Updated with Our Latest Insights</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Subscribe to receive our latest articles on biological dentistry, health
        tips, and exclusive practice updates.
      </p>
      <Button
        variant="secondary"
        className="gap-2 shadow-lg hover:shadow-xl transition-all"
        onClick={() => (window.location.href = '/contact')}
      >
        <ArrowRight className="w-4 h-4" />
        Subscribe to Our Newsletter
      </Button>
    </div>
  </section>
);

// ===============================
// BLOG DETAIL PAGE CTA
// ===============================
export const BlogDetailPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Experience Biological Dental Care?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Book your consultation with Dr. Martinez to learn more about our
        natural, biocompatible approach to dentistry.
      </p>
      <Button
        variant="secondary"
        className="gap-2 shadow-lg hover:shadow-xl transition-all"
        onClick={() => (window.location.href = '/contact')}
      >
        <Calendar className="w-4 h-4" />
        Schedule Your Consultation
      </Button>
    </div>
  </section>
);

// ===============================
// CONTACT PAGE CTA
// ===============================
export const ContactPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Transform Your Oral Health?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Take the first step towards mercury-free, biocompatible dental care. Our
        biological approach will help you achieve optimal oral health while
        supporting your overall wellbeing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open('tel:+442079460991', '_self')}
        >
          <Phone className="w-4 h-4" />
          Call +44 20 7946 0991
        </Button>
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open('https://wa.me/442079460991', '_blank')}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Us Now
        </Button>
      </div>
    </div>
  </section>
);

// ===============================
// ABOUT PAGE CTA
// ===============================
export const AboutPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Experience Biological Dental Care?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Book your consultation with Dr. Martinez today and discover the
        difference of personalised, biocompatible dental care.
      </p>
      <Button
        variant="secondary"
        className="gap-2 shadow-lg hover:shadow-xl transition-all"
        onClick={() => (window.location.href = '/contact')}
      >
        <Calendar className="w-4 h-4" />
        Schedule Your Consultation
      </Button>
    </div>
  </section>
);

// ===============================
// SERVICES PAGE CTA
// ===============================
export const ServicesPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Begin Your Biological Dental Journey?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Discover how our biocompatible treatments can transform your oral health
        while supporting your overall wellbeing. Book your personalised
        consultation today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/contact')}
        >
          <Calendar className="w-4 h-4" />
          Schedule Consultation
        </Button>
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/reviews')}
        >
          <ArrowRight className="w-4 h-4" />
          Read Patient Reviews
        </Button>
      </div>
    </div>
  </section>
);

// ===============================
// TREATMENT DETAIL PAGE CTA
// ===============================
export const TreatmentDetailPageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Learn More About This Treatment?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Book a consultation to discuss how this biological treatment can benefit
        your specific needs and support your overall health goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/contact')}
        >
          <Calendar className="w-4 h-4" />
          Schedule Consultation
        </Button>
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/services')}
        >
          <ArrowRight className="w-4 h-4" />
          View All Services
        </Button>
      </div>
    </div>
  </section>
);

// ===============================
// HOME PAGE CTA (for completeness)
// ===============================
export const HomePageCTA = () => (
  <section className="bg-primary text-primary-foreground py-16 border-b border-white/20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="mb-4">Ready to Transform Your Smile & Health?</h2>
      <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
        Experience the future of dentistry with our biological, mercury-free
        approach. Your journey to optimal oral health starts with a simple
        consultation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/contact')}
        >
          <Calendar className="w-4 h-4" />
          Schedule Free Consultation
        </Button>
        <Button
          variant="secondary"
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          onClick={() => (window.location.href = '/services')}
        >
          <ArrowRight className="w-4 h-4" />
          Explore Our Services
        </Button>
      </div>
    </div>
  </section>
);

/*
==============================================
USAGE INSTRUCTIONS:
==============================================

1. Copy the CTA section code you need from above
2. Replace the existing CTA section in your page file
3. Make sure to import any missing components at the top of your file:
   
   import { Button } from "./ui/button";
   import { Link } from "./Router";
   import { ArrowRight, MessageCircle, Calendar, Phone } from "lucide-react";
   import { motion } from "motion/react"; // Only needed for Reviews page

==============================================
DESIGN CONSISTENCY FEATURES:
==============================================

✅ py-16 padding (compact, consistent spacing)
✅ bg-primary text-primary-foreground (consistent background using CSS variables)
✅ border-b border-white/20 (elegant bottom border)
✅ max-w-4xl mx-auto px-6 (consistent container width and padding)
✅ h2 with mb-4 (consistent heading with default typography)
✅ text-primary-foreground/90 with max-w-2xl mx-auto (consistent description styling)
✅ variant="secondary" (consistent button variant)
✅ gap-2 (consistent icon spacing in buttons)
✅ shadow-lg hover:shadow-xl transition-all (enhanced button effects)
✅ Lucide icons for better visual appeal and consistency

==============================================
MERGED DESIGN BENEFITS:
==============================================

✅ Compact height (py-16) for better page flow
✅ Primary color background with proper contrast
✅ Enhanced buttons with icons and shadows
✅ Consistent spacing and typography
✅ Clean, professional appearance
✅ Better accessibility with proper color usage

==============================================
*/
