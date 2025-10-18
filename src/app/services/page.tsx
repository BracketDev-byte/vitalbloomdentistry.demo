import { generateServicesMetadata } from '@/lib/seo';
import ServicesPageContent from '@/components/sections/ServicesPageContent';

export const metadata = generateServicesMetadata();

export default function ServicesPage() {
  return <ServicesPageContent />;
}
