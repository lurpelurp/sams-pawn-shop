'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const featuredItems = [
  {
    id: 1,
    name: 'Diamond Engagement Ring',
    category: 'Jewelry',
    price: '$2,500',
    image: '/inventory/ring.webp',
    description: 'Beautiful 1.5 carat diamond ring, excellent condition'
  },
  {
    id: 2,
    name: 'MacBook Pro 2023',
    category: 'Electronics',
    price: '$1,200',
    image: '/inventory/laptop.webp',
    description: '13-inch MacBook Pro, like new condition'
  },
  {
    id: 3,
    name: 'Rolex Submariner',
    category: 'Watches',
    price: '$8,500',
    image: '/inventory/watch.webp',
    description: 'Authentic Rolex Submariner, excellent condition'
  },
  {
    id: 4,
    name: 'Dewalt Tool Set',
    category: 'Tools',
    price: '$450',
    image: '/inventory/tools.webp',
    description: 'Complete professional tool set, barely used'
  }
];

const categories = [
  { name: 'All', icon: '🏪' },
  { name: 'Jewelry', icon: '💍' },
  { name: 'Electronics', icon: '📱' },
  { name: 'Watches', icon: '⌚' },
  { name: 'Tools', icon: '🔧' },
  { name: 'Musical Instruments', icon: '🎸' },
  { name: 'Antiques', icon: '🏺' }
];

export default function InventoryShowcase() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === selectedCategory);

  return (
    <section id="inventory" className="py-section-y px-section-x bg-gray-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            Featured Inventory
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Discover quality items at unbeatable prices. New inventory arrives daily!
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? 'bg-gold text-navy shadow-card'
                  : 'bg-white text-gray-medium hover:bg-navy hover:text-white'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Items Carousel */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-card-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 bg-gray-light">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gold text-navy px-2 py-1 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-navy/80 text-white px-2 py-1 rounded-full text-xs">
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy mb-2">{item.name}</h3>
                  <p className="text-gray-medium text-sm mb-3">{item.description}</p>
                  <button className="w-full bg-navy text-white py-2 rounded-lg font-medium hover:bg-navy-light transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-navy rounded-card-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking for Something Specific?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We have thousands of items in our inventory. Contact us to ask about specific items or visit our store to browse our complete selection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition"
              >
                📞 Call Us
              </a>
              <a
                href="#visit"
                className="px-6 py-3 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-navy transition"
              >
                🏪 Visit Store
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 