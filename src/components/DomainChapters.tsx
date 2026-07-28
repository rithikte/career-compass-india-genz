import React, { useState, useRef, useEffect, useCallback } from 'react';
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

const PAIRS: Section[][] = [SECTIONS.slice(0, 2), SECTIONS.slice(2, 4)];


const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface DomainChaptersProps {
  onContinue?: () => void;
}

const DomainChapters: React.FC<DomainChaptersProps> = ({ onContinue }) => {
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
            <Layers size={compact ? 19 : 22} className="ug-chap-icon" style={{ color: accent }} />
          </div>
          <div className="min-w-0 flex-1">
            <span
              className="inline-block dc-label font-medium uppercase"
              style={{ ...techFont, color: accent }}
            >
              Section {section.id}
            </span>
            <h3
              className="mt-1 font-semibold"
              style={{ ...headingFont, color: COLORS.text, lineHeight: 1.4 }}
            >
              {section.title}
            </h3>
          </div>
        </div>

        <div className={compact ? 'mt-4 mb-3' : 'mt-5 mb-4'} style={{ height: 1, background: COLORS.border }} />

        <div className={compact ? 'space-y-5' : 'space-y-6'}>
          {section.subjects.map((subject, si) => (
            <div key={`${section.id}-${si}`}>
              <div className="mb-3 flex flex-col items-start gap-1">
                <span
                  className="dc-label font-medium uppercase px-2 py-0.5"
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
                  className="font-semibold w-full"
                  style={{ ...headingFont, color: COLORS.text, overflowWrap: 'anywhere' }}
                >
                  {subject.name}
                </h4>
              </div>
              <div className="space-y-2">
                {subject.chapters.map((ch, ci) => {
                  const chapKey = `${section.id}-${si}-${ci}`;
                  const isOpen = expanded.has(chapKey);
                  return (
                    <div
                      key={ci}
                      className="ug-chap-row rounded-lg"
                      style={{ padding: compact ? '8px 10px' : '10px 12px' }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 mt-1.5"
                          style={{ width: 6, height: 6, borderRadius: '50%', background: accent }}
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            className="font-medium dc-body"
                            style={{ ...headingFont, color: COLORS.text, lineHeight: 1.4 }}
                          >
                            {ch.title}
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleKey(chapKey)}
                            aria-expanded={isOpen}
                            aria-controls={`chap-tags-${variant}-${section.id}-${chapKey}`}
                            className="ug-chap-toggle dc-label mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium uppercase"
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
                            id={`chap-tags-${variant}-${section.id}-${chapKey}`}
                            className="ug-chap-tags-wrap"
                            data-open={isOpen}
                          >
                            <div
                              className="pt-2 flex items-start gap-2 dc-body"
                              style={{ ...bodyFont, color: COLORS.muted, lineHeight: 1.55 }}
                            >
                              <span style={{ color: accent, flexShrink: 0 }}>—</span>
                              <span>{ch.tags}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="ug-domain-chapters"
      style={{ background: COLORS.bg, color: COLORS.text, width: '100%' }}
    >
      <style>{`
        .ug-domain-chapters { position: relative; overflow: hidden; width: 100%; }

        /* Full-bleed edge-to-edge with responsive horizontal padding */
        .ug-domain-chapters .dc-container {
          width: 100%;
          max-width: 100%;
          padding-left: 11.2px;
          padding-right: 11.2px;
        }
        @media (min-width: 768px) { .ug-domain-chapters .dc-container { padding-left: 16.8px; padding-right: 16.8px; } }
        @media (min-width: 1280px) { .ug-domain-chapters .dc-container { padding-left: 22.4px; padding-right: 22.4px; } }

        .dc-headline-gradient {
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
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

        /* Fluid typography: 375 -> 768 -> 1280 breakpoint ramps (reduced 5%) */
        .ug-domain-chapters h1,
        .ug-domain-chapters .dc-headline-size {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.08;
          font-size: clamp(28.88px, calc(28.88px + (32.87 - 28.88) * ((100vw - 375px) / (768 - 375))), 32.87px) !important;
        }
        @media (min-width: 768px) {
          .ug-domain-chapters h1,
          .ug-domain-chapters .dc-headline-size {
            font-size: clamp(32.87px, calc(32.87px + (51.68 - 32.87) * ((100vw - 768px) / (1280 - 768))), 51.68px) !important;
          }
        }
        .ug-domain-chapters h3 { font-size: clamp(12.35px, calc(12.35px + (17.1 - 12.35) * ((100vw - 375px) / (1280 - 375))), 17.1px) !important; line-height: 1.35; }
        .ug-domain-chapters h4 { font-size: clamp(11.4px, calc(11.4px + (14.25 - 11.4) * ((100vw - 375px) / (1280 - 375))), 14.25px) !important; line-height: 1.4; }
        .ug-domain-chapters p,
        .ug-domain-chapters li,
        .ug-domain-chapters .dc-body {
          font-size: clamp(10.45px, calc(10.45px + (12.35 - 10.45) * ((100vw - 375px) / (768 - 375))), 12.35px) !important;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .ug-domain-chapters p,
          .ug-domain-chapters li,
          .ug-domain-chapters .dc-body {
            font-size: clamp(12.35px, calc(12.35px + (14.25 - 12.35) * ((100vw - 768px) / (1280 - 768))), 14.25px) !important;
          }
        }
        .ug-domain-chapters .dc-label,
        .ug-domain-chapters small {
          font-size: clamp(7.6px, calc(7.6px + (8.74 - 7.6) * ((100vw - 375px) / (768 - 375))), 8.74px) !important;
          letter-spacing: 0.12em;
        }
        @media (min-width: 768px) {
          .ug-domain-chapters .dc-label,
          .ug-domain-chapters small {
            font-size: clamp(8.74px, calc(8.74px + (10.45 - 8.74) * ((100vw - 768px) / (1280 - 768))), 10.45px) !important;
          }
        }

        /* --- Desktop grid vs tablet/mobile comparison rail --- */
        .dc-grid { display: none; }
        .dc-compare { display: block; }
        @media (min-width: 1024px) {
          .dc-grid { display: grid; }
          .dc-compare { display: none; }
        }
        .dc-rail {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 6px;
        }
        .dc-rail::-webkit-scrollbar { display: none; }
        .dc-rail-card {
          scroll-snap-align: center;
          flex: 0 0 auto;
          width: 92vw;
          max-width: 760px;
        }
        @media (min-width: 640px) {
          .dc-rail-card { width: 88vw; max-width: 760px; }
        }
        .dc-pair-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .dc-pair-grid { gap: 16px; }
        }
        .dc-pair-col + .dc-pair-col {
          border-left: 1px solid ${COLORS.border};
          padding-left: 10px;
        }
        @media (min-width: 640px) {
          .dc-pair-col + .dc-pair-col { padding-left: 16px; }
        }

        .dc-chip {
          transition: background-color 200ms ease-out, color 200ms ease-out, border-color 200ms ease-out;
          white-space: nowrap;
        }
        .dc-dot { transition: width 250ms ease-out, background-color 250ms ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .ug-chap-card, .ug-chap-icon, .ug-chap-row, .ug-chap-tags-wrap, .ug-chap-chevron, .dc-chip, .dc-dot { transition: none !important; }
          .dc-rail { scroll-behavior: auto; }
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
        className="relative dc-container"
        style={{ paddingTop: 'clamp(32px, 6vw, 72px)', paddingBottom: 'clamp(32px, 6vw, 72px)' }}
      >
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="dc-label inline-flex items-center gap-2 font-medium uppercase"
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
            className="mt-4 dc-headline-gradient dc-headline-size"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Pick the chapters you are interested in
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4 dc-body"
            style={{ ...bodyFont, color: COLORS.muted, maxWidth: '62ch' }}
          >
            Learn the concepts that build real civil engineering knowledge.
          </motion.p>
        </div>

        {/* Desktop: side-by-side grid */}
        <div
          className="dc-grid mt-10 gap-6"
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
              className="ug-chap-card cursor-pointer"
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
        <div className="dc-compare mt-8">
          <div className="flex items-center gap-2 overflow-x-auto dc-rail" role="tablist" aria-label="Chapter sections">
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
                  className="dc-chip dc-label rounded-full px-3 py-1.5 font-medium uppercase"
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

          <p
            className="mt-3 text-center dc-body"
            style={{ ...bodyFont, color: COLORS.muted }}
          >
            Swipe to compare Sections 1–2 and 3–4
          </p>

          <div ref={railRef} className="dc-rail mt-3">
            {PAIRS.map((pair, pairIndex) => (
              <div
                key={`pair-${pairIndex}`}
                data-rail-card
                className="dc-rail-card ug-chap-card"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${active === pairIndex ? SECTION_ACCENTS[(pairIndex * 2) % SECTION_ACCENTS.length] + '66' : COLORS.border}`,
                  borderRadius: 20,
                  padding: 'clamp(12px, 3vw, 20px)',
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                }}
              >
                <div className="dc-pair-grid">
                  {pair.map((section) => {
                    const sectionIndex = SECTIONS.indexOf(section);
                    return (
                      <div
                        key={section.id}
                        className="dc-pair-col min-w-0 cursor-pointer"
                        onClick={() => setSelected(section.id)}
                        style={{
                          borderRadius: 12,
                          padding: selected === section.id ? 6 : 6,
                          background: selected === section.id ? `${SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length]}10` : 'transparent',
                          boxShadow: selected === section.id ? `inset 0 0 0 1px ${SECTION_ACCENTS[sectionIndex % SECTION_ACCENTS.length]}55` : 'none',
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
                className="dc-dot rounded-full"
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
          <p className="dc-body text-center" style={{ ...bodyFont, color: COLORS.muted }}>
            {selected ? `Chapters Section - ${selected} selected` : 'Select a section to continue'}
          </p>
          <button
            type="button"
            onClick={() => onContinue?.()}
            disabled={!selected}
            className="dc-label rounded-full px-6 py-3 font-medium uppercase"
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

export default DomainChapters;

