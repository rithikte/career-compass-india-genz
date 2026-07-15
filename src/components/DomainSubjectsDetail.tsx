import React from 'react';
import { motion } from 'framer-motion';

/* ---------- Design tokens (UG Homepage palette) ---------- */
const COLORS = {
  bg: '#0B1020',
  card: '#121A2F',
  text: '#F5F7FA',
  muted: '#9BA6BF',
  border: '#232C44',
  glass: 'rgba(255,255,255,0.03)',
  accent: '#6DD4C8',
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

const SUBJECT_DETAILS: Record<string, string> = {
  'Reinforced Cement Concrete / RCC Design':
    'Check slab, beam, column, footing reinforcement against drawings',
  'Building Construction / Construction Technology':
    'Understand and follow apartment execution sequence from excavation to finishing',
  'Concrete Technology':
    'Observe concrete pouring, slump, compaction, curing, and concrete testing',
  'Surveying':
    'Support layout marking, level checking, benchmark use, and RL understanding',
  'Estimation and Costing / Quantity Surveying':
    'Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking',
};

const SECTIONS = [
  {
    id: 1,
    accent: '#6DD4C8',
    subjects: [
      'Reinforced Cement Concrete / RCC Design',
      'Building Construction / Construction Technology',
      'Concrete Technology',
      'Surveying',
      'Estimation and Costing / Quantity Surveying',
    ],
  },
  {
    id: 2,
    accent: '#89C2D9',
    subjects: [
      'Concrete Technology',
      'Estimation and Costing / Quantity Surveying',
      'Surveying',
      'Building Construction / Construction Technology',
      'Reinforced Cement Concrete / RCC Design',
    ],
  },
  {
    id: 3,
    accent: '#7FC8A9',
    subjects: [
      'Estimation and Costing / Quantity Surveying',
      'Building Construction / Construction Technology',
      'Concrete Technology',
      'Reinforced Cement Concrete / RCC Design',
      'Surveying',
    ],
  },
  {
    id: 4,
    accent: '#8FA7BF',
    subjects: [
      'Surveying',
      'Building Construction / Construction Technology',
      'Estimation and Costing / Quantity Surveying',
      'Concrete Technology',
      'Reinforced Cement Concrete / RCC Design',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const subjectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const subjectRowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const DomainSubjectsDetail: React.FC = () => {
  return (
    <div
      className="domain-subjects-detail"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .domain-subjects-detail { position: relative; overflow: hidden; }
        .section-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .section-card:hover { transform: translateY(-6px); border-color: var(--card-accent); box-shadow: 0 16px 44px rgba(0,0,0,0.42); }
          .section-card:hover .subject-bullet { transform: scale(1.35); }
        }
        .subject-bullet { transition: transform 250ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .section-card, .subject-bullet { transition: none !important; }
        }
      `}</style>

      {/* ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -140,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 560,
          height: 560,
          background: 'radial-gradient(circle, rgba(109,212,200,0.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1200, padding: 'clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)' }}
      >
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ ...techFont, color: COLORS.accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: COLORS.accent }} />
            Domain Subjects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-bold"
            style={{ ...headingFont, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', lineHeight: 1.1 }}
          >
            Pick a subject and see the skills you will build
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4"
            style={{
              ...bodyFont,
              color: COLORS.muted,
              maxWidth: '62ch',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              lineHeight: 1.7,
            }}
          >
            Explore civil engineering core subjects grouped into domain paths and the
            real site-level skills each subject prepares you for.
          </motion.p>
        </div>

        {/* Section cards grid */}
        <motion.div
          className="mt-12 grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SECTIONS.map((section) => (
            <motion.div
              key={section.id}
              variants={cardVariants}
              className="section-card"
              style={{
                '--card-accent': section.accent,
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 20,
                padding: 24,
                backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center text-xs font-semibold"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    background: `${section.accent}15`,
                    color: section.accent,
                    ...techFont,
                  }}
                >
                  {section.id}
                </span>
                <div>
                  <span
                    className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.14em]"
                    style={{ ...techFont, color: section.accent }}
                  >
                    Section {section.id}
                  </span>
                  <h3
                    className="font-semibold"
                    style={{ ...headingFont, color: COLORS.text, fontSize: '1.1rem', lineHeight: 1.3 }}
                  >
                    Domain Subjects
                  </h3>
                </div>
              </div>

              <motion.ul
                className="mt-5 space-y-4"
                variants={subjectContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {section.subjects.map((subject) => (
                  <motion.li
                    key={`${section.id}-${subject}`}
                    variants={subjectRowVariants}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="subject-bullet flex-shrink-0 rounded-full mt-2"
                      style={{ width: 8, height: 8, background: section.accent }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ ...headingFont, color: COLORS.text, fontSize: '0.95rem', lineHeight: 1.4 }}
                      >
                        {subject}
                      </h4>
                      <p
                        className="mt-1"
                        style={{
                          ...bodyFont,
                          color: COLORS.muted,
                          fontSize: '0.88rem',
                          lineHeight: 1.55,
                        }}
                      >
                        {SUBJECT_DETAILS[subject]}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto mt-10 text-center"
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            padding: '18px 24px',
            maxWidth: 680,
            backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
          }}
        >
          <p style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Each section reorders the same core subjects to show how different learning
            sequences can lead to the same site-ready skill set.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainSubjectsDetail;
