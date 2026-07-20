import React from 'react';
import { motion } from 'framer-motion';

interface GrowthRow {
  period: string;
  outlook: string;
  reality: string;
}

interface GrowthSection {
  id: string;
  number: string;
  title: string;
  meaning: string;
  rows: GrowthRow[];
  scoreReason: string;
  studentUnderstanding: string;
  accent: 'sky' | 'teal' | 'emerald' | 'amber' | 'violet' | 'rose';
}

const growthSections: GrowthSection[] = [
  {
    id: 'domain',
    number: '01',
    title: 'Domain Growth',
    meaning: 'Construction Site Execution — converting construction plans into actual completed site work.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'Housing delivery pipeline keeps site work active.' },
      { period: 'Next 5 Years', outlook: 'Growing', reality: 'Residential construction remains a large demand driver.' },
      { period: 'Next 10 Years', outlook: 'Stable to Growing', reality: 'Cyclical, but physical execution cannot disappear.' },
    ],
    scoreReason: 'Site execution has strong survival because construction still needs people on-site to check work, coordinate labour, and report progress. AI can support planning, but it cannot physically verify steel, shuttering, levels, and concrete.',
    studentUnderstanding: 'Buildings still need people at the site. Drawings alone do not build apartments.',
    accent: 'sky',
  },
  {
    id: 'role',
    number: '02',
    title: 'Core Family Role Growth',
    meaning: 'Site Engineering — supporting daily execution, checking, reporting, and coordination at construction sites.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'Ongoing housing projects need junior site support.' },
      { period: 'Next 5 Years', outlook: 'Stable to Growing', reality: 'Builders need site engineers across project cycles.' },
      { period: 'Next 10 Years', outlook: 'Stable', reality: 'Hiring continues, but slows during real estate downturns.' },
    ],
    scoreReason: 'Site Engineering remains strong because daily execution needs junior engineers for observation, verification, records, and follow-up. The risk is economic cyclicality, not AI replacement.',
    studentUnderstanding: 'Every active construction site needs someone checking work daily. Freshers enter because seniors cannot check everything alone.',
    accent: 'teal',
  },
  {
    id: 'sub-function',
    number: '03',
    title: 'Sub-function Growth',
    meaning: 'RCC Structural Execution — reinforcement, shuttering, concreting, levels, and structural progress.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'RCC apartments remain common in urban housing.' },
      { period: 'Next 5 Years', outlook: 'Stable to Growing', reality: 'RCC work remains central to apartment construction.' },
      { period: 'Next 10 Years', outlook: 'Stable', reality: 'Methods may improve, but RCC checking remains needed.' },
    ],
    scoreReason: 'RCC structural execution has strong fresher relevance because steel, formwork, concrete, and levels need physical verification. Prefab and digital tools may improve workflows, but normal RCC apartment work will still need site checking.',
    studentUnderstanding: 'Concrete and steel mistakes must be caught before work moves ahead. That keeps junior site roles alive.',
    accent: 'emerald',
  },
  {
    id: 'industry',
    number: '04',
    title: 'Industry Growth',
    meaning: 'Building Construction Companies — building residential, commercial, and other building projects.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'India\'s construction market is projected to expand.' },
      { period: 'Next 5 Years', outlook: 'Growing', reality: 'Building construction remains a major construction segment.' },
      { period: 'Next 10 Years', outlook: 'Stable to Growing', reality: 'Growth continues, but cycles and funding affect hiring.' },
    ],
    scoreReason: 'India\'s construction market is projected to grow strongly toward 2030, and building construction remains a major part of the market. Residential construction held a large share of India\'s construction market in 2025, supporting continued site manpower need.',
    studentUnderstanding: 'As long as buildings are built, construction companies need junior engineers. But hiring can slow when projects slow.',
    accent: 'amber',
  },
  {
    id: 'sub-industry',
    number: '05',
    title: 'Sub-industry Growth',
    meaning: 'Residential Building Construction — homes, apartments, villas, and residential communities.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'Large home delivery pipelines keep execution active.' },
      { period: 'Next 5 Years', outlook: 'Growing', reality: 'Urban housing demand supports residential construction.' },
      { period: 'Next 10 Years', outlook: 'Stable to Growing', reality: 'Demand survives, but affordability cycles matter.' },
    ],
    scoreReason: 'Residential construction has strong long-term support from urban housing demand and projected market growth. Reports project India\'s residential construction market growing through 2034, while 2026 has a record housing delivery pipeline across top cities.',
    studentUnderstanding: 'People will continue needing homes. Apartment construction may slow in bad cycles, but it will not vanish.',
    accent: 'violet',
  },
  {
    id: 'cluster',
    number: '06',
    title: 'Cluster Growth',
    meaning: 'RCC Apartment Projects — apartment projects where RCC frame execution is the main site work.',
    rows: [
      { period: 'Next 3 Years', outlook: 'Growing', reality: 'Apartment deliveries need slab, column, and concrete execution.' },
      { period: 'Next 5 Years', outlook: 'Stable to Growing', reality: 'Urban apartment projects continue in major cities.' },
      { period: 'Next 10 Years', outlook: 'Stable', reality: 'Strong need, but exposed to real estate cycles.' },
    ],
    scoreReason: 'RCC apartment projects create direct fresher work because reinforcement checks, formwork checks, concrete monitoring, layout verification, and reporting repeat floor after floor. The main risk is not technology replacement; it is project slowdown, cost pressure, and builder funding cycles.',
    studentUnderstanding: 'Apartment sites repeatedly need junior engineers because floors repeat the same execution cycle. That repetition creates fresher opportunities.',
    accent: 'rose',
  },
];

