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

interface MajorProject {
  id: string;
  name: string;
  simulated: string;
  practice: string[];
  build: string;
  capability: string;
  understanding: string;
  tools: string[];
  mistakes: string[];
  whyMatters: string;
  interviewAdvantage: string;
  jobAdvantage: string;
  doNotExpect: string[];
  doExpect: string[];
  ifNotDone: {
    interview: string;
    job: string;
  };
}

const projects: MajorProject[] = [
  {
    id: '01',
    name: 'RCC Apartment Slab Execution Control Workflow',
    simulated: 'Complete slab execution workflow from drawing review, reinforcement checking, formwork level verification, concrete pour monitoring, and progress documentation.',
    practice: ['Drawing review', 'Reinforcement checking', 'Formwork verification', 'Concrete monitoring', 'Progress reporting'],
    build: 'A complete slab execution control workflow showing how pre-pour checks, site verification, concrete execution, issue reporting, and documentation connect before slab completion.',
    capability: 'Execution monitoring capability',
    understanding: 'Students understand how slab work moves from drawing approval to steel check, formwork check, concreting, curing, and reporting.',
    tools: ['BBS Sheets', 'Site Drawing Prints', 'Measuring Tape', 'Slump Cone Test Set'],
    mistakes: ['Ignoring drawing revisions', 'Missing steel spacing errors', 'Skipping formwork checks', 'Poor pour-day reporting'],
    whyMatters: 'Slab execution is one of the most repeated RCC apartment workflows freshers observe and support.',
    interviewAdvantage: 'Helps explain full slab execution, not only RCC theory.',
    jobAdvantage: 'Improves readiness for real pre-pour and pour-day site work.',
    doNotExpect: ['Independent slab approval authority.'],
    doExpect: ['Clear slab execution workflow understanding.'],
    ifNotDone: {
      interview: 'Cannot explain complete slab workflow.',
      job: 'Struggles connecting steel, shuttering, concrete, and reporting.',
    },
  },
  {
    id: '02',
    name: 'RCC Structural Coordination Workflow',
    simulated: 'Coordination between drawings, reinforcement, formwork, levels, site teams, corrections, concrete readiness, and senior reporting.',
    practice: ['Drawing coordination', 'Issue tracking', 'Worker follow-up', 'Senior reporting', 'Correction verification'],
    build: 'A structural coordination workflow showing how a fresher tracks site issues, communicates corrections, follows up with workers, and reports readiness to seniors.',
    capability: 'Workflow coordination capability',
    understanding: 'Students understand how RCC execution depends on drawings, workers, supervisors, corrections, rechecking, and approval flow.',
    tools: ['Site Drawing Prints', 'BBS Sheets', 'Measuring Tape', 'Auto Level'],
    mistakes: ['Giving unclear instructions', 'Forgetting correction follow-up', 'Reporting without rechecking', 'Using outdated drawings'],
    whyMatters: 'Freshers often support coordination between site drawings, workers, supervisors, and inspection readiness.',
    interviewAdvantage: 'Shows understanding of real site coordination, not only technical checking.',
    jobAdvantage: 'Improves follow-up, reporting, and correction tracking on site.',
    doNotExpect: ['Leading full RCC site teams.'],
    doExpect: ['Basic coordination and follow-up awareness.'],
    ifNotDone: {
      interview: 'Gives isolated task answers only.',
      job: 'Loses track of corrections and site updates.',
    },
  },
  {
    id: '03',
    name: 'Apartment Floor Execution & Concreting Workflow',
    simulated: 'Complete apartment floor workflow covering layout verification, slab/formwork checks, reinforcement inspection, concrete workability observation, pouring, curing, and documentation.',
    practice: ['Layout checking', 'Level verification', 'Steel inspection', 'Concrete observation', 'Floor progress recording'],
    build: 'A floor-level execution workflow connecting gridlines, levels, reinforcement, concrete quality, curing, and daily documentation into one practical site sequence.',
    capability: 'Floor execution control',
    understanding: 'Students understand how one apartment floor moves from layout reference to RCC execution, concrete completion, curing, and progress tracking.',
    tools: ['Auto Level', 'Measuring Tape', 'Site Drawing Prints', 'Slump Cone Test Set'],
    mistakes: ['Confusing gridlines', 'Ignoring level mismatch', 'Missing concrete issues', 'Writing vague progress updates'],
    whyMatters: 'Apartment floor execution combines the main responsibilities freshers repeatedly encounter in RCC site work.',
    interviewAdvantage: 'Helps discuss complete floor execution using practical examples.',
    jobAdvantage: 'Improves floor-level execution awareness during early site work.',
    doNotExpect: ['Full floor execution ownership.'],
    doExpect: ['Basic floor workflow and reporting awareness.'],
    ifNotDone: {
      interview: 'Cannot connect layout, levels, steel, and concrete.',
      job: 'Understands tasks separately but misses workflow flow.',
    },
  },
];

const whyExists = [
  'Individual tasks are not enough for RCC site readiness.',
  'Freshers must understand how layout, steel, shuttering, concrete, checking, and reporting connect.',
  'Companies value students who can explain workflow, not only isolated activities.',
  'Major projects help students understand execution sequence before first-job pressure.',
];

