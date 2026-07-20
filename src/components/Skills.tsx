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
  body: clamp(11, 375, 15),
  bodySm: clamp(11, 375, 13),
  h1: 'clamp(30.4px, 4.9004px + 3.8672vw, 54.4px)',
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

interface Skill {
  id: string;
  name: string;
  score: string;
  why: string;
  what: string;
  responsibilities: string;
  subjects: string;
  chapters: string;
  workplace: string;
  businessValue: string;
  capability: string;
  trust: string;
  growth: string;
  ignored: string;
}

const skills: Skill[] = [
  {
    id: '01',
    name: 'Reinforcement Verification',
    score: 'Very Strong',
    why: 'This is the most visible daily RCC site skill. Mistakes directly affect structural safety, rework, delay, and supervisor trust.',
    what: 'Check bar diameter, spacing, laps, cover blocks, hooks, anchorage, and placement against drawings/BBS before concreting.',
    responsibilities: 'Reinforcement Verification, Concrete Execution Monitoring, Construction Progress Documentation',
    subjects: 'RCC Design, Building Construction, Estimation and Costing',
    chapters: 'Slab Design & Reinforcement Detailing, Shear/Bond/Development Length, Detailing of RCC Members, Reinforcement Quantity Basics',
    workplace: 'Beam, slab, column, footing, staircase, and balcony reinforcement checks before concrete pour.',
    businessValue: 'Reduces structural mistakes, rework, wastage, and inspection failure.',
    capability: 'Drawing-to-site RCC checking ability.',
    trust: 'Supervisors trust freshers who catch reinforcement mistakes before pour.',
    growth: 'Builds base for site engineer, QA/QC engineer, and RCC execution roles.',
    ignored: 'Student becomes dangerous on RCC site work.',
  },
  {
    id: '02',
    name: 'Formwork and Level Verification',
    score: 'Very Strong',
    why: 'Freshers are commonly asked to check shuttering alignment, slab levels, beam depths, column lines, and support readiness.',
    what: 'Check formwork dimensions, verticality, levels, supports, gaps, oiling, and slab/beam depth before concrete placement.',
    responsibilities: 'Formwork and Level Verification, Concrete Execution Monitoring, Layout and Survey Verification',
    subjects: 'Building Construction, Surveying, RCC Design',
    chapters: 'Formwork and Scaffolding, Floors/Roofs/Slabs, Levelling, Setting Out of Buildings, Slab Design Basics',
    workplace: 'Before slab casting, beam casting, column casting, staircase casting, and floor-level checks.',
    businessValue: 'Prevents honeycombing, level errors, misalignment, concrete leakage, and rework.',
    capability: 'Pre-concreting readiness checking.',
    trust: 'Supervisors rely on freshers who can check formwork before problems become permanent.',
    growth: 'Builds execution confidence in RCC floor cycles.',
    ignored: 'Student may miss errors that cannot be easily corrected after casting.',
  },
  {
    id: '03',
    name: 'Concrete Execution Monitoring',
    score: 'Very Strong',
    why: 'Concrete work is high-risk, time-sensitive, and heavily supervised. Freshers can observe, record, and flag visible issues.',
    what: 'Monitor slump, placing, compaction, vibration, cold joints, finishing, curing start, and cube/sample coordination.',
    responsibilities: 'Concrete Execution Monitoring, Construction Progress Documentation, Formwork and Level Verification',
    subjects: 'Concrete Technology, Building Construction, RCC Design',
    chapters: 'Workability of Concrete, Water-Cement Ratio, Fresh Concrete Operations, Curing and Strength Development, Concrete Construction Practices',
    workplace: 'Slab pours, beam pours, column pours, footing concreting, curing checks, and concrete quality observation.',
    businessValue: 'Improves concrete quality, durability, finish, and site reliability.',
    capability: 'Concrete pour monitoring and quality observation.',
    trust: 'Freshers gain trust when they report concrete issues early.',
    growth: 'Builds foundation for RCC execution and QA/QC responsibility.',
    ignored: 'Student may stand at site without knowing what quality problems to watch.',
  },
  {
    id: '04',
    name: 'Layout and Survey Verification',
    score: 'Strong',
    why: 'Layout mistakes create major alignment problems. Freshers often assist in checking gridlines, levels, offsets, and benchmarks.',
    what: 'Assist in checking centre lines, grid lines, column positions, slab levels, reduced levels, and basic setting-out references.',
    responsibilities: 'Layout and Survey Verification, Formwork and Level Verification, Construction Progress Documentation',
    subjects: 'Surveying, Building Construction',
    chapters: 'Linear Measurement, Levelling, Contouring and Reduced Levels, Total Station Basics, Setting Out of Buildings',
    workplace: 'Column marking, footing layout, floor gridline checks, slab level transfer, and benchmark verification.',
    businessValue: 'Prevents wrong placement, level mismatch, alignment errors, and downstream rework.',
    capability: 'Site measurement and layout checking ability.',
    trust: 'Supervisors value freshers who can assist survey teams without confusion.',
    growth: 'Improves site coordination and drawing-to-ground understanding.',
    ignored: 'Student becomes dependent on others for basic layout understanding.',
  },
  {
    id: '05',
    name: 'Site Progress and Quantity Documentation',
    score: 'Strong',
    why: 'Documentation is low-glamour but essential. Freshers are often trusted with daily records, work status, and basic quantity tracking.',
    what: 'Record daily work done, concrete quantity, steel status, labour/material use, pour details, curing status, and pending issues.',
    responsibilities: 'Construction Progress Documentation, Concrete Execution Monitoring, Reinforcement Verification',
    subjects: 'Estimation and Costing, Quantity Surveying, Building Construction',
    chapters: 'Measurement Principles, Concrete Quantity Estimation, BOQ and Measurement Sheet Basics, Construction Sequence of Buildings',
    workplace: 'Daily progress reports, pour cards, quantity sheets, site diaries, contractor follow-up, and billing support.',
    businessValue: 'Improves reporting accuracy, cost control, billing support, and supervisor visibility.',
    capability: 'Execution documentation and quantity awareness.',
    trust: 'Reliable records make supervisors trust the fresher faster.',
    growth: 'Builds base for billing, planning, QA/QC, and site coordination roles.',
    ignored: 'Student may work hard but fail to prove or report actual work done.',
  },
];

