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
const accentAmber = '#fbbf24';
const muted = '#94a3b8';
const textMain = '#e5e7eb';
const textSoft = '#cbd5e1';
const warn = '#f87171';
const success = '#34d399';

const involvement = [
  'Reinforcement verification',
  'Formwork checking',
  'Level verification',
  'Concrete monitoring',
  'Site documentation',
];

const mistakesCause = [
  'Rework',
  'Material wastage',
  'Construction delays',
  'Quality issues',
  'Senior intervention',
];

const marketResult = [
  { label: 'Hiring', text: 'Companies prefer lower-risk candidates.' },
  { label: 'Salary', text: 'Higher readiness usually receives better compensation.' },
  { label: 'Opportunities', text: 'Trusted freshers receive more responsibilities.' },
  { label: 'Career Growth', text: 'Reliable performers grow faster because seniors trust them with larger tasks.' },
];

const degreeProves = [
  'Basic engineering education',
  'Exposure to technical subjects',
  'Ability to complete an engineering program',
];

const degreeDoesNotProve = [
  'Verify reinforcement placement',
  'Read structural drawings correctly',
  'Check slab and beam levels',
  'Monitor concrete work',
  'Maintain site records',
  'Coordinate with supervisors and workers',
];

const fresherTypes = [
  { stage: 'Stage 1', type: 'Job-Ready', view: 'Can contribute quickly with limited supervision', interest: 'Very High' },
  { stage: 'Stage 2', type: 'Trainable', view: 'Needs guidance but shows potential', interest: 'Medium to High' },
  { stage: 'Stage 3', type: 'Degree Only', view: 'Requires heavy training and supervision', interest: 'Low' },
];

const jobReadySees = [
  'Site internship experience',
  'RCC drawing exposure',
  'Reinforcement checking practice',
  'Quantity recording experience',
  'Knowledge of site workflow',
];

const jobReadyWhy = [
  'Lower training effort',
  'Faster productivity',
  'Lower supervision requirement',
  'Lower execution risk',
];

const trainableSees = [
  'Good fundamentals',
  'Decent subject knowledge',
  'Positive attitude',
  'Learning willingness',
];

const trainableWhy = [
  'Can be developed internally',
  'Shows learning ability',
  'May become long-term talent',
];

const degreeOnlySees = [
  'Degree certificate',
  'Little practical exposure',
  'No site understanding',
  'Weak execution awareness',
];

const degreeOnlyWhy = [
  'High supervision need',
  'High mistake probability',
  'Slow productivity',
  'Higher business risk',
];

const careerPath = [
  'Junior Site Engineer',
  'Site Engineer',
  'Senior Site Engineer',
  'Project Engineer',
  'Construction Manager',
  'Project Manager',
];

const attitudeCompare = [
  { candidate: 'High Skill + Bad Attitude', preference: 'Lower' },
  { candidate: 'Medium Skill + Strong Learning Attitude', preference: 'Higher' },
];

const attitudeWhy = [
  { label: 'Coachability', text: 'Companies can teach skills more easily than behavior.' },
  { label: 'Learning Attitude', text: 'Construction projects constantly create new situations.' },
  { label: 'Ownership', text: 'Managers prefer people who take responsibility.' },
  { label: 'Reliability', text: 'Reliable employees reduce management effort.' },
];

const compareStudents = {
  studentA: [
    'RCC execution portfolio',
    'Site internship',
    'Mini projects',
    'Drawing exposure',
    'Quantity tracking practice',
    'Construction workflow understanding',
  ],
  studentB: [
    'Same degree',
    'Same college',
    'Same graduation year',
    'No practical exposure',
    'No portfolio',
    'No site experience',
    'Weak execution understanding',
  ],
};

const fearComparison = [
  { factor: 'Salary Cost', fresher: 'Lower', experienced: 'Higher' },
  { factor: 'Training Need', fresher: 'High', experienced: 'Low' },
  { factor: 'Mistake Risk', fresher: 'High', experienced: 'Lower' },
  { factor: 'Output Speed', fresher: 'Slower', experienced: 'Faster' },
  { factor: 'Supervision', fresher: 'High', experienced: 'Low' },
  { factor: 'Trust Level', fresher: 'Limited', experienced: 'Higher' },
  { factor: 'Business Risk', fresher: 'Higher', experienced: 'Lower' },
];

