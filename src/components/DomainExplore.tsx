import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown, ShieldCheck, TrendingUp, TrendingDown } from 'lucide-react';

const chains = [
  {
    id: 'domain',
    number: '01',
    scope: 'Domain',
    title: 'If the Domain becomes weak',
    trigger: 'Construction Site Execution reduces',
    steps: [
      'Site engineering demand reduces',
      'RCC structural execution work reduces',
      'Building companies hire fewer site teams',
      'RCC apartment project openings reduce',
      'Junior Site Engineer fresher roles reduce',
    ],
    meaning: 'If actual construction activity slows, the fresher role immediately gets hit.',
    accent: 'critical',
  },
  {
    id: 'industry',
    number: '02',
    scope: 'Industry',
    title: 'If the Industry becomes weak',
    trigger: 'Building Construction Companies reduce projects',
    steps: [
      'Residential construction contracts reduce',
      'RCC apartment site work reduces',
      'Reinforcement, level, concrete, and layout checking reduces',
      'Junior Site Engineer hiring reduces',
    ],
    meaning: 'Even if the role is useful, fewer building projects means fewer entry-level openings.',
    accent: 'warning',
  },
  {
    id: 'cluster',
    number: '03',
    scope: 'Cluster',
    title: 'If the Cluster becomes weak',
    trigger: 'RCC Apartment Projects reduce',
    steps: [
      'Floor-by-floor RCC execution reduces',
      'Slab, beam, column, and concreting checks reduce',
      'Daily site documentation and progress tracking reduce',
      'Junior Site Engineer fresher opportunities reduce',
    ],
    meaning: 'The role survives best when apartment RCC projects keep repeating floor-level execution work.',
    accent: 'info',
  },
];

const safetyPillars = [
  { label: 'Construction Site Execution', reason: 'Drawings must become real buildings.' },
  { label: 'Site Engineering', reason: 'Someone must check and coordinate site work.' },
  { label: 'RCC Structural Execution', reason: 'Steel, formwork, concrete, and levels need physical verification.' },
  { label: 'Building Construction Companies', reason: 'Housing and building demand continues.' },
  { label: 'Residential Building Construction', reason: 'People need homes.' },
  { label: 'RCC Apartment Projects', reason: 'Urban density needs multi-floor housing.' },
  { label: 'Junior Site Engineer', reason: 'Seniors need juniors for checking, reporting, and follow-up.' },
];

const fresherPoints = [
  'Freshers can realistically enter through contractors, builders, subcontractors, and site engineering teams.',
  'Surviving responsibilities: reinforcement checking, level support, concrete monitoring, layout assistance, daily reporting.',
  'Companies still need juniors to reduce senior workload during repeated floor execution.',
  'Fresher openings can reduce if apartment launches slow or builders cut junior manpower.',
  'Senior demand does not always create fresher demand, but active site execution usually does.',
];

const strengtheners = [
  'Urban housing demand',
  'More apartment projects',
  'Stricter quality control',
  'Faster delivery pressure',
  'Formal site documentation',
];

const weakeners = [
  'Real estate slowdown',
  'Delayed approvals',
  'High material costs',
  'Weak builder funding',
  'Fewer new apartment launches',
];

const accentMap: Record<string, { line: string; text: string }> = {
  critical: { line: 'rgba(248,113,113,0.55)', text: '#F87171' },
  warning: { line: 'rgba(245,194,107,0.55)', text: '#F5C26B' },
  info: { line: 'rgba(167,139,250,0.55)', text: '#A78BFA' },
};

