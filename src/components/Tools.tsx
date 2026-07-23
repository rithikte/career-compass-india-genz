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

interface Tool {
  id: string;
  name: string;
  alternateNames: string;
  purpose: string;
  whereUsed: string;
  frequency: string;
  strongUnderstand: string;
  capability: string;
  trustImpact: string;
  growthImpact: string;
  mistakes: string[];
  prevents: string;
  companiesExpect: string;
  companiesNotExpect: string;
  authority: string;
  interviewAdvantage: string;
  jobAdvantage: string;
  ignoredInterview: string;
  ignoredJob: string;
  consequence: string;
}

const tools: Tool[] = [
  {
    id: '01',
    name: 'Bar Bending Schedule (BBS) Sheets',
    alternateNames: 'Reinforcement Schedule, Steel Schedule, Rebar Schedule',
    purpose: 'Shows bar diameter, spacing, length, shape, and steel quantity.',
    whereUsed: 'Used during reinforcement checking before slab, beam, column, and footing concreting.',
    frequency: 'Daily — RCC apartment work needs repeated steel checking.',
    strongUnderstand: 'BBS must match drawings and actual reinforcement placement before concrete is poured.',
    capability: 'Reinforcement verification',
    trustImpact: 'Seniors trust freshers who check steel using BBS, not guesswork.',
    growthImpact: 'Gets more slab and beam inspection responsibility.',
    mistakes: [
      'Ignore bar diameter',
      'Miss spacing errors',
      'Confuse lap length',
      'Skip cover check',
      'Use old BBS',
    ],
    prevents: 'Prevents wrong reinforcement placement before concrete hides the mistake.',
    companiesExpect: 'Freshers should read basic bar details and compare with site work.',
    companiesNotExpect: 'Freshers are not expected to prepare final BBS independently.',
    authority: 'Freshers report mismatches; seniors approve corrections.',
    interviewAdvantage: 'Shows real RCC site checking awareness.',
    jobAdvantage: 'Helps verify steel faster and more accurately.',
    ignoredInterview: 'Cannot explain reinforcement checking properly.',
    ignoredJob: 'Misses steel mistakes before concreting.',
    consequence: 'Wrong steel can create rework, delay, and structural quality risk.',
  },
  {
    id: '02',
    name: 'Auto Level',
    alternateNames: 'Dumpy Level, Levelling Instrument, Automatic Level',
    purpose: 'Checks levels, benchmarks, slopes, and height differences on site.',
    whereUsed: 'Used during slab level checks, floor levels, plinth levels, and layout verification.',
    frequency: 'Weekly — More frequent during slab, layout, and finishing stages.',
    strongUnderstand: 'Level readings control slab accuracy, floor finish, drainage, and execution quality.',
    capability: 'Level verification',
    trustImpact: 'Seniors trust freshers who understand benchmark and level mismatch basics.',
    growthImpact: 'Gets included in layout and slab level checking work.',
    mistakes: [
      'Misread staff reading',
      'Ignore benchmark',
      'Record wrong level',
      'Stand without checking',
      'Depend fully on surveyor',
    ],
    prevents: 'Prevents wrong slab levels, uneven floors, and poor slope execution.',
    companiesExpect: 'Freshers should assist, observe, record readings, and understand level purpose.',
    companiesNotExpect: 'Freshers are not expected to lead critical survey work alone.',
    authority: 'Freshers assist level checks; surveyor or senior confirms final levels.',
    interviewAdvantage: 'Shows practical understanding of site levels and benchmarks.',
    jobAdvantage: 'Helps catch level issues before execution moves ahead.',
    ignoredInterview: 'Cannot explain level checking clearly.',
    ignoredJob: 'Fully dependent during layout and slab checks.',
    consequence: 'Level mistakes cause rework, finishing issues, and supervisor distrust.',
  },
  {
    id: '03',
    name: 'Measuring Tape',
    alternateNames: 'Steel Tape, Measurement Tape, Tape Measure',
    purpose: 'Checks basic dimensions, spacing, offsets, and site measurements.',
    whereUsed: 'Used for reinforcement spacing, cover checks, formwork dimensions, room sizes, and layout support.',
    frequency: 'Daily — Basic site checking needs repeated measurement.',
    strongUnderstand: 'Simple measurement catches many site mistakes before they become costly.',
    capability: 'Dimension verification',
    trustImpact: 'Seniors trust freshers who measure instead of assuming.',
    growthImpact: 'Gets more independent basic checking work.',
    mistakes: [
      'Guess without measuring',
      'Measure from wrong point',
      'Ignore units',
      'Read tape incorrectly',
      'Skip repeated checks',
    ],
    prevents: 'Prevents wrong spacing, wrong dimensions, and careless site assumptions.',
    companiesExpect: 'Freshers should measure basic dimensions accurately and report mismatches.',
    companiesNotExpect: 'Freshers are not expected to finalize critical layout decisions alone.',
    authority: 'Freshers measure and report; seniors decide correction.',
    interviewAdvantage: 'Shows practical site-checking mindset.',
    jobAdvantage: 'Helps catch visible mistakes without waiting for seniors.',
    ignoredInterview: 'Sounds theoretical and site-unready.',
    ignoredJob: 'Misses basic dimensional errors.',
    consequence: 'Small measurement mistakes create rework and repeated senior checking.',
  },
  {
    id: '04',
    name: 'Slump Cone Test Set',
    alternateNames: 'Concrete Slump Cone, Workability Cone, Slump Test Apparatus',
    purpose: 'Checks fresh concrete workability before or during concrete pouring.',
    whereUsed: 'Used on concrete pour days for slabs, beams, columns, and other RCC works.',
    frequency: 'Occasionally — Mostly seen during concrete pour days.',
    strongUnderstand: 'Slump shows whether concrete is workable enough for proper placing and compaction.',
    capability: 'Concrete quality observation',
    trustImpact: 'Seniors trust freshers who notice poor concrete behavior early.',
    growthImpact: 'Gets more involvement during pour-day quality observation.',
    mistakes: [
      'Treat slump as formality',
      'Ignore water addition',
      'Miss segregation signs',
      'Forget recording result',
      'Stand away from test',
    ],
    prevents: 'Prevents poor workability concrete from entering critical RCC work unnoticed.',
    companiesExpect: 'Freshers should observe the test, note results, and report abnormal concrete.',
    companiesNotExpect: 'Freshers are not expected to approve concrete acceptance alone.',
    authority: 'Freshers observe and report; seniors or QA decide acceptance.',
    interviewAdvantage: 'Shows real concrete site quality awareness.',
    jobAdvantage: 'Helps identify poor workability before placing concrete.',
    ignoredInterview: 'Weak answer on concrete quality checks.',
    ignoredJob: 'Misses pour-day quality problems.',
    consequence: 'Poor concrete handling can cause honeycombing, cracks, and quality complaints.',
  },
  {
    id: '05',
    name: 'Site Drawing Prints',
    alternateNames: 'RCC Structural Drawings, Good-for-Construction Drawings, Issued-for-Construction Drawings',
    purpose: 'Provides the approved reference for executing and checking site work.',
    whereUsed: 'Used for reinforcement checks, layout reference, formwork dimensions, levels, and site coordination.',
    frequency: 'Daily — Almost every RCC site check starts from drawings.',
    strongUnderstand: 'Current drawing version matters before checking or instructing site work.',
    capability: 'Drawing-to-site translation',
    trustImpact: 'Seniors trust freshers who refer drawings before giving updates.',
    growthImpact: 'Gets more inspection and coordination responsibility.',
    mistakes: [
      'Use old drawing',
      'Miss revision mark',
      'Ignore section details',
      'Read plan only',
      'Guess from memory',
    ],
    prevents: 'Prevents execution based on wrong, outdated, or misunderstood information.',
    companiesExpect: 'Freshers should read basic plans, sections, notes, and revision references.',
    companiesNotExpect: 'Freshers are not expected to approve design changes.',
    authority: 'Freshers follow drawings; seniors handle conflicts and approvals.',
    interviewAdvantage: 'Shows ability to connect classroom knowledge to site work.',
    jobAdvantage: 'Helps check work correctly against approved execution reference.',
    ignoredInterview: 'Cannot explain real site workflow.',
    ignoredJob: 'Checks work without proper reference.',
    consequence: 'Wrong drawing use creates costly rework and serious site confusion.',
  },
];

