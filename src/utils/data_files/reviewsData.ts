export interface Review {
  id: number;
  name: string;
  treatment: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  verified: boolean;
  location: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    treatment: 'Mercury-Free Fillings',
    rating: 5,
    date: '2024-01-15',
    review:
      'Dr. Martinez and her team provided exceptional care during my mercury-free filling procedure. The biocompatible materials they used have made such a difference in how I feel overall. The entire process was comfortable and professionally handled. I finally found a dentist who truly understands the connection between oral health and overall wellness.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b9c9c6e4?q=80&w=150',
    verified: true,
    location: 'Beverly Hills, CA',
  },
  {
    id: 2,
    name: 'Michael Chen',
    treatment: 'Biological Root Canal Therapy',
    rating: 5,
    date: '2023-12-08',
    review:
      "I was hesitant about root canal therapy until I learned about Dr. Martinez's biological approach. The use of ozone therapy and biocompatible materials made all the difference. No pain, faster healing, and I feel confident about the long-term health benefits. This practice truly prioritizes patient health over convenience.",
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
    verified: true,
    location: 'Santa Monica, CA',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    treatment: 'Ceramic Dental Implants',
    rating: 5,
    date: '2024-02-20',
    review:
      'After years of wearing a partial denture, I decided to get ceramic implants. Dr. Martinez explained every step of the process and why ceramic implants are superior to titanium for overall health. The results exceeded my expectations - both aesthetically and functionally. I can eat confidently again and my smile looks completely natural.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
    verified: true,
    location: 'Westwood, CA',
  },
  {
    id: 4,
    name: 'Robert Thompson',
    treatment: 'Safe Amalgam Removal',
    rating: 5,
    date: '2023-11-12',
    review:
      'The safe amalgam removal process at this practice is thorough and professional. Dr. Martinez follows strict IAOMT protocols, which gave me complete confidence in the procedure. The oxygen and protective measures used during removal were impressive. I noticed improved energy levels within weeks of having my old mercury fillings safely removed.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    verified: true,
    location: 'Manhattan Beach, CA',
  },
  {
    id: 5,
    name: 'Lisa Park',
    treatment: 'Ozone Therapy',
    rating: 5,
    date: '2024-01-30',
    review:
      "Ozone therapy has been a game-changer for my gum health. Dr. Martinez recommended this treatment for my recurring gum issues, and the results have been remarkable. The treatment is comfortable and the healing properties of medical ozone are incredible. My gums are healthier than they've been in years.",
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
    verified: true,
    location: 'Pasadena, CA',
  },
  {
    id: 6,
    name: 'David Wilson',
    treatment: 'Biocompatible Dentistry Consultation',
    rating: 5,
    date: '2023-12-22',
    review:
      "Dr. Martinez's comprehensive approach to biocompatible dentistry impressed me from the first consultation. She took the time to explain how different materials could affect my health and created a personalized treatment plan. The biocompatibility testing helped identify the best materials for my body. This is truly personalized healthcare.",
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    verified: true,
    location: 'Culver City, CA',
  },
  {
    id: 7,
    name: 'Jennifer Martinez',
    treatment: 'Holistic Cleaning & Prevention',
    rating: 5,
    date: '2024-02-05',
    review:
      "The holistic approach to dental cleaning and prevention at this practice is outstanding. They use natural methods and focus on prevention rather than just treatment. The team educated me about nutrition's impact on oral health and provided natural alternatives to harsh chemicals. My teeth and gums have never felt better.",
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150',
    verified: true,
    location: 'Redondo Beach, CA',
  },
  {
    id: 8,
    name: 'Thomas Anderson',
    treatment: 'Ceramic Dental Implants',
    rating: 5,
    date: '2023-10-18',
    review:
      "I researched extensively before choosing ceramic implants, and Dr. Martinez's expertise convinced me this was the right choice. The metal-free approach aligns with my health goals, and the aesthetic results are phenomenal. The implants integrate beautifully and feel completely natural. Worth every penny for the peace of mind and quality.",
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=150',
    verified: true,
    location: 'Venice, CA',
  },
  {
    id: 9,
    name: 'Amanda Foster',
    treatment: 'Safe Amalgam Removal',
    rating: 5,
    date: '2024-01-08',
    review:
      "Having my amalgam fillings safely removed was one of the best health decisions I've made. Dr. Martinez's protocol is meticulous - from the protective equipment to the air filtration systems. The replacement with biocompatible materials was seamless. I've experienced improved sleep and overall energy since the procedure.",
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
    verified: true,
    location: 'El Segundo, CA',
  },
  {
    id: 10,
    name: 'Kevin Lee',
    treatment: 'Biological Root Canal Therapy',
    rating: 5,
    date: '2023-11-25',
    review:
      "Dr. Martinez's biological approach to root canal therapy saved my tooth while prioritizing my overall health. The use of ozone and biocompatible materials, combined with her gentle technique, made the experience surprisingly comfortable. The healing was faster than expected, and I appreciate the long-term health benefits of this approach.",
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150',
    verified: true,
    location: 'Marina del Rey, CA',
  },
  {
    id: 11,
    name: 'Rachel Green',
    treatment: 'Ozone Therapy',
    rating: 5,
    date: '2024-02-12',
    review:
      'Ozone therapy for my persistent gum inflammation has been incredibly effective. Dr. Martinez explained how medical ozone helps the body heal naturally without harsh chemicals. The treatments are quick, comfortable, and the results speak for themselves. My periodontal health has improved dramatically, and I love the natural approach.',
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=150',
    verified: true,
    location: 'Hermosa Beach, CA',
  },
  {
    id: 12,
    name: 'Steven Clark',
    treatment: 'Biocompatible Dentistry Consultation',
    rating: 5,
    date: '2023-12-01',
    review:
      "The comprehensive biocompatible dentistry consultation opened my eyes to how dental materials can impact overall health. Dr. Martinez's knowledge of material science and biology is impressive. The biocompatibility testing ensured the materials chosen were optimal for my body. This personalized approach to dentistry is the future of healthcare.",
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150',
    verified: true,
    location: 'Torrance, CA',
  },
];

// Helper function to get average rating
export const getAverageRating = (): number => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};

// Helper function to get total review count
export const getTotalReviews = (): number => {
  return reviews.length;
};

// Helper function to get reviews by rating
export const getReviewsByRating = (rating: number): Review[] => {
  return reviews.filter((review) => review.rating === rating);
};

// Helper function to get recent reviews
export const getRecentReviews = (limit: number = 6): Review[] => {
  return reviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
