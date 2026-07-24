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
const accentAmber = '#f5c26b';
const muted = '#9aa4b2';
const textMain = '#e7ecf3';
const textSoft = '#cbd5e1';

const knowledgeData = [
  {
    area: 'RCC Structural Understanding',
    share: 32,
    reality: 'Used daily for steel, slab, beam, column checking.',
  },
  {
    area: 'Construction Sequence Understanding',
    share: 24,
    reality: 'Helps follow shuttering, concreting, curing, and site flow.',
  },
  {
    area: 'Concrete Quality Understanding',
    share: 18,
    reality: 'Needed during concrete pouring, slump, vibration, and curing checks.',
  },
  {
    area: 'Layout and Level Understanding',
    share: 16,
    reality: 'Supports gridline, benchmark, level, and alignment verification.',
  },
  {
    area: 'Quantity and Progress Understanding',
    share: 10,
    reality: 'Helps record work done and basic material quantities.',
  },
];

const finalSubjects = [
  {
    rank: 1,
    subject: 'Reinforced Cement Concrete / RCC Design',
    why: 'Supports daily reinforcement checking and RCC drawing reading.',
  },
  {
    rank: 2,
    subject: 'Building Construction / Construction Technology',
    why: 'Explains actual site sequence and execution stages.',
  },
  {
    rank: 3,
    subject: 'Concrete Technology',
    why: 'Supports concrete pour monitoring and curing checks.',
  },
  {
    rank: 4,
    subject: 'Surveying',
    why: 'Supports layout, gridline, and level verification.',
  },
  {
    rank: 5,
    subject: 'Estimation and Costing / Quantity Surveying',
    why: 'Supports progress records and basic quantity tracking.',
  },
];

const drivers = [
  'How often it is used',
  'How many decisions depend on it',
  'How much damage mistakes create',
  'How strongly it affects early-career survival',
];

const realityPoints = [
  'Most students think all civil subjects matter equally for site work. They do not.',
  'For RCC apartment execution, RCC Design and Building Construction dominate daily survival.',
  'Concrete Technology matters strongly on pour days because bad concrete work creates permanent defects.',
  'Surveying matters when layout and levels are checked, but surveyors or seniors often lead it.',
  'Estimation helps documentation and quantity awareness, but it is not the main job driver here.',
  'Students who study only for marks often fail to connect drawings, site sequence, and real mistakes.',
];

