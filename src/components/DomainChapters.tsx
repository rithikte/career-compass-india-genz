import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ChevronDown } from 'lucide-react';

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

interface Chapter {
  title: string;
  tags: string;
}
interface Subject {
  name: string;
  chapters: Chapter[];
}
interface Section {
  id: number;
  title: string;
  subjects: Subject[];
}

const SUB = {
  rcc: {
    name: 'RCC Design',
    chapters: [
      { title: 'Design of Slabs', tags: 'RCC Slab Design / One-way Two-way Slab / Slab Reinforcement' },
      { title: 'Flexural Design of Beams', tags: 'Beam Design / Bending Design / Singly & Doubly Reinforced Beams' },
      { title: 'Design of Columns', tags: 'RCC Column Design / Compression Member / Column Steel Design' },
      { title: 'Shear, Bond and Development Length', tags: 'Stirrups & Anchorage / Bond Stress / Laps and Hooks' },
      { title: 'Footings and Foundation Basics', tags: 'Isolated Footing / RCC Foundation / Footing Reinforcement' },
      { title: 'Limit State Design Basics', tags: 'RCC Design Philosophy / Safety Factors / LSM Basics' },
    ],
  },
  building: {
    name: 'Building Construction',
    chapters: [
      { title: 'Formwork and Scaffolding', tags: 'Shuttering / Staging / Temporary Works' },
      { title: 'Foundations and Excavation', tags: 'Substructure / Excavation Work / Foundation Construction' },
      { title: 'Floors, Roofs and Slabs Construction', tags: 'Floor Construction / Roof Construction / Slab Work' },
      { title: 'Damp Proofing and Waterproofing', tags: 'DPC / Waterproofing / Moisture Protection' },
      { title: 'Building Services Coordination Basics', tags: 'MEP Coordination / Sleeves & Openings / Utility Coordination' },
      { title: 'Masonry and Wall Construction', tags: 'Brickwork / Blockwork / Wall Construction' },
      { title: 'Finishing Works', tags: 'Plastering / Flooring / Painting' },
      { title: 'Construction Joints and Expansion Joints', tags: 'Concreting Joints / Movement Joints / Building Joints' },
    ],
  },
  concrete: {
    name: 'Concrete Technology',
    chapters: [
      { title: 'Production, Placing and Compaction', tags: 'Batching, Mixing, Placing / Concrete Handling / Compaction' },
      { title: 'Quality Control and Tests on Concrete', tags: 'Slump Test / Cube Test / Concrete Testing' },
      { title: 'Fresh Concrete and Workability', tags: 'Workability / Slump / Fresh Concrete Properties' },
      { title: 'Curing of Concrete', tags: 'Curing Methods / Strength Gain / Moisture Control' },
      { title: 'Concrete Mix Design Basics', tags: 'Mix Proportioning / Grade of Concrete / Nominal & Design Mix' },
      { title: 'Cement, Aggregates and Water', tags: 'Concrete Materials / Ingredients / Cement Aggregate Properties' },
    ],
  },
  survey: {
    name: 'Surveying',
    chapters: [
      { title: 'Levelling', tags: 'Auto Level / Dumpy Level / RL Calculation' },
      { title: 'Setting Out Works', tags: 'Building Layout / Grid Marking / Structure Setting Out' },
      { title: 'Total Station Basics', tags: 'Total Station Survey / EDM / Electronic Surveying' },
      { title: 'Linear Measurement and Chain Surveying', tags: 'Tape Survey / Distance Measurement / Chain Survey' },
      { title: 'Theodolite and Angular Measurement Basics', tags: 'Angular Survey / Theodolite Survey / Angle Measurement' },
      { title: 'Contouring and Site Levels', tags: 'Site Topography / Ground Level Mapping / Contour Survey' },
    ],
  },
  estimation: {
    name: 'Estimation and Costing',
    chapters: [
      { title: 'Bar Bending Schedule Basics', tags: 'BBS / Steel Bar Schedule / Reinforcement Quantity' },
      { title: 'Quantity Take-off Basics', tags: 'Quantity Surveying / Measurement / Taking Out Quantities' },
      { title: 'BOQ and Measurement Book Basics', tags: 'Bill of Quantities / MB Book / Billing Records' },
      { title: 'Estimation of RCC and Building Works', tags: 'Building Estimate / RCC Estimate / Residential Building Estimate' },
      { title: 'Rate Analysis Basics', tags: 'Analysis of Rates / Unit Rate / Work Item Costing' },
    ],
  },
};

