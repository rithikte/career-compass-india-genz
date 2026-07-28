import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

/* ---------- Design tokens (UG Homepage palette) ---------- */
const COLORS = {
  bg: '#0B1020',
  card: '#121A2F',
  text: '#F5F7FA',
  muted: '#9BA6BF',
  border: '#232C44',
  glass: 'rgba(255,255,255,0.03)',
  accent: '#6DD4C8',
  accent2: '#89C2D9',
  accent3: '#7FC8A9',
  accent4: '#8FA7BF',
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

const SECTION_ACCENTS = [COLORS.accent, COLORS.accent2, COLORS.accent3, COLORS.accent4];


interface Subject {
  name: string;
  skills: string[];
}

interface Section {
  id: number;
  title: string;
  subjects: Subject[];
}

const SUB = {
  rcc: {
    name: 'Reinforced Cement Concrete / RCC Design',
    skills: ['Check slab, beam, column, footing reinforcement against drawings'],
  },
  building: {
    name: 'Building Construction / Construction Technology',
    skills: ['Understand and follow apartment execution sequence from excavation to finishing'],
  },
  concrete: {
    name: 'Concrete Technology',
    skills: ['Observe concrete pouring, slump, compaction, curing, and concrete testing'],
  },
  survey: {
    name: 'Surveying',
    skills: ['Support layout marking, level checking, benchmark use, and RL understanding'],
  },
  estimation: {
    name: 'Estimation and Costing / Quantity Surveying',
    skills: ['Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking'],
  },
};

const SECTIONS: Section[] = [
  { id: 1, title: 'Subjects Section - 1', subjects: [SUB.rcc, SUB.building, SUB.concrete, SUB.survey, SUB.estimation] },
  { id: 2, title: 'Subjects Section - 2', subjects: [SUB.concrete, SUB.estimation, SUB.survey, SUB.building, SUB.rcc] },
  { id: 3, title: 'Subjects Section - 3', subjects: [SUB.estimation, SUB.building, SUB.concrete, SUB.rcc, SUB.survey] },
  { id: 4, title: 'Subjects Section - 4', subjects: [SUB.survey, SUB.building, SUB.estimation, SUB.concrete, SUB.rcc] },
];

const PAIRS: Section[][] = [SECTIONS.slice(0, 2), SECTIONS.slice(2, 4)];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface DomainSubjectsProps {
  onExploreChapters?: () => void;
}

const DomainSubjects: React.FC<DomainSubjectsProps> = ({ onExploreChapters }) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement | null>(null);

  const toggleKey = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const onRailScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.querySelectorAll<HTMLElement>('[data-rail-card]'));
    if (!cards.length) return;
    const center = rail.scrollLeft + rail.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener('scroll', onRailScroll, { passive: true });
    onRailScroll();
    return () => rail.removeEventListener('scroll', onRailScroll);
  }, [onRailScroll]);

  const goTo = (i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelectorAll<HTMLElement>('[data-rail-card]')[i];
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const renderSection = (section: Section, sectionIndex: number, variant: 'grid' | 'rail') => {
    const accent = SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length];
    const compact = variant === 'rail';
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              background: `${accent}15`,
              borderRadius: 12,
              width: compact ? 38 : 44,
              height: compact ? 38 : 44,
            }}
          >
            <BookOpen size={compact ? 19 : 22} className="ug-subj-icon" style={{ color: accent }} />
          </div>
          <div className="min-w-0 flex-1">
            <span className="inline-block ds-label font-medium uppercase" style={{ ...techFont, color: accent }}>
              Subjects Section - {section.id}
            </span>
            <h3 className="mt-1 font-semibold" style={{ ...headingFont, color: COLORS.text, lineHeight: 1.4 }}>
              {section.title}
            </h3>
          </div>
        </div>

        <div className={compact ? 'mt-4 mb-3' : 'mt-5 mb-4'} style={{ height: 1, background: COLORS.border }} />

        <div className={compact ? 'space-y-4' : 'space-y-5'}>
          {section.subjects.map((subject, si) => {
            const key = `${section.id}-${si}`;
            const isOpen = expanded.has(key);
            return (
              <div key={key} className="ug-subj-row rounded-lg" style={{ padding: compact ? '8px 10px' : '10px 12px' }}>
                <div className="flex flex-col items-start gap-1">
                  <span
                    className="ds-label font-medium uppercase px-2 py-0.5"
                    style={{ ...techFont, color: accent, background: `${accent}12`, borderRadius: 6 }}
                  >
                    Subject {si + 1}
                  </span>
                  <h4
                    className="font-semibold w-full"
                    style={{ ...headingFont, color: COLORS.text, overflowWrap: 'anywhere' }}
                  >
                    {subject.name}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => toggleKey(key)}
                  aria-expanded={isOpen}
                  aria-controls={`subj-skills-${variant}-${key}`}
                  className="ug-subj-toggle ds-label mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium uppercase"
                  style={{ ...techFont, color: accent, background: 'transparent' }}
                >
                  Also called
                  <ChevronDown size={14} className="ug-subj-chevron" data-open={isOpen} style={{ color: accent }} />
                </button>

                <div id={`subj-skills-${variant}-${key}`} className="ug-subj-skills-wrap" data-open={isOpen}>
                  <ul className="pt-2 space-y-1.5">
                    {subject.skills.map((skill, ski) => (
                      <li
                        key={ski}
                        className="flex items-start gap-2 ds-body"
                        style={{ ...bodyFont, color: COLORS.muted, lineHeight: 1.55 }}
                      >
                        <span style={{ color: accent, flexShrink: 0 }}>—</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="ug-domain-subjects" style={{ background: COLORS.bg, color: COLORS.text, width: '100%' }}>
      <style>{`
        .ug-domain-subjects { position: relative; overflow: hidden; width: 100%; }

        /* Full-bleed edge-to-edge with responsive horizontal padding */
        .ug-domain-subjects .ds-container {
          width: 100%;
          max-width: 100%;
          padding-left: 11.2px;
          padding-right: 11.2px;
        }
        @media (min-width: 768px) { .ug-domain-subjects .ds-container { padding-left: 16.8px; padding-right: 16.8px; } }
        @media (min-width: 1280px) { .ug-domain-subjects .ds-container { padding-left: 22.4px; padding-right: 22.4px; } }

        .ds-headline-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #b7c0cc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ug-subj-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-subj-card:hover { transform: translateY(-4px); border-color: ${COLORS.accent}; box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
          .ug-subj-card:hover .ug-subj-icon { color: ${COLORS.accent}; }
        }
        .ug-subj-icon { transition: color 250ms ease-out; }
        .ug-subj-row { transition: background-color 200ms ease-out, transform 200ms ease-out; }
        @media (hover: hover) {
          .ug-subj-row:hover { background-color: rgba(255,255,255,0.04); transform: translateX(2px); }
        }
        .ug-subj-skills-wrap { overflow: hidden; transition: max-height 300ms ease-out, opacity 250ms ease-out; }
        .ug-subj-skills-wrap[data-open="true"] { max-height: 300px; opacity: 1; }
        .ug-subj-skills-wrap[data-open="false"] { max-height: 0; opacity: 0; }
        .ug-subj-chevron { transition: transform 250ms ease-out; }
        .ug-subj-chevron[data-open="true"] { transform: rotate(180deg); }
        .ug-subj-toggle { transition: background-color 200ms ease-out, color 200ms ease-out; }
        @media (hover: hover) {
          .ug-subj-toggle:hover { background-color: rgba(255,255,255,0.06); }
        }

        /* Fluid typography: 375 -> 768 -> 1280 breakpoint ramps */
        .ug-domain-subjects h1,
        .ug-domain-subjects .ds-headline-size {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.08;
          font-size: clamp(30.4px, calc(30.4px + (34.6 - 30.4) * ((100vw - 375px) / (768 - 375))), 34.6px) !important;
        }
        @media (min-width: 768px) {
          .ug-domain-subjects h1,
          .ug-domain-subjects .ds-headline-size {
            font-size: clamp(34.6px, calc(34.6px + (54.4 - 34.6) * ((100vw - 768px) / (1280 - 768))), 54.4px) !important;
          }
        }
        .ug-domain-subjects h3 { font-size: clamp(13px, calc(13px + (18 - 13) * ((100vw - 375px) / (1280 - 375))), 18px) !important; line-height: 1.35; }
        .ug-domain-subjects h4 { font-size: clamp(12px, calc(12px + (15 - 12) * ((100vw - 375px) / (1280 - 375))), 15px) !important; line-height: 1.4; }
        .ug-domain-subjects p,
        .ug-domain-subjects li,
        .ug-domain-subjects .ds-body {
          font-size: clamp(11px, calc(11px + (13 - 11) * ((100vw - 375px) / (768 - 375))), 13px) !important;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .ug-domain-subjects p,
          .ug-domain-subjects li,
          .ug-domain-subjects .ds-body {
            font-size: clamp(13px, calc(13px + (15 - 13) * ((100vw - 768px) / (1280 - 768))), 15px) !important;
          }
        }
        .ug-domain-subjects .ds-label,
        .ug-domain-subjects small {
          font-size: clamp(8px, calc(8px + (9.2 - 8) * ((100vw - 375px) / (768 - 375))), 9.2px) !important;
          letter-spacing: 0.12em;
        }
        @media (min-width: 768px) {
          .ug-domain-subjects .ds-label,
          .ug-domain-subjects small {
            font-size: clamp(9.2px, calc(9.2px + (11 - 9.2) * ((100vw - 768px) / (1280 - 768))), 11px) !important;
          }
        }

        /* --- Desktop grid vs tablet/mobile comparison rail --- */
        .ds-grid { display: none; }
        .ds-compare { display: block; }
        @media (min-width: 1024px) {
          .ds-grid { display: grid; }
          .ds-compare { display: none; }
        }
        .ds-rail {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 6px;
        }
        .ds-rail::-webkit-scrollbar { display: none; }
        .ds-rail-card {
          scroll-snap-align: center;
          flex: 0 0 auto;
          width: 92vw;
          max-width: 760px;
        }
        @media (min-width: 640px) {
          .ds-rail-card { width: 88vw; max-width: 760px; }
        }
        .ds-pair-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .ds-pair-grid { gap: 16px; }
        }
        .ds-pair-col + .ds-pair-col {
          border-left: 1px solid ${COLORS.border};
          padding-left: 10px;
        }
        @media (min-width: 640px) {
          .ds-pair-col + .ds-pair-col { padding-left: 16px; }
        }

        .ds-chip { transition: background-color 200ms ease-out, color 200ms ease-out, border-color 200ms ease-out; white-space: nowrap; }
        .ds-dot { transition: width 250ms ease-out, background-color 250ms ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .ug-subj-card, .ug-subj-icon, .ug-subj-row, .ug-subj-skills-wrap, .ug-subj-chevron, .ds-chip, .ds-dot { transition: none !important; }
          .ds-rail { scroll-behavior: auto; }
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
        className="relative ds-container"
        style={{ paddingTop: 'clamp(32px, 6vw, 72px)', paddingBottom: 'clamp(32px, 6vw, 72px)' }}
      >
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="ds-label inline-flex items-center gap-2 font-medium uppercase"
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
            className="mt-4 ds-headline-gradient ds-headline-size"
          >
            Pick the subjects section you are interested in
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4 ds-body"
            style={{ ...bodyFont, color: COLORS.muted, maxWidth: '62ch' }}
          >
            Compare the subject sections side by side, expand & pick interested subjects section, then continue to the chapters.
          </motion.p>
        </div>

        {/* Desktop: side-by-side grid */}
        <div
          className="ds-grid mt-10 gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}
        >
          {SECTIONS.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              custom={sectionIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="ug-subj-card cursor-pointer"
              onClick={() => setSelected(section.id)}
              style={{
                background: COLORS.card,
                border: `1px solid ${selected === section.id ? SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length] : COLORS.border}`,
                borderRadius: 20,
                padding: 'clamp(20px, 4vw, 28px)',
                backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
              }}
            >
              {renderSection(section, sectionIndex, 'grid')}
            </motion.div>
          ))}
        </div>

        {/* Tablet + mobile: side-by-side comparison rail */}
        <div className="ds-compare mt-8">
          <div className="flex items-center gap-2 overflow-x-auto ds-rail" role="tablist" aria-label="Subject sections">
            {PAIRS.map((pair, i) => {
              const accent = SECTION_ACCENTS[(i * 2) % SECTION_ACCENTS.length];
              const isActive = active === i;
              return (
                <button
                  key={`chip-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goTo(i)}
                  className="ds-chip ds-label rounded-full px-3 py-1.5 font-medium uppercase"
                  style={{
                    ...techFont,
                    color: isActive ? COLORS.bg : accent,
                    background: isActive ? accent : `${accent}12`,
                    border: `1px solid ${isActive ? accent : COLORS.border}`,
                  }}
                >
                  Sections {pair.map((s) => s.id).join('–')}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-center ds-body" style={{ ...bodyFont, color: COLORS.muted }}>
            Swipe to compare Sections 1–2 and 3–4
          </p>

          <div ref={railRef} className="ds-rail mt-3">
            {PAIRS.map((pair, pairIndex) => (
              <div
                key={`pair-${pairIndex}`}
                data-rail-card
                className="ds-rail-card ug-subj-card"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${active === pairIndex ? SECTION_ACCENTS[(pairIndex * 2) % SECTION_ACCENTS.length] + '66' : COLORS.border}`,
                  borderRadius: 20,
                  padding: 'clamp(12px, 3vw, 20px)',
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                }}
              >
                <div className="ds-pair-grid">
                  {pair.map((section) => {
                    const sectionIndex = SECTIONS.indexOf(section);
                    const accent = SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length];
                    return (
                      <div
                        key={section.id}
                        className="ds-pair-col min-w-0 cursor-pointer"
                        onClick={() => setSelected(section.id)}
                        style={{
                          borderRadius: 12,
                          padding: 6,
                          background: selected === section.id ? `${accent}10` : 'transparent',
                          boxShadow: selected === section.id ? `inset 0 0 0 1px ${accent}55` : 'none',
                        }}
                      >
                        {renderSection(section, sectionIndex, 'rail')}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {PAIRS.map((pair, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to sections ${pair.map((s) => s.id).join(' and ')}`}
                onClick={() => goTo(i)}
                className="ds-dot rounded-full"
                style={{
                  height: 6,
                  width: active === i ? 22 : 6,
                  background: active === i ? SECTION_ACCENTS[(i * 2) % SECTION_ACCENTS.length] : COLORS.border,
                  border: 'none',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="ds-body text-center" style={{ ...bodyFont, color: COLORS.muted }}>
            {selected ? `Subjects Section - ${selected} selected` : 'Select a section to continue'}
          </p>
          <button
            type="button"
            onClick={() => onExploreChapters?.()}
            disabled={!selected}
            className="ds-label rounded-full px-6 py-3 font-medium uppercase"
            style={{
              ...techFont,
              color: COLORS.bg,
              background: selected ? COLORS.accent : COLORS.border,
              opacity: selected ? 1 : 0.6,
              cursor: selected ? 'pointer' : 'not-allowed',
              border: 'none',
              letterSpacing: '0.12em',
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainSubjects;
