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
    </div>
  );
};

export default PremiumHomePage;
