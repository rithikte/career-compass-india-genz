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
const muted = '#9aa4b2';
const textMain = '#e7ecf3';
const textSoft = '#9aa4b2';
const warn = '#f5c26b';
const success = '#34d399';

interface MiniProject {
  id: string;
  name: string;
  simulated: string;
  practice: string[];
  build: string;
  capability: string;
  tools: string;
  mistakes: string[];
  matters: string;
  interviewAdvantage: string;
  jobAdvantage: string;
  companiesExpect: string[];
  companiesNotExpect: string[];
  ignoredInterview: string;
  ignoredJob: string;
}

const projects: MiniProject[] = [
  {
    id: '01',
    name: 'RCC Reinforcement Inspection Workflow',
    simulated: 'Verifying reinforcement placement before slab, beam, or column concreting.',
    practice: ['Drawing interpretation', 'BBS verification', 'Bar spacing inspection', 'Reinforcement reporting'],
    build: 'A complete pre-concreting reinforcement verification workflow from drawing review to inspection reporting.',
    capability: 'Reinforcement verification',
    tools: 'BBS Sheets, Site Drawing Prints, Measuring Tape',
    mistakes: ['Wrong bar spacing', 'Ignored cover blocks', 'Missed lap lengths'],
    matters: 'Reinforcement verification is one of the most frequent fresher site responsibilities.',
    interviewAdvantage: 'Provides practical RCC inspection examples during technical discussions.',
    jobAdvantage: 'Improves ability to identify visible reinforcement issues early.',
    companiesExpect: ['Basic reinforcement verification capability'],
    companiesNotExpect: ['Independent structural approval'],
    ignoredInterview: 'Weak explanation of steel inspection activities.',
    ignoredJob: 'Misses common reinforcement mistakes.',
  },
  {
    id: '02',
    name: 'Slab Level Verification Workflow',
    simulated: 'Checking slab levels and alignment before construction progresses.',
    practice: ['Level measurement', 'Benchmark verification', 'Reading comparison', 'Reporting deviations'],
    build: 'A workflow that verifies slab levels using benchmarks, measurements, and reporting.',
    capability: 'Level verification',
    tools: 'Auto Level, Measuring Tape, Site Drawing Prints',
    mistakes: ['Wrong benchmark usage', 'Reading mistakes', 'Ignored level differences'],
    matters: 'Level errors create rework and execution delays.',
    interviewAdvantage: 'Shows understanding of site level control activities.',
    jobAdvantage: 'Supports formwork and slab verification work.',
    companiesExpect: ['Basic level verification awareness'],
    companiesNotExpect: ['Independent survey authority'],
    ignoredInterview: 'Weak answers on level control.',
    ignoredJob: 'Depends heavily on senior guidance.',
  },
  {
    id: '03',
    name: 'Concrete Quality Observation Workflow',
    simulated: 'Observing concrete quality during concrete placement activities.',
    practice: ['Slump observation', 'Workability assessment', 'Concrete reporting', 'Quality observations'],
    build: 'A workflow connecting concrete arrival, slump observation, reporting, and execution monitoring.',
    capability: 'Concrete monitoring',
    tools: 'Slump Cone Test Set, Site Drawing Prints, Observation Sheet',
    mistakes: ['Ignoring slump results', 'Poor observations', 'Missing abnormalities'],
    matters: 'Concrete quality directly affects structural quality and durability.',
    interviewAdvantage: 'Provides practical examples beyond textbook concrete theory.',
    jobAdvantage: 'Improves observation during concreting operations.',
    companiesExpect: ['Basic concrete quality awareness'],
    companiesNotExpect: ['Mix design approval'],
    ignoredInterview: 'Concrete knowledge remains theoretical.',
    ignoredJob: 'Misses visible quality problems.',
  },
  {
    id: '04',
    name: 'Apartment Layout Verification Workflow',
    simulated: 'Verifying layout references before execution begins.',
    practice: ['Gridline checking', 'Benchmark verification', 'Offset measurement', 'Layout reporting'],
    build: 'A workflow connecting drawings, benchmarks, measurements, and layout verification.',
    capability: 'Layout verification',
    tools: 'Auto Level, Measuring Tape, Site Drawing Prints',
    mistakes: ['Wrong gridline reference', 'Incorrect offsets', 'Drawing mismatch'],
    matters: 'Wrong layouts affect all downstream construction activities.',
    interviewAdvantage: 'Demonstrates drawing-to-site translation understanding.',
    jobAdvantage: 'Improves layout and survey support activities.',
    companiesExpect: ['Basic layout verification capability'],
    companiesNotExpect: ['Final layout approval'],
    ignoredInterview: 'Weak layout verification examples.',
    ignoredJob: 'Struggles following site references.',
  },
  {
    id: '05',
    name: 'Site Progress Documentation Workflow',
    simulated: 'Recording daily site progress and execution status.',
    practice: ['Quantity recording', 'Progress tracking', 'Observation reporting', 'Documentation control'],
    build: 'A workflow converting site observations into structured progress documentation.',
    capability: 'Progress reporting',
    tools: 'Site Drawing Prints, Measuring Tape, Documentation Format',
    mistakes: ['Incomplete records', 'Vague reporting', 'Missing quantities'],
    matters: 'Documentation supports coordination, planning, and execution tracking.',
    interviewAdvantage: 'Provides examples of site reporting responsibilities.',
    jobAdvantage: 'Improves daily reporting quality and supervisor communication.',
    companiesExpect: ['Accurate progress documentation'],
    companiesNotExpect: ['Client billing ownership'],
    ignoredInterview: 'Weak reporting examples.',
    ignoredJob: 'Produces unclear progress updates.',
  },
];

