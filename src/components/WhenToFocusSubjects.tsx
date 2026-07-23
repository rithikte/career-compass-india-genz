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
const muted = '#9aa4b2';
const textMain = '#e7ecf3';
const textSoft = '#cbd5e1';
const warn = '#f5c26b';

interface Phase {
  phase: string;
  tagline: string;
  focus: string[];
  why: string[];
  without: string[];
  goal: string;
}

const phases: Phase[] = [
  {
    phase: 'PHASE 1 — TECHNICAL FOUNDATION',
    tagline: 'Learn the core before stepping on site.',
    focus: [
      'RCC Design basics: beams, slabs, columns, reinforcement detailing',
      'Building Construction basics: RCC frame sequence, shuttering, concreting, curing',
      'Concrete Technology basics: grades, workability, slump, compaction, curing',
    ],
    why: [
      'Most site mistakes happen around steel, shuttering, and concrete.',
      'Freshers must understand what they are checking before site exposure.',
      'RCC drawings make no sense without structural and construction basics.',
    ],
    without: [
      'Student cannot read RCC work properly.',
      'Steel and slab checking becomes guesswork.',
      'Internship exposure becomes confusing instead of useful.',
    ],
    goal: 'Understand the core RCC apartment execution work before entering site.',
  },
  {
    phase: 'PHASE 2 — WORK CONTROL FOUNDATION',
    tagline: 'Learn how site work is checked and recorded.',
    focus: [
      'Surveying basics: levels, benchmarks, gridlines, layout checking',
      'BBS sheets, site drawing prints, measuring tape, auto level',
      'Basic quantity and progress records from Estimation / Quantity Surveying',
    ],
    why: [
      'After understanding RCC work, students must learn how site control happens.',
      'Layout, level, dimensions, and records control daily execution accuracy.',
      'These tools convert subject knowledge into site checking ability.',
    ],
    without: [
      'Student depends fully on seniors for basic checking.',
      'Level and layout mistakes are not noticed early.',
      'Daily progress reporting becomes vague and unreliable.',
    ],
    goal: 'Learn how site work is checked, measured, controlled, and recorded.',
  },
  {
    phase: 'PHASE 3 — PRACTICAL APPLICATION',
    tagline: 'Convert classroom knowledge into checking ability.',
    focus: [
      'RCC Reinforcement Inspection Lab',
      'Slab Level & Alignment Practice Lab',
      'Concrete Workability Observation Lab',
      'Gridline, benchmark, and site quantity documentation practice',
    ],
    why: [
      'Practical labs should come after basic subject and tool understanding.',
      'Students need repeated checking practice before internships.',
      'This phase exposes common mistakes before real site pressure.',
    ],
    without: [
      'Student knows theory but cannot apply it on site.',
      'Interviews sound textbook-heavy and weak.',
      'First internship becomes observation-only, not participation.',
    ],
    goal: 'Convert classroom knowledge into basic site-checking ability.',
  },
  {
    phase: 'PHASE 4 — INTERVIEW & PROOF BUILDING',
    tagline: 'Build visible proof that you understand site work.',
    focus: [
      'Mini Projects: reinforcement, slab level, concrete quality, layout verification',
      'Minor Projects: slab pre-pour, floor layout, progress monitoring workflows',
      'Explaining site mistakes, corrections, and inspection steps clearly',
    ],
    why: [
      'Interviews need proof, not only subject names.',
      'Workflow projects show the student understands real site sequence.',
      'Explanation ability separates practical students from marks-only students.',
    ],
    without: [
      'Resume looks like every other civil fresher resume.',
      'Student cannot prove site readiness in interviews.',
      'Practical questions become difficult to answer clearly.',
    ],
    goal: 'Build visible proof that the student understands RCC apartment site work.',
  },
  {
    phase: 'PHASE 5 — JOB READINESS & EXECUTION MATURITY',
    tagline: 'Become ready to support real site execution.',
    focus: [
      'Major Projects: slab execution control, RCC coordination, floor execution workflow',
      'Basic site debugging: steel mismatch, level errors, poor concrete handling',
      'Reporting discipline: daily progress, issue escalation, drawing revision awareness',
    ],
    why: [
      'These need foundation, tools, labs, and project exposure first.',
      'Job readiness means handling connected site situations, not isolated tasks.',
      'Debugging matters only after students know normal execution flow.',
    ],
    without: [
      'Student enters job unable to connect layout, steel, concrete, and reporting.',
      'Seniors must recheck every observation.',
      'First-job growth becomes slow and dependent.',
    ],
    goal: 'Become ready to support real RCC apartment execution with lower supervision.',
  },
];

