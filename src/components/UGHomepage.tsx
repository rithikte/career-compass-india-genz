import React, { useEffect, useRef, useState } from 'react';
import {
  Compass,
  Sparkles,
  Layers,
  Building2,
  Briefcase,
  Wrench,
  FolderKanban,
  Target,
  GraduationCap,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ---------- In-view reveal helper ---------- */
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 300ms ease-out, transform 300ms ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------- Design tokens ---------- */
const COLORS = {
  bg: '#0B1020',
  card: '#121A2F',
  text: '#F5F7FA',
  muted: '#9BA6BF',
  border: '#232C44',
  glass: 'rgba(255,255,255,0.03)',
};

const cardStyle: React.CSSProperties = {
  background: COLORS.card,
  borderRadius: 20,
  border: `1px solid ${COLORS.border}`,
  padding: 24,
  boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

/* ---------- Section label ---------- */
const SectionLabel: React.FC<{ accent: string; children: React.ReactNode }> = ({
  accent,
  children,
}) => (
  <span
    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]"
    style={{ ...techFont, color: accent }}
  >
    <span
      className="h-1.5 w-1.5 rounded-full"
      style={{ background: accent }}
    />
    {children}
  </span>
);

/* ---------- Primary button ---------- */
const PrimaryButton: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className="ug-primary-btn inline-flex items-center gap-2 font-medium"
    style={{
      ...bodyFont,
      background: '#6DD4C8',
      color: COLORS.bg,
      borderRadius: 16,
      padding: '16px 28px',
      transition: 'transform 250ms ease-out, filter 250ms ease-out',
    }}
  >
    {children}
  </button>
);

/* ---------- Journey steps ---------- */
const JOURNEY = [
  'Subject',
  'Domain',
  'Industry',
  'Career Path',
  'Fresher Role',
  'Skills',
  'Projects',
  'Hiring Reality',
];

const DISCOVER = [
  { icon: Layers, title: 'Domains & Industries', desc: 'Where your subject applies in the real world.' },
  { icon: Briefcase, title: 'Fresher Roles', desc: 'The actual first jobs you can start with.' },
  { icon: Wrench, title: 'Skills & Tools', desc: 'What you need to learn and practice.' },
  { icon: FolderKanban, title: 'Mini & Major Projects', desc: 'Practical work that builds your portfolio.' },
  { icon: Target, title: 'Hiring Expectations', desc: 'What companies actually look for.' },
  { icon: GraduationCap, title: 'Placement Preparation', desc: 'Get ready with clear direction.' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'How your path evolves over time.' },
];

const APPROACH = ['Subjects', 'Domains', 'Fresher Roles', 'Skills', 'Projects', 'Hiring'];

interface UGHomepageProps {
  onExplore?: () => void;
}

