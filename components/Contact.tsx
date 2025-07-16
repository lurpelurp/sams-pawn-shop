'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const contactInfo = {
  address: '312 W Taylor St, Griffin, GA 30223',
  phone: '(770) 228-9333',
  email: 'info@samspawnshop.com',
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 5:00 PM',
    sunday: 'Sunday: By Appointment',
    evening: 'Evenings: By Appointment'
  },
  directions: 'Located right off W Taylor St, next to Griffin Hardware Store. Easy parking available in front of the building.'
};

const paymentMethods = [
  { name: 'Cash', icon: '💵' },
  { name: 'Debit Cards', icon: '💳' },
  { name: 'Credit Cards', icon: '💳' },
  { name: 'Bank Transfer', icon: '🏦' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-section-y px-section-x bg-gray-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Stop by our store or give us a call. We're here to help you get the best value for your items.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address & Directions */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>📍</span>
                Location & Directions
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-medium text-navy">{contactInfo.address}</p>
                <p className="text-gray-medium">{contactInfo.directions}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition"
                >
                  <span>🗺️</span>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>📞</span>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium text-navy">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gold hover:text-gold-dark">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gold hover:text-gold-dark">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>🕒</span>
                Business Hours
              </h3>
              <div className="space-y-2">
                <p className="text-gray-dark">{contactInfo.hours.weekdays}</p>
                <p className="text-gray-dark">{contactInfo.hours.saturday}</p>
                <p className="text-gray-dark">{contactInfo.hours.sunday}</p>
                <p className="text-gray-dark">{contactInfo.hours.evening}</p>
                <div className="mt-4 p-3 bg-gold/10 rounded-lg">
                  <p className="text-sm text-navy font-medium">
                    💡 Need to visit outside regular hours? Call us to schedule an appointment!
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>💳</span>
                Payment Methods
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="flex items-center gap-2 p-2 bg-gray-light rounded">
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-sm font-medium text-navy">{method.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-medium mt-3">
                Secure transactions, your privacy protected.
              </p>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>🗺️</span>
                Find Us
              </h3>
              <div className="relative h-96 bg-gray-light rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1234567890123!2d-84.2647!3d33.2468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4a1234567890%3A0xabcdef1234567890!2sSam%27s+Pawn+Shop!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sam's Pawn Shop Location"
                />
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-card-lg p-6 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>💬</span>
                Get a Quick Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="item" className="block text-sm font-medium text-navy mb-1">
                    What do you want to sell?
                  </label>
                  <textarea
                    id="item"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Describe your item (jewelry, electronics, tools, etc.)"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition"
                >
                  Get Quote Now
                </button>
              </form>
            </div>

            {/* Trust Signals */}
            <div className="bg-navy rounded-card-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Sam's Pawn Shop?</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Licensed & Insured by State of Georgia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Member of Georgia Pawn Association</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Secure, Climate-Controlled Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Professional Appraisals & Fair Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>25+ Years of Trusted Service</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 