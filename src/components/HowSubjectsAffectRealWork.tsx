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

const impactColor: Record<string, string> = {
  CRITICAL: '#f87171',
  HIGH: '#f5c26b',
  MEDIUM: '#6ee7d7',
};

const subjectWorkData = [
  {
    subject: 'Reinforced Cement Concrete / RCC Design',
    task: 'Check slab, beam, column, footing reinforcement against drawings',
    helps: 'Helps understand cover, spacing, laps, stirrups, anchorage, bar placement, and RCC member behavior',
    interview: 'Can explain how RCC drawings translate into site reinforcement checking',
    weak: 'Cannot verify steel; blindly depends on bar bender, contractor, or senior',
    impact: 'CRITICAL',
  },
  {
    subject: 'Building Construction / Construction Technology',
    task: 'Understand and follow apartment execution sequence from excavation to finishing',
    helps: 'Helps connect foundation, formwork, concreting, masonry, waterproofing, and finishing stages',
    interview: 'Can explain actual site workflow, not just isolated theory',
    weak: 'Gets confused about what work comes before or after; poor coordination',
    impact: 'CRITICAL',
  },
  {
    subject: 'Concrete Technology',
    task: 'Observe concrete pouring, slump, compaction, curing, and concrete testing',
    helps: 'Helps identify workability issues, honeycombing risk, poor compaction, bad curing, and cube/slump test relevance',
    interview: 'Can discuss real concrete quality problems and prevention',
    weak: 'Treats concrete work casually; misses quality defects before they become permanent',
    impact: 'CRITICAL',
  },
  {
    subject: 'Surveying',
    task: 'Support layout marking, level checking, benchmark use, and RL understanding',
    helps: 'Helps understand gridlines, levels, slopes, plinth level, slab level, and floor level control',
    interview: 'Can explain benchmark, RL, layout marking, and level transfer',
    weak: 'Cannot catch level/layout errors; fully dependent on surveyor',
    impact: 'HIGH',
  },
  {
    subject: 'Estimation and Costing / Quantity Surveying',
    task: 'Support quantity take-off, BBS understanding, BOQ/MB records, and material tracking',
    helps: 'Helps connect drawings to steel, concrete, shuttering, masonry, and billing quantities',
    interview: 'Can explain BBS, quantity take-off, and site measurement logic',
    weak: 'Cannot relate executed work to quantities, material planning, or billing support',
    impact: 'HIGH',
  },
];

const dailyMapping = [
  { responsibility: 'Checking slab reinforcement spacing before concreting', subject: 'RCC Design' },
  { responsibility: 'Verifying beam stirrups, laps, hooks, and anchorage', subject: 'RCC Design' },
  { responsibility: 'Checking column ties, cover blocks, and vertical steel alignment', subject: 'RCC Design' },
  { responsibility: 'Understanding excavation, PCC, footing, column, beam, slab sequence', subject: 'Building Construction' },
  { responsibility: 'Checking shuttering line, level, supports, and gaps before pour', subject: 'Building Construction' },
  { responsibility: 'Observing masonry, waterproofing, plastering, and finishing sequence', subject: 'Building Construction' },
  { responsibility: 'Checking concrete workability during pour', subject: 'Concrete Technology' },
  { responsibility: 'Understanding slump test, cube test, compaction, and curing', subject: 'Concrete Technology' },
  { responsibility: 'Identifying honeycombing, segregation, and poor concrete placement', subject: 'Concrete Technology' },
  { responsibility: 'Supporting gridline marking and column location verification', subject: 'Surveying' },
  { responsibility: 'Understanding benchmark, RL, plinth level, slab level, and floor level', subject: 'Surveying' },
  { responsibility: 'Taking basic measurements for executed work', subject: 'Estimation and Costing / Quantity Surveying' },
  { responsibility: 'Reading BBS for slab, beam, and column reinforcement', subject: 'Estimation and Costing / Quantity Surveying' },
  { responsibility: 'Connecting site progress with material quantity needs', subject: 'Estimation and Costing / Quantity Surveying' },
  { responsibility: 'Supporting BOQ or measurement book records', subject: 'Estimation and Costing / Quantity Surveying' },
];

