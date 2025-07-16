import * as React from 'react';

const services = [
  {
    title: 'Pawn Loans',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-4" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#D4AF37" strokeWidth="2" fill="#F9FAFB" />
        <text x="20" y="27" textAnchor="middle" fontSize="20" fill="#1F2937" fontWeight="bold">$</text>
      </svg>
    ),
    bullets: [
      '✔ Instant cash in minutes',
      '✔ No credit check required',
      '✔ Flexible repayment terms',
      '✔ Secure storage included',
    ],
  },
  {
    title: 'Sell Items',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-4" aria-hidden="true">
        <rect x="6" y="12" width="28" height="16" rx="4" fill="#D4AF37" stroke="#1F2937" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" fill="#F9FAFB" stroke="#1F2937" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" fontSize="12" fill="#1F2937" fontWeight="bold">💍</text>
      </svg>
    ),
    bullets: [
      '✔ Fair market value pricing',
      '✔ Cash payment on the spot',
      '✔ Professional appraisal',
      '✔ No pressure to sell',
    ],
  },
  {
    title: 'Layaway',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-4" aria-hidden="true">
        <rect x="8" y="16" width="24" height="12" rx="3" fill="#F9FAFB" stroke="#D4AF37" strokeWidth="2" />
        <rect x="8" y="12" width="24" height="6" rx="3" fill="#D4AF37" stroke="#1F2937" strokeWidth="2" />
        <circle cx="20" cy="26" r="2" fill="#D4AF37" />
      </svg>
    ),
    bullets: [
      '✔ Small deposit required',
      '✔ Flexible payment plans',
      '✔ Secure item storage',
      '✔ No interest charges',
    ],
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="py-sectionY px-sectionX bg-white dark:bg-secondary transition-all">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-sans">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              tabIndex={0}
              className="card p-8 flex flex-col items-center text-center rounded-card shadow-card bg-neutral-50 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer focus:ring-2 focus:ring-primary outline-none"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-secondary font-sans">{service.title}</h3>
              <ul className="text-left text-sm text-secondary/80 space-y-1 mx-auto">
                {service.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 