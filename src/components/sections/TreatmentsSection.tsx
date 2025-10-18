'use client';

import SectionIntroduction from '../ui/sectionIntroduction';
import Card from '../ui/MyCard';
import CardDetails from '../ui/CardDetails';
import SectionCta from '../ui/SectionCTA';
import SectionContainer from '../ui/SectionComp';
import { useRouter } from 'next/navigation';

export default function TreatmentsSection() {
  const router = useRouter();

  function navigateToServices() {
    router.push('/services');
  }

  function navigateToTreatmentDetail(treatmentName: string) {
    router.push(
      `/services/${treatmentName.toLowerCase().replace(/\s+/g, '-')}`
    );
  }

  const subheadingText =
    'Advanced dental treatments that prioritize your health and well-being, using only the safest and most effective methods available.';

  const treatments = [
    {
      title: 'Mercury-Free Fillings',
      description:
        'Safe, biocompatible composite fillings that match your natural tooth color and support your overall health.',
      image:
        'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU3NDQwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'No toxic materials',
        'Natural appearance',
        'Long-lasting results',
      ],
    },
    {
      title: 'Ozone Therapy',
      description:
        "Revolutionary ozone treatment for cavity prevention and gum disease, harnessing oxygen's natural healing power.",
      image:
        'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzUyMjk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Natural antimicrobial',
        'Pain-free treatment',
        'Promotes healing',
      ],
    },
    {
      title: 'Ceramic Implants',
      description:
        'Metal-free zirconia implants that integrate naturally with your body without compromising your immune system.',
      image:
        'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU3NDQwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Metal-free solution',
        'Highly biocompatible',
        'Natural aesthetics',
      ],
    },
  ];

  return (
    <SectionContainer bgColor="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction
          Heading="Our Signature Holistic Treatments"
          Subheading={subheadingText}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/*Treatments here */}
          {treatments.map((treatment, index) => (
            <Card key={index} imgUrl={treatment.image} imgAlt={treatment.title}>
              <CardDetails
                hasDate={false}
                heading={treatment.title}
                description={treatment.description}
                hasList={true}
                list={treatment.features}
                cta="Learn More"
                clicked={() => navigateToTreatmentDetail(treatment.title)}
              />
            </Card>
          ))}
        </div>

        <div className="text-center">
          <SectionCta onClick={navigateToServices} primary={true}>
            View All Treatments
          </SectionCta>
        </div>
      </div>
    </SectionContainer>
  );
}