const rankedSummary = [
  { rank: 1, layer: 'Residential Building Construction', strength: 'Strong', reason: 'Strong housing demand supports long-term project flow.' },
  { rank: 2, layer: 'Construction Site Execution', strength: 'Strong', reason: 'Physical execution cannot be fully automated.' },
  { rank: 3, layer: 'Building Construction Companies', strength: 'Strong', reason: 'Large market growth keeps site manpower needed.' },
  { rank: 4, layer: 'Site Engineering', strength: 'Strong', reason: 'Freshers support daily checking and reporting.' },
  { rank: 5, layer: 'RCC Structural Execution', strength: 'Strong', reason: 'RCC frame work still needs physical verification.' },
  { rank: 6, layer: 'RCC Apartment Projects', strength: 'Strong', reason: 'Strong but more exposed to real estate cycles.' },
];

const accentMap: Record<string, { dot: string; label: string; glow: string; border: string; bg: string }> = {
  sky: { dot: '#7DD3FC', label: '#BAE6FD', glow: 'rgba(56,189,248,0.18)', border: 'rgba(56,189,248,0.30)', bg: 'rgba(56,189,248,0.06)' },
  teal: { dot: '#5EEAD4', label: '#99F6E4', glow: 'rgba(45,212,191,0.18)', border: 'rgba(45,212,191,0.30)', bg: 'rgba(45,212,191,0.06)' },
  emerald: { dot: '#86EFAC', label: '#BBF7D0', glow: 'rgba(74,222,128,0.18)', border: 'rgba(74,222,128,0.30)', bg: 'rgba(74,222,128,0.06)' },
  amber: { dot: '#FCD34D', label: '#FDE68A', glow: 'rgba(251,191,36,0.18)', border: 'rgba(251,191,36,0.30)', bg: 'rgba(251,191,36,0.06)' },
  violet: { dot: '#C4B5FD', label: '#DDD6FE', glow: 'rgba(167,139,250,0.18)', border: 'rgba(167,139,250,0.30)', bg: 'rgba(167,139,250,0.06)' },
  rose: { dot: '#FDA4AF', label: '#FECDD3', glow: 'rgba(251,113,133,0.18)', border: 'rgba(251,113,133,0.30)', bg: 'rgba(251,113,133,0.06)' },
};

