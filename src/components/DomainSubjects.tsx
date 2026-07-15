import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  X,
  Check,
  HardHat,
  Ruler,
  Hammer,
  ClipboardList,
  Boxes,
} from 'lucide-react';

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

const SECTIONS_META = [
  {
    accent: '#6DD4C8',
    glow: 'rgba(109,212,200,0.22)',
    icon: HardHat,
    label: 'Foundation First',
  },
  {
    accent: '#89C2D9',
    glow: 'rgba(137,194,217,0.22)',
    icon: Boxes,
    label: 'Materials & Methods',
  },
  {
    accent: '#7FC8A9',
    glow: 'rgba(127,200,169,0.22)',
    icon: ClipboardList,
    label: 'Cost & Control',
  },
  {
    accent: '#8FA7BF',
    glow: 'rgba(143,167,191,0.22)',
    icon: Ruler,
    label: 'Layout & Precision',
  },
];

const SUBJECT_ICONS: Record<string, React.ElementType> = {
  'Reinforced Cement Concrete / RCC Design': HardHat,
  'Building Construction / Construction Technology': Hammer,
  'Concrete Technology': Boxes,
  'Surveying': Ruler,
  'Estimation and Costing / Quantity Surveying': ClipboardList,
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

interface Subject {
  name: string;
  skills: string[];
}

interface Section {
  id: number;
  title: string;
  subjects: Subject[];
}

const SECTIONS: Section[] = [
  {
    id: 1,
    title: 'Subjects Section - 1',
    subjects: [
      {
        name: 'Reinforced Cement Concrete / RCC Design',
        skills: ['Check slab, beam, column, footing reinforcement against drawings'],
      },
      {
        name: 'Building Construction / Construction Technology',
        skills: ['Understand and follow apartment execution sequence from excavation to finishing'],
      },
      {
        name: 'Concrete Technology',
        skills: ['Observe concrete pouring, slump, compaction, curing, and concrete testing'],
      },
      {
        name: 'Surveying',
        skills: ['Support layout marking, level checking, benchmark use, and RL understanding'],
      },
      {
        name: 'Estimation and Costing / Quantity Surveying',
        skills: ['Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking'],
      },
    ],
  },
  {
    id: 2,
    title: 'Subjects Section - 2',
    subjects: [
      {
        name: 'Concrete Technology',
        skills: ['Observe concrete pouring, slump, compaction, curing, and concrete testing'],
      },
      {
        name: 'Estimation and Costing / Quantity Surveying',
        skills: ['Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking'],
      },
      {
        name: 'Surveying',
        skills: ['Support layout marking, level checking, benchmark use, and RL understanding'],
      },
      {
        name: 'Building Construction / Construction Technology',
        skills: ['Understand and follow apartment execution sequence from excavation to finishing'],
      },
      {
        name: 'Reinforced Cement Concrete / RCC Design',
        skills: ['Check slab, beam, column, footing reinforcement against drawings'],
      },
    ],
  },
  {
    id: 3,
    title: 'Subjects Section - 3',
    subjects: [
      {
        name: 'Estimation and Costing / Quantity Surveying',
        skills: ['Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking'],
      },
      {
        name: 'Building Construction / Construction Technology',
        skills: ['Understand and follow apartment execution sequence from excavation to finishing'],
      },
      {
        name: 'Concrete Technology',
        skills: ['Observe concrete pouring, slump, compaction, curing, and concrete testing'],
      },
      {
        name: 'Reinforced Cement Concrete / RCC Design',
        skills: ['Check slab, beam, column, footing reinforcement against drawings'],
      },
      {
        name: 'Surveying',
        skills: ['Support layout marking, level checking, benchmark use, and RL understanding'],
      },
    ],
  },
  {
    id: 4,
    title: 'Subjects Section - 4',
    subjects: [
      {
        name: 'Surveying',
        skills: ['Support layout marking, level checking, benchmark use, and RL understanding'],
      },
      {
        name: 'Building Construction / Construction Technology',
        skills: ['Understand and follow apartment execution sequence from excavation to finishing'],
      },
      {
        name: 'Estimation and Costing / Quantity Surveying',
        skills: ['Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking'],
      },
      {
        name: 'Concrete Technology',
        skills: ['Observe concrete pouring, slump, compaction, curing, and concrete testing'],
      },
      {
        name: 'Reinforced Cement Concrete / RCC Design',
        skills: ['Check slab, beam, column, footing reinforcement against drawings'],
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const DomainSubjects: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS.map((section) => ({
      ...section,
      subjects: section.subjects.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.skills.some((skill) => skill.toLowerCase().includes(q))
      ),
    })).filter((section) => section.subjects.length > 0);
  }, [query]);

  return (
    <div
      className="ug-domain-subjects"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-domain-subjects { position: relative; overflow: hidden; }
        .ug-domain-input::placeholder { color: ${COLORS.muted}; }
        .ug-domain-input:focus { outline: none; border-color: ${COLORS.accent}; box-shadow: 0 0 0 3px rgba(109,212,200,0.15); }
        .ug-section-card { transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 350ms ease, box-shadow 350ms ease; }
        @media (hover: hover) {
          .ug-section-card:hover { transform: translateY(-6px); }
          .ug-section-card:hover .ug-section-arrow { transform: translateX(5px); }
          .ug-section-card:hover .ug-card-shine { opacity: 1; }
        }
        .ug-section-arrow { transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1); }
        .ug-card-shine { opacity: 0; transition: opacity 350ms ease; }
        .ug-skill-row { transition: background-color 200ms ease-out; }
        @media (hover: hover) {
          .ug-skill-row:hover { background-color: rgba(255,255,255,0.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-section-card, .ug-section-arrow, .ug-card-shine, .ug-skill-row { transition: none !important; }
        }
      `}</style>

      {/* ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -160,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
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
            Pick the subjects you are interested in
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
            Explore civil engineering core subjects and the real site-level skills each one builds.
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
              placeholder="Search a subject or skill, e.g. RCC, surveying…"
              aria-label="Search subjects"
              className="ug-domain-input w-full bg-transparent border-0 py-3 text-base"
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
              {filteredSections.reduce((acc, sec) => acc + sec.subjects.length, 0)} subjects found
            </p>
          )}
        </div>

        {/* Sections grid */}
        <div
          className="mt-12 grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}
        >
          {filteredSections.map((section, sectionIndex) => {
            const meta = SECTIONS_META[sectionIndex % SECTIONS_META.length];
            const SectionIcon = meta.icon;
            const number = String(section.id).padStart(2, '0');
            return (
              <motion.div
                key={section.id}
                custom={sectionIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="ug-section-card"
                style={{
                  position: 'relative',
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 22,
                  overflow: 'hidden',
                  backgroundImage: `linear-gradient(180deg, ${meta.glow} 0%, transparent 35%)`,
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    height: 3,
                    width: '100%',
                    background: `linear-gradient(90deg, ${meta.accent}, ${meta.accent}80)`,
                  }}
                />

                {/* Shine overlay on hover */}
                <div
                  className="ug-card-shine"
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${meta.glow} 0%, transparent 50%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ padding: 'clamp(22px, 4vw, 28px)' }}>
                  {/* Section header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${meta.accent}12`,
                        border: `1px solid ${meta.accent}25`,
                        borderRadius: 14,
                        width: 52,
                        height: 52,
                      }}
                    >
                      <SectionIcon size={24} style={{ color: meta.accent }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="inline-block text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                        style={{ ...techFont, color: meta.accent }}
                      >
                        {meta.label}
                      </span>
                      <h3
                        className="mt-1 font-semibold"
                        style={{ ...headingFont, color: COLORS.text, fontSize: '1.1rem', lineHeight: 1.3 }}
                      >
                        {section.title}
                      </h3>
                    </div>
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${meta.accent}10`,
                        border: `1px solid ${meta.accent}20`,
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{ ...techFont, color: meta.accent, fontSize: '0.95rem' }}
                      >
                        {number}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="mt-5 mb-4"
                    style={{ height: 1, background: `linear-gradient(90deg, ${meta.accent}30, transparent)` }}
                  />

                  {/* Subjects list */}
                  <div className="space-y-3">
                    {section.subjects.map((subject, subjectIndex) => {
                      const SubjectIcon = SUBJECT_ICONS[subject.name] || Boxes;
                      return (
                        <div
                          key={`${section.id}-${subjectIndex}`}
                          className="ug-skill-row rounded-xl"
                          style={{ padding: '14px 16px' }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: 6,
                                background: `${meta.accent}14`,
                              }}
                            >
                              <SubjectIcon size={12} style={{ color: meta.accent }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                className="font-medium"
                                style={{ ...headingFont, color: COLORS.text, fontSize: '0.95rem', lineHeight: 1.4 }}
                              >
                                {subject.name}
                              </h4>
                              <ul className="mt-2 space-y-1.5">
                                {subject.skills.map((skill, skillIndex) => (
                                  <li
                                    key={skillIndex}
                                    className="flex items-start gap-2"
                                    style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.85rem', lineHeight: 1.6 }}
                                  >
                                    <Check
                                      size={12}
                                      className="flex-shrink-0 mt-0.5"
                                      style={{ color: meta.accent }}
                                    />
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom action hint */}
                <div
                  className="flex items-center justify-between"
                  style={{
                    padding: '14px 22px',
                    background: `${meta.accent}08`,
                    borderTop: `1px solid ${meta.accent}15`,
                  }}
                >
                  <span
                    className="text-xs font-medium uppercase tracking-[0.12em]"
                    style={{ ...techFont, color: meta.accent }}
                  >
                    {section.subjects.length} subjects
                  </span>
                  <ArrowRight
                    size={18}
                    className="ug-section-arrow"
                    style={{ color: meta.accent }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {query.trim() && filteredSections.length === 0 && (
          <div className="mt-12 text-center">
            <p style={{ ...bodyFont, color: COLORS.muted, fontSize: '1.05rem' }}>
              No subjects match “{query}”.
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
        )}
      </div>
    </div>
  );
};

export default DomainSubjects;
