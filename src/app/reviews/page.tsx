import { generateReviewsMetadata } from '@/lib/seo';
import ReviewsPageContent from '@/components/sections/ReviewsPageContent';

export const metadata = generateReviewsMetadata();

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
