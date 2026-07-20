import React from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  bg: '#0A1020',
  card: '#0F1730',
  cardSoft: 'rgba(255,255,255,0.03)',
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
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

interface HierarchyItem {
  label: string;
  hint: string;
  value: string;
}

const HIERARCHY: HierarchyItem[] = [
  { label: 'Degree', hint: 'The course you study', value: 'B.Tech Civil Engineering' },
  { label: 'Domain', hint: 'The career field your degree prepares you for', value: 'Construction Site Execution' },
  { label: 'Core Family Role', hint: 'The main type of work you can build your career in', value: 'Site Engineering' },
  { label: 'Sub-function', hint: 'The specific area of work you can specialize in', value: 'RCC Structural Execution' },
  { label: 'Industry', hint: 'The industries where this work is available', value: 'Building Construction Companies' },
  { label: 'Sub-industry', hint: 'The specialized sector within an industry', value: 'Residential Building Construction' },
  { label: 'Cluster', hint: 'The actual business area where the work happens', value: 'RCC Apartment Projects' },
  { label: 'Fresher Role', hint: 'The entry-level job you can get after graduation', value: 'Junior Site Engineer' },
];

const RESPONSIBILITIES: { title: string }[] = [
  { title: 'Reinforcement Verification' },
  { title: 'Formwork and Level Verification' },
  { title: 'Concrete Execution Monitoring' },
  { title: 'Layout and Survey Verification' },
  { title: 'Construction Progress Documentation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const RoleProfile: React.FC = () => {
  return (
    <div
      className="ug-role-profile"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-role-profile { position: relative; overflow: hidden; }

        @keyframes ug-title-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .ug-role-title-accent {
          animation: ug-title-shimmer 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-role-title-accent { animation: none !important; }
        }

        .ug-tile {
          position: relative;
          transition: transform 300ms cubic-bezier(.22,1,.36,1),
                      border-color 300ms ease,
                      box-shadow 300ms ease,
                      background-color 300ms ease;
        }
        .ug-tile::after {
          content: '';
          position: absolute; left: 22px; right: 22px; bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${COLORS.accent}, transparent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 400ms cubic-bezier(.22,1,.36,1);
        }
        @media (hover: hover) {
          .ug-tile:hover {
            transform: translateY(-3px);
            border-color: ${COLORS.borderStrong};
            box-shadow: 0 18px 40px -20px rgba(45,212,191,0.25);
          }
          .ug-tile:hover::after { transform: scaleX(1); }
        }

        .ug-tile-active {
          background:
            radial-gradient(120% 120% at 100% 0%, rgba(45,212,191,0.14), transparent 55%),
            ${COLORS.card} !important;
          border-color: rgba(45,212,191,0.35) !important;
        }
        .ug-tile-active::before {
          content: '';
          position: absolute; inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(140deg, rgba(45,212,191,0.55), rgba(45,212,191,0));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }

        .ug-context {
          position: relative;
          overflow: hidden;
          transition: transform 350ms cubic-bezier(.22,1,.36,1), border-color 350ms ease, box-shadow 350ms ease;
        }
        @media (hover: hover) {
          .ug-context:hover {
            transform: translateY(-3px);
            border-color: ${COLORS.borderStrong};
            box-shadow: 0 24px 60px -30px rgba(45,212,191,0.28);
          }
        }
        .ug-watermark {
          position: absolute;
          right: -8px;
          bottom: -32px;
          font-weight: 800;
          letter-spacing: -0.04em;
          font-size: clamp(6rem, 14vw, 10rem);
          line-height: 1;
          color: rgba(255,255,255,0.035);
          pointer-events: none;
          user-select: none;
        }

        .ug-resp-row {
          position: relative;
          transition: background-color 250ms ease, transform 250ms ease;
        }
        .ug-resp-row::after {
          content: '';
          position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
          background: ${COLORS.border};
        }
        .ug-resp-row:last-child::after { display: none; }
        @media (hover: hover) {
          .ug-resp-row:hover { background: rgba(255,255,255,0.025); }
          .ug-resp-row:hover .ug-resp-num { color: ${COLORS.accent}; opacity: 0.85; }
          .ug-resp-row:hover .ug-resp-arrow { transform: translateX(4px); opacity: 1; color: ${COLORS.accent}; }
        }
        .ug-resp-num {
          transition: color 250ms ease, opacity 250ms ease;
        }
        .ug-resp-arrow {
          transition: transform 300ms cubic-bezier(.22,1,.36,1), opacity 250ms ease, color 250ms ease;
          opacity: 0.4;
        }

        @media (prefers-reduced-motion: reduce) {
          .ug-tile, .ug-tile::after, .ug-context, .ug-resp-row, .ug-resp-num, .ug-resp-arrow { transition: none !important; }
        }
      `}</style>

      {/* ambient glows */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -160,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 720,
          height: 520,
          background: 'radial-gradient(closest-side, rgba(45,212,191,0.14), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 380,
          right: -120,
          width: 380,
          height: 380,
          background: 'radial-gradient(closest-side, rgba(109,212,200,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1200, padding: 'clamp(36px, 6vw, 80px) clamp(20px, 5vw, 56px)' }}
      >
        {/* ========== HERO ========== */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="inline-flex items-center gap-3"
          >
            <span style={{ height: 1, width: 40, background: COLORS.accent }} />
            <span
              className="text-xs font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.28em' }}
            >
              Role Profile
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="ug-role-title mt-5 font-bold"
            style={{
              ...headingFont,
              fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              display: 'inline-block',
              position: 'relative',
            }}
          >
            {['Junior', 'Site'].map((w, i) => (
              <motion.span
                key={w + i}
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
                  },
                }}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="ug-role-title-accent"
              style={{
                display: 'inline-block',
                backgroundImage: `linear-gradient(90deg, ${COLORS.accentDeep}, #A7F3D0, ${COLORS.accentDeep})`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Engineer
            </motion.span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              style={{
                display: 'block',
                marginTop: '0.35em',
                height: 2,
                width: 'clamp(60px, 14vw, 140px)',
                background: `linear-gradient(90deg, ${COLORS.accentDeep}, transparent)`,
                transformOrigin: 'left center',
                borderRadius: 2,
              }}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-5"
            style={{
              ...bodyFont,
              color: COLORS.muted,
              maxWidth: '62ch',
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
              lineHeight: 1.65,
            }}
          >
            A complete map from your degree to the exact fresher role you can step into on day one.
          </motion.p>

        </div>

        {/* ========== SECTION LABEL ========== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex items-end justify-between gap-6"
        >
          <div>
            <span
              className="text-[0.66rem] font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.28em' }}
            >
              Career Hierarchy
            </span>
            <h2
              className="mt-2 font-semibold"
              style={{
                ...headingFont,
                fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
                letterSpacing: '-0.01em',
              }}
            >
              From degree to fresher role
            </h2>
          </div>
          <div className="hidden sm:block flex-1" style={{ height: 1, background: COLORS.border }} />
        </motion.div>

        {/* ========== CAREER HIERARCHY GRID ========== */}
        <div
          className="mt-6 grid gap-4 sm:gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' }}
        >
          {HIERARCHY.map((item, i) => {
            const isFinal = item.label === 'Fresher Role';
            return (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className={`ug-tile ${isFinal ? 'ug-tile-active' : ''}`}
                style={{
                  background: isFinal ? COLORS.card : COLORS.cardSoft,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 18,
                  padding: 'clamp(20px, 3vw, 26px)',
                  minHeight: 172,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      ...techFont,
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      fontSize: '0.66rem',
                      fontWeight: 600,
                      color: isFinal ? COLORS.accentDeep : COLORS.mutedSoft,
                      background: isFinal ? 'rgba(45,212,191,0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isFinal ? 'rgba(45,212,191,0.25)' : COLORS.border}`,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-[0.66rem] font-semibold uppercase"
                    style={{
                      ...techFont,
                      color: isFinal ? COLORS.accent : COLORS.mutedSoft,
                      letterSpacing: '0.2em',
                    }}
                  >
                    {item.label}
                  </span>
                </div>

                <p
                  className="mt-3"
                  style={{
                    ...bodyFont,
                    color: COLORS.mutedSoft,
                    fontSize: '0.74rem',
                    lineHeight: 1.55,
                  }}
                >
                  {item.hint}
                </p>

                <div
                  className="mt-4 font-semibold"
                  style={{
                    ...headingFont,
                    color: isFinal ? '#EFFCF6' : COLORS.text,
                    fontSize: '1.05rem',
                    lineHeight: 1.35,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {item.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========== WORK IDENTITY & BUSINESS PURPOSE ========== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex items-end justify-between gap-6"
        >
          <div>
            <span
              className="text-[0.66rem] font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.28em' }}
            >
              Role Essence
            </span>
            <h2
              className="mt-2 font-semibold"
              style={{
                ...headingFont,
                fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
                letterSpacing: '-0.01em',
              }}
            >
              What this role really is
            </h2>
          </div>
          <div className="hidden sm:block flex-1" style={{ height: 1, background: COLORS.border }} />
        </motion.div>

        <div
          className="mt-6 grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
            className="ug-context"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 22,
              padding: 'clamp(24px, 4vw, 34px)',
              minHeight: 220,
            }}
          >
            <span
              className="text-[0.66rem] font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.24em' }}
            >
              Work Identity
            </span>
            <p
              className="mt-2"
              style={{ ...bodyFont, color: COLORS.mutedSoft, fontSize: '0.78rem', lineHeight: 1.55 }}
            >
              The core purpose of your job
            </p>
            <div
              className="mt-6 font-semibold"
              style={{
                ...headingFont,
                color: COLORS.text,
                fontSize: 'clamp(1.4rem, 2.6vw, 1.75rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              Construction Execution
            </div>
            <span className="ug-watermark" style={headingFont}>WI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="ug-context"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 22,
              padding: 'clamp(24px, 4vw, 34px)',
              minHeight: 220,
            }}
          >
            <span
              className="text-[0.66rem] font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.24em' }}
            >
              Business Purpose
            </span>
            <p
              className="mt-2"
              style={{ ...bodyFont, color: COLORS.mutedSoft, fontSize: '0.78rem', lineHeight: 1.55 }}
            >
              The value your work creates for the business
            </p>
            <p
              className="mt-5"
              style={{ ...bodyFont, color: COLORS.text, fontSize: '1rem', lineHeight: 1.7 }}
            >
              Convert construction drawings, materials, labor, and engineering plans into completed RCC
              apartment structures safely, correctly, and according to project schedule and quality
              requirements.
            </p>
            <span className="ug-watermark" style={headingFont}>BP</span>
          </motion.div>
        </div>

        {/* ========== TOP FRESHER RESPONSIBILITIES ========== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex items-end justify-between gap-6"
        >
          <div>
            <span
              className="text-[0.66rem] font-semibold uppercase"
              style={{ ...techFont, color: COLORS.accent, letterSpacing: '0.28em' }}
            >
              Day One
            </span>
            <h2
              className="mt-2 font-semibold"
              style={{
                ...headingFont,
                fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
                letterSpacing: '-0.01em',
              }}
            >
              Top fresher responsibilities
            </h2>
            <p
              className="mt-2"
              style={{ ...bodyFont, color: COLORS.mutedSoft, fontSize: '0.85rem', lineHeight: 1.55 }}
            >
              The main tasks you perform every day
            </p>
          </div>
          <div className="hidden sm:block flex-1" style={{ height: 1, background: COLORS.border }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-6"
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 22,
            padding: 'clamp(8px, 2vw, 18px) clamp(14px, 3vw, 28px)',
          }}
        >
          {RESPONSIBILITIES.map((r, i) => (
            <motion.div
              key={r.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="ug-resp-row flex items-center gap-5 sm:gap-8"
              style={{ padding: 'clamp(18px, 2.6vw, 24px) 4px' }}
            >
              <span
                className="ug-resp-num flex-shrink-0 font-semibold tabular-nums"
                style={{
                  ...headingFont,
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  color: 'rgba(255,255,255,0.14)',
                  letterSpacing: '-0.02em',
                  width: 'clamp(48px, 8vw, 68px)',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div
                className="min-w-0 flex-1 font-semibold"
                style={{
                  ...headingFont,
                  color: COLORS.text,
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.005em',
                }}
              >
                {r.title}
              </div>
              <span
                className="ug-resp-arrow flex-shrink-0"
                style={{ ...techFont, color: COLORS.mutedSoft, fontSize: '1.1rem' }}
                aria-hidden
              >
                →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RoleProfile;