const mustUnderstand = [
  {
    subject: 'Reinforced Cement Concrete / RCC Design',
    usedFor: 'Reinforcement checking in slab, beam, column, footing, cover, laps, stirrups, anchorage.',
    why: 'RCC apartment execution cannot be controlled without understanding structural drawings.',
    weak: 'The fresher becomes a passive observer during the most important site activity.',
  },
  {
    subject: 'Building Construction / Construction Technology',
    usedFor: 'Execution sequence, formwork, scaffolding, masonry, waterproofing, finishing, site coordination.',
    why: 'It tells the fresher how the building actually gets built stage by stage.',
    weak: 'The fresher cannot understand site flow and keeps asking basic sequence questions.',
  },
  {
    subject: 'Concrete Technology',
    usedFor: 'Slump, batching, placing, compaction, curing, cube tests, concrete defect awareness.',
    why: 'Concrete mistakes become permanent after casting.',
    weak: 'The fresher misses honeycombing, poor workability, poor curing, and weak quality control.',
  },
  {
    subject: 'Surveying',
    usedFor: 'Layout marking, gridlines, benchmark, RL, level transfer, slope and alignment checks.',
    why: 'Wrong levels and wrong layout create expensive rework.',
    weak: 'The fresher depends completely on the surveyor and cannot verify basic site accuracy.',
  },
  {
    subject: 'Estimation and Costing / Quantity Surveying',
    usedFor: 'Quantity take-off, BBS reading, BOQ, measurement book, steel/concrete/shuttering quantities.',
    why: 'Site execution is linked to material planning, billing, and quantity control.',
    weak: 'The fresher cannot connect drawings and site progress to quantities.',
  },
];

