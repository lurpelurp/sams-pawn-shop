import * as React from 'react';
import Hero from '../components/Hero';
import InventoryShowcase from '../components/InventoryShowcase';
import ServiceCards from '../components/ServiceCards';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Inventory Showcase */}
      <InventoryShowcase />

      {/* Services Section */}
      <ServiceCards />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Trust & Security Section */}
      <section className="py-section-y px-section-x bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-8">
            Your Trust & Security Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-light rounded-card-lg p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-white/80">
                We are fully licensed by the State of Georgia and carry comprehensive insurance to protect your valuable items.
              </p>
            </div>
            <div className="bg-navy-light rounded-card-lg p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Secure Storage</h3>
              <p className="text-white/80">
                All pawned items are stored in climate-controlled, secure facilities with 24/7 monitoring and insurance coverage.
              </p>
            </div>
            <div className="bg-navy-light rounded-card-lg p-6">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Secure Transactions</h3>
              <p className="text-white/80">
                All transactions are secure and private. We accept cash, debit cards, and credit cards for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-y px-section-x bg-gradient-to-r from-gold to-gold-light text-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Cash Today?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Don't wait! Bring your valuable items to Sam's Pawn Shop and walk out with cash in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(770) 228-9333"
              className="px-8 py-4 bg-navy text-gold font-bold rounded-full text-lg hover:bg-navy-light transition"
            >
              📞 Call Now: (770) 228-9333
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-navy text-navy font-bold rounded-full text-lg hover:bg-navy hover:text-gold transition"
            >
              🏪 Visit Our Store
            </a>
          </div>
          <div className="mt-8 text-sm text-navy/70">
            <p>📍 312 W Taylor St, Griffin, GA 30223</p>
            <p>🕒 Mon-Fri: 9AM-6PM | Sat: 9AM-5PM | Sun: By Appointment</p>
          </div>
        </div>
      </section>
    </>
  );
} 