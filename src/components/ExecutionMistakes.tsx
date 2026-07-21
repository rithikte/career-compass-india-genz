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

interface RecoveryRow {
  mistake: string;
  risk: string;
  detected: string;
  responsibility: string;
  consequence: string;
  action: string;
  trustImpact: string;
  whatNotToDo: string;
}

const recoveryRows: RecoveryRow[] = [
  {
    mistake: 'Wrong reinforcement spacing',
    risk: 'HIGH',
    detected: 'Compare BBS, drawing, and site spacing',
    responsibility: 'Verify',
    consequence: 'Weak RCC quality and rework',
    action: 'Inform senior with measurement proof',
    trustImpact: 'Builds checking trust',
    whatNotToDo: 'Do not approve correction alone',
  },
  {
    mistake: 'Missing cover blocks',
    risk: 'HIGH',
    detected: 'Visual check before concreting',
    responsibility: 'Identify',
    consequence: 'Steel exposure and durability issues',
    action: 'Report before concrete pour',
    trustImpact: 'Shows alert inspection habit',
    whatNotToDo: 'Do not ignore as minor',
  },
  {
    mistake: 'Short lap length',
    risk: 'HIGH',
    detected: 'Check bar overlap against drawing/BBS',
    responsibility: 'Verify',
    consequence: 'Unsafe load transfer risk',
    action: 'Mark location and escalate',
    trustImpact: 'Seniors trust careful checking',
    whatNotToDo: 'Do not guess lap length',
  },
  {
    mistake: 'Old drawing used',
    risk: 'HIGH',
    detected: 'Check revision number and drawing date',
    responsibility: 'Recheck',
    consequence: 'Wrong execution and rework',
    action: 'Stop reporting until latest drawing confirmed',
    trustImpact: 'Shows drawing discipline',
    whatNotToDo: 'Do not use memory',
  },
  {
    mistake: 'Weak formwork support',
    risk: 'HIGH',
    detected: 'Observe props, bracing, and alignment',
    responsibility: 'Report',
    consequence: 'Bulging, leakage, safety risk',
    action: 'Escalate before pour starts',
    trustImpact: 'Protects site safety trust',
    whatNotToDo: 'Do not allow pour silently',
  },
  {
    mistake: 'Slab level mismatch',
    risk: 'HIGH',
    detected: 'Auto level reading or benchmark check',
    responsibility: 'Document',
    consequence: 'Uneven slab and finishing problems',
    action: 'Record reading and inform senior',
    trustImpact: 'Shows level awareness',
    whatNotToDo: 'Do not adjust level yourself',
  },
  {
    mistake: 'Poor concrete workability',
    risk: 'HIGH',
    detected: 'Slump result or visible concrete behavior',
    responsibility: 'Report',
    consequence: 'Honeycombing and poor compaction',
    action: 'Report abnormal slump immediately',
    trustImpact: 'Builds pour-day reliability',
    whatNotToDo: 'Do not add water yourself',
  },
  {
    mistake: 'Inadequate vibration',
    risk: 'MODERATE',
    detected: 'Observe vibration gaps during pour',
    responsibility: 'Identify',
    consequence: 'Voids and honeycombing',
    action: 'Inform senior during pour',
    trustImpact: 'Shows active monitoring',
    whatNotToDo: 'Do not instruct blindly',
  },
  {
    mistake: 'Delayed curing',
    risk: 'MODERATE',
    detected: 'Check surface after concrete setting',
    responsibility: 'Record',
    consequence: 'Cracks and weak surface quality',
    action: 'Report curing delay',
    trustImpact: 'Shows quality follow-up',
    whatNotToDo: 'Do not assume curing started',
  },
  {
    mistake: 'Wrong gridline reference',
    risk: 'HIGH',
    detected: 'Compare marking with drawing gridline',
    responsibility: 'Verify',
    consequence: 'Column/wall position error',
    action: 'Escalate before execution continues',
    trustImpact: 'Prevents major layout error',
    whatNotToDo: 'Do not approve marking',
  },
  {
    mistake: 'Vague progress report',
    risk: 'MODERATE',
    detected: 'Daily update lacks quantity/status',
    responsibility: 'Record',
    consequence: 'Planning and reporting confusion',
    action: 'Rewrite with exact status',
    trustImpact: 'Improves reporting trust',
    whatNotToDo: 'Do not write rough updates',
  },
  {
    mistake: 'Correction not rechecked',
    risk: 'MODERATE',
    detected: 'Issue marked closed without inspection',
    responsibility: 'Recheck',
    consequence: 'Same mistake continues',
    action: 'Recheck and update status',
    trustImpact: 'Shows closure discipline',
    whatNotToDo: 'Do not trust verbal closure',
  },
];

