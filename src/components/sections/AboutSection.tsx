'use client';

import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import SectionContainer from '../ui/SectionComp';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import SectionCta from '../ui/SectionCTA';
import { useRouter } from 'next/navigation';

export default function AboutSection() {
  const router = useRouter();

  const navigateToAbout = () => router.push('/about');

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Advanced Education',
      description: 'DDS from Harvard School of Dental Medicine',
    },
    {
      icon: Award,
      title: 'Board Certified',
      description: 'Certified in Biological & Holistic Dentistry',
    },
    {
      icon: Users,
      title: '15+ Years Experience',
      description: 'Specializing in mercury-free treatments',
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'Integrative health and wellness focus',
    },
  ];

  return (
    <SectionContainer bgColor="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Side - Image */}
          <div className="relative">
            <div className="relative z-10 w-full mb-8 h-[500px]">
              <ImageWithFallback
                fill
                src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzUyMjk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Sarah Smith, DDS"
                className=" max-w-md mx-autoobject-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/*Right Content */}
          <div className="space-y-8 h-full">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                About The Doctor
              </h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Dr. Sarah Smith, DDS</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Dr. Smith is a pioneer in holistic dentistry with over 15
                  years of experience in mercury-free and biocompatible
                  treatments. She believes in treating the whole person, not
                  just the teeth, and is dedicated to providing the safest and
                  most effective dental care possible.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Her practice focuses on the connection between oral health and
                  overall wellness, using advanced techniques like ozone
                  therapy, laser treatments, and nutritional counseling to help
                  patients achieve optimal health.
                </p>
              </div>
            </div>

            {/* Credidentials */}
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <credential.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-gray-100">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <SectionCta onClick={navigateToAbout}>Meet Our Team</SectionCta>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
