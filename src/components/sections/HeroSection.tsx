'use client';

import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  function navigateToContact() {
    router.push('/contact');
  }

  function navigateToServices() {
    router.push('/services');
  }

  return (
    <section className="box-border bg-gradient-to-br from-teal-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-25">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Content */}

          <div className="space-y-8">
            {/*Copy */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Bloom with{' '}
                <span className="text-teal-600">Vital, Biological</span>{' '}
                Dentistry
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience comprehensive biological dental care that nurtures your
                overall vitality. Our mercury-free, biocompatible approach ensures
                your smile blooms with health and well-being for life.
              </p>
            </div>

            {/*CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={navigateToContact}
                className="flex justify-center items-center rounded-lg py-2 px-4 text-sm   text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 mt-1" />
              </button>
              <button
                onClick={navigateToServices}
                className="border text-primary text-sm bg-white py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Discover Our Treatments
              </button>
            </div>

            {/*trust indicator */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Mercury-Free</div>
              </div>
            </div>
          </div>

          {/*Right Content */}
          <div className="relative">
            <div className="relative z-10 w-full h-[500px]">
              <ImageWithFallback
                fill
                src="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBkZW50YWx8ZW58MXx8fHwxNzU3NTIyOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy patient with beautiful smile"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