const brutalReality = [
  'Most students focus too much on exam theory and software certificates.',
  'Strong freshers focus on drawings, steel, levels, concrete, and reporting.',
  'Companies can teach company formats and site routines.',
  'Companies struggle to quickly teach drawing sense and site judgment.',
  'The biggest mistake is learning subjects without practicing site checking.',
];

const WhenToFocusSubjects: React.FC = () => {
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
            Learning Order
          </span>
        </div>

        {/* Headline */}
        <h1 className="wtf-headline-gradient">
          When To Focus On Each Subject
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.bodyLg, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Shows what to learn first and what to learn later. The right order helps students become useful during internships, interviews, and first site work.
        </p>

        {/* Why this section exists */}
        <div className="wtf-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>Why This Section Exists</EyebrowLabel>
            <ul style={{ ...ulStyle({ gap: 10 }), marginTop: 12 }}>
              <Li>
                Students often follow semester order, not job-readiness order.
              </Li>
              <Li>
                For RCC apartment site execution, drawings, steel, sequence, levels, and concrete matter earlier than full syllabus coverage.
              </Li>
              <Li>
                The right order helps students become useful during internships, interviews, and first site work.
              </Li>
              <Li warn>
                Wrong order creates theory knowledge without site performance.
              </Li>
            </ul>
          </div>
        </div>

        {/* Phases */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {phases.map((phase, idx) => (
            <div key={phase.phase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: 'linear-gradient(135deg, rgba(110,231,215,0.18), rgba(167,139,250,0.18))',
                    border: '1px solid rgba(110,231,215,0.35)',
                    color: accentTeal,
                    fontSize: fs.labelLg,
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>
                <div>
                  <div style={{ fontSize: fs.labelLg, letterSpacing: '0.16em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
                    {phase.phase.split(' — ')[0]}
                  </div>
                  <h2 className="wtf-phase-headline" style={{ marginTop: 2 }}>
                    {phase.phase.split(' — ')[1]}
                  </h2>
                </div>
              </div>

              <div className="wtf-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 18 }}>
                  {/* Focus On */}
                  <div>
                    <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 10 }}>
                      Focus On
                    </div>
                    <ul style={ulStyle()}>
                      {phase.focus.map((item, i) => (
                        <Li key={i} bold>
                          {item}
                        </Li>
                      ))}
                    </ul>
                  </div>

                  {/* Why First / Without / Goal */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 8 }}>
                        Why First
                      </div>
                      <ul style={ulStyle({ gap: 6 })}>
                        {phase.why.map((item, i) => (
                          <Li key={i} small>
                            {item}
                          </Li>
                        ))}
                      </ul>
                    </div>
                    <div className="wtf-reality-box" style={{ background: 'linear-gradient(180deg, rgba(245,194,107,0.08), rgba(245,194,107,0.04))', border: '1px solid rgba(245,194,107,0.25)', borderRadius: 12, padding: 14 }}>
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 8 }}>
                        Without This Foundation
                      </div>
                      <ul style={ulStyle({ gap: 6 })}>
                        {phase.without.map((item, i) => (
                          <Li key={i} small warn>
                            {item}
                          </Li>
                        ))}
                      </ul>
                    </div>
                    <div
                      style={{
                        background: 'rgba(110,231,215,0.06)',
                        border: '1px solid rgba(110,231,215,0.18)',
                        borderRadius: 12,
                        padding: 14,
                      }}
                    >
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                        Goal
                      </div>
                      <p style={{ margin: 0, fontSize: fs.bodyLg, color: textMain, lineHeight: 1.6, fontWeight: 500 }}>
                        {phase.goal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brutal Reality */}
        <div className="wtf-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <ul style={{ ...ulStyle({ gap: 10 }), marginTop: 12 }}>
              {brutalReality.map((item, i) => (
                <Li key={i} warn>
                  {item}
                </Li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .wtf-headline-gradient {
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
        .wtf-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .wtf-card:hover,
        .wtf-card:focus-visible,
        .wtf-card:focus-within,
        .wtf-card:active {
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
          .wtf-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 26px rgba(110,231,215,0.32),
              0 0 52px rgba(167,139,250,0.26);
          }
        }
        .wtf-phase-headline {
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

const Li: React.FC<{ children: React.ReactNode; warn?: boolean; bold?: boolean; small?: boolean }> = ({
  children,
  warn: isWarn,
  bold,
  small,
}) => (
  <li
    style={{
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: small ? fs.body : fs.bodyLg,
      color: isWarn ? '#f5c26b' : textSoft,
      lineHeight: 1.6,
      fontWeight: bold ? 500 : 400,
    }}
  >
    <span
      style={{
        flexShrink: 0,
        width: 6,
        height: 6,
        borderRadius: '50%',
        marginTop: '0.45em',
        background: isWarn ? warn : accentTeal,
      }}
    />
    <span>{children}</span>
  </li>
);

export default WhenToFocusSubjects;