const badHireImpact = [
  { problem: 'Incorrect reinforcement verification', impact: 'Structural rework' },
  { problem: 'Wrong level checking', impact: 'Construction correction work' },
  { problem: 'Drawing interpretation mistakes', impact: 'Execution delays' },
  { problem: 'Poor concrete monitoring', impact: 'Quality problems' },
  { problem: 'Incorrect quantity records', impact: 'Planning and billing errors' },
];

const financialImpact = [
  'Delays',
  'Rework',
  'Productivity loss',
  'Senior time loss',
  'Reputation damage',
  'Future business loss',
];

const notBuying = [
  'A degree certificate',
  'Exam marks alone',
  'Attendance records',
  'Semester completion',
];

const buying = [
  'Drawing understanding',
  'RCC execution awareness',
  'Reinforcement verification ability',
  'Site discipline',
  'Learning speed',
  'Reliability',
  'Problem identification ability',
  'Execution support capability',
];

const finalReflection = [
  'A degree gets you into the race.',
  'It does not win the race.',
  'The market does not hide opportunities from students.',
  'The market filters risk.',
  'Stage 1 students get more opportunities because they are job-ready.',
  'Stage 2 students get opportunities because companies believe they can be trained.',
  'Stage 3 students struggle because companies see high risk and low readiness.',
];

const conclusionShift = [
  'Why is the market unfair?',
  'How can I become the safest and most valuable hiring decision in the room?',
];

