'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const heroImages = [
  {
    src: '/hero-storefront.webp',
    alt: 'Sam\'s Pawn Shop Storefront',
    title: 'Professional & Trusted'
  },
  {
    src: '/hero-inside.webp',
    alt: 'Inside Sam\'s Pawn Shop',
    title: 'Quality Inventory'
  },
  {
    src: '/hero-customer.webp',
    alt: 'Happy Customer at Sam\'s Pawn Shop',
    title: 'Customer Satisfaction'
  }
];

const trustBadges = [
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '🏆', text: 'Georgia Pawn Association Member' },
  { icon: '🔒', text: 'Secure, Insured Storage' },
  { icon: '⭐', text: 'Trusted Since 1999' }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy-dark">
      {/* Hero Background with Rotating Images */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-navy/60" />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gold mb-4">
              Sam's Pawn Shop
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Fast Cash • Fair Deals • Trusted Since 1999
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Get Cash Today for Your
            <span className="text-gold block">Valuable Items</span>
          </h2>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                <span className="text-lg">{badge.icon}</span>
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#get-cash"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-navy font-bold rounded-full text-lg shadow-hero hover:bg-gold-light transition-all duration-300 transform"
            >
              💰 Get Cash Now
            </motion.a>
            <motion.a
              href="#inventory"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-full text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform"
            >
              🛍️ View Inventory
            </motion.a>
          </div>

          {/* Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-card-lg p-6 max-w-md mx-auto"
          >
            <h3 className="text-white font-bold mb-4">Get a Fast Quote!</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="What do you want to sell?"
                className="flex-1 px-4 py-2 rounded-lg border-0 text-navy placeholder-gray-medium focus:ring-2 focus:ring-gold"
              />
              <button className="px-6 py-2 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition">
                Quote
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 