const UGHomepage: React.FC<UGHomepageProps> = ({ onExplore }) => {
  const handleExplore = () => {
    if (onExplore) onExplore();
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{ background: COLORS.bg, color: COLORS.text, ...bodyFont }}
      className="-mx-4 -my-6 sm:-mx-6 lg:-mx-8 sm:-my-8 rounded-none overflow-hidden"
    >
      <style>{`
        .ug-primary-btn:hover { transform: translateY(-3px); filter: brightness(1.08); }
        .ug-lift { transition: transform 250ms ease-out, box-shadow 250ms ease-out; }
        .ug-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        @media (prefers-reduced-motion: reduce) {
          .ug-reveal-line, .ug-lift, .ug-primary-btn { transition: none !important; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ============ HERO ============ */}
        <section className="pt-12 pb-12 sm:pt-24 sm:pb-16">
          <Reveal>
            <SectionLabel accent="#6DD4C8">Undergraduate Maps</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h1
              className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15]"
              style={{ ...headingFont, maxWidth: '18ch' }}
            >
              Start with what you like.{' '}
              <span style={{ color: '#6DD4C8' }}>See where it can take you.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="mt-6 text-base sm:text-lg leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '65ch' }}
            >
              Students know the subjects they like, but don't know where those
              subjects can lead.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="mt-4 text-base sm:text-lg leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              Undergraduate Maps shows you real career paths, what freshers
              actually do, and the skills, projects &amp; knowledge companies
              expect.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div
              className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-3 gap-y-3"
              style={cardStyle}
            >
              {JOURNEY.map((step, i) => (
                <React.Fragment key={step}>
                  <JourneyChip label={step} index={i} accent="#6DD4C8" />
                  {i < JOURNEY.length - 1 && (
                    <ArrowRight
                      strokeWidth={2}
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: COLORS.muted }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ WHY START WITH SUBJECTS ============ */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#89C2D9">Why Start With Subjects</SectionLabel>
            <h2
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, maxWidth: '20ch' }}
            >
              Students learn better when they are interested.
            </h2>
            <p
              className="mt-5 text-base sm:text-lg leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              When a career is connected to subjects students genuinely enjoy,
              they are more likely to stay engaged, build stronger knowledge, and
              develop relevant skills and projects.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
            {[
              {
                title: 'Better career alignment',
                desc: 'Students choose paths that match what they genuinely enjoy.',
              },
              {
                title: 'Better prepared freshers',
                desc: 'Industry gets candidates ready with real, relevant skills.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="ug-lift h-full" style={cardStyle}>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(137,194,217,0.12)' }}
                  >
                    <CheckCircle2 strokeWidth={2} className="h-6 w-6" style={{ color: '#89C2D9' }} />
                  </div>
                  <h3 className="mt-4 text-lg font-medium" style={headingFont}>
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-[1.7]" style={{ color: COLORS.muted }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ WHAT IS UNDERGRADUATE MAPS ============ */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#6E9F9A">What is Undergraduate Maps</SectionLabel>
            <h2
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, maxWidth: '20ch' }}
            >
              See where your interests can lead.
            </h2>
            <p
              className="mt-5 text-base sm:text-lg leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              Choose a subject and explore the full path — learn what freshers
              actually do, what companies expect, and what knowledge is needed for
              different opportunities.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-3">
            {JOURNEY.map((step, i) => (
              <Reveal key={step} delay={i * 70} className="md:contents">
                <div className="flex items-center gap-3 md:flex-col md:items-stretch">
                  <div
                    className="flex-1 md:w-40"
                    style={{
                      ...cardStyle,
                      padding: '16px 18px',
                      borderColor: 'rgba(110,159,154,0.35)',
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{ ...techFont, color: '#6E9F9A' }}
                    >
                      Step {i + 1}
                    </span>
                    <p className="mt-1 font-medium" style={techFont}>
                      {step}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ WHAT YOU WILL DISCOVER ============ */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#7FC8A9">What You Will Discover</SectionLabel>
            <h2
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, maxWidth: '20ch' }}
            >
              More than just career names.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DISCOVER.map((item, i) => {
              const Icon = item.icon;
              const featured = i === 0;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className={featured ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                >
                  <div className="ug-lift h-full" style={cardStyle}>
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(127,200,169,0.12)' }}
                    >
                      <Icon strokeWidth={2} className="h-6 w-6" style={{ color: '#7FC8A9' }} />
                    </div>
                    <h3 className="mt-4 text-lg font-medium" style={headingFont}>
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-[1.7]" style={{ color: COLORS.muted }}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ WHY THIS MATTERS ============ */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#FF7B72">Why This Matters</SectionLabel>
            <h2
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, maxWidth: '20ch' }}
            >
              A degree alone is not enough.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
            <Reveal>
              <div className="ug-lift h-full" style={{ ...cardStyle, borderColor: 'rgba(255,123,114,0.4)' }}>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(255,123,114,0.12)' }}
                >
                  <AlertCircle strokeWidth={2} className="h-6 w-6" style={{ color: '#FF7B72' }} />
                </div>
                <h3 className="mt-4 text-lg font-medium" style={{ ...headingFont, color: '#FF7B72' }}>
                  The gap
                </h3>
                <p className="mt-2 leading-[1.7]" style={{ color: COLORS.muted }}>
                  Companies also look for practical skills, project experience, and
                  domain knowledge — not just a certificate.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="ug-lift h-full" style={{ ...cardStyle, borderColor: 'rgba(143,191,163,0.4)' }}>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(143,191,163,0.12)' }}
                >
                  <CheckCircle2 strokeWidth={2} className="h-6 w-6" style={{ color: '#8FBFA3' }} />
                </div>
                <h3 className="mt-4 text-lg font-medium" style={{ ...headingFont, color: '#8FBFA3' }}>
                  The way forward
                </h3>
                <p className="mt-2 leading-[1.7]" style={{ color: COLORS.muted }}>
                  Knowing the path early helps you prepare with direction from the
                  very beginning.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ OUR APPROACH ============ */}
        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#8FA7BF">Our Approach</SectionLabel>
            <h2
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, maxWidth: '24ch' }}
            >
              Built around real work and industry expectations.
            </h2>
            <p
              className="mt-5 text-base sm:text-lg leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              Every career map connects academic subjects, industry domains,
              fresher roles, skills, projects, and hiring expectations into one
              structured pathway.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8" style={cardStyle}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                {APPROACH.map((node, i) => (
                  <React.Fragment key={node}>
                    <div
                      className="flex items-center gap-3 rounded-xl px-4 py-3"
                      style={{ background: 'rgba(143,167,191,0.1)', border: '1px solid rgba(143,167,191,0.3)' }}
                    >
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                        style={{ ...techFont, background: '#8FA7BF', color: COLORS.bg }}
                      >
                        {i + 1}
                      </span>
                      <span style={techFont} className="font-medium">
                        {node}
                      </span>
                    </div>
                    {i < APPROACH.length - 1 && (
                      <ArrowRight
                        strokeWidth={2}
                        className="hidden sm:block h-4 w-4 flex-shrink-0"
                        style={{ color: '#8FA7BF' }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-6 leading-[1.7]" style={{ color: COLORS.muted, maxWidth: '60ch' }}>
                The goal is simple: help students understand what lies between a
                degree and a job.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-14 sm:py-20">
          <Reveal>
            <div
              className="text-center"
              style={{
                ...cardStyle,
                padding: '48px 24px',
                borderColor: 'rgba(109,212,200,0.4)',
              }}
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(109,212,200,0.12)' }}
              >
                <Sparkles strokeWidth={2} className="h-6 w-6" style={{ color: '#6DD4C8' }} />
              </div>
              <h2
                className="mx-auto mt-6 text-2xl sm:text-4xl font-bold leading-tight"
                style={{ ...headingFont, maxWidth: '18ch' }}
              >
                Start exploring career maps
              </h2>
              <p
                className="mx-auto mt-4 leading-[1.7]"
                style={{ color: COLORS.muted, maxWidth: '60ch' }}
              >
                Discover the domains, careers, skills, projects, and opportunities
                connected to the subjects you like.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton onClick={handleExplore}>
                  Explore Now
                  <ArrowRight strokeWidth={2} className="h-5 w-5" />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

/* ---------- Journey chip with sequential reveal ---------- */
const JourneyChip: React.FC<{ label: string; index: number; accent: string }> = ({
  label,
  index,
  accent,
}) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className="rounded-lg px-3 py-1.5 text-sm font-medium ug-reveal-line"
      style={{
        ...techFont,
        color: accent,
        background: 'rgba(109,212,200,0.1)',
        border: `1px solid rgba(109,212,200,0.3)`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 250ms ease-out, transform 250ms ease-out',
        transitionDelay: `${index * 80}ms`,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
};

export default UGHomepage;
