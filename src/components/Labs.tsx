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
const textSoft = '#cbd5e1';
const warn = '#f5c26b';
const success = '#34d399';

interface Lab {
  id: string;
  name: string;
  simulated: string;
  ownerSubject: string;
  ownerReason: string;
  readiness: string;
  frequency: string;
  exposure: string;
  valuableDuring: string;
  practice: string[];
  build: string;
  capability: string;
  responsibility: string;
  trustImpact: string;
  growthImpact: string;
  tools: string;
  mistakes: string[];
  prevents: string;
  awareness: string;
  matters: string;
  strongUnderstand: string;
  companiesExpect: string[];
  companiesNotExpect: string[];
  interviewAdvantage: string;
  jobAdvantage: string;
  ignoredInterview: string;
  ignoredJob: string;
}

const labs: Lab[] = [
  {
    id: '01',
    name: 'RCC Reinforcement Inspection Lab',
    simulated: 'Checking slab, beam, or column reinforcement before concrete pouring.',
    ownerSubject: 'Reinforced Cement Concrete / RCC Design',
    ownerReason: 'RCC Design explains steel placement, spacing, cover, laps, and detailing.',
    readiness: '28%',
    frequency: 'Daily — RCC apartment sites need repeated reinforcement checks.',
    exposure: 'Very High Exposure',
    valuableDuring: 'Before Internship — Students need steel-checking basics before site visits.',
    practice: ['Bar diameter checking', 'Spacing verification', 'Cover block checking', 'Drawing comparison'],
    build: 'Understanding of how RCC drawing details become actual steel placement on site.',
    capability: 'Reinforcement verification',
    responsibility: 'Makes reinforcement checking easier before slab, beam, and column concreting.',
    trustImpact: 'Seniors trust freshers who check steel using drawings, not guesswork.',
    growthImpact: 'Supports faster movement from observer to inspection support.',
    tools: 'BBS Sheets, Site Drawing Prints, Measuring Tape',
    mistakes: ['Miss bar spacing', 'Ignore cover blocks', 'Confuse bar diameter', 'Forget lap length'],
    prevents: 'Prevents accepting wrong reinforcement before concrete hides the mistake.',
    awareness: 'Before: drawings and BBS are checked. After: senior approval and concreting follow. This activity exists to catch steel errors early.',
    matters: 'Wrong reinforcement is one of the costliest RCC site mistakes.',
    strongUnderstand: 'Steel must match drawing, BBS, spacing, cover, and site condition.',
    companiesExpect: ['Basic steel checking awareness', 'Drawing-to-site comparison', 'Reporting visible mismatches'],
    companiesNotExpect: ['Final structural approval', 'Independent BBS preparation', 'Design correction decisions'],
    interviewAdvantage: 'Shows practical RCC inspection awareness.',
    jobAdvantage: 'Helps catch steel mistakes faster.',
    ignoredInterview: 'Weak reinforcement checking explanation.',
    ignoredJob: 'Misses common steel errors.',
  },
  {
    id: '02',
    name: 'Slab Level & Alignment Practice Lab',
    simulated: 'Checking slab level, alignment, and basic level variation before execution continues.',
    ownerSubject: 'Surveying',
    ownerReason: 'Surveying teaches benchmarks, levels, readings, and alignment control.',
    readiness: '20%',
    frequency: 'Weekly — More common during slab and layout stages.',
    exposure: 'High Exposure',
    valuableDuring: 'During Internship — Students can observe real level checks better.',
    practice: ['Auto level reading', 'Benchmark reference', 'Level recording', 'Alignment checking'],
    build: 'Understanding of how site levels control slab quality and future finishing work.',
    capability: 'Level verification',
    responsibility: 'Improves ability to assist level and slab alignment checks.',
    trustImpact: 'Seniors trust freshers who understand level mismatch basics.',
    growthImpact: 'Gets the fresher included in slab and layout verification work.',
    tools: 'Auto Level, Measuring Tape, Site Drawing Prints',
    mistakes: ['Ignore benchmark', 'Misread staff', 'Record wrong value', 'Forget level difference'],
    prevents: 'Prevents unnoticed slab level mistakes before concrete or finishing.',
    awareness: 'Before: benchmark is fixed. After: correction or approval follows. This activity exists to control slab accuracy.',
    matters: 'Level mistakes create rework, poor finishing, and drainage issues.',
    strongUnderstand: 'Level checking is not optional; it controls execution quality.',
    companiesExpect: ['Basic level awareness', 'Reading support', 'Clear recording'],
    companiesNotExpect: ['Independent survey control', 'Final level approval', 'Complex survey decisions'],
    interviewAdvantage: 'Shows real site level-checking exposure.',
    jobAdvantage: 'Reduces dependency during slab level checks.',
    ignoredInterview: 'Cannot explain level control.',
    ignoredJob: 'Fully depends on seniors.',
  },
  {
    id: '03',
    name: 'Concrete Workability Observation Lab',
    simulated: 'Observing concrete slump, workability, placing, vibration, and curing awareness.',
    ownerSubject: 'Concrete Technology',
    ownerReason: 'Concrete Technology explains fresh concrete behavior and quality risks.',
    readiness: '18%',
    frequency: 'Occasionally — Mainly on concrete pour days.',
    exposure: 'High Exposure',
    valuableDuring: 'Before Placement Interviews — Concrete quality questions are common and practical.',
    practice: ['Slump observation', 'Workability checking', 'Segregation spotting', 'Result recording'],
    build: 'Understanding of why concrete quality must be checked before and during pouring.',
    capability: 'Concrete quality observation',
    responsibility: 'Supports concrete execution monitoring during slab and column pours.',
    trustImpact: 'Seniors trust freshers who notice abnormal concrete behavior.',
    growthImpact: 'Builds readiness for pour-day observation responsibility.',
    tools: 'Slump Cone Test Set, Site Drawing Prints, Record Sheet',
    mistakes: ['Treat slump casually', 'Ignore water addition', 'Miss segregation', 'Skip result recording'],
    prevents: 'Prevents poor workability concrete from being ignored during pouring.',
    awareness: 'Before: concrete arrives or is mixed. After: placing, vibration, and curing follow. This activity protects concrete quality.',
    matters: 'Poor concrete handling creates honeycombing, cracks, and quality complaints.',
    strongUnderstand: 'Slump result matters only when abnormal concrete is reported early.',
    companiesExpect: ['Slump purpose awareness', 'Abnormality reporting', 'Basic result recording'],
    companiesNotExpect: ['Concrete acceptance authority', 'Mix design approval', 'QA engineer replacement'],
    interviewAdvantage: 'Shows practical concrete quality understanding.',
    jobAdvantage: 'Helps observe pour-day problems better.',
    ignoredInterview: 'Gives textbook concrete answers only.',
    ignoredJob: 'Misses concrete quality warning signs.',
  },
  {
    id: '04',
    name: 'Gridline & Benchmark Verification Lab',
    simulated: 'Checking gridlines, benchmarks, offsets, and layout references before site execution.',
    ownerSubject: 'Surveying',
    ownerReason: 'Surveying connects measurements, layout, levels, and site reference control.',
    readiness: '18%',
    frequency: 'Weekly — Layout checks happen stage-wise across floors.',
    exposure: 'High Exposure',
    valuableDuring: 'First 6 Months of Job — Layout confusion is common for new freshers.',
    practice: ['Gridline checking', 'Benchmark locating', 'Offset measurement', 'Drawing comparison'],
    build: 'Understanding of how drawings become physical site lines and execution references.',
    capability: 'Layout verification',
    responsibility: 'Improves layout and survey verification support.',
    trustImpact: 'Seniors trust freshers who understand gridline and benchmark importance.',
    growthImpact: 'Supports involvement in floor layout and execution control.',
    tools: 'Auto Level, Measuring Tape, Site Drawing Prints',
    mistakes: ['Confuse gridlines', 'Ignore benchmark', 'Measure wrong offset', 'Use wrong drawing'],
    prevents: 'Prevents work starting from wrong layout or reference line.',
    awareness: 'Before: drawings and reference points are confirmed. After: marking and execution follow. This activity prevents wrong starting points.',
    matters: 'Wrong layout affects columns, walls, slabs, and finishing.',
    strongUnderstand: 'Small layout errors can damage the whole floor execution.',
    companiesExpect: ['Gridline awareness', 'Basic offset checking', 'Drawing reference use'],
    companiesNotExpect: ['Lead surveyor role', 'Final layout approval', 'Complex instrument control'],
    interviewAdvantage: 'Shows drawing-to-site translation ability.',
    jobAdvantage: 'Reduces confusion during floor layout work.',
    ignoredInterview: 'Weak layout verification explanation.',
    ignoredJob: 'Cannot follow site reference points.',
  },
  {
    id: '05',
    name: 'Site Quantity Documentation Lab',
    simulated: 'Recording daily progress, completed work, basic quantities, and site observations.',
    ownerSubject: 'Estimation and Costing / Quantity Surveying',
    ownerReason: 'Quantity Surveying teaches measurement, quantity logic, and work recording.',
    readiness: '16%',
    frequency: 'Daily — Progress and quantity records are updated regularly.',
    exposure: 'Very High Exposure',
    valuableDuring: 'First 1–3 Years of Job — Reporting discipline affects trust and growth.',
    practice: ['Progress recording', 'Quantity noting', 'Work status writing', 'Observation reporting'],
    build: 'Understanding of how site progress becomes records used by seniors and project teams.',
    capability: 'Progress documentation',
    responsibility: 'Supports construction progress documentation and basic quantity tracking.',
    trustImpact: 'Seniors trust freshers who give clear, usable site records.',
    growthImpact: 'Builds reporting responsibility and daily coordination trust.',
    tools: 'Measurement Sheet, Site Drawing Prints, Measuring Tape',
    mistakes: ['Write vague status', 'Skip quantities', 'Delay records', 'Mix work stages'],
    prevents: 'Prevents unclear progress updates and missing quantity records.',
    awareness: 'Before: site work is checked. After: progress is reported. This activity keeps execution tracking reliable.',
    matters: 'Poor documentation creates confusion, disputes, and weak project control.',
    strongUnderstand: 'Records must be clear enough for seniors to act on.',
    companiesExpect: ['Clear progress entries', 'Basic quantity awareness', 'Timely reporting'],
    companiesNotExpect: ['Final billing ownership', 'Client bill approval', 'Independent cost control'],
    interviewAdvantage: 'Shows reporting and site documentation readiness.',
    jobAdvantage: 'Helps produce useful daily site updates.',
    ignoredInterview: 'Cannot explain progress tracking.',
    ignoredJob: 'Gives vague daily reports.',
  },
];

