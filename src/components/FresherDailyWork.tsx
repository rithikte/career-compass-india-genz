import React from 'react';

const styles = `
.fdw-root {
  --bg: #06080d;
  --panel: rgba(255,255,255,0.03);
  --panel-2: rgba(255,255,255,0.05);
  --border: rgba(255,255,255,0.08);
  --border-strong: rgba(255,255,255,0.14);
  --text: #e7ecf3;
  --muted: #9aa4b2;
  --accent: #6ee7d7;
  --accent-2: #a78bfa;
  --amber: #f5c26b;
  background:
    radial-gradient(1200px 600px at 85% -10%, rgba(110,231,215,0.10), transparent 60%),
    radial-gradient(900px 500px at -10% 30%, rgba(167,139,250,0.10), transparent 60%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  min-height: 100vh;
  padding: clamp(28px, 5vw, 72px) clamp(14px, 3.5vw, 56px);
  width: 100%;
  box-sizing: border-box;
}
.fdw-wrap { max-width: 1240px; margin: 0 auto; }

.fdw-eyebrow {
  font-size: clamp(8px, 0.9vw, 11px);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.fdw-eyebrow::before {
  content: '';
  width: 22px; height: 1px;
  background: var(--accent);
  display: inline-block;
}
.fdw-headline {
  font-family: 'Poppins', 'Inter', sans-serif;
  font-size: clamp(1.9rem, 4.5vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 14px 0 12px;
}
.fdw-headline-gradient {
  background: linear-gradient(135deg, #F8FAFC 0%, #A5B4FC 55%, #7DD3FC 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fdw-sub {
  font-size: clamp(11px, 1.15vw, 15px);
  line-height: 1.65;
  color: var(--muted);
  max-width: 780px;
}

.fdw-section { margin-top: clamp(36px, 5vw, 72px); }
.fdw-h2 {
  font-family: 'Poppins', 'Inter', sans-serif;
  font-size: clamp(1.35rem, 2.6vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 6px;
  background: linear-gradient(180deg, #fff 0%, #b7c0cc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fdw-kicker {
  font-size: clamp(8px, 0.85vw, 10px);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-2);
  font-weight: 600;
  margin-bottom: 12px;
}
.fdw-lede {
  font-size: clamp(11px, 1.1vw, 14px);
  line-height: 1.7;
  color: var(--muted);
  max-width: 820px;
  margin-bottom: 22px;
}

.fdw-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: clamp(16px, 2vw, 24px);
  transition: transform 220ms ease, box-shadow 260ms ease, border-color 220ms ease, background 220ms ease;
  outline: none;
}
.fdw-card:hover, .fdw-card:focus-visible, .fdw-card.active {
  transform: translateY(-2px);
  border-color: rgba(110,231,215,0.35);
  background: var(--panel-2);
  box-shadow:
    0 0 0 1px rgba(110,231,215,0.18) inset,
    0 10px 30px -12px rgba(110,231,215,0.25),
    0 0 40px -6px rgba(167,139,250,0.18);
}
@media (hover: none) {
  .fdw-card:active {
    transform: translateY(-2px);
    border-color: rgba(110,231,215,0.35);
    box-shadow:
      0 0 0 1px rgba(110,231,215,0.18) inset,
      0 10px 30px -12px rgba(110,231,215,0.25);
  }
}

.fdw-table-wrap {
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--panel);
  transition: transform 220ms ease, box-shadow 260ms ease, border-color 220ms ease;
  outline: none;
}
.fdw-table-wrap:hover, .fdw-table-wrap:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(110,231,215,0.35);
  box-shadow:
    0 0 0 1px rgba(110,231,215,0.18) inset,
    0 10px 30px -12px rgba(110,231,215,0.25),
    0 0 40px -6px rgba(167,139,250,0.18);
}
.fdw-table { width: 100%; border-collapse: collapse; font-size: clamp(11px, 1.05vw, 14px); }
.fdw-table thead th {
  text-align: left;
  padding: 14px 16px;
  font-size: clamp(8.4px, 0.85vw, 11px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid var(--border);
  font-weight: 600;
}
.fdw-table tbody td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  color: #d5dbe4;
  vertical-align: top;
  line-height: 1.55;
}
.fdw-table tbody tr:last-child td { border-bottom: none; }
.fdw-table tbody tr:hover td { background: rgba(110,231,215,0.04); }
.fdw-pct {
  display: inline-flex; align-items: center; gap: 8px;
  font-variant-numeric: tabular-nums;
  color: var(--accent);
  font-weight: 600;
}
.fdw-pct .bar {
  width: clamp(48px, 8vw, 96px);
  height: 4px;
  border-radius: 999px;
  background: rgba(110,231,215,0.15);
  overflow: hidden;
  position: relative;
}
.fdw-pct .bar span {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 999px;
}

.fdw-total {
  display: flex; justify-content: flex-end;
  padding: 12px 16px;
  font-size: clamp(9px, 0.9vw, 11px);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--muted);
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
}

.fdw-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.fdw-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: clamp(8px, 0.8vw, 10px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
}
.fdw-tag.good { background: rgba(110,231,215,0.12); color: var(--accent); border: 1px solid rgba(110,231,215,0.25); }
.fdw-tag.warn { background: rgba(245,194,107,0.12); color: var(--amber); border: 1px solid rgba(245,194,107,0.28); }

.fdw-list { list-style: none; padding: 0; margin: 12px 0 0; }
.fdw-list li {
  position: relative;
  padding: 8px 0 8px 20px;
  font-size: clamp(11px, 1.05vw, 14px);
  color: #d5dbe4;
  line-height: 1.6;
  border-bottom: 1px dashed rgba(255,255,255,0.06);
}
.fdw-list li:last-child { border-bottom: none; }
.fdw-list li::before {
  content: '';
  position: absolute; left: 0; top: 16px;
  width: 8px; height: 1px;
  background: var(--accent);
}
.fdw-list.warn li::before { background: var(--amber); }

.fdw-comm {
  border-left: 2px solid var(--accent);
  padding: 10px 0 10px 16px;
  color: #d5dbe4;
  font-size: clamp(11px, 1.1vw, 14px);
  line-height: 1.7;
}

.fdw-reality {
  margin-top: 24px;
  padding: clamp(18px, 2.4vw, 28px);
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(167,139,250,0.06), rgba(110,231,215,0.04));
  border: 1px solid var(--border-strong);
}
.fdw-reality p {
  font-size: clamp(11px, 1.1vw, 14px);
  line-height: 1.7;
  color: #d5dbe4;
  margin: 0 0 10px;
}
.fdw-reality p:last-child { margin-bottom: 0; }

.fdw-takeaway {
  margin-top: 22px;
  padding: clamp(18px, 2.4vw, 26px);
  border-radius: 14px;
  border: 1px solid rgba(110,231,215,0.28);
  background: linear-gradient(90deg, rgba(110,231,215,0.06), rgba(167,139,250,0.06));
  font-size: clamp(12px, 1.2vw, 15px);
  line-height: 1.6;
  color: #eaf3f1;
  font-weight: 500;
}
.fdw-takeaway span {
  display: block;
  font-size: clamp(8.4px, 0.9vw, 10.5px);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
  font-weight: 600;
}

/* Mobile table stacking */
@media (max-width: 640px) {
  .fdw-table thead { display: none; }
  .fdw-table, .fdw-table tbody, .fdw-table tr, .fdw-table td { display: block; width: 100%; }
  .fdw-table tbody tr {
    border-bottom: 1px solid var(--border);
    padding: 8px 4px;
  }
  .fdw-table tbody td {
    border: none;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: flex-start;
  }
  .fdw-table tbody td::before {
    content: attr(data-label);
    font-size: 8.4px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 600;
    flex-shrink: 0;
    min-width: 40%;
  }
}

/* Mobile cards for Time Distribution */
.fdw-time-desktop { display: block; }
.fdw-time-mobile { display: none; }

.fdw-time-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  transition: transform 220ms ease, box-shadow 260ms ease, border-color 220ms ease, background 220ms ease;
}
.fdw-time-card:hover, .fdw-time-card:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(110,231,215,0.35);
  background: var(--panel-2);
  box-shadow:
    0 0 0 1px rgba(110,231,215,0.18) inset,
    0 10px 30px -12px rgba(110,231,215,0.25),
    0 0 40px -6px rgba(167,139,250,0.18);
}

.fdw-time-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.fdw-time-index {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #06080d;
  background: var(--accent);
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.fdw-time-name {
  flex: 1 1 auto;
  font-size: clamp(13px, 3.2vw, 15px);
  font-weight: 600;
  color: #e7ecf3;
  line-height: 1.3;
}

.fdw-time-value {
  color: var(--accent);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  font-size: clamp(13px, 3.5vw, 15px);
  flex-shrink: 0;
}

.fdw-time-bar {
  height: 5px;
  border-radius: 999px;
  background: rgba(110,231,215,0.12);
  overflow: hidden;
  margin: 12px 0 0;
}
.fdw-time-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 999px;
}

.fdw-time-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(148,163,184,0.25), transparent);
  margin: 12px 0;
}

.fdw-time-reality {
  font-size: clamp(12px, 3vw, 14px);
  line-height: 1.55;
  color: #d5dbe4;
}

.fdw-time-reality-label {
  display: block;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  margin-bottom: 6px;
}

.fdw-time-total {
  display: flex;
  justify-content: flex-end;
  padding: 12px 4px;
  font-size: clamp(9px, 2.5vw, 11px);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 640px) {
  .fdw-time-desktop { display: none; }
  .fdw-time-mobile { display: block; }
}
`;


