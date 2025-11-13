import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AboutPageCTA } from '@/components/ui/standardizedCTAComp';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import {
  ArrowRight,
  Award,
  Heart,
  Users,
  Zap,
  MapPin,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

// TODO:
// The "Meet Our Dedicaded Team" section doesn't look professional. Add achievments/qualifications under each member and other styling tweaks to make it look more professional.
// Add animations so qaulifications and achievments look nicer, like number counting up animation and other sorts of animations, You must do the same in home page sections since qualifications/achiements are displayed their too. NOTE: Keep design consietent don't break them.

export default function AboutPageContent() {
  const credentials = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Board Certified',
      description: 'American Board of Holistic Dentistry',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '15+ Years',
      description: 'Holistic dental practice experience',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '2000+ Patients',
      description: 'Successfully treated with natural methods',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Mercury-Free',
      description: 'Pioneer in biocompatible dentistry',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Doctor Photo */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Photo */}
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MDA1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Sarah Martinez - Holistic Dentist"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-100 rounded-full"></div>
            </div>

            {/* Doctor Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About Vital Bloom Biological Dentistry
                </h1>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <MapPin className="w-5 h-5" />
                  <span>123 Wellness Boulevard, Natural City, NC</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Serving the community since 2010</span>
                </div>
              </div>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8 py-3"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & History
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p>
              Founded in 2010, Vital Bloom Biological Dentistry in Natural City,
              NC, was born from a vision to redefine dental care through a
              holistic lens. Dr. Sarah Martinez established the practice to
              address the growing need for mercury-free, biocompatible
              treatments that support overall well-being, not just oral health.
              Located at 123 Wellness Boulevard, our state-of-the-art clinic
              blends cutting-edge technology with natural healing principles,
              offering a sanctuary for patients seeking safe, personalized care.
            </p>
            <p>
              We pioneered mercury-safe removal protocols in the region, serving
              over 2000 patients with a commitment to toxin-free materials and
              whole-body vitality. Our team integrates advanced diagnostics,
              ozone therapy, and nutritional guidance to treat root causes, not
              just symptoms, setting us apart in the holistic dentistry field.
              Vital Bloom is dedicated to fostering a community of
              health-conscious individuals, providing education and care that
              empower lifelong wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Elements & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trust is Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proudly board-certified and mercury-free pioneers, Vital Bloom has
              served 2000+ patients with natural methods. Recognized for
              biocompatible excellence, we prioritize safety and long-term
              vitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {credentials.map((credential, index) => (
              <Card
                key={index}
                className="p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {credential.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {credential.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {credential.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Patient Testimonial */}
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-lg">
            <div className="mb-4">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                    ★
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-4">
                {`"Dr. Martinez's approach transformed my health—highly recommend!"`}
              </p>
              <p className="text-gray-600 font-medium">— John D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Dedicated Team
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Dr. Martinez */}
            <div className="space-y-6">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MDA1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Sarah Martinez"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Sarah Martinez, DDS
                </h3>
                <p className="text-primary font-medium mb-4">
                  Lead Holistic Dentist
                </p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Dr. Sarah Martinez, DDS, leads Vital Bloom with over 15
                    years of expertise in holistic dentistry. A graduate of the
                    University of California San Francisco School of Dentistry,
                    she recognized early the link between oral health and
                    systemic wellness, sparking her specialization in
                    mercury-free and biocompatible treatments.
                  </p>
                  <p>
                    Certified by the American Board of Holistic Dentistry, Dr.
                    Martinez has treated over 2000 patients, pioneering
                    mercury-safe protocols and advancing training in ozone
                    therapy and nutritional support. Her journey began with a
                    personal mission to eliminate harmful dental practices,
                    driving continuous education with leading holistic
                    organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Jane Doe */}
            <div className="space-y-6">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5pc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MDA1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jane Doe, RDH"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Jane Doe, RDH
                </h3>
                <p className="text-primary font-medium mb-4">
                  Biological Dental Hygienist
                </p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    {`Supporting Dr. Martinez is Jane Doe, RDH, our dedicated hygienist with 8 years of experience in biological dental hygiene. Jane's gentle techniques and microbiome-focused cleanings complement our philosophy, ensuring every patient feels cared for.`}
                  </p>
                  <p>
                    {`Jane specializes in natural oral care approaches that support the body's healing processes while maintaining optimal oral health. Her compassionate care and attention to detail create a comfortable environment where patients can relax and trust in their treatment.`}
                  </p>
                  <p>
                    Together, Dr. Martinez and Jane create a patient-centered
                    environment where individualized care meets natural healing,
                    addressing not just teeth but total health goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Holistic Philosophy
            </h2>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {`At Vital Bloom, we believe true dental health transcends treating symptoms—it's about nurturing your body's natural healing capacity. Our philosophy centers on using only the safest, biocompatible materials and therapies, from ozone treatments to personalized nutrition, to address root causes of oral issues. We view your mouth as a gateway to overall wellness, supporting immune function and vitality with every procedure. Dr. Martinez and our team are committed to empowering you with education and care that fosters a thriving, balanced life. This holistic commitment ensures your smile reflects not just beauty, but a foundation of health.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutPageCTA />
    </div>
  );
}
