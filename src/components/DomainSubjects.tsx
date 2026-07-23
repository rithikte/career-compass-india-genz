import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ChevronDown } from 'lucide-react';

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
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const DomainSubjects: React.FC = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleKey = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div
      className="ug-domain-subjects"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-domain-subjects { position: relative; overflow: hidden; }
        .ug-section-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-section-card:hover { transform: translateY(-4px); border-color: ${COLORS.accent}; box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
          .ug-section-card:hover .ug-section-arrow { transform: translateX(4px); opacity: 1; }
          .ug-section-card:hover .ug-section-icon { color: ${COLORS.accent}; }
        }
        .ug-section-arrow { transition: transform 250ms ease-out, opacity 250ms ease-out; opacity: 0.4; }
        .ug-section-icon { transition: color 250ms ease-out; }
        .ug-skill-row { transition: background-color 200ms ease-out; }
        @media (hover: hover) {
          .ug-skill-row:hover { background-color: rgba(255,255,255,0.03); }
        }
        .ug-subj-skills-wrap { overflow: hidden; transition: max-height 300ms ease-out, opacity 250ms ease-out; }
        .ug-subj-skills-wrap[data-open="true"] { max-height: 400px; opacity: 1; }
        .ug-subj-skills-wrap[data-open="false"] { max-height: 0; opacity: 0; }
        .ug-subj-chevron { transition: transform 250ms ease-out; }
        .ug-subj-chevron[data-open="true"] { transform: rotate(180deg); }
        .ug-subj-toggle { transition: background-color 200ms ease-out, color 200ms ease-out; }
        @media (hover: hover) {
          .ug-subj-toggle:hover { background-color: rgba(255,255,255,0.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-section-card, .ug-section-arrow, .ug-section-icon, .ug-skill-row, .ug-subj-skills-wrap, .ug-subj-chevron, .ug-subj-toggle { transition: none !important; }
        }

        /* Responsive horizontal padding: mobile 11.2 / tablet 16.8 / desktop 22.4 */
        .ug-domain-subjects .ds-container { padding-left: 11.2px; padding-right: 11.2px; }
        @media (min-width: 768px) { .ug-domain-subjects .ds-container { padding-left: 16.8px; padding-right: 16.8px; } }
        @media (min-width: 1280px) { .ug-domain-subjects .ds-container { padding-left: 22.4px; padding-right: 22.4px; } }

        /* Fluid typography per spec */
        .ug-domain-subjects h1,
        .ug-domain-subjects .ds-headline { font-size: clamp(30.4px, calc(30.4px + (54.4 - 30.4) * ((100vw - 375px) / (1280 - 375))), 54.4px) !important; line-height: 1.1; }
        .ug-domain-subjects .ds-headline-gradient {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem) !important;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ug-domain-subjects h2 { font-size: clamp(22px, calc(22px + (36 - 22) * ((100vw - 375px) / (1280 - 375))), 36px) !important; line-height: 1.15; }
        .ug-domain-subjects h3 { font-size: clamp(16px, calc(16px + (22 - 16) * ((100vw - 375px) / (1280 - 375))), 22px) !important; }
        .ug-domain-subjects p,
        .ug-domain-subjects li,
        .ug-domain-subjects .ds-body { font-size: clamp(11px, calc(11px + (15 - 11) * ((100vw - 375px) / (1280 - 375))), 15px) !important; }
        .ug-domain-subjects .ds-label,
        .ug-domain-subjects small { font-size: clamp(8px, calc(8px + (11 - 8) * ((100vw - 375px) / (1280 - 375))), 11px) !important; letter-spacing: 0.08em; }
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
        className="relative mx-auto ds-container"
        style={{ maxWidth: '100%', paddingTop: 'clamp(32px, 6vw, 72px)', paddingBottom: 'clamp(32px, 6vw, 72px)' }}
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

        {/* Sections grid */}
        <div
          className="mt-10 grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
        >
          {SECTIONS.map((section, sectionIndex) => {
            const accent = SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length];
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
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 20,
                  padding: 'clamp(20px, 4vw, 28px)',
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                }}
              >
                {/* Section header */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${accent}15`,
                      borderRadius: 12,
                      width: 44,
                      height: 44,
                    }}
                  >
                    <BookOpen size={22} className="ug-section-icon" style={{ color: accent }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.14em]"
                      style={{ ...techFont, color: accent }}
                    >
                      Section {section.id}
                    </span>
                    <h3
                      className="mt-1 font-semibold"
                      style={{ ...headingFont, color: COLORS.text, fontSize: '1.05rem', lineHeight: 1.4 }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <ArrowRight
                    size={18}
                    className="ug-section-arrow flex-shrink-0 mt-1"
                    style={{ color: accent }}
                  />
                </div>

                {/* Divider */}
                <div
                  className="mt-5 mb-4"
                  style={{ height: 1, background: COLORS.border }}
                />

                {/* Subjects list */}
                <div className="space-y-4">
                  {section.subjects.map((subject, subjectIndex) => (
                    <div
                      key={`${section.id}-${subjectIndex}`}
                      className="ug-skill-row rounded-xl"
                      style={{ padding: '12px 14px' }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 mt-1.5"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: accent,
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-medium"
                            style={{ ...headingFont, color: COLORS.text, fontSize: '0.98rem', lineHeight: 1.4 }}
                          >
                            {subject.name}
                          </h4>
                          {
                            (() => {
                              const subjKey = `${section.id}-${subjectIndex}`;
                              const isOpen = expanded.has(subjKey);
                              return (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => toggleKey(subjKey)}
                                    aria-expanded={isOpen}
                                    aria-controls={`subj-skills-${subjKey}`}
                                    className="ug-subj-toggle mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.68rem] font-medium uppercase tracking-wider"
                                    style={{ ...techFont, color: accent, background: 'transparent' }}
                                  >
                                    Also Called
                                    <ChevronDown
                                      size={14}
                                      className="ug-subj-chevron"
                                      data-open={isOpen}
                                      style={{ color: accent }}
                                    />
                                  </button>
                                  <div
                                    id={`subj-skills-${subjKey}`}
                                    className="ug-subj-skills-wrap"
                                    data-open={isOpen}
                                  >
                                    <ul className="mt-2 space-y-1.5">
                                      {subject.skills.map((skill, skillIndex) => (
                                        <li
                                          key={skillIndex}
                                          className="flex items-start gap-2"
                                          style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.84rem', lineHeight: 1.55 }}
                                        >
                                          <span style={{ color: accent, flexShrink: 0 }}>—</span>
                                          <span>{skill}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              );
                            })()
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default DomainSubjects;
