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
const warnText = '#fef3c7';
const success = '#34d399';

interface Exposure {
  id: string;
  name: string;
  realActivity: string;
  notice: string[];
  workflowConnection: string;
  whatYouLearn: string;
  questions: string[];
  whyMatters: string;
  confidenceBuilt: string;
  mistakes: string[];
  ifIgnored: {
    interview: string;
    job: string;
  };
}

const exposures: Exposure[] = [
  {
    id: '01',
    name: 'Reinforcement Checking Before Concrete',
    realActivity: 'Steel bars are checked against RCC drawings and BBS before concreting.',
    notice: ['Bar diameter', 'Bar spacing', 'Cover blocks', 'Lap length'],
    workflowConnection: 'Before this, drawings and BBS are reviewed. After this, seniors approve corrections or concreting. This activity prevents hidden RCC mistakes.',
    whatYouLearn: 'How reinforcement verification protects structural quality before concrete covers the work.',
    questions: ['Which drawing is used here?', 'How is bar spacing checked?', 'Who approves correction?'],
    whyMatters: 'Wrong steel becomes expensive and dangerous after concrete pouring.',
    confidenceBuilt: 'Confidence to observe and discuss reinforcement checks.',
    mistakes: ['Wrong spacing', 'Missing cover blocks', 'Short lap length', 'Old drawing use'],
    ifIgnored: {
      interview: 'Cannot explain real steel checking.',
      job: 'Misses common reinforcement errors.',
    },
  },
  {
    id: '02',
    name: 'Formwork Line And Support Checking',
    realActivity: 'Shuttering line, level, dimensions, supports, and gaps are checked before concrete.',
    notice: ['Shuttering alignment', 'Side supports', 'Leakage gaps', 'Level difference'],
    workflowConnection: 'Before this, reinforcement and shuttering are placed. After this, corrections are made before pour. This activity protects shape and concrete quality.',
    whatYouLearn: 'How formwork controls slab, beam, and column execution quality.',
    questions: ['What is checked before pour?', 'How are supports verified?', 'What causes shuttering failure?'],
    whyMatters: 'Poor formwork causes honeycombing, bulging, leakage, and rework.',
    confidenceBuilt: 'Confidence to notice visible formwork risks.',
    mistakes: ['Weak supports', 'Loose joints', 'Wrong line', 'Unchecked levels'],
    ifIgnored: {
      interview: 'Weak formwork execution explanation.',
      job: 'Cannot identify shuttering problems.',
    },
  },
  {
    id: '03',
    name: 'Slab Level Checking',
    realActivity: 'Slab levels are checked using benchmarks, auto level, staff readings, and reference points.',
    notice: ['Benchmark location', 'Staff reading', 'Level difference', 'Reading record'],
    workflowConnection: 'Before this, shuttering is fixed. After this, level corrections happen before concreting. This activity controls slab accuracy.',
    whatYouLearn: 'How levels affect slab quality, finishing, drainage, and rework.',
    questions: ['What is the benchmark?', 'What level is acceptable?', 'Who records readings?'],
    whyMatters: 'Wrong levels create finishing problems and site disputes.',
    confidenceBuilt: 'Confidence to follow level-checking discussions.',
    mistakes: ['Wrong benchmark', 'Misread staff', 'No recheck', 'Poor recording'],
    ifIgnored: {
      interview: 'Cannot explain level control.',
      job: 'Fully depends on seniors.',
    },
  },
  {
    id: '04',
    name: 'Concrete Slump And Workability Check',
    realActivity: 'Concrete workability is checked before or during concrete pouring.',
    notice: ['Slump value', 'Water addition', 'Segregation signs', 'Test recording'],
    workflowConnection: 'Before this, concrete arrives or is mixed. After this, placing and vibration happen. This activity checks concrete usability before placement.',
    whatYouLearn: 'How fresh concrete quality affects placing, compaction, and final strength.',
    questions: ['What slump is expected?', 'Who accepts concrete?', 'What if slump fails?'],
    whyMatters: 'Bad workability causes honeycombing, cracks, and poor finish.',
    confidenceBuilt: 'Confidence to observe concrete quality checks.',
    mistakes: ['Extra water', 'Ignored slump', 'Poor recording', 'Segregated concrete'],
    ifIgnored: {
      interview: 'Gives textbook concrete answers only.',
      job: 'Misses pour-day quality issues.',
    },
  },
  {
    id: '05',
    name: 'Concrete Pouring And Vibration',
    realActivity: 'Concrete is placed, compacted, vibrated, leveled, finished, and protected.',
    notice: ['Pour sequence', 'Vibration method', 'Cold joint risk', 'Curing start'],
    workflowConnection: 'Before this, steel, formwork, and slump are checked. After this, finishing and curing start. This activity converts preparation into permanent RCC work.',
    whatYouLearn: 'How concrete execution mistakes become permanent quality defects.',
    questions: ['How is pour sequence decided?', 'Where can cold joints occur?', 'When does curing start?'],
    whyMatters: 'Poor pouring creates defects that cannot be easily corrected later.',
    confidenceBuilt: 'Confidence to understand pour-day site activity.',
    mistakes: ['Poor vibration', 'Delayed concrete', 'No curing plan', 'Uneven placing'],
    ifIgnored: {
      interview: 'Cannot explain concrete execution.',
      job: 'Stands passively during pour work.',
    },
  },
  {
    id: '06',
    name: 'Gridline And Layout Marking',
    realActivity: 'Gridlines, offsets, benchmarks, and layout points are transferred from drawings to site.',
    notice: ['Gridline reference', 'Offset distance', 'Column marking', 'Drawing match'],
    workflowConnection: 'Before this, drawings and reference points are confirmed. After this, excavation, formwork, or column work follows. This activity gives execution starting points.',
    whatYouLearn: 'How drawings become physical site positions.',
    questions: ['Which gridline starts work?', 'How are offsets checked?', 'What if marking shifts?'],
    whyMatters: 'Wrong layout affects columns, walls, slabs, and finishing.',
    confidenceBuilt: 'Confidence to follow layout and marking work.',
    mistakes: ['Wrong gridline', 'Wrong offset', 'Missing benchmark', 'Old drawing use'],
    ifIgnored: {
      interview: 'Weak layout explanation.',
      job: 'Cannot follow site references.',
    },
  },
  {
    id: '07',
    name: 'Drawing Revision And Site Instruction',
    realActivity: 'Site team checks latest drawings, revisions, notes, and instructions before execution.',
    notice: ['Revision number', 'Drawing date', 'Section details', 'Site instruction'],
    workflowConnection: 'Before this, design or coordination changes occur. After this, site execution follows revised information. This activity prevents wrong work from old drawings.',
    whatYouLearn: 'Why latest drawing control matters in RCC execution.',
    questions: ['Is this latest drawing?', 'What changed in revision?', 'Who confirms changes?'],
    whyMatters: 'Using old drawings causes rework, disputes, and execution errors.',
    confidenceBuilt: 'Confidence to ask about drawing version before checking.',
    mistakes: ['Old drawing use', 'Missed revision note', 'Ignored section', 'Guessing from memory'],
    ifIgnored: {
      interview: 'Cannot explain drawing control.',
      job: 'Checks work using wrong reference.',
    },
  },
  {
    id: '08',
    name: 'Daily Progress Recording',
    realActivity: 'Completed work, pending work, quantities, manpower, and site issues are recorded daily.',
    notice: ['Work completed', 'Quantity noted', 'Pending corrections', 'Issue status'],
    workflowConnection: 'Before this, site work is checked. After this, seniors use records for planning and reporting. This activity keeps execution visible.',
    whatYouLearn: 'How daily documentation supports project control and trust.',
    questions: ['What is recorded daily?', 'Who verifies progress?', 'How are issues tracked?'],
    whyMatters: 'Poor records create confusion, delay, and weak reporting.',
    confidenceBuilt: 'Confidence to prepare basic site updates.',
    mistakes: ['Vague entries', 'Missing quantities', 'Late updates', 'No issue status'],
    ifIgnored: {
      interview: 'Weak documentation examples.',
      job: 'Gives unclear daily reports.',
    },
  },
  {
    id: '09',
    name: 'Correction Follow-Up After Inspection',
    realActivity: 'Reported issues are corrected, rechecked, and updated before work moves forward.',
    notice: ['Issue raised', 'Worker correction', 'Recheck done', 'Status updated'],
    workflowConnection: 'Before this, inspection finds mistakes. After this, corrected work gets approved or escalated. This activity closes the execution loop.',
    whatYouLearn: 'How site quality depends on follow-up, not only observation.',
    questions: ['Who corrects this issue?', 'When is it rechecked?', 'How is closure recorded?'],
    whyMatters: 'Unclosed issues create rework, delays, and supervisor distrust.',
    confidenceBuilt: 'Confidence to track simple site corrections.',
    mistakes: ['No recheck', 'Verbal closure only', 'Delayed correction', 'Poor status update'],
    ifIgnored: {
      interview: 'Cannot explain follow-up process.',
      job: 'Reports issues but loses closure.',
    },
  },
  {
    id: '10',
    name: 'Worker Instruction And Site Coordination',
    realActivity: 'Site engineer communicates drawing-based instructions to workers and follows execution status.',
    notice: ['Instruction clarity', 'Drawing reference', 'Worker response', 'Follow-up timing'],
    workflowConnection: 'Before this, work requirement is identified. After this, workers execute and engineers verify. This activity turns instructions into site action.',
    whatYouLearn: 'How communication controls execution quality and speed.',
    questions: ['How are workers instructed?', 'What details are repeated?', 'Who checks completion?'],
    whyMatters: 'Unclear instructions cause wrong work, delay, and repeated corrections.',
    confidenceBuilt: 'Confidence to understand site communication flow.',
    mistakes: ['Vague instruction', 'No drawing reference', 'No follow-up', 'Worker confusion'],
    ifIgnored: {
      interview: 'Weak site coordination explanation.',
      job: 'Struggles communicating basic work.',
    },
  },
];