const connectionRows = [
  { tool: 'BBS Sheets', subject: 'RCC Design', work: 'Checks bars, spacing, laps, and steel quantity', capability: 'Reinforcement verification' },
  { tool: 'Auto Level', subject: 'Surveying', work: 'Checks slab levels, benchmarks, and alignment', capability: 'Level control' },
  { tool: 'Measuring Tape', subject: 'Surveying + Building Construction', work: 'Checks dimensions, spacing, offsets, and formwork', capability: 'Measurement verification' },
  { tool: 'Slump Cone Test Set', subject: 'Concrete Technology', work: 'Observes concrete workability on pour days', capability: 'Concrete quality observation' },
  { tool: 'Site Drawing Prints', subject: 'RCC Design + Building Construction', work: 'Converts drawings into site checking work', capability: 'Drawing-to-site translation' },
];

const behaviors = [
  {
    id: '1',
    title: 'Checks Before Reporting',
    strong: 'Checks drawing, measurement, or reading before giving updates.',
    weak: 'Reports based on worker statements or rough observation.',
    why: 'Wrong updates waste senior time and create site confusion.',
    impact: 'Reduces rework and wrong site decisions.',
    trust: 'Seniors trust verified updates.',
    growth: 'Gets more independent checking responsibility.',
  },
  {
    id: '2',
    title: 'Uses Latest Drawing',
    strong: 'Confirms drawing revision before site checking.',
    weak: 'Uses old drawing or memory.',
    why: 'Old drawings can lead to wrong execution.',
    impact: 'Prevents costly rework and disputes.',
    trust: 'Shows careful site discipline.',
    growth: 'Gets included in coordination work.',
  },
  {
    id: '3',
    title: 'Records Tool Observations Clearly',
    strong: 'Writes level, slump, quantity, or mismatch clearly.',
    weak: 'Gives vague or delayed records.',
    why: 'Site decisions depend on clear records.',
    impact: 'Improves reporting accuracy.',
    trust: 'Seniors rely on fresher updates.',
    growth: 'Gets more documentation responsibility.',
  },
  {
    id: '4',
    title: 'Measures Instead Of Assuming',
    strong: 'Uses tape, level, or drawing reference before confirming.',
    weak: 'Accepts visual judgment too quickly.',
    why: 'Small site mistakes become costly later.',
    impact: 'Reduces hidden errors before concrete.',
    trust: 'Shows reliable verification habit.',
    growth: 'Moves from observer to checker.',
  },
  {
    id: '5',
    title: 'Escalates Abnormal Results',
    strong: 'Reports wrong spacing, level mismatch, or poor slump early.',
    weak: 'Waits until senior notices the issue.',
    why: 'Late escalation causes delay and rework.',
    impact: 'Protects quality and delivery.',
    trust: 'Builds confidence in fresher judgment.',
    growth: 'Gets involved in inspection decisions.',
  },
];