const priorityRows = [
  { lab: 'RCC Reinforcement Inspection Lab', frequency: 'Daily', importance: 'Critical', impact: 'Very High' },
  { lab: 'Slab Level & Alignment Practice Lab', frequency: 'Weekly', importance: 'Critical', impact: 'High' },
  { lab: 'Concrete Workability Observation Lab', frequency: 'Occasionally', importance: 'Critical', impact: 'High' },
  { lab: 'Gridline & Benchmark Verification Lab', frequency: 'Weekly', importance: 'Important', impact: 'High' },
  { lab: 'Site Quantity Documentation Lab', frequency: 'Daily', importance: 'Important', impact: 'High' },
];

const readinessRows = [
  { lab: 'RCC Reinforcement Inspection Lab', owner: 'RCC Design', contribution: '28%', valuable: 'Before Internship' },
  { lab: 'Slab Level & Alignment Practice Lab', owner: 'Surveying', contribution: '20%', valuable: 'During Internship' },
  { lab: 'Concrete Workability Observation Lab', owner: 'Concrete Technology', contribution: '18%', valuable: 'Before Placement Interviews' },
  { lab: 'Gridline & Benchmark Verification Lab', owner: 'Surveying', contribution: '18%', valuable: 'First 6 Months of Job' },
  { lab: 'Site Quantity Documentation Lab', owner: 'Quantity Surveying', contribution: '16%', valuable: 'First 1–3 Years of Job' },
];

