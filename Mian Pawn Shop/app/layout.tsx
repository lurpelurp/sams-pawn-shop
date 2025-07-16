import * as React from 'react';
import './globals.css';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
});

export const metadata = {
  title: "Sam's Pawn Shop - Fast Cash, Fair Deals, Trusted Since 1999 | Griffin, GA",
  description: "Get cash today for your valuable items at Sam's Pawn Shop in Griffin, GA. Licensed, insured, and trusted since 1999. Jewelry, electronics, tools, and more. Fast, fair, and secure transactions.",
  keywords: "pawn shop, Griffin GA, cash for jewelry, pawn loans, sell items, layaway, licensed pawn shop, Georgia pawn association",
  openGraph: {
    title: "Sam's Pawn Shop - Fast Cash, Fair Deals, Trusted Since 1999",
    description: "Get cash today for your valuable items. Licensed, insured, and trusted since 1999.",
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-white text-navy min-h-screen flex flex-col font-sans">
        {/* Header */}
        <header className="w-full bg-navy text-gold py-4 px-4 md:px-8 shadow-card sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-lg">$</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl tracking-tight">Sam's Pawn Shop</div>
                <div className="text-xs text-gold/80">Trusted Since 1999</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-lg">
              <a href="#home" className="hover:text-white transition flex items-center gap-1">
                <span>🏠</span>
                <span>Home</span>
              </a>
              <a href="#inventory" className="hover:text-white transition flex items-center gap-1">
                <span>🛍️</span>
                <span>Inventory</span>
              </a>
              <a href="#services" className="hover:text-white transition flex items-center gap-1">
                <span>⚙️</span>
                <span>Services</span>
              </a>
              <a href="#contact" className="hover:text-white transition flex items-center gap-1">
                <span>📞</span>
                <span>Contact</span>
              </a>
              <a 
                href="#get-cash" 
                className="bg-gold text-navy px-6 py-2 rounded-full font-bold shadow-card hover:bg-gold-light transition"
              >
                💰 Get Cash
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl">
              ☰
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-navy text-gold py-12 mt-12 border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>📍</span>
                  Contact Info
                </h4>
                <div className="space-y-2 text-sm">
                  <div>312 W Taylor St</div>
                  <div>Griffin, GA 30223</div>
                  <div className="font-medium">(770) 228-9333</div>
                  <div>info@samspawnshop.com</div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>🔗</span>
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="hover:text-white transition">Home</a></li>
                  <li><a href="#inventory" className="hover:text-white transition">Inventory</a></li>
                  <li><a href="#services" className="hover:text-white transition">Services</a></li>
                  <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>⚙️</span>
                  Services
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#pawn-loans" className="hover:text-white transition">Pawn Loans</a></li>
                  <li><a href="#sell-items" className="hover:text-white transition">Sell Items</a></li>
                  <li><a href="#layaway" className="hover:text-white transition">Layaway</a></li>
                  <li><a href="#appraisals" className="hover:text-white transition">Appraisals</a></li>
                  <li><a href="#buy-items" className="hover:text-white transition">Buy Items</a></li>
                </ul>
              </div>

              {/* Trust & Social */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>🛡️</span>
                  Trust & Social
                </h4>
                <div className="space-y-4">
                  {/* Trust Badges */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span>🛡️</span>
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏆</span>
                      <span>Georgia Pawn Association</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⭐</span>
                      <span>4.9 Star Rating</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <div className="text-sm font-medium mb-2">Follow Us</div>
                    <div className="flex gap-3">
                      <a href="#" aria-label="Facebook" className="hover:text-white transition text-xl">📘</a>
                      <a href="#" aria-label="Instagram" className="hover:text-white transition text-xl">📷</a>
                      <a href="#" aria-label="Google Reviews" className="hover:text-white transition text-xl">⭐</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals Bar */}
            <div className="border-t border-gold/20 pt-6 mb-6">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span>💳</span>
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span>Free Appraisals</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gold/20 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => window.scrollTo({top:0,behavior:'smooth'})} 
                    className="underline hover:text-gold transition"
                  >
                    Back to top
                  </button>
                  <span>|</span>
                  <span>© 2025 Sam's Pawn Shop. All rights reserved.</span>
                </div>
                
                {/* Legal Links */}
                <div className="flex gap-4">
                  <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
                  <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
                  <a href="/sitemap.xml" className="hover:text-white transition">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 