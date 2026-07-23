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
const muted = '#9aa4b2';
const textMain = '#e7ecf3';
const textSoft = '#cbd5e1';

const recognitionData = [
  {
    subject: 'Reinforced Cement Concrete / RCC Design',
    alternate: 'Design of RCC Structures; Reinforced Concrete Design; RC Design',
    teaches: 'RCC structural member understanding',
    semester: '5th–7th semester',
    searchFor: 'RCC, RC Design, Limit State Design',
    topics: 'Beams, slabs, columns, footing, shear, bond, cover, reinforcement detailing',
    confused: 'Structural Analysis; RCC is about concrete member design/detailing, not only force analysis',
  },
  {
    subject: 'Building Construction / Construction Technology',
    alternate: 'Building Materials and Construction; Construction Technology; Construction Practices',
    teaches: 'Site execution workflow',
    semester: '3rd–6th semester',
    searchFor: 'Building Construction, Construction Methods',
    topics: 'Masonry, formwork, scaffolding, foundations, flooring, roofing, construction sequence',
    confused: 'Construction Management; this is execution method, not planning/resource management',
  },
  {
    subject: 'Concrete Technology',
    alternate: 'Concrete Materials; Advanced Concrete Technology; Concrete Mix Design',
    teaches: 'Concrete process and quality understanding',
    semester: '4th–6th semester',
    searchFor: 'Concrete, Cement Concrete, Mix Design',
    topics: 'Cement, aggregates, water-cement ratio, workability, slump, curing, admixtures, defects',
    confused: 'Construction Materials; Concrete Technology focuses specifically on concrete behavior and quality',
  },
  {
    subject: 'Surveying',
    alternate: 'Engineering Surveying; Surveying and Geomatics; Plane Surveying',
    teaches: 'Field layout and measurement control',
    semester: '2nd–5th semester',
    searchFor: 'Surveying, Leveling, Total Station basics',
    topics: 'Chain survey, leveling, theodolite, contouring, benchmarks, gridlines',
    confused: 'GIS/Remote Sensing; site surveying is field measurement, not map/data analysis',
  },
  {
    subject: 'Estimation and Costing / Quantity Surveying',
    alternate: 'Quantity Surveying; Estimation Costing and Valuation; Civil Estimation',
    teaches: 'Quantity and documentation support',
    semester: '5th–7th semester',
    searchFor: 'Estimation, BOQ, Quantity Surveying',
    topics: 'Centre line method, long wall-short wall, quantity takeoff, rate analysis, BOQ',
    confused: 'Construction Management; estimation is quantity/cost calculation, not full project management',
  },
];

const takeawayPoints = [
  'Universities name the same subject differently. The content matters more than the exact title.',
  'RCC Design, Building Construction, Concrete Technology, Surveying, and Estimation are the five pillars for this career.',
  'Students should search for topic names, not just subject names, when identifying the right course.',
  'Many students confuse estimation with management or surveying with GIS. These are different domains.',
  'If the subject is not found in the curriculum, the topics are still likely covered inside another civil course.',
];

const SubjectsRecognition: React.FC = () => {
  return (
    <div
      style={{
        background:
          'radial-gradient(1400px 700px at 15% -10%, rgba(110,231,215,0.08), transparent 55%), radial-gradient(1100px 600px at 100% 0%, rgba(167,139,250,0.08), transparent 55%), radial-gradient(1200px 600px at 50% 120%, rgba(110,231,215,0.05), transparent 60%), #06080d',
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
            Subjects Recognition Table
          </span>
        </div>

        {/* Headline */}
        <h1 className="sr-headline-gradient">
          Identify The Right Subjects By Their Real Content
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Universities use different names for the same subject. This table helps students recognize the correct subjects based on what they actually teach, not just the course title.
        </p>

        {/* Recognition table */}
        <SectionTitle eyebrow="Subject Mapping" title="Subjects Recognition Table" />
        <div className="wfg-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table" role="table" aria-label="Subjects recognition table">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Subject</div>
              <div role="columnheader">Alternate Names</div>
              <div role="columnheader">What It Teaches</div>
              <div role="columnheader">Semester</div>
              <div role="columnheader">Search For</div>
              <div role="columnheader">Key Topics</div>
              <div role="columnheader">Confused With</div>
            </div>
            {recognitionData.map((r) => (
              <div className="wfg-row" role="row" key={r.subject}>
                <div role="cell" data-label="Subject" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {r.subject}
                </div>
                <div role="cell" data-label="Alternate Names" style={{ color: textSoft }}>
                  {r.alternate}
                </div>
                <div role="cell" data-label="What It Teaches" style={{ color: textSoft }}>
                  {r.teaches}
                </div>
                <div role="cell" data-label="Semester" style={{ color: textSoft }}>
                  {r.semester}
                </div>
                <div role="cell" data-label="Search For" style={{ color: textSoft }}>
                  {r.searchFor}
                </div>
                <div role="cell" data-label="Key Topics" style={{ color: textSoft }}>
                  {r.topics}
                </div>
                <div role="cell" data-label="Confused With" style={{ color: '#f5c26b' }}>
                  {r.confused}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Takeaway cards */}
        <SectionTitle eyebrow="How To Use This" title="What Students Should Remember" />
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {takeawayPoints.map((item, idx) => (
            <div className="wfg-card" tabIndex={0} key={idx} style={cardStyle({ position: 'relative', overflow: 'hidden' })}>
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
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={pill({ bg: 'rgba(110,231,215,0.12)', bd: 'rgba(110,231,215,0.35)', fg: accentTeal })}>
                  0{idx + 1}
                </span>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sr-headline-gradient {
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
            0 0 22px rgba(110,231,215,0.28),
            0 0 46px rgba(167,139,250,0.22),
            0 1px 0 rgba(255,255,255,0.05) inset,
            0 20px 40px -30px rgba(0,0,0,0.6);
          transform: translateY(-2px);
        }
        @media (hover: none) {
          .wfg-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 26px rgba(110,231,215,0.32),
              0 0 52px rgba(167,139,250,0.26);
          }
        }
        .wfg-table { display: grid; }
        .wfg-table .wfg-thead,
        .wfg-table .wfg-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr 0.9fr 0.6fr 0.8fr 1.1fr 1.1fr;
          gap: 12px;
          padding: 14px 16px;
          align-items: start;
        }
        .wfg-thead {
          background: rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.14);
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9aa4b2;
          font-weight: 700;
        }
        .wfg-row {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: ${fs.bodySm};
          line-height: 1.55;
          transition: background 200ms ease;
        }
        .wfg-row:last-child { border-bottom: none; }
        .wfg-row:hover { background: rgba(110,231,215,0.06); }

        @media (max-width: 900px) {
          .wfg-table .wfg-thead { display: none; }
          .wfg-table .wfg-row {
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
            color: #9aa4b2;
            font-weight: 700;
            margin-bottom: 2px;
          }
        }
        .sr-subtitle-gradient {
          font-family: Poppins, Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

const cardStyle = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
  border: '1px solid rgba(255,255,255,0.14)',
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

export default SubjectsRecognition;