const rareCare = [
  'Knowing tool names only',
  'Watching tool videos',
  'Claiming software certificates',
  'Memorizing instrument definitions',
  'Saying "I know site work"',
  'Carrying drawings without reading them',
  'Writing tool names on resume',
  'Knowing theory without site awareness',
];

const quicklyNotice = [
  'Whether you check latest drawings',
  'Whether you measure before reporting',
  'Whether you record observations clearly',
  'Whether you understand BBS basics',
  'Whether you notice level mismatches',
  'Whether you observe slump properly',
  'Whether you ask before assuming',
  'Whether your updates reduce rechecking',
];

const additionalReality = [
  'Freshers are judged by tool awareness, not mastery.',
  'Seniors expect basic understanding, not expert operation.',
  'Wrong tool use damages trust fast.',
  'Tool confidence improves only through repeated site exposure.',
  'Good records make freshers more reliable.',
  'Poor drawing awareness creates the biggest site mistakes.',
  'Asking early is better than hiding confusion.',
  'Tools support judgment; they do not replace judgment.',
];

const Tools: React.FC = () => {
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
            Site Toolkit
          </span>
        </div>

        {/* Headline */}
        <h1 className="tools-headline-gradient">
          Tools That Decide Fresher Trust
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          The five tools freshers meet most often on RCC sites. Knowing their names is not enough. Companies judge whether freshers use them with understanding.
        </p>

        {/* Intro card */}
        <div className="tools-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
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
            <EyebrowLabel>The 5 Tools Freshers Must Recognize</EyebrowLabel>
            <p style={{ margin: '12px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6, maxWidth: '70ch' }}>
              These tools are selected based on how often they appear in daily site work, how much damage misuse causes, and how strongly they affect early trust and inspection responsibility.
            </p>
          </div>
        </div>

        {/* Tool cards */}
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {tools.map((tool, idx) => (
            <div key={tool.id} className="tools-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    {tool.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    {tool.name}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  {[
                    { label: 'Alternate Names', text: tool.alternateNames, size: fs.body },
                    { label: 'Primary Purpose', text: tool.purpose, size: fs.body },
                    { label: 'Where It Is Used', text: tool.whereUsed, size: fs.bodySm },
                    { label: 'Encounter Frequency', text: tool.frequency, size: fs.bodySm },
                    { label: 'What Strong Freshers Understand', text: tool.strongUnderstand, size: fs.bodySm },
                    { label: 'Capability Supported', text: tool.capability, size: fs.bodySm },
                  ].map((item, i, arr) => (
                    <React.Fragment key={item.label}>
                      <div>
                        <EyebrowLabel small>{item.label}</EyebrowLabel>
                        <p style={{ margin: '8px 0 0', fontSize: item.size, color: textSoft, lineHeight: 1.6 }}>{item.text}</p>
                      </div>
                      {i < arr.length - 1 && <div className="tools-mobile-divider" />}
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
                  <ImpactBlock label="Trust Impact" color={success} text={tool.trustImpact} />
                  <ImpactBlock label="Growth Impact" color={accentTeal} text={tool.growthImpact} />
                  <ImpactBlock label="Common Mistakes" color={warn} text={tool.mistakes.join(' • ')} />
                  <ImpactBlock label="Authority Boundary" color={accentViolet} text={tool.authority} />
                  <div>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: success,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      What Companies Expect
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{tool.companiesExpect}</p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: muted,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      What Companies Do NOT Expect
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{tool.companiesNotExpect}</p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: accentTeal,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      Interview Advantage
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{tool.interviewAdvantage}</p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: accentViolet,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      Job Advantage
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: textSoft, lineHeight: 1.6 }}>{tool.jobAdvantage}</p>
                  </div>
                  <div>
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
                      If Ignored — Interview
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{tool.ignoredInterview}</p>
                  </div>
                  <div>
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
                      If Ignored — Job
                    </div>
                    <p style={{ margin: 0, fontSize: fs.bodySm, color: '#fecaca', lineHeight: 1.6 }}>{tool.ignoredJob}</p>
                  </div>
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
                      Workplace Consequence
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: '#fecaca', lineHeight: 1.6 }}>{tool.consequence}</p>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div
                      style={{
                        fontSize: fs.label,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: accentTeal,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      What Problem This Tool Prevents
                    </div>
                    <p style={{ margin: 0, fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{tool.prevents}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool-to-Work Connection Table */}
        <SectionTitle eyebrow="Connection Map" title="Tool-To-Work Connection Table" />
        <div className="tools-card" tabIndex={0} style={{ ...cardStyle({ padding: 0, overflow: 'hidden' }), position: 'relative' }}>
          <div className="tools-table-header">
            <div>Tool</div>
            <div>Subject Connection</div>
            <div>Real Work Connection</div>
            <div>Capability Supported</div>
          </div>

          <div className="tools-table-desktop" style={{ display: 'grid' }}>
            {connectionRows.map((row, i) => (
              <div
                key={i}
                className="tools-table-row"
                style={{
                  padding: '12px 10px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  fontSize: fs.body,
                  lineHeight: 1.55,
                }}
              >
                <div style={{ color: accentTeal, fontWeight: 700 }}>{row.tool}</div>
                <div style={{ color: textSoft }}>{row.subject}</div>
                <div style={{ color: textSoft }}>{row.work}</div>
                <div style={{ color: textSoft }}>{row.capability}</div>
              </div>
            ))}
          </div>

          <div className="tools-table-mobile" style={{ gap: 10, padding: '0 14px 14px' }}>
            {connectionRows.map((row, i) => (
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
                  {row.tool}
                </div>
                <MapMobileItem label="Subject Connection" text={row.subject} />
                <MapMobileItem label="Real Work Connection" text={row.work} />
                <MapMobileItem label="Capability Supported" text={row.capability} />
              </div>
            ))}
          </div>
        </div>

        {/* The 5 Most Important Tool Behaviors */}
        <SectionTitle eyebrow="Behavior Map" title="The 5 Most Important Tool Behaviors" />
        <div style={{ display: 'grid', gap: 18 }}>
          {behaviors.map((b, i) => (
            <div key={i} className="tools-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
        <div className="tools-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 40, position: 'relative', overflow: 'hidden' }}>
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
                Tools Do NOT Create Strong Freshers
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Tools only help when used with understanding.</li>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Drawing prints are useless if not read properly.</li>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Tape measurement is weak without correct reference points.</li>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Auto level readings mean nothing without benchmark awareness.</li>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>Slump testing matters only when abnormal results are reported.</li>
                <li style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>BBS sheets help only when compared with actual reinforcement.</li>
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
        .tools-headline-gradient {
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
        .tools-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .tools-card:hover,
        .tools-card:focus-visible,
        .tools-card:focus-within,
        .tools-card:active {
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
          .tools-card:active {
            border-color: rgba(110,231,215,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(110,231,215,0.4),
              0 0 22px rgba(110,231,215,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        .tools-table-header {
          display: grid;
          grid-template-columns: minmax(120px, 1fr) minmax(160px, 1.4fr) minmax(180px, 1.5fr) minmax(140px, 1.1fr);
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
        .tools-table-row {
          display: grid;
          grid-template-columns: minmax(120px, 1fr) minmax(160px, 1.4fr) minmax(180px, 1.5fr) minmax(140px, 1.1fr);
          gap: 8px;
          align-items: center;
          border-bottom: 1px solid rgba(148,163,184,0.08);
        }
        .tools-table-row:last-child { border-bottom: none; }
        .tools-table-mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .tools-table-header,
          .tools-table-desktop {
            display: none !important;
          }
          .tools-table-mobile {
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

export default Tools;
