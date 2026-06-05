import React from 'react';

/**
 * Premium Intelligence Homepage
 * Visual direction: Swiss discipline + Apple storytelling + Bento modular + Editorial authority.
 * Self-contained dark theme (page-specific palette) — calm, premium, never noisy.
 */

const C = {
  bg: '#0B1020',
  card: '#121A2F',
  text: '#F5F7FA',
  accent: '#6DD4C8',
  accent2: '#B8FFF6',
  success: '#8FBFA3',
  warning: '#FF7B72',
  border: '#C7CCD6',
  overview: '#18233D',
  expanded: '#141D33',
  deep: '#101827',
};

const muted = 'rgba(245,247,250,0.62)';
const faint = 'rgba(245,247,250,0.42)';
const hairline = 'rgba(199,204,214,0.14)';

const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block uppercase"
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.6875rem',
      letterSpacing: '0.22em',
      fontWeight: 500,
      color: C.accent,
    }}
  >
    {children}
  </span>
);

const PremiumHomePage = () => {
  const visibilityMetrics = [
    { value: '50+', label: 'Career paths mapped to real outcomes' },
    { value: '100%', label: 'Data-backed degree intelligence' },
    { value: '320px+', label: 'Validated across every screen size' },
  ];

  const platformCards = [
    {
      surface: C.overview,
      title: 'See the full route',
      body: 'Subject interest → degree → industry → role → salary → certification. Every step is visible before you commit.',
    },
    {
      surface: C.expanded,
      title: 'Verified, not guessed',
      body: 'Outcomes grounded in government, industry and recruiter intelligence — not opinions or trends.',
    },
    {
      surface: C.deep,
      title: 'Built for real decisions',
      body: 'Salaries, growth, AI impact and placement reality, structured so a choice can be made with confidence.',
    },
  ];

  const realities = [
    {
      stat: 'Millions',
      copy: 'of students pick a degree each year based on pressure, guesswork or trends — and discover the outcome too late.',
    },
    {
      stat: 'One map',
      copy: 'replaces scattered advice with a single, honest view of where each degree actually leads.',
    },
  ];

  return (
    <div
      style={{ backgroundColor: C.bg, color: C.text, fontFamily: 'Inter, sans-serif' }}
      className="rounded-2xl overflow-hidden"
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <Label>Career Intelligence Infrastructure</Label>
          <h1
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.1rem, 6vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            Career decisions,
            <br />
            understood deeply.
          </h1>
          <p
            className="mt-6 sm:mt-8"
            style={{ color: muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '65ch' }}
          >
            Undergraduate Maps turns every degree into a clear, verified route — from the
            subject you choose to the salary, role and reality on the other side. Built to
            create confidence, not noise.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <span style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: C.accent }} />
              <span style={{ color: faint, fontSize: '0.875rem' }}>Verified intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: C.success }} />
              <span style={{ color: faint, fontSize: '0.875rem' }}>Calm, structured clarity</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: hairline }} />

      {/* ── Why care (visibility metrics) ────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-12 sm:py-16">
        <Label>Why it matters</Label>
        <div className="mt-8 grid gap-px sm:grid-cols-3" style={{ backgroundColor: hairline, borderRadius: 12, overflow: 'hidden' }}>
          {visibilityMetrics.map((m) => (
            <div key={m.label} style={{ backgroundColor: C.card }} className="p-6 sm:p-8">
              <div
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '2.25rem',
                  color: C.accent2,
                  letterSpacing: '-0.01em',
                }}
              >
                {m.value}
              </div>
              <p className="mt-3" style={{ color: muted, fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: hairline }} />

      {/* ── Why trust (bento platform cards) ─────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="max-w-2xl">
          <Label>Why trust this</Label>
          <h2
            className="mt-5"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            A single source of truth for the journey ahead.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {platformCards.map((c) => (
            <div
              key={c.title}
              className="p-6 sm:p-8 transition-colors duration-300"
              style={{
                backgroundColor: c.surface,
                border: `1px solid ${hairline}`,
                borderRadius: 16,
              }}
            >
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.0625rem' }}>
                {c.title}
              </h3>
              <p className="mt-3" style={{ color: muted, fontSize: '0.9375rem', lineHeight: 1.7 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: hairline }} />

      {/* ── Why this matters (editorial national reality) ────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-14 sm:py-20" style={{ backgroundColor: C.deep }}>
        <Label>The national reality</Label>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {realities.map((r) => (
            <div key={r.stat}>
              <div
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  color: C.accent,
                }}
              >
                {r.stat}
              </div>
              <p
                className="mt-4"
                style={{ color: muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '60ch' }}
              >
                {r.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: hairline }} />

      {/* ── What next (closing belief) ───────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Choose with clarity.
          </h2>
          <p
            className="mt-6 mx-auto"
            style={{ color: muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '60ch' }}
          >
            Every student deserves a clear future. Every parent deserves peace of mind.
            Explore the maps and see exactly where each path leads.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              className="transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundColor: C.accent,
                color: C.bg,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.9375rem',
                padding: '14px 28px',
                borderRadius: 10,
              }}
            >
              Explore the career maps
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomePage;