const CompaniesHiring: React.FC = () => {
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
            Hiring Mindset
          </span>
        </div>

        {/* Headline */}
        <style>{`
          .hiring-headline-gradient {
            font-family: 'Poppins', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            font-size: clamp(1.9rem, 4.5vw, 3.4rem);
            line-height: 1.05;
            font-weight: 700;
            letter-spacing: -0.02em;
            background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
        <h1 className="hiring-headline-gradient" style={{ margin: 0, maxWidth: '30ch' }}>
          How Companies Actually Think Before Hiring
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          The reality behind jobs, salaries, and opportunities.
        </p>

        {/* Company Side Story */}
        <SectionTitle eyebrow="Perspective" title="The Company's Side of the Story" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 0% 0%, rgba(110,231,215,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel>Most Students Think</EyebrowLabel>
              <p style={{ marginTop: 10, fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
                "I need a job."
              </p>
            </div>
            <div>
              <EyebrowLabel>Most Companies Think</EyebrowLabel>
              <p style={{ marginTop: 10, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                "I need someone who will not create expensive problems."
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel small>Junior Site Engineer Is Involved In</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {involvement.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: accentTeal }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel small>Mistakes In These Activities Can Cause</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {mistakesCause.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 24, display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {marketResult.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 6 }}>
                  {item.label}
                </div>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Companies Don't Hire Degrees */}
        <SectionTitle eyebrow="Eligibility vs. Capability" title="Why Companies Do Not Hire Degrees" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 100% 0%, rgba(167,139,250,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <div>
                <EyebrowLabel>Many Students Think</EyebrowLabel>
                <p style={{ marginTop: 10, fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
                  Degree = Job
                </p>
              </div>
              <div>
                <EyebrowLabel>Companies Think</EyebrowLabel>
                <p style={{ marginTop: 10, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                  Degree = Eligible to Apply
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <div>
                <EyebrowLabel small>What A Degree Proves</EyebrowLabel>
                <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                  {degreeProves.map((item, i) => (
                    <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                      <span style={{ color: success }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <EyebrowLabel small>What A Degree Does Not Prove</EyebrowLabel>
                <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                  {degreeDoesNotProve.map((item, i) => (
                    <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                      <span style={{ color: warn }}>×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={{ marginTop: 22, fontSize: fs.body, color: accentTeal, fontWeight: 600, lineHeight: 1.6, textAlign: 'center' }}>
              Companies hire execution capability, not certificates alone.
            </p>
          </div>
        </div>

        {/* 3 Types of Freshers */}
        <SectionTitle eyebrow="Candidate Segments" title="The 3 Types of Freshers Companies See" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <style>{`
            .stages-table { width: 100%; border-collapse: collapse; }
            .stages-table th, .stages-table td { padding: 12px 14px; text-align: left; vertical-align: top; }
            .stages-table thead th { border-bottom: 1px solid rgba(148,163,184,0.18); letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; background: rgba(110,231,215,0.06); white-space: nowrap; }
            .stages-table tbody tr { border-bottom: 1px solid rgba(148,163,184,0.10); }
            .stages-interest { display: inline-block; padding: 4px 10px; border-radius: 999px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
            @media (max-width: 640px) {
              .stages-table, .stages-table tbody, .stages-table tr, .stages-table td { display: block; width: 100%; }
              .stages-table thead { display: none; }
              .stages-table tbody tr { padding: 14px 4px; border-bottom: 1px solid rgba(148,163,184,0.14); }
              .stages-table td { padding: 6px 0; border: none; }
              .stages-table td::before { content: attr(data-label); display: block; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(110,231,215,0.9); font-weight: 700; margin-bottom: 4px; }
            }
          `}</style>
          <table className="stages-table" style={{ fontSize: fs.body }}>
            <thead>
              <tr>
                {['Stage', 'Student Type', 'Company View', 'Hiring Interest'].map((h) => (
                  <th key={h} style={{ fontSize: fs.labelLg, color: accentTeal }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fresherTypes.map((row, i) => (
                <tr key={i}>
                  <td data-label="Stage" style={{ color: textMain, fontWeight: 600 }}>{row.stage}</td>
                  <td data-label="Student Type" style={{ color: '#f8fafc', fontWeight: 700 }}>{row.type}</td>
                  <td data-label="Company View" style={{ color: textSoft }}>{row.view}</td>
                  <td data-label="Hiring Interest">
                    <span
                      className="stages-interest"
                      style={{
                        fontSize: fs.labelMd,
                        background: i === 0 ? 'rgba(52,211,153,0.12)' : i === 1 ? 'rgba(250,204,21,0.12)' : 'rgba(248,113,113,0.12)',
                        border: `1px solid ${i === 0 ? 'rgba(52,211,153,0.35)' : i === 1 ? 'rgba(250,204,21,0.35)' : 'rgba(248,113,113,0.35)'}`,
                        color: i === 0 ? success : i === 1 ? '#facc15' : warn,
                      }}
                    >
                      {row.interest}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stage Cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <StageCard
            stage="Stage 1"
            title="Job-Ready Student"
            companyThinking="This person can start contributing sooner."
            sees={jobReadySees}
            why={jobReadyWhy}
            logic="A Job-Ready fresher reaches useful productivity faster and consumes less senior engineer time."
            color="teal"
          />
          <StageCard
            stage="Stage 2"
            title="Trainable Student"
            companyThinking="Not ready yet, but can become useful."
            sees={trainableSees}
            why={trainableWhy}
            logic="The company accepts short-term training cost expecting future productivity."
            color="amber"
          />
          <StageCard
            stage="Stage 3"
            title="Degree-Only Student"
            companyThinking="Training requirement is too high."
            sees={degreeOnlySees}
            why={degreeOnlyWhy}
            logic="The training cost may exceed the value created during the initial period."
            color="warn"
          />
        </div>

        {/* High Potential Freshers */}
        <SectionTitle eyebrow="Growth Pipeline" title="Why Companies Love High-Potential Freshers" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
            <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6, maxWidth: '72ch' }}>
              Companies hire for future growth. A Junior Site Engineer can eventually become:
            </p>
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              {careerPath.map((role, i) => (
                <React.Fragment key={i}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 14px',
                      borderRadius: 999,
                      background: i === 0 ? 'rgba(110,231,215,0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${i === 0 ? 'rgba(110,231,215,0.35)' : 'rgba(148,163,184,0.18)'}`,
                      color: i === 0 ? accentTeal : textSoft,
                      fontSize: fs.body,
                      fontWeight: i === 0 ? 700 : 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {role}
                  </span>
                  {i < careerPath.length - 1 && (
                    <span style={{ color: muted, fontSize: fs.body, fontWeight: 700 }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Companies look for people who can grow through these stages.</p>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>A fresher who learns quickly may create value for many years.</p>
              <p style={{ margin: 0, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                The best freshers are not seen as employees. They are seen as future assets.
              </p>
            </div>
          </div>
        </div>

        {/* Attitude Can Beat Skill */}
        <SectionTitle eyebrow="Behavior" title="Attitude Can Beat Skill" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div className="attitude-table-wrap" style={{ marginBottom: 22 }}>
            <table className="attitude-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
              <thead>
                <tr>
                  {['Candidate Profile', 'Hiring Preference'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderBottom: '1px solid rgba(148,163,184,0.18)',
                        fontSize: fs.labelLg,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: accentViolet,
                        fontWeight: 700,
                        background: 'rgba(167,139,250,0.06)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attitudeCompare.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                    <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.candidate}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 999,
                          fontSize: fs.labelMd,
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          background: row.preference === 'Higher' ? 'rgba(52,211,153,0.12)' : 'rgba(248,113,113,0.12)',
                          border: `1px solid ${row.preference === 'Higher' ? 'rgba(52,211,153,0.35)' : 'rgba(248,113,113,0.35)'}`,
                          color: row.preference === 'Higher' ? success : warn,
                        }}
                      >
                        {row.preference}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {attitudeWhy.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 6 }}>
                  {item.label}
                </div>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Some Students See More Opportunities */}
        <SectionTitle eyebrow="Opportunity Gap" title="Why Some Students See More Opportunities" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 0% 100%, rgba(52,211,153,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel>Student A</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {compareStudents.studentA.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: success, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Student B</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {compareStudents.studentB.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 22, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4, textAlign: 'center' }}>
            The company asks: "Who is less risky?"
          </p>
        </div>

        {/* Biggest Hiring Myth */}
        <SectionTitle eyebrow="Reality Check" title="The Biggest Hiring Myth" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel>Student Thinks</EyebrowLabel>
              <p style={{ marginTop: 10, fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
                "I completed my degree. Give me a good job."
              </p>
            </div>
            <div>
              <EyebrowLabel>Company Thinks</EyebrowLabel>
              <p style={{ marginTop: 10, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                "You completed the degree. Good. What can you actually do?"
              </p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <EyebrowLabel small>Companies Evaluate</EyebrowLabel>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Capability', 'Readiness', 'Reliability', 'Practical exposure'].map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: 999,
                    background: 'rgba(167,139,250,0.12)',
                    border: '1px solid rgba(167,139,250,0.35)',
                    color: accentViolet,
                    fontSize: fs.body,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 14, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>
              Not degree completion alone.
            </p>
          </div>
        </div>

        {/* Why Companies Fear Freshers */}
        <SectionTitle eyebrow="Risk Assessment" title="Why Companies Fear Freshers" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="fear-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body, tableLayout: 'fixed' }}>
            <thead>
              <tr>
                {['Factor', 'Fresher', 'Experienced Employee'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderBottom: '1px solid rgba(148,163,184,0.18)',
                      fontSize: fs.labelLg,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: warn,
                      fontWeight: 700,
                      background: 'rgba(248,113,113,0.06)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fearComparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                  <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.factor}</td>
                  <td style={{ padding: '12px 14px', color: '#fecaca', fontWeight: 600 }}>{row.fresher}</td>
                  <td style={{ padding: '12px 14px', color: success, fontWeight: 600 }}>{row.experienced}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ marginTop: 22, fontSize: fs.h3, color: accentAmber, fontWeight: 700, lineHeight: 1.4, textAlign: 'center', fontStyle: 'italic' }}>
            "Paying the salary is easy. Trusting the fresher with real work is the difficult part."
          </p>
        </div>

        {/* What a Bad Hire Costs */}
        <SectionTitle eyebrow="Business Impact" title="What A Bad Hire Costs A Company" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="badhire-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body, tableLayout: 'fixed' }}>
            <thead>
              <tr>
                {['Problem', 'Business Impact'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderBottom: '1px solid rgba(148,163,184,0.18)',
                      fontSize: fs.labelLg,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: warn,
                      fontWeight: 700,
                      background: 'rgba(248,113,113,0.06)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {badHireImpact.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                  <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.problem}</td>
                  <td style={{ padding: '12px 14px', color: '#fecaca', fontWeight: 600 }}>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 22 }}>
            <EyebrowLabel small>Financial Impact</EyebrowLabel>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {financialImpact.map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: 999,
                    background: 'rgba(248,113,113,0.12)',
                    border: '1px solid rgba(248,113,113,0.35)',
                    color: warn,
                    fontSize: fs.body,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What Companies Are Actually Buying */}
        <SectionTitle eyebrow="Value Exchange" title="What Companies Are Actually Buying" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 100% 100%, rgba(167,139,250,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel>Companies Are Not Buying</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {notBuying.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Companies Are Buying</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {buying.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: success }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Harsh Reality */}
        <SectionTitle eyebrow="Market Truth" title="The Harsh Reality About The Job Market" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 16 }}>
                <p style={{ margin: 0, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>The market does not ask:</p>
                <p style={{ margin: '8px 0 0', fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
                  "Who worked hard?"
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 16 }}>
                <p style={{ margin: 0, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>The market asks:</p>
                <p style={{ margin: '8px 0 0', fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                  "Who creates the most value and the least risk?"
                </p>
              </div>
            </div>
            <div style={{ marginTop: 22, display: 'grid', gap: 10 }}>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>
                <span style={{ color: success, fontWeight: 700 }}>A student who can identify reinforcement mistakes before concreting creates value.</span>
              </p>
              <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>
                <span style={{ color: warn, fontWeight: 700 }}>A student who misses obvious site issues creates risk.</span>
              </p>
              <p style={{ margin: 0, fontSize: fs.body, color: accentAmber, fontWeight: 700, lineHeight: 1.6 }}>
                Companies reward value and reduce risk.
              </p>
            </div>
          </div>
        </div>

        {/* Most Important Thing */}
        <SectionTitle eyebrow="The Unspoken Question" title="The Most Important Thing Students Never Hear" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 50%, rgba(110,231,215,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ margin: 0, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>Companies don't think:</p>
            <p style={{ margin: '10px 0 0', fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
              "Does this student deserve a job?"
            </p>
            <p style={{ margin: '18px 0 0', fontSize: fs.body, color: muted, lineHeight: 1.6 }}>Companies think:</p>
            <p style={{ margin: '10px 0 0', fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
              "If we trust this person with our money, projects, clients, deadlines, reputation, and future growth, how confident are we that it will be a good decision?"
            </p>
            <div style={{ marginTop: 24, display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 6 }}>Interviews Differ</div>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>Companies evaluate risk differently.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 6 }}>Salaries Differ</div>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>Companies pay differently based on expected value and trust.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: fs.labelLg, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentViolet, fontWeight: 700, marginBottom: 6 }}>Opportunities Differ</div>
                <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.5 }}>Companies give opportunities to people they believe can handle responsibility.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Conclusion */}
        <SectionTitle eyebrow="Closing" title="Final Conclusion" />
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(110,231,215,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
              {finalReflection.map((item, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 10 }}>
                  <span style={{ color: i === finalReflection.length - 1 ? accentTeal : muted, flexShrink: 0 }}>{i === finalReflection.length - 1 ? '→' : '•'}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24, padding: 18, borderRadius: 14, background: 'rgba(110,231,215,0.06)', border: '1px solid rgba(110,231,215,0.25)' }}>
              <p style={{ margin: 0, fontSize: fs.body, color: muted, lineHeight: 1.6 }}>The students who understand this early stop asking:</p>
              <p style={{ margin: '10px 0 0', fontSize: fs.h3, color: '#f8fafc', fontWeight: 700, lineHeight: 1.4 }}>
                "{conclusionShift[0]}"
              </p>
              <p style={{ margin: '14px 0 0', fontSize: fs.body, color: muted, lineHeight: 1.6 }}>And start asking:</p>
              <p style={{ margin: '10px 0 0', fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.4 }}>
                "{conclusionShift[1]}"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 50% 50%, rgba(110,231,215,0.08), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <p style={{ position: 'relative', zIndex: 1, margin: 0, fontSize: fs.h3, color: accentTeal, fontWeight: 700, lineHeight: 1.5 }}>
            Better preparation creates better opportunities—even if the market rises or falls.
          </p>
        </div>
      </div>

      <style>{`
        .hiring-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .hiring-card:hover,
        .hiring-card:focus-visible,
        .hiring-card:focus-within,
        .hiring-card:active {
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
          .hiring-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .attitude-table td, .attitude-table th { word-break: break-word; }
        .fear-table td, .fear-table th { word-break: break-word; }
        .badhire-table td, .badhire-table th { word-break: break-word; }
        @media (max-width: 640px) {
          .attitude-table { font-size: 12px !important; }
          .attitude-table th, .attitude-table td { padding: 10px 8px !important; }
          .attitude-table th { font-size: 9px !important; letter-spacing: 0.06em !important; white-space: normal !important; }
          .fear-table { font-size: 12px !important; }
          .fear-table th, .fear-table td { padding: 10px 8px !important; }
          .fear-table th { font-size: 9px !important; letter-spacing: 0.06em !important; white-space: normal !important; }
          .badhire-table { font-size: 12px !important; }
          .badhire-table th, .badhire-table td { padding: 10px 8px !important; }
          .badhire-table th { font-size: 9px !important; letter-spacing: 0.06em !important; white-space: normal !important; }
        }
        @media (max-width: 380px) {
          .attitude-table { font-size: 11px !important; }
          .attitude-table th, .attitude-table td { padding: 8px 6px !important; }
          .fear-table { font-size: 11px !important; }
          .fear-table th, .fear-table td { padding: 6px 4px !important; }
          .badhire-table { font-size: 11px !important; }
          .badhire-table th, .badhire-table td { padding: 6px 4px !important; }
        }


      `}</style>
    </div>
  );
};

const StageCard: React.FC<{
  stage: string;
  title: string;
  companyThinking: string;
  sees: string[];
  why: string[];
  logic: string;
  color: 'teal' | 'amber' | 'warn';
}> = ({ stage, title, companyThinking, sees, why, logic, color }) => {
  const colorMap = {
    teal: { accent: accentTeal, bg: 'rgba(110,231,215,0.12)', border: 'rgba(110,231,215,0.35)', soft: 'rgba(110,231,215,0.08)' },
    amber: { accent: '#facc15', bg: 'rgba(250,204,21,0.12)', border: 'rgba(250,204,21,0.35)', soft: 'rgba(250,204,21,0.08)' },
    warn: { accent: warn, bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.35)', soft: 'rgba(248,113,113,0.08)' },
  };
  const c = colorMap[color];

  return (
    <div className="hiring-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(400px 200px at 0% 0%, ${c.soft}, transparent 60%)`,
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
              padding: '4px 10px',
              borderRadius: 999,
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.accent,
              fontSize: fs.labelMd,
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {stage}
          </span>
          <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>{title}</div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <EyebrowLabel small>Company Thinking</EyebrowLabel>
          <p style={{ margin: '8px 0 0', fontSize: fs.body, color: c.accent, fontWeight: 700, lineHeight: 1.5, fontStyle: 'italic' }}>
            "{companyThinking}"
          </p>
        </div>

        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <EyebrowLabel small>Company Sees</EyebrowLabel>
            <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 5 }}>
              {sees.map((item, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                  <span style={{ color: c.accent }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <EyebrowLabel small>Why Companies {color === 'warn' ? 'Avoid' : color === 'teal' ? 'Want Them First' : 'Hire Them'}</EyebrowLabel>
            <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 5 }}>
              {why.map((item, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                  <span style={{ color: c.accent }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 16, padding: 12, borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.12)' }}>
          <EyebrowLabel small>Company Investment Logic</EyebrowLabel>
          <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.55 }}>{logic}</p>
        </div>
      </div>
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

export default CompaniesHiring;
