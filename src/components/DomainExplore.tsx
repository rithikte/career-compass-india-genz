import React from 'react';
import { motion } from 'framer-motion';

const chains = [
  {
    id: 'domain',
    number: '01',
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
    accent: 'rose',
  },
  {
    id: 'industry',
    number: '02',
    title: 'If the Industry becomes weak',
    trigger: 'Building Construction Companies reduce projects',
    steps: [
      'Residential construction contracts reduce',
      'RCC apartment site work reduces',
      'Reinforcement, level, concrete, and layout checking reduces',
      'Junior Site Engineer hiring reduces',
    ],
    meaning: 'Even if the role is useful, fewer building projects means fewer entry-level openings.',
    accent: 'amber',
  },
  {
    id: 'cluster',
    number: '03',
    title: 'If the Cluster becomes weak',
    trigger: 'RCC Apartment Projects reduce',
    steps: [
      'Floor-by-floor RCC execution reduces',
      'Slab, beam, column, and concreting checks reduce',
      'Daily site documentation and progress tracking reduce',
      'Junior Site Engineer fresher opportunities reduce',
    ],
    meaning: 'The role survives best when apartment RCC projects keep repeating floor-level execution work.',
    accent: 'sky',
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

const accentMap: Record<string, { ring: string; dot: string; glow: string; label: string }> = {
  rose: { ring: 'rgba(110,231,215,0.35)', dot: '#6ee7d7', glow: 'rgba(110,231,215,0.18)', label: '#6ee7d7' },
  amber: { ring: 'rgba(245,194,107,0.35)', dot: '#f5c26b', glow: 'rgba(245,194,107,0.18)', label: '#f5c26b' },
  sky: { ring: 'rgba(167,139,250,0.35)', dot: '#a78bfa', glow: 'rgba(167,139,250,0.18)', label: '#a78bfa' },
};

const DomainExplore: React.FC = () => {
  return (
    <div className="ug-domain-explore">
      <style>{`
        .ug-domain-explore {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          background: radial-gradient(1200px 600px at 15% -10%, rgba(110,231,215,0.08), transparent 60%),
                      radial-gradient(900px 500px at 100% 10%, rgba(167,139,250,0.08), transparent 60%),
                      #06080d;
          color: #e7ecf3;
          border-radius: 24px;
          padding: clamp(24px, 5vw, 72px) clamp(18px, 4vw, 56px);
        }
        .ug-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
          color: #6ee7d7; padding: 8px 14px; border-radius: 999px;
          background: rgba(110,231,215,0.08); border: 1px solid rgba(110,231,215,0.25);
        }
        .ug-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: #6ee7d7; box-shadow: 0 0 12px #6ee7d7; }
        .ug-h1 {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700; letter-spacing: -0.02em; line-height: 1.05;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem); margin: 18px 0 14px;
          background: linear-gradient(135deg, #e7ecf3 0%, #a5b4fc 55%, #6ee7d7 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ug-sub { max-width: 780px; color: #9aa4b2; font-size: clamp(0.9rem, 1.6vw, 1rem); line-height: 1.7; }
        .ug-section-label {
          font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #9aa4b2; margin-bottom: 12px;
        }
        .ug-section-title {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem); letter-spacing: -0.01em;
          margin-bottom: 8px;
          background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ug-section-tag { color: #9aa4b2; font-size: 0.9rem; margin-bottom: 28px; }

        .ug-chain-grid {
          display: grid; gap: clamp(14px, 2vw, 22px);
          grid-template-columns: 1fr;
        }
        @media (min-width: 720px) { .ug-chain-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1080px) { .ug-chain-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .ug-chain-card {
          position: relative; display: flex; flex-direction: column;
          padding: clamp(18px, 2.4vw, 26px);
          background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px; backdrop-filter: blur(12px); overflow: hidden;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), border-color .3s, box-shadow .3s;
        }
        .ug-chain-card::after {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 2px;
          background: linear-gradient(90deg, currentColor, transparent 85%);
          opacity: .75;
        }
        .ug-chain-card:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.16); box-shadow: 0 18px 44px -22px rgba(0,0,0,0.8); }
        .ug-chain-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .ug-chain-num {
          font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(9px, 1.1vw, 10.5px); letter-spacing: 0.22em; text-transform: uppercase;
          padding: 5px 9px; border-radius: 999px;
          border: 1px solid currentColor; background: rgba(255,255,255,0.03);
        }
        .ug-chain-title {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(0.98rem, 1.6vw, 1.12rem); color: #e7ecf3;
          margin: 0 0 14px; line-height: 1.35; letter-spacing: -0.01em;
        }
        .ug-trigger {
          display: block; padding: 10px 12px; border-radius: 12px;
          font-size: clamp(0.74rem, 1.3vw, 0.82rem); font-weight: 500; margin-bottom: 16px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          line-height: 1.45;
        }
        .ug-flow { position: relative; padding-left: 20px; flex: 1; }
        .ug-flow::before {
          content: ''; position: absolute; left: 4px; top: 10px; bottom: 12px;
          width: 1px; background: linear-gradient(180deg, currentColor, rgba(255,255,255,0.04));
          opacity: .45;
        }
        .ug-step {
          position: relative; padding: 7px 0; font-size: clamp(0.78rem, 1.35vw, 0.86rem);
          color: #cfd7e3; line-height: 1.55;
        }
        .ug-step::before {
          content: ''; position: absolute; left: -20px; top: 14px;
          width: 9px; height: 9px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.28); background: #06080d;
        }
        .ug-step.last { color: #e7ecf3; font-weight: 600; }
        .ug-step.last::before { background: currentColor; border-color: currentColor; box-shadow: 0 0 10px currentColor; }
        .ug-meaning {
          margin-top: 18px; padding: 12px 14px; border-radius: 12px;
          background: rgba(255,255,255,0.035); border-left: 2px solid currentColor;
          font-size: clamp(0.74rem, 1.3vw, 0.82rem); color: #cfd7e3; line-height: 1.55;
        }

        .ug-panel {
          padding: clamp(24px, 3.5vw, 40px);
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
        }
        .ug-pillar-grid {
          display: grid; gap: clamp(10px, 1.6vw, 16px);
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .ug-pillar-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .ug-pillar-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .ug-pillar {
          position: relative; display: flex; gap: 12px; align-items: flex-start;
          padding: clamp(14px, 1.8vw, 18px);
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color .3s, transform .3s, box-shadow .3s;
        }
        .ug-pillar:hover { border-color: rgba(110,231,215,0.35); transform: translateY(-2px); box-shadow: 0 14px 32px -18px rgba(110,231,215,0.28); }
        .ug-pillar-step {
          flex: none; width: 26px; height: 26px; border-radius: 8px;
          display: grid; place-items: center;
          font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(9px, 1.1vw, 10.5px); letter-spacing: 0.06em;
          color: #6ee7d7; background: rgba(110,231,215,0.10);
          border: 1px solid rgba(110,231,215,0.28);
        }
        .ug-pillar-body { min-width: 0; }
        .ug-pillar-label {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(0.84rem, 1.45vw, 0.94rem); color: #e7ecf3;
          margin-bottom: 5px; line-height: 1.35; letter-spacing: -0.01em;
        }
        .ug-pillar-reason { font-size: clamp(0.72rem, 1.25vw, 0.8rem); color: #9aa4b2; line-height: 1.55; }
        .ug-pillar.final {
          border-color: rgba(110,231,215,0.35);
          background: linear-gradient(180deg, rgba(110,231,215,0.12), rgba(110,231,215,0.03));
        }
        .ug-pillar.final .ug-pillar-step { color: #06080d; background: #6ee7d7; border-color: #6ee7d7; }
        @media (min-width: 640px) { .ug-pillar.final { grid-column: 1 / -1; } }

        .ug-two-col {
          display: grid; gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .ug-list { list-style: none; padding: 0; margin: 0; }
        .ug-list li {
          padding: 10px 0 10px 22px; position: relative;
          font-size: 0.88rem; color: #e7ecf3; line-height: 1.6;
          border-bottom: 1px dashed rgba(255,255,255,0.06);
          transition: background .2s;
        }
        .ug-list li:hover { background: rgba(110,231,215,0.06); }
        .ug-list li:last-child { border-bottom: none; }
        .ug-list li::before {
          content: ''; position: absolute; left: 0; top: 18px;
          width: 8px; height: 1px; background: currentColor;
        }
        .ug-strengthen { color: #6ee7d7; }
        .ug-weaken { color: #f5c26b; }

        .ug-takeaway {
          margin-top: clamp(32px, 4vw, 48px);
          padding: clamp(24px, 4vw, 40px);
          border-radius: 22px; text-align: center;
          background: linear-gradient(135deg, rgba(110,231,215,0.10), rgba(167,139,250,0.10));
          border: 1px solid rgba(110,231,215,0.25);
          position: relative; overflow: hidden;
        }
        .ug-takeaway::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(600px 200px at 50% 0%, rgba(110,231,215,0.15), transparent);
          pointer-events: none;
        }
        .ug-takeaway-label {
          font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #6ee7d7; margin-bottom: 14px;
        }
        .ug-takeaway-text {
          font-family: 'Poppins', sans-serif; font-weight: 500;
          font-size: clamp(0.7875rem, 1.8vw, 1.125rem); line-height: 1.5;
          color: #e7ecf3; letter-spacing: -0.01em; max-width: 820px; margin: 0 auto;
        }

        .ug-block { margin-top: clamp(40px, 6vw, 72px); }
        .ug-final-copy { color: #e7ecf3; font-size: 0.92rem; line-height: 1.75; }
        .ug-final-copy p { margin-bottom: 14px; }
        .ug-final-copy strong { color: #e7ecf3; font-weight: 600; }

        @media (prefers-reduced-motion: reduce) {
          .ug-domain-explore * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="ug-eyebrow"><span className="dot" /> Career Ecosystem Stability</span>
        <h1 className="ug-h1">The Butterfly Effect of a career role.</h1>
        <p className="ug-sub">
          What supports this career, what can weaken it, and how stable the ecosystem is behind
          the Junior Site Engineer role — traced through the domain, the industry, and the cluster.
        </p>
      </motion.div>

      {/* Butterfly Effect */}
      <div className="ug-block">
        <div className="ug-section-label">Butterfly Effect</div>
        <h2 className="ug-section-title">Three chains that decide the role</h2>
        <p className="ug-section-tag">Trace how a shock at the top ripples down to fresher openings.</p>

        <div className="ug-chain-grid">
          {chains.map((c, i) => {
            const a = accentMap[c.accent];
            return (
              <motion.div
                key={c.id}
                className="ug-chain-card"
                style={{ color: a.dot, boxShadow: `0 0 0 1px transparent, 0 20px 40px -20px ${a.glow}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ borderColor: a.ring } as any}
              >
                <div className="ug-chain-head">
                  <span className="ug-chain-num" style={{ color: a.label }}>{c.number} — Chain</span>
                </div>
                <h3 className="ug-chain-title">{c.title}</h3>
                <div className="ug-trigger" style={{ borderColor: a.ring, color: a.label }}>
                  If {c.trigger}
                </div>
                <div className="ug-flow">
                  {c.steps.map((s, idx) => (
                    <div
                      key={idx}
                      className={`ug-step ${idx === c.steps.length - 1 ? 'last' : ''}`}
                      style={idx === c.steps.length - 1 ? { color: a.label } : undefined}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="ug-meaning">{c.meaning}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Why Safe / Risky */}
      <div className="ug-block">
        <div className="ug-section-label">Why it survives</div>
        <h2 className="ug-section-title">Why this career path is relatively safe — or risky</h2>
        <p className="ug-section-tag">
          People need housing. Cities need apartments. Apartments need RCC execution.
          RCC execution needs site checking.
        </p>

        <div className="ug-panel">
          <div className="ug-pillar-grid">
            {safetyPillars.map((p, i) => (
              <motion.div
                key={p.label}
                className={`ug-pillar${i === safetyPillars.length - 1 ? ' final' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <span className="ug-pillar-step">{String(i + 1).padStart(2, '0')}</span>
                <div className="ug-pillar-body">
                  <div className="ug-pillar-label">{p.label}</div>
                  <div className="ug-pillar-reason">{p.reason}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fresher Opportunity */}
      <div className="ug-block">
        <div className="ug-section-label">Fresher Opportunity Check</div>
        <h2 className="ug-section-title">Where a fresher realistically fits in</h2>
        <p className="ug-section-tag">The narrow door that stays open — and what closes it.</p>

        <div className="ug-panel">
          <ul className="ug-list" style={{ color: '#6ee7d7' }}>
            {fresherPoints.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span style={{ color: '#e7ecf3' }}>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strengtheners vs Weakeners */}
      <div className="ug-block">
        <div className="ug-section-label">Final Reality</div>
        <h2 className="ug-section-title">What strengthens it — what weakens it</h2>
        <p className="ug-section-tag">The stronger the chain above the role, the safer the role becomes.</p>

        <div className="ug-two-col">
          <motion.div
            className="ug-panel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="ug-section-label" style={{ color: '#6ee7d7' }}>What could strengthen it</div>
            <ul className="ug-list ug-strengthen">
              {strengtheners.map((s) => <li key={s}><span style={{ color: '#e7ecf3' }}>{s}</span></li>)}
            </ul>
          </motion.div>

          <motion.div
            className="ug-panel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="ug-section-label" style={{ color: '#f5c26b' }}>What could weaken it</div>
            <ul className="ug-list ug-weaken">
              {weakeners.map((w) => <li key={w}><span style={{ color: '#e7ecf3' }}>{w}</span></li>)}
            </ul>
          </motion.div>
        </div>

        <div className="ug-final-copy" style={{ marginTop: 28 }}>
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
      </div>

      {/* Takeaway */}
      <motion.div
        className="ug-takeaway"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="ug-takeaway-label">One-line memory takeaway</div>
        <div className="ug-takeaway-text">
          “Junior Site Engineer roles survive when RCC apartment projects keep needing
          daily site verification.”
        </div>
      </motion.div>
    </div>
  );
};

export default DomainExplore;
