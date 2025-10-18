import { ImageWithFallback } from '@/utils/imageWithFallback';
import { ReactNode } from 'react';

interface CardProps {
  imgUrl: string;
  imgAlt: string;
  children: ReactNode;
}

export default function Card({ imgUrl, imgAlt, children }: CardProps) {
  return (
    <div className="bg-white text-gray-900 flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/*Card Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback fill src={imgUrl} alt={imgAlt} className="object-cover" />
      </div>

      {/*Card Details */}
      {children}
    </div>
  );
}