const connectionRows = [
  { lab: 'RCC Reinforcement Inspection Lab', subject: 'RCC Design', capability: 'Reinforcement verification', responsibility: 'Reinforcement Verification' },
  { lab: 'Slab Level & Alignment Practice Lab', subject: 'Surveying', capability: 'Level verification', responsibility: 'Formwork and Level Verification' },
  { lab: 'Concrete Workability Observation Lab', subject: 'Concrete Technology', capability: 'Concrete quality observation', responsibility: 'Concrete Execution Monitoring' },
  { lab: 'Gridline & Benchmark Verification Lab', subject: 'Surveying', capability: 'Layout verification', responsibility: 'Layout and Survey Verification' },
  { lab: 'Site Quantity Documentation Lab', subject: 'Quantity Surveying', capability: 'Progress documentation', responsibility: 'Construction Progress Documentation' },
];

const behaviors = [
  {
    id: '1',
    title: 'Checks Against Reference',
    strong: 'Compares lab output with drawing, benchmark, or standard reference.',
    weak: 'Completes activity without checking the reference.',
    why: 'Real site work depends on correct reference points.',
    impact: 'Reduces wrong checking and false reporting.',
    trust: 'Seniors trust reference-based observations.',
    growth: 'Builds readiness for site verification work.',
  },
  {
    id: '2',
    title: 'Records Clearly',
    strong: 'Writes readings, quantities, and observations clearly.',
    weak: 'Keeps incomplete or vague lab records.',
    why: 'Poor records are useless in real site work.',
    impact: 'Improves reporting accuracy.',
    trust: 'Seniors rely more on clear records.',
    growth: 'Supports documentation responsibility.',
  },
  {
    id: '3',
    title: 'Notices Abnormal Results',
    strong: 'Spots wrong spacing, level mismatch, poor slump, or vague quantity.',
    weak: 'Accepts results without questioning them.',
    why: 'Freshers must catch visible problems early.',
    impact: 'Prevents rework and quality issues.',
    trust: 'Shows useful observation ability.',
    growth: 'Moves student beyond passive observer role.',
  },
  {
    id: '4',
    title: 'Repeats Until Accurate',
    strong: 'Repeats measurement or check when results look doubtful.',
    weak: 'Finishes once and assumes it is correct.',
    why: 'Site checking needs repeat confirmation.',
    impact: 'Reduces careless measurement mistakes.',
    trust: 'Builds confidence in fresher’s checking habit.',
    growth: 'Improves independence in basic checks.',
  },
  {
    id: '5',
    title: 'Explains What Happens Next',
    strong: 'Connects lab activity to the next site step.',
    weak: 'Knows activity but not workflow purpose.',
    why: 'Workflow awareness makes site learning faster.',
    impact: 'Improves execution understanding.',
    trust: 'Seniors see stronger site readiness.',
    growth: 'Supports faster responsibility growth.',
  },
];

