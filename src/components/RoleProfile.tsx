import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Compass,
  Layers,
  Focus,
  Building2,
  Home,
  Boxes,
  UserRound,
  Target,
  Briefcase,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';

const COLORS = {
  bg: '#0B1020',
  card: '#121A2F',
  text: '#F5F7FA',
  muted: '#9BA6BF',
  border: '#232C44',
  glass: 'rgba(255,255,255,0.03)',
  accent: '#6DD4C8',
  accent2: '#89C2D9',
  accent3: '#7FC8A9',
  accent4: '#8FA7BF',
};

const headingFont = { fontFamily: "'Satoshi', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const techFont = { fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" };

interface HierarchyItem {
  label: string;
  hint: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

const HIERARCHY: HierarchyItem[] = [
  { label: 'Degree', hint: 'The course you study', value: 'B.Tech Civil Engineering', icon: GraduationCap, accent: COLORS.accent },
  { label: 'Domain', hint: 'The career field your degree prepares you for', value: 'Construction Site Execution', icon: Compass, accent: COLORS.accent2 },
  { label: 'Core Family Role', hint: 'The main type of work you can build your career in', value: 'Site Engineering', icon: Layers, accent: COLORS.accent3 },
  { label: 'Sub-function', hint: 'The specific area of work you can specialize in', value: 'RCC Structural Execution', icon: Focus, accent: COLORS.accent4 },
  { label: 'Industry', hint: 'The industries where this work is available', value: 'Building Construction Companies', icon: Building2, accent: COLORS.accent },
  { label: 'Sub-industry', hint: 'The specialized sector within an industry', value: 'Residential Building Construction', icon: Home, accent: COLORS.accent2 },
  { label: 'Cluster', hint: 'The actual business area where the work happens', value: 'RCC Apartment Projects', icon: Boxes, accent: COLORS.accent3 },
  { label: 'Fresher Role', hint: 'The entry-level job you can get after graduation', value: 'Junior Site Engineer', icon: UserRound, accent: COLORS.accent4 },
];

const RESPONSIBILITIES: { title: string; desc: string }[] = [
  { title: 'Reinforcement Verification', desc: 'Check slab, beam, column and footing reinforcement against drawings before concreting.' },
  { title: 'Formwork and Level Verification', desc: 'Verify shuttering alignment, plumb, and levels prior to pour.' },
  { title: 'Concrete Execution Monitoring', desc: 'Supervise pouring, compaction, curing and slump/cube tests on site.' },
  { title: 'Layout and Survey Verification', desc: 'Confirm grid lines, column positions and floor levels using total station and auto level.' },
  { title: 'Construction Progress Documentation', desc: 'Maintain daily progress reports, checklists and site diaries.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const RoleProfile: React.FC = () => {
  return (
    <div
      className="ug-role-profile"
      style={{ background: COLORS.bg, color: COLORS.text, borderRadius: 24 }}
    >
      <style>{`
        .ug-role-profile { position: relative; overflow: hidden; }
        .ug-role-card { transition: transform 250ms ease-out, border-color 250ms ease-out, box-shadow 250ms ease-out; }
        @media (hover: hover) {
          .ug-role-card:hover { transform: translateY(-4px); border-color: ${COLORS.accent}; box-shadow: 0 14px 40px rgba(0,0,0,0.4); }
          .ug-role-card:hover .ug-role-icon { color: ${COLORS.accent}; }
        }
        .ug-role-icon { transition: color 250ms ease-out; }
        .ug-role-resp { transition: background-color 200ms ease-out, transform 200ms ease-out, border-color 200ms ease-out; }
        @media (hover: hover) {
          .ug-role-resp:hover { background-color: rgba(255,255,255,0.04); transform: translateX(2px); border-color: ${COLORS.accent}; }
        }
        .ug-role-num { transition: background-color 200ms ease-out, color 200ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .ug-role-card, .ug-role-icon, .ug-role-resp, .ug-role-num { transition: none !important; }
        }
      `}</style>

      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(109,212,200,0.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1200, padding: 'clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)' }}
      >
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ ...techFont, color: COLORS.accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: COLORS.accent }} />
            Role Profile
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-bold"
            style={{ ...headingFont, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', lineHeight: 1.1 }}
          >
            Junior Site Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto mt-4"
            style={{
              ...bodyFont,
              color: COLORS.muted,
              maxWidth: '62ch',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              lineHeight: 1.7,
            }}
          >
            A complete map from your degree to the exact fresher role you can step into on day one.
          </motion.p>
        </div>

        {/* Career Hierarchy Grid */}
        <div
          className="mt-10 grid gap-4 sm:gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}
        >
          {HIERARCHY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="ug-role-card"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 18,
                  padding: 'clamp(18px, 3vw, 24px)',
                  backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.accent}15`,
                      borderRadius: 12,
                      width: 42,
                      height: 42,
                    }}
                  >
                    <Icon size={20} className="ug-role-icon" style={{ color: item.accent }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block text-[0.66rem] font-medium uppercase tracking-[0.16em]"
                      style={{ ...techFont, color: item.accent }}
                    >
                      {item.label}
                    </span>
                    <p
                      className="mt-1"
                      style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.72rem', lineHeight: 1.5 }}
                    >
                      {item.hint}
                    </p>
                  </div>
                </div>
                <div className="mt-4" style={{ height: 1, background: COLORS.border }} />
                <div
                  className="mt-4 font-semibold"
                  style={{ ...headingFont, color: COLORS.text, fontSize: '1rem', lineHeight: 1.4 }}
                >
                  {item.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Work Identity & Business Purpose */}
        <div
          className="mt-10 grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="ug-role-card"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20,
              padding: 'clamp(22px, 4vw, 30px)',
              backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ background: `${COLORS.accent}15`, borderRadius: 12, width: 44, height: 44 }}
              >
                <Target size={22} className="ug-role-icon" style={{ color: COLORS.accent }} />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.16em]"
                  style={{ ...techFont, color: COLORS.accent }}
                >
                  Work Identity
                </span>
                <p
                  className="mt-1"
                  style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.74rem', lineHeight: 1.5 }}
                >
                  The core purpose of your job
                </p>
              </div>
            </div>
            <div className="mt-4" style={{ height: 1, background: COLORS.border }} />
            <div
              className="mt-4 font-semibold"
              style={{ ...headingFont, color: COLORS.text, fontSize: '1.25rem', lineHeight: 1.35 }}
            >
              Construction Execution
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="ug-role-card"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20,
              padding: 'clamp(22px, 4vw, 30px)',
              backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ background: `${COLORS.accent2}15`, borderRadius: 12, width: 44, height: 44 }}
              >
                <Briefcase size={22} className="ug-role-icon" style={{ color: COLORS.accent2 }} />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.16em]"
                  style={{ ...techFont, color: COLORS.accent2 }}
                >
                  Business Purpose
                </span>
                <p
                  className="mt-1"
                  style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.74rem', lineHeight: 1.5 }}
                >
                  The value your work creates for the business
                </p>
              </div>
            </div>
            <div className="mt-4" style={{ height: 1, background: COLORS.border }} />
            <p
              className="mt-4"
              style={{ ...bodyFont, color: COLORS.text, fontSize: '0.95rem', lineHeight: 1.65 }}
            >
              Convert construction drawings, materials, labor, and engineering plans into completed RCC
              apartment structures safely, correctly, and according to project schedule and quality
              requirements.
            </p>
          </motion.div>
        </div>

        {/* Top Fresher Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10"
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 20,
            padding: 'clamp(22px, 4vw, 32px)',
            backgroundImage: `linear-gradient(${COLORS.glass}, ${COLORS.glass})`,
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ background: `${COLORS.accent3}15`, borderRadius: 12, width: 44, height: 44 }}
            >
              <ClipboardList size={22} className="ug-role-icon" style={{ color: COLORS.accent3 }} />
            </div>
            <div className="min-w-0 flex-1">
              <span
                className="inline-block text-[0.68rem] font-medium uppercase tracking-[0.16em]"
                style={{ ...techFont, color: COLORS.accent3 }}
              >
                Top Fresher Responsibilities
              </span>
              <p
                className="mt-1"
                style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.74rem', lineHeight: 1.5 }}
              >
                The main tasks you perform every day
              </p>
            </div>
          </div>

          <div className="mt-5" style={{ height: 1, background: COLORS.border }} />

          <div className="mt-5 grid gap-3 sm:gap-4">
            {RESPONSIBILITIES.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="ug-role-resp"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 14,
                  padding: 'clamp(14px, 2.4vw, 18px)',
                  background: 'rgba(255,255,255,0.015)',
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="ug-role-num flex items-center justify-center flex-shrink-0 font-semibold"
                    style={{
                      ...techFont,
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: `${COLORS.accent}12`,
                      color: COLORS.accent,
                      fontSize: '0.78rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className="font-semibold"
                      style={{ ...headingFont, color: COLORS.text, fontSize: '0.98rem', lineHeight: 1.4 }}
                    >
                      {r.title}
                    </div>
                    <p
                      className="mt-1"
                      style={{ ...bodyFont, color: COLORS.muted, fontSize: '0.84rem', lineHeight: 1.6 }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleProfile;
