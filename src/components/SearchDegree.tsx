import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, ArrowRight, X } from 'lucide-react';

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

const DEGREES: { name: string; group: string }[] = [
  { name: 'Civil Engineering', group: 'Core' },
  { name: 'Mechanical Engineering', group: 'Core' },
  { name: 'Electrical Engineering', group: 'Electrical' },
  { name: 'Electrical and Electronics Engineering', group: 'Electrical' },
  { name: 'Electronics Engineering', group: 'Electronics' },
  { name: 'Electronics and Communication Engineering', group: 'Electronics' },
  { name: 'Electronics and Telecommunication Engineering', group: 'Electronics' },
  { name: 'Electronics and Instrumentation Engineering', group: 'Electronics' },
  { name: 'Instrumentation and Control Engineering', group: 'Instrumentation' },
  { name: 'Computer Science and Engineering', group: 'Computing' },
  { name: 'Computer Engineering', group: 'Computing' },
  { name: 'Information Technology', group: 'Computing' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const SearchDegree: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEGREES;
    return DEGREES.filter(
      (d) => d.name.toLowerCase().includes(q) || d.group.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      className="ug-search-degree"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-search-degree { position: relative; overflow: hidden; }
        .ug-search-input::placeholder { color: ${COLORS.muted}; }
        .ug-search-input:focus { outline: none; border-color: ${COLORS.accent}; box-shadow: 0 0 0 3px rgba(109,212,200,0.15); }
        .ug-degree-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-degree-card:hover { transform: translateY(-4px); border-color: ${COLORS.accent}; box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
          .ug-degree-card:hover .ug-degree-arrow { transform: translateX(4px); opacity: 1; }
          .ug-degree-card:hover .ug-degree-icon { color: ${COLORS.accent}; }
        }
        .ug-degree-arrow { transition: transform 250ms ease-out, opacity 250ms ease-out; opacity: 0.4; }
        .ug-degree-icon { transition: color 250ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .ug-degree-card, .ug-degree-arrow, .ug-degree-icon { transition: none !important; }
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
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(109,212,200,0.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1120, padding: 'clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)' }}
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
            Search Degree
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-bold"
            style={{ ...headingFont, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', lineHeight: 1.1 }}
          >
            Search your engineering degree
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
              maxWidth: '60ch',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              lineHeight: 1.7,
            }}
          >
            Explore the careers, skills, industries, and opportunities connected to it.
          </motion.p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-8" style={{ maxWidth: 640 }}>
          <div
            className="flex items-center gap-3"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 18,
              padding: '4px 4px 4px 18px',
              backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
            }}
          >
            <Search size={20} style={{ color: COLORS.muted, flexShrink: 0 }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a degree, e.g. Computer Science…"
              aria-label="Search degrees"
              className="ug-search-input w-full bg-transparent border-0 py-3 text-base"
              style={{ ...bodyFont, color: COLORS.text }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="flex items-center justify-center"
                style={{
                  background: COLORS.border,
                  color: COLORS.text,
                  borderRadius: 12,
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                }}
              >
                <X size={18} />
              </button>
            )}
          </div>
          {query.trim() && (
            <p
              className="mt-3 text-center"
              style={{ ...techFont, color: COLORS.muted, fontSize: '0.8rem' }}
            >
              {filtered.length} {filtered.length === 1 ? 'degree' : 'degrees'} found
            </p>
          )}
        </div>

        {/* Results grid - only shown once the user has typed a query */}
        {query.trim() ? (
          filtered.length > 0 ? (
            <div
              className="mt-10 grid gap-4"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))' }}
            >
              {filtered.map((deg, i) => (
                <motion.div
                  key={deg.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="ug-degree-card"
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 18,
                    padding: 20,
                    backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(109,212,200,0.1)',
                        borderRadius: 12,
                        width: 44,
                        height: 44,
                      }}
                    >
                      <GraduationCap size={22} className="ug-degree-icon" style={{ color: COLORS.muted }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.14em]"
                        style={{ ...techFont, color: COLORS.accent }}
                      >
                        {deg.group}
                      </span>
                      <h3
                        className="mt-1 font-semibold"
                        style={{ ...headingFont, color: COLORS.text, fontSize: '1.02rem', lineHeight: 1.4 }}
                      >
                        {deg.name}
                      </h3>
                    </div>
                    <ArrowRight
                      size={18}
                      className="ug-degree-arrow flex-shrink-0 mt-1"
                      style={{ color: COLORS.accent }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center">
              <p style={{ ...bodyFont, color: COLORS.muted, fontSize: '1.05rem' }}>
                No degrees match “{query}”.
              </p>
              <button
                onClick={() => setQuery('')}
                className="mt-4 inline-flex items-center gap-2 font-medium"
                style={{
                  ...bodyFont,
                  background: COLORS.accent,
                  color: COLORS.bg,
                  borderRadius: 14,
                  padding: '12px 22px',
                }}
              >
                Clear search
              </button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default SearchDegree;
