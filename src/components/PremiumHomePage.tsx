import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="inline-block"
                animate={{ scaleX: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 40, height: 2, borderRadius: 2, backgroundColor: C.accent }}
              />
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.accent }}
              />
            </motion.div>
            <motion.h1
              className="mt-5 sm:mt-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.h1>
            <motion.p
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: C.muted, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '54ch' }}
            >
              <span style={{ color: C.text, fontWeight: 500 }}>
                Most students choose a path without knowing where it leads.
              </span>{' '}
              Undergraduate Maps helps them see the reality before they commit.
            </motion.p>
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
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(80% 60% at 100% 0%, rgba(109,212,200,0.08), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <div className="relative max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Label>The gap</Label>
            <h2
              className="mt-6 sm:mt-8"
              style={{
                fontFamily: 'Satoshi, Inter, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                maxWidth: '20ch',
              }}
            >
              The problem is not lack of talent.
              <br />
              <span style={{ color: 'rgba(245,247,250,0.55)' }}>It is lack of clarity before choosing a path.</span>
            </h2>
          </motion.div>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2">
            {[
              {
                tag: 'What most students know',
                tone: C.muted,
                items: ['Courses', 'Colleges', 'Salary trends'],
              },
              {
                tag: 'What Most Students Miss',
                tone: C.accent,
                items: ['Actual daily work', 'Industry pressure', 'Hiring difficulty'],
              },
            ].map((col, ci) => (
              <motion.div
                key={col.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 + ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl p-6 sm:p-8"
                style={{
                  border: `1px solid ${C.hairline}`,
                  background:
                    ci === 1
                      ? 'linear-gradient(160deg, rgba(109,212,200,0.10), rgba(109,212,200,0.02))'
                      : 'rgba(245,247,250,0.02)',
                }}
              >
                <span
                  className="inline-block uppercase"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                    color: col.tone,
                  }}
                >
                  {col.tag}
                </span>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                      style={{ fontSize: '1.0625rem', color: C.text }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 999,
                          backgroundColor: ci === 1 ? C.accent : C.faint,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 sm:mt-12 flex items-center gap-4"
            style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
          >
            <span style={{ width: 32, height: 1, backgroundColor: C.accent, flexShrink: 0 }} />
            <span style={{ color: C.muted }}>
              That gap silently <span style={{ color: C.text, fontWeight: 600 }}>wastes years.</span>
            </span>
          </motion.p>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── Visibility Before Investment ───────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(75% 55% at 0% 0%, rgba(109,212,200,0.07), transparent 55%), radial-gradient(70% 60% at 100% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
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
            Students need visibility
            <br />
            <span style={{ color: 'rgba(245,247,250,0.55)' }}>before they invest years in a direction.</span>
          </h2>
        </motion.div>

        <div className="relative mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2">
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
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 sm:p-8 transition-colors duration-300"
              style={{
                background: 'linear-gradient(160deg, rgba(18,26,47,0.7), rgba(18,26,47,0.35))',
                border: `1px solid ${C.hairline}`,
                borderRadius: 16,
              }}
            >
              {/* Accent edge */}
              <span
                className="absolute left-0 top-6 bottom-6"
                style={{ width: 2, borderRadius: 2, backgroundColor: C.accent, opacity: 0.5 }}
              />
              <span
                className="block"
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: C.faint,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="mt-3"
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
                className="mt-2.5"
                style={{ color: C.muted, fontSize: '0.9375rem', lineHeight: 1.7 }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-10 sm:mt-12 flex items-center gap-4 max-w-3xl"
          style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          <span style={{ width: 32, height: 1, backgroundColor: C.accent, flexShrink: 0 }} />
          <span style={{ color: C.muted }}>
            Understand the path before <span style={{ color: C.text, fontWeight: 600 }}>entering blindly.</span>
          </span>
        </motion.p>
      </section>


      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── The Difference ─────────────────────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(75% 55% at 100% 0%, rgba(109,212,200,0.07), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
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
            <span>Most platforms stop at guidance.</span>
            <br />
            <span style={{ color: 'rgba(245,247,250,0.55)' }}>We go further — into work reality.</span>
          </h2>
        </motion.div>

        <div className="relative mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 items-stretch">
          {[
            {
              tag: 'Others show',
              tone: C.muted,
              dim: true,
              items: ['Career names', 'Salary estimates', 'Generic roadmaps', 'Motivational advice'],
            },
            {
              tag: 'Undergraduate Maps shows',
              tone: C.accent,
              dim: false,
              items: [
                'Real fresher work',
                'Execution systems',
                'Industry clusters',
                'Subject-to-job connection',
                'First 3-year reality',
              ],
            },
          ].map((col, ci) => (
            <motion.div
              key={col.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full overflow-hidden rounded-2xl p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1"
              style={{
                border: `1px solid ${col.dim ? C.hairline : 'rgba(109,212,200,0.32)'}`,
                background: col.dim
                  ? 'linear-gradient(165deg, rgba(245,247,250,0.045), rgba(245,247,250,0.01))'
                  : 'linear-gradient(160deg, rgba(109,212,200,0.14), rgba(109,212,200,0.02))',
                boxShadow: col.dim
                  ? 'inset 0 1px 0 rgba(245,247,250,0.04)'
                  : '0 24px 60px -28px rgba(109,212,200,0.45), inset 0 1px 0 rgba(109,212,200,0.18)',
              }}
            >
              {/* top accent strip */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: col.dim
                    ? 'linear-gradient(90deg, transparent, rgba(245,247,250,0.18), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(109,212,200,0.7), transparent)',
                }}
              />
              {/* ambient glow for the highlighted card */}
              {!col.dim && (
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(109,212,200,0.28), transparent 70%)' }}
                />
              )}

              <div className="relative flex items-center gap-3">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    border: `1px solid ${col.dim ? C.hairline : 'rgba(109,212,200,0.4)'}`,
                    background: col.dim ? 'rgba(245,247,250,0.03)' : 'rgba(109,212,200,0.12)',
                    color: col.tone,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  {col.dim ? '–' : '✓'}
                </span>
                <span
                  className="inline-block uppercase"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                    color: col.tone,
                  }}
                >
                  {col.tag}
                </span>
              </div>

              <div
                className="relative mt-5 mb-1 h-px"
                style={{ backgroundColor: col.dim ? C.hairline : 'rgba(109,212,200,0.2)' }}
              />

              <ul className="relative mt-5 space-y-1">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors duration-300"
                    style={{ fontSize: '1.0625rem', color: col.dim ? C.muted : C.text }}
                  >
                    <span
                      className="flex items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        flexShrink: 0,
                        background: col.dim ? 'rgba(245,247,250,0.05)' : 'rgba(109,212,200,0.16)',
                        color: col.dim ? C.faint : C.accent,
                        fontSize: '0.7rem',
                        lineHeight: 1,
                      }}
                    >
                      {col.dim ? '✕' : '✓'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>



      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── The Reality ────────────────────────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(75% 55% at 0% 0%, rgba(109,212,200,0.07), transparent 55%), radial-gradient(70% 60% at 100% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
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
            <span>Students have rarely been shown what careers actually look like</span>
            <br />
            <span style={{ color: 'rgba(245,247,250,0.55)' }}>before entering them.</span>
          </h2>
        </motion.div>

        <div className="relative mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 items-start">
          {[
            {
              tag: 'For years, students were told',
              tone: C.muted,
              dim: true,
              items: ['What to study', 'Which college to choose', 'Which careers are "good"'],
            },
            {
              tag: 'Very few were shown',
              tone: C.accent,
              dim: false,
              items: [
                'How the work actually feels',
                'Where freshers struggle',
                'What industries truly expect',
                'What survives after entering the field',
              ],
            },
          ].map((col, ci) => (
            <motion.div
              key={col.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 sm:p-8"
              style={{
                border: `1px solid ${col.dim ? C.hairline : 'rgba(109,212,200,0.28)'}`,
                background: col.dim
                  ? 'rgba(245,247,250,0.02)'
                  : 'linear-gradient(160deg, rgba(109,212,200,0.10), rgba(109,212,200,0.02))',
              }}
            >
              <span
                className="inline-block uppercase"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  color: col.tone,
                }}
              >
                {col.tag}
              </span>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                    style={{ fontSize: '1.0625rem', color: col.dim ? C.muted : C.text }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        backgroundColor: col.dim ? C.faint : C.accent,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-10 sm:mt-12 flex items-center gap-4 max-w-3xl"
          style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          <span style={{ width: 32, height: 1, backgroundColor: C.accent, flexShrink: 0 }} />
          <span style={{ color: C.muted }}>
            Undergraduate Maps was built to make career paths{' '}
            <span style={{ color: C.text, fontWeight: 600 }}>visible before years are invested blindly.</span>
          </span>
        </motion.p>
      </section>


      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── Career Decisions ─────────────────────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(75% 55% at 100% 0%, rgba(109,212,200,0.07), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
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
        </motion.div>

        <div className="relative mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2">
          {[
            { no: 'Not On Trends', yes: 'But On Genuine Interest' },
            { no: 'No Relatives', yes: 'But Academic Strengths' },
            { no: 'No Hype', yes: 'But Real Industry Opportunities' },
            { no: 'Or Random Advice', yes: 'But Long-term Career Fit' },
          ].map((item, i) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-8"
              style={{
                background: 'linear-gradient(160deg, rgba(18,26,47,0.7), rgba(18,26,47,0.35))',
                border: `1px solid ${C.hairline}`,
                borderRadius: 16,
              }}
            >
              <p
                className="flex items-center gap-2"
                style={{ color: C.faint, fontSize: '0.9375rem', textDecoration: 'line-through' }}
              >
                {item.no}
              </p>
              <p
                className="mt-3 flex items-center gap-2 font-semibold"
                style={{ color: C.accent, fontSize: '1.0625rem' }}
              >
                <span style={{ width: 14, height: 1, backgroundColor: C.accent, flexShrink: 0 }} />
                {item.yes}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 rounded-2xl p-6 sm:p-8"
          style={{
            border: `1px solid rgba(109,212,200,0.28)`,
            background: 'linear-gradient(160deg, rgba(109,212,200,0.10), rgba(109,212,200,0.02))',
          }}
        >
          <span
            className="inline-block uppercase"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              fontWeight: 600,
              color: C.accent,
            }}
          >
            A Career Affects
          </span>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {['Time', 'Confidence', 'Money', 'Identity', 'Future Stability'].map((item) => (
              <span
                key={item}
                className="flex items-center gap-3"
                style={{ fontSize: '1.0625rem', color: C.text }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: C.accent, flexShrink: 0 }}
                />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-10 sm:mt-12 flex items-center gap-4 max-w-3xl"
          style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
        >
          <span style={{ width: 32, height: 1, backgroundColor: C.accent, flexShrink: 0 }} />
          <span style={{ color: C.muted }}>
            Students deserve <span style={{ color: C.text, fontWeight: 600 }}>deeper clarity</span> before they commit to that path.
          </span>
        </motion.p>
      </section>


      <div style={{ height: 1, backgroundColor: C.hairline }} />

      {/* ── National Impact ─────────────────────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden">
        {/* Ambient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(80% 60% at 50% 0%, rgba(109,212,200,0.09), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(109,212,200,0.04), transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
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
            <span>A country grows faster</span>
            <br />
            <span style={{ color: 'rgba(245,247,250,0.55)' }}>when its youth move with clarity.</span>
          </h2>
        </motion.div>

        <div className="relative mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 items-stretch">
          {[
            {
              tag: 'A nation is not built only by',
              tone: C.muted,
              dim: true,
              items: ['Degrees', 'Marks', 'Placements'],
            },
            {
              tag: 'It is built when students',
              tone: C.accent,
              dim: false,
              items: [
                'Understand their direction',
                'Develop relevant skills',
                'Enter the right industries',
                'Grow with long-term awareness',
              ],
            },
          ].map((col, ci) => (
            <motion.div
              key={col.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full overflow-hidden rounded-2xl p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1"
              style={{
                border: `1px solid ${col.dim ? C.hairline : 'rgba(109,212,200,0.32)'}`,
                background: col.dim
                  ? 'linear-gradient(165deg, rgba(245,247,250,0.045), rgba(245,247,250,0.01))'
                  : 'linear-gradient(160deg, rgba(109,212,200,0.14), rgba(109,212,200,0.02))',
                boxShadow: col.dim
                  ? 'inset 0 1px 0 rgba(245,247,250,0.04)'
                  : '0 24px 60px -28px rgba(109,212,200,0.45), inset 0 1px 0 rgba(109,212,200,0.18)',
              }}
            >
              {/* top accent strip */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: col.dim
                    ? 'linear-gradient(90deg, transparent, rgba(245,247,250,0.18), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(109,212,200,0.7), transparent)',
                }}
              />
              {/* ambient glow for the highlighted card */}
              {!col.dim && (
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(109,212,200,0.28), transparent 70%)' }}
                />
              )}

              <div className="relative flex items-center gap-3">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    border: `1px solid ${col.dim ? C.hairline : 'rgba(109,212,200,0.4)'}`,
                    background: col.dim ? 'rgba(245,247,250,0.03)' : 'rgba(109,212,200,0.12)',
                    color: col.tone,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  {col.dim ? '–' : '✓'}
                </span>
                <span
                  className="inline-block uppercase"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                    color: col.tone,
                  }}
                >
                  {col.tag}
                </span>
              </div>

              <div
                className="relative mt-5 mb-1 h-px"
                style={{ backgroundColor: col.dim ? C.hairline : 'rgba(109,212,200,0.2)' }}
              />

              <ul className="relative mt-5 space-y-1">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors duration-300"
                    style={{ fontSize: '1.0625rem', color: col.dim ? C.muted : C.text }}
                  >
                    <span
                      className="flex items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        flexShrink: 0,
                        background: col.dim ? 'rgba(245,247,250,0.05)' : 'rgba(109,212,200,0.16)',
                        color: col.dim ? C.faint : C.accent,
                        fontSize: '0.7rem',
                        lineHeight: 1,
                      }}
                    >
                      {col.dim ? '✕' : '✓'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 overflow-hidden rounded-3xl p-9 sm:p-14 text-center"
          style={{
            border: `1px solid rgba(109,212,200,0.3)`,
            background: 'linear-gradient(165deg, rgba(109,212,200,0.12), rgba(11,16,32,0.2) 60%)',
            boxShadow: '0 40px 120px -40px rgba(109,212,200,0.35)',
          }}
        >
          {/* Glow halo */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(60% 80% at 50% 0%, rgba(109,212,200,0.18), transparent 60%)',
            }}
          />

          <motion.span
            aria-hidden
            className="relative mx-auto block"
            initial={{ scaleX: 0.4, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: 48, height: 2, borderRadius: 2, backgroundColor: C.accent }}
          />

          <p
            className="relative mt-7"
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.4vw, 2.25rem)',
              lineHeight: 1.22,
              letterSpacing: '-0.02em',
              color: C.text,
            }}
          >
            India has talent. What it still lacks is{' '}
            <span style={{ color: C.accent }}>structured career clarity before commitment.</span>
          </p>
          <p
            className="relative mx-auto mt-5"
            style={{ color: C.muted, fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '46ch' }}
          >
            That is the gap{' '}
            <span style={{ color: C.text, fontWeight: 600 }}>Undergraduate Maps</span> was built to solve.
          </p>
        </motion.div>
      </section>


    </div>
  );
};

export default PremiumHomePage;
