import React from 'react';

const clamp = (min: number, vwMin: number, max: number, vwMax: number = 1280, vwMinPx: number = 375) => {
  const slope = (max - min) / (vwMax - vwMinPx);
  const yInter = -vwMinPx * slope + min;
  return `clamp(${min}px, ${yInter.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw, ${max}px)`;
};

const fs = {
  label: clamp(8, 375, 11),
  labelSm: clamp(8.4, 375, 11),
  body: clamp(11, 375, 15),
  bodySm: clamp(11, 375, 13),
  h1: clamp(30.4, 375, 54.4),
  h2: clamp(20, 375, 32),
  h3: clamp(16, 375, 22),
  eyebrow: clamp(9, 375, 11),
};

const accentTeal = '#6ee7d7';
const accentViolet = '#a78bfa';
const muted = '#94a3b8';
const textMain = '#e5e7eb';
const textSoft = '#cbd5e1';

interface Chapter {
  chapter: string;
  contribution: number;
  reason: string;
}

interface AlternateName {
  chapter: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

interface SubjectData {
  subject: string;
  typicalSize: string;
  criticalChapters: Chapter[];
  alternateNames: AlternateName[];
  academicReadiness: string[];
  totalContribution: string;
}

const subjectsData: SubjectData[] = [
  {
    subject: 'Reinforced Cement Concrete / RCC Design',
    typicalSize: '10–14 chapters',
    criticalChapters: [
      { chapter: 'RCC Basics & Limit State Design', contribution: 10, reason: 'Helps understand why reinforcement, cover, safety factors, and concrete grades matter.' },
      { chapter: 'Flexural Design of Beams', contribution: 14, reason: 'Beam steel checking is common in RCC apartment work.' },
      { chapter: 'Shear, Bond & Development Length', contribution: 13, reason: 'Prevents weak anchorage, wrong laps, and unsafe reinforcement placement.' },
      { chapter: 'Slab Design & Reinforcement Detailing', contribution: 14, reason: 'Slab reinforcement checking is one of the most repeated fresher activities.' },
      { chapter: 'Column Design Basics', contribution: 12, reason: 'Helps verify column bars, ties, spacing, laps, and vertical alignment.' },
      { chapter: 'Footing Design Basics', contribution: 8, reason: 'Useful during foundation-stage site exposure.' },
      { chapter: 'Detailing of RCC Members', contribution: 14, reason: 'Directly supports reading drawings, BBS, bar spacing, cover, bends, hooks, and laps.' },
    ],
    alternateNames: [
      { chapter: 'RCC Basics & Limit State Design', alt1: 'Limit State Method', alt2: 'RCC Design Philosophy', alt3: 'Working Stress & Limit State Basics' },
      { chapter: 'Flexural Design of Beams', alt1: 'Design of Beams', alt2: 'Singly and Doubly Reinforced Beams', alt3: 'Beam Flexure Design' },
      { chapter: 'Shear, Bond & Development Length', alt1: 'Shear Design', alt2: 'Bond and Anchorage', alt3: 'Development Length and Lap Length' },
      { chapter: 'Slab Design & Reinforcement Detailing', alt1: 'Design of Slabs', alt2: 'One-Way and Two-Way Slabs', alt3: 'Slab Reinforcement Design' },
      { chapter: 'Column Design Basics', alt1: 'Design of Columns', alt2: 'Axially Loaded Columns', alt3: 'Short and Long Columns' },
      { chapter: 'Footing Design Basics', alt1: 'Design of Footings', alt2: 'Isolated Footing Design', alt3: 'RCC Foundation Design' },
      { chapter: 'Detailing of RCC Members', alt1: 'Reinforcement Detailing', alt2: 'Bar Bending Details', alt3: 'RCC Drawing and Detailing' },
    ],
    academicReadiness: [
      'Read RCC drawings without panic',
      'Check bar diameter, spacing, cover, laps, and anchorage',
      'Understand slab, beam, column, and footing reinforcement logic',
      'Identify dangerous reinforcement mistakes before concrete pour',
    ],
    totalContribution: '≈75%',
  },
  {
    subject: 'Building Construction / Construction Technology',
    typicalSize: '12–16 chapters',
    criticalChapters: [
      { chapter: 'Construction Materials Basics', contribution: 8, reason: 'Helps understand cement, aggregates, steel, bricks, blocks, and site material use.' },
      { chapter: 'Foundations and Substructure', contribution: 10, reason: 'Useful during excavation, PCC, footing, and plinth stages.' },
      { chapter: 'Masonry Construction', contribution: 7, reason: 'Apartment sites include blockwork/brickwork after RCC frame.' },
      { chapter: 'Formwork and Scaffolding', contribution: 16, reason: 'Directly supports shuttering checks, alignment, levels, and safety.' },
      { chapter: 'Concrete Construction Practices', contribution: 14, reason: 'Helps understand batching, placing, compaction, finishing, and curing.' },
      { chapter: 'Floors, Roofs and Slabs', contribution: 10, reason: 'Supports slab execution, level checking, and finishing sequence.' },
      { chapter: 'Construction Sequence of Buildings', contribution: 12, reason: 'Helps fresher understand work order from foundation to slab cycles.' },
    ],
    alternateNames: [
      { chapter: 'Construction Materials Basics', alt1: 'Building Materials', alt2: 'Civil Engineering Materials', alt3: 'Materials of Construction' },
      { chapter: 'Foundations and Substructure', alt1: 'Foundation Construction', alt2: 'Substructure Works', alt3: 'Footings and Foundations' },
      { chapter: 'Masonry Construction', alt1: 'Brick Masonry', alt2: 'Block Masonry', alt3: 'Wall Construction' },
      { chapter: 'Formwork and Scaffolding', alt1: 'Shuttering and Centering', alt2: 'Formwork Systems', alt3: 'Temporary Works' },
      { chapter: 'Concrete Construction Practices', alt1: 'Concrete Work', alt2: 'Concreting Operations', alt3: 'Placing and Curing of Concrete' },
      { chapter: 'Floors, Roofs and Slabs', alt1: 'Floor Construction', alt2: 'Roof Construction', alt3: 'Slab Construction' },
      { chapter: 'Construction Sequence of Buildings', alt1: 'Building Construction Sequence', alt2: 'Construction Methodology', alt3: 'Stages of Building Construction' },
    ],
    academicReadiness: [
      'Understand RCC apartment construction sequence',
      'Assist in shuttering, formwork, and level checks',
      'Know what happens before, during, and after concrete pour',
      'Coordinate better with supervisors, workers, and contractors',
    ],
    totalContribution: '≈77%',
  },
  {
    subject: 'Concrete Technology',
    typicalSize: '10–13 chapters',
    criticalChapters: [
      { chapter: 'Cement Properties', contribution: 8, reason: 'Helps understand setting, strength gain, and cement quality issues.' },
      { chapter: 'Aggregates', contribution: 8, reason: 'Useful for understanding concrete quality, grading, and workability.' },
      { chapter: 'Water-Cement Ratio', contribution: 12, reason: 'Critical for concrete strength, durability, and site quality control.' },
      { chapter: 'Workability of Concrete', contribution: 14, reason: 'Directly supports slump test and pour-day decisions.' },
      { chapter: 'Concrete Mix Proportioning Basics', contribution: 10, reason: 'Helps understand M20, M25, mix ratios, and ready-mix concrete use.' },
      { chapter: 'Fresh Concrete Operations', contribution: 12, reason: 'Covers placing, compaction, vibration, finishing, and cold joint risks.' },
      { chapter: 'Curing and Strength Development', contribution: 12, reason: 'Directly supports curing monitoring and quality protection.' },
    ],
    alternateNames: [
      { chapter: 'Cement Properties', alt1: 'Properties of Cement', alt2: 'Cement Tests', alt3: 'Cement and Its Characteristics' },
      { chapter: 'Aggregates', alt1: 'Fine and Coarse Aggregates', alt2: 'Aggregate Properties', alt3: 'Aggregate Testing' },
      { chapter: 'Water-Cement Ratio', alt1: 'W/C Ratio', alt2: 'Water Cement Ratio and Strength', alt3: 'Water Content in Concrete' },
      { chapter: 'Workability of Concrete', alt1: 'Slump Test', alt2: 'Fresh Concrete Workability', alt3: 'Consistency of Concrete' },
      { chapter: 'Concrete Mix Proportioning Basics', alt1: 'Concrete Mix Design', alt2: 'Nominal and Design Mix', alt3: 'Mix Proportioning' },
      { chapter: 'Fresh Concrete Operations', alt1: 'Placing and Compaction', alt2: 'Concrete Transportation and Placing', alt3: 'Vibration and Finishing' },
      { chapter: 'Curing and Strength Development', alt1: 'Curing of Concrete', alt2: 'Strength Gain of Concrete', alt3: 'Concrete Hardening' },
    ],
    academicReadiness: [
      'Observe concrete quality on pour day',
      'Understand slump, workability, curing, and compaction',
      'Identify bad concreting practices early',
      'Explain why poor concrete handling causes cracks and weak strength',
    ],
    totalContribution: '≈76%',
  },
  {
    subject: 'Surveying',
    typicalSize: '12–15 chapters',
    criticalChapters: [
      { chapter: 'Linear Measurement', contribution: 8, reason: 'Supports basic site measurement and layout checking.' },
      { chapter: 'Levelling', contribution: 18, reason: 'Essential for slab levels, floor levels, benchmarks, and slope checks.' },
      { chapter: 'Contouring and Reduced Levels', contribution: 8, reason: 'Helps understand ground levels and site level differences.' },
      { chapter: 'Theodolite / Angular Measurement Basics', contribution: 8, reason: 'Useful for alignment awareness, though often handled by seniors/surveyors.' },
      { chapter: 'Total Station Basics', contribution: 12, reason: 'Common on apartment sites for gridline and layout transfer.' },
      { chapter: 'Setting Out of Buildings', contribution: 18, reason: 'Directly supports layout, gridline, column marking, and execution accuracy.' },
    ],
    alternateNames: [
      { chapter: 'Linear Measurement', alt1: 'Chain Surveying', alt2: 'Tape Measurement', alt3: 'Distance Measurement' },
      { chapter: 'Levelling', alt1: 'Differential Levelling', alt2: 'Auto Level Surveying', alt3: 'Level Measurement' },
      { chapter: 'Contouring and Reduced Levels', alt1: 'Contour Surveying', alt2: 'RL Calculation', alt3: 'Reduced Level Measurement' },
      { chapter: 'Theodolite / Angular Measurement Basics', alt1: 'Theodolite Surveying', alt2: 'Angular Surveying', alt3: 'Horizontal and Vertical Angles' },
      { chapter: 'Total Station Basics', alt1: 'Total Station Surveying', alt2: 'Electronic Surveying', alt3: 'EDM Surveying' },
      { chapter: 'Setting Out of Buildings', alt1: 'Building Layout', alt2: 'Setting Out Works', alt3: 'Gridline Marking' },
    ],
    academicReadiness: [
      'Understand gridlines, benchmarks, and levels',
      'Assist in layout and level verification',
      'Use auto level readings with basic confidence',
      'Catch basic layout or level mismatch before execution',
    ],
    totalContribution: '≈72%',
  },
  {
    subject: 'Estimation and Costing / Quantity Surveying',
    typicalSize: '10–14 chapters',
    criticalChapters: [
      { chapter: 'Measurement Principles', contribution: 12, reason: 'Helps record actual work quantities correctly.' },
      { chapter: 'Centre Line and Long Wall Short Wall Method', contribution: 8, reason: 'Builds basic quantity calculation understanding.' },
      { chapter: 'Concrete Quantity Estimation', contribution: 14, reason: 'Useful for slab, beam, column, footing concrete quantity awareness.' },
      { chapter: 'Reinforcement Quantity Basics', contribution: 14, reason: 'Helps connect BBS, steel quantity, and site verification.' },
      { chapter: 'Rate Analysis Basics', contribution: 8, reason: 'Helps understand cost impact of materials, labour, and wastage.' },
      { chapter: 'BOQ and Measurement Sheet Basics', contribution: 16, reason: 'Directly supports site documentation and progress reporting.' },
    ],
    alternateNames: [
      { chapter: 'Measurement Principles', alt1: 'Principles of Estimation', alt2: 'Rules of Measurement', alt3: 'Units and Measurement' },
      { chapter: 'Centre Line and Long Wall Short Wall Method', alt1: 'Estimation Methods', alt2: 'Centre Line Method', alt3: 'Long Wall Short Wall Method' },
      { chapter: 'Concrete Quantity Estimation', alt1: 'RCC Quantity Estimation', alt2: 'Concrete Work Measurement', alt3: 'Quantity Take-Off for Concrete' },
      { chapter: 'Reinforcement Quantity Basics', alt1: 'Steel Quantity Estimation', alt2: 'Bar Bending Quantity', alt3: 'Reinforcement Take-Off' },
      { chapter: 'Rate Analysis Basics', alt1: 'Analysis of Rates', alt2: 'Rate Build-Up', alt3: 'Cost Analysis' },
      { chapter: 'BOQ and Measurement Sheet Basics', alt1: 'Bill of Quantities', alt2: 'Measurement Book Basics', alt3: 'Quantity Sheet Preparation' },
    ],
    academicReadiness: [
      'Prepare basic site quantity records',
      'Understand concrete and steel quantity logic',
      'Support daily progress documentation',
      'Avoid careless quantity reporting mistakes',
    ],
    totalContribution: '≈72%',
  },
];

const groundReality = [
  'These 33 chapters create roughly 70–80% academic readiness for a Junior Site Engineer in RCC apartment execution.',
  'RCC Design, Building Construction, and Concrete Technology matter most because daily site mistakes happen around steel, shuttering, levels, and concrete.',
  'Surveying is needed mainly for layout and level control, not full survey mastery.',
  'Estimation is useful, but for this role it supports documentation and quantity awareness, not full billing ownership.',
  'The rest of the syllabus may help academically, but these chapters carry the real first-job survival value.',
];

const SubjectToChapter: React.FC = () => {
  return (
    <div
      style={{
        background:
          'radial-gradient(1200px 600px at 10% -10%, rgba(110,231,215,0.10), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(167,139,250,0.10), transparent 60%), #05070d',
        color: textMain,
        minHeight: '100vh',
        width: '100%',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          paddingLeft: 'clamp(11.2px, 1.4vw, 22.4px)',
          paddingRight: 'clamp(11.2px, 1.4vw, 22.4px)',
          paddingTop: 'clamp(28px, 4vw, 56px)',
          paddingBottom: 'clamp(48px, 6vw, 96px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: 999,
              background: accentTeal,
              boxShadow: `0 0 0 4px rgba(110,231,215,0.15)`,
            }}
          />
          <span
            style={{
              fontSize: fs.eyebrow,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: muted,
              fontWeight: 600,
            }}
          >
            Subject to Chapter Mapping
          </span>
        </div>

        {/* Headline */}
        <h1 className="stc-headline-gradient">
          What To Learn Inside Each Subject
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Shows the chapters that matter most for this career. Focus on the career-critical chapters first — they create the majority of on-site readiness.
        </p>

        {subjectsData.map((subject, idx) => (
          <div key={subject.subject}>
            <SectionTitle
              eyebrow={`Subject ${idx + 1} · ${subject.typicalSize}`}
              title={subject.subject}
            />

            {/* Career-Critical Chapters */}
            <div className="wfg-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
              <div className="wfg-table-chapters" role="table" aria-label={`Career-critical chapters for ${subject.subject}`}>
                <div className="wfg-thead" role="row">
                  <div role="columnheader">Career-Critical Chapter</div>
                  <div role="columnheader">Contribution</div>
                  <div role="columnheader">Practical Reason</div>
                </div>
                {subject.criticalChapters.map((ch) => (
                  <div className="wfg-row" role="row" key={ch.chapter}>
                    <div role="cell" data-label="Career-Critical Chapter" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                      {ch.chapter}
                    </div>
                    <div className="stc-mobile-divider" aria-hidden="true" />
                    <div role="cell" data-label="Contribution">
                      <span className="wfg-pct">
                        <span className="wfg-bar">
                          <span style={{ width: `${ch.contribution}%` }} />
                        </span>
                        {ch.contribution}%
                      </span>
                    </div>
                    <div className="stc-mobile-divider" aria-hidden="true" />
                    <div role="cell" data-label="Practical Reason" style={{ color: textSoft }}>
                      {ch.reason}
                    </div>
                  </div>
                ))}
              </div>
              <div className="wfg-total">Total Contribution: {subject.totalContribution}</div>
            </div>

            {/* Chapter Identification Support */}
            <div className="wfg-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), marginTop: 14 }}>
              <div className="wfg-table-alts" role="table" aria-label={`Alternate chapter names for ${subject.subject}`}>
                <div className="wfg-thead" role="row">
                  <div role="columnheader">Career-Critical Chapter</div>
                  <div role="columnheader">Alternate Name 1</div>
                  <div role="columnheader">Alternate Name 2</div>
                  <div role="columnheader">Alternate Name 3</div>
                </div>
                {subject.alternateNames.map((alt) => (
                  <div className="wfg-row" role="row" key={alt.chapter}>
                    <div role="cell" data-label="Career-Critical Chapter" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                      {alt.chapter}
                    </div>
                    <div role="cell" data-label="Alternate Name 1" style={{ color: textSoft }}>{alt.alt1}</div>
                    <div role="cell" data-label="Alternate Name 2" style={{ color: textSoft }}>{alt.alt2}</div>
                    <div role="cell" data-label="Alternate Name 3" style={{ color: textSoft }}>{alt.alt3}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Readiness */}
            <div className="wfg-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 14, position: 'relative', overflow: 'hidden' }}>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    idx % 2 === 0
                      ? `radial-gradient(400px 200px at 0% 0%, rgba(110,231,215,0.12), transparent 60%)`
                      : `radial-gradient(400px 200px at 100% 0%, rgba(167,139,250,0.12), transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <EyebrowLabel>Academic Readiness</EyebrowLabel>
                <p style={{ marginTop: 10, marginBottom: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
                  Student should be able to:
                </p>
                <ul style={{ ...ulStyle(), marginTop: 12 }}>
                  {subject.academicReadiness.map((item, i) => (
                    <Li key={i}>{item}</Li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Ground Reality Verdict */}
        <div className="wfg-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(167,139,250,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Ground Reality Verdict</EyebrowLabel>
            <ul style={{ ...ulStyle({ gap: 10 }), marginTop: 12 }}>
              {groundReality.map((item, i) => (
                <Li key={i} warn>
                  {item}
                </Li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .stc-headline-gradient {
          font-size: ${fs.h1};
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 24ch;
          font-family: Poppins, Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .wfg-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .wfg-card:hover,
        .wfg-card:focus-visible,
        .wfg-card:focus-within,
        .wfg-card:active {
          border-color: rgba(110,231,215,0.55) !important;
          box-shadow:
            0 0 0 1px rgba(110,231,215,0.35),
            0 0 18px rgba(110,231,215,0.28),
            0 0 42px rgba(167,139,250,0.22),
            0 1px 0 rgba(255,255,255,0.05) inset,
            0 20px 40px -30px rgba(0,0,0,0.6);
          transform: translateY(-1px);
        }
        @media (hover: none) {
          .wfg-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .wfg-table-chapters,
        .wfg-table-alts { display: grid; }
        .wfg-table-chapters .wfg-thead,
        .wfg-table-chapters .wfg-row,
        .wfg-table-alts .wfg-thead,
        .wfg-table-alts .wfg-row {
          display: grid;
          gap: 12px;
          padding: 14px 16px;
          align-items: start;
        }
        .wfg-table-chapters .wfg-thead,
        .wfg-table-chapters .wfg-row {
          grid-template-columns: 1.3fr 0.6fr 1.8fr;
        }
        .wfg-table-alts .wfg-thead,
        .wfg-table-alts .wfg-row {
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
        }
        .wfg-thead {
          background: rgba(148,163,184,0.06);
          border-bottom: 1px solid rgba(148,163,184,0.14);
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
        }
        .wfg-row {
          border-bottom: 1px solid rgba(148,163,184,0.08);
          font-size: ${fs.bodySm};
          line-height: 1.55;
          transition: background 200ms ease;
        }
        .wfg-row:last-child { border-bottom: none; }
        .wfg-row:hover { background: rgba(148,163,184,0.04); }
        .wfg-total {
          display: flex;
          justify-content: flex-end;
          padding: 12px 16px;
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #94a3b8;
          border-top: 1px solid rgba(148,163,184,0.14);
          background: rgba(148,163,184,0.04);
          font-weight: 700;
        }
        .wfg-pct {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-variant-numeric: tabular-nums;
          color: ${accentTeal};
          font-weight: 700;
        }
        .wfg-bar {
          width: clamp(48px, 8vw, 96px);
          height: 4px;
          border-radius: 999px;
          background: rgba(110,231,215,0.15);
          overflow: hidden;
          position: relative;
        }
        .wfg-bar span {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, ${accentTeal}, ${accentViolet});
          border-radius: 999px;
        }

        @media (max-width: 720px) {
          .wfg-table-chapters .wfg-thead,
          .wfg-table-alts .wfg-thead { display: none; }
          .wfg-table-chapters .wfg-row,
          .wfg-table-alts .wfg-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 14px 14px;
          }
          .wfg-row [role="cell"]::before {
            content: attr(data-label);
            display: block;
            font-size: ${fs.label};
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 2px;
          }
        }
      `}</style>
    </div>
  );
};

const cardStyle = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(148,163,184,0.14)',
  borderRadius: 16,
  padding: 18,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  boxShadow: '0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -30px rgba(0,0,0,0.6)',
  ...extra,
});

const pill = (c: { bg: string; bd: string; fg: string }): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: 999,
  background: c.bg,
  border: `1px solid ${c.bd}`,
  color: c.fg,
  fontSize: fs.label,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

const SectionTitle: React.FC<{ eyebrow?: string; title: string }> = ({ eyebrow, title }) => (
  <div style={{ marginTop: 40, marginBottom: 14 }}>
    {eyebrow && (
      <div style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
        {eyebrow}
      </div>
    )}
    <div style={{ marginTop: eyebrow ? 6 : 0, fontSize: fs.h2, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
      {title}
    </div>
  </div>
);

const EyebrowLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontSize: fs.label, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
    {children}
  </div>
);

const ulStyle = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  margin: 0,
  paddingLeft: 0,
  listStyle: 'none',
  display: 'grid',
  gap: 8,
  ...extra,
});

const Li: React.FC<{ children: React.ReactNode; warn?: boolean }> = ({ children, warn }) => (
  <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>
    <span
      style={{
        flexShrink: 0,
        width: 6,
        height: 6,
        borderRadius: '50%',
        marginTop: '0.45em',
        background: warn ? '#f87171' : accentTeal,
      }}
    />
    <span>{children}</span>
  </li>
);

export default SubjectToChapter;
