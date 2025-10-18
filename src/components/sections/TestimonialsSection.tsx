'use client';

import { Quote, Star } from 'lucide-react';
import SectionContainer from '../ui/SectionComp';
import SectionCta from '../ui/SectionCTA';
import SectionIntroduction from '../ui/sectionIntroduction';
import Card from '../ui/MyCard';
import { useRouter } from 'next/navigation';

export default function TestimonialssSection() {
  const router = useRouter();

  const navigateToReviews = () => router.push('reviews');

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      rating: 5,
      text: "Dr. Smith's holistic approach transformed my oral health. The mercury-free fillings and ozone therapy helped resolve issues I've had for years. I finally found a dentist who understands the connection between dental health and overall wellness.",
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      location: 'Los Angeles, CA',
      rating: 5,
      text: "After years of traditional dentistry, I discovered Dr. Smith's practice. The biocompatible approach and natural treatments have made such a difference. I no longer experience the sensitivity and health issues I had before.",
      avatar: 'MC',
    },
  ];

  const subheadText =
    'Real stories from real patients who have experienced the benefits of holistic, mercury-free dentistry.';

  return (
    <SectionContainer bgColor="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction
          Heading="What Our Patients Are Saying"
          Subheading={subheadText}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 relative bg-white text-gray-900 flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              {testimonial.text}
            </p>

            {/* Patient info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <SectionCta onClick={navigateToReviews} secondary={true}>
          Read All Reviews
        </SectionCta>
      </div>
    </SectionContainer>
  );
}