const priorityRows = [
  {
    project: 'RCC Apartment Slab Execution Control Workflow',
    workflow: 'Slab pre-pour to documentation',
    capability: 'Execution monitoring capability',
    interview: 'Very High',
    job: 'Very High',
  },
  {
    project: 'RCC Structural Coordination Workflow',
    workflow: 'Drawing, correction, follow-up, reporting',
    capability: 'Workflow coordination capability',
    interview: 'High',
    job: 'Very High',
  },
  {
    project: 'Apartment Floor Execution & Concreting Workflow',
    workflow: 'Floor layout to concrete completion',
    capability: 'Floor execution control',
    interview: 'High',
    job: 'High',
  },
];

const connectionRows = [
  {
    project: 'RCC Apartment Slab Execution Control Workflow',
    subject: 'RCC + Concrete Technology',
    skill: 'Slab inspection',
    tool: 'BBS + Slump Cone',
    understanding: 'Slab execution sequence',
    responsibility: 'Reinforcement + Concrete Monitoring',
  },
  {
    project: 'RCC Structural Coordination Workflow',
    subject: 'RCC + Building Construction',
    skill: 'Correction follow-up',
    tool: 'Drawings + Tape',
    understanding: 'RCC coordination flow',
    responsibility: 'Formwork + Progress Reporting',
  },
  {
    project: 'Apartment Floor Execution & Concreting Workflow',
    subject: 'Surveying + RCC + Concrete',
    skill: 'Floor execution checking',
    tool: 'Auto Level + Drawings',
    understanding: 'Floor-to-concrete workflow',
    responsibility: 'Layout + Level + Documentation',
  },
];

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
    id: '1',
    title: 'Tracks Workflow Sequence',
    strong: 'Understands what happens before and after each site stage.',
    weak: 'Treats every task as separate.',
    why: 'Workflow gaps create execution confusion.',
    trust: 'Seniors trust freshers who understand sequence.',
    growth: 'Gets included in larger site discussions.',
  },
  {
    id: '2',
    title: 'Verifies Before Moving Ahead',
    strong: 'Checks drawing, steel, formwork, and level before reporting readiness.',
    weak: 'Assumes work is ready because workers say so.',
    why: 'Unchecked work causes rework after concrete.',
    trust: 'Builds confidence in fresher updates.',
    growth: 'Gets more inspection support responsibility.',
  },
  {
    id: '3',
    title: 'Follows Up Corrections',
    strong: 'Tracks whether reported corrections are actually completed.',
    weak: 'Reports once and forgets follow-up.',
    why: 'Site issues remain open without follow-up.',
    trust: 'Shows reliable coordination behavior.',
    growth: 'Improves responsibility growth.',
  },
  {
    id: '4',
    title: 'Connects Tools To Decisions',
    strong: 'Uses drawings, BBS, tape, level, and slump results correctly.',
    weak: 'Knows tool names but not workflow use.',
    why: 'Tools only matter when linked to site decisions.',
    trust: 'Seniors trust tool-aware freshers faster.',
    growth: 'Becomes useful in multi-stage checking.',
  },
  {
    id: '5',
    title: 'Reports Stage Status Clearly',
    strong: 'Reports what is completed, pending, wrong, and corrected.',
    weak: 'Gives vague updates like “work is going on.”',
    why: 'Clear stage reporting helps seniors act quickly.',
    trust: 'Reduces senior rechecking.',
    growth: 'Builds documentation and coordination responsibility.',
  },
];

const rareCare = [
  'Big project title',
  'Thick project report',
  'Decorative charts',
  'Innovation claims',
  'Copy-paste methodology',
];

const quicklyNotice = [
  'Can you explain execution sequence?',
  'Can you connect drawing to site?',
  'Can you identify stage dependencies?',
  'Can you report pending issues?',
  'Can you explain common site mistakes?',
];

const notAutomatic = [
  'A project without workflow understanding is useless.',
  'Site execution is about connected stages, not isolated tasks.',
  'Report quality matters less than explanation quality.',
  'Major projects must simulate real site flow.',
  'Strong freshers know where mistakes propagate.',
];

