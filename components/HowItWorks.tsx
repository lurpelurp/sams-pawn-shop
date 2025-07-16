import * as React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
  {
    label: 'Bring In Item',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="32" height="16" rx="4" fill="#F9FAFB" stroke="#1F2937" strokeWidth="2" />
        <circle cx="16" cy="24" r="4" fill="#D4AF37" />
        <rect x="28" y="20" width="8" height="8" rx="2" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    label: 'Get Quote',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="14" width="28" height="20" rx="4" fill="#F9FAFB" stroke="#D4AF37" strokeWidth="2" />
        <text x="24" y="30" textAnchor="middle" fontSize="18" fill="#1F2937" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    label: 'Receive Cash / Plan Payment',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="32" height="16" rx="4" fill="#D4AF37" stroke="#1F2937" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" fill="#F9FAFB" stroke="#1F2937" strokeWidth="2" />
        <text x="24" y="28" textAnchor="middle" fontSize="16" fill="#D4AF37" fontWeight="bold">💵</text>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section id="how-it-works" className="py-sectionY px-sectionX bg-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-secondary font-sans">How It Works</h2>
        <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } },
                }}
                className="flex flex-col items-center mx-4"
              >
                <div className="mb-2">{step.icon}</div>
                <div className="text-lg font-semibold text-secondary font-sans max-w-[120px]">{step.label}</div>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0, transition: { delay: i * 0.2 + 0.1 } },
                  }}
                  className="hidden md:block mx-2"
                >
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
                    <line x1="4" y1="12" x2="56" y2="12" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="56,6 60,12 56,18" fill="#D4AF37" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
} 