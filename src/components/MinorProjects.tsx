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

interface MinorProject {
  id: string;
  name: string;
  alternateNames: string[];
  simulated: string;
  practice: string[];
  subjects: string[];
  skills: string[];
  tools: string[];
  output: string;
  capability: string;
  whyCompaniesValue: string;
  interviewAdvantage: string;
  jobAdvantage: string;
  mistakes: string[];
  afterMiniProjects: string;
  beforeMajorProject: string;
  difficulty: string;
  duration: string;
}

const projects: MinorProject[] = [
  {
    id: '01',
    name: 'RCC Apartment Slab Pre-Pour Inspection Workflow',
    alternateNames: ['Slab Readiness Verification Workflow', 'Pre-Concreting Inspection Workflow', 'RCC Slab Quality Check Workflow'],
    simulated: 'Simulates the complete inspection process before slab concrete pouring.',
    practice: ['Reinforcement checking', 'Cover verification', 'Shuttering inspection', 'Pre-pour documentation'],
    subjects: ['RCC Design', 'Building Construction', 'Concrete Technology'],
    skills: ['RCC Reinforcement Verification', 'Shuttering Inspection', 'Concrete Readiness Verification', 'Quality Observation'],
    tools: ['BBS Sheets', 'Measuring Tape', 'Site Drawing Prints'],
    output: 'Pre-pour inspection checklist with observations and approval-ready report.',
    capability: 'Pre-Pour Inspection Capability',
    whyCompaniesValue: 'Most slab failures originate from mistakes missed before concreting.',
    interviewAdvantage: 'Provides a complete quality-check workflow discussion.',
    jobAdvantage: 'Improves confidence during actual slab preparation activities.',
    mistakes: ['Ignoring cover checks', 'Missing spacing errors', 'Not comparing drawings', 'Weak documentation', 'Skipping re-verification'],
    afterMiniProjects: 'Combines multiple inspection activities into one workflow.',
    beforeMajorProject: 'Focuses on one stage before full slab execution.',
    difficulty: 'Intermediate',
    duration: '3–4 Weeks',
  },
  {
    id: '02',
    name: 'Apartment Floor Layout and Structural Verification Workflow',
    alternateNames: ['Gridline and Structural Check Workflow', 'Layout Verification Workflow', 'Floor Setting-Out Verification Workflow'],
    simulated: 'Simulates floor layout verification before structural execution begins.',
    practice: ['Gridline checking', 'Benchmark verification', 'Dimension verification', 'Drawing comparison'],
    subjects: ['Surveying', 'RCC Design', 'Building Construction'],
    skills: ['Site Layout Verification', 'Structural Verification', 'Measurement Validation', 'Drawing Interpretation'],
    tools: ['Auto Level', 'Measuring Tape', 'Site Drawing Prints'],
    output: 'Verified floor layout report with benchmark and dimension records.',
    capability: 'Layout Verification Capability',
    whyCompaniesValue: 'Wrong layouts create costly rework before structural work starts.',
    interviewAdvantage: 'Demonstrates understanding of layout-to-execution workflow.',
    jobAdvantage: 'Improves performance during site setting-out activities.',
    mistakes: ['Wrong benchmark usage', 'Missing dimension checks', 'Drawing misinterpretation', 'Incorrect measurements', 'Skipping cross-checks'],
    afterMiniProjects: 'Combines layout, surveying, and verification activities together.',
    beforeMajorProject: 'Creates execution foundation before full construction workflow.',
    difficulty: 'Intermediate',
    duration: '4–5 Weeks',
  },
  {
    id: '03',
    name: 'RCC Apartment Floor Progress Monitoring Workflow',
    alternateNames: ['Floor Execution Tracking Workflow', 'Site Progress Documentation Workflow', 'Construction Monitoring Workflow'],
    simulated: 'Simulates daily execution tracking and reporting during floor construction.',
    practice: ['Quantity tracking', 'Progress recording', 'Observation reporting', 'Issue documentation'],
    subjects: ['RCC Design', 'Building Construction', 'Estimation and Costing'],
    skills: ['Quantity Tracking', 'Progress Monitoring', 'Documentation', 'Reporting'],
    tools: ['Site Drawing Prints', 'Measuring Tape', 'Progress Tracking Sheets'],
    output: 'Daily progress report with quantity and execution status records.',
    capability: 'Execution Monitoring Capability',
    whyCompaniesValue: 'Project control depends on accurate progress information.',
    interviewAdvantage: 'Provides real examples of construction monitoring discussions.',
    jobAdvantage: 'Improves reporting and coordination performance.',
    mistakes: ['Incomplete records', 'Wrong quantity entries', 'Delayed reporting', 'Missing observations', 'Weak follow-up'],
    afterMiniProjects: 'Combines observation, documentation, and tracking activities.',
    beforeMajorProject: 'Introduces workflow monitoring before full workflow control.',
    difficulty: 'Intermediate',
    duration: '5–6 Weeks',
  },
];

const progressionSteps = [
  { label: 'Mini Projects', items: ['RCC Reinforcement Inspection Workflow', 'Slab Level Verification Workflow', 'Concrete Quality Observation Workflow', 'Apartment Layout Verification Workflow'] },
  { label: 'Minor Project 1', items: ['RCC Apartment Slab Pre-Pour Inspection Workflow'] },
  { label: 'Minor Project 2', items: ['Apartment Floor Layout and Structural Verification Workflow'] },
  { label: 'Minor Project 3', items: ['RCC Apartment Floor Progress Monitoring Workflow'] },
  { label: 'Major Projects', items: ['RCC Apartment Slab Execution Control Workflow', 'RCC Structural Coordination Workflow', 'Apartment Floor Execution & Concreting Workflow'] },
];