const priorityRows = [
  { project: 'RCC Reinforcement Inspection Workflow', capability: 'Reinforcement Verification', importance: 'Critical', interview: 'Very High', job: 'Very High' },
  { project: 'Slab Level Verification Workflow', capability: 'Level Verification', importance: 'Critical', interview: 'High', job: 'Very High' },
  { project: 'Concrete Quality Observation Workflow', capability: 'Concrete Monitoring', importance: 'Critical', interview: 'High', job: 'High' },
  { project: 'Apartment Layout Verification Workflow', capability: 'Layout Verification', importance: 'Important', interview: 'High', job: 'High' },
  { project: 'Site Progress Documentation Workflow', capability: 'Progress Reporting', importance: 'Important', interview: 'Moderate', job: 'High' },
];

const connectionRows = [
  { project: 'RCC Reinforcement Inspection Workflow', subject: 'RCC Design', skill: 'Steel Verification', tool: 'BBS Sheets', responsibility: 'Reinforcement Verification' },
  { project: 'Slab Level Verification Workflow', subject: 'Surveying', skill: 'Level Checking', tool: 'Auto Level', responsibility: 'Formwork and Level Verification' },
  { project: 'Concrete Quality Observation Workflow', subject: 'Concrete Technology', skill: 'Quality Observation', tool: 'Slump Cone Set', responsibility: 'Concrete Execution Monitoring' },
  { project: 'Apartment Layout Verification Workflow', subject: 'Surveying', skill: 'Layout Checking', tool: 'Auto Level', responsibility: 'Layout and Survey Verification' },
  { project: 'Site Progress Documentation Workflow', subject: 'Quantity Surveying', skill: 'Documentation', tool: 'Site Drawings', responsibility: 'Construction Progress Documentation' },
];

const behaviors = [
  {
    id: '1',
    title: 'Verify Before Accepting',
    strong: 'Checks work against drawings before reporting.',
    weak: 'Accepts site work without verification.',
    why: 'Prevents costly execution mistakes.',
    trust: 'Supervisors trust reported observations.',
    growth: 'Gains verification responsibilities faster.',
  },
  {
    id: '2',
    title: 'Measure Before Concluding',
    strong: 'Uses measurements before making observations.',
    weak: 'Relies on assumptions.',
    why: 'Improves reporting accuracy.',
    trust: 'Reduces incorrect updates.',
    growth: 'Supports independent inspections.',
  },
  {
    id: '3',
    title: 'Record Clearly',
    strong: 'Documents observations immediately.',
    weak: 'Keeps incomplete records.',
    why: 'Supports execution tracking.',
    trust: 'Managers rely on updates.',
    growth: 'Improves reporting ownership.',
  },
  {
    id: '4',
    title: 'Escalate Abnormalities',
    strong: 'Reports deviations quickly.',
    weak: 'Ignores visible problems.',
    why: 'Reduces rework and delays.',
    trust: 'Builds reliability.',
    growth: 'Improves responsibility growth.',
  },
  {
    id: '5',
    title: 'Understand Workflow Sequence',
    strong: 'Knows what happens before and after tasks.',
    weak: 'Focuses only on isolated activities.',
    why: 'Improves execution awareness.',
    trust: 'Requires less supervision.',
    growth: 'Learns site operations faster.',
  },
];