const EcosystemGrowth: React.FC = () => {
  return (
    <div className="ug-ecosystem-growth">
      <style>{`
        .ug-ecosystem-growth {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          background:
            radial-gradient(1200px 600px at 15% -10%, rgba(56,189,248,0.10), transparent 60%),
            radial-gradient(900px 500px at 100% 10%, rgba(168,85,247,0.10), transparent 60%),
            #070B18;
          color: #E6ECF5;
          border-radius: 24px;
          padding: clamp(24px, 5vw, 72px) clamp(18px, 4vw, 56px);
        }
        .ug-eg-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
          color: #7DD3FC; padding: 8px 14px; border-radius: 999px;
          background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.25);
        }
        .ug-eg-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: #7DD3FC; box-shadow: 0 0 12px #7DD3FC; }
        .ug-eg-h1 {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700; letter-spacing: -0.02em; line-height: 1.05;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem); margin: 18px 0 14px;
          background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ug-eg-sub { max-width: 820px; color: #94A3B8; font-size: clamp(0.9rem, 1.6vw, 1rem); line-height: 1.7; }
        .ug-eg-section-label {
          font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #94A3B8; margin-bottom: 12px;
        }
        .ug-eg-section-title {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(1.35rem, 2.6vw, 1.9rem); letter-spacing: -0.01em;
          color: #F1F5F9; margin-bottom: 8px;
        }
        .ug-eg-section-tag { color: #64748B; font-size: 0.9rem; margin-bottom: 28px; }

        /* ===== Redesigned Layer Card ===== */
        .ug-eg-grid {
          display: grid; gap: clamp(20px, 2.4vw, 28px);
          grid-template-columns: 1fr;
        }
        .ug-eg-card {
          position: relative;
          padding: clamp(24px, 3vw, 40px);
          padding-left: clamp(28px, 3.5vw, 52px);
          background:
            radial-gradient(600px 200px at 0% 0%, var(--accent-tint, rgba(56,189,248,0.06)), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px; backdrop-filter: blur(14px);
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), border-color .3s, box-shadow .3s;
          overflow: hidden;
        }
        .ug-eg-card::before {
          content: ''; position: absolute; left: 0; top: 16%; bottom: 16%;
          width: 3px; border-radius: 0 3px 3px 0;
          background: linear-gradient(180deg, var(--accent-solid), transparent);
          box-shadow: 0 0 24px var(--accent-glow);
        }
        .ug-eg-card:hover { transform: translateY(-4px); border-color: var(--accent-border); }

        .ug-eg-card-top {
          display: grid; gap: clamp(18px, 2.4vw, 32px);
          grid-template-columns: 1fr; align-items: start;
          padding-bottom: clamp(20px, 2.4vw, 28px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: clamp(20px, 2.4vw, 28px);
        }
        @media (min-width: 820px) {
          .ug-eg-card-top { grid-template-columns: minmax(220px, 320px) 1fr; }
        }
        .ug-eg-index {
          display: flex; align-items: baseline; gap: 14px;
        }
        .ug-eg-index-num {
          font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(3.4rem, 7vw, 5.2rem); line-height: 0.9;
          letter-spacing: -0.04em;
          background: linear-gradient(180deg, var(--accent-label) 0%, rgba(255,255,255,0.08) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ug-eg-index-tag {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--accent-label); padding: 5px 10px; border-radius: 999px;
          background: var(--accent-tint); border: 1px solid var(--accent-border);
          white-space: nowrap;
        }
        .ug-eg-headline-wrap {
          display: flex; flex-direction: column; gap: 10px;
        }
        .ug-eg-card-title {
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: clamp(1.25rem, 2.1vw, 1.6rem); color: #F8FAFC;
          letter-spacing: -0.015em; line-height: 1.2;
        }
        .ug-eg-meaning-line {
          font-size: 0.88rem; color: #94A3B8; line-height: 1.65;
        }
        .ug-eg-meaning-line strong { color: #F1F5F9; font-weight: 600; }

        /* Timeline outlook */
        .ug-eg-timeline {
          display: grid; gap: 12px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-bottom: clamp(20px, 2.4vw, 28px);
        }
        .ug-eg-tl-cell {
          position: relative; padding: 16px 16px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform .3s ease, border-color .3s;
        }
        .ug-eg-tl-cell:hover { transform: translateY(-2px); border-color: var(--accent-border); }
        .ug-eg-tl-period {
          font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase;
          color: #64748B; margin-bottom: 10px; font-weight: 600;
        }
        .ug-eg-tl-outlook {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Poppins', sans-serif; font-weight: 600;
          font-size: 0.92rem; color: var(--accent-label);
          margin-bottom: 10px; letter-spacing: -0.005em;
        }
        .ug-eg-tl-outlook-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent-solid);
          box-shadow: 0 0 12px var(--accent-solid);
        }
        .ug-eg-tl-bar {
          height: 3px; border-radius: 3px; margin-bottom: 12px;
          background: rgba(255,255,255,0.06); overflow: hidden;
        }
        .ug-eg-tl-bar span {
          display: block; height: 100%;
          background: linear-gradient(90deg, var(--accent-solid), var(--accent-label));
          border-radius: 3px;
        }
        .ug-eg-tl-reality {
          font-size: 0.82rem; color: #CBD5E1; line-height: 1.55;
        }

        /* Reasoning row */
        .ug-eg-reason-row {
          display: grid; gap: 14px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 820px) {
          .ug-eg-reason-row { grid-template-columns: 1fr 1fr; }
        }
        .ug-eg-reason {
          padding: 18px 20px; border-radius: 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .ug-eg-reason-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase;
          font-weight: 700; margin-bottom: 10px;
        }
        .ug-eg-reason-label::before {
          content: ''; width: 14px; height: 1px; background: currentColor; opacity: 0.6;
        }
        .ug-eg-reason-text { font-size: 0.85rem; color: #CBD5E1; line-height: 1.7; }
        .ug-eg-remember {
          position: relative;
          padding: 18px 20px 18px 44px; border-radius: 16px;
          background: linear-gradient(135deg, var(--accent-tint), rgba(255,255,255,0.015));
          border: 1px solid var(--accent-border);
          overflow: hidden;
        }
        .ug-eg-remember::before {
          content: '"'; position: absolute;
          left: 14px; top: 4px;
          font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: 3.2rem; line-height: 1;
          color: var(--accent-label); opacity: 0.4;
        }
        .ug-eg-remember-label {
          font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase;
          font-weight: 700; margin-bottom: 8px; color: var(--accent-label);
        }
        .ug-eg-remember-text {
          font-family: 'Poppins', sans-serif; font-weight: 500;
          font-size: 0.92rem; color: #F8FAFC; line-height: 1.55;
          letter-spacing: -0.005em;
        }
        .ug-eg-panel {
          padding: clamp(24px, 3.5vw, 40px);
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
        }
        .ug-eg-rank-table-wrap {
          overflow-x: auto;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .ug-eg-rank-table {
          width: 100%; min-width: 640px; border-collapse: collapse;
          font-size: 0.85rem;
        }
        .ug-eg-rank-table th {
          text-align: left; padding: 14px 16px;
          background: rgba(255,255,255,0.06);
          color: #F1F5F9; font-weight: 600; letter-spacing: 0.02em;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ug-eg-rank-table td {
          padding: 14px 16px; color: #CBD5E1; line-height: 1.55;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ug-eg-rank-table tr:last-child td { border-bottom: none; }
        .ug-eg-rank-table tr:nth-child(even) { background: rgba(255,255,255,0.02); }
        .ug-eg-rank-cell {
          width: 32px; height: 32px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 0.78rem;
          color: #0B1220; background: #7DD3FC;
        }
        .ug-eg-strength-pill {
          display: inline-flex; padding: 5px 12px; border-radius: 999px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.02em;
          background: rgba(74,222,128,0.12); color: #86EFAC; border: 1px solid rgba(74,222,128,0.25);
        }
        .ug-eg-final-copy { color: #CBD5E1; font-size: 0.92rem; line-height: 1.75; }
        .ug-eg-final-copy p { margin-bottom: 14px; }
        .ug-eg-final-copy strong { color: #F1F5F9; font-weight: 600; }
        .ug-eg-block { margin-top: clamp(40px, 6vw, 72px); }

        .ug-eg-takeaway {
          margin-top: clamp(32px, 4vw, 48px);
          padding: clamp(24px, 4vw, 40px);
          border-radius: 22px; text-align: center;
          background: linear-gradient(135deg, rgba(56,189,248,0.10), rgba(168,85,247,0.10));
          border: 1px solid rgba(125,211,252,0.25);
          position: relative; overflow: hidden;
        }
        .ug-eg-takeaway::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(600px 200px at 50% 0%, rgba(125,211,252,0.15), transparent);
          pointer-events: none;
        }
        .ug-eg-takeaway-label {
          font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #7DD3FC; margin-bottom: 14px;
        }
        .ug-eg-takeaway-text {
          font-family: 'Poppins', sans-serif; font-weight: 500;
          font-size: clamp(0.9rem, 1.8vw, 1.25rem); line-height: 1.55;
          color: #F8FAFC; letter-spacing: -0.01em; max-width: 920px; margin: 0 auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .ug-ecosystem-growth * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="ug-eg-eyebrow"><span className="dot" /> 10-Year Ecosystem Growth Analysis</span>
        <h1 className="ug-eg-h1">Will this career keep creating fresher opportunities?</h1>
        <p className="ug-eg-sub">
          A layer-by-layer forecast for the Junior Site Engineer role — from domain and core role
          growth, down to sub-industry and cluster demand over the next 10 years.
        </p>
      </motion.div>

      {/* Growth Sections */}
      <div className="ug-eg-block">
        <div className="ug-eg-section-label">Growth Layers</div>
        <h2 className="ug-eg-section-title">Six layers that decide long-term demand</h2>
        <p className="ug-eg-section-tag">
          Each layer shows the simple meaning, the 3/5/10-year outlook, and why it matters for a student.
        </p>

        <div className="ug-eg-grid">
          {growthSections.map((section, i) => {
            const a = accentMap[section.accent];
            return (
              <motion.div
                key={section.id}
                className="ug-eg-card"
                style={{ boxShadow: `0 0 0 1px transparent, 0 20px 40px -20px ${a.glow}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ borderColor: a.border } as any}
              >
                <div className="ug-eg-card-header">
                  <div>
                    <div className="ug-eg-card-num" style={{ color: a.label }}>{section.number} — Layer</div>
                    <div className="ug-eg-card-title" style={{ marginTop: 6 }}>{section.title}</div>
                  </div>
                </div>

                <div className="ug-eg-card-meaning">
                  <strong style={{ color: '#F1F5F9' }}>{section.meaning.split(' — ')[0]}</strong>
                  {' — '}{section.meaning.split(' — ')[1]}
                </div>

                <div className="ug-eg-table-wrap">
                  <table className="ug-eg-table">
                    <thead>
                      <tr>
                        <th>Period</th>
                        <th>Growth Outlook</th>
                        <th>Ground Reality</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.period}</td>
                          <td>
                            <span
                              className="ug-eg-outlook"
                              style={{ background: a.bg, color: a.label, border: `1px solid ${a.border}` }}
                            >
                              <span className="ug-eg-outlook-dot" style={{ background: a.dot }} />
                              {row.outlook}
                            </span>
                          </td>
                          <td>{row.reality}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="ug-eg-card-block">
                  <div className="ug-eg-block-label" style={{ color: a.label }}>Score Reason</div>
                  <div className="ug-eg-block-text">{section.scoreReason}</div>
                </div>

                <div className="ug-eg-card-block">
                  <div className="ug-eg-block-label" style={{ color: '#FDE68A' }}>Student Understanding</div>
                  <div className="ug-eg-block-text">{section.studentUnderstanding}</div>
                  <div
                    className="ug-eg-block-highlight"
                    style={{ background: a.bg, border: `1px solid ${a.border}` }}
                  >
                    <strong style={{ color: a.label }}>Remember this:</strong>{' '}
                    <span style={{ color: '#F8FAFC' }}>
                      {section.studentUnderstanding}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Final Ecosystem Summary */}
      <div className="ug-eg-block">
        <div className="ug-eg-section-label">Final Ecosystem Summary</div>
        <h2 className="ug-eg-section-title">Relative 10-year growth strength</h2>
        <p className="ug-eg-section-tag">Layers ranked by how strongly they support fresher opportunities over the next decade.</p>

        <motion.div
          className="ug-eg-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="ug-eg-rank-table-wrap">
            <table className="ug-eg-rank-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Layer</th>
                  <th>10-Year Strength</th>
                  <th>Why It Ranks Here</th>
                </tr>
              </thead>
              <tbody>
                {rankedSummary.map((item, idx) => (
                  <motion.tr
                    key={item.rank}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    <td><span className="ug-eg-rank-cell">{item.rank}</span></td>
                    <td><strong style={{ color: '#F1F5F9', fontWeight: 600 }}>{item.layer}</strong></td>
                    <td><span className="ug-eg-strength-pill">{item.strength}</span></td>
                    <td>{item.reason}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="ug-eg-final-copy" style={{ marginTop: 28 }}>
          <p>
            This ecosystem is <strong>likely to survive</strong> because homes, apartments, RCC structures,
            and physical construction execution remain recurring needs. The fresher role benefits directly
            because daily site checking, measurement, documentation, and reporting cannot be fully replaced
            by AI or remote work.
          </p>
          <p>
            <strong>What could weaken it:</strong> real estate slowdowns, high material costs, weak builder
            funding, delayed approvals, affordability pressure, and project cancellations. These risks affect
            hiring speed more than long-term role survival.
          </p>
          <p>
            <strong>What could strengthen it:</strong> urban housing demand, tier-2 city growth, formal
            project management, stricter quality expectations, faster project delivery pressure, and better
            site documentation systems.
          </p>
        </div>
      </div>

      {/* Takeaway */}
      <motion.div
        className="ug-eg-takeaway"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="ug-eg-takeaway-label">One-line Memory Takeaway</div>
        <div className="ug-eg-takeaway-text">
          The Junior Site Engineer ecosystem is built on recurring physical execution work —
          so it stays relevant, but it moves in real estate cycles.
        </div>
      </motion.div>
    </div>
  );
};

export default EcosystemGrowth;
