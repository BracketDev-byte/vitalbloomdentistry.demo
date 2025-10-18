'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { ArrowRight, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServicesPageContent() {
  const router = useRouter();

  function navigateToContact() {
    router.push('/contact');
  }

  function navigateToTreatmentDetail(treatmentName: string) {
    router.push(`/services/${treatmentName}`);
  }

  const services = [
    {
      title: 'Mercury-Free Fillings',
      description:
        'Safe, biocompatible composite fillings that match your natural tooth color and support your overall health without toxic materials.',
      image:
        'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMGRlbnRpc3QlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU4MDA1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'BPA-free materials',
        'Natural tooth color matching',
        'Long-lasting durability',
        'No heavy metals',
      ],
    },
    {
      title: 'Holistic Dental Cleanings',
      description:
        'Comprehensive cleanings that focus on whole-body health, using gentle techniques that support your oral microbiome.',
      image:
        'https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5pc3QlMjBjbGVhbmluZyUyMHRlZXRofGVufDF8fHx8MTc1ODAwNTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Gentle cleaning techniques',
        'Microbiome-friendly approach',
        'Natural cleaning agents',
        'pH balancing protocols',
      ],
    },
    {
      title: 'Ozone Therapy',
      description:
        "Revolutionary ozone treatment for cavity prevention and gum disease, harnessing oxygen's natural healing power for optimal oral health.",
      image:
        'https://images.unsplash.com/photo-1647577923736-1cb9fea46acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvem9uZSUyMHRoZXJhcHklMjBtZWRpY2FsfGVufDF8fHx8MTc1ODAwNTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Natural antimicrobial action',
        'Pain-free treatment',
        'Accelerated healing',
        'No side effects',
      ],
    },
    {
      title: 'Ceramic Implants',
      description:
        'Metal-free zirconia implants that integrate naturally with your body without compromising your immune system or overall health.',
      image:
        'https://images.unsplash.com/photo-1650739353152-5488298a9d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZGVudGFsJTIwaW1wbGFudHxlbnwxfHx8fDE3NTgwMDU0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '100% metal-free',
        'Highly biocompatible',
        'Natural aesthetics',
        'Long-term stability',
      ],
    },
    {
      title: 'Nutritional Counseling',
      description:
        'Personalized nutrition guidance to support oral health from within, addressing root causes of dental issues through diet and lifestyle.',
      image:
        'https://images.unsplash.com/photo-1670698783848-5cf695a1b308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb25hbCUyMGNvdW5zZWxpbmclMjBoZWFsdGh8ZW58MXx8fHwxNzU4MDA1NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Personalized diet plans',
        'Supplement recommendations',
        'pH balance optimization',
        'Inflammation reduction',
      ],
    },
    {
      title: 'Biocompatibility Testing',
      description:
        'Advanced testing to determine which dental materials work best with your unique biology, ensuring optimal compatibility and health outcomes.',
      image:
        'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMGRlbnRpc3QlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU4MDA1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Individual material testing',
        'Allergy identification',
        'Customized treatment plans',
        'Ongoing monitoring',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Complete <span className="text-primary">Holistic Dental</span>{' '}
              Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Discover our comprehensive range of mercury-free, biocompatible
              dental treatments designed to support your oral health and overall
              well-being. Every service we provide prioritizes natural healing
              and long-term health.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-3"
              onClick={navigateToContact}
            >
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    fill
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() =>
                      navigateToTreatmentDetail(
                        `${service.title.toLowerCase().replace(/\s+/g, '-')}`
                      )
                    }
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Treatment Philosophy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We believe that true dental health extends far beyond your teeth and
            gums. Our holistic approach considers your entire bodys ecosystem,
            using only the safest, most biocompatible materials and treatments
            that work in harmony with your natural healing processes to promote
            lifelong wellness.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8 py-3"
            onClick={navigateToContact}
          >
            Book Your Holistic Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