const MostImportantSubjects: React.FC = () => {
  return (
    <div
      style={{
        background:
          'radial-gradient(1200px 600px at 10% -10%, rgba(110,231,215,0.08), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(167,139,250,0.08), transparent 60%), radial-gradient(800px 400px at 50% 120%, rgba(110,231,215,0.05), transparent 55%), #06080d',
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
            Most Important Subjects For This Career
          </span>
        </div>

        {/* Headline */}
        <h1 className="wfg-headline-gradient">
          What Actually Drives Success In This Role?
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Not all subjects contribute equally to fresher performance. The contribution depends on how often a subject is used, how many decisions depend on it, how much damage mistakes create, and how strongly it affects early-career survival.
        </p>

        {/* What drives success */}
        <div className="wfg-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(400px 200px at 0% 0%, rgba(110,231,215,0.12), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Success Drivers</EyebrowLabel>
            <p style={{ marginTop: 10, marginBottom: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
              The contribution of each subject depends on:
            </p>
            <ul style={{ ...ulStyle(), marginTop: 12 }}>
              {drivers.map((d, i) => (
                <Li key={i}>{d}</Li>
              ))}
            </ul>
          </div>
        </div>

        {/* Knowledge Area distribution table */}
        <SectionTitle eyebrow="Knowledge Contribution" title="Knowledge Area Breakdown" />
        <div className="mis-kab-desktop wfg-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table" role="table" aria-label="Knowledge area contribution breakdown">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Knowledge Area</div>
              <div role="columnheader">Approx %</div>
              <div role="columnheader">Ground Reality</div>
            </div>
            {knowledgeData.map((r) => (
              <div className="wfg-row" role="row" key={r.area}>
                <div role="cell" data-label="Knowledge Area" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {r.area}
                </div>
                <div role="cell" data-label="Approx %">
                  <span className="wfg-pct">
                    <span className="wfg-bar">
                      <span style={{ width: `${r.share}%` }} />
                    </span>
                    {r.share}%
                  </span>
                </div>
                <div role="cell" data-label="Ground Reality" style={{ color: muted }}>
                  {r.reality}
                </div>
              </div>
            ))}
          </div>
          <div className="wfg-total">Total = 100%</div>
        </div>

        {/* Mobile redesign - Knowledge Area Breakdown */}
        <div className="mis-kab-mobile" role="list" aria-label="Knowledge area contribution breakdown">
          {knowledgeData.map((r, i) => (
            <div className="mis-kab-card wfg-card" tabIndex={0} role="listitem" key={r.area} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
              <div className="mis-kab-accent" aria-hidden />
              <div className="mis-kab-inner">
                <div className="mis-kab-head">
                  <span className="mis-kab-index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="mis-kab-title">{r.area}</div>
                </div>
                <div className="mis-kab-divider" aria-hidden />
                <div className="mis-kab-metric">
                  <span className="mis-kab-metric-label">Approx Share</span>
                  <div className="mis-kab-metric-row">
                    <div className="mis-kab-progress" aria-hidden>
                      <span style={{ width: `${r.share}%` }} />
                    </div>
                    <span className="mis-kab-pct">{r.share}%</span>
                  </div>
                </div>
                <div className="mis-kab-divider" aria-hidden />
                <div className="mis-kab-reality">
                  <span className="mis-kab-metric-label">Ground Reality</span>
                  <p>{r.reality}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mis-kab-total">Total = 100%</div>
        </div>

        {/* Final 5 subjects table */}
        <SectionTitle eyebrow="Final Five" title="Final 5 Subjects For This Career" />
        <div className="wfg-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table-final" role="table" aria-label="Final five subjects for this career">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Rank</div>
              <div role="columnheader">Subject</div>
              <div role="columnheader">Why It Matters In This Job</div>
            </div>
            {finalSubjects.map((r) => (
              <div className="wfg-row" role="row" key={r.rank}>
                <div role="cell" data-label="Rank">
                  <span style={pill({ bg: 'rgba(110,231,215,0.12)', bd: 'rgba(110,231,215,0.35)', fg: accentTeal })}>
                    #{r.rank}
                  </span>
                </div>
                <div role="cell" data-label="Subject" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {r.subject}
                </div>
                <div role="cell" data-label="Why It Matters In This Job" style={{ color: muted }}>
                  {r.why}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reality Check */}
        <div className="wfg-card wfg-reality-check" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <ul style={{ ...ulStyle({ gap: 10 }), marginTop: 12 }}>
              {realityPoints.map((item, i) => (
                <Li key={i} warn>
                  {item}
                </Li>
              ))}
            </ul>
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
        .mis-subtitle-gradient {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.15;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem);
          background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
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
          transform: translateY(-2px);
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
        .wfg-table,
        .wfg-table-final { display: grid; }
        .wfg-table .wfg-thead,
        .wfg-table .wfg-row,
        .wfg-table-final .wfg-thead,
        .wfg-table-final .wfg-row {
          display: grid;
          gap: 12px;
          padding: 14px 16px;
          align-items: center;
        }
        .wfg-table .wfg-thead,
        .wfg-table .wfg-row {
          grid-template-columns: 1.2fr 0.7fr 1.6fr;
        }
        .wfg-table-final .wfg-thead,
        .wfg-table-final .wfg-row {
          grid-template-columns: 0.35fr 1.1fr 1.55fr;
        }
        .wfg-thead {
          background: rgba(255,255,255,0.05);
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
        .wfg-total {
          display: flex;
          justify-content: flex-end;
          padding: 12px 16px;
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9aa4b2;
          border-top: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          font-weight: 700;
        }
        .wfg-reality-check {
          background: linear-gradient(180deg, rgba(245,194,107,0.06), rgba(245,194,107,0.02)) !important;
          border: 1px solid rgba(245,194,107,0.22) !important;
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
          .wfg-table .wfg-thead,
          .wfg-table-final .wfg-thead { display: none; }
          .wfg-table .wfg-row,
          .wfg-table-final .wfg-row {
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
  boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset, 0 20px 40px -30px rgba(0,0,0,0.6)',
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
    <h2
      className="mis-subtitle-gradient"
      style={{ marginTop: eyebrow ? 6 : 0, marginBottom: 0 }}
    >
      {title}
    </h2>
  </div>
);

export default MostImportantSubjects;
