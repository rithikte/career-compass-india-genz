import React from 'react';

/**
 * Premium Intelligence Homepage — Hero Only
 * Clean, calm, authoritative single-section landing.
 */

const C = {
  bg: '#0B1020',
  text: '#F5F7FA',
  accent: '#6DD4C8',
  muted: 'rgba(245,247,250,0.62)',
  faint: 'rgba(245,247,250,0.42)',
  hairline: 'rgba(199,204,214,0.14)',
};

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
  return (
    <div
      style={{ backgroundColor: C.bg, color: C.text, fontFamily: 'Inter, sans-serif' }}
      className="rounded-2xl overflow-hidden"
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 pt-20 sm:pt-32 pb-20 sm:pb-32">
        <div className="max-w-3xl">
          <Label>Undergraduate Maps</Label>
          <h1
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            Careers don’t fail.
            <br />
            Wrong direction does.
          </h1>
          <p
            className="mt-6 sm:mt-8"
            style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '65ch' }}
          >
            Millions of students work hard for their future.
            Very few get a clear view of where their path actually leads.
            Undergraduate Maps was built to bring career reality into view before commitment.
          </p>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── The Problem ────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>The gap</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
            }}
          >
            The problem is not lack of talent.
            <br />
            It is lack of clarity before choosing a path.
          </h2>

          <div
            className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2"
            style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
          >
            <div>
              <p className="font-semibold" style={{ color: C.text }}>
                Most students know:
              </p>
              <ul className="mt-3 space-y-2">
                <li>courses,</li>
                <li>colleges,</li>
                <li>and salary trends.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold" style={{ color: C.text }}>
                Very few understand:
              </p>
              <ul className="mt-3 space-y-2">
                <li>actual daily work,</li>
                <li>industry pressure,</li>
                <li>or hiring difficulty.</li>
              </ul>
            </div>
          </div>

          <p
            className="mt-8 sm:mt-10"
            style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '65ch' }}
          >
            That gap silently wastes years.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomePage;
