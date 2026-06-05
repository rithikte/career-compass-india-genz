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
      <section className="relative px-5 sm:px-10 lg:px-16 pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(110% 80% at 80% 0%, rgba(109,212,200,0.10), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(109,212,200,0.05), transparent 60%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(199,204,214,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,204,214,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(120% 100% at 75% 0%, #000, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(120% 100% at 75% 0%, #000, transparent 70%)',
          }}
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
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
              <span style={{ color: 'rgba(245,247,250,0.55)' }}>Wrong direction does.</span>
            </h1>
            <p
              className="mt-6 sm:mt-8"
              style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '54ch' }}
            >
              <span style={{ color: C.text, fontWeight: 500 }}>
                Most students choose a path without knowing where it leads.
              </span>{' '}
              Undergraduate Maps helps them see the reality before they commit.
            </p>
          </div>

          {/* Content module — the four real mapping pillars */}
          <div className="lg:col-span-5">
            <div
              className="p-6 sm:p-8"
              style={{
                backgroundColor: 'rgba(18,26,47,0.55)',
                border: `1px solid ${C.hairline}`,
                borderRadius: 18,
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.625rem',
                    letterSpacing: '0.22em',
                    fontWeight: 500,
                    color: C.faint,
                  }}
                >
                  What you’ll see
                </span>
                <span
                  className="inline-block"
                  style={{ width: 28, height: 1, backgroundColor: C.accent, opacity: 0.6 }}
                />
              </div>

              <ul className="mt-6 space-y-5">
                {[
                  ['Degree → Work Reality', 'What the degree becomes in industry.'],
                  ['Industry → Execution', 'Where the work actually happens.'],
                  ['Subjects → Real Usage', 'Which subjects matter in real jobs.'],
                  ['Skills → Hiring Visibility', 'What companies expect from freshers.'],
                ].map(([title, body], i, arr) => (
                  <li
                    key={title}
                    className="pb-5"
                    style={{
                      borderBottom: i < arr.length - 1 ? `1px solid ${C.hairline}` : 'none',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Satoshi, Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: C.accent,
                      }}
                    >
                      {title}
                    </p>
                    <p className="mt-1.5" style={{ color: C.muted, fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── Visibility Before Investment ───────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>What is needed</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Students need visibility before they invest years in a direction.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Degree → Work Reality',
              body: 'Understand what the degree becomes in real industry environments.',
            },
            {
              title: 'Industry → Execution Mapping',
              body: 'See where the work actually happens.',
            },
            {
              title: 'Subjects → Real Usage',
              body: 'Understand which subjects continue to matter in actual jobs.',
            },
            {
              title: 'Skills → Hiring Visibility',
              body: 'Know what companies truly expect from freshers.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-8"
              style={{
                backgroundColor: 'rgba(18,26,47,0.6)',
                border: `1px solid ${C.hairline}`,
                borderRadius: 14,
              }}
            >
              <h3
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: C.accent,
                }}
              >
                {card.title}
              </h3>
              <p
                className="mt-3"
                style={{ color: C.muted, fontSize: '0.9375rem', lineHeight: 1.7 }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 max-w-3xl"
          style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          Understand the path before entering blindly.
        </p>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── The Difference ─────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>The difference</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Most platforms stop at guidance.
            <br />
            We go further — into work reality.
          </h2>
        </div>

        <div
          className="mt-10 grid gap-6 sm:grid-cols-2"
          style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
        >
          <div>
            <p className="font-semibold" style={{ color: C.text }}>
              Others show:
            </p>
            <ul className="mt-3 space-y-2">
              <li>career names</li>
              <li>salary estimates</li>
              <li>generic roadmaps</li>
              <li>motivational advice</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold" style={{ color: C.accent }}>
              Undergraduate Maps shows:
            </p>
            <ul className="mt-3 space-y-2">
              <li>real fresher work</li>
              <li>execution systems</li>
              <li>industry clusters</li>
              <li>subject-to-job connection</li>
              <li>first 3-year reality</li>
            </ul>
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── The Reality ────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>The reality</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
            }}
          >
            Students have rarely been shown what careers actually look like before entering them.
          </h2>
        </div>

        <div
          className="mt-10 grid gap-6 sm:grid-cols-2"
          style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
        >
          <div>
            <p className="font-semibold" style={{ color: C.text }}>
              For years, students were told:
            </p>
            <ul className="mt-3 space-y-2">
              <li>what to study,</li>
              <li>which college to choose,</li>
              <li>and which careers are "good."</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold" style={{ color: C.text }}>
              Very few were shown:
            </p>
            <ul className="mt-3 space-y-2">
              <li>how the work actually feels,</li>
              <li>where freshers struggle,</li>
              <li>what industries truly expect,</li>
              <li>or what survives after entering the field.</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-10 max-w-3xl"
          style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          Undergraduate Maps was built to make career paths visible before years are invested blindly.
        </p>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── Career Decisions ─────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>Career decisions</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
            }}
          >
            Career decisions should not be shaped by:
          </h2>
        </div>

        <div
          className="mt-10 grid gap-4 sm:grid-cols-2"
          style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
        >
          {[
            { no: 'Not Trends', yes: 'But Genuine Interest' },
            { no: 'No Relatives', yes: 'But Academic Strengths' },
            { no: 'No Hype', yes: 'But Real Industry Opportunities' },
            { no: 'Or Random Advice', yes: 'But Long-term Career Fit' },
          ].map((item) => (
            <div
              key={item.no}
              className="p-6 sm:p-8"
              style={{
                backgroundColor: 'rgba(18,26,47,0.6)',
                border: `1px solid ${C.hairline}`,
                borderRadius: 14,
              }}
            >
              <p style={{ color: C.faint }}>{item.no}</p>
              <p className="mt-2 font-semibold" style={{ color: C.accent }}>
                {item.yes}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="font-semibold" style={{ color: C.text }}>
            A Career Affects:
          </p>
          <ul
            className="mt-3 space-y-2"
            style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
          >
            <li>Time,</li>
            <li>Confidence,</li>
            <li>Money,</li>
            <li>Identity,</li>
            <li>And Future Stability.</li>
          </ul>
        </div>

        <p
          className="mt-10 max-w-3xl"
          style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          Students deserve deeper clarity before they commit to that path.
        </p>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── National Impact ─────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Label>The bigger picture</Label>
          <h2
            className="mt-6 sm:mt-8"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.8vw, 2.4rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
            }}
          >
            A country grows faster when its youth move with clarity.
          </h2>
        </div>

        <div
          className="mt-10 grid gap-6 sm:grid-cols-2"
          style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.75 }}
        >
          <div>
            <p className="font-semibold" style={{ color: C.text }}>
              The future of a nation is not built only by:
            </p>
            <ul className="mt-3 space-y-2">
              <li>degrees,</li>
              <li>marks,</li>
              <li>or placements.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold" style={{ color: C.text }}>
              It is built when students:
            </p>
            <ul className="mt-3 space-y-2">
              <li>understand their direction,</li>
              <li>develop relevant skills,</li>
              <li>enter the right industries,</li>
              <li>and grow with long-term awareness.</li>
            </ul>
          </div>
        </div>

        <p
          className="mt-10 max-w-3xl"
          style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          India has talent. What it still lacks is structured career clarity before commitment.
        </p>

        <p
          className="mt-6 max-w-3xl"
          style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          That is the gap Undergraduate Maps was built to solve.
        </p>
      </section>
    </div>
  );
};

export default PremiumHomePage;
