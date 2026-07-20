import React from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  bg: '#0A1020',
  card: '#0F1730',
  text: '#F5F7FA',
  muted: '#9BA6BF',
  mutedSoft: 'rgba(245,247,250,0.55)',
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.14)',
  accent: '#6DD4C8',
  accentDeep: '#2DD4BF',
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };

const DomainExplore: React.FC = () => {
  return (
    <div
      className="ug-domain-explore"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-domain-explore { position: relative; overflow: hidden; }
        @media (prefers-reduced-motion: reduce) {
          .ug-domain-explore * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 420,
          background: 'radial-gradient(closest-side, rgba(45,212,191,0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span
            className="text-[0.66rem] font-semibold uppercase"
            style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif", color: COLORS.accent, letterSpacing: '0.28em' }}
          >
            Coming Next
          </span>
          <h1
            className="mt-3 font-semibold"
            style={{
              ...headingFont,
              fontSize: 'clamp(1.6rem, 3.2vw, 2.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Domain Explorer
          </h1>
          <p
            className="mt-4"
            style={{
              ...bodyFont,
              color: COLORS.muted,
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
              lineHeight: 1.65,
            }}
          >
            This section will map the skills, tools, certifications, and real projects that shape a career in civil site engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto mt-10 max-w-xl rounded-2xl border p-6 sm:p-8 text-center"
          style={{ background: COLORS.card, borderColor: COLORS.border }}
        >
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl"
            style={{ background: 'rgba(45,212,191,0.12)', color: COLORS.accent }}
          >
            →
          </div>
          <h2
            className="font-semibold"
            style={{ ...headingFont, fontSize: '1.15rem' }}
          >
            Content under construction
          </h2>
          <p
            className="mt-2"
            style={{ ...bodyFont, color: COLORS.mutedSoft, fontSize: '0.85rem', lineHeight: 1.55 }}
          >
            The next chapter of this career map is being built. Check back soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainExplore;
