import { generateContactMetadata } from '@/lib/seo';
import ContactPageContent from '@/components/sections/ContactPageContent';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata = generateContactMetadata();

export default function ContactPage() {
  return (
    <>
      <StructuredData type="local-business" />
      <ContactPageContent />
    </>
  );
}
