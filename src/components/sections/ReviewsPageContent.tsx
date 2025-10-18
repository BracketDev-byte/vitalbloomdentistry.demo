'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/utils/imageWithFallback';
import {
  Star,
  Quote,
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import {
  reviews,
  getAverageRating,
  getTotalReviews,
  getRecentReviews,
} from '@/utils/data_files/reviewsData';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReviewsPageCTA } from '@/components/ui/standardizedCTAComp';

export default function ReviewsPageContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const recentReviews = getRecentReviews(8);
  const averageRating = getAverageRating();
  const totalReviews = getTotalReviews();

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recentReviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, recentReviews.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const renderStars = (rating: number, size: string = 'w-4 h-4') => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`${size} ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Patient
              <span className="block text-primary">Reviews</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover why patients trust our holistic approach to dental care
              through their authentic experiences and transformative health
              journeys.
            </p>

            {/* Rating Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {averageRating}
                  </span>
                  <div className="flex">{renderStars(5, 'w-6 h-6')}</div>
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>

              <div className="hidden sm:block w-px h-16 bg-gray-300" />

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-gray-900">
                    {totalReviews}
                  </span>
                </div>
                <p className="text-gray-600">Happy Patients</p>
              </div>

              <div className="hidden sm:block w-px h-16 bg-gray-300" />

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-gray-900">100%</span>
                </div>
                <p className="text-gray-600">Recommendation Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Recent Patient Experiences
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real stories from patients who chose holistic dental care
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="p-12 md:p-16"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                      {/* Review Content */}
                      <div className="flex-1 text-center md:text-left">
                        <Quote className="w-12 h-12 text-primary mb-6 mx-auto md:mx-0" />

                        <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light mb-8">
                          {recentReviews[currentSlide]?.review}
                        </blockquote>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                          <div className="flex items-center gap-4">
                            <ImageWithFallback
                              src={recentReviews[currentSlide]?.avatar || ''}
                              alt={recentReviews[currentSlide]?.name || ''}
                              className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/10"
                            />
                            <div className="text-left">
                              <p className="font-semibold text-gray-900 text-lg">
                                {recentReviews[currentSlide]?.name}
                              </p>
                              <p className="text-primary font-medium">
                                {recentReviews[currentSlide]?.treatment}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex">
                                  {renderStars(
                                    recentReviews[currentSlide]?.rating || 5
                                  )}
                                </div>
                                {recentReviews[currentSlide]?.verified && (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>
                                {recentReviews[currentSlide]?.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDate(
                                  recentReviews[currentSlide]?.date || ''
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {recentReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              All Patient Reviews
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every story matters in our journey toward better health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {review.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {review.treatment}
                          </p>
                        </div>
                      </div>
                      {review.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">
                        ({review.rating}/5)
                      </span>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-gray-700 leading-relaxed font-light">
                      {review.review}
                    </blockquote>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{review.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(review.date)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReviewsPageCTA />
    </div>
  );
}
