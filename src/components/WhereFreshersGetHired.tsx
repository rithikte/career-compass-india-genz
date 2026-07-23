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

const hiringData = [
  {
    type: 'Local Building Contractors',
    share: 32,
    why: 'Need juniors for daily site execution support.',
    what: 'Execute residential buildings, small apartments, and RCC works.',
    freshers: 'They need juniors for checking, measuring, and daily follow-up.',
    examples: ['Local RCC contractors', 'Apartment construction contractors', 'Building execution contractors'],
    reality: [
      'High site exposure, less formal training.',
      'Work pressure is direct and rough.',
      'Learning is fast if student can handle site reality.',
    ],
  },
  {
    type: 'Residential Builders & Developers',
    share: 28,
    why: 'Need site engineers for apartment project tracking.',
    what: 'Build and sell apartment and villa projects.',
    freshers: 'They need site support for progress, quality, and execution tracking.',
    examples: ['Apartment developers', 'Gated community builders', 'Mid-size real estate firms'],
    reality: [
      'Better project structure than small contractors.',
      'Freshers support seniors, supervisors, and vendors.',
      'Documentation and reporting matter more here.',
    ],
  },
  {
    type: 'RCC / Structural Subcontractors',
    share: 18,
    why: 'Need freshers for steel, shuttering, and pour support.',
    what: 'Handle reinforcement, shuttering, concreting, and RCC frame execution.',
    freshers: 'RCC work needs repeated checking and site coordination.',
    examples: ['Steel fixing contractors', 'Shuttering contractors', 'Concrete execution subcontractors'],
    reality: [
      'Very strong RCC exposure.',
      'Work is physically demanding.',
      'Narrower learning, but excellent execution practice.',
    ],
  },
  {
    type: 'PMC / Project Management Firms',
    share: 12,
    why: 'Need juniors for reporting and site coordination.',
    what: 'Monitor project progress, quality, coordination, and reporting for clients.',
    freshers: 'They need juniors for site reports, checklists, and follow-ups.',
    examples: ['Construction management firms', 'Site supervision agencies', 'Quality monitoring teams'],
    reality: [
      'More reporting and coordination than direct execution.',
      'Freshers observe many issues but approve little.',
      'Communication and documentation expectations are higher.',
    ],
  },
  {
    type: 'Small Civil Construction Firms',
    share: 10,
    why: 'Need low-cost engineers for mixed site work.',
    what: 'Execute mixed civil works including houses, small apartments, and repairs.',
    freshers: 'They need flexible juniors for site checking and basic documentation.',
    examples: ['Small builders', 'Independent civil contractors', 'Local construction firms'],
    reality: [
      'Role is broad but less structured.',
      'Freshers may handle many small tasks.',
      'Learning depends heavily on senior quality.',
    ],
  },
];

const accentTeal = '#6ee7d7';
const accentViolet = '#a78bfa';
const accentAmber = '#f5c26b';
const muted = '#9aa4b2';
const textMain = '#e7ecf3';
const textSoft = '#9aa4b2';

const WhereFreshersGetHired: React.FC = () => {
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
            Where Freshers Get Hired
          </span>
        </div>

        {/* Headline */}
        <h1 className="wfg-headline-gradient">
          Where Most Fresher Opportunities Actually Exist
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Not all company types hire freshers at the same level. Most opportunities are in site-heavy environments that
          need daily checking, reporting, and execution support.
        </p>

        {/* Distribution table */}
        <SectionTitle eyebrow="Fresher Hiring Distribution" title="Company Type Breakdown" />
        <div className="wfg-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table" role="table" aria-label="Fresher hiring distribution">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Company Type</div>
              <div role="columnheader">Approx. Hiring Share</div>
              <div role="columnheader">Why Freshers Get Hired Here</div>
            </div>
            {hiringData.map((r) => (
              <div className="wfg-row" role="row" key={r.type}>
                <div role="cell" data-label="Company Type" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {r.type}
                </div>
                <div role="cell" data-label="Approx. Hiring Share">
                  <span className="wfg-pct">
                    <span className="wfg-bar">
                      <span style={{ width: `${r.share}%` }} />
                    </span>
                    {r.share}%
                  </span>
                </div>
                <div role="cell" data-label="Why Freshers Get Hired Here" style={{ color: muted }}>
                  {r.why}
                </div>
              </div>
            ))}
          </div>
          <div className="wfg-total">Total = 100%</div>
        </div>

        {/* Company detail cards */}
        <div style={{ marginTop: 14, display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {hiringData.map((company, idx) => (
            <div className="wfg-card" tabIndex={0} key={company.type} style={cardStyle({ position: 'relative', overflow: 'hidden' })}>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <EyebrowLabel>{company.type}</EyebrowLabel>
                  <span style={pill({ bg: 'rgba(110,231,215,0.12)', bd: 'rgba(110,231,215,0.35)', fg: accentTeal })}>
                    {company.share}%
                  </span>
                </div>

                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    What they do
                  </span>
                  <p style={{ marginTop: 6, fontSize: fs.body, color: textSoft, lineHeight: 1.6, marginBottom: 0 }}>{company.what}</p>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Why freshers get hired
                  </span>
                  <p style={{ marginTop: 6, fontSize: fs.body, color: textSoft, lineHeight: 1.6, marginBottom: 0 }}>{company.freshers}</p>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Typical examples
                  </span>
                  <ul style={{ ...ulStyle(), marginTop: 8 }}>
                    {company.examples.map((ex, i) => (
                      <Li key={i}>{ex}</Li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 14, padding: 12, borderRadius: 12, background: 'rgba(245,194,107,0.06)', border: '1px solid rgba(245,194,107,0.16)' }}>
                  <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f5c26b', fontWeight: 700 }}>
                    Ground Reality
                  </span>
                  <ul style={{ ...ulStyle({ gap: 6 }), marginTop: 8 }}>
                    {company.reality.map((item, i) => (
                      <Li key={i} warn>
                        {item}
                      </Li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reality Check */}
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
            <EyebrowLabel>Reality Check</EyebrowLabel>
            <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
                Most fresher opportunities are not in famous construction brands. They are in contractors, builders,
                subcontractors, and site-heavy firms.
              </p>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
                Students often chase big company names, but hiring volume is stronger in local execution environments.
              </p>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
                For this role, entry access matters more than brand value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .wfg-headline-gradient {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.05;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem);
          margin: 0;
          max-width: 24ch;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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
        .wfg-table { display: grid; }
        .wfg-table .wfg-thead,
        .wfg-table .wfg-row {
          display: grid;
          grid-template-columns: 1.2fr 0.7fr 1.6fr;
          gap: 12px;
          padding: 14px 16px;
          align-items: center;
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

const ulStyle = (extra: { gap?: number } = {}): React.CSSProperties => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gap: extra.gap ?? 8,
});

const Li: React.FC<{ children: React.ReactNode; warn?: boolean }> = ({ children, warn }) => (
  <li style={{ position: 'relative', paddingLeft: 16, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55 }}>
    <span
      style={{
        position: 'absolute',
        left: 0,
        top: '0.6em',
        width: 6,
        height: 6,
        borderRadius: 999,
        background: warn ? 'linear-gradient(180deg,#f5c26b,#fb923c)' : 'linear-gradient(180deg,#22d3ee,#60a5fa)',
      }}
    />
    {children}
  </li>
);

const EyebrowLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ fontSize: fs.label, letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
    {children}
  </span>
);

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

export default WhereFreshersGetHired;