const MajorProjects: React.FC = () => {
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
            Execution Workflows
          </span>
        </div>

        {/* Headline */}
        <h1 className="major-headline-gradient" style={{ margin: 0, maxWidth: '30ch' }}>
          Major Projects That Build Job Readiness
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          Larger work simulations that help students understand complete fresher workflows before entering industry.
        </p>

        {/* Why This Section Exists */}
        <div className="major-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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

        {/* Project cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {projects.map((project, idx) => (
            <div key={project.id} className="major-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    <EyebrowLabel small>Real Work Workflow Simulated</EyebrowLabel>
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
                    <EyebrowLabel small>Workflow Understanding Gained</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: accentViolet, lineHeight: 1.6 }}>{project.understanding}</p>
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
                  <ImpactBlock label="Why This Project Matters" color={accentTeal} text={project.whyMatters} />
                  <ImpactBlock label="Interview Advantage" color={accentViolet} text={project.interviewAdvantage} />
                  <ImpactBlock label="Job Advantage" color={success} text={project.jobAdvantage} />
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
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                      Companies DO NOT Expect
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.doNotExpect.map((m, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: warn }}>×</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                      Companies DO Expect
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 4 }}>
                      {project.doExpect.map((m, i) => (
                        <li key={i} style={{ fontSize: fs.bodySm, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                          <span style={{ color: success }}>✓</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      If Not Done — Interview
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.ifNotDone.interview}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, fontWeight: 700, marginBottom: 6 }}>
                      If Not Done — Job
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{project.ifNotDone.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Priority Table */}
        <SectionTitle eyebrow="Priority Analysis" title="Major Project Priority Table" />
        <div className="major-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="priority-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
            <thead>
              <tr>
                {['Major Project', 'Workflow Simulated', 'Capability Built', 'Interview Value', 'Job Value'].map((h) => (
                  <th
                    key={h}
                    className="priority-table-th"
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderBottom: '1px solid rgba(148,163,184,0.18)',
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
                <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                  <td className="priority-table-td" style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.project}</td>
                  <td className="priority-table-td" style={{ padding: '12px 14px', color: textSoft }}>{row.workflow}</td>
                  <td className="priority-table-td" style={{ padding: '12px 14px', color: success }}>{row.capability}</td>
                  <td className="priority-table-td" style={{ padding: '12px 14px', color: accentTeal }}>{row.interview}</td>
                  <td className="priority-table-td" style={{ padding: '12px 14px', color: accentViolet }}>{row.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Connection Table */}
        <SectionTitle eyebrow="Subject Linkage" title="Major Project-To-Work Connection Table" />
        <div className="major-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ minWidth: 720, width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
              <thead>
                <tr>
                  {['Major Project', 'Subject Connection', 'Skill Practiced', 'Tool Used', 'Workflow Understanding Built', 'Fresher Responsibility Supported'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderBottom: '1px solid rgba(148,163,184,0.18)',
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
                  <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                    <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.project}</td>
                    <td style={{ padding: '12px 14px', color: textSoft }}>{row.subject}</td>
                    <td style={{ padding: '12px 14px', color: accentTeal }}>{row.skill}</td>
                    <td style={{ padding: '12px 14px', color: textSoft }}>{row.tool}</td>
                    <td style={{ padding: '12px 14px', color: success }}>{row.understanding}</td>
                    <td style={{ padding: '12px 14px', color: accentViolet }}>{row.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Behaviors */}
        <SectionTitle eyebrow="Workplace Behaviors" title="The 5 Most Important Major Project Behaviors" />
        <div style={{ display: 'grid', gap: 16 }}>
          {behaviors.map((b) => (
            <div key={b.id} className="major-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: 'rgba(110,231,215,0.12)',
                    border: '1px solid rgba(110,231,215,0.35)',
                    color: accentTeal,
                    fontSize: fs.labelLg,
                    fontWeight: 800,
                  }}
                >
                  {b.id}
                </span>
                <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc' }}>{b.title}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                <div>
                  <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: success, fontWeight: 700, marginBottom: 6 }}>
                    Strong Fresher Behavior
                  </div>
                  <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{b.strong}</p>
                </div>
                <div>
                  <div style={{ fontSize: fs.label, letterSpacing: '0.14em', textTransform: 'uppercase', color: warn, fontWeight: 700, marginBottom: 6 }}>
                    Weak Fresher Behavior
                  </div>
                  <p style={{ margin: 0, fontSize: fs.body, color: '#fecaca', lineHeight: 1.6 }}>{b.weak}</p>
                </div>
                <ImpactBlock label="Why It Matters" color={accentTeal} text={b.why} />
                <ImpactBlock label="Trust Impact" color={accentViolet} text={b.trust} />
                <ImpactBlock label="Growth Impact" color={success} text={b.growth} />
              </div>
            </div>
          ))}
        </div>

        {/* Brutal Reality */}
        <SectionTitle eyebrow="Reality Check" title="Brutal Reality" />
        <div className="major-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(248,113,113,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22 }}>
            <div>
              <EyebrowLabel>Companies Rarely Care About</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {rareCare.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Companies Quickly Notice</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {quicklyNotice.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: success }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Major Projects Do NOT Create Strong Freshers Automatically</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {notAutomatic.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>⚠</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .major-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .major-card:hover,
        .major-card:focus-visible,
        .major-card:focus-within,
        .major-card:active {
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
          .major-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .priority-table th,
        .priority-table td {
          white-space: normal;
        }
        @media (max-width: 640px) {
          .priority-table {
            font-size: 11px !important;
          }
          .priority-table-th,
          .priority-table-td {
            padding: 6px 8px !important;
            font-size: 10px !important;
            letter-spacing: 0.06em !important;
            word-break: break-word;
            hyphens: auto;
          }
        }
        @media (max-width: 420px) {
          .priority-table-th,
          .priority-table-td {
            padding: 4px 5px !important;
            font-size: 9px !important;
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

export default MajorProjects;
