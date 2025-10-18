import { generateServiceMetadata } from '@/lib/seo';
import ServiceDetailPageContent from '@/components/sections/ServiceDetailPageContent';
import { StructuredData } from '@/components/seo/StructuredData';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  return generateServiceMetadata(slug);
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  
  return (
    <>
      <StructuredData type="service" slug={slug} />
      <ServiceDetailPageContent params={params} />
    </>
  );
}
