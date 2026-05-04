import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, MapPin, Cpu, AlertTriangle, Shield, Target, XCircle } from 'lucide-react';

const useScrollGlow = () => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
};

const profileFields: { label: string; value: string; tone?: 'default' | 'good' | 'warn' | 'bad' }[] = [
  { label: 'Domain', value: 'Embedded Product Engineering' },
  { label: 'Core Family Role', value: 'Embedded Firmware Development' },
  { label: 'Sub-function', value: 'Bare-metal peripheral control' },
  { label: 'Fresher Role', value: 'Junior Embedded Firmware Engineer' },
  { label: 'Fit Class', value: 'EXCLUSIVE FIT', tone: 'good' },
  { label: 'Replaceability', value: 'LOW', tone: 'good' },
  { label: 'Degree Fit Strength', value: '88 / 100', tone: 'good' },
  { label: 'Hiring Reality', value: '58%', tone: 'warn' },
  { label: 'Hiring Level', value: 'MODERATE HIRING', tone: 'warn' },
  { label: 'Entry Difficulty', value: 'HARD — 55/100', tone: 'bad' },
  { label: 'Classification', value: 'CONDITIONAL-SAFE', tone: 'warn' },
];

const toneClasses: Record<string, string> = {
  default: 'text-slate-700',
  good: 'text-emerald-700',
  warn: 'text-amber-700',
  bad: 'text-rose-700',
};

const EmbeddedProductEngineering = () => {
  const profile = useScrollGlow();
  const work = useScrollGlow();
  const survived = useScrollGlow();
  const fail = useScrollGlow();

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-swiss-sky via-white to-swiss-lavender border border-swiss-sky-foreground/10 p-6 sm:p-10 lg:p-14 shadow-[var(--shadow-md)]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-swiss-sky to-swiss-lavender/60 rounded-full -translate-y-40 translate-x-40 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-swiss-lavender to-swiss-sage/60 rounded-full translate-y-32 -translate-x-32 opacity-40 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] sm:text-xs tracking-widest uppercase text-slate-400 font-medium mb-6 sm:mb-8">
            <span>Degree</span>
            <ChevronRight className="w-3 h-3" />
            <span>ECE</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-swiss-sky-foreground font-semibold">Embedded Product Engineering</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-lavender-foreground mb-3">
              Electronics & Communication Engineering
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-5">
              Embedded Product Engineering
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl font-light">
              Bare-metal firmware development for microcontroller-based products — write C, drive peripherals, and prove board behavior with real evidence.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-swiss-sky-foreground/15 rounded-lg backdrop-blur-sm shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-swiss-sky-foreground" />
            <span className="text-xs sm:text-sm text-swiss-sky-foreground font-medium">Junior Embedded Firmware Engineer · Bare-metal Peripheral Control</span>
          </div>
        </div>
      </section>

      {/* Profile Grid / Mobile Cards */}
      <section
        ref={profile.ref}
        className={`bg-gradient-to-br from-white via-swiss-sky/20 to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
          profile.inView
            ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
            : 'border border-slate-200/80'
        }`}
      >
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-5 sm:mb-6">
          Role Profile
        </h2>

        {/* Desktop: grid table */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
            <div className="col-span-5">Field</div>
            <div className="col-span-7">Result</div>
          </div>
          <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
            {profileFields.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-12 px-4 py-3.5 items-center text-sm ${
                  i !== profileFields.length - 1 ? 'border-b border-slate-200/60' : ''
                } hover:bg-white/70 transition-colors`}
              >
                <div className="col-span-5 text-slate-500 font-medium">{f.label}</div>
                <div className={`col-span-7 font-semibold tracking-wide ${toneClasses[f.tone || 'default']}`}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-2.5">
          {profileFields.map((f) => (
            <div
              key={f.label}
              className="flex flex-col gap-1 p-3.5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
            >
              <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                {f.label}
              </span>
              <span className={`text-sm font-semibold tracking-wide ${toneClasses[f.tone || 'default']}`}>
                {f.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What they work on */}
      <section
        ref={work.ref}
        className={`bg-gradient-to-br from-swiss-sky/30 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
          work.inView
            ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
            : 'border border-slate-200/80'
        }`}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-1.5 bg-white/70 rounded-md border border-swiss-sky-foreground/10 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-swiss-sky-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-sky-foreground">
            What They Work On
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
          Write and debug C code for microcontrollers, configure GPIO/UART/I2C/SPI/ADC/PWM, test firmware on boards, read datasheets, fix peripheral bugs, and document test behavior.
        </p>
      </section>

      {/* Why this survived */}
      <section
        ref={survived.ref}
        className={`bg-gradient-to-br from-swiss-sage/30 via-white to-swiss-sage/10 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
          survived.inView
            ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
            : 'border border-swiss-sage-foreground/15'
        }`}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-1.5 bg-white/70 rounded-md border border-swiss-sage-foreground/10 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-swiss-sage-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-sage-foreground">
            Why This Survived
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
          ECE directly owns microcontrollers, embedded systems, digital electronics, C programming, and instrumentation. Current listings show embedded systems / embedded software roles with 0–2 year visibility, but not enough to call it mass-safe because projects and debugging proof matter heavily.
        </p>
      </section>

      {/* Why freshers fail */}
      <section
        ref={fail.ref}
        className={`bg-gradient-to-br from-swiss-rose/30 via-white to-swiss-rose/10 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
          fail.inView
            ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
            : 'border border-swiss-rose-foreground/15'
        }`}
      >
        <div className="flex items-center gap-2.5 mb-5">
          <div className="p-1.5 bg-white/70 rounded-md border border-swiss-rose-foreground/10 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-swiss-rose-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-rose-foreground">
            Freshers Fail Here Because
          </h2>
        </div>
        <div className="space-y-2.5">
          {[
            'They know C syntax but cannot explain register/peripheral behavior.',
            'They make Arduino-level projects but cannot debug on real microcontroller boards.',
            'They cannot read datasheets or explain UART/I2C/SPI practically.',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3.5 bg-white/60 border border-swiss-rose-foreground/10 rounded-lg backdrop-blur-sm"
            >
              <XCircle className="w-4 h-4 text-swiss-rose-foreground/70 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmbeddedProductEngineering;