const DomainExplore: React.FC = () => {
  return (
    <div className="ug-domain-explore">
      <style>{`
        .ug-domain-explore {
          --bg: #0B1020;
          --surface: #121A2F;
          --elevated: #18233A;
          --hover: #202C45;
          --text: #F5F7FA;
          --text-2: #C8D1E1;
          --muted: #94A3B8;
          --accent: #6DD4C8;
          --border: rgba(255,255,255,0.08);

          position: relative;
          min-height: 100%;
          background:
            radial-gradient(1200px 560px at 50% -12%, rgba(109,212,200,0.10), transparent 62%),
            var(--bg);
          color: var(--text);
          font-family: 'IBM Plex Sans', system-ui, sans-serif;
          font-size: 16px;
          padding: 48px 24px 96px;
        }
        @media (min-width: 768px) { .ug-domain-explore { padding: 64px 32px 120px; } }
        .ug-domain-explore *, .ug-domain-explore *::before, .ug-domain-explore *::after { font-family: inherit; }

        .ug-wrap { max-width: 1280px; margin: 0 auto; }
        .ug-read { max-width: 760px; }

        .ug-domain-explore :is(a, button, [tabindex]):focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
          border-radius: 12px;
        }

        /* Breadcrumb + role context */
        .ug-crumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
          font-size: 14px; color: var(--muted); margin-bottom: 16px;
        }
        .ug-crumbs svg { width: 14px; height: 14px; opacity: .6; }
        .ug-crumbs .current { color: var(--text-2); font-weight: 500; }
        .ug-role {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase;
          color: var(--accent); padding: 8px 12px; border-radius: 12px;
          background: var(--surface); border: 1px solid var(--border);
        }
        .ug-role svg { width: 14px; height: 14px; }

        .ug-h1 {
          font-weight: 700; letter-spacing: -0.02em; line-height: 1.15;
          font-size: 30px; margin: 16px 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #C8D1E1 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        @media (min-width: 768px) { .ug-h1 { font-size: 36px; } }
        @media (min-width: 1280px) { .ug-h1 { font-size: 40px; } }

        .ug-sub { color: var(--text-2); font-size: 16px; line-height: 1.6; }

        .ug-block { margin-top: 64px; }
        @media (min-width: 1280px) { .ug-block { margin-top: 96px; } }

        .ug-section-label {
          font-size: 12px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 8px;
        }
        .ug-section-title {
          font-weight: 600; font-size: 26px; line-height: 1.2; letter-spacing: -0.015em;
          color: var(--text); margin: 0 0 8px;
        }
        @media (min-width: 768px) { .ug-section-title { font-size: 28px; } }
        @media (min-width: 1280px) { .ug-section-title { font-size: 32px; } }
        .ug-section-tag { color: var(--muted); font-size: 16px; line-height: 1.6; margin: 0 0 32px; }

        /* Chains */
        .ug-chain-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 768px) { .ug-chain-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .ug-chain-grid { grid-template-columns: repeat(3, 1fr); } }

        .ug-chain-card {
          padding: 24px; border-radius: 16px;
          background: var(--surface); border: 1px solid var(--border);
          transition: background 220ms ease, border-color 220ms ease, transform 220ms ease;
        }
        .ug-chain-card:hover { background: var(--elevated); transform: translateY(-2px); }
        .ug-chain-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
        .ug-chain-num { font-size: 12px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase; }
        .ug-chain-scope { font-size: 12px; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; color: var(--muted); }
        .ug-chain-title { font-weight: 600; font-size: 18px; line-height: 1.25; color: var(--text); margin: 8px 0 16px; }

        .ug-trigger {
          display: block; padding: 12px 16px; border-radius: 12px;
          font-size: 15px; font-weight: 500; line-height: 1.5; margin-bottom: 16px;
          background: var(--elevated); border: 1px solid var(--border);
          border-left: 3px solid currentColor;
        }
        .ug-flow { position: relative; padding-left: 24px; margin: 0; list-style: none; }
        .ug-flow::before {
          content: ''; position: absolute; left: 4px; top: 12px; bottom: 12px;
          width: 1px; background: rgba(255,255,255,0.14);
        }
        .ug-step { position: relative; padding: 8px 0; font-size: 15px; color: var(--text-2); line-height: 1.6; }
        .ug-step::before {
          content: ''; position: absolute; left: -24px; top: 15px;
          width: 9px; height: 9px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.28); background: var(--bg);
        }
        .ug-step.last { color: var(--text); font-weight: 600; }
        .ug-step.last::before { background: currentColor; border-color: currentColor; }
        .ug-meaning {
          margin-top: 16px; padding: 16px; border-radius: 12px;
          background: var(--elevated); border-left: 3px solid currentColor;
          font-size: 15px; color: var(--text-2); line-height: 1.6;
        }

        /* Pillar table */
        .ug-table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 16px; background: var(--surface); }
        .ug-table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .ug-table caption { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
        .ug-table th {
          text-align: left; font-size: 15px; font-weight: 600; color: var(--muted);
          padding: 16px 24px; border-bottom: 1px solid var(--border); white-space: nowrap;
        }
        .ug-table td {
          font-size: 15px; line-height: 1.6; padding: 16px 24px; height: 56px;
          border-bottom: 1px solid var(--border); color: var(--text-2); vertical-align: middle;
        }
        .ug-table tbody tr:last-child td { border-bottom: none; }
        .ug-table tbody tr { transition: background 220ms ease; }
        .ug-table tbody tr:hover { background: var(--hover); }
        .ug-table td.layer { color: var(--text); font-weight: 600; }

        /* Panels + lists */
        .ug-panel { padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--border); }
        .ug-two-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 768px) { .ug-two-col { grid-template-columns: repeat(2, 1fr); } }

        .ug-panel-head { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .ug-panel-head svg { width: 18px; height: 18px; }
        .ug-panel-head span { font-size: 12px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase; }

        .ug-list { list-style: none; padding: 0; margin: 0; }
        .ug-list li {
          padding: 12px 0 12px 24px; position: relative;
          font-size: 16px; color: var(--text-2); line-height: 1.6;
          border-bottom: 1px solid var(--border);
        }
        .ug-list li:last-child { border-bottom: none; }
        .ug-list li::before {
          content: ''; position: absolute; left: 0; top: 22px;
          width: 8px; height: 1px; background: currentColor;
        }
        .ug-strengthen { color: var(--accent); }
        .ug-weaken { color: #F5C26B; }

        .ug-final-copy { color: var(--text-2); font-size: 16px; line-height: 1.6; max-width: 760px; }
        .ug-final-copy p { margin: 0 0 16px; }
        .ug-final-copy p:last-child { margin-bottom: 0; }
        .ug-final-copy strong { color: var(--text); font-weight: 600; }

        .ug-takeaway {
          margin-top: 48px; padding: 32px; border-radius: 16px;
          background: var(--surface); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
        }
        .ug-takeaway-label {
          font-size: 12px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 8px;
        }
        .ug-takeaway-text {
          font-weight: 500; font-size: 18px; line-height: 1.6;
          color: var(--text); max-width: 760px; margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .ug-domain-explore * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="ug-wrap">
        {/* Breadcrumb → Role context → Title → Summary */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
        >
          <nav className="ug-crumbs" aria-label="Breadcrumb">
            <span>Civil Engineering</span>
            <ChevronRight aria-hidden="true" />
            <span>Site Execution</span>
            <ChevronRight aria-hidden="true" />
            <span className="current" aria-current="page">Domain Explore</span>
          </nav>

          <p className="ug-role">
            <ShieldCheck aria-hidden="true" />
            Junior Site Engineer · Career Ecosystem Stability
          </p>

          <h1 className="ug-h1">The Butterfly Effect of a career role.</h1>
          <p className="ug-sub ug-read">
            What supports this career, what can weaken it, and how stable the ecosystem is behind
            the Junior Site Engineer role — traced through the domain, the industry, and the cluster.
          </p>
        </motion.header>

        {/* Butterfly Effect */}
        <section className="ug-block" aria-labelledby="de-chains">
          <p className="ug-section-label">Butterfly Effect</p>
          <h2 className="ug-section-title" id="de-chains">Three chains that decide the role</h2>
          <p className="ug-section-tag ug-read">Trace how a shock at the top ripples down to fresher openings.</p>

          <div className="ug-chain-grid">
            {chains.map((c, i) => {
              const a = accentMap[c.accent];
              return (
                <motion.article
                  key={c.id}
                  className="ug-chain-card"
                  style={{ color: a.text }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.24, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <div className="ug-chain-head">
                    <span className="ug-chain-num">{c.number}</span>
                    <span className="ug-chain-scope">{c.scope} chain</span>
                  </div>
                  <h3 className="ug-chain-title">{c.title}</h3>
                  <p className="ug-trigger">If {c.trigger}</p>
                  <ol className="ug-flow">
                    {c.steps.map((s, idx) => (
                      <li key={idx} className={`ug-step ${idx === c.steps.length - 1 ? 'last' : ''}`}>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <p className="ug-meaning">{c.meaning}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Why Safe / Risky — stability matrix */}
        <section className="ug-block" aria-labelledby="de-safe">
          <p className="ug-section-label">Why it survives</p>
          <h2 className="ug-section-title" id="de-safe">Why this career path is relatively safe — or risky</h2>
          <p className="ug-section-tag ug-read">
            People need housing. Cities need apartments. Apartments need RCC execution.
            RCC execution needs site checking.
          </p>

          <div className="ug-table-wrap">
            <table className="ug-table">
              <caption>Ecosystem layers and the reason each layer keeps existing</caption>
              <thead>
                <tr>
                  <th scope="col">Ecosystem layer</th>
                  <th scope="col">Why it keeps existing</th>
                </tr>
              </thead>
              <tbody>
                {safetyPillars.map((p) => (
                  <tr key={p.label}>
                    <th scope="row" className="layer" style={{ fontWeight: 600, color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>
                      {p.label}
                    </th>
                    <td>{p.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fresher Opportunity */}
        <section className="ug-block" aria-labelledby="de-fresher">
          <p className="ug-section-label">Fresher Opportunity Check</p>
          <h2 className="ug-section-title" id="de-fresher">Where a fresher realistically fits in</h2>
          <p className="ug-section-tag ug-read">The narrow door that stays open — and what closes it.</p>

          <div className="ug-panel">
            <ul className="ug-list ug-strengthen">
              {fresherPoints.map((p, i) => (
                <li key={i}><span style={{ color: 'var(--text-2)' }}>{p}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Strengtheners vs Weakeners */}
        <section className="ug-block" aria-labelledby="de-final">
          <p className="ug-section-label">Final Reality</p>
          <h2 className="ug-section-title" id="de-final">What strengthens it — what weakens it</h2>
          <p className="ug-section-tag ug-read">The stronger the chain above the role, the safer the role becomes.</p>

          <div className="ug-two-col">
            <div className="ug-panel">
              <div className="ug-panel-head ug-strengthen">
                <TrendingUp aria-hidden="true" />
                <span>What could strengthen it</span>
              </div>
              <ul className="ug-list ug-strengthen">
                {strengtheners.map((s) => <li key={s}><span style={{ color: 'var(--text-2)' }}>{s}</span></li>)}
              </ul>
            </div>

            <div className="ug-panel">
              <div className="ug-panel-head ug-weaken">
                <TrendingDown aria-hidden="true" />
                <span>What could weaken it</span>
              </div>
              <ul className="ug-list ug-weaken">
                {weakeners.map((w) => <li key={w}><span style={{ color: 'var(--text-2)' }}>{w}</span></li>)}
              </ul>
            </div>
          </div>

          {/* Evidence / reasoning */}
          <div className="ug-final-copy" style={{ marginTop: 32 }}>
            <p>
              This ecosystem is <strong>relatively safe, but not risk-free.</strong> It can slow down
              during real estate downturns, funding problems, material cost rises, approval delays,
              or weak housing demand — but it is not easily destroyed by AI because the work depends
              heavily on physical site execution.
            </p>
            <p>
              For the next 10 years, this ecosystem appears <strong>relatively stable</strong> for
              fresher opportunities, but it is cyclical. Hiring rises when apartment projects are
              active and slows when real estate slows.
            </p>
            <p>
              <strong>Primary reason it survives:</strong> RCC apartment construction still needs
              daily human site verification.
            </p>
          </div>
        </section>

        {/* Takeaway */}
        <aside className="ug-takeaway" aria-label="Key takeaway">
          <p className="ug-takeaway-label">One-line memory takeaway</p>
          <p className="ug-takeaway-text">
            “Junior Site Engineer roles survive when RCC apartment projects keep needing
            daily site verification.”
          </p>
        </aside>
      </div>
    </div>
  );
};

export default DomainExplore;
