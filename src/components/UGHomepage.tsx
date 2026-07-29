import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView as useFramerInView } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Building2,
  Briefcase,
  Wrench,
  FolderKanban,
  Target,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Shield,
  FileText,
  Search,
  Compass,
  AlertTriangle,
  Route,
  MapPin,
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

/* ---------- Staggered word-reveal heading ---------- */
const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SplitHeading: React.FC<{ id?: string; className?: string; style?: React.CSSProperties }> = ({
  id,
  className,
  style,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useFramerInView(ref, { once: true, amount: 0.6 });
  const first = ['Start', 'with', 'what', 'you', 'like.'];

  return (
    <h1 id={id} ref={ref} className={className} style={style}>
      {first.map((word, i) => (
        <span key={`f-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            custom={i}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={wordVariants}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
      <span className="inline-block" style={{ color: '#6DD4C8' }}>
        See where it can take you.
      </span>
    </h1>
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

const headingFont = { fontFamily: "'Poppins', 'Inter', sans-serif" };

const headingGradient: React.CSSProperties = {
  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #b7c0cc 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};
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

/* ---------- Secondary button ---------- */
const SecondaryButton: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className="ug-secondary-btn inline-flex items-center gap-2 font-medium"
    style={{
      ...bodyFont,
      background: 'transparent',
      color: COLORS.text,
      border: '1px solid rgba(109,212,200,0.35)',
      borderRadius: 16,
      padding: '15px 26px',
      transition: 'transform 250ms ease-out, background 250ms ease-out, border-color 250ms ease-out',
    }}
  >
    {children}
  </button>
);



/* ---------- Journey steps ---------- */
const JOURNEY = [
  { label: 'Subject — What you study', note: '' },
  { label: 'Domain — Where the knowledge is used', note: '' },
  { label: 'Industry — Where the work happens', note: '' },
  { label: 'Career Path — Your long-term direction', note: '' },
  { label: 'Fresher Role — Your first job opportunity', note: '' },
  { label: 'Skills — What to learn', note: '' },
  { label: 'Projects — What to build', note: '' },
  { label: 'Hiring Reality — What companies expect', note: '' },
];


const DISCOVER = [
  { icon: Sparkles, title: 'Skills to develop', desc: 'The exact abilities employers expect from freshers.' },
  { icon: Wrench, title: 'Tools to learn', desc: 'Industry-standard software and platforms used on the job.' },
  { icon: FolderKanban, title: 'Projects to build', desc: 'Practical work that proves you can apply what you study.' },
  { icon: Target, title: 'What companies expect', desc: 'Clear hiring criteria beyond just your degree marks.' },
  { icon: GraduationCap, title: 'How to prepare for placements', desc: 'Focused steps to get ready for interviews and tests.' },
  { icon: TrendingUp, title: 'How your career can grow', desc: 'The long-term path after your first job.' },
];

const APPROACH = [
  { label: 'College subjects', note: '' },
  { label: 'Real fresher job responsibilities', note: '' },
  { label: 'Skills used at work', note: '' },
  { label: 'Tools used in industry', note: '' },
  { label: 'Practical projects', note: '' },
  { label: 'Hiring expectations', note: '' },
];

const STATS = [
  { value: '60+', label: 'Engineering Degrees', icon: GraduationCap, color: '#89C2D9' },
  { value: '250+', label: 'Degree Variants', icon: Layers, color: '#6DD4C8' },
  { value: '300+', label: 'Subjects Mapped', icon: FileText, color: '#8FBFA3' },
  { value: '120+', label: 'Career Domains', icon: Target, color: '#7FC8A9' },
  { value: '350+', label: 'Industries Covered', icon: Building2, color: '#6E9F9A' },
  { value: '1,500+', label: 'Fresher Job Roles', icon: Briefcase, color: '#FF7B72' },
  { value: '2,000+', label: 'Skills & Tools', icon: Wrench, color: '#8FA7BF' },
  { value: '3,000+', label: 'Projects & Workflows', icon: FolderKanban, color: '#A7D4E8' },
];

interface UGHomepageProps {
  onExplore?: () => void;
  onSearchDegree?: () => void;
}

const UGHomepage: React.FC<UGHomepageProps> = ({ onExplore, onSearchDegree }) => {
  const handleExplore = () => {
    if (onExplore) onExplore();
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchDegree = () => {
    if (onSearchDegree) onSearchDegree();
    else handleExplore();
  };


  return (
    <div
      style={{ background: COLORS.bg, color: COLORS.text, ...bodyFont }}
      className="-mx-4 -my-6 sm:-mx-6 lg:-mx-8 sm:-my-8 rounded-none overflow-hidden"
    >
      <style>{`
        .ug-primary-btn:hover { transform: translateY(-3px); filter: brightness(1.08); }
        .ug-secondary-btn:hover { transform: translateY(-3px); background: rgba(109,212,200,0.10) !important; border-color: rgba(109,212,200,0.6) !important; }
        .ug-focusable:focus-visible,
        .ug-primary-btn:focus-visible,
        .ug-secondary-btn:focus-visible {
          outline: 2px solid #6DD4C8;
          outline-offset: 3px;
          border-radius: 16px;
        }

        .ug-lift { transition: transform 250ms ease-out, box-shadow 250ms ease-out; }
        .ug-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .ug-icon-box { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), background 300ms ease; }
        .ug-lift:hover .ug-icon-box { transform: translateY(-2px) scale(1.08) rotate(-3deg); background: rgba(137,194,217,0.2) !important; }
        .ug-underline { position: relative; display: inline-block; }
        .ug-underline::after {
          content: ''; position: absolute; left: 0; bottom: -4px; height: 2px; width: 100%;
          background: #89C2D9; transform: scaleX(0); transform-origin: left;
          transition: transform 350ms cubic-bezier(0.22,1,0.36,1);
        }
        .ug-lift:hover .ug-underline::after { transform: scaleX(1); }
        .ug-step:hover { border-color: rgba(110,159,154,0.7) !important; }
        .ug-step-num { transition: color 250ms ease, letter-spacing 250ms ease; }
        .ug-step:hover .ug-step-num { color: #8fbfa3; letter-spacing: 0.06em; }
        .ug-discover-card { transition: transform 250ms ease-out, box-shadow 250ms ease-out, border-color 300ms ease-out; }
        .ug-discover-card:hover { border-color: rgba(127,200,169,0.7) !important; box-shadow: 0 18px 44px rgba(0,0,0,0.32); transform: translateY(-4px); }
        .ug-discover-icon { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), background 300ms ease; }
        .ug-discover-card:hover .ug-discover-icon { transform: translateY(-2px) scale(1.08) rotate(-3deg); background: rgba(127,200,169,0.22) !important; }
        .ug-discover-title { position: relative; display: inline-block; }
        .ug-discover-title::after {
          content: ''; position: absolute; left: 0; bottom: -4px; height: 2px; width: 100%;
          background: #7FC8A9; transform: scaleX(0); transform-origin: left;
          transition: transform 350ms cubic-bezier(0.22,1,0.36,1);
        }
        .ug-discover-card:hover .ug-discover-title::after { transform: scaleX(1); }
        .ug-matters-card { transition: transform 250ms ease-out, box-shadow 250ms ease-out, border-color 300ms ease-out; }
        .ug-matters-card:hover { border-color: var(--accent-color) !important; box-shadow: 0 18px 44px rgba(0,0,0,0.32); transform: translateY(-4px); }
        .ug-matters-icon { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), background 300ms ease; }
        .ug-matters-card:hover .ug-matters-icon { transform: translateY(-2px) scale(1.08) rotate(-3deg); background: var(--accent-bg) !important; }
        .ug-matters-title { position: relative; display: inline-block; }
        .ug-matters-title::after {
          content: ''; position: absolute; left: 0; bottom: -4px; height: 2px; width: 100%;
          background: var(--accent-color); transform: scaleX(0); transform-origin: left;
          transition: transform 350ms cubic-bezier(0.22,1,0.36,1);
        }
        .ug-matters-card:hover .ug-matters-title::after { transform: scaleX(1); }
        .ug-cta-card { transition: transform 250ms ease-out, box-shadow 250ms ease-out, border-color 300ms ease-out; }
        .ug-cta-card:hover { border-color: rgba(109,212,200,0.75) !important; box-shadow: 0 22px 50px rgba(0,0,0,0.35); transform: translateY(-5px); }
        .ug-cta-icon { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), background 300ms ease; }
        .ug-cta-card:hover .ug-cta-icon { transform: translateY(-2px) scale(1.08) rotate(-4deg); background: rgba(109,212,200,0.22) !important; }
        .ug-cta-arrow { transition: transform 250ms ease-out; }
        .ug-primary-btn:hover .ug-cta-arrow { transform: translateX(3px); }
        .ug-approach-chip { transition: transform 250ms ease-out, border-color 250ms ease-out, background 250ms ease-out; }
        .ug-approach-chip:hover { transform: translateY(-3px); border-color: rgba(143,167,191,0.6) !important; background: rgba(143,167,191,0.16) !important; }
        .ug-approach-num { transition: transform 250ms cubic-bezier(0.22,1,0.36,1), background 250ms ease; }
        .ug-approach-chip:hover .ug-approach-num { transform: scale(1.12); background: #a6c0d9 !important; }
        .ug-approach-arrow { transition: transform 250ms ease-out; }
        .ug-approach-chip:hover + .ug-approach-arrow { transform: translateX(4px); }
        .ug-stat-card { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease-out, border-color 300ms ease-out, background 300ms ease-out; --stat-color: #6DD4C8; }
        .ug-stat-card:hover { transform: translateY(-6px); background: rgba(255,255,255,0.04) !important; border-color: color-mix(in srgb, var(--stat-color) 32%, transparent) !important; box-shadow: 0 18px 44px rgba(0,0,0,0.32), 0 0 30px -10px color-mix(in srgb, var(--stat-color) 18%, transparent); }
        .ug-stat-card:hover .ug-stat-icon { transform: translateY(-3px) scale(1.14); background: color-mix(in srgb, var(--stat-color) 18%, transparent) !important; }
        .ug-stat-card:hover .ug-stat-value { filter: brightness(1.15); transform: scale(1.05); }
        .ug-stat-icon { transition: transform 300ms cubic-bezier(0.22,1,0.36,1), background 300ms ease; }
        .ug-stat-value { transition: filter 250ms ease-out, transform 250ms ease-out; }
        .ug-stat-divider { position: relative; width: 32px; height: 2px; margin: 0.4rem auto; background: transparent; }
        .ug-stat-divider::after {
          content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 100%;
          background: var(--stat-color); transform: scaleX(0); transform-origin: center;
          transition: transform 400ms cubic-bezier(0.22,1,0.36,1);
        }
        .ug-stat-card:hover .ug-stat-divider::after { transform: scaleX(1); }
        .ug-stat-trust { transition: border-color 300ms ease-out, background 300ms ease-out; }
        .ug-stat-trust:hover { border-color: rgba(109,212,200,0.35) !important; background: rgba(109,212,200,0.08) !important; }
        .ug-stat-pulse { animation: ug-stat-pulse 2.4s ease-in-out infinite; }
        .ug-stat-dot { animation: ug-dot-pulse 2s ease-in-out infinite; }
        @keyframes ug-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes ug-stat-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.72; transform: scale(1.08); }
        }
        .ug-glow-word {
          text-shadow: 0 0 26px rgba(109, 212, 200, 0.25);
          animation: ug-glow 3.5s ease-in-out infinite alternate;
        }
        @keyframes ug-glow {
          from { text-shadow: 0 0 18px rgba(109, 212, 200, 0.22); }
          to { text-shadow: 0 0 46px rgba(109, 212, 200, 0.55); }
        }
        .ug-hero-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 120%; height: 120%;
          background: radial-gradient(circle at 50% 40%, rgba(109,212,200,0.16) 0%, rgba(109,212,200,0) 58%);
          animation: ug-hero-breathe 8s ease-in-out infinite alternate;
          will-change: opacity;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes ug-hero-breathe {
          from { opacity: 0.5; }
          to { opacity: 0.9; }
        }

        .ug-hero-badge {
          transition: transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease, border-color 300ms ease;
        }
        .ug-hero-badge:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 24px rgba(109, 212, 200, 0.20);
          border-color: rgba(109, 212, 200, 0.45) !important;
        }
        .ug-hero-badge-dot {
          animation: ug-badge-dot-pulse 2.4s ease-in-out infinite;
        }
        @keyframes ug-badge-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 rgba(109,212,200,0); }
          50% { opacity: 0.85; transform: scale(1.15); box-shadow: 0 0 10px rgba(109,212,200,0.5); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ug-reveal-line, .ug-lift, .ug-primary-btn, .ug-glow-word, .ug-icon-box, .ug-underline::after, .ug-step-num, .ug-discover-card, .ug-discover-icon, .ug-discover-title::after, .ug-matters-card, .ug-matters-icon, .ug-matters-title::after, .ug-cta-card, .ug-cta-icon, .ug-cta-arrow, .ug-hero-glow, .ug-approach-chip, .ug-approach-num, .ug-approach-arrow, .ug-stat-card, .ug-stat-icon, .ug-stat-value, .ug-stat-divider, .ug-stat-divider::after, .ug-stat-dot, .ug-stat-trust, .ug-stat-pulse, .ug-hero-badge, .ug-hero-badge-dot { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ============ HERO ============ */}
        <section aria-labelledby="ug-hero-heading" className="relative overflow-hidden pt-12 pb-6 sm:pt-24 sm:pb-8">
          <div className="ug-hero-glow" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-start text-left">
            <Reveal delay={60}>
              <SplitHeading
                id="ug-hero-heading"
                className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15]"
                style={{ ...headingFont, maxWidth: '18ch' }}
              />
            </Reveal>
            <Reveal delay={120}>
              <p
                className="mt-6 text-[11.2px] sm:text-[12.6px] leading-[1.7]"
                style={{ color: COLORS.muted, maxWidth: '65ch' }}
              >
                Students know the subjects they like, but don't know where those
                subjects can lead.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                className="mt-4 text-[11.2px] sm:text-[12.6px] leading-[1.7]"
                style={{ color: COLORS.muted, maxWidth: '68ch' }}
              >
                Undergraduate Maps shows you real career paths, what freshers
                actually do, and the skills, projects &amp; knowledge companies
                expect.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ============ WHY START WITH SUBJECTS ============ */}
        <section aria-labelledby="ug-why-heading" className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#89C2D9">Why Start With Subjects</SectionLabel>
            <h2
              id="ug-why-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '22ch' }}
            >
              Every career starts with knowledge.
            </h2>
            <p
              className="mt-5 text-[11.2px] sm:text-[12.6px] leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              The subjects you enjoy often become the knowledge behind real jobs.
              Starting with subjects helps you explore careers that match both your
              interests and what companies actually need.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              {
                title: 'Learn with more interest',
              },
              {
                title: 'Build stronger knowledge',
              },
              {
                title: 'Prepare with clear direction',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="ug-lift h-full flex items-center justify-center px-4 py-6" style={cardStyle}>
                  <h3 className="text-lg font-medium text-center" style={headingFont}>
                    <span className="ug-underline">{item.title}</span>
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ WHAT IS UNDERGRADUATE MAPS ============ */}
        <section aria-labelledby="ug-what-heading" className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#6E9F9A">HOW UNDERGRADUATE MAPS WORKS</SectionLabel>
            <h2
              id="ug-what-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '30ch' }}
            >
              Follow the complete journey from classroom to career.
            </h2>
            <p
              className="mt-5 text-[11.2px] sm:text-[12.6px] leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              Choose a subject and explore how it connects to real opportunities.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {JOURNEY.map((step, i) => (
              <Reveal key={step.label} delay={i * 60}>
                <div
                  className="ug-lift ug-step relative h-full overflow-hidden"
                  style={{
                    ...cardStyle,
                    padding: '18px 18px 16px',
                    borderColor: 'rgba(110,159,154,0.28)',
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[2px]"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(110,159,154,0) 0%, #6E9F9A 45%, rgba(110,159,154,0) 100%)',
                    }}
                  />
                  <div className="flex items-center gap-2.5">
                    <span
                      className="ug-step-num inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px]"
                      style={{
                        ...techFont,
                        color: '#6E9F9A',
                        border: '1px solid rgba(110,159,154,0.45)',
                        background: 'rgba(110,159,154,0.10)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[12.6px] font-medium" style={techFont}>
                      {step.label}
                    </p>
                  </div>
                  {step.note && (
                    <p
                      className="mt-2.5 text-[11.2px] leading-[1.6]"
                      style={{ color: COLORS.muted }}
                    >
                      {step.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>


        {/* ============ WHAT YOU WILL GET ============ */}
        <section aria-labelledby="ug-discover-heading" className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#7FC8A9">WHAT YOU WILL GET</SectionLabel>
            <h2
              id="ug-discover-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '20ch' }}
            >
              Know exactly how to prepare.
            </h2>
            <p className="mt-4 text-[11.2px] leading-[1.6]" style={{ color: COLORS.muted }}>
              Every career map helps you understand:
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DISCOVER.map((item, i) => {
              const featured = i === 0;
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className={featured ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                >
                  <div className="ug-lift ug-discover-card h-full" style={cardStyle}>
                    <div
                      className="ug-discover-icon flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(127,200,169,0.12)' }}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={2} className="h-5 w-5" style={{ color: '#7FC8A9' }} />
                    </div>
                    <h3 className="mt-4 text-lg font-medium" style={headingFont}>
                      <span className="ug-discover-title">{item.title}</span>
                    </h3>
                    <p className="mt-2 text-[11.2px] leading-[1.7]" style={{ color: COLORS.muted }}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ WHY THIS MATTERS ============ */}
        <section aria-labelledby="ug-matters-heading" className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#FF7B72">WHY THIS MATTERS</SectionLabel>
            <h2
              id="ug-matters-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '20ch' }}
            >
              Preparation without direction wastes time.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
            <Reveal>
              <div className="ug-lift ug-matters-card h-full" style={{ ...cardStyle, borderColor: 'rgba(255,123,114,0.4)', '--accent-color': 'rgba(255,123,114,0.75)', '--accent-bg': 'rgba(255,123,114,0.18)' } as React.CSSProperties}>
                <div
                  className="ug-matters-icon flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(255,123,114,0.12)' }}
                  aria-hidden="true"
                >
                  <AlertTriangle strokeWidth={2} className="h-5 w-5" style={{ color: '#FF7B72' }} />
                </div>
                <h3 className="mt-4 text-lg font-medium" style={{ ...headingFont, color: '#FF7B72' }}>
                  <span className="ug-matters-title">The gap</span>
                </h3>
                <p className="mt-2 text-[11.2px] leading-[1.7]" style={{ color: COLORS.muted }}>
                  Many students collect certificates, learn random skills, and build
                  unrelated projects without knowing whether they match the jobs they want.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="ug-lift ug-matters-card h-full" style={{ ...cardStyle, borderColor: 'rgba(143,191,163,0.4)', '--accent-color': 'rgba(143,191,163,0.75)', '--accent-bg': 'rgba(143,191,163,0.18)' } as React.CSSProperties}>
                <div
                  className="ug-matters-icon flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(143,191,163,0.12)' }}
                  aria-hidden="true"
                >
                  <Route strokeWidth={2} className="h-5 w-5" style={{ color: '#8FBFA3' }} />
                </div>
                <h3 className="mt-4 text-lg font-medium" style={{ ...headingFont, color: '#8FBFA3' }}>
                  <span className="ug-matters-title">The way forward</span>
                </h3>
                <p className="mt-2 text-[11.2px] leading-[1.7]" style={{ color: COLORS.muted }}>
                  Knowing your career path early helps you prepare for the right
                  opportunities from the beginning.
                </p>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============ HOW WE BUILD EVERY CAREER MAP ============ */}
        <section aria-labelledby="ug-approach-heading" className="py-12 sm:py-16">
          <Reveal>
            <SectionLabel accent="#8FA7BF">HOW WE BUILD EVERY CAREER MAP</SectionLabel>
            <h2
              id="ug-approach-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '24ch' }}
            >
              Built using real industry work.
            </h2>
            <p
              className="mt-5 text-[11.2px] sm:text-[12.6px] leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '68ch' }}
            >
              Every career map is created by studying:
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8" style={cardStyle}>
              <ol className="ug-approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {APPROACH.map((node, i) => (
                  <li
                    key={node.label}
                    className="ug-approach-chip relative flex items-start gap-3 rounded-xl px-4 py-4"
                    style={{ background: 'rgba(143,167,191,0.08)', border: '1px solid rgba(143,167,191,0.24)' }}
                  >
                    <span
                      className="ug-approach-num mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs"
                      style={{ ...techFont, background: '#8FA7BF', color: COLORS.bg }}
                    >
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      <span style={techFont} className="block text-sm font-medium">
                        {node.label}
                      </span>
                      {node.note && (
                        <span className="mt-1 block text-[11.2px] leading-[1.6]" style={{ color: COLORS.muted }}>
                          {node.note}
                        </span>
                      )}
                    </span>
                    {i < APPROACH.length - 1 && (
                      <ArrowRight
                        strokeWidth={2}
                        aria-hidden="true"
                        className="ug-approach-arrow absolute h-4 w-4 rotate-90 left-1/2 -translate-x-1/2 -bottom-[14px] sm:hidden"
                        style={{ color: 'rgba(143,167,191,0.55)' }}
                      />
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-[11.2px] leading-[1.7]" style={{ color: COLORS.muted, maxWidth: '60ch' }}>
                This helps every career map stay connected to real work instead of
                assumptions.
              </p>
            </div>

          </Reveal>
        </section>

        {/* ============ PLATFORM COVERAGE ============ */}
        <section aria-labelledby="ug-coverage-heading" className="py-12 sm:py-16">
          <Reveal>
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] border"
                style={{ ...techFont, background: 'rgba(109,212,200,0.08)', borderColor: 'rgba(109,212,200,0.25)', color: '#6DD4C8' }}
              >
                <TrendingUp strokeWidth={2} className="h-4 w-4 ug-stat-pulse" aria-hidden="true" />
                Platform Coverage
                <span className="h-2 w-2 rounded-full bg-[#6DD4C8] ug-stat-dot" aria-hidden="true" />
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="ug-coverage-heading"
              className="mt-5 text-2xl sm:text-4xl font-medium leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '24ch' }}
            >
              What is{' '}
              <span style={{ color: '#6DD4C8' }}>mapped</span>
              <br className="hidden sm:block" /> on the platform
            </h2>
          </Reveal>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={i * 60}>
                  <div
                    className="ug-stat-card text-center h-full flex flex-col items-center justify-center"
                    style={{
                      ...cardStyle,
                      padding: '22px 14px',
                      '--stat-color': stat.color,
                    } as React.CSSProperties}
                  >
                    <div
                      className="ug-stat-icon mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${stat.color}1F` }}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={2} className="h-5 w-5" style={{ color: stat.color }} />
                    </div>
                    <div
                      className="ug-stat-value text-2xl sm:text-3xl font-bold"
                      style={{ color: stat.color, ...headingFont }}
                    >
                      {stat.value}
                    </div>
                    <div className="ug-stat-divider" />
                    <div className="text-xs font-medium uppercase tracking-wider text-center leading-tight" style={{ color: COLORS.muted }}>
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <span
                className="ug-stat-trust inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium border"
                style={{ ...techFont, background: 'rgba(143,191,163,0.08)', borderColor: 'rgba(143,191,163,0.25)', color: '#8FBFA3' }}
              >
                <Shield strokeWidth={2} className="h-4 w-4" aria-hidden="true" />
                No ads. No spam. Your data stays private.
                <span className="h-2 w-2 rounded-full bg-[#8FBFA3] ug-stat-dot" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-4 flex justify-center">
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium border"
                style={{ ...techFont, background: 'rgba(109,212,200,0.08)', borderColor: 'rgba(109,212,200,0.25)', color: '#6DD4C8' }}
              >
                <MapPin strokeWidth={2} className="h-4 w-4" aria-hidden="true" />
                Built in Telangana. Built for India.
                <span className="h-2 w-2 rounded-full bg-[#6DD4C8] ug-stat-dot" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </section>


        {/* ============ MISSION: SKILLING INDIA ============ */}
        <section aria-labelledby="ug-mission-heading" className="py-12 sm:py-16">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel accent="#F5C26B">Mission Skilling India</SectionLabel>
            </div>
            <h2
              id="ug-mission-heading"
              className="mt-5 text-center text-2xl sm:text-4xl font-bold leading-tight"
              style={{ ...headingFont, ...headingGradient, maxWidth: '24ch', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Stronger India Begins with Better Career Decisions.
            </h2>
            <p
              className="mt-5 text-center text-[11.2px] sm:text-[12.6px] leading-[1.7]"
              style={{ color: COLORS.muted, maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Our mission is to make career clarity accessible to every Indian student —
              from metros to small towns — so they can learn with purpose and enter the
              workforce with confidence.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: Compass, accent: '#F5C26B', title: 'Career Clarity', desc: 'Help every student understand where their subjects and degree can lead.' },
              { icon: Wrench, accent: '#6DD4C8', title: 'Industry-Ready Skills', desc: 'Show the skills, tools, and projects employers actually expect.' },
              { icon: Briefcase, accent: '#A78BFA', title: 'Workforce Readiness', desc: 'Bridge the gap between classroom learning and real careers.' },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} delay={i * 80}>
                  <div
                    className="ug-lift h-full text-center"
                    style={{ ...cardStyle, borderColor: `${m.accent}4D` }}
                  >
                    <div
                      className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${m.accent}1F` }}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={2} className="h-5 w-5" style={{ color: m.accent }} />
                    </div>
                    <h3 className="mt-4 text-lg font-medium" style={{ ...headingFont, color: m.accent }}>
                      {m.title}
                    </h3>
                    <p className="mt-2 text-[11.2px] leading-[1.7]" style={{ color: COLORS.muted }}>
                      {m.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>


        {/* ============ CTA ============ */}
        <section aria-labelledby="ug-cta-heading" className="py-14 sm:py-20">
          <Reveal>
            <div
              className="ug-cta-card text-center"
              style={{
                ...cardStyle,
                padding: '48px 24px',
                borderColor: 'rgba(109,212,200,0.4)',
              }}
            >
              <div
                className="ug-cta-icon mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(109,212,200,0.12)' }}
                aria-hidden="true"
              >
                <Sparkles strokeWidth={2} className="h-6 w-6" style={{ color: '#6DD4C8' }} />
              </div>
              <h2
                id="ug-cta-heading"
                className="mx-auto mt-6 text-2xl sm:text-4xl font-bold leading-tight"
                style={{ ...headingFont, ...headingGradient, maxWidth: '18ch' }}
              >
                Start exploring career maps
              </h2>
              <p
                className="mx-auto mt-4 text-[11.2px] leading-[1.7]"
                style={{ color: COLORS.muted, maxWidth: '60ch' }}
              >
                Discover the domains, careers, skills, projects, and opportunities
                connected to the subjects you like.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <PrimaryButton onClick={handleExplore}>
                  Explore Now
                  <ArrowRight strokeWidth={2} className="ug-cta-arrow h-5 w-5" />
                </PrimaryButton>
                <SecondaryButton onClick={handleSearchDegree}>
                  <Search strokeWidth={2} className="h-5 w-5" style={{ color: '#6DD4C8' }} />
                  Search your degree
                </SecondaryButton>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default UGHomepage;

