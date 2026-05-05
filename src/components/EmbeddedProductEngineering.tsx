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

      {/* Why Embedded Firmware Jobs Won't Disappear */}
      <section className="bg-gradient-to-br from-white via-swiss-mint/20 to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] border border-slate-200/80">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
          Why Embedded Firmware (Bare-Metal) Jobs Won't Disappear
        </h2>
        <p className="text-sm text-slate-600 mb-5 sm:mb-6">
          The role where software directly controls hardware — and why it stays in demand.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Intro */}
          <div className="lg:col-span-2 bg-white/70 rounded-lg p-4 sm:p-5 border border-slate-200/60">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              This role is where <span className="font-semibold text-foreground">software directly controls hardware</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
              You are not building apps. You are controlling real signals, timing, and device behavior.
            </p>
          </div>

          {/* What You Actually Do */}
          <div className="bg-white/70 rounded-lg p-4 sm:p-5 border border-slate-200/60">
            <h3 className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              What You Actually Do
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">Companies need people who can:</p>
            <ul className="space-y-2">
              {[
                'Control microcontroller parts (GPIO, ADC, PWM, UART, SPI, I2C)',
                'Read datasheets and set registers correctly',
                'Debug real boards when things don\'t work',
                'Fix problems where code + hardware both are involved',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why This Cannot Be Easily Replaced */}
          <div className="bg-white/70 rounded-lg p-4 sm:p-5 border border-slate-200/60">
            <h3 className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Why This Cannot Be Easily Replaced
            </h3>
            <ul className="space-y-2">
              {[
                'Every hardware board is different',
                'Problems are unpredictable (noise, timing errors, wiring issues)',
                'Needs real testing on physical boards, not just coding',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why This Role Is Important */}
          <div className="lg:col-span-2 bg-white/70 rounded-lg p-4 sm:p-5 border border-slate-200/60">
            <h3 className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Why This Role Is Important
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">Every smart device depends on this:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {[
                'Consumer products (TV, washing machine, smart devices)',
                'Industrial machines (motors, automation panels)',
                'Cars (ECUs, sensors)',
                'IoT devices (meters, trackers, home automation)',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">Without firmware engineers:</p>
            <ul className="space-y-1.5">
              {[
                'Sensors won\'t send data',
                'Controllers won\'t act',
                'Devices won\'t respond',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ground Reality */}
          <div className="lg:col-span-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-4 sm:p-5 border border-slate-700">
            <h3 className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
              Ground Reality
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              High-level software can crash and restart.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed mt-1">
              Firmware controls machines — if it fails, the device fails.
            </p>
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

      {/* Industry → Sub-industry → Cluster Mapping */}
      <IndustryClusterMapping />

      {/* Fresher Work Tasks */}
      <FresherWorkTasks />

      {/* Subject Recognition Table */}
      <SubjectRecognitionTable />

      {/* Subject Timeline Table */}
      <SubjectTimelineTable />

      {/* Impact */}
      <ImpactTable />

      {/* Recovery */}
      <RecoveryTable />

      {/* Behavior Gap */}
      <BehaviorGap />

      {/* Job Execution Task Lock */}
      <JobExecutionTaskLock />

      {/* Skill Extraction */}
      <SkillExtraction />

      {/* Tool Identification */}
      <ToolIdentification />

      {/* Mini Projects */}
      <MiniProjects />

      {/* Major Projects */}
      <MajorProjects />

      {/* Lab / Hands-On */}
      <LabHandsOn />

      {/* Debugging Expectation */}
      <DebuggingExpectation />

      {/* Explanation Capability */}
      <ExplanationCapability />

      {/* Learning Timeline */}
      <LearningTimeline />

      {/* Final Stack Summary */}
      <FinalStackSummary />

      {/* Bottom-line Truth */}
      <section className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 rounded-2xl p-5 sm:p-7 md:p-8 shadow-lg">
        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
            Bottom-line Truth
          </h3>
        </div>
        <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-white/20">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
              Jobs are not less — skilled and prepared students are less. Companies don't pay for degrees, they pay for real skills.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-white/20">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
              In the first 2 years, don't expect high salary — focus on learning, work exposure, and communication. As your skills grow, your salary will grow.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-white/20">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
              Forget society's fake expectations — in today's AI era, only skilled people get jobs and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gradient-to-r from-swiss-sand/60 to-swiss-sand/30 border border-swiss-sand-foreground/10 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-3.5 h-3.5 text-swiss-sand-foreground mt-0.5 flex-shrink-0" />
          <p className="text-[0.6875rem] sm:text-xs text-slate-500 leading-relaxed">
            Career paths shown are patterns, not guarantees. Outcomes depend on company, skills, performance, location, and market conditions.
          </p>
        </div>
      </section>
    </div>
  );
};

const finalStackRows: { layer: string; components: string[] }[] = [
  { layer: 'Subjects', components: ['Microprocessors and Microcontrollers', 'Embedded Systems', 'C Programming', 'Electronic Measurements and Instrumentation', 'Digital Electronics'] },
  { layer: 'Skills', components: ['Embedded C Programming', 'Microcontroller Peripheral Control', 'Hardware-Firmware Debugging', 'Sensor/Actuator Interfacing'] },
  { layer: 'Tools', components: ['Arduino IDE', 'STM32CubeIDE/Keil uVision', 'Multimeter', 'Oscilloscope/Basic DSO'] },
  { layer: 'Mini Projects', components: ['GPIO Button-LED Control', 'PWM Buzzer/LED Dimmer', 'ADC Sensor Reading', 'UART Serial Debug Logger'] },
  { layer: 'Major Projects', components: ['Temperature Control System', 'Digital Metering/Monitoring Prototype', 'Multi-Peripheral Control Board'] },
  { layer: 'Labs', components: ['MCU board practice, multimeter testing, DSO/CRO signal checks, test-note documentation'] },
  { layer: 'Debugging', components: ['GPIO, UART, ADC, PWM/timer, hardware-vs-firmware fault isolation'] },
  { layer: 'Explanation', components: ['Subject → Skill → Tool → Project → Debugging → Job execution story.'] },
];

const FinalStackSummary = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sky/20 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Final Stack
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Your Complete Job-Ready Stack
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Everything an embedded fresher must own — subjects, skills, tools, projects, labs, and debugging — in one view.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-3">Layer</div>
          <div className="col-span-9">Components</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {finalStackRows.map((r, i) => (
            <div
              key={r.layer}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== finalStackRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-3 text-slate-800 font-semibold leading-snug">{r.layer}</div>
              <div className="col-span-9 flex flex-wrap gap-2">
                {r.components.map((c) => (
                  <span key={c} className="px-2.5 py-1 bg-white/70 border border-slate-200/70 rounded text-slate-700 text-[0.8125rem] leading-snug">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {finalStackRows.map((r) => (
          <div
            key={r.layer}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold mb-2">
              Layer
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.layer}
            </p>
            <p className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold mb-2">
              Components
            </p>
            <div className="flex flex-wrap gap-2">
              {r.components.map((c) => (
                <span key={c} className="px-2.5 py-1 bg-white/70 border border-slate-200/70 rounded text-slate-700 text-[0.8125rem] leading-snug">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const learnTimelineRows = [
  { component: 'C Programming basics', when: 'Early: Sem 1–3', why: 'Coding foundation must start before MCU subjects.', interviewStrong: 'Clears C questions.', jobStrong: 'Enables firmware writing.' },
  { component: 'Digital Electronics', when: 'Early/Core: Sem 3–5', why: 'Needed before microcontroller pin/timing logic.', interviewStrong: 'Handles logic/timing questions.', jobStrong: 'Understands signal states.' },
  { component: 'Microcontrollers', when: 'Core: Sem 4–6', why: 'Main subject for bare-metal control.', interviewStrong: 'Strong peripheral answers.', jobStrong: 'Direct job execution.' },
  { component: 'Measurements + Multimeter', when: 'Core: Sem 4–6', why: 'Hardware testing must grow with MCU work.', interviewStrong: 'Shows practical proof.', jobStrong: 'Prevents blind debugging.' },
  { component: 'Arduino mini projects', when: 'Core: Sem 4–5', why: 'Fastest way to start hardware execution.', interviewStrong: 'Working project proof.', jobStrong: 'Builds confidence.' },
  { component: 'STM32/Keil/CubeIDE', when: 'Core/Final: Sem 5–7', why: 'Move from hobby-level to stronger MCU workflow.', interviewStrong: 'Better than only Arduino.', jobStrong: 'Closer to job workflow.' },
  { component: 'DSO/CRO signal checking', when: 'Core/Final: Sem 5–7', why: 'Needed after PWM/UART/timing basics.', interviewStrong: 'Strong debugging credibility.', jobStrong: 'Real board validation.' },
  { component: 'Major project', when: 'Final: Sem 7–8', why: 'Requires combined subjects + tools + debugging.', interviewStrong: 'Strongest resume proof.', jobStrong: 'Simulates job tasks.' },
  { component: 'Interview explanation', when: 'Final: Sem 7–8', why: 'Must convert project into clear story.', interviewStrong: 'Survives technical probing.', jobStrong: 'Better team communication.' },
];

const LearningTimeline = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sage/20 via-white to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Learning Timeline
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        What To Learn In Which Semester
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Semester-wise plan showing what to learn when — so you build skills in the right order across B.Tech.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4" style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}>
          <div className="col-span-3">Component</div>
          <div className="col-span-2">When To Learn</div>
          <div className="col-span-3">Why At This Time</div>
          <div className="col-span-2">Interview Benefit</div>
          <div className="col-span-2">Job Benefit</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {learnTimelineRows.map((r, i) => (
            <div
              key={r.component}
              className={`grid px-4 py-4 items-start text-sm gap-x-4 ${
                i !== learnTimelineRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}
            >
              <div className="col-span-3 text-slate-800 font-semibold leading-snug">{r.component}</div>
              <div className="col-span-2 text-slate-700 leading-relaxed">{r.when}</div>
              <div className="col-span-3 text-slate-700 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {learnTimelineRows.map((r) => (
          <div
            key={r.component}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.component}
            </p>
            <div className="space-y-3">
              {[
                { l: 'When To Learn', v: r.when, tone: 'text-slate-700' },
                { l: 'Why At This Time', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview Benefit', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job Benefit', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const explanationRows = [
  {
    what: 'Subject → Skill link',
    why: 'Shows learning is not random.',
    interviewWeak: 'Answers sound memorized.',
    jobWeak: 'Cannot apply concepts.',
    interviewStrong: 'Clear role-fit story.',
    jobStrong: 'Better task understanding.',
  },
  {
    what: 'Code → Peripheral behavior',
    why: 'Bare-metal work requires this.',
    interviewWeak: 'Cannot explain how code affects pins/signals.',
    jobWeak: 'Firmware becomes copy-paste.',
    interviewStrong: 'Strong technical confidence.',
    jobStrong: 'Better implementation.',
  },
  {
    what: 'Datasheet → Register/configuration logic',
    why: 'Real MCU work needs datasheet reading.',
    interviewWeak: 'Fails deeper probing.',
    jobWeak: 'Cannot work on unfamiliar boards.',
    interviewStrong: 'Shows professional readiness.',
    jobStrong: 'Adapts to new MCUs.',
  },
  {
    what: 'Bug → Debug method → Fix',
    why: 'Interviewers value failure explanation.',
    interviewWeak: 'Project looks fake.',
    jobWeak: 'Cannot debug independently.',
    interviewStrong: 'Builds trust.',
    jobStrong: 'Real job productivity improves.',
  },
  {
    what: 'Project input → processing → output flow',
    why: 'Every embedded project must be explainable.',
    interviewWeak: 'Project sounds copied.',
    jobWeak: 'Cannot maintain or extend product logic.',
    interviewStrong: 'Strong project defense.',
    jobStrong: 'Better product thinking.',
  },
];

const ExplanationCapability = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-lavender/20 via-white to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Explanation Capability
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        What You Must Be Able To Explain
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        What you must be able to clearly explain in interviews — projects, code behavior, debugging steps, and logic.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4" style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}>
          <div className="col-span-3">What To Explain</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {explanationRows.map((r, i) => (
            <div
              key={r.what}
              className={`grid px-4 py-4 items-start text-sm gap-x-4 ${
                i !== explanationRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}
            >
              <div className="col-span-3 text-slate-800 font-semibold leading-snug">{r.what}</div>
              <div className="col-span-2 text-slate-700 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {explanationRows.map((r) => (
          <div
            key={r.what}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.what}
            </p>
            <div className="space-y-3">
              {[
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const debuggingRows = [
  {
    type: 'GPIO Bug',
    fix: 'LED/button not responding due to wrong pin/configuration',
    why: 'Basic embedded debugging starts here.',
    interviewWeak: 'Fails simple practical questions.',
    jobWeak: 'Cannot handle basic I/O faults.',
    interviewStrong: 'Shows fundamentals.',
    jobStrong: 'Fixes simple board issues quickly.',
  },
  {
    type: 'UART Bug',
    fix: 'No serial output / wrong baud rate / garbage data',
    why: 'UART is common debug path.',
    interviewWeak: 'Cannot explain serial debugging.',
    jobWeak: 'Cannot inspect firmware behavior.',
    interviewStrong: 'Shows real debug method.',
    jobStrong: 'Makes testing faster.',
  },
  {
    type: 'ADC Bug',
    fix: 'Sensor value unstable/wrong',
    why: 'Sensor boards need reliable readings.',
    interviewWeak: 'Weak sensor explanation.',
    jobWeak: 'Product readings become unreliable.',
    interviewStrong: 'Shows measurement thinking.',
    jobStrong: 'Improves data reliability.',
  },
  {
    type: 'Timer/PWM Bug',
    fix: 'Wrong frequency/duty cycle',
    why: 'Actuator/control outputs depend on timing.',
    interviewWeak: 'Cannot explain timing control.',
    jobWeak: 'Motor/buzzer/display control fails.',
    interviewStrong: 'Shows peripheral depth.',
    jobStrong: 'Enables real control behavior.',
  },
  {
    type: 'Hardware vs Firmware Fault',
    fix: 'Identify whether issue is code, wiring, power, or sensor',
    why: 'Real jobs mix hardware and firmware problems.',
    interviewWeak: 'Interviewer sees guesswork.',
    jobWeak: 'Debug time increases badly.',
    interviewStrong: 'Strongest fresher proof.',
    jobStrong: 'Reduces dependency on seniors.',
  },
];

const DebuggingExpectation = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sand/20 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Debugging
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Expectation
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        The exact bugs you're expected to debug on the job — from GPIO and UART faults to hardware-vs-firmware issues.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4" style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}>
          <div className="col-span-2">Debug Type</div>
          <div className="col-span-3">What You Must Fix</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {debuggingRows.map((r, i) => (
            <div
              key={r.type}
              className={`grid px-4 py-4 items-start text-sm gap-x-4 ${
                i !== debuggingRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.type}</div>
              <div className="col-span-3 text-slate-700 leading-relaxed">{r.fix}</div>
              <div className="col-span-2 text-slate-700 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {debuggingRows.map((r) => (
          <div
            key={r.type}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.type}
            </p>
            <div className="space-y-3">
              {[
                { l: 'What You Must Fix', v: r.fix, tone: 'text-slate-700' },
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const labRows = [
  {
    requirement: 'Build and test on real MCU board',
    why: 'Embedded cannot be learned only on paper.',
    interviewWeak: 'No practical proof.',
    jobWeak: 'Cannot handle board-level work.',
    interviewStrong: 'Shows real execution.',
    jobStrong: 'Faster job adaptation.',
  },
  {
    requirement: 'Use multimeter for voltage/continuity checks',
    why: 'First-level hardware debugging.',
    interviewWeak: 'Cannot explain power/fault checks.',
    jobWeak: 'Wastes time blaming code.',
    interviewStrong: 'Shows hardware awareness.',
    jobStrong: 'Prevents blind debugging.',
  },
  {
    requirement: 'Observe PWM/UART/basic signal on DSO/CRO',
    why: 'Timing and signal behavior matters.',
    interviewWeak: 'Weak waveform explanation.',
    jobWeak: 'Cannot debug signal issues.',
    interviewStrong: 'Strong practical credibility.',
    jobStrong: 'Better board validation.',
  },
  {
    requirement: 'Maintain test notes and bug-fix log',
    why: 'Jobs require documented debugging.',
    interviewWeak: 'Cannot explain failures clearly.',
    jobWeak: 'Poor handover and debugging trace.',
    interviewStrong: 'Interviewer sees maturity.',
    jobStrong: 'Better team reliability.',
  },
];

const LabHandsOn = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sky/20 via-white to-swiss-sand/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Lab
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Hands-On
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        The real lab work you must do on actual boards and instruments — embedded cannot be learned only from books.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-13 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4" style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}>
          <div className="col-span-3">Lab Requirement</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {labRows.map((r, i) => (
            <div
              key={r.requirement}
              className={`grid px-4 py-4 items-start text-sm gap-x-4 ${
                i !== labRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}
            >
              <div className="col-span-3 text-slate-800 font-semibold leading-snug">{r.requirement}</div>
              <div className="col-span-2 text-slate-700 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {labRows.map((r) => (
          <div
            key={r.requirement}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.requirement}
            </p>
            <div className="space-y-3">
              {[
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const majorProjectRows = [
  {
    project: 'Sensor-Based Temperature Control System',
    alternates: ['Smart Fan Controller', 'Temperature-Based Relay Control'],
    useCase: 'Reads sensor, controls fan/relay, logs status.',
    skillTool: 'Embedded C, ADC, GPIO, UART, Multimeter',
    why: 'Shows complete input-process-output embedded flow.',
    interviewWeak: 'Cannot prove product-style firmware.',
    jobWeak: 'Cannot integrate sensor + control logic.',
    interviewStrong: 'Easy to explain end-to-end.',
    jobStrong: 'Matches real control-board work.',
  },
  {
    project: 'Digital Metering / Monitoring Board Prototype',
    alternates: ['Energy Monitor Demo', 'Sensor Monitoring Unit'],
    useCase: 'Reads voltage/current sensor module and displays/logs readings.',
    skillTool: 'ADC, UART/I2C, debugging, measurement',
    why: 'Strong fit for control/monitoring boards.',
    interviewWeak: 'Weak measurement + firmware explanation.',
    jobWeak: 'Fails testing/validation tasks.',
    interviewStrong: 'Shows ECE + firmware + measurement link.',
    jobStrong: 'Useful for electronics product testing.',
  },
  {
    project: 'Multi-Peripheral Control Board',
    alternates: ['Embedded Control Panel', 'MCU Peripheral Integration Board'],
    useCase: 'Button + sensor + display + buzzer/relay + UART debug.',
    skillTool: 'GPIO, ADC, PWM, UART/I2C/SPI, IDE, DSO',
    why: 'Best integration proof for junior embedded firmware role.',
    interviewWeak: 'Resume looks project-heavy but proof-light.',
    jobWeak: 'Cannot handle combined peripheral behavior.',
    interviewStrong: 'Shows real job readiness.',
    jobStrong: 'Closest to product board execution.',
  },
];

const MajorProjects = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-lavender/20 via-white to-swiss-sage/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-lavender-foreground mb-2">
        Major
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Projects
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Job-grade final-year projects that prove you can build a real product — and what they decide in interviews.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-3" style={{ gridTemplateColumns: 'repeat(19, minmax(0, 1fr))' }}>
          <div className="col-span-2">Project</div>
          <div className="col-span-2">Alternate Names</div>
          <div className="col-span-3">Real Use Case</div>
          <div className="col-span-2">Skills + Tools</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {majorProjectRows.map((r, i) => (
            <div
              key={r.project}
              className={`grid px-4 py-4 items-start text-sm gap-x-3 ${
                i !== majorProjectRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(19, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.project}</div>
              <div className="col-span-2">
                <ul className="space-y-1">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-3 text-slate-700 leading-relaxed">{r.useCase}</div>
              <div className="col-span-2 text-swiss-sage-foreground font-medium leading-relaxed">{r.skillTool}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {majorProjectRows.map((r) => (
          <div
            key={r.project}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="mb-3 pb-3 border-b border-slate-200/60">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-2">
                {r.project}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.alternates.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-swiss-lavender/40 border border-swiss-lavender-foreground/15 text-[0.6875rem] text-swiss-lavender-foreground font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { l: 'Real Use Case', v: r.useCase, tone: 'text-slate-700' },
                { l: 'Skills + Tools', v: r.skillTool, tone: 'text-swiss-sage-foreground font-medium' },
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const miniProjectRows = [
  {
    project: 'GPIO LED + Button Control',
    alternates: ['Digital I/O Demo', 'Switch-Controlled LED'],
    build: 'Button input controls LED output with debounce logic.',
    skillTool: 'Embedded C + Arduino/STM32',
    why: 'First proof of input-output control.',
    interviewWeak: 'Cannot explain basic GPIO.',
    jobWeak: 'Struggles with simple board control.',
    interviewStrong: 'Shows real peripheral start.',
    jobStrong: 'Builds control logic foundation.',
  },
  {
    project: 'Timer-Based PWM Buzzer/LED Dimmer',
    alternates: ['PWM Demo', 'Timer Output Control'],
    build: 'Use timer/PWM to control LED brightness or buzzer tone.',
    skillTool: 'Peripheral Control + STM32/Arduino',
    why: 'Teaches timing, registers, PWM behavior.',
    interviewWeak: 'Weak on timers/PWM.',
    jobWeak: 'Cannot control motors/buzzers/outputs properly.',
    interviewStrong: 'Stronger than basic blink project.',
    jobStrong: 'Useful for actuator control.',
  },
  {
    project: 'ADC Sensor Reading Project',
    alternates: ['Analog Sensor Interface', 'Sensor Data Logger'],
    build: 'Read potentiometer/temperature/light sensor and display serial values.',
    skillTool: 'Sensor Interfacing + Multimeter',
    why: 'Converts analog input into firmware data.',
    interviewWeak: 'Cannot explain ADC.',
    jobWeak: 'Cannot handle sensor-based boards.',
    interviewStrong: 'Shows practical sensor handling.',
    jobStrong: 'Helps in real product input testing.',
  },
  {
    project: 'UART Serial Debug Logger',
    alternates: ['Serial Debug Tool', 'UART Monitor Project'],
    build: 'Send debug messages and sensor values to serial monitor.',
    skillTool: 'Embedded C + UART + IDE',
    why: 'Serial debug is core fresher debugging habit.',
    interviewWeak: 'Cannot explain debugging method.',
    jobWeak: 'Debugging becomes guesswork.',
    interviewStrong: 'Shows structured debug thinking.',
    jobStrong: 'Helps isolate bugs faster.',
  },
];

const MiniProjects = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sky/20 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Mini
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Projects
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Small starter projects you must build to prove your basics — and what each one signals to interviewers.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-3" style={{ gridTemplateColumns: 'repeat(19, minmax(0, 1fr))' }}>
          <div className="col-span-2">Project</div>
          <div className="col-span-2">Alternate Names</div>
          <div className="col-span-3">What You Build</div>
          <div className="col-span-2">Skill + Tool</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {miniProjectRows.map((r, i) => (
            <div
              key={r.project}
              className={`grid px-4 py-4 items-start text-sm gap-x-3 ${
                i !== miniProjectRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(19, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.project}</div>
              <div className="col-span-2">
                <ul className="space-y-1">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-3 text-slate-700 leading-relaxed">{r.build}</div>
              <div className="col-span-2 text-swiss-sky-foreground font-medium leading-relaxed">{r.skillTool}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {miniProjectRows.map((r) => (
          <div
            key={r.project}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="mb-3 pb-3 border-b border-slate-200/60">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-2">
                {r.project}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.alternates.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-swiss-lavender/40 border border-swiss-lavender-foreground/15 text-[0.6875rem] text-swiss-lavender-foreground font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { l: 'What You Build', v: r.build, tone: 'text-slate-700' },
                { l: 'Skill + Tool Used', v: r.skillTool, tone: 'text-swiss-sky-foreground font-medium' },
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const toolRows = [
  {
    tool: 'Arduino IDE / Arduino Platform',
    alternates: ['Arduino IDE', 'Arduino Framework'],
    where: 'Beginner MCU coding and quick prototype testing',
    why: 'Best realistic entry point for Tier-2 students.',
    interviewWeak: 'No working firmware proof.',
    jobWeak: 'Cannot prototype quickly.',
    interviewStrong: 'Shows hands-on starting proof.',
    jobStrong: 'Builds basic confidence fast.',
  },
  {
    tool: 'STM32CubeIDE / Keil uVision',
    alternates: ['STM32 IDE', 'ARM Embedded IDE'],
    where: 'Real microcontroller firmware development',
    why: 'Closer to industry-level embedded workflow than Arduino alone.',
    interviewWeak: 'Looks hobby-level only.',
    jobWeak: 'Struggles with professional MCU projects.',
    interviewStrong: 'Shows serious embedded preparation.',
    jobStrong: 'Can move toward real firmware work.',
  },
  {
    tool: 'Multimeter',
    alternates: ['Digital Multimeter', 'DMM'],
    where: 'Voltage, continuity, power checks',
    why: 'Basic board testing starts here.',
    interviewWeak: 'Cannot prove hardware debugging.',
    jobWeak: 'Cannot verify power/input/output.',
    interviewStrong: 'Shows practical electronics sense.',
    jobStrong: 'Avoids blind firmware debugging.',
  },
  {
    tool: 'Oscilloscope / Basic DSO',
    alternates: ['CRO', 'Digital Storage Oscilloscope'],
    where: 'Signal/timing/waveform checking',
    why: 'Needed for PWM, UART, clock, sensor signal validation.',
    interviewWeak: 'Cannot explain waveform-level debugging.',
    jobWeak: 'Cannot diagnose timing/signal issues.',
    interviewStrong: 'Strong proof of real board experience.',
    jobStrong: 'Helps debug actual product boards.',
  },
];

const ToolIdentification = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sand/20 via-white to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sand-foreground mb-2">
        Tool
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Identification
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        The exact tools used in real embedded jobs — what they're called, where they're used, and why you must know them.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-16 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-3" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
          <div className="col-span-2">Tool</div>
          <div className="col-span-2">Alternate Names</div>
          <div className="col-span-2">Where Used</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — Weak</div>
          <div className="col-span-2">Job — Weak</div>
          <div className="col-span-2">Interview — Strong</div>
          <div className="col-span-2">Job — Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {toolRows.map((r, i) => (
            <div
              key={r.tool}
              className={`grid px-4 py-4 items-start text-sm gap-x-3 ${
                i !== toolRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.tool}</div>
              <div className="col-span-2">
                <ul className="space-y-1">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-sand-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.where}</div>
              <div className="col-span-2 text-slate-700 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {toolRows.map((r) => (
          <div
            key={r.tool}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="mb-3 pb-3 border-b border-slate-200/60">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-2">
                {r.tool}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.alternates.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-swiss-sand/40 border border-swiss-sand-foreground/15 text-[0.6875rem] text-swiss-sand-foreground font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { l: 'Where Used', v: r.where, tone: 'text-slate-700' },
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const skillRows = [
  {
    skill: 'Embedded C Programming',
    alternates: ['Firmware C', 'Low-level C'],
    why: 'Firmware is written mostly in C.',
    interviewWeak: 'Fails coding/peripheral logic questions.',
    jobWeak: 'Cannot write reliable board code.',
    interviewStrong: 'Can explain code, pointers, bitwise logic.',
    jobStrong: 'Can implement features independently.',
  },
  {
    skill: 'Microcontroller Peripheral Control',
    alternates: ['MCU Interfacing', 'Register-level Programming'],
    why: 'Bare-metal role depends on controlling GPIO, timers, ADC, UART, SPI, I2C.',
    interviewWeak: 'Cannot explain how peripherals work.',
    jobWeak: 'Becomes dependent on copied libraries.',
    interviewStrong: 'Can answer register/peripheral flow clearly.',
    jobStrong: 'Can configure and debug real hardware behavior.',
  },
  {
    skill: 'Hardware-Firmware Debugging',
    alternates: ['Board Debugging', 'Embedded Debugging'],
    why: 'Firmware bugs often look like hardware bugs.',
    interviewWeak: 'Cannot explain why a board failed.',
    jobWeak: 'Wastes time guessing instead of isolating faults.',
    interviewStrong: 'Can show real debugging maturity.',
    jobStrong: 'Can fix issues faster in product testing.',
  },
  {
    skill: 'Sensor/Actuator Interfacing',
    alternates: ['Device Interfacing', 'I/O Integration'],
    why: 'Microcontroller boards usually connect to sensors, displays, relays, motors, buzzers.',
    interviewWeak: 'Project explanation looks shallow.',
    jobWeak: 'Cannot integrate real product inputs/outputs.',
    interviewStrong: 'Can explain full input-process-output flow.',
    jobStrong: 'Can build working product-level features.',
  },
];

const SkillExtraction = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sage/20 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sage-foreground mb-2">
        Skill
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Extraction
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        The exact skills you must pull out of your subjects — and what happens in interviews and jobs if they're weak or strong.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-14 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-3" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}>
          <div className="col-span-2">Skill</div>
          <div className="col-span-2">Alternate Names</div>
          <div className="col-span-2">Why Essential</div>
          <div className="col-span-2">Interview — If Weak</div>
          <div className="col-span-2">Job — If Weak</div>
          <div className="col-span-2">Interview — If Strong</div>
          <div className="col-span-2">Job — If Strong</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {skillRows.map((r, i) => (
            <div
              key={r.skill}
              className={`grid px-4 py-4 items-start text-sm gap-x-3 ${
                i !== skillRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.skill}</div>
              <div className="col-span-2">
                <ul className="space-y-1">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.why}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.interviewWeak}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.jobWeak}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.interviewStrong}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.jobStrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {skillRows.map((r) => (
          <div
            key={r.skill}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="mb-3 pb-3 border-b border-slate-200/60">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-2">
                {r.skill}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.alternates.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-swiss-lavender/40 border border-swiss-lavender-foreground/15 text-[0.6875rem] text-swiss-lavender-foreground font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { l: 'Why Essential', v: r.why, tone: 'text-slate-700' },
                { l: 'Interview — If Weak', v: r.interviewWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Job — If Weak', v: r.jobWeak, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview — If Strong', v: r.interviewStrong, tone: 'text-emerald-700 font-medium' },
                { l: 'Job — If Strong', v: r.jobStrong, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const jobExecutionTasks = [
  'Write Embedded C code for GPIO, timers, ADC, PWM, UART, SPI, I2C.',
  'Read datasheets and configure microcontroller registers/peripherals.',
  'Test firmware behavior on a real microcontroller board.',
  'Debug hardware-firmware issues using serial output, LEDs, multimeter, and oscilloscope/basic DSO.',
  'Interface sensors, switches, relays, displays, motors, or buzzers with microcontroller boards.',
  'Document test results, observed bugs, fixes, and final working behavior.',
];

const JobExecutionTaskLock = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sky/25 via-white to-swiss-sage/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-sky-foreground mb-2">
        Job Execution
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Task Lock
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        The exact tasks a fresher embedded engineer is expected to handle on day one of the job.
      </p>

      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
          <div className="col-span-1">No.</div>
          <div className="col-span-11">Real Fresher-Level Task</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {jobExecutionTasks.map((task, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 px-4 py-3.5 items-center text-sm gap-x-4 ${
                i !== jobExecutionTasks.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-1">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-swiss-sky/50 border border-swiss-sky-foreground/15 text-xs font-bold text-swiss-sky-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-11 text-slate-700 leading-relaxed">{task}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2.5">
        {jobExecutionTasks.map((task, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3.5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-md bg-swiss-sky/50 border border-swiss-sky-foreground/15 flex items-center justify-center">
              <span className="text-[0.625rem] font-bold text-swiss-sky-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed pt-0.5">{task}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const behaviorRows = [
  {
    area: 'Subject learning',
    top: 'Learns subjects as job tools.',
    bottom: 'Learns subjects as exam units.',
    interview: 'Top student gives execution examples.',
    job: 'Top student adapts faster on boards.',
  },
  {
    area: 'Timing',
    top: 'Starts C early and microcontroller work by Sem 4–5.',
    bottom: 'Waits until final year project.',
    interview: 'Top student has proof before placements.',
    job: 'Bottom student needs training from zero.',
  },
  {
    area: 'Projects',
    top: 'Builds peripheral-based projects with test notes.',
    bottom: 'Builds copied Arduino/IoT demos.',
    interview: 'Top student explains failures/debugging.',
    job: 'Bottom student cannot handle real bugs.',
  },
  {
    area: 'Focus',
    top: 'Prioritizes C, microcontrollers, embedded systems.',
    bottom: 'Chases random AI/ML/web certificates.',
    interview: 'Top student looks role-aligned.',
    job: 'Bottom student looks confused.',
  },
  {
    area: 'Recovery',
    top: 'Fixes missed subjects with board practice.',
    bottom: 'Watches theory videos endlessly.',
    interview: 'Top student shows working proof.',
    job: 'Bottom student still cannot execute.',
  },
  {
    area: 'Interview prep',
    top: 'Prepares UART/SPI/I2C, interrupts, timers, pointers, debugging.',
    bottom: 'Memorizes definitions.',
    interview: 'Top student survives technical probing.',
    job: 'Bottom student collapses after first practical question.',
  },
  {
    area: 'Consistency',
    top: 'Practices small code + board tests weekly.',
    bottom: 'Studies only before exams/interviews.',
    interview: 'Top student has confidence.',
    job: 'Bottom student is slow and dependent.',
  },
  {
    area: 'Skill conversion',
    top: 'Converts subject into code, test, debug, documentation.',
    bottom: 'Keeps subject and project separate.',
    interview: 'Top student sounds job-ready.',
    job: 'Bottom student becomes training burden.',
  },
];

const BehaviorGap = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-lavender/20 via-white to-swiss-rose/15 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Behavior Gap
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        What top 20% students do differently from the bottom 80% — and how it decides interviews and jobs.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-2">Area</div>
          <div className="col-span-3">Top 20% Behavior</div>
          <div className="col-span-3">Bottom 80% Behavior</div>
          <div className="col-span-2">Interview Impact</div>
          <div className="col-span-2">Job Impact</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {behaviorRows.map((r, i) => (
            <div
              key={r.area}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== behaviorRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.area}</div>
              <div className="col-span-3 text-emerald-700 font-medium leading-relaxed">{r.top}</div>
              <div className="col-span-3 text-rose-700/85 font-light leading-relaxed">{r.bottom}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.interview}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.job}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {behaviorRows.map((r) => (
          <div
            key={r.area}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.area}
            </p>
            <div className="space-y-3">
              {[
                { l: 'Top 20% Behavior', v: r.top, tone: 'text-emerald-700 font-medium' },
                { l: 'Bottom 80% Behavior', v: r.bottom, tone: 'text-rose-700/85 font-light' },
                { l: 'Interview Impact', v: r.interview, tone: 'text-slate-700' },
                { l: 'Job Impact', v: r.job, tone: 'text-slate-700' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Final Summary */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-swiss-lavender-foreground mb-4">
          Final Summary
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sage-foreground/15 rounded-lg backdrop-blur-sm">
            <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sage-foreground font-semibold mb-2">
              Subjects That Matter Most
            </p>
            <ol className="space-y-1 text-sm text-slate-700">
              {['Microprocessors and Microcontrollers', 'Embedded Systems', 'C Programming'].map((s, i) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-swiss-sage-foreground font-bold">{i + 1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2.5">
              These three decide whether the student can actually enter embedded firmware.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sky-foreground/15 rounded-lg backdrop-blur-sm">
            <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sky-foreground font-semibold mb-2">
              Critical Semesters
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Sem 4–6 are the most important. This is where microcontrollers, instrumentation, digital electronics, and embedded systems start becoming job-relevant.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-white/60 border border-swiss-rose-foreground/15 rounded-lg backdrop-blur-sm">
            <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-rose-foreground font-semibold mb-2">
              What Happens If Delayed
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {[
                ['C', 'coding fails.'],
                ['microcontrollers', 'peripheral control fails.'],
                ['instrumentation', 'debugging becomes fake.'],
                ['embedded systems', 'projects remain demo-level, not job-level.'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-swiss-rose-foreground/60 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    <span className="font-semibold text-slate-800">If {k} is delayed,</span> {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-5 bg-white/60 border border-swiss-lavender-foreground/15 rounded-lg backdrop-blur-sm">
            <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-lavender-foreground font-semibold mb-2">
              What Top Students Do Differently
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              They do not "study embedded." They convert each subject into board proof: one peripheral, one bug, one test result, one explanation. That is what separates a fresher who gets shortlisted from a fresher who only has a degree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const recoveryRows = [
  {
    subject: 'C Programming',
    missed: 'Passed exam but cannot code independently',
    minimum: 'Write small C programs without copying',
    plan: 'Daily 1–2 programs: pointers, arrays, structures, bitwise operations',
    time: '4–6 weeks',
    skip: 'File handling depth, advanced algorithms',
    mustNotSkip: 'Pointers, structures, bitwise operators, memory',
  },
  {
    subject: 'Microprocessors and Microcontrollers',
    missed: 'Studied theory but cannot use peripherals',
    minimum: 'Configure GPIO, timers, UART, ADC on one board',
    plan: 'Pick one MCU board and implement 5 peripheral demos',
    time: '6–8 weeks',
    skip: 'Long 8086 theory depth',
    mustNotSkip: 'Interrupts, timers, GPIO, UART, SPI/I2C, ADC',
  },
  {
    subject: 'Embedded Systems',
    missed: 'Knows definitions but no working project',
    minimum: 'Build one sensor/control product flow',
    plan: 'Build one mini embedded product with input, processing, output, test notes',
    time: '6–8 weeks',
    skip: 'OS-level theory overload',
    mustNotSkip: 'System flow, timing, sensor-actuator logic',
  },
  {
    subject: 'Measurements and Instrumentation',
    missed: 'Cannot use testing instruments',
    minimum: 'Measure voltage, waveform, sensor output',
    plan: 'Practice multimeter + DSO/CRO basics and document readings',
    time: '3–4 weeks',
    skip: 'Deep metrology theory',
    mustNotSkip: 'Voltage, current, waveform, sensor measurement, error',
  },
  {
    subject: 'Digital Electronics',
    missed: 'Forgot logic fundamentals',
    minimum: 'Explain gates, flip-flops, counters, timing',
    plan: 'Revise logic circuits + timing diagrams + counters',
    time: '3–4 weeks',
    skip: 'Boolean theorem depth beyond need',
    mustNotSkip: 'Logic gates, flip-flops, counters, registers, timing',
  },
];

const RecoveryTable = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sage/20 via-white to-swiss-sand/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Recovery
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Missed a subject in college? Here's the fastest way to catch up to a job-ready level.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-14 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-3" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}>
          <div className="col-span-2">Subject</div>
          <div className="col-span-2">Missed Situation</div>
          <div className="col-span-2">Minimum Level</div>
          <div className="col-span-3">Fast Plan</div>
          <div className="col-span-1">Time</div>
          <div className="col-span-2">Skip</div>
          <div className="col-span-2">Must Not Skip</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {recoveryRows.map((r, i) => (
            <div
              key={r.subject}
              className={`grid px-4 py-4 items-start text-sm gap-x-3 ${
                i !== recoveryRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
              style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.subject}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.missed}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.minimum}</div>
              <div className="col-span-3 text-slate-700 leading-relaxed">{r.plan}</div>
              <div className="col-span-1 text-swiss-sky-foreground font-semibold tracking-wide">{r.time}</div>
              <div className="col-span-2 text-rose-700/85 font-light leading-relaxed">{r.skip}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.mustNotSkip}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {recoveryRows.map((r) => (
          <div
            key={r.subject}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-200/60">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug flex-1 min-w-0">
                {r.subject}
              </p>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-swiss-sky-foreground/20 bg-swiss-sky/40 text-[0.6875rem] font-bold tracking-wide text-swiss-sky-foreground flex-shrink-0">
                {r.time}
              </span>
            </div>
            <div className="space-y-3">
              {[
                { l: 'Missed Situation', v: r.missed, tone: 'text-slate-600' },
                { l: 'Minimum Level', v: r.minimum, tone: 'text-slate-700' },
                { l: 'Fast Plan', v: r.plan, tone: 'text-slate-700' },
                { l: 'Skip', v: r.skip, tone: 'text-rose-700/85 font-light' },
                { l: 'Must Not Skip', v: r.mustNotSkip, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const impactRows = [
  {
    subject: 'Microprocessors and Microcontrollers',
    interview: 'Explain interrupts, timers, registers, memory, UART/SPI/I2C, ADC/PWM.',
    work: 'Configure and debug peripherals on boards.',
    ignoredInterview: 'Cannot answer "how does UART/interrupt/timer work?"',
    ignoredWork: 'Code becomes copy-paste without control understanding.',
    why: 'This is the heart of bare-metal work.',
  },
  {
    subject: 'Embedded Systems',
    interview: 'Explain firmware flow, real-time behavior, hardware-software interaction.',
    work: 'Convert board requirements into working device behavior.',
    ignoredInterview: 'Cannot explain complete embedded project flow.',
    ignoredWork: 'Fails to connect code with product behavior.',
    why: 'This turns subject knowledge into product execution.',
  },
  {
    subject: 'C Programming / Programming in C',
    interview: 'Explain pointers, memory, structures, bitwise operations, debugging logic.',
    work: 'Write firmware logic and fix bugs.',
    ignoredInterview: 'Fails basic embedded C rounds.',
    ignoredWork: 'Cannot write clean peripheral-control code.',
    why: 'No C = no embedded firmware entry.',
  },
  {
    subject: 'Electronic Measurements and Instrumentation',
    interview: 'Explain how to test voltage, signal, sensor, timing, and failure behavior.',
    work: 'Use instruments to verify board output.',
    ignoredInterview: 'Cannot prove real hardware debugging.',
    ignoredWork: 'Cannot identify whether bug is hardware or firmware.',
    why: 'Firmware freshers must verify behavior, not just code.',
  },
  {
    subject: 'Digital Electronics',
    interview: 'Explain logic levels, flip-flops, counters, timing, multiplexers.',
    work: 'Understand GPIO states, timing, digital signal behavior.',
    ignoredInterview: 'Weak on basic electronics logic questions.',
    ignoredWork: 'Misreads signal behavior and timing issues.',
    why: 'It gives the logic foundation behind microcontroller pins.',
  },
];

const ImpactTable = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-rose/15 via-white to-swiss-sand/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Impact
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        How each subject directly affects your interviews and daily job — and what you lose if you ignore it.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-2">Subject</div>
          <div className="col-span-2">Interview Use</div>
          <div className="col-span-2">Daily Work Use</div>
          <div className="col-span-2">If Ignored — Interview</div>
          <div className="col-span-2">If Ignored — Work</div>
          <div className="col-span-2">Why Essential</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {impactRows.map((r, i) => (
            <div
              key={r.subject}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== impactRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-2 text-slate-800 font-semibold leading-snug">{r.subject}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.interview}</div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.work}</div>
              <div className="col-span-2 text-rose-700/90 font-light leading-relaxed">{r.ignoredInterview}</div>
              <div className="col-span-2 text-rose-700/90 font-light leading-relaxed">{r.ignoredWork}</div>
              <div className="col-span-2 text-emerald-700 font-medium leading-relaxed">{r.why}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {impactRows.map((r) => (
          <div
            key={r.subject}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug mb-3 pb-3 border-b border-slate-200/60">
              {r.subject}
            </p>
            <div className="space-y-3">
              {[
                { l: 'Interview Use', v: r.interview, tone: 'text-slate-700' },
                { l: 'Daily Work Use', v: r.work, tone: 'text-slate-700' },
                { l: 'If Ignored — Interview', v: r.ignoredInterview, tone: 'text-rose-700/90' },
                { l: 'If Ignored — Work', v: r.ignoredWork, tone: 'text-rose-700/90' },
                { l: 'Why Essential', v: r.why, tone: 'text-emerald-700 font-medium' },
              ].map((f) => (
                <div key={f.l} className="flex flex-col gap-1">
                  <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                    {f.l}
                  </span>
                  <span className={`text-sm leading-relaxed ${f.tone}`}>{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const embTimelineRows: { subject: string; when: string; priority: 'HIGH' | 'MEDIUM'; whatToDo: string; ifIgnored: string }[] = [
  {
    subject: 'C Programming / Programming in C',
    when: 'Early: Sem 1–3',
    priority: 'HIGH',
    whatToDo: 'Master loops, functions, arrays, pointers, structures, bitwise operations.',
    ifIgnored: 'You may understand electronics but fail firmware coding interviews.',
  },
  {
    subject: 'Digital Electronics',
    when: 'Core: Sem 3–5',
    priority: 'MEDIUM',
    whatToDo: 'Learn logic gates, flip-flops, counters, timing diagrams, digital signal behavior.',
    ifIgnored: 'GPIO/timing behavior becomes guesswork.',
  },
  {
    subject: 'Microprocessors and Microcontrollers',
    when: 'Core: Sem 4–6',
    priority: 'HIGH',
    whatToDo: 'Focus on registers, memory, interrupts, timers, ADC, serial communication, interfacing.',
    ifIgnored: 'You cannot explain bare-metal control; embedded interviews become weak.',
  },
  {
    subject: 'Electronic Measurements and Instrumentation',
    when: 'Core: Sem 4–6',
    priority: 'MEDIUM',
    whatToDo: 'Learn multimeter, CRO/DSO, sensors, transducers, voltage/current/signal measurement.',
    ifIgnored: 'You cannot prove board debugging or real hardware testing ability.',
  },
  {
    subject: 'Embedded Systems',
    when: 'Final/Core: Sem 5–7',
    priority: 'HIGH',
    whatToDo: 'Connect C + microcontroller + peripherals + timing + hardware behavior into product-level execution.',
    ifIgnored: 'You may know subjects separately but fail to build working embedded products.',
  },
];

const priorityBadge = (p: 'HIGH' | 'MEDIUM') =>
  p === 'HIGH'
    ? 'bg-rose-100 text-rose-700 border-rose-200'
    : 'bg-amber-100 text-amber-700 border-amber-200';

const SubjectTimelineTable = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sand/20 via-white to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Subject Timeline Table
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        Which semester each subject usually appears in — so you know exactly when to start preparing.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-3">Subject</div>
          <div className="col-span-2">When To Focus</div>
          <div className="col-span-1">Priority</div>
          <div className="col-span-3">What To Do</div>
          <div className="col-span-3">If Ignored</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {embTimelineRows.map((r, i) => (
            <div
              key={r.subject}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== embTimelineRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-3 text-slate-700 font-semibold leading-snug">{r.subject}</div>
              <div className="col-span-2 text-swiss-sky-foreground font-medium">{r.when}</div>
              <div className="col-span-1">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[0.6875rem] font-bold tracking-wide ${priorityBadge(r.priority)}`}>
                  {r.priority}
                </span>
              </div>
              <div className="col-span-3 text-slate-600 leading-relaxed">{r.whatToDo}</div>
              <div className="col-span-3 text-slate-500 font-light leading-relaxed">{r.ifIgnored}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {embTimelineRows.map((r) => (
          <div
            key={r.subject}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-200/60">
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">{r.subject}</p>
                <p className="text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sky-foreground font-medium mt-1">
                  {r.when}
                </p>
              </div>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[0.6875rem] font-bold tracking-wide flex-shrink-0 ${priorityBadge(r.priority)}`}>
                {r.priority}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  What To Do
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{r.whatToDo}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  If Ignored
                </span>
                <span className="text-sm text-slate-500 font-light leading-relaxed">{r.ifIgnored}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Student Summary */}
      <div className="mt-8 sm:mt-10 grid gap-4 md:grid-cols-2">
        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sky-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sky-foreground font-semibold mb-2">
            Most Important Semesters
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Sem 4–6 matter the most because Microcontrollers, Instrumentation, Digital Electronics, and Embedded Systems usually become active here.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sage-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sage-foreground font-semibold mb-2">
            Critical Subjects
          </p>
          <ol className="space-y-1 text-sm text-slate-700">
            {['Microprocessors and Microcontrollers', 'Embedded Systems', 'C Programming'].map((s, i) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-swiss-sage-foreground font-bold">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2.5">
            These three decide whether the student can actually write and explain firmware.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-lavender-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-lavender-foreground font-semibold mb-2">
            Support Subjects
          </p>
          <ol start={4} className="space-y-1 text-sm text-slate-700">
            {['Electronic Measurements and Instrumentation', 'Digital Electronics'].map((s, i) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-swiss-lavender-foreground font-bold">{i + 4}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2.5">
            These decide whether the student can debug real boards instead of only writing code on paper.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-rose-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-rose-foreground font-semibold mb-2">
            What Happens If Delayed
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700">
            {[
              ['C', 'coding becomes weak.'],
              ['Microcontrollers', 'peripheral control becomes weak.'],
              ['Instrumentation', 'hardware debugging becomes fake.'],
              ['Embedded Systems', 'projects remain toy-level instead of job-relevant.'],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-swiss-rose-foreground/60 mt-1.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  <span className="font-semibold text-slate-800">If {k} is delayed,</span> {v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const subjectRecognitionRows = [
  {
    rank: 1,
    primary: 'Microprocessors and Microcontrollers',
    alternates: ['Microprocessors & Interfacing', 'Microcontroller Architecture', 'Microcontroller-Based Systems'],
    identity: 'Core peripheral-control subject',
    semester: 'Sem 4–6',
    notFound: 'Look for 8085/8086 + 8051/ARM + interfacing topics',
  },
  {
    rank: 2,
    primary: 'Embedded Systems',
    alternates: ['Embedded System Design', 'Real-Time Embedded Systems', 'Embedded Controllers'],
    identity: 'Firmware-to-product behavior subject',
    semester: 'Sem 5–7',
    notFound: 'Look for RTOS basics, embedded C, sensors, actuators, device control',
  },
  {
    rank: 3,
    primary: 'C Programming / Programming in C',
    alternates: ['Problem Solving Using C', 'Computer Programming', 'Programming for Engineers'],
    identity: 'Firmware coding foundation',
    semester: 'Sem 1–3',
    notFound: 'Look for functions, arrays, pointers, structures, memory, bitwise operators',
  },
  {
    rank: 4,
    primary: 'Electronic Measurements and Instrumentation',
    alternates: ['Measurements and Instrumentation', 'Electronic Instrumentation', 'Electrical & Electronic Measurements'],
    identity: 'Testing and debug subject',
    semester: 'Sem 4–6',
    notFound: 'Look for CRO/DSO, multimeter, sensors, transducers, measurement errors',
  },
  {
    rank: 5,
    primary: 'Digital Electronics',
    alternates: ['Digital Logic Design', 'Switching Theory and Logic Design', 'Digital Circuits'],
    identity: 'Logic and timing foundation',
    semester: 'Sem 3–5',
    notFound: 'Look for gates, flip-flops, counters, registers, multiplexers, logic families',
  },
];

const SubjectRecognitionTable = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sage/20 via-white to-swiss-lavender/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
        Subject Recognition Table
      </h2>
      <p className="text-sm text-slate-600 mb-5 sm:mb-6">
        How to spot the same subject under different names your college may use — so you never miss what to study.
      </p>

      {/* Desktop table */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-1">Rank</div>
          <div className="col-span-2">Primary Name</div>
          <div className="col-span-3">Alternate Names (Top 3)</div>
          <div className="col-span-2">Functional Identity</div>
          <div className="col-span-1">Semester</div>
          <div className="col-span-3">If Not Found</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {subjectRecognitionRows.map((r, i) => (
            <div
              key={r.rank}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== subjectRecognitionRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-1">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-swiss-sage/50 border border-swiss-sage-foreground/15 text-xs font-bold text-swiss-sage-foreground">
                  {r.rank}
                </span>
              </div>
              <div className="col-span-2 text-slate-700 font-semibold leading-snug">{r.primary}</div>
              <div className="col-span-3">
                <ul className="space-y-1">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 text-slate-600 leading-relaxed">{r.identity}</div>
              <div className="col-span-1 text-swiss-sky-foreground font-medium">{r.semester}</div>
              <div className="col-span-3 text-slate-500 font-light leading-relaxed">{r.notFound}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="xl:hidden space-y-3.5">
        {subjectRecognitionRows.map((r) => (
          <div
            key={r.rank}
            className="p-4 sm:p-5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-start gap-3 mb-4 pb-3 border-b border-slate-200/60">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-swiss-sage/50 border border-swiss-sage-foreground/15 text-xs font-bold text-swiss-sage-foreground flex-shrink-0">
                {r.rank}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">{r.primary}</p>
                <p className="text-[0.6875rem] tracking-[0.15em] uppercase text-swiss-sky-foreground font-medium mt-1">
                  {r.semester}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  Alternate Names (Top 3)
                </span>
                <ul className="space-y-1 mt-0.5">
                  {r.alternates.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  Functional Identity
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{r.identity}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  If Not Found
                </span>
                <span className="text-sm text-slate-500 font-light leading-relaxed">{r.notFound}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const fresherTasks = [
  'Write basic Embedded C code for microcontroller peripherals.',
  'Configure GPIO, timers, ADC, PWM, UART, SPI, and I2C.',
  'Debug firmware behavior on a real development board.',
  'Read schematics/datasheets to connect firmware with hardware pins and signals.',
  'Test board-level input/output behavior and document failures.',
];

const coverageRows = [
  { coverage: 'Core Understanding', subject: 'Microprocessors and Microcontrollers' },
  { coverage: 'Execution', subject: 'C Programming / Programming in C' },
  { coverage: 'Debugging', subject: 'Electronic Measurements and Instrumentation' },
  { coverage: 'Design/Application', subject: 'Embedded Systems' },
  { coverage: 'Testing/Field', subject: 'Digital Electronics + Instrumentation' },
];

const finalSubjects = [
  {
    rank: 1,
    subject: 'Microprocessors and Microcontrollers',
    score: 100,
    why: 'Direct heart of bare-metal peripheral control. Without this, the student cannot understand registers, timers, interrupts, GPIO, ADC, UART, SPI, or I2C.',
    task: 'Peripheral configuration and board-level control',
  },
  {
    rank: 2,
    subject: 'Embedded Systems',
    score: 97,
    why: 'Connects firmware with real product behavior: timing, interrupts, hardware-software interaction, real-time constraints.',
    task: 'Firmware-product integration',
  },
  {
    rank: 3,
    subject: 'C Programming / Programming in C',
    score: 95,
    why: 'Bare-metal firmware is mostly written and debugged through C-level logic. Weak C means weak firmware.',
    task: 'Embedded code writing and debugging',
  },
  {
    rank: 4,
    subject: 'Electronic Measurements and Instrumentation',
    score: 88,
    why: 'Critical for testing real boards. Freshers must verify voltage, signals, sensor behavior, and failure conditions.',
    task: 'Board testing and debug proof',
  },
  {
    rank: 5,
    subject: 'Digital Electronics',
    score: 83,
    why: 'Supports GPIO logic, timing, counters, flip-flops, signal states, and digital behavior behind microcontroller pins.',
    task: 'Logic-level understanding and signal behavior',
  },
];

const scoreTone = (score: number) =>
  score >= 95 ? 'text-emerald-700' : score >= 85 ? 'text-amber-700' : 'text-orange-700';

const FresherWorkTasks = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-sky/20 via-white to-swiss-sage/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-5 sm:mb-6">
        Fresher Work Tasks
      </h2>

      {/* Tasks list */}
      <div className="space-y-2.5 mb-8 sm:mb-10">
        {fresherTasks.map((task, i) => (
          <div
            key={i}
            className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm hover:bg-white/80 transition-colors"
          >
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-swiss-sky/50 border border-swiss-sky-foreground/15 flex items-center justify-center">
              <span className="text-[0.625rem] sm:text-xs font-bold text-swiss-sky-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">{task}</p>
          </div>
        ))}
      </div>

      {/* Required Coverage */}
      <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-swiss-lavender-foreground mb-2">
        Required Coverage
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        The core topics you must learn — and the college subjects where you actually study them.
      </p>

      {/* Desktop coverage table */}
      <div className="hidden md:block mb-8 sm:mb-10">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
          <div className="col-span-5">Required Coverage</div>
          <div className="col-span-7">Subject Used</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {coverageRows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 px-4 py-3.5 items-center text-sm ${
                i !== coverageRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-5 text-slate-500 font-medium">{r.coverage}</div>
              <div className="col-span-7 text-slate-700 font-semibold">{r.subject}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile coverage cards */}
      <div className="md:hidden space-y-2.5 mb-8">
        {coverageRows.map((r, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 p-3.5 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
              {r.coverage}
            </span>
            <span className="text-sm text-slate-700 font-semibold">{r.subject}</span>
          </div>
        ))}
      </div>

      {/* Final 5 Subjects */}
      <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-swiss-sage-foreground mb-2">
        Final 5 Subjects
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        The five must-focus subjects from your syllabus that directly decide your embedded job readiness.
      </p>

      {/* Desktop final-subjects table */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold gap-x-4">
          <div className="col-span-1">Rank</div>
          <div className="col-span-3">Subject</div>
          <div className="col-span-1">Score</div>
          <div className="col-span-4">Why Selected</div>
          <div className="col-span-3">Job Task Supported</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {finalSubjects.map((s, i) => (
            <div
              key={s.rank}
              className={`grid grid-cols-12 px-4 py-4 items-start text-sm gap-x-4 ${
                i !== finalSubjects.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-1">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-swiss-sage/50 border border-swiss-sage-foreground/15 text-xs font-bold text-swiss-sage-foreground">
                  {s.rank}
                </span>
              </div>
              <div className="col-span-3 text-slate-700 font-semibold">{s.subject}</div>
              <div className={`col-span-1 font-bold tracking-wide ${scoreTone(s.score)}`}>{s.score}</div>
              <div className="col-span-4 text-slate-500 font-light leading-relaxed">{s.why}</div>
              <div className="col-span-3 text-slate-600 leading-relaxed">{s.task}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet final-subjects cards */}
      <div className="lg:hidden space-y-3">
        {finalSubjects.map((s) => (
          <div
            key={s.rank}
            className="p-4 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-swiss-sage/50 border border-swiss-sage-foreground/15 text-xs font-bold text-swiss-sage-foreground">
                  {s.rank}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800">{s.subject}</span>
              </div>
              <span className={`text-sm font-bold tracking-wide ${scoreTone(s.score)}`}>{s.score}</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  Why Selected
                </span>
                <span className="text-sm text-slate-600 leading-relaxed font-light">{s.why}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  Job Task Supported
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{s.task}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const clusterRows = [
  {
    industry: 'Electronics Product Engineering',
    sub: 'Embedded Consumer/Industrial Devices',
    cluster: 'Microcontroller-based control boards',
    work: 'Firmware for buttons, sensors, displays, motors, relays.',
  },
  {
    industry: 'Electronics Product Engineering',
    sub: 'Embedded Consumer/Industrial Devices',
    cluster: 'Sensor-interface product boards',
    work: 'ADC/I2C/SPI sensor reading, calibration, logging.',
  },
  {
    industry: 'Smart Energy & Metering Devices',
    sub: 'Smart Electricity Metering',
    cluster: 'Single/three-phase meter boards',
    work: 'Firmware testing for metering ICs, display, communication.',
  },
  {
    industry: 'Smart Energy & Metering Devices',
    sub: 'Energy monitoring devices',
    cluster: 'IoT energy monitor boards',
    work: 'Sensor reading, data transmission, field testing support.',
  },
];

const IndustryClusterMapping = () => {
  const sec = useScrollGlow();
  return (
    <section
      ref={sec.ref}
      className={`bg-gradient-to-br from-swiss-lavender/20 via-white to-swiss-sky/20 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)] transition-all duration-700 ease-in-out ${
        sec.inView
          ? 'border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.25),0_0_40px_hsl(var(--accent)/0.15)]'
          : 'border border-slate-200/80'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-1.5">
        Industry → Sub-industry → Cluster Mapping
      </h2>
      <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.15em] uppercase text-swiss-lavender-foreground mb-5 sm:mb-6">
        Junior Embedded Firmware Engineer
      </p>

      {/* Desktop table */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 px-4 py-3 bg-white/60 border border-slate-200/70 rounded-t-lg text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
          <div className="col-span-3">Industry</div>
          <div className="col-span-3">Sub-industry</div>
          <div className="col-span-3">Cluster</div>
          <div className="col-span-3">Cluster Work</div>
        </div>
        <div className="border-x border-b border-slate-200/70 rounded-b-lg overflow-hidden bg-white/40 backdrop-blur-sm">
          {clusterRows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 px-4 py-3.5 items-start text-sm gap-x-4 ${
                i !== clusterRows.length - 1 ? 'border-b border-slate-200/60' : ''
              } hover:bg-white/70 transition-colors`}
            >
              <div className="col-span-3 text-slate-700 font-medium">{r.industry}</div>
              <div className="col-span-3 text-slate-600">{r.sub}</div>
              <div className="col-span-3 text-slate-600">{r.cluster}</div>
              <div className="col-span-3 text-slate-500 font-light leading-relaxed">{r.work}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="lg:hidden space-y-3">
        {clusterRows.map((r, i) => (
          <div
            key={i}
            className="p-4 bg-white/60 border border-slate-200/70 rounded-lg backdrop-blur-sm space-y-2.5"
          >
            {[
              { l: 'Industry', v: r.industry },
              { l: 'Sub-industry', v: r.sub },
              { l: 'Cluster', v: r.cluster },
              { l: 'Cluster Work', v: r.work },
            ].map((f) => (
              <div key={f.l} className="flex flex-col gap-0.5">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-slate-400 font-semibold">
                  {f.l}
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{f.v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Fresher Role + Alternate Names */}
      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2">
        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sage-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold mb-1.5">
            Fresher Role
          </p>
          <p className="text-sm sm:text-base font-semibold text-swiss-sage-foreground tracking-wide">
            Junior Embedded Firmware Engineer
          </p>
        </div>
        <div className="p-4 sm:p-5 bg-white/60 border border-swiss-sky-foreground/15 rounded-lg backdrop-blur-sm">
          <p className="text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase text-slate-400 font-semibold mb-2">
            Alternate Market Names
          </p>
          <ul className="space-y-1.5">
            {['Embedded Software Engineer', 'Embedded Systems Engineer'].map((n) => (
              <li key={n} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/60" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedProductEngineering;