const whyExists = [
  'Simply visiting a site does not create readiness.',
  'Students must observe what is being checked, measured, corrected, and reported.',
  'Active observation helps students understand real execution flow.',
  'Strong exposure turns site visits into job-readiness practice.',
];

const priorityRows = [
  { exposure: 'Reinforcement Checking Before Concrete', awareness: 'Quality Awareness', importance: 'Very High', interview: 'Very High', job: 'Very High' },
  { exposure: 'Formwork Line And Support Checking', awareness: 'Execution Awareness', importance: 'Very High', interview: 'High', job: 'Very High' },
  { exposure: 'Slab Level Checking', awareness: 'Execution Awareness', importance: 'Very High', interview: 'High', job: 'Very High' },
  { exposure: 'Concrete Slump And Workability Check', awareness: 'Quality Awareness', importance: 'Very High', interview: 'High', job: 'High' },
  { exposure: 'Concrete Pouring And Vibration', awareness: 'Execution Awareness', importance: 'Very High', interview: 'High', job: 'High' },
  { exposure: 'Gridline And Layout Marking', awareness: 'Workflow Awareness', importance: 'High', interview: 'High', job: 'High' },
  { exposure: 'Drawing Revision And Site Instruction', awareness: 'Workflow Awareness', importance: 'High', interview: 'High', job: 'High' },
  { exposure: 'Daily Progress Recording', awareness: 'Communication Awareness', importance: 'High', interview: 'Moderate', job: 'High' },
  { exposure: 'Correction Follow-Up After Inspection', awareness: 'Troubleshooting Awareness', importance: 'High', interview: 'Moderate', job: 'High' },
  { exposure: 'Worker Instruction And Site Coordination', awareness: 'Coordination Awareness', importance: 'High', interview: 'Moderate', job: 'High' },
];

