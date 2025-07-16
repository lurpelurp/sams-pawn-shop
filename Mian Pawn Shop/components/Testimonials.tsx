'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Griffin, GA',
    rating: 5,
    date: 'December 2024',
    photo: '/testimonials/sarah.webp',
    text: 'Sam\'s Pawn Shop helped me get cash quickly when I needed it most. They were professional, fair, and made the whole process easy. Highly recommend!',
    item: 'Diamond Ring'
  },
  {
    id: 2,
    name: 'Mike R.',
    location: 'McDonough, GA',
    rating: 5,
    date: 'November 2024',
    photo: '/testimonials/mike.webp',
    text: 'I\'ve been coming here for years. They always give me the best deals and their inventory is amazing. Found a great laptop for my son\'s college!',
    item: 'MacBook Pro'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    location: 'Hampton, GA',
    rating: 5,
    date: 'October 2024',
    photo: '/testimonials/jennifer.webp',
    text: 'The staff is incredibly knowledgeable about jewelry. They helped me understand the value of my grandmother\'s antique pieces. Trustworthy and honest!',
    item: 'Antique Jewelry'
  },
  {
    id: 4,
    name: 'David K.',
    location: 'Fayetteville, GA',
    rating: 5,
    date: 'September 2024',
    photo: '/testimonials/david.webp',
    text: 'Needed cash fast for an emergency. Sam\'s gave me a fair price for my tools and the money was in my hand in minutes. Great service!',
    item: 'Tool Collection'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-gold' : 'text-gray-300'}>
      ⭐
    </span>
  ));
};

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-section-y px-section-x bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">25+</div>
            <div className="text-gray-medium">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10K+</div>
            <div className="text-gray-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">4.9</div>
            <div className="text-gray-medium">Star Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-gray-medium">Licensed & Insured</div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-light rounded-card-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Customer Info */}
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-medium">{testimonial.location}</div>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(testimonial.rating)}
                      <span className="text-sm text-gray-medium ml-2">{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-dark mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Item Info */}
                <div className="text-sm text-gray-medium">
                  <span className="font-medium">Item:</span> {testimonial.item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* External Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-navy rounded-card-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">See More Reviews</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Check out our reviews on Google, Facebook, and other platforms to see what our community says about us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition"
              >
                <span>⭐</span>
                Google Reviews
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-navy transition"
              >
                <span>📘</span>
                Facebook Reviews
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
              <span className="text-2xl">🛡️</span>
              <span className="font-medium text-navy">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
              <span className="text-2xl">🏆</span>
              <span className="font-medium text-navy">Georgia Pawn Association</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
              <span className="text-2xl">🔒</span>
              <span className="font-medium text-navy">Secure Storage</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
              <span className="text-2xl">💳</span>
              <span className="font-medium text-navy">Secure Payments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 