const HowSubjectsAffectRealWork: React.FC = () => {
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
            How Subjects Affect Real Work
          </span>
        </div>

        {/* Headline */}
        <h1 className="wfg-headline-gradient">
          Why These Subjects Matter Beyond Exams
        </h1>
        <div style={{ marginTop: 14, display: 'grid', gap: 10, maxWidth: '72ch' }}>
          <p style={{ margin: 0, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>
            Students usually study Civil subjects separately.
          </p>
          <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
            On an RCC apartment site, companies do not use subjects separately; they use them through work tasks.
          </p>
          <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
            A Junior Site Engineer needs to connect drawings, reinforcement, concrete, levels, quantities, and execution sequence.
          </p>
          <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.7 }}>
            Subject value comes from whether it helps the fresher perform site work, not from exam marks.
          </p>
        </div>

        {/* Subject-to-Work Connection Table */}
        <SectionTitle eyebrow="Subject-to-Work Mapping" title="Subject-to-Work Connection Table" />
        <div className="wfg-card hsw-swc-desktop" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table-subject" role="table" aria-label="Subject to work connection table">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Subject</div>
              <div role="columnheader">Real Fresher Task</div>
              <div role="columnheader">How Subject Helps</div>
              <div role="columnheader">Interview Advantage</div>
              <div role="columnheader">If Weak In Job</div>
              <div role="columnheader">Career Impact</div>
            </div>
            {subjectWorkData.map((r) => (
              <div className="wfg-row" role="row" key={r.subject}>
                <div role="cell" data-label="Subject" style={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {r.subject}
                </div>
                <div role="cell" data-label="Real Fresher Task" style={{ color: textSoft }}>
                  {r.task}
                </div>
                <div role="cell" data-label="How Subject Helps" style={{ color: textSoft }}>
                  {r.helps}
                </div>
                <div role="cell" data-label="Interview Advantage" style={{ color: textSoft }}>
                  {r.interview}
                </div>
                <div role="cell" data-label="If Weak In Job" style={{ color: '#f5c26b' }}>
                  {r.weak}
                </div>
                <div role="cell" data-label="Career Impact">
                  <span style={pill({ bg: `${impactColor[r.impact]}20`, bd: `${impactColor[r.impact]}55`, fg: impactColor[r.impact] })}>
                    {r.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Subject-to-Work Connection redesigned cards */}
        <div className="hsw-swc-mobile" aria-label="Subject to work connection mobile">
          {subjectWorkData.map((r, i) => {
            const color = impactColor[r.impact];
            return (
              <div className="wfg-card hsw-swc-card" tabIndex={0} key={r.subject} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
                <div className="hsw-swc-accent" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="hsw-swc-body">
                  <div className="hsw-swc-head">
                    <span className="hsw-swc-index" style={{ color, borderColor: `${color}55`, background: `${color}20` }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="hsw-swc-title">{r.subject}</div>
                    <span style={pill({ bg: `${color}20`, bd: `${color}55`, fg: color })}>{r.impact}</span>
                  </div>

                  <div className="hsw-swc-divider" aria-hidden />
                  <div className="hsw-swc-eyebrow">Real Fresher Task</div>
                  <div className="hsw-swc-text">{r.task}</div>

                  <div className="hsw-swc-divider" aria-hidden />
                  <div className="hsw-swc-eyebrow">How Subject Helps</div>
                  <div className="hsw-swc-text">{r.helps}</div>

                  <div className="hsw-swc-divider" aria-hidden />
                  <div className="hsw-swc-eyebrow">Interview Advantage</div>
                  <div className="hsw-swc-text">{r.interview}</div>

                  <div className="hsw-swc-divider" aria-hidden />
                  <div className="hsw-swc-eyebrow" style={{ color: '#f5c26b' }}>If Weak In Job</div>
                  <div className="hsw-swc-text" style={{ color: '#f5c26b' }}>{r.weak}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Work → Subject Mapping */}
        <SectionTitle eyebrow="Daily Responsibility Mapping" title="Daily Work → Subject Mapping" />
        <div className="wfg-card hsw-dwm-desktop" tabIndex={0} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
          <div className="wfg-table-daily" role="table" aria-label="Daily work to subject mapping">
            <div className="wfg-thead" role="row">
              <div role="columnheader">Real Fresher Responsibility</div>
              <div role="columnheader">Primary Subject Behind It</div>
            </div>
            {dailyMapping.map((r, idx) => (
              <div className="wfg-row" role="row" key={idx}>
                <div role="cell" data-label="Real Fresher Responsibility" style={{ color: textSoft }}>
                  {r.responsibility}
                </div>
                <div role="cell" data-label="Primary Subject Behind It">
                  <span style={pill({ bg: 'rgba(110,231,215,0.12)', bd: 'rgba(110,231,215,0.35)', fg: accentTeal })}>
                    {r.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Daily Work → Subject Mapping redesigned cards, grouped by subject */}
        <div className="hsw-dwm-mobile" aria-label="Daily work to subject mapping mobile">
          {Array.from(
            dailyMapping.reduce((map, r) => {
              const list = map.get(r.subject) ?? [];
              list.push(r.responsibility);
              map.set(r.subject, list);
              return map;
            }, new Map<string, string[]>()).entries()
          ).map(([subject, items], gi) => {
            const palette = [accentTeal, accentViolet, accentAmber, '#7DD3FC', '#f472b6'];
            const color = palette[gi % palette.length];
            return (
              <div className="wfg-card hsw-dwm-card" tabIndex={0} key={subject} style={cardStyle({ padding: 0, overflow: 'hidden' })}>
                <div className="hsw-dwm-accent" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="hsw-dwm-body">
                  <div className="hsw-dwm-head">
                    <span className="hsw-dwm-index" style={{ color, borderColor: `${color}55`, background: `${color}20` }}>
                      {String(gi + 1).padStart(2, '0')}
                    </span>
                    <span style={pill({ bg: `${color}20`, bd: `${color}55`, fg: color })}>{subject}</span>
                  </div>

                  <div className="hsw-dwm-divider" aria-hidden />
                  <div className="hsw-dwm-eyebrow">Real Fresher Responsibilities</div>
                  <ul className="hsw-dwm-list">
                    {items.map((it, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <li className="hsw-dwm-sep" aria-hidden />}
                        <li className="hsw-dwm-item">
                          <span className="hsw-dwm-bullet" style={{ background: color, boxShadow: `0 0 0 3px ${color}22` }} />
                          <span className="hsw-dwm-text">{it}</span>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Students Must Understand */}
        <SectionTitle eyebrow="Core Understanding" title="What Students Must Understand" />
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {mustUnderstand.map((item, idx) => (
            <div className="wfg-card" tabIndex={0} key={item.subject} style={cardStyle({ position: 'relative', overflow: 'hidden' })}>
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
                <EyebrowLabel>{item.subject}</EyebrowLabel>
                <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
                  <div>
                    <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9aa4b2', fontWeight: 700 }}>
                      Used For
                    </span>
                    <p style={{ marginTop: 6, marginBottom: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{item.usedFor}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9aa4b2', fontWeight: 700 }}>
                      Why It Matters
                    </span>
                    <p style={{ marginTop: 6, marginBottom: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{item.why}</p>
                  </div>
                  <div style={{ padding: 12, borderRadius: 12, background: 'linear-gradient(180deg, rgba(248,113,113,0.08), rgba(248,113,113,0.03))', border: '1px solid rgba(248,113,113,0.28)' }}>
                    <span style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f87171', fontWeight: 700 }}>
                      If Weak
                    </span>
                    <p style={{ marginTop: 6, marginBottom: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{item.weak}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        .hsw-subtitle-gradient {
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
        .wfg-table-subject,
        .wfg-table-daily { display: grid; }
        .wfg-table-subject .wfg-thead,
        .wfg-table-subject .wfg-row,
        .wfg-table-daily .wfg-thead,
        .wfg-table-daily .wfg-row {
          display: grid;
          gap: 12px;
          padding: 14px 16px;
          align-items: start;
        }
        .wfg-table-subject .wfg-thead,
        .wfg-table-subject .wfg-row {
          grid-template-columns: 1.1fr 1.1fr 1.1fr 1fr 1fr 0.7fr;
        }
        .wfg-table-daily .wfg-thead,
        .wfg-table-daily .wfg-row {
          grid-template-columns: 2.4fr 1fr;
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

        .hsw-swc-mobile { display: none; }
        .hsw-dwm-mobile { display: none; }

        @media (max-width: 900px) {
          .wfg-table-subject .wfg-thead,
          .wfg-table-subject .wfg-row {
            grid-template-columns: 1fr 1fr;
          }
          .wfg-table-subject .wfg-thead { display: none; }
          .wfg-table-subject .wfg-row [role="cell"]::before {
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
        @media (max-width: 720px) {
          .wfg-table-subject .wfg-row {
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
          .hsw-swc-desktop { display: none; }
          .hsw-swc-mobile {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }
          .hsw-dwm-desktop { display: none; }
          .hsw-dwm-mobile {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }
        }

        .hsw-dwm-card { position: relative; }
        .hsw-dwm-accent { height: 3px; width: 100%; opacity: 0.9; }
        .hsw-dwm-body { padding: 14px 14px 16px; }
        .hsw-dwm-head {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hsw-dwm-index {
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
        .hsw-dwm-divider {
          margin: 12px 0 10px;
          height: 1px;
          background: linear-gradient(to right, rgba(154,164,178,0) 0%, rgba(154,164,178,0.35) 50%, rgba(154,164,178,0) 100%);
        }
        .hsw-dwm-eyebrow {
          font-size: ${fs.label};
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9aa4b2;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .hsw-dwm-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0;
        }
        .hsw-dwm-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
        }
        .hsw-dwm-bullet {
          flex: 0 0 auto;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          margin-top: 8px;
        }
        .hsw-dwm-text {
          font-size: ${fs.bodySm};
          color: ${textSoft};
          line-height: 1.55;
        }
        .hsw-dwm-sep {
          list-style: none;
          height: 1px;
          background: linear-gradient(to right, rgba(154,164,178,0) 0%, rgba(154,164,178,0.22) 50%, rgba(154,164,178,0) 100%);
        }

        .hsw-swc-card { position: relative; }
        .hsw-swc-accent {
          height: 3px;
          width: 100%;
          opacity: 0.9;
        }
        .hsw-swc-body { padding: 14px 14px 16px; }
        .hsw-swc-head {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hsw-swc-index {
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
        .hsw-swc-title {
          flex: 1 1 auto;
          min-width: 0;
          font-weight: 600;
          color: #f1f5f9;
          font-size: ${fs.body};
          line-height: 1.3;
        }
        .hsw-swc-divider {
          margin: 12px 0 10px;
          height: 1px;
          background: linear-gradient(to right, rgba(154,164,178,0) 0%, rgba(154,164,178,0.35) 50%, rgba(154,164,178,0) 100%);
        }
        .hsw-swc-eyebrow {
          font-size: ${fs.label};
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9aa4b2;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .hsw-swc-text {
          font-size: ${fs.bodySm};
          color: ${textSoft};
          line-height: 1.6;
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
      className="hsw-subtitle-gradient"
      style={{ marginTop: eyebrow ? 6 : 0, marginBottom: 0 }}
    >
      {title}
    </h2>
  </div>
);

export default HowSubjectsAffectRealWork;