const whyProgressionWorks = [
  'Mini Projects teach individual checks.',
  'Minor Project 1 combines multiple quality checks.',
  'Minor Project 2 combines layout, surveying, and structural verification.',
  'Minor Project 3 adds monitoring and reporting.',
  'Major Projects then combine inspection, monitoring, coordination, documentation, and execution into complete site workflows.',
];

const whyExists = [
  'Mini Projects simulate single activities. Major Projects simulate complete workflows.',
  'Minor Projects bridge the gap by combining multiple related activities into one focused workflow.',
  'They help students practice workflow sequencing before handling full site execution.',
  'They build the habit of connecting checks, documentation, and reporting in one flow.',
  'Companies notice students who can handle multi-step workflows more than single-step tasks.',
];

const MinorProjects: React.FC = () => {
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
            Workflow Bridge
          </span>
        </div>

        {/* Headline */}
        <h1 className="minor-headline-gradient" style={{ margin: 0, maxWidth: '26ch' }}>
          Minor Projects
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          The bridge between single activity simulations and complete execution workflows.
        </p>

        {/* Definition */}
        <div className="minor-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>What Minor Projects Are</EyebrowLabel>
            <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, alignItems: 'center' }}>
              <FlowBox label="Mini Project" sub="Single activity simulation" />
              <ArrowDown />
              <FlowBox label="Minor Project" sub="Multi-activity workflow simulation" active />
              <ArrowDown />
              <FlowBox label="Major Project" sub="Complete execution workflow simulation" />
            </div>
          </div>
        </div>

        {/* Why This Section Exists */}
        <div className="minor-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 22, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 100% 0%, rgba(167,139,250,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Why This Section Exists</EyebrowLabel>
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {whyExists.map((p, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 10 }}>
                  <span style={{ color: accentTeal, flexShrink: 0 }}>→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {projects.map((project, idx) => (
            <div key={project.id} className="minor-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    {project.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {project.name}
                  </div>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: fs.labelLg,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: accentTeal,
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 999,
                      border: '1px solid rgba(110,231,215,0.35)',
                      background: 'rgba(110,231,215,0.08)',
                    }}
                  >
                    {project.capability}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  <div>
                    <EyebrowLabel small>What Real Work It Simulates</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{project.simulated}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Expected Output</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{project.output}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Capability Built</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: success, lineHeight: 1.6 }}>{project.capability}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Why Companies Value It</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: accentTeal, lineHeight: 1.6 }}>{project.whyCompaniesValue}</p>
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
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      What You Practice
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.practice.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      Subjects Used
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.subjects.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      Skills Built
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.skills.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      Tools Used
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.tools.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ImpactBlock label="Interview Advantage" color={accentTeal} text={project.interviewAdvantage} />
                  <ImpactBlock label="Job Advantage" color={accentViolet} text={project.jobAdvantage} />
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      Common Mistakes Students Make
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.mistakes.map((m, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: warn }}>×</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                      Why It Comes After Mini Projects
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.afterMiniProjects}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                      Why It Comes Before the Major Project
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.beforeMajorProject}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      Difficulty Level
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.difficulty}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      Estimated Completion Time
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.duration}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      Alternate Names
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.alternateNames.map((a, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: muted }}>—</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progression Analysis */}
        <SectionTitle eyebrow="Progression Map" title="Minor Project Progression Analysis" />
        <div className="minor-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 0%, rgba(110,231,215,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gap: 18 }}>
              {progressionSteps.map((step, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: fs.labelLg,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: accentTeal,
                      fontWeight: 800,
                      padding: '6px 12px',
                      borderRadius: 999,
                      border: '1px solid rgba(110,231,215,0.35)',
                      background: 'rgba(110,231,215,0.08)',
                      marginBottom: 10,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: 10,
                    }}
                  >
                    {step.items.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(148,163,184,0.14)',
                          borderRadius: 10,
                          padding: '10px 12px',
                          fontSize: fs.body,
                          color: textSoft,
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  {i < progressionSteps.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
                      <span style={{ color: accentTeal, fontSize: fs.h3, fontWeight: 800 }}>↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Progression Works */}
        <div className="minor-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 22, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 100% 100%, rgba(167,139,250,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Why This Progression Works</EyebrowLabel>
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {whyProgressionWorks.map((p, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 10 }}>
                  <span style={{ color: accentTeal, flexShrink: 0 }}>→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .minor-headline-gradient {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .minor-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .minor-card:hover,
        .minor-card:focus-visible,
        .minor-card:focus-within,
        .minor-card:active {
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
          .minor-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
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

const FlowBox: React.FC<{ label: string; sub: string; active?: boolean }> = ({ label, sub, active }) => (
  <div
    style={{
      background: active ? 'rgba(110,231,215,0.10)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${active ? 'rgba(110,231,215,0.45)' : 'rgba(148,163,184,0.14)'}`,
      borderRadius: 12,
      padding: '14px 16px',
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: active ? accentTeal : textMain, fontWeight: 800 }}>
      {label}
    </div>
    <div style={{ marginTop: 4, fontSize: fs.bodySm, color: muted, lineHeight: 1.5 }}>{sub}</div>
  </div>
);

const ArrowDown: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ color: accentTeal, fontSize: fs.h3, fontWeight: 800 }}>↓</span>
  </div>
);

export default MinorProjects;
