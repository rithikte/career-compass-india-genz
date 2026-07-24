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

type Rating = 'Very High' | 'High' | 'Medium' | 'Low';

const ratingColor = (r: Rating | string) => {
  switch (r) {
    case 'High': return { bg: 'rgba(16,185,129,0.14)', bd: 'rgba(16,185,129,0.45)', fg: '#34d399' };
    case 'Medium': return { bg: 'rgba(245,194,107,0.14)', bd: 'rgba(245,194,107,0.45)', fg: '#f5c26b' };
    case 'Low': return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
    case 'Very High': return { bg: 'rgba(16,185,129,0.14)', bd: 'rgba(16,185,129,0.45)', fg: '#34d399' };
    default: return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
  }
};

const evidenceColor = (r: Rating | string) => {
  switch (r) {
    case 'High': return { bg: 'rgba(16,185,129,0.14)', bd: 'rgba(16,185,129,0.45)', fg: '#34d399' };
    case 'Medium': return { bg: 'rgba(59,130,246,0.14)', bd: 'rgba(59,130,246,0.45)', fg: '#60a5fa' };
    case 'Low': return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
    default: return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
  }
};

const breakdownData: { factor: string; rating: Rating; why: string }[] = [
  { factor: 'Academic Dependency', rating: 'Medium', why: 'Core subjects help, but deep theory is rarely required.' },
  { factor: 'Skill Dependency', rating: 'Medium', why: 'Basic drawing reading and site awareness matter.' },
  { factor: 'Project Dependency', rating: 'Low', why: 'Projects help, but are rarely mandatory.' },
  { factor: 'Competition Intensity', rating: 'Medium', why: 'Many Civil graduates apply for similar roles.' },
  { factor: 'Hiring Volume', rating: 'High', why: 'Builders and contractors hire freshers regularly.' },
  { factor: 'Interview Difficulty', rating: 'Low', why: 'Interviews usually focus on fundamentals and site basics.' },
  { factor: 'Degree Exclusivity', rating: 'High', why: 'Civil Engineering students dominate these openings.' },
  { factor: 'Training Time Requirement', rating: 'Low', why: 'Companies often teach site procedures after hiring.' },
];

const proofMatrix: { factor: string; evidence: Rating }[] = [
  { factor: 'Academic Dependency', evidence: 'Medium' },
  { factor: 'Skill Dependency', evidence: 'Medium' },
  { factor: 'Project Dependency', evidence: 'Low' },
  { factor: 'Competition Intensity', evidence: 'Medium' },
  { factor: 'Hiring Volume', evidence: 'High' },
  { factor: 'Interview Difficulty', evidence: 'Low' },
  { factor: 'Degree Exclusivity', evidence: 'High' },
  { factor: 'Training Time Requirement', evidence: 'Low' },
];

const obstacles = [
  'Cannot read RCC and construction drawings.',
  'Weak understanding of reinforcement and concrete basics.',
  'No internship or site exposure.',
  'Poor communication during interviews.',
  'Unwillingness to work in site environments.',
];

const easier = [
  'Strong RCC Design fundamentals.',
  'Basic drawing interpretation ability.',
  'Internship or construction site exposure.',
  'Understanding of reinforcement and concrete activities.',
  'Ability to explain real site workflows.',
];