const skillMapRows = [
  {
    skill: 'Reinforcement Verification',
    responsibility: 'Reinforcement checking before pour',
    subject: 'RCC Design',
    chapter: 'Detailing, slabs, beams, bond, development length',
    workplace: 'Beam/slab/column steel checking',
  },
  {
    skill: 'Formwork and Level Verification',
    responsibility: 'Shuttering and level checks',
    subject: 'Building Construction + Surveying',
    chapter: 'Formwork, slabs, levelling',
    workplace: 'Pre-pour inspection',
  },
  {
    skill: 'Concrete Execution Monitoring',
    responsibility: 'Concrete quality observation',
    subject: 'Concrete Technology',
    chapter: 'Workability, W/C ratio, curing, fresh concrete',
    workplace: 'Slab/column/footing pour monitoring',
  },
  {
    skill: 'Layout and Survey Verification',
    responsibility: 'Gridline, level, and position checks',
    subject: 'Surveying',
    chapter: 'Levelling, linear measurement, setting out',
    workplace: 'Column marking, slab level, benchmark checks',
  },
  {
    skill: 'Site Progress and Quantity Documentation',
    responsibility: 'Daily reporting and quantity records',
    subject: 'Estimation + Building Construction',
    chapter: 'Measurement, BOQ, concrete quantity',
    workplace: 'DPR, pour records, quantity tracking',
  },
];