const rareCare = [
  'Beautiful lab records',
  'Memorized procedures',
  'Viva-only preparation',
  'Perfect experiment formatting',
  'Copying observation tables',
  'Lab attendance without understanding',
];

const quicklyNotice = [
  'Whether you can check against drawings',
  'Whether you record clearly',
  'Whether you notice wrong readings',
  'Whether you understand why the test exists',
  'Whether you can explain site use',
  'Whether you connect lab to real work',
];

const labsNotStrong = [
  'Labs are useless if done only for marks.',
  'Record writing is not workplace readiness.',
  'Practical exposure must build observation ability.',
  'A lab matters only if connected to site work.',
  'Repeating procedure without thinking creates weak freshers.',
];

const additionalReality = [
  'Site confidence starts with small practical checks.',
  'Lab exposure reduces internship shock.',
  'Poor observation habits carry into first jobs.',
  'Strong freshers ask why results matter.',
  'Weak freshers only finish the activity.',
  'Supervisors trust freshers who record accurately.',
  'Practical familiarity improves learning speed.',
  'Labs should simulate real fresher responsibility.',
];

const whyPoints = [
  'Theory does not make a student site-ready.',
  'Labs help students practice checking, measuring, observing, and recording.',
  'Companies value students who understand real site actions before internships.',
  'Good lab exposure reduces first-site confusion.',
  'These labs connect RCC drawings, levels, concrete, layout, and documentation.',
];