const EntryBarrierVerdict: React.FC = () => {
  return (
    <div
      style={{
        background: 'radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(168,85,247,0.10), transparent 60%), #05070d',
        color: '#e5e7eb',
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
              display: 'inline-block', width: 8, height: 8, borderRadius: 999,
              background: '#60a5fa', boxShadow: '0 0 0 4px rgba(96,165,250,0.15)',
            }}
          />
          <span style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600 }}>
            Entry Barrier Verdict
          </span>
        </div>

        {/* Headline */}
        <style>{`
          .ebv-headline-gradient {
            font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            font-size: clamp(1.9rem, 4.5vw, 3.4rem);
            line-height: 1.05;
            font-weight: 700;
            letter-spacing: -0.02em;
            background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
        <h1 className="ebv-headline-gradient" style={{ margin: 0, maxWidth: '22ch' }}>
          How Easy Is It To Enter This Role?
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: '#94a3b8', maxWidth: '72ch', lineHeight: 1.6 }}>
          A clear breakdown of entry difficulty, hiring demand, and the biggest practical barriers freshers face when joining this career.
        </p>

        {/* Verdict Cards */}
        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          <VerdictCard
            eyebrow="Entry Barrier Strength"
            title="Low"
            tint="#60a5fa"
            body="Most average Civil Engineering students can enter this role if they understand basic RCC, drawings, and site work realities."
          />
          <VerdictCard
            eyebrow="One-Line Verdict"
            title="Accessible"
            tint="#34d399"
            body="Strong hiring volume, low interview difficulty, and reasonable training support make this one of the more accessible entry-level site roles."
          />
        </div>

        {/* Entry Barrier Breakdown */}
        <SectionTitle title="Entry Barrier Breakdown" />
        <div className="ebv-card ebv-bd-desktop" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="ebv-table" role="table" aria-label="Entry barrier breakdown">
            <div className="ebv-thead" role="row">
              <div role="columnheader">Entry Factor</div>
              <div role="columnheader">Rating</div>
              <div role="columnheader">Simple Why</div>
            </div>
            {breakdownData.map((r) => {
              const c = ratingColor(r.rating);
              return (
                <div className="ebv-row" role="row" key={r.factor}>
                  <div role="cell" data-label="Entry Factor" style={{ fontWeight: 600, color: '#f1f5f9' }}>{r.factor}</div>
                  <div role="cell" data-label="Rating"><span style={pill(c)}>{r.rating}</span></div>
                  <div role="cell" data-label="Simple Why" style={{ color: '#94a3b8' }}>{r.why}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Entry Barrier Breakdown redesigned cards */}
        <div className="ebv-bd-mobile" aria-label="Entry barrier breakdown mobile">
          {breakdownData.map((r, i) => {
            const c = ratingColor(r.rating);
            return (
              <div className="ebv-card ebv-bd-card" tabIndex={0} key={r.factor} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
                <div className="ebv-bd-accent" style={{ background: `linear-gradient(90deg, ${c.fg}, transparent)` }} />
                <div className="ebv-bd-body">
                  <div className="ebv-bd-head">
                    <span className="ebv-bd-index" style={{ color: c.fg, borderColor: c.bd, background: c.bg }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="ebv-bd-title">{r.factor}</div>
                    <span style={pill(c)}>{r.rating}</span>
                  </div>
                  <div className="ebv-bd-divider" aria-hidden />
                  <div className="ebv-bd-eyebrow">Simple Why</div>
                  <div className="ebv-bd-why">{r.why}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Entry Proof Matrix */}
        <SectionTitle title="Entry Proof Matrix" />
        <div className="ebv-card" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="ebv-table ebv-table-2" role="table" aria-label="Entry proof matrix">
            <div className="ebv-thead" role="row">
              <div role="columnheader">Factor</div>
              <div role="columnheader">Evidence Level</div>
            </div>
            {proofMatrix.map((r) => {
              const c = evidenceColor(r.evidence);
              return (
                <div className="ebv-row" role="row" key={r.factor}>
                  <div role="cell" data-label="Factor" style={{ fontWeight: 600, color: '#f1f5f9' }}>{r.factor}</div>
                  <div role="cell" data-label="Evidence Level"><span style={pill(c)}>{r.evidence}</span></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Biggest Entry Obstacles + Easier */}
        <div
          style={{
            marginTop: 14,
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div className="ebv-card" tabIndex={0} style={cardStyle()}>
            <EyebrowLabel>Biggest Entry Obstacles</EyebrowLabel>
            <ul style={ulStyle()}>
              {obstacles.map((item, i) => (
                <Li key={i} warn>{item}</Li>
              ))}
            </ul>
          </div>

          <div className="ebv-card" tabIndex={0} style={cardStyle()}>
            <EyebrowLabel>What Makes Entry Easier?</EyebrowLabel>
            <ul style={ulStyle()}>
              {easier.map((item, i) => (
                <Li key={i}>{item}</Li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <style>{`
        .ebv-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .ebv-card:hover,
        .ebv-card:focus-visible,
        .ebv-card:focus-within,
        .ebv-card:active {
          border-color: rgba(56,189,248,0.55) !important;
          box-shadow:
            0 0 0 1px rgba(56,189,248,0.35),
            0 0 18px rgba(56,189,248,0.28),
            0 0 42px rgba(168,85,247,0.22),
            0 1px 0 rgba(255,255,255,0.05) inset,
            0 20px 40px -30px rgba(0,0,0,0.6);
          transform: translateY(-1px);
        }
        @media (hover: none) {
          .ebv-card:active {
            border-color: rgba(56,189,248,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(56,189,248,0.4),
              0 0 22px rgba(56,189,248,0.32),
              0 0 46px rgba(168,85,247,0.26);
          }
        }
        .ebv-table { display: grid; }
        .ebv-table .ebv-thead,
        .ebv-table .ebv-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.8fr;
          gap: 12px;
          padding: 14px 16px;
          align-items: center;
        }
        .ebv-table.ebv-table-2 .ebv-thead,
        .ebv-table.ebv-table-2 .ebv-row {
          grid-template-columns: 1.2fr 0.8fr;
        }
        .ebv-thead {
          background: rgba(148,163,184,0.06);
          border-bottom: 1px solid rgba(148,163,184,0.14);
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
        }
        .ebv-row {
          border-bottom: 1px solid rgba(148,163,184,0.08);
          font-size: ${fs.bodySm};
          line-height: 1.55;
          transition: background 200ms ease;
        }
        .ebv-row:last-child { border-bottom: none; }
        .ebv-row:hover { background: rgba(148,163,184,0.04); }

        .ebv-bd-mobile { display: none; }

        @media (max-width: 720px) {
          .ebv-table .ebv-thead { display: none; }
          .ebv-table .ebv-row,
          .ebv-table.ebv-table-2 .ebv-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 14px 14px;
          }
          .ebv-row [role="cell"]::before {
            content: attr(data-label);
            display: block;
            font-size: ${fs.label};
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 2px;
          }
          .ebv-bd-desktop { display: none; }
          .ebv-bd-mobile {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }
        }

        .ebv-bd-card { position: relative; }
        .ebv-bd-accent {
          height: 3px;
          width: 100%;
          opacity: 0.85;
        }
        .ebv-bd-body { padding: 14px 14px 16px; }
        .ebv-bd-head {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ebv-bd-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          height: 24px;
          padding: 0 8px;
          border-radius: 8px;
          border: 1px solid;
          font-size: ${fs.label};
          font-weight: 700;
          letter-spacing: 0.08em;
          font-variant-numeric: tabular-nums;
        }
        .ebv-bd-title {
          flex: 1 1 auto;
          min-width: 0;
          font-weight: 600;
          color: #f1f5f9;
          font-size: ${fs.body};
          line-height: 1.3;
        }
        .ebv-bd-divider {
          margin: 12px 0 10px;
          height: 1px;
          background: linear-gradient(to right, rgba(148,163,184,0) 0%, rgba(148,163,184,0.35) 50%, rgba(148,163,184,0) 100%);
        }
        .ebv-bd-eyebrow {
          font-size: ${fs.label};
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .ebv-bd-why {
          font-size: ${fs.bodySm};
          color: #cbd5e1;
          line-height: 1.6;
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
  display: 'inline-flex', alignItems: 'center',
  padding: '4px 10px', borderRadius: 999,
  background: c.bg, border: `1px solid ${c.bd}`, color: c.fg,
  fontSize: fs.label, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

const ulStyle = (): React.CSSProperties => ({
  listStyle: 'none', padding: 0, margin: '12px 0 0 0',
  display: 'grid', gap: 8,
});

const pStyle = (): React.CSSProperties => ({
  fontSize: fs.body, color: '#cbd5e1', lineHeight: 1.7, margin: '0 0 12px 0',
});

const Li: React.FC<{ children: React.ReactNode; warn?: boolean }> = ({ children, warn }) => (
  <li style={{ position: 'relative', paddingLeft: 18, fontSize: fs.bodySm, color: '#cbd5e1', lineHeight: 1.55 }}>
    <span
      style={{
        position: 'absolute', left: 0, top: '0.6em',
        width: 6, height: 6, borderRadius: 999,
        background: warn ? 'linear-gradient(180deg,#f5c26b,#fb923c)' : 'linear-gradient(180deg,#22d3ee,#60a5fa)',
      }}
    />
    {children}
  </li>
);

const EyebrowLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ fontSize: fs.label, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>
    {children}
  </span>
);

const SectionTitle: React.FC<{ eyebrow?: string; title: string }> = ({ eyebrow, title }) => (
  <div style={{ marginTop: 40, marginBottom: 14 }}>
    {eyebrow && (
      <div style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>
        {eyebrow}
      </div>
    )}
    <div
      style={{
        marginTop: eyebrow ? 6 : 0,
        fontFamily: "'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        background: 'linear-gradient(180deg, #fff 0%, #b7c0cc 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {title}
    </div>
  </div>
);

const VerdictCard: React.FC<{ eyebrow: string; title: string; tint: string; body: string }> = ({ eyebrow, title, tint, body }) => (
  <div className="ebv-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(400px 200px at 0% 0%, ${tint}22, transparent 60%)`,
        pointerEvents: 'none',
      }}
    />
    <EyebrowLabel>{eyebrow}</EyebrowLabel>
    <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 10, height: 10, borderRadius: 999, background: tint, boxShadow: `0 0 0 5px ${tint}22` }} />
      <span style={{ fontSize: fs.h2, fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.01em' }}>{title}</span>
    </div>
    <p style={{ marginTop: 10, fontSize: fs.body, color: '#cbd5e1', lineHeight: 1.65 }}>{body}</p>
  </div>
);

export default EntryBarrierVerdict;
