import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chains = [
  {
    id: 'domain',
    number: '01',
    tag: 'Domain shock',
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
    tag: 'Industry shock',
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
    tag: 'Cluster shock',
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

const accentMap: Record<string, { ring: string; dot: string; glow: string; label: string; soft: string }> = {
  rose:  { ring: 'rgba(244,114,182,0.45)', dot: '#F472B6', glow: 'rgba(244,114,182,0.22)', label: '#FBCFE8', soft: 'rgba(244,114,182,0.08)' },
  amber: { ring: 'rgba(251,191,36,0.45)',  dot: '#FBBF24', glow: 'rgba(251,191,36,0.22)',  label: '#FDE68A', soft: 'rgba(251,191,36,0.08)' },
  sky:   { ring: 'rgba(56,189,248,0.45)',  dot: '#38BDF8', glow: 'rgba(56,189,248,0.22)',  label: '#BAE6FD', soft: 'rgba(56,189,248,0.08)' },
};

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DomainExplore: React.FC = () => {
  const [activeChain, setActiveChain] = useState(0);
  const current = chains[activeChain];
  const a = accentMap[current.accent];

  return (
    <div className="dx-root">
      <style>{`
        .dx-root {
          position: relative; overflow: hidden; min-height: 100%;
          color: #E6ECF5; border-radius: 24px;
          padding: clamp(28px, 5vw, 80px) clamp(20px, 4.5vw, 64px);
          background:
            radial-gradient(1000px 500px at 8% -8%, rgba(56,189,248,0.10), transparent 60%),
            radial-gradient(900px 500px at 100% 6%, rgba(168,85,247,0.10), transparent 60%),
            radial-gradient(700px 400px at 50% 110%, rgba(251,191,36,0.06), transparent 60%),
            linear-gradient(180deg, #060915 0%, #080D1B 100%);
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        .dx-root::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%);
        }
        .dx-root > * { position: relative; }

        /* ---------- HERO ---------- */
        .dx-hero { display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(24px, 4vw, 56px); align-items: end; }
        @media (max-width: 900px) { .dx-hero { grid-template-columns: 1fr; align-items: start; } }
        .dx-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10.5px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #7DD3FC; padding: 8px 14px; border-radius: 999px;
          background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.28);
          backdrop-filter: blur(8px);
        }
        .dx-eyebrow .pulse {
          width: 6px; height: 6px; border-radius: 50%; background: #7DD3FC;
          box-shadow: 0 0 12px #7DD3FC;
          animation: dxPulse 2.2s ease-in-out infinite;
        }
        @keyframes dxPulse { 0%,100% { opacity: 1; transform: scale(1);} 50% { opacity: .5; transform: scale(0.7);} }

        .dx-h1 {
          font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(2rem, 5vw, 3.75rem); line-height: 1.02;
          letter-spacing: -0.025em; margin: 20px 0 16px;
          color: #F8FAFC;
        }
        .dx-h1 .grad {
          background: linear-gradient(120deg, #A5B4FC 0%, #7DD3FC 45%, #F472B6 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .dx-sub {
          max-width: 620px; color: #94A3B8; line-height: 1.7;
          font-size: clamp(0.92rem, 1.4vw, 1.02rem);
        }

        /* Stability meter */
        .dx-meter {
          border-radius: 20px; padding: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(14px);
        }
        .dx-meter-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
        .dx-meter-label { font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: #94A3B8; }
        .dx-meter-value { font-family: 'Poppins'; font-weight: 600; font-size: 1.05rem; color: #86EFAC; }
        .dx-meter-bar { position: relative; height: 8px; border-radius: 999px; background: rgba(255,255,255,0.06); overflow: hidden; }
        .dx-meter-fill {
          position: absolute; inset: 0 auto 0 0; width: 72%;
          background: linear-gradient(90deg, #86EFAC 0%, #7DD3FC 60%, #A5B4FC 100%);
          border-radius: 999px;
          animation: dxFill 1.6s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes dxFill { from { width: 0%; } to { width: 72%; } }
        .dx-meter-scale { display: flex; justify-content: space-between; margin-top: 10px; font-size: 10.5px; color: #64748B; letter-spacing: 0.14em; }
        .dx-meter-note { margin-top: 14px; font-size: 0.8rem; color: #CBD5E1; line-height: 1.55; }

        /* ---------- SECTIONS ---------- */
        .dx-block { margin-top: clamp(48px, 7vw, 88px); }
        .dx-section-head { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: clamp(20px, 3vw, 32px); flex-wrap: wrap; }
        .dx-section-label {
          font-size: 10.5px; letter-spacing: 0.34em; text-transform: uppercase;
          color: #7DD3FC; display: inline-flex; align-items: center; gap: 10px;
        }
        .dx-section-label::before { content: ''; width: 18px; height: 1px; background: #7DD3FC; }
        .dx-section-title {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(1.5rem, 3vw, 2.15rem); letter-spacing: -0.015em;
          color: #F1F5F9; margin: 10px 0 4px; line-height: 1.15;
        }
        .dx-section-tag { color: #64748B; font-size: 0.9rem; max-width: 640px; line-height: 1.6; }

        /* ---------- CHAINS (tabbed) ---------- */
        .dx-chain-wrap {
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012));
          border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(14px);
          overflow: hidden;
        }
        .dx-chain-tabs {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 700px) { .dx-chain-tabs { grid-template-columns: 1fr; } }
        .dx-tab {
          appearance: none; background: transparent; border: 0; cursor: pointer;
          padding: 18px 22px; text-align: left; position: relative;
          color: #94A3B8; transition: color .3s, background .3s;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .dx-tab:last-child { border-right: 0; }
        @media (max-width: 700px) { .dx-tab { border-right: 0; border-bottom: 1px solid rgba(255,255,255,0.06); } }
        .dx-tab:hover { color: #E2E8F0; background: rgba(255,255,255,0.02); }
        .dx-tab.active { color: #F8FAFC; background: rgba(255,255,255,0.03); }
        .dx-tab-num { font-family: 'Poppins'; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.28em; opacity: 0.75; }
        .dx-tab-title { font-family: 'Poppins'; font-weight: 600; font-size: 0.95rem; margin-top: 6px; }
        .dx-tab-underline {
          position: absolute; left: 22px; right: 22px; bottom: -1px; height: 2px; border-radius: 2px;
        }

        .dx-chain-body { padding: clamp(24px, 4vw, 44px); display: grid; grid-template-columns: 1fr 1.4fr; gap: clamp(24px, 4vw, 48px); align-items: start; }
        @media (max-width: 900px) { .dx-chain-body { grid-template-columns: 1fr; } }

        .dx-trigger-card {
          padding: 22px; border-radius: 18px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          position: relative; overflow: hidden;
        }
        .dx-trigger-glow {
          position: absolute; inset: -30% -30% auto auto; width: 220px; height: 220px; border-radius: 50%;
          filter: blur(60px); opacity: 0.6;
        }
        .dx-trigger-eyebrow { font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: #94A3B8; }
        .dx-trigger-text {
          font-family: 'Poppins'; font-weight: 600; font-size: clamp(1.05rem, 1.9vw, 1.25rem);
          color: #F1F5F9; margin-top: 10px; line-height: 1.35;
        }
        .dx-meaning-quote {
          margin-top: 18px; padding: 14px 16px; border-radius: 12px;
          background: rgba(0,0,0,0.25); border-left: 2px solid currentColor;
          font-size: 0.85rem; color: #E2E8F0; line-height: 1.6;
        }

        .dx-timeline { position: relative; padding-left: 30px; }
        .dx-timeline::before {
          content: ''; position: absolute; left: 9px; top: 8px; bottom: 8px; width: 2px;
          background: linear-gradient(180deg, currentColor 0%, transparent 100%);
          opacity: 0.35;
        }
        .dx-node {
          position: relative; padding: 14px 0 14px 6px;
          border-bottom: 1px dashed rgba(255,255,255,0.06);
        }
        .dx-node:last-child { border-bottom: 0; }
        .dx-node::before {
          content: ''; position: absolute; left: -27px; top: 20px;
          width: 12px; height: 12px; border-radius: 50%;
          background: #0B1120; border: 2px solid currentColor;
          transition: transform .3s;
        }
        .dx-node.final::before { background: currentColor; box-shadow: 0 0 0 4px rgba(255,255,255,0.05), 0 0 20px currentColor; }
        .dx-node-index { font-family: 'Poppins'; font-size: 10.5px; letter-spacing: 0.2em; opacity: 0.7; text-transform: uppercase; }
        .dx-node-text { color: #E2E8F0; font-size: 0.92rem; line-height: 1.5; margin-top: 4px; }
        .dx-node.final .dx-node-text { color: currentColor; font-weight: 500; }

        /* ---------- PILLARS ---------- */
        .dx-pillar-grid {
          display: grid; gap: 14px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        .dx-pillar {
          position: relative; padding: 20px; border-radius: 16px;
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform .35s cubic-bezier(.22,1,.36,1), border-color .3s, background .3s;
          overflow: hidden;
        }
        .dx-pillar::before {
          content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 2px;
          background: linear-gradient(180deg, #7DD3FC, transparent); opacity: 0.6;
        }
        .dx-pillar:hover { transform: translateY(-3px); border-color: rgba(125,211,252,0.35); background: linear-gradient(180deg, rgba(125,211,252,0.06), rgba(255,255,255,0.01)); }
        .dx-pillar-idx { font-family: 'Poppins'; font-size: 10.5px; letter-spacing: 0.28em; color: #7DD3FC; }
        .dx-pillar-label { font-family: 'Poppins'; font-weight: 600; font-size: 0.98rem; color: #F1F5F9; margin: 8px 0 6px; }
        .dx-pillar-reason { font-size: 0.82rem; color: #94A3B8; line-height: 1.55; }

        /* ---------- FRESHER ---------- */
        .dx-fresher {
          border-radius: 22px; padding: clamp(24px, 3.5vw, 40px);
          background: linear-gradient(135deg, rgba(125,211,252,0.06), rgba(168,85,247,0.05));
          border: 1px solid rgba(125,211,252,0.18); backdrop-filter: blur(12px);
        }
        .dx-fresher-grid {
          display: grid; gap: 14px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .dx-fresher-card {
          display: flex; gap: 14px; padding: 16px 18px; border-radius: 14px;
          background: rgba(0,0,0,0.22); border: 1px solid rgba(255,255,255,0.06);
        }
        .dx-fresher-num {
          flex-shrink: 0; width: 32px; height: 32px; border-radius: 10px;
          display: grid; place-items: center;
          font-family: 'Poppins'; font-weight: 600; font-size: 0.85rem; color: #7DD3FC;
          background: rgba(125,211,252,0.08); border: 1px solid rgba(125,211,252,0.28);
        }
        .dx-fresher-text { font-size: 0.88rem; color: #CBD5E1; line-height: 1.6; }

        /* ---------- BALANCE ---------- */
        .dx-balance {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: stretch;
        }
        @media (max-width: 900px) { .dx-balance { grid-template-columns: 1fr; } .dx-vs { display: none; } }
        .dx-scale {
          padding: clamp(20px, 3vw, 32px); border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.08);
        }
        .dx-scale.pos { border-color: rgba(134,239,172,0.22); background: linear-gradient(180deg, rgba(134,239,172,0.05), rgba(255,255,255,0.01)); }
        .dx-scale.neg { border-color: rgba(252,165,165,0.22); background: linear-gradient(180deg, rgba(252,165,165,0.05), rgba(255,255,255,0.01)); }
        .dx-scale-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .dx-scale-sign {
          width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center;
          font-family: 'Poppins'; font-weight: 700; font-size: 1.1rem;
        }
        .dx-scale.pos .dx-scale-sign { color: #86EFAC; background: rgba(134,239,172,0.1); border: 1px solid rgba(134,239,172,0.3); }
        .dx-scale.neg .dx-scale-sign { color: #FCA5A5; background: rgba(252,165,165,0.1); border: 1px solid rgba(252,165,165,0.3); }
        .dx-scale-title { font-family: 'Poppins'; font-weight: 600; font-size: 1.02rem; color: #F1F5F9; }
        .dx-scale-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .dx-scale-list li {
          padding: 12px 14px; border-radius: 10px;
          background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05);
          font-size: 0.88rem; color: #E2E8F0; line-height: 1.5;
          display: flex; align-items: center; gap: 12px;
          transition: transform .3s, border-color .3s;
        }
        .dx-scale.pos .dx-scale-list li:hover { border-color: rgba(134,239,172,0.35); transform: translateX(2px); }
        .dx-scale.neg .dx-scale-list li:hover { border-color: rgba(252,165,165,0.35); transform: translateX(2px); }
        .dx-scale-list li::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }
        .dx-scale.pos .dx-scale-list li::before { background: #86EFAC; box-shadow: 0 0 8px #86EFAC; }
        .dx-scale.neg .dx-scale-list li::before { background: #FCA5A5; box-shadow: 0 0 8px #FCA5A5; }

        .dx-vs {
          display: grid; place-items: center; padding: 0 4px;
        }
        .dx-vs-badge {
          width: 48px; height: 48px; border-radius: 50%;
          display: grid; place-items: center;
          font-family: 'Poppins'; font-weight: 700; font-size: 0.8rem; color: #F8FAFC;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 0 24px rgba(255,255,255,0.05);
        }

        .dx-final-copy {
          margin-top: clamp(24px, 3vw, 36px); padding: clamp(20px, 3vw, 32px);
          border-radius: 18px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
          color: #CBD5E1; font-size: 0.9rem; line-height: 1.75;
          display: grid; gap: 12px;
        }
        .dx-final-copy strong { color: #F1F5F9; font-weight: 600; }

        /* ---------- TAKEAWAY ---------- */
        .dx-takeaway {
          margin-top: clamp(48px, 6vw, 80px);
          padding: clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px);
          border-radius: 24px; text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(56,189,248,0.12), rgba(168,85,247,0.10), rgba(244,114,182,0.08));
          border: 1px solid rgba(125,211,252,0.25);
        }
        .dx-takeaway::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(600px 240px at 50% 0%, rgba(125,211,252,0.18), transparent 70%);
          pointer-events: none;
        }
        .dx-takeaway::after {
          content: '"'; position: absolute; top: -30px; left: 24px;
          font-family: 'Poppins', serif; font-size: 12rem; line-height: 1;
          color: rgba(255,255,255,0.05); pointer-events: none; font-weight: 700;
        }
        .dx-takeaway-label {
          position: relative; font-size: 10.5px; letter-spacing: 0.34em; text-transform: uppercase;
          color: #7DD3FC; margin-bottom: 18px;
        }
        .dx-takeaway-text {
          position: relative; font-family: 'Poppins', sans-serif; font-weight: 500;
          font-size: clamp(0.9rem, 1.9vw, 1.2rem); line-height: 1.55;
          color: #F8FAFC; letter-spacing: -0.01em; max-width: 780px; margin: 0 auto;
        }
        .dx-takeaway-underline {
          margin: 22px auto 0; width: 60px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #7DD3FC, #A5B4FC);
        }

        @media (prefers-reduced-motion: reduce) {
          .dx-root * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* HERO */}
      <div className="dx-hero">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }}>
          <span className="dx-eyebrow"><span className="pulse" /> Career Ecosystem Stability</span>
          <h1 className="dx-h1">
            The <span className="grad">butterfly effect</span><br />of a career role.
          </h1>
          <p className="dx-sub">
            What supports this career, what can weaken it, and how stable the ecosystem is behind the
            Junior Site Engineer role — traced through the domain, the industry, and the cluster.
          </p>
        </motion.div>

        <motion.div
          className="dx-meter"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          <div className="dx-meter-top">
            <span className="dx-meter-label">Ecosystem stability</span>
            <span className="dx-meter-value">Relatively stable</span>
          </div>
          <div className="dx-meter-bar"><div className="dx-meter-fill" /></div>
          <div className="dx-meter-scale">
            <span>Fragile</span><span>Cyclical</span><span>Stable</span><span>Resilient</span>
          </div>
          <div className="dx-meter-note">
            Cyclical but resilient — hiring rises when apartment projects are active and slows when real estate slows.
          </div>
        </motion.div>
      </div>

      {/* CHAINS */}
      <div className="dx-block">
        <div className="dx-section-head">
          <div>
            <div className="dx-section-label">Butterfly Effect</div>
            <h2 className="dx-section-title">Three chains that decide the role</h2>
            <p className="dx-section-tag">Trace how a shock at the top ripples down to fresher openings.</p>
          </div>
        </div>

        <div className="dx-chain-wrap">
          <div className="dx-chain-tabs" role="tablist">
            {chains.map((c, i) => {
              const ac = accentMap[c.accent];
              const isActive = i === activeChain;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`dx-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveChain(i)}
                >
                  <div className="dx-tab-num" style={{ color: ac.label }}>{c.number} · {c.tag}</div>
                  <div className="dx-tab-title">{c.title}</div>
                  {isActive && (
                    <motion.div
                      layoutId="dx-tab-underline"
                      className="dx-tab-underline"
                      style={{ background: `linear-gradient(90deg, ${ac.dot}, transparent)` }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="dx-chain-body"
              style={{ color: a.dot }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <div className="dx-trigger-card" style={{ borderColor: a.ring }}>
                <div className="dx-trigger-glow" style={{ background: a.glow }} />
                <div className="dx-trigger-eyebrow" style={{ color: a.label }}>Trigger</div>
                <div className="dx-trigger-text">If {current.trigger}</div>
                <div className="dx-meaning-quote" style={{ color: a.label }}>
                  <span style={{ color: '#E2E8F0' }}>{current.meaning}</span>
                </div>
              </div>

              <div className="dx-timeline">
                {current.steps.map((s, idx) => {
                  const isLast = idx === current.steps.length - 1;
                  return (
                    <motion.div
                      key={idx}
                      className={`dx-node ${isLast ? 'final' : ''}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08, ease: easeOut }}
                    >
                      <div className="dx-node-index" style={{ color: a.label }}>Step {String(idx + 1).padStart(2, '0')}</div>
                      <div className="dx-node-text">{s}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PILLARS */}
      <div className="dx-block">
        <div className="dx-section-head">
          <div>
            <div className="dx-section-label">Why it survives</div>
            <h2 className="dx-section-title">Why this career path is relatively safe — or risky</h2>
            <p className="dx-section-tag">
              People need housing. Cities need apartments. Apartments need RCC execution. RCC execution needs site checking.
            </p>
          </div>
        </div>

        <div className="dx-pillar-grid">
          {safetyPillars.map((p, i) => (
            <motion.div
              key={p.label}
              className="dx-pillar"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: easeOut }}
            >
              <div className="dx-pillar-idx">{String(i + 1).padStart(2, '0')}</div>
              <div className="dx-pillar-label">{p.label}</div>
              <div className="dx-pillar-reason">{p.reason}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FRESHER */}
      <div className="dx-block">
        <div className="dx-section-head">
          <div>
            <div className="dx-section-label">Fresher Opportunity Check</div>
            <h2 className="dx-section-title">Where a fresher realistically fits in</h2>
            <p className="dx-section-tag">The narrow door that stays open — and what closes it.</p>
          </div>
        </div>

        <div className="dx-fresher">
          <div className="dx-fresher-grid">
            {fresherPoints.map((p, i) => (
              <motion.div
                key={i}
                className="dx-fresher-card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: easeOut }}
              >
                <div className="dx-fresher-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="dx-fresher-text">{p}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BALANCE */}
      <div className="dx-block">
        <div className="dx-section-head">
          <div>
            <div className="dx-section-label">Final Reality</div>
            <h2 className="dx-section-title">What strengthens it — what weakens it</h2>
            <p className="dx-section-tag">The stronger the chain above the role, the safer the role becomes.</p>
          </div>
        </div>

        <div className="dx-balance">
          <motion.div
            className="dx-scale pos"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <div className="dx-scale-head">
              <div className="dx-scale-sign">+</div>
              <div className="dx-scale-title">What could strengthen it</div>
            </div>
            <ul className="dx-scale-list">
              {strengtheners.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </motion.div>

          <div className="dx-vs">
            <motion.div
              className="dx-vs-badge"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
            >
              VS
            </motion.div>
          </div>

          <motion.div
            className="dx-scale neg"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
          >
            <div className="dx-scale-head">
              <div className="dx-scale-sign">−</div>
              <div className="dx-scale-title">What could weaken it</div>
            </div>
            <ul className="dx-scale-list">
              {weakeners.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="dx-final-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p>
            This ecosystem is <strong>relatively safe, but not risk-free.</strong> It can slow down during
            real estate downturns, funding problems, material cost rises, approval delays, or weak housing
            demand — but it is not easily destroyed by AI because the work depends heavily on physical site execution.
          </p>
          <p>
            For the next 10 years, this ecosystem appears <strong>relatively stable</strong> for fresher
            opportunities, but it is cyclical. Hiring rises when apartment projects are active and slows when real estate slows.
          </p>
          <p>
            <strong>Primary reason it survives:</strong> RCC apartment construction still needs daily human site verification.
          </p>
        </motion.div>
      </div>

      {/* TAKEAWAY */}
      <motion.div
        className="dx-takeaway"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div className="dx-takeaway-label">One-line memory takeaway</div>
        <div className="dx-takeaway-text">
          Junior Site Engineer roles survive when RCC apartment projects keep needing daily site verification.
        </div>
        <div className="dx-takeaway-underline" />
      </motion.div>
    </div>
  );
};

export default DomainExplore;