const Labs: React.FC = () => {
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
            Practical Readiness
          </span>
        </div>

        {/* Headline */}
        <h1 className="labs-headline-gradient">
          Hands-On Lab Activities That Build Job Readiness
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Practical activities that help students practice small parts of real fresher responsibilities before entering industry.
        </p>

        {/* Why This Section Exists */}
        <div className="labs-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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

        {/* Lab cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {labs.map((lab, idx) => (
            <div key={lab.id} className="labs-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    {lab.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {lab.name}
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
                    Readiness {lab.readiness}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  {[
                    <div key="sim">
                      <EyebrowLabel small>Real Work Activity Simulated</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{lab.simulated}</p>
                    </div>,
                    <div key="owner">
                      <EyebrowLabel small>Primary Subject Owner</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{lab.ownerSubject}</p>
                    </div>,
                    <div key="ownerReason">
                      <EyebrowLabel small>Why This Subject Owns This Lab</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{lab.ownerReason}</p>
                    </div>,
                    <div key="freq">
                      <EyebrowLabel small>Encounter Frequency</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{lab.frequency}</p>
                    </div>,
                    <div key="exposure">
                      <EyebrowLabel small>Workplace Exposure Level</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{lab.exposure}</p>
                    </div>,
                    <div key="valuable">
                      <EyebrowLabel small>Most Valuable During</EyebrowLabel>
                      <p style={{ margin: '8px 0 0', fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{lab.valuableDuring}</p>
                    </div>,
                  ].map((child, i, arr) => (
                    <React.Fragment key={`top-${i}`}>
                      {child}
                      {i !== arr.length - 1 && <div className="labs-mobile-divider" />}
                    </React.Fragment>
                  ))}
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
                  {[
                    <div key="practice">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                        What You Practice
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                        {lab.practice.map((p, i) => (
                          <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                            <span style={{ color: accentTeal }}>•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>,
                    <ImpactBlock key="build" label="What You Build" color={accentViolet} text={lab.build} />,
                    <ImpactBlock key="capability" label="Capability Built" color={success} text={lab.capability} />,
                    <ImpactBlock key="responsibility" label="Fresher Responsibility Supported" color={accentTeal} text={lab.responsibility} />,
                    <ImpactBlock key="trustImpact" label="Trust Impact" color={success} text={lab.trustImpact} />,
                    <ImpactBlock key="growthImpact" label="Growth Impact" color={accentTeal} text={lab.growthImpact} />,
                    <ImpactBlock key="tools" label="Tools Used" color={accentViolet} text={lab.tools} />,
                    <div key="mistakes">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                        Common Mistakes Students Make
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                        {lab.mistakes.map((m, i) => (
                          <li key={i} style={{ fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                            <span style={{ color: warn }}>×</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>,
                    <ImpactBlock key="prevents" label="Workplace Mistake This Lab Prevents" color={warn} text={lab.prevents} />,
                    <ImpactBlock key="awareness" label="Execution Awareness Gained" color={muted} text={lab.awareness} />,
                    <ImpactBlock key="matters" label="Why This Lab Matters" color={accentTeal} text={lab.matters} />,
                    <ImpactBlock key="strongUnderstand" label="What Strong Freshers Understand" color={success} text={lab.strongUnderstand} />,
                    <div key="expect">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                        Companies DO Expect
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                        {lab.companiesExpect.map((c, i) => (
                          <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                            <span style={{ color: success }}>✓</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>,
                    <div key="notExpect">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                        Companies DO NOT Expect
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                        {lab.companiesNotExpect.map((c, i) => (
                          <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                            <span style={{ color: muted }}>—</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>,
                    <ImpactBlock key="interview" label="Interview Advantage" color={accentTeal} text={lab.interviewAdvantage} />,
                    <ImpactBlock key="job" label="Job Advantage" color={accentViolet} text={lab.jobAdvantage} />,
                    <div key="ignoredInterview">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                        If Ignored — Interview
                      </div>
                      <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{lab.ignoredInterview}</p>
                    </div>,
                    <div key="ignoredJob">
                      <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                        If Ignored — Job
                      </div>
                      <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{lab.ignoredJob}</p>
                    </div>,
                  ].map((child, i, arr) => (
                    <React.Fragment key={`bottom-${i}`}>
                      {child}
                      {i !== arr.length - 1 && <div className="labs-mobile-divider" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Priority Table */}
        <SectionTitle eyebrow="Priority Map" title="Lab Priority Table" />
        <div className="labs-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="labs-table-header labs-priority-cols">
            <div>Lab</div>
            <div>Exposure Frequency</div>
            <div>Workplace Importance</div>
            <div>Readiness Impact</div>
          </div>
          <div className="labs-table-desktop">
            {priorityRows.map((row, i) => (
              <div
                key={i}
                className="labs-table-row labs-priority-cols"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.lab}</div>
                <div style={{ color: textSoft }}>{row.frequency}</div>
                <div style={{ color: textSoft }}>{row.importance}</div>
                <div style={{ color: textSoft }}>{row.impact}</div>
              </div>
            ))}
          </div>
          <div className="labs-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {priorityRows.map((row, i) => (
              <div key={i} style={mobileCardStyle}>
                <div style={mobileTitle}>{row.lab}</div>
                <MapMobileItem label="Exposure Frequency" text={row.frequency} />
                <MapMobileItem label="Workplace Importance" text={row.importance} />
                <MapMobileItem label="Readiness Impact" text={row.impact} />
              </div>
            ))}
          </div>
        </div>

        {/* Lab Readiness Contribution Table */}
        <SectionTitle eyebrow="Readiness Contribution" title="Lab Readiness Contribution Table" />
        <div className="labs-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="labs-table-header labs-readiness-cols">
            <div>Lab</div>
            <div>Primary Subject Owner</div>
            <div>Readiness Contribution</div>
            <div>Most Valuable During</div>
          </div>
          <div className="labs-table-desktop">
            {readinessRows.map((row, i) => (
              <div
                key={i}
                className="labs-table-row labs-readiness-cols"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.lab}</div>
                <div style={{ color: textSoft }}>{row.owner}</div>
                <div style={{ color: success, fontWeight: 700 }}>{row.contribution}</div>
                <div style={{ color: textSoft }}>{row.valuable}</div>
              </div>
            ))}
          </div>
          <div className="labs-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {readinessRows.map((row, i) => (
              <div key={i} style={mobileCardStyle}>
                <div style={mobileTitle}>{row.lab}</div>
                <MapMobileItem label="Primary Subject Owner" text={row.owner} />
                <MapMobileItem label="Readiness Contribution" text={row.contribution} />
                <MapMobileItem label="Most Valuable During" text={row.valuable} />
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(148,163,184,0.12)', fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700 }}>
            Total Readiness Contribution = 100%
          </div>
        </div>

        {/* Lab-to-Work Connection Table */}
        <SectionTitle eyebrow="Connection Map" title="Lab-To-Work Connection Table" />
        <div className="labs-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="labs-table-header labs-connection-cols">
            <div>Lab Activity</div>
            <div>Subject Connection</div>
            <div>Workplace Capability Built</div>
            <div>Fresher Responsibility Supported</div>
          </div>
          <div className="labs-table-desktop">
            {connectionRows.map((row, i) => (
              <div
                key={i}
                className="labs-table-row labs-connection-cols"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.lab}</div>
                <div style={{ color: textSoft }}>{row.subject}</div>
                <div style={{ color: textSoft }}>{row.capability}</div>
                <div style={{ color: textSoft }}>{row.responsibility}</div>
              </div>
            ))}
          </div>
          <div className="labs-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {connectionRows.map((row, i) => (
              <div key={i} style={mobileCardStyle}>
                <div style={mobileTitle}>{row.lab}</div>
                <MapMobileItem label="Subject Connection" text={row.subject} />
                <MapMobileItem label="Workplace Capability Built" text={row.capability} />
                <MapMobileItem label="Fresher Responsibility Supported" text={row.responsibility} />
              </div>
            ))}
          </div>
        </div>

        {/* Behaviors */}
        <SectionTitle eyebrow="Behavior Map" title="The 5 Most Important Lab Behaviors" />
        <div style={{ display: 'grid', gap: 18 }}>
          {behaviors.map((b, i) => (
            <div key={i} className="labs-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    <EyebrowLabel small>Workplace Impact</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{b.impact}</p>
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
        <div className="labs-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 40, position: 'relative', overflow: 'hidden' }}>
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
                Labs Do NOT Create Strong Freshers
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {labsNotStrong.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn, flexShrink: 0 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(148,163,184,0.12)' }}>
              <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 10 }}>
                Additional Reality
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
                {additionalReality.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.5, display: 'flex', gap: 8 }}>
                    <span style={{ color: accentViolet, flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .labs-headline-gradient {
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
        .labs-section-title {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.1;
          background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .labs-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .labs-card:hover,
        .labs-card:focus-visible,
        .labs-card:focus-within,
        .labs-card:active {
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
          .labs-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .labs-table-header {
          display: grid;
          gap: 8px;
          padding: 12px 10px;
          background: rgba(255,255,255,0.05);
          font-size: ${fs.labelLg};
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${muted};
          font-weight: 700;
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }
        .labs-table-row {
          display: grid;
          gap: 8px;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 220ms ease;
        }
        .labs-table-row:last-child { border-bottom: none; }
        .labs-table-row:hover { background: rgba(110,231,215,0.06); }
        .labs-priority-cols { grid-template-columns: minmax(180px, 1.6fr) minmax(130px, 1fr) minmax(140px, 1fr) minmax(130px, 1fr); }
        .labs-readiness-cols { grid-template-columns: minmax(200px, 1.6fr) minmax(160px, 1.2fr) minmax(140px, 1fr) minmax(180px, 1.3fr); }
        .labs-connection-cols { grid-template-columns: minmax(200px, 1.6fr) minmax(160px, 1.2fr) minmax(200px, 1.4fr) minmax(200px, 1.4fr); }
        .labs-table-desktop { display: grid; }
        .labs-table-mobile { display: none; }
        @media (max-width: 860px) {
          .labs-table-header,
          .labs-table-desktop { display: none !important; }
          .labs-table-mobile { display: grid !important; }
        }
        .labs-mobile-divider {
          display: none;
        }
        @media (max-width: 640px) {
          .labs-mobile-divider {
            display: block;
            height: 1px;
            width: 100%;
            margin: 12px 0;
            background: linear-gradient(90deg, transparent 0%, rgba(148,163,184,0.25) 20%, rgba(148,163,184,0.25) 80%, transparent 100%);
            border: none;
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
    <div
      className="labs-section-title"
      style={{ marginTop: eyebrow ? 6 : 0 }}
    >
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

export default Labs;
