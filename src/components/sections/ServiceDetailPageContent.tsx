'use client';

import { ArrowLeft, Calendar, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { treatmentData } from '@/utils/data_files/treatmentData';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import { use, useEffect, useState } from 'react';
import { faqData } from '@/utils/data_files/treatmentFAQData';
import { TreatmentDetailPageCTA } from '@/components/ui/standardizedCTAComp';
import { ServiceFAQ } from '@/utils/types';
import { fetchFAQByService } from '@/actions/query-actions';

// TODO:
// Make the FAQ acordion instead of card list.
export default function ServiceDetailPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const treatment = treatmentData.find((t) => t.slug === slug);
  // const treatmentFAQ = faqData.find((q) => q.slug === slug);

  const [FAQs, setFAQs] = useState<ServiceFAQ | undefined>(undefined);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const FAQs = await fetchFAQByService(slug);
        setFAQs(FAQs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFAQs();
  }, [slug]);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="mb-4">Treatment Not Found</h1>
            <p className="text-muted-foreground mb-8">{`The treatment you're looking for doesn't exist.`}</p>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Image mapping based on treatment slug
  const getImageUrl = (slug: string) => {
    const imageMap: Record<string, string> = {
      'mercury-free-fillings':
        'https://images.unsplash.com/photo-1660737217649-e3bd4ef2888a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBmaWxsaW5nJTIwY29tcG9zaXRlJTIwdG9vdGh8ZW58MXx8fHwxNzU4MDk0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'holistic-dental-cleanings':
        'https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGVhbmluZyUyMHRlZXRoJTIwaHlnaWVuaXN0fGVufDF8fHx8MTc1ODA5NDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'ozone-therapy':
        'https://images.unsplash.com/photo-1630128295920-627fb9aff5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwb3h5Z2VuJTIwdGhlcmFweSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTgwOTQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'ceramic-implants':
        'https://images.unsplash.com/photo-1650739353152-5488298a9d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwY2VyYW1pYyUyMHRvb3RofGVufDF8fHx8MTc1ODA5NDg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'nutritional-counseling':
        'https://images.unsplash.com/photo-1617957854609-873e56de0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwZm9vZCUyMGRpZXR8ZW58MXx8fHwxNzU4MDk0ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'biocompatibility-testing':
        'https://images.unsplash.com/photo-1599727277757-3f54e54ea618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3RpbmclMjBsYWJ8ZW58MXx8fHwxNzU4MDk0ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    };
    return imageMap[slug] || '';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </button>
            <span>/</span>
            <span className="text-foreground">{treatment.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">{treatment.title}</h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {treatment.shortDescription}
              </p>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="mb-4">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {treatment.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  onClick={() => (window.location.href = '/contact')}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open('tel:+1-555-SMILE-1', '_self')}
                >
                  <Phone className="w-4 h-4" />
                  Call (555) SMILE-1
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <ImageWithFallback
                  fill
                  src={getImageUrl(treatment.slug)}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6">About This Treatment</h2>
              <div className="prose prose-gray max-w-none">
                <p className="leading-relaxed text-muted-foreground">
                  {treatment.fullDescription}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-b from-white to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Treatment Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure the best outcomes for
              your health and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-primary">1</span>
                </div>
                <h3 className="mb-3">Consultation</h3>
                <p className="text-muted-foreground">
                  Comprehensive assessment of your oral health and discussion of
                  treatment options.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-primary">2</span>
                </div>
                <h3 className="mb-3">Planning</h3>
                <p className="text-muted-foreground">
                  Personalized treatment plan designed specifically for your
                  unique needs and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-primary">3</span>
                </div>
                <h3 className="mb-3">Treatment</h3>
                <p className="text-muted-foreground">
                  Gentle, effective treatment using the latest biocompatible
                  materials and techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about {treatment.title.toLowerCase()}.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQs?.FAQ.map((QA, index) => (
              <AccordionItem
                key={QA.id}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary py-6">
                  {QA.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {QA.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Final CTA Section */}
      <TreatmentDetailPageCTA />
    </div>
  );
}
