'use client';

import SectionComp from '../ui/SectionComp';
import SectionIntroduction from '../ui/sectionIntroduction';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useEffect, useState } from 'react';
import { fetchFAQByService } from '@/actions/query-actions';
import { ServiceFAQ } from '@/utils/types';

export default function QASection() {
  const [FAQs, setFAQs] = useState<ServiceFAQ | undefined>(undefined);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const FAQs = await fetchFAQByService('home-page-faq');
        setFAQs(FAQs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFAQs();
  }, []);

  const subheadText =
    'Everything you need to know about holistic dentistry and our approach to your care.';

  return (
    <SectionComp bgColor="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction
          Heading="Frequently Asked Questions"
          Subheading={subheadText}
        />

        <Accordion type="single" collapsible className="w-full">
          {FAQs?.FAQ.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionComp>
  );
}