const connectionRows = [
  { exposure: 'Reinforcement Checking', subject: 'RCC Design', skill: 'Steel verification', tool: 'BBS, drawings, tape', workflow: 'Pre-pour inspection', responsibility: 'Reinforcement Verification' },
  { exposure: 'Formwork Checking', subject: 'Building Construction', skill: 'Formwork inspection', tool: 'Drawings, tape', workflow: 'Before concreting', responsibility: 'Formwork and Level Verification' },
  { exposure: 'Slab Level Checking', subject: 'Surveying', skill: 'Level verification', tool: 'Auto level', workflow: 'Slab readiness check', responsibility: 'Formwork and Level Verification' },
  { exposure: 'Slump Check', subject: 'Concrete Technology', skill: 'Quality observation', tool: 'Slump cone', workflow: 'Before concrete placing', responsibility: 'Concrete Execution Monitoring' },
  { exposure: 'Concrete Pouring', subject: 'Concrete Technology', skill: 'Pour monitoring', tool: 'Slump record, drawings', workflow: 'Concreting execution', responsibility: 'Concrete Execution Monitoring' },
  { exposure: 'Layout Marking', subject: 'Surveying', skill: 'Layout checking', tool: 'Auto level, tape, drawings', workflow: 'Execution starting point', responsibility: 'Layout and Survey Verification' },
  { exposure: 'Drawing Revision', subject: 'RCC + Construction', skill: 'Revision checking', tool: 'Site drawing prints', workflow: 'Correct execution reference', responsibility: 'Reinforcement / Layout Verification' },
  { exposure: 'Progress Recording', subject: 'Quantity Surveying', skill: 'Documentation', tool: 'Measurement sheet', workflow: 'Daily execution tracking', responsibility: 'Progress Documentation' },
  { exposure: 'Correction Follow-Up', subject: 'Building Construction', skill: 'Issue tracking', tool: 'Checklist, drawings', workflow: 'Inspection closure', responsibility: 'Progress Documentation' },
  { exposure: 'Worker Coordination', subject: 'Building Construction', skill: 'Basic coordination', tool: 'Drawings, site notes', workflow: 'Instruction to execution', responsibility: 'Site Execution Support' },
];

