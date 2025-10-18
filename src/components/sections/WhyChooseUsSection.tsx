import SectionContainer from '../ui/SectionComp';
import SectionIntroduction from '../ui/sectionIntroduction';
import { Shield, Heart, Leaf, Award, Clock, Users } from 'lucide-react';

export default function WhyChooseUseSection() {
  const subheadingText =
    'Our commitment to holistic health sets us apart. We believe your oral health is connected to your overall well-being, and we treat you accordingly.';

  const features = [
    {
      icon: Shield,
      title: 'Mercury-Free Practice',
      description:
        "100% mercury-free dentistry using only biocompatible materials that support your body's natural healing processes.",
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description:
        'We treat the connection between oral health and overall wellness, considering your entire body in our treatment plans.',
    },
    {
      icon: Leaf,
      title: 'Natural Treatments',
      description:
        'Utilizing ozone therapy, laser treatments, and natural healing methods to promote optimal oral health.',
    },
    {
      icon: Award,
      title: 'Expert Care',
      description:
        'Board-certified biological dentists with advanced training in holistic and integrative dental medicine.',
    },
    {
      icon: Clock,
      title: 'Comprehensive Exams',
      description:
        'Thorough evaluations including nutritional counseling and lifestyle factors affecting your oral health.',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description:
        'Personalized treatment plans tailored to your unique health needs and wellness goals.',
    },
  ];

  return (
    <SectionContainer bgColor="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction
          Heading="Why Choose Us?"
          Subheading={subheadingText}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idex) => (
            <div key={idex} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