interface EscalationRow {
  situation: string;
  escalate: string;
  verify: string;
  record: string;
}

const escalationRows: EscalationRow[] = [
  { situation: 'Major steel spacing mismatch', escalate: 'Yes', verify: 'No', record: 'No' },
  { situation: 'Missing cover before pour', escalate: 'Yes', verify: 'No', record: 'No' },
  { situation: 'Drawing revision doubt', escalate: 'Yes', verify: 'Yes', record: 'No' },
  { situation: 'Slab level variation', escalate: 'No', verify: 'Yes', record: 'No' },
  { situation: 'Weak formwork support', escalate: 'Yes', verify: 'No', record: 'No' },
  { situation: 'Slump outside expected range', escalate: 'Yes', verify: 'No', record: 'No' },
  { situation: 'Minor progress quantity doubt', escalate: 'No', verify: 'Yes', record: 'No' },
  { situation: 'Curing not started', escalate: 'No', verify: 'Yes', record: 'No' },
  { situation: 'Worker says correction completed', escalate: 'No', verify: 'Yes', record: 'No' },
  { situation: 'Daily manpower count update', escalate: 'No', verify: 'No', record: 'Yes' },
];

interface Rule {
  id: string;
  strong: string;
  weak: string;
  why: string;
  impact: string;
}

const rules: Rule[] = [
  {
    id: '01',
    strong: 'Check drawing, BBS, level, or measurement before reporting.',
    weak: 'Report based on guesswork or worker statements.',
    why: 'Wrong reporting creates wrong decisions.',
    impact: 'Helps seniors act on verified information.',
  },
  {
    id: '02',
    strong: 'Escalate high-risk issues before work continues.',
    weak: 'Wait until seniors discover the problem.',
    why: 'Late escalation creates rework and safety risk.',
    impact: 'Prevents mistakes from getting buried in concrete.',
  },
  {
    id: '03',
    strong: 'Document exact location, reading, quantity, and issue status.',
    weak: 'Give vague updates without proof.',
    why: 'Clear records reduce confusion.',
    impact: 'Makes correction tracking easier.',
  },
  {
    id: '04',
    strong: 'Recheck corrections before saying work is complete.',
    weak: 'Accept verbal closure from workers.',
    why: 'Unverified corrections often remain incomplete.',
    impact: 'Prevents repeated site mistakes.',
  },
  {
    id: '05',
    strong: 'Stay inside authority and wait for senior approval.',
    weak: 'Act confident and decide beyond authority.',
    why: 'Wrong authority use creates serious site risk.',
    impact: 'Protects safety, quality, and trust.',
  },
];

const whyExists = [
  'Students usually learn how construction should happen. Real sites show how often work goes wrong.',
  'Strong freshers are not expected to solve everything. They are expected to notice problems early.',
  'Good freshers verify, document, report, escalate, assist, and recheck. They do not act like senior engineers.',
  'Trust grows when seniors know the fresher reports site reality clearly. Hiding, guessing, or approving without authority damages trust fast.',
  'Workplace judgment develops by seeing mistakes, understanding risk, and responding within limits.',
];

const doNotExpect = [
  'Approve reinforcement corrections',
  'Redesign RCC members',
  'Accept concrete independently',
  'Lead critical survey work',
  'Decide formwork safety alone',
  'Handle client disputes',
  'Control budget decisions',
  'Override site engineers',
];

