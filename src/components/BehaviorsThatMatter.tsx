import React from 'react';

const clamp = (min: number, vwMin: number, max: number, vwMax: number = 1280, vwMinPx: number = 375) => {
  const slope = (max - min) / (vwMax - vwMinPx);
  const yInter = -vwMinPx * slope + min;
  return `clamp(${min}px, ${yInter.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw, ${max}px)`;
};

const fs = {
  label: clamp(8, 375, 9),
  labelMd: clamp(8.4, 375, 9.2),
  labelLg: clamp(10, 375, 11),
  body: clamp(11, 375, 13),
  bodyLg: clamp(13, 375, 15),
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
const warn = '#f87171';
const success = '#34d399';

interface Behavior {
  id: string;
  title: string;
  strong: string;
  weak: string;
  why: string;
  trust: string;
  growth: string;
}

const behaviors: Behavior[] = [
  {
    id: '01',
    title: 'Checks Drawing Before Checking Site',
    strong: 'Compare RCC drawing, BBS, and site work before reporting.',
    weak: 'Look at site work without confirming drawing details.',
    why: 'Wrong steel checking creates serious RCC execution mistakes.',
    trust: 'Seniors trust observations when drawing reference is clear.',
    growth: 'Gets more reinforcement and slab inspection responsibility.',
  },
  {
    id: '02',
    title: 'Reports Site Issues Early',
    strong: 'Escalate steel, level, shuttering, or concrete issues before work continues.',
    weak: 'Stay silent until seniors or workers notice the problem.',
    why: 'Late reporting causes rework, delay, and quality loss.',
    trust: 'Managers trust freshers who prevent hidden mistakes.',
    growth: 'Gets included in pre-pour and inspection checks.',
  },
  {
    id: '03',
    title: 'Records Work Clearly',
    strong: 'Write daily progress, quantities, and observations without vague entries.',
    weak: 'Give rough updates that seniors must verify again.',
    why: 'Poor records create confusion in progress and quantity tracking.',
    trust: 'Clear records reduce senior doubt.',
    growth: 'Gets more reporting and coordination responsibility.',
  },
  {
    id: '04',
    title: 'Rechecks Before Saying Done',
    strong: 'Verify spacing, cover, line, level, and supports before confirming completion.',
    weak: 'Accept worker statements without checking properly.',
    why: 'Unchecked work becomes costly after concrete is poured.',
    trust: 'Seniors trust freshers who do not blindly accept work.',
    growth: 'Moves from helper role to inspection support role.',
  },
  {
    id: '05',
    title: 'Learns From Corrections',
    strong: 'Repeat senior corrections correctly in the next similar site situation.',
    weak: 'Make the same steel, level, or reporting mistakes again.',
    why: 'Repeated mistakes slow site work and waste senior time.',
    trust: 'Seniors trust freshers who improve after correction.',
    growth: 'Gets faster independence during first-year site work.',
  },
];

const rarelyRemember = [
  'Your semester marks after joining site',
  'Your textbook definitions',
  'Your design software certificate alone',
  'Your classroom presentation style',
  'Your long project report',
  'Your theoretical RCC answers only',
];

const quicklyRemember = [
  'Whether you read drawings before checking',
  'Whether your site updates are reliable',
  'Whether you catch mistakes early',
  'Whether you repeat corrected mistakes',
  'Whether workers can understand your instructions',
  'Whether seniors must recheck everything you say',
];

const additionalReality = [
  'Site trust is earned through repeated accurate checking.',
  'One careless pre-pour update can damage credibility.',
  'Strong freshers reduce senior workload.',
  'Weak freshers create extra supervision work.',
  'Silent freshers are risky on RCC sites.',
];

interface ComparisonRow {
  area: string;
  weak: string;
  strong: string;
  why: string;
}

const comparisonRows: ComparisonRow[] = [
  { area: 'Verification', weak: 'Checks casually', strong: 'Checks against drawing', why: 'Prevents wrong execution' },
  { area: 'Reinforcement', weak: 'Looks only visually', strong: 'Confirms diameter and spacing', why: 'Avoids steel mistakes' },
  { area: 'Formwork', weak: 'Trusts worker update', strong: 'Checks line and support', why: 'Reduces pour-day risk' },
  { area: 'Levels', weak: 'Waits for senior', strong: 'Notes level mismatch early', why: 'Prevents slab issues' },
  { area: 'Concrete', weak: 'Only watches pour', strong: 'Observes slump, vibration, curing', why: 'Protects concrete quality' },
  { area: 'Reporting', weak: 'Gives vague updates', strong: 'Reports exact site status', why: 'Builds senior trust' },
  { area: 'Documentation', weak: 'Writes after delay', strong: 'Records daily progress', why: 'Avoids missing data' },
  { area: 'Coordination', weak: 'Passes unclear messages', strong: 'Repeats clear instructions', why: 'Reduces worker confusion' },
  { area: 'Review', weak: 'Says done quickly', strong: 'Rechecks before confirming', why: 'Prevents hidden mistakes' },
  { area: 'Learning', weak: 'Repeats same errors', strong: 'Applies corrections next time', why: 'Speeds responsibility growth' },
  { area: 'Revision Control', weak: 'Uses old drawing', strong: 'Confirms latest drawing', why: 'Avoids wrong work' },
  { area: 'Monitoring', weak: 'Stands passively', strong: 'Watches critical work points', why: 'Catches issues early' },
];

const BehaviorsThatMatter: React.FC = () => {
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
              boxShadow: '0 0 0 4px rgba(110,231,215,0.15)',
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
            Workplace Habits
          </span>
        </div>

        {/* Headline */}
        <h1 className="btm-headline-gradient">
          Behaviors That Separate Strong And Weak Freshers
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.bodyLg, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Shows the workplace habits that help freshers grow faster. Small daily choices create the biggest trust gap on site.
        </p>

        {/* Intro card */}
        <div className="btm-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 0% 0%, rgba(110,231,215,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>The 5 Behaviors That Create The Biggest Difference</EyebrowLabel>
            <p style={{ margin: '12px 0 0', fontSize: fs.bodyLg, color: textSoft, lineHeight: 1.6, maxWidth: '70ch' }}>
              These habits are not about marks or certificates. They are about how a fresher sees, reports, records, and responds to real site work.
            </p>
          </div>
        </div>

        {/* Behavior cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {behaviors.map((behavior, idx) => (
            <div key={behavior.id} className="btm-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    idx % 2 === 0
                      ? `radial-gradient(400px 200px at 0% 0%, rgba(110,231,215,0.10), transparent 60%)`
                      : `radial-gradient(400px 200px at 100% 0%, rgba(167,139,250,0.10), transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, rgba(110,231,215,0.18), rgba(167,139,250,0.18))',
                      border: '1px solid rgba(110,231,215,0.35)',
                      color: accentTeal,
                      fontSize: fs.labelLg,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {behavior.id}
                  </span>
                  <div className="btm-behavior-title">
                    {behavior.title}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                  <div style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.16)', borderRadius: 12, padding: 14 }}>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 8 }}>
                      Strong Freshers
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodyLg, color: textMain, lineHeight: 1.6 }}>{behavior.strong}</p>
                  </div>
                  <div style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.16)', borderRadius: 12, padding: 14 }}>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 8 }}>
                      Weak Freshers
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodyLg, color: textMain, lineHeight: 1.6 }}>{behavior.weak}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 8 }}>
                      Why It Matters
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{behavior.why}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 8 }}>
                      Trust Impact
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{behavior.trust}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 8 }}>
                      Growth Impact
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{behavior.growth}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brutal Reality */}
        <div className="btm-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(248,113,113,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Brutal Reality</EyebrowLabel>

            <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              <div style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.16)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 10 }}>
                  Companies Rarely Remember
                </div>
                <ul style={ulStyle({ gap: 6 })}>
                  {rarelyRemember.map((item, i) => (
                    <Li key={i} warn small>
                      {item}
                    </Li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.16)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 10 }}>
                  Companies Quickly Remember
                </div>
                <ul style={ulStyle({ gap: 6 })}>
                  {quicklyRemember.map((item, i) => (
                    <Li key={i} success small>
                      {item}
                    </Li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 10 }}>
                  Additional Reality
                </div>
                <ul style={ulStyle({ gap: 6 })}>
                  {additionalReality.map((item, i) => (
                    <Li key={i} small>
                      {item}
                    </Li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Behavior Comparison */}
        <div className="btm-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 0% 0%, rgba(167,139,250,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Detailed Behavior Comparison</EyebrowLabel>
            <p style={{ margin: '10px 0 0', fontSize: fs.body, color: muted, lineHeight: 1.6, maxWidth: '70ch' }}>
              A side-by-side look at where strong and weak freshers differ in real work situations.
            </p>

            {/* Desktop table header */}
            <div className="btm-table-header">
              <div>Career Area</div>
              <div>Weak Fresher</div>
              <div>Strong Fresher</div>
              <div>Why It Matters</div>
            </div>

            {/* Desktop table rows */}
            <div className="btm-table-desktop" style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="btm-table-row"
                  style={{
                    alignItems: 'stretch',
                    padding: '12px 10px',
                    borderRadius: 10,
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    fontSize: fs.body,
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ color: accentTeal, fontWeight: 700, display: 'flex', alignItems: 'center' }}>{row.area}</div>
                  <div style={{ color: '#fecaca', display: 'flex', alignItems: 'center' }}>{row.weak}</div>
                  <div style={{ color: '#a7f3d0', display: 'flex', alignItems: 'center' }}>{row.strong}</div>
                  <div style={{ color: textSoft, display: 'flex', alignItems: 'center' }}>{row.why}</div>
                </div>
              ))}
            </div>

            {/* Mobile stacked cards */}
            <div className="btm-table-mobile" style={{ gap: 10, marginTop: 12 }}>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(148,163,184,0.14)',
                    borderRadius: 12,
                    padding: 14,
                    display: 'grid',
                    gap: 10,
                  }}
                >
                  <div style={{ fontSize: fs.labelLg, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700 }}>
                    {row.area}
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.1em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 4 }}>Weak Fresher</div>
                    <div style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.5 }}>{row.weak}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.1em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 4 }}>Strong Fresher</div>
                    <div style={{ fontSize: fs.body, color: '#a7f3d0', lineHeight: 1.5 }}>{row.strong}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 4 }}>Why It Matters</div>
                    <div style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>{row.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btm-headline-gradient {
          font-size: ${fs.h1};
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 26ch;
          font-family: Poppins, Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .btm-behavior-title {
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
        }
        .btm-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .btm-card:hover,
        .btm-card:focus-visible,
        .btm-card:focus-within,
        .btm-card:active {
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
          .btm-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .btm-table-header {
          display: grid;
          grid-template-columns: minmax(110px, 1fr) minmax(140px, 1.4fr) minmax(160px, 1.6fr) minmax(130px, 1.3fr);
          gap: 8px;
          margin-top: 18px;
          padding: 12px 10px;
          border-radius: 10px;
          background: rgba(148,163,184,0.10);
          font-size: ${fs.labelLg};
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${muted};
          font-weight: 700;
        }
        .btm-table-row {
          display: grid;
          grid-template-columns: minmax(110px, 1fr) minmax(140px, 1.4fr) minmax(160px, 1.6fr) minmax(130px, 1.3fr);
          gap: 8px;
        }
        .btm-table-mobile {
          display: none;
        }
        @media (max-width: 640px) {
          .btm-table-header,
          .btm-table-desktop {
            display: none !important;
          }
          .btm-table-mobile {
            display: grid !important;
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

const EyebrowLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontSize: fs.labelLg, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
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

const Li: React.FC<{ children: React.ReactNode; warn?: boolean; success?: boolean; small?: boolean }> = ({
  children,
  warn: isWarn,
  success: isSuccess,
  small,
}) => (
  <li
    style={{
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: small ? fs.body : fs.bodyLg,
      color: isWarn ? '#fecaca' : isSuccess ? '#a7f3d0' : textSoft,
      lineHeight: 1.6,
    }}
  >
    <span
      style={{
        flexShrink: 0,
        width: 6,
        height: 6,
        borderRadius: '50%',
        marginTop: '0.45em',
        background: isWarn ? warn : isSuccess ? success : accentTeal,
      }}
    />
    <span>{children}</span>
  </li>
);

export default BehaviorsThatMatter;
