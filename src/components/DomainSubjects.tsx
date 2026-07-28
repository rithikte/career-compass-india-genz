import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown } from 'lucide-react';

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
  accent5: '#B8A6D9',
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

/* Priority ladder for the 5 subject groups */
const PRIORITIES = [
  { label: 'High Priority', color: '#F87171' },
  { label: 'High Priority', color: '#F87171' },
  { label: 'Moderate', color: '#FBBF24' },
  { label: 'Supporting', color: '#6DD4C8' },
  { label: 'Supporting', color: '#6DD4C8' },
];

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

/* Transpose: group all sections' Nth subject into one dropdown */
const MAX_SUBJECTS = Math.max(...SECTIONS.map((s) => s.subjects.length));

const GROUPS = Array.from({ length: MAX_SUBJECTS }, (_, index) => ({
  index,
  title: `Subject ${index + 1}`,
  items: SECTIONS.map((section) => ({
    sectionId: section.id,
    sectionTitle: section.title,
    subject: section.subjects[index],
  })).filter((item) => Boolean(item.subject)),
}));

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
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set([0]));
  const [openAlias, setOpenAlias] = useState<Set<string>>(new Set());
  const [picked, setPicked] = useState<Record<number, string>>({});

  const toggleGroup = (key: number) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleAlias = (key: string) => {
    setOpenAlias((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div
      className="ug-domain-subjects"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
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

        .ug-group-card { transition: border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-group-card:hover { border-color: rgba(109,212,200,0.45); box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
        }
        .ug-group-toggle { width: 100%; text-align: left; background: transparent; }
        .ug-group-body { overflow: hidden; transition: max-height 340ms ease-out, opacity 260ms ease-out; }
        .ug-group-body[data-open="true"] { max-height: 2400px; opacity: 1; }
        .ug-group-body[data-open="false"] { max-height: 0; opacity: 0; }

        .ug-skill-row { transition: background-color 200ms ease-out, border-color 200ms ease-out; }
        @media (hover: hover) {
          .ug-skill-row:hover { background-color: rgba(255,255,255,0.03); }
        }
        .ug-subj-skills-wrap { overflow: hidden; transition: max-height 300ms ease-out, opacity 250ms ease-out; }
        .ug-subj-skills-wrap[data-open="true"] { max-height: 400px; opacity: 1; }
        .ug-subj-skills-wrap[data-open="false"] { max-height: 0; opacity: 0; }
        .ug-chevron { transition: transform 250ms ease-out; }
        .ug-chevron[data-open="true"] { transform: rotate(180deg); }
        .ug-subj-toggle { transition: background-color 200ms ease-out, color 200ms ease-out; }
        @media (hover: hover) {
          .ug-subj-toggle:hover { background-color: rgba(255,255,255,0.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-group-card, .ug-group-body, .ug-skill-row, .ug-subj-skills-wrap, .ug-chevron, .ug-subj-toggle { transition: none !important; }
        }

        /* Fluid typography: 375 -> 768 -> 1280 breakpoint ramps */
        .ug-domain-subjects h1,
        .ug-domain-subjects .ds-headline-gradient {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.08;
          font-size: clamp(30.4px, calc(30.4px + (34.6 - 30.4) * ((100vw - 375px) / (768 - 375))), 34.6px) !important;
          background: linear-gradient(180deg, #ffffff 0%, #b7c0cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 768px) {
          .ug-domain-subjects h1,
          .ug-domain-subjects .ds-headline-gradient {
            font-size: clamp(34.6px, calc(34.6px + (54.4 - 34.6) * ((100vw - 768px) / (1280 - 768))), 54.4px) !important;
          }
        }
        .ug-domain-subjects h2 { font-size: clamp(20px, calc(20px + (32 - 20) * ((100vw - 375px) / (1280 - 375))), 32px) !important; line-height: 1.15; }
        .ug-domain-subjects h3 { font-size: clamp(13px, calc(13px + (18 - 13) * ((100vw - 375px) / (1280 - 375))), 18px) !important; line-height: 1.35; }
        .ug-domain-subjects h4 { font-size: clamp(12px, calc(12px + (15 - 12) * ((100vw - 375px) / (1280 - 375))), 15px) !important; line-height: 1.4; }
        .ug-domain-subjects p,
        .ug-domain-subjects li,
        .ug-domain-subjects .ds-body { font-size: clamp(11px, calc(11px + (15 - 11) * ((100vw - 375px) / (1280 - 375))), 15px) !important; line-height: 1.6; }
        .ug-domain-subjects .ds-label,
        .ug-domain-subjects small { font-size: clamp(8px, calc(8px + (11 - 8) * ((100vw - 375px) / (1280 - 375))), 11px) !important; letter-spacing: 0.12em; }
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
        {/* Header */}
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
            className="mt-4 ds-headline-gradient"
          >
            Pick the subjects you are interested in
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4"
            style={{ ...bodyFont, color: COLORS.muted, maxWidth: '60ch' }}
          >
            Open a subject to see how it appears across every section, then expand “Also called” to
            learn the other names and the real site-level skills it builds.
          </motion.p>
        </div>

        {/* Subject dropdowns */}
        <div className="mt-8 flex flex-col gap-4">
          {GROUPS.map((group) => {
            const priority = PRIORITIES[group.index % PRIORITIES.length];
            const accent = priority.color;
            const pickedName = picked[group.index];
            const isOpen = openGroups.has(group.index);
            return (
              <motion.div
                key={group.index}
                custom={group.index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="ug-group-card"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 18,
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  className="ug-group-toggle flex items-center gap-3 sm:gap-4"
                  onClick={() => toggleGroup(group.index)}
                  aria-expanded={isOpen}
                  aria-controls={`subject-group-${group.index}`}
                  style={{ padding: 'clamp(14px, 3vw, 22px)' }}
                >
                  <span
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}15`, borderRadius: 12, width: 40, height: 40 }}
                  >
                    <BookOpen size={20} style={{ color: accent }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="ds-label inline-flex items-center gap-1.5 font-medium uppercase rounded-full"
                      style={{
                        ...techFont,
                        color: accent,
                        background: `${accent}1A`,
                        border: `1px solid ${accent}40`,
                        padding: '2px 8px',
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                      {priority.label}
                    </span>
                    <h3 className="mt-1.5 font-semibold" style={{ ...headingFont, color: COLORS.text }}>
                      {pickedName || group.title}
                    </h3>
                  </span>
                  <ChevronDown
                    size={18}
                    className="ug-chevron flex-shrink-0"
                    data-open={isOpen}
                    style={{ color: accent }}
                  />
                </button>

                <div id={`subject-group-${group.index}`} className="ug-group-body" data-open={isOpen}>
                  <div
                    style={{
                      paddingLeft: 'clamp(14px, 3vw, 22px)',
                      paddingRight: 'clamp(14px, 3vw, 22px)',
                      paddingBottom: 'clamp(14px, 3vw, 22px)',
                    }}
                  >
                    <div style={{ height: 1, background: COLORS.border, marginBottom: 14 }} />
                    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
                      {group.items.map((item) => {
                        const aliasKey = `${group.index}-${item.sectionId}`;
                        const aliasOpen = openAlias.has(aliasKey);
                        return (
                          <div
                            key={aliasKey}
                            role="button"
                            tabIndex={0}
                            onClick={() => setPicked((p) => ({ ...p, [group.index]: item.subject.name }))}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setPicked((p) => ({ ...p, [group.index]: item.subject.name }));
                              }
                            }}
                            className="ug-skill-row rounded-xl cursor-pointer"
                            style={{
                              padding: '12px 14px',
                              border: `1px solid ${pickedName ? `${accent}55` : COLORS.border}`,
                            }}
                          >
                            <span
                              className="ds-label block font-medium uppercase"
                              style={{ ...techFont, color: COLORS.muted }}
                            >
                              Section {item.sectionId}
                            </span>
                            <h4 className="mt-1 font-medium" style={{ ...headingFont, color: COLORS.text }}>
                              {pickedName || item.subject.name}
                            </h4>


                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); toggleAlias(aliasKey); }}
                              aria-expanded={aliasOpen}
                              aria-controls={`alias-${aliasKey}`}
                              className="ug-subj-toggle ds-label mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium uppercase"
                              style={{ ...techFont, color: accent, background: 'transparent' }}
                            >
                              Also called
                              <ChevronDown
                                size={13}
                                className="ug-chevron"
                                data-open={aliasOpen}
                                style={{ color: accent }}
                              />
                            </button>

                            <div id={`alias-${aliasKey}`} className="ug-subj-skills-wrap" data-open={aliasOpen}>
                              <ul className="mt-2 space-y-1.5">
                                {item.subject.skills.map((skill, skillIndex) => (
                                  <li
                                    key={skillIndex}
                                    className="flex items-start gap-2"
                                    style={{ ...bodyFont, color: COLORS.muted }}
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pick Subjects Wise Chapters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 text-center"
        >
          <button
            type="button"
            onClick={() => onExploreChapters?.()}
            className="ug-chapters-cta inline-flex items-center gap-2 rounded-full font-semibold"
            style={{
              ...headingFont,
              color: COLORS.bg,
              background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accent2})`,
              padding: 'clamp(10px, 2.2vw, 14px) clamp(18px, 4vw, 28px)',
              border: 'none',
            }}
          >
            Pick Subjects Wise Chapters
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainSubjects;