const wasteList = [
  'Taking photos only',
  'Asking no questions',
  'Watching from distance',
  'Ignoring drawings',
  'Collecting certificate only',
];

const strongList = [
  'What is checked before concrete',
  'Which drawing is used',
  'How mistakes are corrected',
  'How seniors approve work',
  'How progress is recorded',
];

const noticeList = [
  'Whether student understands site sequence',
  'Whether student asks practical questions',
  'Whether student observes mistakes carefully',
  'Whether student connects drawings to work',
  'Whether student reports clearly',
];

const RealExecutionExposure: React.FC = () => {
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
            Site Observation Guide
          </span>
        </div>

        {/* Headline */}
        <h1 className="exposure-headline-gradient" style={{ margin: 0, maxWidth: '30ch' }}>
          Real Execution Exposure Checklist
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          What students should observe during site visits, internships, industrial exposure, practical training, or workplace exposure.
        </p>

        {/* Why This Section Exists */}
        <div className="exposure-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
              {whyExists.map((p, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 10 }}>
                  <span style={{ color: accentTeal, flexShrink: 0 }}>→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exposure cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {exposures.map((exp, idx) => (
            <div key={exp.id} className="exposure-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    {exp.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: textMain, letterSpacing: '-0.01em' }}>
                    {exp.name}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  <div>
                    <EyebrowLabel small>Real Activity Being Observed</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{exp.realActivity}</p>
                  </div>
                  <div className="exposure-mobile-divider" />
                  <div>
                    <EyebrowLabel small>Workflow Connection</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: accentViolet, lineHeight: 1.6 }}>{exp.workflowConnection}</p>
                  </div>
                  <div className="exposure-mobile-divider" />
                  <div>
                    <EyebrowLabel small>What You Learn</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: success, lineHeight: 1.6 }}>{exp.whatYouLearn}</p>
                  </div>
                  <div className="exposure-mobile-divider" />
                  <div>
                    <EyebrowLabel small>Why This Matters</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{exp.whyMatters}</p>
                  </div>
                </div>

                <div
                style={{
                  marginTop: 18,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 14,
                }}
                >
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      What You Should Notice
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {exp.notice.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentTeal, fontWeight: 700, marginBottom: 6 }}>
                      Questions You Should Ask
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {exp.questions.map((p, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: accentTeal }}>?</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      Common Mistakes To Watch
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {exp.mistakes.map((m, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: warnText, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: warn }}>×</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ImpactBlock label="Confidence Built" color={success} text={exp.confidenceBuilt} />
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      If Ignored — Interview
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{exp.ifIgnored.interview}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      If Ignored — Job
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{exp.ifIgnored.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Priority Table */}
        <SectionTitle eyebrow="Priority Analysis" title="Exposure Priority Table" className="exposure-section-title" />
        <div className="exposure-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="priority-table priority-table-desktop" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
            <thead>
              <tr>
                {['Exposure', 'Awareness Built', 'Workplace Importance', 'Interview Value', 'Job Value'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderBottom: '1px solid rgba(255,255,255,0.14)',
                      fontSize: fs.labelLg,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: accentTeal,
                      fontWeight: 700,
                      background: 'rgba(110,231,215,0.06)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {priorityRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ color: textMain, fontWeight: 600 }}>{row.exposure}</td>
                  <td style={{ color: textSoft }}>{row.awareness}</td>
                  <td style={{ color: accentViolet }}>{row.importance}</td>
                  <td style={{ color: accentTeal }}>{row.interview}</td>
                  <td style={{ color: success }}>{row.job}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="priority-table-mobile">
            {priorityRows.map((row, i) => (
              <div key={i} className="ree-pt-card">
                <div className="ree-pt-header">
                  <span className="ree-pt-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ree-pt-title">{row.exposure}</span>
                </div>
                <div className="ree-pt-field">
                  <span className="ree-pt-label">Awareness Built</span>
                  <span className="ree-pt-value">{row.awareness}</span>
                </div>
                <div className="ree-pt-divider" />
                <div className="ree-pt-field">
                  <span className="ree-pt-label">Workplace Importance</span>
                  <span className="ree-pt-value ree-pt-value-violet">{row.importance}</span>
                </div>
                <div className="ree-pt-divider" />
                <div className="ree-pt-field">
                  <span className="ree-pt-label">Interview Value</span>
                  <span className="ree-pt-value ree-pt-value-teal">{row.interview}</span>
                </div>
                <div className="ree-pt-divider" />
                <div className="ree-pt-field">
                  <span className="ree-pt-label">Job Value</span>
                  <span className="ree-pt-value ree-pt-value-success">{row.job}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Table */}
        <SectionTitle eyebrow="Subject Linkage" title="Exposure-To-Work Connection Table" className="exposure-section-title" />
        <div className="exposure-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="connection-table" style={{ minWidth: 760, width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
              <thead>
                <tr>
                  {['Exposure', 'Subject Connection', 'Skill Practiced', 'Tool / Document Seen', 'Workflow Connection', 'Fresher Responsibility Supported'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderBottom: '1px solid rgba(255,255,255,0.14)',
                        fontSize: fs.labelLg,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: accentTeal,
                        fontWeight: 700,
                        background: 'rgba(110,231,215,0.06)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {connectionRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.exposure}</td>
                    <td style={{ padding: '12px 14px', color: textSoft }}>{row.subject}</td>
                    <td style={{ padding: '12px 14px', color: accentTeal }}>{row.skill}</td>
                    <td style={{ padding: '12px 14px', color: textSoft }}>{row.tool}</td>
                    <td style={{ padding: '12px 14px', color: success }}>{row.workflow}</td>
                    <td style={{ padding: '12px 14px', color: accentViolet }}>{row.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Brutal Reality */}
        <SectionTitle eyebrow="Reality Check" title="Brutal Reality" className="exposure-section-title" />
        <div className="exposure-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(245,194,107,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22 }}>
            <div>
              <EyebrowLabel>Students Usually Waste Exposure By</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {wasteList.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: warnText, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Strong Freshers Observe</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {strongList.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: success }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Companies Quickly Notice</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {noticeList.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: success }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exposure-headline-gradient {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .exposure-section-title {
          font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .exposure-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .exposure-card:hover,
        .exposure-card:focus-visible,
        .exposure-card:focus-within,
        .exposure-card:active {
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
          .exposure-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .priority-table th,
        .priority-table td,
        .connection-table th,
        .connection-table td {
          padding: 12px 14px;
        }
        .priority-table tbody tr:hover,
        .connection-table tbody tr:hover {
          background: rgba(110,231,215,0.06);
        }
        @media (max-width: 640px) {
          .priority-table {
            font-size: 11px !important;
          }
          .priority-table th,
          .priority-table td {
            padding: 6px 6px;
            letter-spacing: 0.04em;
          }
          .priority-table th {
            font-size: 9px !important;
          }
        }
        .exposure-mobile-divider {
          display: none;
        }
        @media (max-width: 640px) {
          .exposure-mobile-divider {
            display: block;
            height: 1px;
            width: 100%;
            margin: 14px 0;
            background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.18) 80%, transparent 100%);
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

const SectionTitle: React.FC<{ eyebrow?: string; title: string; className?: string }> = ({
  eyebrow,
  title,
  className,
}) => (
  <div style={{ marginTop: 40, marginBottom: 14 }}>
    {eyebrow && (
      <div style={{ fontSize: fs.eyebrow, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, fontWeight: 700 }}>
        {eyebrow}
      </div>
    )}
    <div
      className={className}
      style={{
        marginTop: eyebrow ? 6 : 0,
        fontSize: className ? undefined : fs.h2,
        fontWeight: className ? undefined : 700,
        color: className ? undefined : '#f8fafc',
        letterSpacing: '-0.01em',
      }}
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

export default RealExecutionExposure;