const priorityOrder = [
  {
    label: 'Learn First',
    color: success,
    bg: 'rgba(52,211,153,0.06)',
    bd: 'rgba(52,211,153,0.16)',
    items: ['Reinforcement Verification', 'Formwork and Level Verification'],
    reason: 'These are what create permanent site mistakes.',
  },
  {
    label: 'Learn Next',
    color: accentTeal,
    bg: 'rgba(110,231,215,0.06)',
    bd: 'rgba(110,231,215,0.16)',
    items: ['Concrete Execution Monitoring', 'Layout and Survey Verification'],
    reason: 'Concrete and layout control come next.',
  },
  {
    label: 'Can Delay',
    color: muted,
    bg: 'rgba(148,163,184,0.06)',
    bd: 'rgba(148,163,184,0.16)',
    items: ['Site Progress and Quantity Documentation'],
    reason: 'Important, but documentation can follow after execution basics.',
  },
];

const Skills: React.FC = () => {
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
            Skill Map
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
            maxWidth: '26ch',
            background: 'linear-gradient(180deg,#ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Skills That Make Freshers Job-Ready
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Five execution skills that directly determine internship-readiness and interview confidence for RCC site execution.
        </p>

        {/* Intro card */}
        <div className="skills-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>The 5 Skills That Matter Most</EyebrowLabel>
            <p style={{ margin: '12px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6, maxWidth: '70ch' }}>
              These skills are selected based on how visible they are on site, how much damage mistakes cause, and how strongly they affect early-career trust and growth.
            </p>
          </div>
        </div>

        {/* Skill cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {skills.map((skill, idx) => (
            <div key={skill.id} className="skills-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
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
                    {skill.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {skill.name}
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 10px',
                      borderRadius: 999,
                      background: skill.score === 'Very Strong' ? 'rgba(52,211,153,0.10)' : 'rgba(110,231,215,0.10)',
                      border: `1px solid ${skill.score === 'Very Strong' ? 'rgba(52,211,153,0.35)' : 'rgba(110,231,215,0.35)'}`,
                      color: skill.score === 'Very Strong' ? success : accentTeal,
                      fontSize: fs.labelMd,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                    }}
                  >
                    Career Fit: {skill.score}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  <div>
                    <EyebrowLabel small>Why Selected</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{skill.why}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>What Freshers Actually Do</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{skill.what}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Responsibilities Supported</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{skill.responsibilities}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Subjects Behind This Skill</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{skill.subjects}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Key Chapters Behind This Skill</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{skill.chapters}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Where It Appears In Real Work</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{skill.workplace}</p>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(148,163,184,0.12)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 14,
                  }}
                >
                  <ImpactBlock label="Business Value Created" color={accentTeal} text={skill.businessValue} />
                  <ImpactBlock label="Capability Built" color={accentViolet} text={skill.capability} />
                  <ImpactBlock label="Trust Impact" color={success} text={skill.trust} />
                  <ImpactBlock label="Growth Impact" color={accentTeal} text={skill.growth} />
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: warn,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      If Ignored
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: '#fecaca', lineHeight: 1.6 }}>{skill.ignored}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill-to-Subject Map */}
        <SectionTitle eyebrow="Skill Map" title="Skill-To-Subject Map" />
        <div className="skills-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="skills-table-header">
            <div>Skill</div>
            <div>Responsibility Connection</div>
            <div>Subject Connection</div>
            <div>Chapter Connection</div>
            <div>Workplace Connection</div>
          </div>

          <div className="skills-table-desktop" style={{ display: 'grid' }}>
            {skillMapRows.map((row, i) => (
              <div
                key={i}
                className="skills-table-row"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.skill}</div>
                <div style={{ color: textSoft }}>{row.responsibility}</div>
                <div style={{ color: textSoft }}>{row.subject}</div>
                <div style={{ color: textSoft }}>{row.chapter}</div>
                <div style={{ color: textSoft }}>{row.workplace}</div>
              </div>
            ))}
          </div>

          <div className="skills-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {skillMapRows.map((row, i) => (
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
                  {row.skill}
                </div>
                <MapMobileItem label="Responsibility Connection" text={row.responsibility} />
                <MapMobileItem label="Subject Connection" text={row.subject} />
                <MapMobileItem label="Chapter Connection" text={row.chapter} />
                <MapMobileItem label="Workplace Connection" text={row.workplace} />
              </div>
            ))}
          </div>
        </div>

        {/* Brutal Reality Check */}
        <div className="skills-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>Brutal Reality Check</EyebrowLabel>
            <p style={{ margin: '12px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.7, maxWidth: '78ch' }}>
              If a student masters only these 5 skills, they become strong internship-ready and reasonably interview-ready for RCC site execution. They can speak about real site work, not textbook theory. Job-readiness becomes above average for a fresher, but not complete. Gaps still remain: labour coordination, contractor handling, safety rules, drawing revision tracking, material reconciliation, site communication under pressure, and speed in real execution. These 5 skills will get supervisor attention, but attitude, field stamina, and mistake ownership will decide survival.
            </p>
          </div>
        </div>

        {/* Final Priority Order */}
        <div className="skills-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>Final Priority Order</EyebrowLabel>
            <p style={{ margin: '10px 0 0', fontSize: fs.body, color: muted, lineHeight: 1.6, maxWidth: '70ch' }}>
              Learn execution skills in this order. First protect against permanent mistakes. Then build control and documentation.
            </p>

            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
              {priorityOrder.map((phase, i) => (
                <div
                  key={i}
                  style={{
                    background: phase.bg,
                    border: `1px solid ${phase.bd}`,
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: phase.color, fontWeight: 700, marginBottom: 10 }}>
                    {phase.label}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{ fontSize: fs.body, color: textMain, fontWeight: 600, lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{ margin: '10px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.5 }}>{phase.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .skills-card:hover,
        .skills-card:focus-visible,
        .skills-card:focus-within,
        .skills-card:active {
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
          .skills-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .skills-table-header {
          display: grid;
          grid-template-columns: minmax(140px, 1fr) minmax(140px, 1.2fr) minmax(130px, 1.1fr) minmax(160px, 1.3fr) minmax(140px, 1.1fr);
          gap: 8px;
          padding: 12px 10px;
          background: rgba(148,163,184,0.10);
          font-size: ${fs.labelLg};
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${muted};
          font-weight: 700;
          border-bottom: 1px solid rgba(148,163,184,0.14);
        }
        .skills-table-row {
          display: grid;
          grid-template-columns: minmax(140px, 1fr) minmax(140px, 1.2fr) minmax(130px, 1.1fr) minmax(160px, 1.3fr) minmax(140px, 1.1fr);
          gap: 8px;
          align-items: center;
          border-bottom: 1px solid rgba(148,163,184,0.08);
        }
        .skills-table-row:last-child { border-bottom: none; }
        .skills-table-mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .skills-table-header,
          .skills-table-desktop {
            display: none !important;
          }
          .skills-table-mobile {
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

const EyebrowLabel: React.FC<{ children: React.ReactNode; small?: boolean }> = ({ children, small }) => (
  <div
    style={{
      fontSize: small ? fs.labelMd : fs.labelLg,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: muted,
      fontWeight: 700,
      marginBottom: small ? 0 : undefined,
    }}
  >
    {children}
  </div>
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

const ImpactBlock: React.FC<{ label: string; color: string; text: string }> = ({ label, color, text }) => (
  <div>
    <div
      style={{
        fontSize: fs.label,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color,
        fontWeight: 700,
        marginBottom: 6,
      }}
    >
      {label}
    </div>
    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{text}</p>
  </div>
);

const MapMobileItem: React.FC<{ label: string; text: string }> = ({ label, text }) => (
  <div>
    <div style={{ fontSize: fs.label, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 4 }}>
      {label}
    </div>
    <div style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>{text}</div>
  </div>
);

export default Skills;