const rareCare = [
  'Fancy project titles',
  'Project presentation quality',
  'Decorative reports',
  'Competition participation',
  'Project complexity alone',
];

const quicklyNotice = [
  'Verification habits',
  'Observation quality',
  'Measurement accuracy',
  'Reporting clarity',
  'Workflow understanding',
];

const projectsNotStrong = [
  'Completing projects is not enough.',
  'Understanding workflow matters more than project files.',
  'Observation quality determines project value.',
  'Reporting ability matters more than presentation quality.',
  'Verification habits create stronger freshers.',
];

const whyPoints = [
  'Academic knowledge explains concepts but does not build execution habits.',
  'Mini workflow simulations allow students to practice checking, verifying, measuring, observing, and reporting.',
  'Companies trust demonstrated capability more than theoretical answers.',
  'Practical exposure reduces internship confusion and improves first-job adaptation.',
  'These projects simulate the same small responsibilities freshers repeatedly perform on RCC apartment sites.',
];

const MiniProjects: React.FC = () => {
  return (
    <div
      style={{
        background:
          'radial-gradient(1200px 600px at 10% -10%, rgba(110,231,215,0.10), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(167,139,250,0.10), transparent 60%), #06080d',
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
            Workflow Simulations
          </span>
        </div>

        {/* Headline */}
        <h1 className="mini-headline-gradient">
          Mini Projects That Build Job Readiness
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Small work simulations that help students practice real fresher responsibilities before entering industry.
        </p>

        {/* Why This Section Exists */}
        <div className="mini-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {whyPoints.map((p, i) => (
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
            <div key={project.id} className="mini-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    <EyebrowLabel small>Real Fresher Responsibility Simulated</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{project.simulated}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>What You Build</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{project.build}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Capability Built</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: success, lineHeight: 1.6 }}>{project.capability}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Tools Used</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{project.tools}</p>
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
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      Common Mistakes Observed
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
                  <ImpactBlock label="Why This Project Matters" color={accentTeal} text={project.matters} />
                  <ImpactBlock label="Interview Advantage" color={accentTeal} text={project.interviewAdvantage} />
                  <ImpactBlock label="Job Advantage" color={accentViolet} text={project.jobAdvantage} />
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                      Companies DO Expect
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.companiesExpect.map((c, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: success }}>✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      Companies DO NOT Expect
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.companiesNotExpect.map((c, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: muted }}>—</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      If Not Done — Interview
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{project.ignoredInterview}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      If Not Done — Job
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{project.ignoredJob}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Project Priority Table */}
        <SectionTitle eyebrow="Priority Map" title="Mini Project Priority Table" />
        <div className="mini-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="mini-table-header mini-priority-cols">
            <div>Mini Project</div>
            <div>Main Capability Built</div>
            <div>Workplace Importance</div>
            <div>Interview Value</div>
            <div>Job Value</div>
          </div>
          <div className="mini-table-desktop">
            {priorityRows.map((row, i) => (
              <div
                key={i}
                className="mini-table-row mini-priority-cols"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.project}</div>
                <div style={{ color: textSoft }}>{row.capability}</div>
                <div style={{ color: textSoft }}>{row.importance}</div>
                <div style={{ color: textSoft }}>{row.interview}</div>
                <div style={{ color: textSoft }}>{row.job}</div>
              </div>
            ))}
          </div>
          <div className="mini-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {priorityRows.map((row, i) => (
              <div key={i} style={mobileCardStyle}>
                <div style={mobileTitle}>{row.project}</div>
                <MapMobileItem label="Main Capability Built" text={row.capability} />
                <MapMobileItem label="Workplace Importance" text={row.importance} />
                <MapMobileItem label="Interview Value" text={row.interview} />
                <MapMobileItem label="Job Value" text={row.job} />
              </div>
            ))}
          </div>
        </div>

        {/* Mini Project-to-Work Connection Table */}
        <SectionTitle eyebrow="Connection Map" title="Mini Project-To-Work Connection Table" />
        <div className="mini-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="mini-table-header mini-connection-cols">
            <div>Mini Project</div>
            <div>Subject Connection</div>
            <div>Skill Practiced</div>
            <div>Tool Used</div>
            <div>Fresher Responsibility Supported</div>
          </div>
          <div className="mini-table-desktop">
            {connectionRows.map((row, i) => (
              <div
                key={i}
                className="mini-table-row mini-connection-cols"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.project}</div>
                <div style={{ color: textSoft }}>{row.subject}</div>
                <div style={{ color: textSoft }}>{row.skill}</div>
                <div style={{ color: textSoft }}>{row.tool}</div>
                <div style={{ color: textSoft }}>{row.responsibility}</div>
              </div>
            ))}
          </div>
          <div className="mini-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {connectionRows.map((row, i) => (
              <div key={i} style={mobileCardStyle}>
                <div style={mobileTitle}>{row.project}</div>
                <MapMobileItem label="Subject Connection" text={row.subject} />
                <MapMobileItem label="Skill Practiced" text={row.skill} />
                <MapMobileItem label="Tool Used" text={row.tool} />
                <MapMobileItem label="Fresher Responsibility Supported" text={row.responsibility} />
              </div>
            ))}
          </div>
        </div>

        {/* Behaviors */}
        <SectionTitle eyebrow="Behavior Map" title="The 5 Most Important Mini Project Behaviors" />
        <div style={{ display: 'grid', gap: 18 }}>
          {behaviors.map((b, i) => (
            <div key={i} className="mini-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: i % 2 === 0
                    ? `radial-gradient(400px 200px at 0% 0%, rgba(110,231,215,0.10), transparent 60%)`
                    : `radial-gradient(400px 200px at 100% 0%, rgba(167,139,250,0.10), transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 30,
                      height: 30,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, rgba(110,231,215,0.18), rgba(167,139,250,0.18))',
                      border: '1px solid rgba(110,231,215,0.35)',
                      color: accentTeal,
                      fontSize: fs.labelLg,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {b.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {b.title}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  <div>
                    <EyebrowLabel small>Strong Fresher Behavior</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: success, lineHeight: 1.6 }}>{b.strong}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Weak Fresher Behavior</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: warn, lineHeight: 1.6 }}>{b.weak}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Why It Matters</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{b.why}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Trust Impact</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{b.trust}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Growth Impact</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{b.growth}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brutal Reality */}
        <div className="mini-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 40, position: 'relative', overflow: 'hidden' }}>
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

            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              <div>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 10 }}>
                  Companies Rarely Care About
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                  {rareCare.map((item, i) => (
                    <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.5, display: 'flex', gap: 8 }}>
                      <span style={{ color: warn, flexShrink: 0 }}>×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 10 }}>
                  Companies Quickly Notice
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                  {quicklyNotice.map((item, i) => (
                    <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.5, display: 'flex', gap: 8 }}>
                      <span style={{ color: success, flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(148,163,184,0.12)' }}>
              <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 10 }}>
                Mini Projects Do NOT Create Strong Freshers Automatically
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {projectsNotStrong.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn, flexShrink: 0 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mini-headline-gradient {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin: 0;
          max-width: 26ch;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mini-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .mini-card:hover,
        .mini-card:focus-visible,
        .mini-card:focus-within,
        .mini-card:active {
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
          .mini-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .mini-table-header {
          display: grid;
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
        .mini-table-row {
          display: grid;
          gap: 8px;
          align-items: center;
          border-bottom: 1px solid rgba(148,163,184,0.08);
        }
        .mini-table-row:last-child { border-bottom: none; }
        .mini-priority-cols { grid-template-columns: minmax(180px, 1.6fr) minmax(130px, 1fr) minmax(130px, 1fr) minmax(110px, 0.9fr) minmax(110px, 0.9fr); }
        .mini-connection-cols { grid-template-columns: minmax(180px, 1.6fr) minmax(130px, 1fr) minmax(130px, 1fr) minmax(120px, 1fr) minmax(180px, 1.3fr); }
        .mini-table-desktop { display: grid; }
        .mini-table-mobile { display: none; }
        @media (max-width: 860px) {
          .mini-table-header,
          .mini-table-desktop { display: none !important; }
          .mini-table-mobile { display: grid !important; }
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

const mobileCardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(148,163,184,0.14)',
  borderRadius: 12,
  padding: 14,
  display: 'grid',
  gap: 10,
};

const mobileTitle: React.CSSProperties = {
  fontSize: fs.labelLg,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: accentTeal,
  fontWeight: 700,
};

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

export default MiniProjects;