const timeDist = [
  ['Reinforcement verification', '30%', 30, 'Most repeated RCC checking work.'],
  ['Formwork and level verification', '22%', 22, 'Shuttering errors delay concrete work.'],
  ['Concrete execution monitoring', '18%', 18, 'Pour days need constant observation.'],
  ['Layout and survey support', '16%', 16, 'Gridlines and levels must match.'],
  ['Progress documentation', '14%', 14, 'Daily records protect project control.'],
];

const interaction = [
  ['Worker / Technician Interaction', '35%', 35, 'Work happens through labour teams.'],
  ['Reporting To Seniors', '25%', 25, 'Seniors control final decisions.'],
  ['Team Coordination', '20%', 20, 'Site work needs constant follow-up.'],
  ['Documentation Coordination', '12%', 12, 'Records need daily updating.'],
  ['Vendor Interaction', '8%', 8, 'Material issues need basic follow-up.'],
];

const tasks = [
  ['1', 'Check reinforcement against RCC drawings', 'Daily', 'Directly Handled', 'Seniors approve final corrections.'],
  ['2', 'Verify shuttering line, level, and support', 'Daily', 'Assisted', 'Mistakes affect slab quality.'],
  ['3', 'Monitor concrete placing, vibration, and curing', 'Pour days', 'Assisted', 'Fresher observes and reports issues.'],
  ['4', 'Assist layout, gridline, and level marking', 'Weekly / stage-wise', 'Assisted', 'Surveyor or senior leads it.'],
  ['5', 'Record daily progress and basic quantities', 'Daily', 'Directly Handled', 'Poor records create site confusion.'],
];

