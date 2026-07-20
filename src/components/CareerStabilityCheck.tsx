import React from 'react';

const clamp = (min: number, vwMin: number, max: number, vwMax: number = 1280, vwMinPx: number = 375) => {
  // linear interpolation between viewport widths using clamp
  const slope = (max - min) / (vwMax - vwMinPx);
  const yInter = -vwMinPx * slope + min;
  return `clamp(${min}px, ${yInter.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw, ${max}px)`;
};

// Responsive typography scale per spec
const fs = {
  label: clamp(8, 375, 11),          // small labels 8→11
  labelSm: clamp(9, 375, 11),        // 9→11
  body: clamp(11, 375, 15),          // body 11→15
  bodySm: clamp(11, 375, 13),        // 11→13
  h1: clamp(30.4, 375, 54.4),        // headline 30.4→54.4
  h2: clamp(20, 375, 32),
  h3: clamp(16, 375, 22),
  eyebrow: clamp(9, 375, 11),
};

type Rating = 'Very High' | 'High' | 'Medium' | 'Low' | 'Critical' | 'Moderate';

const ratingColor = (r: Rating | string) => {
  switch (r) {
    case 'Very High': return { bg: 'rgba(16,185,129,0.14)', bd: 'rgba(16,185,129,0.45)', fg: '#34d399' };
    case 'High': return { bg: 'rgba(59,130,246,0.14)', bd: 'rgba(59,130,246,0.45)', fg: '#60a5fa' };
    case 'Medium': return { bg: 'rgba(234,179,8,0.14)', bd: 'rgba(234,179,8,0.45)', fg: '#facc15' };
    case 'Critical': return { bg: 'rgba(239,68,68,0.16)', bd: 'rgba(239,68,68,0.5)', fg: '#f87171' };
    case 'Moderate': return { bg: 'rgba(249,115,22,0.14)', bd: 'rgba(249,115,22,0.45)', fg: '#fb923c' };
    case 'Low': return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
    default: return { bg: 'rgba(148,163,184,0.14)', bd: 'rgba(148,163,184,0.45)', fg: '#94a3b8' };
  }
};

const survivalFactors: { factor: string; rating: Rating; why: string }[] = [
  { factor: 'Fresher Hiring Continuity', rating: 'High', why: 'Sites need junior engineers for daily checking.' },
  { factor: 'Economic Slowdown Resistance', rating: 'Medium', why: 'Housing slowdowns reduce new site openings.' },
  { factor: 'Automation Resistance', rating: 'Very High', why: 'Site inspection needs physical presence.' },
  { factor: 'AI Resistance', rating: 'Very High', why: 'AI cannot fully verify messy site work.' },
  { factor: 'Outsourcing Resistance', rating: 'Very High', why: 'Work must happen at the project site.' },
  { factor: 'Industry Dependency', rating: 'Very High', why: 'Apartments need RCC execution control.' },
  { factor: 'Skill Defensibility', rating: 'High', why: 'Drawing-to-site judgment improves with practice.' },
];

const failurePoints: { point: string; category: string; severity: Rating; explanation: string }[] = [
  { point: 'Weak RCC reading', category: 'Subject', severity: 'Critical', explanation: 'Fresher cannot check reinforcement properly without drawing understanding.' },
  { point: 'Poor level checking', category: 'Skill', severity: 'High', explanation: 'Wrong levels create slab, beam, and finishing problems.' },
  { point: 'No sequence sense', category: 'Thinking', severity: 'High', explanation: 'Fresher gets confused about what happens next on site.' },
  { point: 'Weak labour communication', category: 'Communication', severity: 'High', explanation: 'Site work depends on clear instructions and follow-up.' },
  { point: 'Low site tolerance', category: 'Environment', severity: 'Moderate', explanation: 'Heat, dust, noise, and pressure break many freshers.' },
];

const realityShocks: { area: string; expect: string; actual: string }[] = [
  { area: 'Site pressure', expect: 'Seniors explain everything slowly', actual: 'Work moves fast and mistakes are visible.' },
  { area: 'Labour handling', expect: 'Technical knowledge is enough', actual: 'Workers need clear, repeated instructions.' },
  { area: 'Drawing use', expect: 'Drawings are simple to read', actual: 'RCC drawings confuse freshers initially.' },
  { area: 'Daily routine', expect: 'Engineering means calculations', actual: 'Most work is checking, reporting, coordinating.' },
  { area: 'Work conditions', expect: 'Site work feels organized', actual: 'Sites are noisy, dusty, rushed, and messy.' },
];