const SECTIONS: Section[] = [
  { id: 1, title: 'Chapters Section - 1', subjects: [SUB.rcc, SUB.building, SUB.concrete, SUB.survey, SUB.estimation] },
  { id: 2, title: 'Chapters Section - 2', subjects: [SUB.estimation, SUB.survey, SUB.concrete, SUB.building, SUB.rcc] },
  { id: 3, title: 'Chapters Section - 3', subjects: [SUB.rcc, SUB.estimation, SUB.building, SUB.concrete, SUB.survey] },
  { id: 4, title: 'Chapters Section - 4', subjects: [SUB.survey, SUB.building, SUB.concrete, SUB.estimation, SUB.estimation] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const DomainChapters: React.FC = () => {
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
      className="ug-domain-chapters"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-domain-chapters { position: relative; overflow: hidden; }
        .ug-chap-input::placeholder { color: ${COLORS.muted}; }
        .ug-chap-input:focus { outline: none; border-color: ${COLORS.accent}; box-shadow: 0 0 0 3px rgba(109,212,200,0.15); }
        .ug-chap-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-chap-card:hover { transform: translateY(-4px); border-color: ${COLORS.accent}; box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
          .ug-chap-card:hover .ug-chap-icon { color: ${COLORS.accent}; }
        }
        .ug-chap-icon { transition: color 250ms ease-out; }
        .ug-chap-row { transition: background-color 200ms ease-out, transform 200ms ease-out; }
        @media (hover: hover) {
          .ug-chap-row:hover { background-color: rgba(255,255,255,0.04); transform: translateX(2px); }
        }
        .ug-chap-tags-wrap { overflow: hidden; transition: max-height 300ms ease-out, opacity 250ms ease-out; }
        .ug-chap-tags-wrap[data-open="true"] { max-height: 200px; opacity: 1; }
        .ug-chap-tags-wrap[data-open="false"] { max-height: 0; opacity: 0; }
        .ug-chap-chevron { transition: transform 250ms ease-out; }
        .ug-chap-chevron[data-open="true"] { transform: rotate(180deg); }
        .ug-chap-toggle { transition: background-color 200ms ease-out, color 200ms ease-out; }
        @media (hover: hover) {
          .ug-chap-toggle:hover { background-color: rgba(255,255,255,0.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-chap-card, .ug-chap-icon, .ug-chap-row, .ug-chap-tags-wrap, .ug-chap-chevron { transition: none !important; }
        }
      `}</style>

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
        style={{ maxWidth: 1200, padding: 'clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)' }}
      >
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
            Domain Chapters
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-bold"
            style={{ ...headingFont, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', lineHeight: 1.1 }}
          >
            Pick the chapters you want to master
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
            Drill down from each subject into the exact chapters and site-ready concepts that shape real civil engineering work.
          </motion.p>
        </div>

        <div
          className="mt-10 grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}
        >
          {filteredSections.map((section, sectionIndex) => {
            const accent = SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length];
            return (
              <motion.div
                key={section.id}
                custom={sectionIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="ug-chap-card"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 20,
                  padding: 'clamp(20px, 4vw, 28px)',
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                }}
              >
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
                    <Layers size={22} className="ug-chap-icon" style={{ color: accent }} />
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
                </div>

                <div className="mt-5 mb-4" style={{ height: 1, background: COLORS.border }} />

                <div className="space-y-6">
                  {section.subjects.map((subject, si) => (
                    <div key={`${section.id}-${si}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[0.62rem] font-medium uppercase tracking-[0.16em] px-2 py-0.5"
                          style={{
                            ...techFont,
                            color: accent,
                            background: `${accent}12`,
                            borderRadius: 6,
                          }}
                        >
                          Subject {si + 1}
                        </span>
                        <h4
                          className="font-semibold"
                          style={{ ...headingFont, color: COLORS.text, fontSize: '0.95rem' }}
                        >
                          {subject.name}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {subject.chapters.map((ch, ci) => (
                          <div
                            key={ci}
                            className="ug-chap-row rounded-lg"
                            style={{ padding: '10px 12px' }}
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
                                <div
                                  className="font-medium"
                                  style={{ ...headingFont, color: COLORS.text, fontSize: '0.9rem', lineHeight: 1.4 }}
                                >
                                  {ch.title}
                                </div>
                                {
                                  (() => {
                                    const chapKey = `${section.id}-${si}-${ci}`;
                                    const isOpen = expanded.has(chapKey);
                                    return (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() => toggleKey(chapKey)}
                                          aria-expanded={isOpen}
                                          aria-controls={`chap-tags-${chapKey}`}
                                          className="ug-chap-toggle mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.68rem] font-medium uppercase tracking-wider"
                                          style={{ ...techFont, color: accent, background: 'transparent' }}
                                        >
                                          Also Called
                                          <ChevronDown
                                            size={14}
                                            className="ug-chap-chevron"
                                            data-open={isOpen}
                                            style={{ color: accent }}
                                          />
                                        </button>
                                        <div
                                          id={`chap-tags-${chapKey}`}
                                          className="ug-chap-tags-wrap"
                                          data-open={isOpen}
                                        >
                                          <div
                                            className="pt-2 flex items-start gap-2"
                                            style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.74rem', lineHeight: 1.55 }}
                                          >
                                            <span style={{ color: accent, flexShrink: 0 }}>—</span>
                                            <span>{ch.tags}</span>
                                          </div>
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
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {query.trim() && filteredSections.length === 0 && (
          <div className="mt-12 text-center">
            <p style={{ ...bodyFont, color: COLORS.muted, fontSize: '1.05rem' }}>
              No chapters match “{query}”.
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

export default DomainChapters;