const Pct: React.FC<{ v: string; n: number }> = ({ v, n }) => (
  <span className="fdw-pct">
    <span className="bar"><span style={{ width: `${n * 2.5}%`, maxWidth: '100%' }} /></span>
    {v}
  </span>
);

const FresherDailyWork: React.FC = () => {
  return (
    <div className="fdw-root">
      <style>{styles}</style>
      <div className="fdw-wrap">
        {/* Hero */}
        <div className="fdw-eyebrow">What Freshers Actually Do</div>
        <h1 className="fdw-headline fdw-headline-gradient">The real daily work<br />after joining this role.</h1>
        <p className="fdw-sub">
          A Junior Site Engineer in RCC apartment execution spends most of the day on-site checking work,
          following drawings, updating seniors, and recording progress. This is not a design-heavy role — the
          fresher mainly verifies, observes, measures, reports, and follows up under senior control.
        </p>

        {/* Time distribution */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 01 · Time Split</div>
          <h2 className="fdw-h2">Typical Daily Time Distribution</h2>
          <p className="fdw-lede">How a full workday breaks down across the five recurring on-site activities.</p>

          <div className="fdw-table-wrap" tabIndex={0}>
            <table className="fdw-table">
              <thead>
                <tr>
                  <th style={{ width: '38%' }}>Activity</th>
                  <th style={{ width: '22%' }}>Approx. Time Share</th>
                  <th>Ground Reality</th>
                </tr>
              </thead>
              <tbody>
                {timeDist.map((r, i) => (
                  <tr key={i}>
                    <td data-label="Activity">{r[0]}</td>
                    <td data-label="Time Share"><Pct v={r[1] as string} n={r[2] as number} /></td>
                    <td data-label="Ground Reality">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="fdw-total">Total · 100%</div>
          </div>
        </section>

        {/* People Interaction */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 02 · People Interaction</div>
          <h2 className="fdw-h2">Where Communication Time Goes</h2>
          <p className="fdw-lede">
            Freshers talk more with workers than clients. Most communication is about drawings, levels, steel, concrete, and progress.
          </p>

          <div className="fdw-table-wrap" tabIndex={0}>
            <table className="fdw-table">
              <thead>
                <tr>
                  <th style={{ width: '38%' }}>Interaction Type</th>
                  <th style={{ width: '22%' }}>Time Share</th>
                  <th>Ground Reality</th>
                </tr>
              </thead>
              <tbody>
                {interaction.map((r, i) => (
                  <tr key={i}>
                    <td data-label="Interaction">{r[0]}</td>
                    <td data-label="Time Share"><Pct v={r[1] as string} n={r[2] as number} /></td>
                    <td data-label="Ground Reality">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="fdw-total">Total · 100%</div>
          </div>

          <div className="fdw-comm" style={{ marginTop: 20 }}>
            <strong style={{ color: '#fff' }}>Communication Reality —</strong>{' '}
            Freshers talk more with workers than clients. Most communication is about drawings, levels, steel, concrete, and progress.
          </div>
        </section>

        {/* Work Style Summary */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 03 · Work Style Fit</div>
          <h2 className="fdw-h2">Who Thrives, Who Struggles</h2>
          <p className="fdw-lede">A quick reality filter before choosing this role.</p>

          <div className="fdw-grid-2">
            <div className="fdw-card" tabIndex={0}>
              <span className="fdw-tag good">Best Suited For</span>
              <ul className="fdw-list">
                <li>Comfortable working on active construction sites</li>
                <li>Okay with heat, dust, and noise</li>
                <li>Can talk firmly with workers</li>
                <li>Learns better by seeing real work</li>
                <li>Likes execution more than classroom theory</li>
              </ul>
            </div>
            <div className="fdw-card" tabIndex={0}>
              <span className="fdw-tag warn">Less Suited For</span>
              <ul className="fdw-list warn">
                <li>Wants only office-based engineering work</li>
                <li>Avoids rough site conditions</li>
                <li>Feels shy correcting workers</li>
                <li>Needs perfect instructions every time</li>
                <li>Dislikes repeated checking work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Tasks */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 04 · Real Fresher Tasks</div>
          <h2 className="fdw-h2">The Five Tasks You Will Actually Do</h2>
          <p className="fdw-lede">Concrete tasks freshers perform, how often, and under what level of ownership.</p>

          <div className="fdw-table-wrap" tabIndex={0}>
            <table className="fdw-table">
              <thead>
                <tr>
                  <th style={{ width: '6%' }}>#</th>
                  <th style={{ width: '32%' }}>What You Will Do</th>
                  <th style={{ width: '16%' }}>How Often</th>
                  <th style={{ width: '18%' }}>Responsibility</th>
                  <th>Ground Reality</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, i) => (
                  <tr key={i}>
                    <td data-label="No." style={{ color: 'var(--accent)', fontWeight: 600 }}>{t[0]}</td>
                    <td data-label="Task">{t[1]}</td>
                    <td data-label="Frequency">{t[2]}</td>
                    <td data-label="Level">
                      <span className={`fdw-tag ${t[3] === 'Directly Handled' ? 'good' : 'warn'}`}>{t[3]}</span>
                    </td>
                    <td data-label="Ground Reality">{t[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Responsibility Reality */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 05 · Ownership Boundaries</div>
          <h2 className="fdw-h2">Responsibility Reality</h2>
          <div className="fdw-card" tabIndex={0}>
            <ul className="fdw-list">
              <li>Freshers check work; seniors approve corrections.</li>
              <li>Freshers report issues; seniors choose solutions.</li>
              <li>Freshers assist layout; surveyors control accuracy.</li>
              <li>Freshers observe concrete; seniors decide acceptance.</li>
              <li>Freshers record progress; seniors verify reports.</li>
            </ul>
          </div>
        </section>

        {/* Reality Check */}
        <section className="fdw-section">
          <div className="fdw-kicker">Section 06 · Reality Check</div>
          <h2 className="fdw-h2">What Students Get Wrong</h2>
          <div className="fdw-reality">
            <p>Most students think site engineering means designing buildings. In reality, freshers mostly check drawings against actual work.</p>
            <p>A normal day is full of walking, checking, asking, correcting, and reporting. The work is repetitive but mistakes are costly.</p>
            <p>Students struggle because the site is faster and rougher than college. Workers will not wait while a fresher opens textbooks.</p>
            <p>Students adapt faster when they can read drawings, speak clearly, and stay alert on-site. Quiet theory-only students usually struggle first.</p>
          </div>

          <div className="fdw-takeaway">
            <span>One-Line Memory Takeaway</span>
            A Junior Site Engineer survives by checking RCC work daily and reporting site reality clearly.
          </div>
        </section>
      </div>
    </div>
  );
};

export default FresherDailyWork;