const CareerStabilityCheck: React.FC = () => {
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
              background: '#34d399', boxShadow: '0 0 0 4px rgba(52,211,153,0.15)',
            }}
          />
          <span style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600 }}>
            Career Path Stability Check
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: fs.h1,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: 0,
            maxWidth: '18ch',
            background: 'linear-gradient(180deg,#ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Will This Career Continue Creating Fresher Opportunities?
        </h1>
        <p style={{ marginTop: 14, fontSize: fs.body, color: '#94a3b8', maxWidth: '72ch', lineHeight: 1.6 }}>
          Shows whether this career will keep creating fresher jobs — verdict, survival factors, hiring reality, and honest failure points.
        </p>

        {/* Verdict + Strength */}
        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          <VerdictCard
            eyebrow="Career Stability Verdict"
            title="Very Stable"
            tint="#34d399"
            body="RCC apartment construction still needs physical site checking, coordination, and daily execution tracking. India’s residential construction market is projected to keep growing, but slowdowns can still affect hiring speed."
          />
          <VerdictCard
            eyebrow="Career Survival Strength"
            title="Strong"
            tint="#60a5fa"
            body="Junior site engineering roles remain hard to automate, outsource, or replace with AI. Physical execution control keeps the fresher pipeline alive."
          />
        </div>

        {/* Survival Factors */}
        <SectionTitle eyebrow="Survival Factors" title="What Keeps This Career Alive" />
        <div
          style={{
            display: 'grid', gap: 10,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          {survivalFactors.map((f) => {
            const c = ratingColor(f.rating);
            return (
              <div key={f.factor} className="cs-card" tabIndex={0} style={cardStyle()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: fs.label, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600 }}>
                    Factor
                  </span>
                  <span style={pill(c)}>{f.rating}</span>
                </div>
                <div style={{ marginTop: 10, fontSize: fs.h3, fontWeight: 600, color: '#f1f5f9', lineHeight: 1.25 }}>{f.factor}</div>
                <div style={{ marginTop: 8, fontSize: fs.bodySm, color: '#94a3b8', lineHeight: 1.6 }}>{f.why}</div>
              </div>
            );
          })}
        </div>

        {/* Fresher Hiring Reality + Degree Fit */}
        <div
          style={{
            marginTop: 28,
            display: 'grid', gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div className="cs-card" tabIndex={0} style={cardStyle()}>
            <EyebrowLabel>Fresher Hiring Reality</EyebrowLabel>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 8 }}>
              <span style={{ fontSize: fs.h2, fontWeight: 700, color: '#34d399' }}>Strong Hiring</span>
            </div>
            <ul style={ulStyle()}>
              <Li>RCC work needs daily site presence</Li>
              <Li>Seniors need juniors for verification</Li>
              <Li>Documentation load is repeated daily</Li>
            </ul>
          </div>

          <div className="cs-card" tabIndex={0} style={cardStyle()}>
            <EyebrowLabel>Degree Fit Strength</EyebrowLabel>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
              <span style={{ fontSize: fs.h1, fontWeight: 800, background: 'linear-gradient(180deg,#e2e8f0,#94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                91
              </span>
              <span style={{ fontSize: fs.body, color: '#94a3b8' }}>/ 100</span>
            </div>
            <div style={{ marginTop: 10, height: 8, borderRadius: 999, background: 'rgba(148,163,184,0.15)', overflow: 'hidden' }}>
              <div style={{ width: '91%', height: '100%', background: 'linear-gradient(90deg,#22d3ee,#34d399)', borderRadius: 999 }} />
            </div>
            <ul style={ulStyle()}>
              <Li>RCC Design supports steel checking</Li>
              <Li>Surveying supports layout and levels</Li>
              <Li>Concrete Technology supports pour monitoring</Li>
            </ul>
          </div>
        </div>

        {/* Why survives + What freshers work on */}
        <div
          style={{
            marginTop: 14,
            display: 'grid', gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div style={cardStyle()}>
            <EyebrowLabel>Why This Career Continues To Survive</EyebrowLabel>
            <ul style={ulStyle()}>
              <Li>Buildings cannot be executed only from software</Li>
              <Li>Concrete and steel need site verification</Li>
              <Li>Layout mistakes create expensive rework</Li>
              <Li>Developers need progress tracking daily</Li>
              <Li>Physical execution still needs human checking</Li>
            </ul>
          </div>
          <div style={cardStyle()}>
            <EyebrowLabel>What Freshers Actually Work On</EyebrowLabel>
            <ul style={ulStyle()}>
              <Li>Reinforcement checking</Li>
              <Li>Formwork level checking</Li>
              <Li>Concrete pour monitoring</Li>
              <Li>Layout support</Li>
              <Li>Daily progress records</Li>
            </ul>
          </div>
          <div style={cardStyle()}>
            <EyebrowLabel>Why Freshers Usually Struggle</EyebrowLabel>
            <ul style={ulStyle()}>
              <Li>Cannot read RCC drawings</Li>
              <Li>Miss bar spacing errors</Li>
              <Li>Fear talking to workers</Li>
              <Li>Weak level checking practice</Li>
              <Li>Poor daily documentation habits</Li>
            </ul>
          </div>
        </div>

        {/* Top Failure Points */}
        <SectionTitle eyebrow="Top Failure Points" title="Where Freshers Break First" />
        <div style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="cs-table" role="table" aria-label="Top failure points">
            <div className="cs-thead" role="row">
              <div role="columnheader">Failure Point</div>
              <div role="columnheader">Category</div>
              <div role="columnheader">Severity</div>
              <div role="columnheader">Simple Explanation</div>
            </div>
            {failurePoints.map((f) => {
              const c = ratingColor(f.severity);
              return (
                <div className="cs-row" role="row" key={f.point}>
                  <div role="cell" data-label="Failure Point" style={{ fontWeight: 600, color: '#f1f5f9' }}>{f.point}</div>
                  <div role="cell" data-label="Category" style={{ color: '#cbd5e1' }}>{f.category}</div>
                  <div role="cell" data-label="Severity"><span style={pill(c)}>{f.severity}</span></div>
                  <div role="cell" data-label="Explanation" style={{ color: '#94a3b8' }}>{f.explanation}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reality Shock Areas */}
        <SectionTitle eyebrow="Reality Shock Areas" title="Expectation vs Reality" />
        <div style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="cs-table cs-table-3" role="table" aria-label="Reality shock areas">
            <div className="cs-thead" role="row">
              <div role="columnheader">Reality Shock Area</div>
              <div role="columnheader">What Most Students Expect</div>
              <div role="columnheader">What Actually Happens</div>
            </div>
            {realityShocks.map((r) => (
              <div className="cs-row" role="row" key={r.area}>
                <div role="cell" data-label="Area" style={{ fontWeight: 600, color: '#f1f5f9' }}>{r.area}</div>
                <div role="cell" data-label="Expect" style={{ color: '#cbd5e1' }}>{r.expect}</div>
                <div role="cell" data-label="Actual" style={{ color: '#94a3b8' }}>{r.actual}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reality Check final block */}
        <SectionTitle eyebrow="Reality Check" title="The Honest Picture" />
        <div style={cardStyle({ background: 'linear-gradient(180deg, rgba(56,189,248,0.06), rgba(168,85,247,0.06))' })}>
          <p style={pStyle()}>
            Most students think <b style={{ color: '#f1f5f9' }}>Junior Site Engineer</b> means designing structures. In reality, freshers mostly check, observe, measure, document, and follow up.
          </p>
          <p style={pStyle()}>
            This career survives because buildings need physical execution control. RCC apartments cannot be built safely through drawings alone.
          </p>
          <p style={pStyle()}>
            Companies value freshers who can read drawings, stand on site, notice mistakes, and report clearly. They do not expect senior-level decisions from day one.
          </p>
          <p style={{ ...pStyle(), marginBottom: 0 }}>
            Freshers succeed when they learn site sequence fast and communicate clearly. They fail when they avoid field pressure and stay only theoretical.
          </p>
        </div>
      </div>

      <style>{`
        .cs-table { display: grid; }
        .cs-table .cs-thead,
        .cs-table .cs-row {
          display: grid;
          grid-template-columns: 1.1fr 0.8fr 0.7fr 1.6fr;
          gap: 12px;
          padding: 14px 16px;
          align-items: center;
        }
        .cs-table.cs-table-3 .cs-thead,
        .cs-table.cs-table-3 .cs-row {
          grid-template-columns: 1fr 1.2fr 1.3fr;
        }
        .cs-thead {
          background: rgba(148,163,184,0.06);
          border-bottom: 1px solid rgba(148,163,184,0.14);
          font-size: ${fs.label};
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
        }
        .cs-row {
          border-bottom: 1px solid rgba(148,163,184,0.08);
          font-size: ${fs.bodySm};
          line-height: 1.55;
          transition: background 200ms ease;
        }
        .cs-row:last-child { border-bottom: none; }
        .cs-row:hover { background: rgba(148,163,184,0.04); }

        @media (max-width: 720px) {
          .cs-table .cs-thead { display: none; }
          .cs-table .cs-row,
          .cs-table.cs-table-3 .cs-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 14px 14px;
          }
          .cs-row [role="cell"]::before {
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

/* ---------- helpers ---------- */

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

const Li: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li style={{ position: 'relative', paddingLeft: 18, fontSize: fs.bodySm, color: '#cbd5e1', lineHeight: 1.55 }}>
    <span
      style={{
        position: 'absolute', left: 0, top: '0.6em',
        width: 6, height: 6, borderRadius: 999,
        background: 'linear-gradient(180deg,#22d3ee,#60a5fa)',
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

const SectionTitle: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div style={{ marginTop: 40, marginBottom: 14 }}>
    <div style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>
      {eyebrow}
    </div>
    <div style={{ marginTop: 6, fontSize: fs.h2, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
      {title}
    </div>
  </div>
);

const VerdictCard: React.FC<{ eyebrow: string; title: string; tint: string; body: string }> = ({ eyebrow, title, tint, body }) => (
  <div
    style={{
      ...cardStyle(),
      position: 'relative', overflow: 'hidden',
    }}
  >
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

export default CareerStabilityCheck;