const doExpect = [
  'Notice visible execution mistakes',
  'Check against drawings',
  'Measure before reporting',
  'Record exact observations',
  'Escalate risky issues early',
  'Recheck corrected work',
  'Ask when unsure',
  'Avoid false confidence',
];

const additionalReality = [
  'Silent freshers are risky on RCC sites.',
  'Guesswork damages trust faster than doubt.',
  'Wrong steel errors must be caught early.',
  'Concrete hides many mistakes permanently.',
  'Seniors value clear issue reporting.',
  'Freshers grow faster by closing correction loops.',
  'Authority limits protect freshers and projects.',
  'Good judgment starts with honest reporting.',
];

const ExecutionMistakes: React.FC = () => {
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
              background: warn,
              boxShadow: '0 0 0 4px rgba(248,113,113,0.15)',
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
            Mistake Response Guide
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
            maxWidth: '30ch',
            background: 'linear-gradient(180deg,#ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Common Execution Mistakes & How to Handle Them
        </h1>

        <p style={{ marginTop: 14, fontSize: fs.body, color: muted, maxWidth: '72ch', lineHeight: 1.6 }}>
          The most common workplace problems a fresher may encounter and the correct first response.
        </p>

        {/* Why This Section Exists */}
        <div className="mistake-card" tabIndex={0} style={{ ...cardStyle(), marginTop: 28, position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(500px 240px at 0% 0%, rgba(248,113,113,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <EyebrowLabel>Why This Section Exists</EyebrowLabel>
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {whyExists.map((p, i) => (
                <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.6, display: 'flex', gap: 10 }}>
                  <span style={{ color: warn, flexShrink: 0 }}>→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recovery Table */}
        <SectionTitle eyebrow="Failure Response" title="Common Execution Failure Recovery Table" />
        <div className="mistake-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="recovery-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
            <thead>
              <tr>
                {[
                  'Common Workplace Mistake',
                  'Risk Level',
                  'How It Is Usually Detected',
                  'Fresher Responsibility',
                  'Possible Consequence',
                  'Immediate Action',
                  'Trust Impact',
                  'What NOT To Do',
                ].map((h) => (
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
              {recoveryRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                  <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.mistake}</td>
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
                        background: row.risk === 'HIGH' ? 'rgba(248,113,113,0.12)' : 'rgba(250,204,21,0.12)',
                        border: `1px solid ${row.risk === 'HIGH' ? 'rgba(248,113,113,0.35)' : 'rgba(250,204,21,0.35)'}`,
                        color: row.risk === 'HIGH' ? warn : '#facc15',
                      }}
                    >
                      {row.risk}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', color: textSoft }}>{row.detected}</td>
                  <td style={{ padding: '12px 14px', color: accentTeal, fontWeight: 600 }}>{row.responsibility}</td>
                  <td style={{ padding: '12px 14px', color: textSoft }}>{row.consequence}</td>
                  <td style={{ padding: '12px 14px', color: success, fontWeight: 600 }}>{row.action}</td>
                  <td style={{ padding: '12px 14px', color: textSoft }}>{row.trustImpact}</td>
                  <td style={{ padding: '12px 14px', color: '#fecaca' }}>{row.whatNotToDo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Escalation Judgment Guide */}
        <SectionTitle eyebrow="Decision Framework" title="Escalation Judgment Guide" />
        <div className="mistake-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <table className="escalation-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: fs.body }}>
            <thead>
              <tr>
                {['Situation', 'Escalate Immediately', 'Verify First Then Escalate', 'Record Only'].map((h) => (
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
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {escalationRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.10)' }}>
                  <td style={{ padding: '12px 14px', color: textMain, fontWeight: 600 }}>{row.situation}</td>
                  <td style={{ padding: '12px 14px' }}>{renderCheck(row.escalate)}</td>
                  <td style={{ padding: '12px 14px' }}>{renderCheck(row.verify)}</td>
                  <td style={{ padding: '12px 14px' }}>{renderCheck(row.record)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 Rules */}
        <SectionTitle eyebrow="Behavior Code" title="The 5 Rules Strong Freshers Follow During Problems" />
        <div style={{ marginTop: 28, display: 'grid', gap: 22 }}>
          {rules.map((rule, idx) => (
            <div key={rule.id} className="mistake-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
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
                    {rule.id}
                  </span>
                  <div style={{ fontSize: fs.h3, fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    Rule {parseInt(rule.id, 10)}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                  <div>
                    <EyebrowLabel small>Strong Freshers</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: success, lineHeight: 1.6 }}>{rule.strong}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Weak Freshers</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: '#fecaca', lineHeight: 1.6 }}>{rule.weak}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Why It Matters</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: textSoft, lineHeight: 1.6 }}>{rule.why}</p>
                  </div>
                  <div>
                    <EyebrowLabel small>Mistake Recovery Impact</EyebrowLabel>
                    <p style={{ margin: '8px 0 0', fontSize: fs.body, color: accentTeal, lineHeight: 1.6 }}>{rule.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brutal Reality */}
        <SectionTitle eyebrow="Reality Check" title="Brutal Reality" />
        <div className="mistake-card" tabIndex={0} style={{ ...cardStyle(), position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(600px 300px at 50% 100%, rgba(248,113,113,0.10), transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <EyebrowLabel>Companies Do NOT Expect Freshers To</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {doNotExpect.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: '#fecaca', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: warn }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Companies DO Expect Freshers To</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {doExpect.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: success }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EyebrowLabel>Additional Reality</EyebrowLabel>
              <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
                {additionalReality.map((item, i) => (
                  <li key={i} style={{ fontSize: fs.body, color: textSoft, lineHeight: 1.55, display: 'flex', gap: 8 }}>
                    <span style={{ color: accentViolet }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mistake-card {
          position: relative;
          outline: none;
          transition: border-color 260ms ease, box-shadow 320ms ease, transform 260ms ease;
        }
        .mistake-card:hover,
        .mistake-card:focus-visible,
        .mistake-card:focus-within,
        .mistake-card:active {
          border-color: rgba(248,113,113,0.55) !important;
          box-shadow:
            0 0 0 1px rgba(248,113,113,0.35),
            0 0 18px rgba(248,113,113,0.28),
            0 0 42px rgba(167,139,250,0.22),
            0 1px 0 rgba(255,255,255,0.05) inset,
            0 20px 40px -30px rgba(0,0,0,0.6);
          transform: translateY(-1px);
        }
        @media (hover: none) {
          .mistake-card:active {
            border-color: rgba(248,113,113,0.6) !important;
            box-shadow:
              0 0 0 1px rgba(248,113,113,0.4),
              0 0 22px rgba(248,113,113,0.32),
              0 0 46px rgba(167,139,250,0.26);
          }
        }
        @media (max-width: 640px) {
          .recovery-table th,
          .recovery-table td {
            padding: 6px 6px !important;
            font-size: 11px !important;
            white-space: normal !important;
            vertical-align: top;
          }
          .recovery-table th {
            letter-spacing: 0.02em !important;
            font-size: 10px !important;
          }
          .recovery-table td span {
            padding: 3px 6px !important;
            font-size: 9px !important;
            letter-spacing: 0.04em !important;
          }
        }
        @media (max-width: 390px) {
          .recovery-table th,
          .recovery-table td {
            padding: 4px 4px !important;
            font-size: 10px !important;
          }
          .recovery-table th {
            font-size: 9px !important;
          }
          .recovery-table td span {
            font-size: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

const renderCheck = (value: string) => {
  const isYes = value === 'Yes';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 999,
        background: isYes ? 'rgba(52,211,153,0.12)' : 'rgba(148,163,184,0.10)',
        border: `1px solid ${isYes ? 'rgba(52,211,153,0.35)' : 'rgba(148,163,184,0.25)'}`,
        color: isYes ? success : muted,
        fontSize: fs.labelLg,
        fontWeight: 800,
      }}
    >
      {isYes ? '✓' : '—'}
    </span>
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

export default ExecutionMistakes;
