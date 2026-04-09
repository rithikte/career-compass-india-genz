
import React from 'react';
import { Cpu, Shield, TrendingUp, Briefcase, MapPin, Building2, Wrench, Tag, AlertTriangle, ChevronRight, Zap, Radio, Heart, BookOpen, Award, Target, Factory, CheckCircle, XCircle } from 'lucide-react';

const ECEEmbeddedSystems = () => {
  return (
    <div className="space-y-8 sm:space-y-12">

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-swiss-sky via-white to-swiss-lavender border border-swiss-sky-foreground/10 p-6 sm:p-10 lg:p-14 shadow-[var(--shadow-md)]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-swiss-sky to-swiss-lavender/60 rounded-full -translate-y-40 translate-x-40 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-swiss-lavender to-swiss-sage/60 rounded-full translate-y-32 -translate-x-32 opacity-40 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-swiss-sage rounded-full opacity-30 blur-2xl" />
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[0.6875rem] sm:text-xs tracking-widest uppercase text-slate-400 font-medium mb-6 sm:mb-8">
            <span>Degree</span>
            <ChevronRight className="w-3 h-3" />
            <span>ECE</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-swiss-sky-foreground font-semibold">Embedded Systems</span>
          </div>

          {/* Title Block */}
          <div className="max-w-3xl">
            <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-swiss-lavender-foreground mb-3">
              Electronics & Communication Engineering
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-5">
              Embedded Systems Engineer
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl font-light">
              Build and validate embedded electronic products by combining controller-level software with board-level hardware behavior.
            </p>
          </div>

          {/* Primary Environment Tag */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-swiss-sky-foreground/15 rounded-lg backdrop-blur-sm shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-swiss-sky-foreground" />
            <span className="text-xs sm:text-sm text-swiss-sky-foreground font-medium">Product Engineering · Embedded R&D · Device Development</span>
          </div>
        </div>
      </section>

      {/* Market Indicators - Swiss Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {[
          { label: 'AI Impact Exposure', value: 'LOW', bgClass: 'bg-gradient-to-br from-swiss-sage to-swiss-sage/60', borderClass: 'border-swiss-sage-foreground/12', colorClass: 'text-swiss-sage-foreground' },
          { label: 'Market Entry Reality', value: 'STRONG', bgClass: 'bg-gradient-to-br from-swiss-sky to-swiss-sky/60', borderClass: 'border-swiss-sky-foreground/12', colorClass: 'text-swiss-sky-foreground' },
          { label: 'Compensation Reality', value: 'STRONG', bgClass: 'bg-gradient-to-br from-swiss-lavender to-swiss-lavender/60', borderClass: 'border-swiss-lavender-foreground/12', colorClass: 'text-swiss-lavender-foreground' },
          { label: '5-Year Growth', value: 'STRONG', bgClass: 'bg-gradient-to-br from-swiss-sage to-swiss-sage/60', borderClass: 'border-swiss-sage-foreground/12', colorClass: 'text-swiss-sage-foreground' },
          { label: 'Oversupply Risk', value: 'MODERATE', bgClass: 'bg-gradient-to-br from-swiss-sand to-swiss-sand/60', borderClass: 'border-swiss-sand-foreground/12', colorClass: 'text-swiss-sand-foreground' },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.bgClass} ${item.borderClass} border rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
          >
            <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-slate-500 mb-2 sm:mb-3">
              {item.label}
            </p>
            <p className={`text-base sm:text-lg font-bold ${item.colorClass} tracking-wide`}>
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* AI Impact Reason */}
      <section className="bg-gradient-to-r from-swiss-sage via-swiss-sage/70 to-swiss-sage/30 border border-swiss-sage-foreground/12 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="mt-0.5 p-2.5 bg-white/70 rounded-lg border border-swiss-sage-foreground/10 shadow-sm backdrop-blur-sm">
            <Shield className="w-4 h-4 text-swiss-sage-foreground" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-swiss-sage-foreground tracking-wide uppercase mb-1.5">
              AI Impact Reason
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Core work depends on firmware-hardware bring-up, debugging, peripheral interfacing, and bench validation.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Work */}
      <section className="bg-gradient-to-br from-white via-swiss-sky/20 to-swiss-lavender/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5 sm:mb-6">
          Daily Work
        </h2>
        <div className="space-y-3.5">
          {[
            { task: 'Firmware bring-up on controller-based boards', bgClass: 'bg-swiss-sky/50 hover:bg-swiss-sky/80 border-swiss-sky-foreground/10' },
            { task: 'Peripheral interface validation and debugging', bgClass: 'bg-swiss-lavender/50 hover:bg-swiss-lavender/80 border-swiss-lavender-foreground/10' },
            { task: 'Embedded feature test logs with hardware behavior confirmation', bgClass: 'bg-swiss-sage/50 hover:bg-swiss-sage/80 border-swiss-sage-foreground/10' },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-lg ${item.bgClass} border transition-all duration-200`}>
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/80 border border-slate-200/50 flex items-center justify-center shadow-sm">
                <span className="text-[0.625rem] sm:text-xs font-bold text-slate-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                {item.task}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Overview */}
      <section className="bg-gradient-to-br from-swiss-sky/30 via-white to-swiss-lavender/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2 sm:mb-3">
          Role Overview
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-6 sm:mb-8">
          You build and debug controller-based electronic boards where firmware must correctly talk to real hardware, peripherals, and signals.
        </p>

        {/* What You Actually Do Daily */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-sky-foreground mb-4">
            What You Actually Do Daily
          </h3>
          <div className="space-y-3">
            {[
              'Bring up firmware on microcontroller-based boards and make basic features run correctly.',
              'Debug peripheral interfaces and check whether hardware response matches firmware logic.',
              'Create test/debug evidence that proves the board behavior is valid or shows exactly where it fails.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-3.5 bg-white/60 border border-swiss-sky-foreground/8 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-swiss-sky/60 border border-swiss-sky-foreground/10 flex items-center justify-center mt-0.5">
                  <span className="text-[0.6rem] sm:text-[0.625rem] font-bold text-swiss-sky-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How To Enter This Role */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-swiss-sage/30 to-swiss-sage/10 border border-swiss-sage-foreground/10 rounded-xl p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-sage-foreground mb-1.5">
            How To Enter This Role
          </h3>
          <p className="text-[0.6875rem] sm:text-xs text-slate-500 font-medium mb-4">
            Entry Job Title: Embedded Engineer / Firmware Engineer / Junior Embedded Systems Engineer
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2.5">How to get in</p>
              <div className="space-y-2">
                {[
                  'Build 1 strong board-based project where firmware controls real peripherals, not just simulator output.',
                  'Become solid in Microcontrollers + Embedded Systems + Digital Electronics, because these are screening subjects, not just academic subjects.',
                  'Practice firmware debugging and hardware validation on a real MCU board before interviews.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 px-3 py-2 bg-white/50 border border-white/70 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-swiss-sage-foreground/50 mt-1.5 flex-shrink-0" />
                    <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2.5">What companies check</p>
              <div className="space-y-2">
                {[
                  'Whether you can explain GPIO, UART, SPI, I2C, interrupts, timers, and register-level control clearly.',
                  'Whether you can debug whether a failure is coming from firmware logic, interface mismatch, or board-side signal/power issue.',
                  'Whether you have real proof of embedded work, because resume-only embedded claims get rejected fast.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 px-3 py-2 bg-white/50 border border-white/70 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-swiss-sage-foreground/50 mt-1.5 flex-shrink-0" />
                    <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Major Project Direction */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-swiss-lavender/30 to-swiss-lavender/10 border border-swiss-lavender-foreground/10 rounded-xl p-4 sm:p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-1.5 bg-white/70 rounded-md border border-swiss-lavender-foreground/10 shadow-sm">
              <Target className="w-3.5 h-3.5 text-swiss-lavender-foreground" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-lavender-foreground">
              Major Project Direction
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mb-2">
            Build a microcontroller-based smart control board that reads sensors, drives outputs, communicates through UART/I2C/SPI, and includes full debug/test evidence.
          </p>
          <p className="text-[0.8125rem] sm:text-sm text-slate-500 leading-relaxed font-light">
            Why it helps: It proves you can write firmware, interface peripherals, debug hardware behavior, and validate output on a real board instead of only talking theory.
          </p>
        </div>

        {/* What Makes Students Fail */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-br from-swiss-rose/30 to-swiss-rose/10 border border-swiss-rose-foreground/10 rounded-xl p-4 sm:p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-1.5 bg-white/70 rounded-md border border-swiss-rose-foreground/10 shadow-sm">
              <AlertTriangle className="w-3.5 h-3.5 text-swiss-rose-foreground" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-rose-foreground">
              What Makes Students Fail
            </h3>
          </div>
          <div className="space-y-2">
            {[
              'They know Embedded C syntax but fail Microcontrollers, so they cannot handle interrupts, registers, timers, or peripheral interfacing when interviewers push deeper.',
              'They know code but fail Embedded Systems understanding, so hardware-software integration breaks during board bring-up and feature validation.',
              'They ignore Measurements/Circuits, so when the board does not behave correctly, they cannot prove whether the fault is from power, signal path, interface timing, or firmware.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 bg-white/50 border border-swiss-rose-foreground/6 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-swiss-rose-foreground/50 mt-1.5 flex-shrink-0" />
                <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* If You Have a 2-Year Gap */}
        <div className="bg-gradient-to-br from-swiss-sand/30 to-swiss-sand/10 border border-swiss-sand-foreground/10 rounded-xl p-4 sm:p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-1.5 bg-white/70 rounded-md border border-swiss-sand-foreground/10 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-swiss-sand-foreground" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-sand-foreground">
              If You Have a 2-Year Gap
            </h3>
          </div>
          <div className="space-y-2">
            {[
              'Rebuild first: Microcontrollers, Embedded Systems, and one real board-based project with firmware + peripheral interfacing + debug logs.',
              'Interviewers still expect: clear answers on interrupts, communication protocols, register-level behavior, board bring-up logic, and real failure isolation.',
              'Proof that can reduce distrust: one working embedded project, firmware code, test/debug evidence, and certifications that match embedded role screening.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 bg-white/50 border border-swiss-sand-foreground/6 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-swiss-sand-foreground/50 mt-1.5 flex-shrink-0" />
                <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Alignment Check */}
      <section className="bg-gradient-to-br from-swiss-rose/10 via-white to-swiss-sand/10 border border-swiss-rose-foreground/10 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="p-1.5 bg-white/70 rounded-md border border-swiss-rose-foreground/10 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-swiss-rose-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Reality Alignment Check
          </h2>
        </div>

        <p className="text-[0.8125rem] sm:text-sm text-slate-600 mb-5 leading-relaxed">
          Before choosing this role, be honest:
        </p>

        <div className="space-y-2 mb-6">
          {[
            'Can you consistently handle the top 2 subjects (S1, S2)?',
            'Can you study 8–12 hours/week without external pressure?',
            'Are you comfortable doing this type of work daily?',
            'Are you okay with the actual work environment of this role?',
            'Are you choosing this role for fit, not prestige?',
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 bg-white/50 border border-swiss-rose-foreground/6 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-swiss-rose-foreground/50 mt-1.5 flex-shrink-0" />
              <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        {/* Effort Match */}
        <div className="mb-6">
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-rose-foreground mb-3">
            Effort Match
          </h3>
          <div className="space-y-2">
            {[
              'S1 and S2 are dominant subjects with very high pressure: this role punishes weak control over microcontrollers and embedded systems.',
              'Entry is not theory-only; core interview filters check firmware logic, peripheral interfacing, and debug thinking.',
              'The role needs consistent board-level work, not last-minute preparation.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 bg-swiss-rose/5 border border-swiss-rose-foreground/6 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-swiss-rose-foreground/40 mt-1.5 flex-shrink-0" />
                <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work-Style Fit */}
        <div className="mb-6">
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-rose-foreground mb-3">
            Work-Style Fit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-swiss-mint/20 to-white border border-swiss-mint-foreground/10 rounded-lg p-4">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-swiss-mint-foreground mb-3">This role suits you better if</p>
              <div className="space-y-2">
                {[
                  'You like debugging real hardware behavior, not just writing code on a screen.',
                  'You are comfortable with patient, repetitive problem-solving when boards, signals, or interfaces fail.',
                  'You prefer product/R&D lab work where firmware and electronics must work together.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-swiss-mint-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-swiss-rose/15 to-white border border-swiss-rose-foreground/10 rounded-lg p-4">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-swiss-rose-foreground mb-3">This role may not suit you if</p>
              <div className="space-y-2">
                {[
                  'You dislike low-level technical depth like registers, interrupts, and peripheral control.',
                  'You want fast visible results without repeated testing and fault isolation.',
                  'You mainly like generic software work and not board-level hardware interaction.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-swiss-rose-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Risk of Wrong Choice */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-swiss-rose-foreground mb-3">
            Risk of Wrong Choice
          </h3>
          <div className="space-y-2">
            {[
              'S1 and S2 are heavy filters, so weak subject control creates fast rejection risk.',
              'Students who choose embedded for prestige or trend usually break at firmware-debug and hardware-validation stage.',
              'Fit roles exist, but they still stay inside the same embedded cluster, so escaping weak fundamentals is hard.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 bg-swiss-rose/8 border border-swiss-rose-foreground/8 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5 text-swiss-rose-foreground mt-0.5 flex-shrink-0" />
                <p className="text-[0.8125rem] sm:text-sm text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE EMBEDDED SYSTEMS JOBS EXIST — Combined Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-swiss-sky/10 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
            Where Embedded Systems Jobs Exist
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl">
            Know the real job titles, industries, and company types where embedded engineers get hired.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-gradient-to-br from-swiss-sky via-swiss-sky/50 to-white border border-swiss-sky-foreground/10 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-1.5 bg-white/70 rounded-md border border-swiss-sky-foreground/10 shadow-sm">
                  <Briefcase className="w-3.5 h-3.5 text-swiss-sky-foreground" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
                  Job Titles
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  'Embedded Engineer',
                  'Firmware Engineer',
                  'Junior Embedded Systems Engineer',
                ].map((title, i) => (
                  <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:shadow-sm transition-all duration-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/60" />
                    <span className="text-sm text-slate-700 font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-swiss-lavender via-swiss-lavender/50 to-white border border-swiss-lavender-foreground/10 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-1.5 bg-white/70 rounded-md border border-swiss-lavender-foreground/10 shadow-sm">
                  <Tag className="w-3.5 h-3.5 text-swiss-lavender-foreground" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
                  Alternate Job Titles
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  'Firmware Engineer',
                  'Embedded Firmware Engineer',
                  'Junior Embedded Engineer',
                  'Embedded Software Engineer',
                ].map((title, i) => (
                  <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:shadow-sm transition-all duration-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/60" />
                    <span className="text-sm text-slate-700 font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-swiss-sand/40 via-white to-swiss-rose/30 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <div className="p-1.5 bg-swiss-sand rounded-md border border-swiss-sand-foreground/10 shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-swiss-sand-foreground" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
                Core Industries
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Consumer Electronics', icon: Cpu, bgClass: 'bg-swiss-sky/60 hover:bg-swiss-sky', iconBg: 'bg-white/70' },
                { name: 'Industrial Electronics', icon: Wrench, bgClass: 'bg-swiss-sage/60 hover:bg-swiss-sage', iconBg: 'bg-white/70' },
                { name: 'IoT Devices', icon: Radio, bgClass: 'bg-swiss-lavender/60 hover:bg-swiss-lavender', iconBg: 'bg-white/70' },
                { name: 'Automotive Electronics', icon: Zap, bgClass: 'bg-swiss-sand/60 hover:bg-swiss-sand', iconBg: 'bg-white/70' },
                { name: 'MedTech Devices', icon: Heart, bgClass: 'bg-swiss-rose/60 hover:bg-swiss-rose', iconBg: 'bg-white/70' },
              ].map((industry, i) => (
                <div key={i} className={`flex items-center gap-3 p-3.5 sm:p-4 ${industry.bgClass} border border-slate-200/40 rounded-lg transition-all duration-200 hover:shadow-sm`}>
                  <div className={`p-2 ${industry.iconBg} rounded-lg border border-slate-200/30 shadow-sm`}>
                    <industry.icon className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-swiss-rose via-swiss-rose/40 to-swiss-sand/30 border border-swiss-rose-foreground/10 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <div className="p-1.5 bg-white/70 rounded-md border border-swiss-rose-foreground/10 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-swiss-rose-foreground" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
                Company Types
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Embedded product companies', numColor: 'text-swiss-sky-foreground' },
                { name: 'Electronics startups', numColor: 'text-swiss-sage-foreground' },
                { name: 'Automotive electronics suppliers', numColor: 'text-swiss-sand-foreground' },
                { name: 'Industrial device manufacturers', numColor: 'text-swiss-lavender-foreground' },
                { name: 'R&D engineering firms', numColor: 'text-swiss-rose-foreground' },
              ].map((company, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 sm:p-4 bg-white/50 border border-white/60 rounded-lg hover:bg-white/80 hover:shadow-sm backdrop-blur-sm transition-all duration-200">
                  <span className={`text-[0.625rem] font-bold ${company.numColor} tracking-wider`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-slate-700 font-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workplace */}
      <section className="bg-gradient-to-br from-swiss-sage/40 via-white to-swiss-sky/30 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-swiss-sage rounded-md border border-swiss-sage-foreground/10 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-swiss-sage-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Workplace
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { place: 'Embedded Lab', bgClass: 'bg-swiss-sky/70 hover:bg-swiss-sky border-swiss-sky-foreground/10', iconColor: 'text-swiss-sky-foreground', icon: Cpu },
            { place: 'Hardware Bench', bgClass: 'bg-swiss-sage/70 hover:bg-swiss-sage border-swiss-sage-foreground/10', iconColor: 'text-swiss-sage-foreground', icon: Wrench },
            { place: 'Product R&D Office', bgClass: 'bg-swiss-lavender/70 hover:bg-swiss-lavender border-swiss-lavender-foreground/10', iconColor: 'text-swiss-lavender-foreground', icon: Building2 },
            { place: 'Prototype Testing Area', bgClass: 'bg-swiss-sand/70 hover:bg-swiss-sand border-swiss-sand-foreground/10', iconColor: 'text-swiss-sand-foreground', icon: Zap },
          ].map((item, i) => (
            <div key={i} className={`text-center p-4 sm:p-5 ${item.bgClass} border rounded-xl transition-all duration-200 hover:shadow-sm`}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-3 bg-white/70 border border-slate-200/40 rounded-lg flex items-center justify-center shadow-sm">
                <item.icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{item.place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Hiring Industries */}
      <section className="bg-gradient-to-br from-white via-swiss-sand/20 to-swiss-sage/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
          <div className="p-1.5 bg-gradient-to-br from-swiss-sand to-swiss-sand/70 rounded-md border border-swiss-sand-foreground/10 shadow-sm">
            <Factory className="w-3.5 h-3.5 text-swiss-sand-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Embedded Hiring Industries
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">

          {/* Cluster 1: Consumer Electronics – IoT */}
          {(() => {
            const cluster = {
              industry: 'Consumer Electronics',
              subindustry: 'IoT and Connected Devices',
              cluster: 'Smart Device Firmware and Edge-Controller Products',
              accentBg: 'from-swiss-sky/40 via-swiss-sky/15 to-white',
              accentBorder: 'border-swiss-sky-foreground/12',
              accentText: 'text-swiss-sky-foreground',
              dotColor: 'bg-swiss-sky-foreground/60',
              switchDifficulty: 'LOW',
              switchColor: 'bg-swiss-sage/70 text-swiss-sage-foreground',
              sections: {
                roleMatch: 'The role stays pure embedded systems work: controller firmware, peripheral integration, board bring-up, and device-level debug remain the core job.',
                jobDemand: 'This cluster has repeated India-side embedded demand because the ESDM sector is expanding and consumer/connected-device work keeps using embedded software, device controllers, and product electronics.',
                entryAccess: 'Entry remains fresher-safe because the same microcontroller, interfacing, and embedded-debug proof still works here without forcing a new subject base outside SLP.',
                roleValue: 'The role keeps strong technical identity here because product functionality depends directly on firmware-controlled hardware behavior, not generic plant support.',
                dailyWork: 'Build, flash, test, and debug controller-driven firmware for connected devices, then validate sensors, interfaces, and board behavior on working prototypes.',
              },
              whyFits: {
                subjects: 'S1, S2, S3, S5',
                skills: 'Skill 1 and Skill 2',
                output: 'Working embedded board behavior, peripheral response, and validated feature execution remain the same output family.',
              },
              certifications: [
                { name: 'NPTEL — Introduction to Internet of Things', why: 'It strengthens connected-device architecture, sensors, and embedded IoT application thinking without replacing the locked embedded core.', supports: 'Skill 1' },
                { name: 'STMicroelectronics STM32 Online Training', why: 'It sharpens MCU-board implementation and debug depth that is directly usable in connected embedded-device work.', supports: 'Skill 1 and Skill 2' },
              ],
            };
            return (
              <details className="group">
                <summary className={`flex items-center justify-between cursor-pointer p-4 sm:p-5 bg-gradient-to-br ${cluster.accentBg} ${cluster.accentBorder} border rounded-xl hover:shadow-md transition-all duration-300`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-white/70 rounded-lg border border-slate-200/40 shadow-sm">
                      <Radio className="w-4 h-4 text-swiss-sky-foreground" />
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-slate-400 mb-0.5">{cluster.industry} · {cluster.subindustry}</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-800">{cluster.cluster}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[0.625rem] sm:text-xs font-bold tracking-wider px-2.5 py-1 rounded-md ${cluster.switchColor}`}>SWITCH: {cluster.switchDifficulty}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-open:rotate-90" />
                  </div>
                </summary>
                <div className="mt-3 space-y-3 px-1 sm:px-2">
                  {/* Analysis Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { label: 'Role Match', text: cluster.sections.roleMatch },
                      { label: 'Job Demand', text: cluster.sections.jobDemand },
                      { label: 'Entry Access', text: cluster.sections.entryAccess },
                      { label: 'Role Value', text: cluster.sections.roleValue },
                    ].map((item, i) => (
                      <div key={i} className="p-3.5 sm:p-4 bg-white/50 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                        <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-swiss-sky-foreground mb-1.5">{item.label}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  {/* Daily Work */}
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-sky/30 to-white border border-swiss-sky-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-1.5">Daily Work</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cluster.sections.dailyWork}</p>
                  </div>
                  {/* Why This Cluster Fits */}
                  <div className="p-3.5 sm:p-4 bg-white/40 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2">Why This Cluster Fits</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Subjects:</span> {cluster.whyFits.subjects}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Skills:</span> {cluster.whyFits.skills}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Output:</span> {cluster.whyFits.output}</p></div>
                    </div>
                  </div>
                  {/* Industry Certifications */}
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-lavender/30 to-white border border-swiss-lavender-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-3">Industry Certifications</p>
                    <div className="space-y-2.5">
                      {cluster.certifications.map((cert, ci) => (
                        <div key={ci} className="p-3 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm">
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">{cert.name}</p>
                          <p className="text-xs text-slate-500 leading-relaxed mb-1.5">{cert.why}</p>
                          <span className="text-[0.625rem] font-medium tracking-wider uppercase text-swiss-lavender-foreground">Supports: {cert.supports}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            );
          })()}

          {/* Cluster 2: Industrial Electronics */}
          {(() => {
            const cluster = {
              industry: 'Industrial Electronics',
              subindustry: 'Industrial Automation and Machine Control',
              cluster: 'Embedded Control Boards for Automation Equipment',
              switchDifficulty: 'LOW',
              switchColor: 'bg-swiss-sage/70 text-swiss-sage-foreground',
              sections: {
                roleMatch: 'The role remains embedded systems work because the core job is still controller-side firmware, hardware interfacing, and board-level validation inside control equipment.',
                jobDemand: "This cluster is strong because India's industrial automation market is growing and automation environments repeatedly use controller boards, industrial interfacing, and embedded control logic.",
                entryAccess: 'Entry is realistic for freshers when they already have MCU firmware, digital logic, and board-debug proof; it does not force a full domain conversion outside the locked skill base.',
                roleValue: 'The role has strong long-term value because industrial control electronics usually require reliable real-time behavior, interface stability, and fault isolation rather than generic software-only output.',
                dailyWork: 'Develop or debug controller boards for machines, verify I/O and communication behavior, and isolate hardware-firmware faults that affect control-system response.',
              },
              whyFits: {
                subjects: 'S1, S2, S3, S4, S5',
                skills: 'Skill 1 and Skill 2',
                output: 'Validated controller-board operation and reliable interface behavior remain the same output family.',
              },
              certifications: [
                { name: 'Schneider Electric PLC / PAC Training', why: 'It adds industrial control context around controller behavior and machine-side automation without replacing the embedded core role logic.', supports: 'Skill 2' },
                { name: 'No Extra Certification Needed', why: 'Focus on skills and projects.', supports: '—' },
              ],
            };
            return (
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 bg-gradient-to-br from-swiss-sage/40 via-swiss-sage/15 to-white border border-swiss-sage-foreground/12 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-white/70 rounded-lg border border-slate-200/40 shadow-sm">
                      <Wrench className="w-4 h-4 text-swiss-sage-foreground" />
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-slate-400 mb-0.5">{cluster.industry} · {cluster.subindustry}</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-800">{cluster.cluster}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[0.625rem] sm:text-xs font-bold tracking-wider px-2.5 py-1 rounded-md ${cluster.switchColor}`}>SWITCH: {cluster.switchDifficulty}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-open:rotate-90" />
                  </div>
                </summary>
                <div className="mt-3 space-y-3 px-1 sm:px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { label: 'Role Match', text: cluster.sections.roleMatch },
                      { label: 'Job Demand', text: cluster.sections.jobDemand },
                      { label: 'Entry Access', text: cluster.sections.entryAccess },
                      { label: 'Role Value', text: cluster.sections.roleValue },
                    ].map((item, i) => (
                      <div key={i} className="p-3.5 sm:p-4 bg-white/50 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                        <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-swiss-sage-foreground mb-1.5">{item.label}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-sage/30 to-white border border-swiss-sage-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-1.5">Daily Work</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cluster.sections.dailyWork}</p>
                  </div>
                  <div className="p-3.5 sm:p-4 bg-white/40 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2">Why This Cluster Fits</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sage-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Subjects:</span> {cluster.whyFits.subjects}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sage-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Skills:</span> {cluster.whyFits.skills}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sage-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Output:</span> {cluster.whyFits.output}</p></div>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-lavender/30 to-white border border-swiss-lavender-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-3">Industry Certifications</p>
                    <div className="space-y-2.5">
                      {cluster.certifications.map((cert, ci) => (
                        <div key={ci} className="p-3 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm">
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">{cert.name}</p>
                          <p className="text-xs text-slate-500 leading-relaxed mb-1.5">{cert.why}</p>
                          <span className="text-[0.625rem] font-medium tracking-wider uppercase text-swiss-lavender-foreground">Supports: {cert.supports}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            );
          })()}

          {/* Cluster 3: Automotive Electronics */}
          {(() => {
            const cluster = {
              industry: 'Automotive Electronics',
              subindustry: 'ECU and Electronic Control Systems',
              cluster: 'Embedded Firmware for Vehicle Control Modules',
              switchDifficulty: 'MODERATE',
              switchColor: 'bg-swiss-sand/70 text-swiss-sand-foreground',
              sections: {
                roleMatch: 'The role remains the same embedded-systems family because the work still revolves around MCU-based control, board behavior, interfacing, and embedded validation.',
                jobDemand: "This cluster is meaningful because automotive electronics remains a growth area within India's broader electronics and component-manufacturing push, and embedded control is a stable engineering need in that stack.",
                entryAccess: 'Entry is acceptable but slightly tighter than IoT or industrial clusters; still, the same embedded-firmware and board-debug proof remains relevant without forcing a new mandatory subject family.',
                roleValue: 'The role value is strong because control modules are reliability-sensitive, hardware-linked, and technically deeper than generic support work.',
                dailyWork: 'Implement and validate firmware on controller-based automotive electronic modules, check signals and interfaces, and debug failures that block reliable control behavior.',
              },
              whyFits: {
                subjects: 'S1, S2, S3, S4',
                skills: 'Skill 1 and Skill 2',
                output: 'Working controller firmware plus validated board-level response stays the same output family.',
              },
              certifications: [
                { name: 'STMicroelectronics STM32 Online Training', why: 'Automotive controller work often benefits from stronger MCU-family depth, peripheral control, and embedded debugging discipline, which this training supports directly.', supports: 'Skill 1 and Skill 2' },
                { name: 'No Extra Certification Needed', why: 'Focus on skills and projects.', supports: '—' },
              ],
            };
            return (
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 bg-gradient-to-br from-swiss-sand/40 via-swiss-sand/15 to-white border border-swiss-sand-foreground/12 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 bg-white/70 rounded-lg border border-slate-200/40 shadow-sm">
                      <Zap className="w-4 h-4 text-swiss-sand-foreground" />
                    </div>
                    <div>
                      <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-slate-400 mb-0.5">{cluster.industry} · {cluster.subindustry}</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-800">{cluster.cluster}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[0.625rem] sm:text-xs font-bold tracking-wider px-2.5 py-1 rounded-md ${cluster.switchColor}`}>SWITCH: {cluster.switchDifficulty}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-open:rotate-90" />
                  </div>
                </summary>
                <div className="mt-3 space-y-3 px-1 sm:px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { label: 'Role Match', text: cluster.sections.roleMatch },
                      { label: 'Job Demand', text: cluster.sections.jobDemand },
                      { label: 'Entry Access', text: cluster.sections.entryAccess },
                      { label: 'Role Value', text: cluster.sections.roleValue },
                    ].map((item, i) => (
                      <div key={i} className="p-3.5 sm:p-4 bg-white/50 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                        <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-swiss-sand-foreground mb-1.5">{item.label}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-sand/30 to-white border border-swiss-sand-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-1.5">Daily Work</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cluster.sections.dailyWork}</p>
                  </div>
                  <div className="p-3.5 sm:p-4 bg-white/40 border border-slate-200/60 rounded-lg backdrop-blur-sm">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-2">Why This Cluster Fits</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sand-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Subjects:</span> {cluster.whyFits.subjects}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sand-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Skills:</span> {cluster.whyFits.skills}</p></div>
                      <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-swiss-sand-foreground/50 mt-1.5 flex-shrink-0" /><p className="text-xs sm:text-sm text-slate-600"><span className="font-medium text-slate-700">Output:</span> {cluster.whyFits.output}</p></div>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-swiss-lavender/30 to-white border border-swiss-lavender-foreground/8 rounded-lg">
                    <p className="text-[0.625rem] sm:text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-3">Industry Certifications</p>
                    <div className="space-y-2.5">
                      {cluster.certifications.map((cert, ci) => (
                        <div key={ci} className="p-3 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm">
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">{cert.name}</p>
                          <p className="text-xs text-slate-500 leading-relaxed mb-1.5">{cert.why}</p>
                          <span className="text-[0.625rem] font-medium tracking-wider uppercase text-swiss-lavender-foreground">Supports: {cert.supports}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            );
          })()}

        </div>
      </section>

      {/* Key Subjects */}
      <section className="bg-gradient-to-br from-white via-swiss-sky/20 to-swiss-lavender/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
          <div className="p-1.5 bg-swiss-sky rounded-md border border-swiss-sky-foreground/10 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-swiss-sky-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Key Subjects
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {[
            {
              name: 'Microprocessors and Microcontrollers',
              altNames: ['Microprocessors & Microcontrollers', 'Microcontroller Systems', 'Microprocessor and Microcontroller Applications'],
              whatItDoes: 'Governs controller-based computation, register-level behavior, memory mapping, and peripheral control for embedded boards.',
              studentHint: 'This is the subject where students learn 8086/8051/ARM basics, ports, timers, interrupts, and interfacing logic.',
              semester: 'Sem 4 / 5',
              semesterRange: 'Sem 3 to Sem 6',
              usedFor: 'Required for firmware bring-up on controller-based boards and peripheral-level hardware control.',
              confusionReason: 'Very commonly named and strongly recognized across ECE transcripts in India.',
              recognitionAnchor: 'canonical name + controller/interfacing function',
              studentLabel: 'Microcontrollers',
              accentBg: 'bg-swiss-sky/50',
              accentBorder: 'border-swiss-sky-foreground/12',
              accentText: 'text-swiss-sky-foreground',
              dotColor: 'bg-swiss-sky-foreground/60',
              whyMatterMost: 'This is the hardest filter because if you cannot control registers, interrupts, memory, and peripherals, board bring-up breaks immediately.',
            },
            {
              name: 'Embedded Systems',
              altNames: ['Embedded System Design', 'Embedded Systems Design', 'Embedded Controllers and Applications'],
              whatItDoes: 'Governs hardware-software integration, real-time controller behavior, embedded architecture, and product-level board functionality.',
              studentHint: 'This is the subject where students learn how software runs inside hardware products like IoT devices, control boards, and smart electronics.',
              semester: 'Sem 6 / 7',
              semesterRange: 'Sem 5 to Sem 8',
              usedFor: 'Directly required for embedded feature validation and hardware-behavior-confirmed firmware execution.',
              confusionReason: 'Highly recognizable in ECE, though naming varies slightly across universities.',
              recognitionAnchor: 'canonical name + hardware-software integration function',
              studentLabel: 'Embedded Systems',
              accentBg: 'bg-swiss-sage/50',
              accentBorder: 'border-swiss-sage-foreground/12',
              accentText: 'text-swiss-sage-foreground',
              dotColor: 'bg-swiss-sage-foreground/60',
              whyMatterMost: 'This decides whether you understand real hardware-software integration or only know isolated code concepts.',
            },
            {
              name: 'Digital Electronics',
              altNames: ['Digital Circuits', 'Digital Logic Design', 'Switching Theory and Logic Design'],
              whatItDoes: 'Governs logic gates, combinational/sequential design, timing logic, and digital behavior needed to understand controller-linked hardware operation.',
              studentHint: 'This is the subject where students learn gates, flip-flops, counters, registers, and digital logic building blocks.',
              semester: 'Sem 2 / 3',
              semesterRange: 'Sem 2 to Sem 4',
              usedFor: 'Required for understanding digital I/O behavior, board logic states, and interface-level debugging during bring-up.',
              confusionReason: 'One of the most universal and transcript-stable ECE subjects across India.',
              recognitionAnchor: 'equivalent name + gate/flip-flop logic function',
              studentLabel: 'Digital Electronics',
              accentBg: 'bg-swiss-lavender/50',
              accentBorder: 'border-swiss-lavender-foreground/12',
              accentText: 'text-swiss-lavender-foreground',
              dotColor: 'bg-swiss-lavender-foreground/60',
              whyMatterMost: 'This helps you read logic behavior, interface states, and timing flow during embedded debugging.',
            },
            {
              name: 'Electronic Circuits',
              altNames: ['Analog Electronic Circuits', 'Analog Circuits', 'Electronic Devices and Circuits'],
              whatItDoes: 'Governs transistor/op-amp-based circuit behavior, signal conditioning, power/interface stages, and practical board-level electrical understanding.',
              studentHint: 'This is the subject where students learn diodes, transistors, amplifiers, op-amps, and practical circuit behavior.',
              semester: 'Sem 3 / 4',
              semesterRange: 'Sem 2 to Sem 5',
              usedFor: 'Required for board debugging, power/interface verification, and identifying hardware-side causes during firmware-hardware bring-up.',
              confusionReason: 'Very familiar to ECE students, though exact transcript naming may shift between analog-focused variants.',
              recognitionAnchor: 'equivalent name + analog circuit behavior function',
              studentLabel: 'Analog Circuits',
              accentBg: 'bg-swiss-rose/50',
              accentBorder: 'border-swiss-rose-foreground/12',
              accentText: 'text-swiss-rose-foreground',
              dotColor: 'bg-swiss-rose-foreground/60',
              whyMatterMost: 'This helps you find board-side faults in power, analog stages, and signal-conditioning paths during bring-up.',
            },
            {
              name: 'Electronic Measurements and Instrumentation',
              altNames: ['Measurements and Instrumentation', 'Electronic Instrumentation', 'Industrial Instrumentation and Measurements'],
              whatItDoes: 'Governs measurement methods, signal observation, instrument usage, and hardware validation discipline during embedded debugging.',
              studentHint: 'This is the subject where students learn CRO/DSO, transducers, measurement errors, sensors, and instrument-based testing basics.',
              semester: 'Sem 4 / 5',
              semesterRange: 'Sem 3 to Sem 6',
              usedFor: 'Required for interface validation, signal observation, and test-log generation with confirmed hardware behavior.',
              confusionReason: 'Recognizable across Indian universities, but exact naming sometimes shifts between instrumentation-heavy and measurements-heavy versions.',
              recognitionAnchor: 'equivalent name + testing/instrument usage function',
              studentLabel: 'Measurements & Instrumentation',
              accentBg: 'bg-swiss-sand/50',
              accentBorder: 'border-swiss-sand-foreground/12',
              accentText: 'text-swiss-sand-foreground',
              dotColor: 'bg-swiss-sand-foreground/60',
              whyMatterMost: 'This helps you prove failures using real measurement evidence instead of guessing.',
            },
          ].map((subject, i) => (
            <details key={i} className={`group ${subject.accentBg} ${subject.accentBorder} border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md`}>
              <summary className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/80 border border-slate-200/50 flex items-center justify-center shadow-sm">
                  <span className={`text-[0.625rem] sm:text-xs font-bold ${subject.accentText}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">{subject.name}</h3>
                  <p className={`text-[0.625rem] sm:text-xs font-medium ${subject.accentText} mt-0.5`}>
                    Best label: {subject.studentLabel} · {subject.semester}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-90 flex-shrink-0`} />
              </summary>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3 sm:space-y-4">
                {/* Alternate Names */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {subject.altNames.map((alt, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/60 border border-white/80 rounded-md backdrop-blur-sm text-[0.625rem] sm:text-xs text-slate-600 font-medium">
                      <div className={`w-1 h-1 rounded-full ${subject.dotColor}`} />
                      {alt}
                    </span>
                  ))}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    { label: 'What It Does', value: subject.whatItDoes },
                    { label: 'Student Hint', value: subject.studentHint },
                    { label: 'Used For', value: subject.usedFor },
                    { label: 'Confusion Reason', value: subject.confusionReason },
                  ].map((info, k) => (
                    <div key={k} className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                      <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${subject.accentText} mb-1`}>
                        {info.label}
                      </p>
                      <p className="text-[0.6875rem] sm:text-xs text-slate-600 leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Semester + Recognition */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <div className="flex-1 p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${subject.accentText} mb-1`}>
                      Semester
                    </p>
                    <p className="text-[0.6875rem] sm:text-xs text-slate-600">
                      <span className="font-medium text-slate-700">{subject.semester}</span> · Varies: {subject.semesterRange}
                    </p>
                  </div>
                  <div className="flex-1 p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${subject.accentText} mb-1`}>
                      Recognition Anchor
                    </p>
                    <p className="text-[0.6875rem] sm:text-xs text-slate-600">
                      {subject.recognitionAnchor}
                    </p>
                  </div>
                </div>

                {/* Why Matter Most */}
                <div className="p-3 sm:p-3.5 bg-gradient-to-r from-swiss-rose/40 to-swiss-rose/20 border border-swiss-rose-foreground/15 rounded-lg">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[0.5625rem] sm:text-[0.625rem] font-bold tracking-[0.15em] uppercase text-swiss-rose-foreground whitespace-nowrap mt-0.5">
                      Why Matter Most
                    </span>
                    <p className="text-[0.6875rem] sm:text-xs text-slate-700 leading-relaxed font-medium">
                      {subject.whyMatterMost}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Subject Scoring */}
      <section className="bg-gradient-to-br from-white via-swiss-lavender/20 to-swiss-sky/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
          <div className="p-1.5 bg-swiss-lavender rounded-md border border-swiss-lavender-foreground/10 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-swiss-lavender-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Subject Scoring
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {[
            {
              code: 'S1',
              name: 'Microprocessors and Microcontrollers',
              score: 95,
              level: 'Dominant Subject',
              dailyUsage: 'HIGH',
              askedInInterviews: 'HIGH',
              riskIfIgnored: 'HIGH',
              breakdown: [
                { label: 'Subject Usage in Role', value: '29/30' },
                { label: 'Asked in Interview', value: '18/20' },
                { label: 'Failure Risk in Interview', value: '18/20' },
                { label: 'Role Fit', value: '15/15' },
                { label: 'Industry Use', value: '10/10' },
                { label: 'Understanding Level', value: '5/5' },
              ],
              industryChain: 'Subject → controller bring-up and peripheral interfacing → register-level programming / interrupt handling / GPIO-UART-SPI-I2C debugging → working firmware-controlled embedded board output',
              evidenceAnchor: 'Microcontrollers is the clearest interview filter for embedded roles because freshers get rejected on register/interfacing questions, and without it board bring-up and peripheral control fail immediately.',
              accentBg: 'bg-swiss-sky/50',
              accentBorder: 'border-swiss-sky-foreground/12',
              accentText: 'text-swiss-sky-foreground',
              barColor: 'bg-swiss-sky-foreground',
            },
            {
              code: 'S2',
              name: 'Embedded Systems',
              score: 91,
              level: 'Dominant Subject',
              dailyUsage: 'HIGH',
              askedInInterviews: 'HIGH',
              riskIfIgnored: 'HIGH',
              breakdown: [
                { label: 'Subject Usage in Role', value: '28/30' },
                { label: 'Asked in Interview', value: '17/20' },
                { label: 'Failure Risk in Interview', value: '17/20' },
                { label: 'Role Fit', value: '15/15' },
                { label: 'Industry Use', value: '9/10' },
                { label: 'Understanding Level', value: '5/5' },
              ],
              industryChain: 'Subject → firmware-hardware integration and real-time embedded behavior validation → embedded architecture reasoning / scheduling / interface integration / board-level debugging → stable feature execution on product hardware',
              evidenceAnchor: 'Embedded Systems is a direct role-identity subject because companies use it to test whether a fresher can connect firmware behavior to real hardware execution, not just write generic code.',
              accentBg: 'bg-swiss-sage/50',
              accentBorder: 'border-swiss-sage-foreground/12',
              accentText: 'text-swiss-sage-foreground',
              barColor: 'bg-swiss-sage-foreground',
            },
            {
              code: 'S3',
              name: 'Digital Electronics',
              score: 81,
              level: 'High-Leverage Subject',
              dailyUsage: 'HIGH',
              askedInInterviews: 'HIGH',
              riskIfIgnored: 'HIGH',
              breakdown: [
                { label: 'Subject Usage in Role', value: '24/30' },
                { label: 'Asked in Interview', value: '15/20' },
                { label: 'Failure Risk in Interview', value: '15/20' },
                { label: 'Role Fit', value: '12/15' },
                { label: 'Industry Use', value: '10/10' },
                { label: 'Understanding Level', value: '5/5' },
              ],
              industryChain: 'Subject → digital I/O state tracing and logic-level behavior debugging → timing/logic analysis / flip-flop-register-counter reasoning / interface-state checking → correct controller-linked board logic behavior',
              evidenceAnchor: 'Digital Electronics, usually remembered from Sem 2/3 as gates and flip-flops, remains a major elimination subject because embedded debugging breaks when the fresher cannot read logic states, timing flow, or register-linked behavior.',
              accentBg: 'bg-swiss-lavender/50',
              accentBorder: 'border-swiss-lavender-foreground/12',
              accentText: 'text-swiss-lavender-foreground',
              barColor: 'bg-swiss-lavender-foreground',
            },
            {
              code: 'S4',
              name: 'Electronic Circuits',
              score: 73,
              level: 'Strong Support Subject',
              dailyUsage: 'MEDIUM',
              askedInInterviews: 'MEDIUM',
              riskIfIgnored: 'HIGH',
              breakdown: [
                { label: 'Subject Usage in Role', value: '22/30' },
                { label: 'Asked in Interview', value: '13/20' },
                { label: 'Failure Risk in Interview', value: '14/20' },
                { label: 'Role Fit', value: '11/15' },
                { label: 'Industry Use', value: '9/10' },
                { label: 'Understanding Level', value: '4/5' },
              ],
              industryChain: 'Subject → power/interface stage debugging and analog signal-path checking → multimeter/oscilloscope-based board diagnosis / op-amp-transistor stage analysis → stable hardware-side behavior during firmware-hardware bring-up',
              evidenceAnchor: 'Analog Circuits becomes an early survival subject because even when interviews focus less on it than microcontrollers, board bring-up fails if the fresher cannot detect power-stage, transistor, or signal-conditioning faults.',
              accentBg: 'bg-swiss-rose/50',
              accentBorder: 'border-swiss-rose-foreground/12',
              accentText: 'text-swiss-rose-foreground',
              barColor: 'bg-swiss-rose-foreground',
            },
            {
              code: 'S5',
              name: 'Electronic Measurements and Instrumentation',
              score: 68,
              level: 'Strong Support Subject',
              dailyUsage: 'MEDIUM',
              askedInInterviews: 'MEDIUM',
              riskIfIgnored: 'HIGH',
              breakdown: [
                { label: 'Subject Usage in Role', value: '21/30' },
                { label: 'Asked in Interview', value: '11/20' },
                { label: 'Failure Risk in Interview', value: '14/20' },
                { label: 'Role Fit', value: '10/15' },
                { label: 'Industry Use', value: '8/10' },
                { label: 'Understanding Level', value: '4/5' },
              ],
              industryChain: 'Subject → signal measurement and interface validation during debugging → CRO/DSO probing / sensor-signal observation / measurement-error-aware testing → reliable debug evidence and test-log-backed hardware confirmation',
              evidenceAnchor: 'Measurements & Instrumentation is not the first fame subject students recall, but freshers fail early when they cannot use DSO/CRO-style validation to prove whether the hardware issue is real or only assumed.',
              accentBg: 'bg-swiss-sand/50',
              accentBorder: 'border-swiss-sand-foreground/12',
              accentText: 'text-swiss-sand-foreground',
              barColor: 'bg-swiss-sand-foreground',
            },
          ].map((subject, i) => (
            <details key={i} className={`group ${subject.accentBg} ${subject.accentBorder} border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md`}>
              <summary className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/80 border border-slate-200/50 flex items-center justify-center shadow-sm">
                  <span className={`text-[0.625rem] sm:text-xs font-bold ${subject.accentText}`}>
                    {subject.code}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">{subject.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-wide ${subject.accentBg} ${subject.accentText} border ${subject.accentBorder} w-fit mt-1 sm:mt-0`}>
                      {subject.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 max-w-[120px] sm:max-w-[160px] h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                      <div className={`h-full ${subject.barColor} rounded-full transition-all duration-500`} style={{ width: `${subject.score}%` }} />
                    </div>
                    <span className={`text-[0.625rem] sm:text-xs font-bold ${subject.accentText}`}>{subject.score}/100</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3 sm:space-y-4">
                {/* Score Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {subject.breakdown.map((item, k) => (
                    <div key={k} className="p-2.5 sm:p-3 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm text-center">
                      <p className={`text-[0.5rem] sm:text-[0.5625rem] font-semibold tracking-[0.12em] uppercase ${subject.accentText} mb-1`}>
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-slate-700">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Usage Indicators */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Daily Usage', value: subject.dailyUsage },
                    { label: 'Asked in Interviews', value: subject.askedInInterviews },
                    { label: 'Risk if Ignored', value: subject.riskIfIgnored },
                  ].map((tag, t) => (
                    <div key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/60 border border-white/80 rounded-lg backdrop-blur-sm">
                      <span className="text-[0.5rem] sm:text-[0.5625rem] font-medium tracking-wider uppercase text-slate-400">{tag.label}:</span>
                      <span className={`text-[0.5625rem] sm:text-[0.625rem] font-bold ${tag.value === 'HIGH' ? 'text-swiss-sage-foreground' : 'text-swiss-sand-foreground'}`}>
                        {tag.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Industry Chain */}
                <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                  <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${subject.accentText} mb-1.5`}>
                    Industry Chain
                  </p>
                  <p className="text-[0.6875rem] sm:text-xs text-slate-600 leading-relaxed">
                    {subject.industryChain}
                  </p>
                </div>

                {/* Evidence Anchor */}
                <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                  <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${subject.accentText} mb-1.5`}>
                    Evidence Anchor
                  </p>
                  <p className="text-[0.6875rem] sm:text-xs text-slate-600 leading-relaxed italic">
                    "{subject.evidenceAnchor}"
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section>
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-swiss-sky to-swiss-sky/60 flex items-center justify-center">
            <Award className="w-4 h-4 text-swiss-sky-foreground" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">Skills & Certifications</h2>
            <p className="text-[0.6875rem] sm:text-xs text-muted-foreground">Industry-aligned skills and certifications mapped to this role</p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {/* Skills */}
          {[
            {
              type: 'skill',
              name: 'Embedded C firmware development and peripheral interfacing using microcontroller IDE/debug workflow',
              whyFits: 'This is the core execution skill for writing, building, flashing, and validating controller-side firmware that makes the embedded board actually function.',
              interviewTasks: 'Write or explain GPIO/UART/SPI/I2C/interrupt logic, debug register-level behavior, and explain how firmware controls peripherals on a real MCU board.',
              bestTiming: 'Start in 2nd/3rd year after Digital Electronics; become interview-ready by 3rd year summer through board-based practice.',
              whyMatterMost: 'This is a selection filter because interviewers use it to test whether you can actually make a microcontroller board work.',
              accent: 'swiss-sage',
              accentBg: 'bg-gradient-to-br from-swiss-sage to-swiss-sage/60',
              accentBorder: 'border-swiss-sage-foreground/12',
              accentText: 'text-swiss-sage-foreground',
            },
            {
              type: 'skill',
              name: 'Board bring-up and hardware-firmware debugging using oscilloscope/logic-analyzer style validation',
              whyFits: 'Embedded freshers fail early not because they cannot code syntax, but because they cannot prove whether the problem is in power, signal, interface timing, or firmware behavior.',
              interviewTasks: 'Explain boot failure isolation, voltage/signal checking, interface-debug steps, and how to confirm whether the board or firmware is causing the fault.',
              bestTiming: 'Start in 3rd year once analog circuits and measurements are covered; strengthen through mini-projects and final-year hardware debugging.',
              whyMatterMost: 'This is a selection filter because freshers get rejected when they cannot isolate whether the failure is in firmware, signal timing, interface, or hardware.',
              accent: 'swiss-sand',
              accentBg: 'bg-gradient-to-br from-swiss-sand to-swiss-sand/60',
              accentBorder: 'border-swiss-sand-foreground/12',
              accentText: 'text-swiss-sand-foreground',
            },
          ].map((skill, i) => (
            <details key={`skill-${i}`} className={`group rounded-xl border ${skill.accentBorder} ${skill.accentBg} shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300`}>
              <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Target className={`w-4 h-4 sm:w-5 sm:h-5 ${skill.accentText}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${skill.accentText}`}>Skill {i + 1}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">{skill.name}</h3>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                  <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${skill.accentText} mb-1.5`}>Why It Fits</p>
                  <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{skill.whyFits}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${skill.accentText} mb-1.5`}>Interview Tasks</p>
                    <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{skill.interviewTasks}</p>
                  </div>
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${skill.accentText} mb-1.5`}>Best Timing</p>
                    <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{skill.bestTiming}</p>
                  </div>
                </div>

                {/* WHY MATTER MOST */}
                <div className="p-3 sm:p-3.5 bg-gradient-to-r from-swiss-rose/40 to-swiss-rose/20 border border-swiss-rose-foreground/12 rounded-lg">
                  <p className="text-[0.5625rem] sm:text-[0.625rem] font-bold tracking-[0.15em] uppercase text-swiss-rose-foreground mb-1.5">WHY MATTER MOST</p>
                  <p className="text-[0.6875rem] sm:text-xs font-medium text-swiss-rose-foreground/90 leading-relaxed">{skill.whyMatterMost}</p>
                </div>
              </div>
            </details>
          ))}

          {/* Certifications */}
          {[
            {
              name: 'Embedded Systems Essentials with Arm Professional Certificate',
              whyFits: 'It directly strengthens firmware development, microcontroller architecture understanding, and real embedded design/programming workflow for Arm-based systems.',
              supports: 'Skill 1',
              bestTiming: 'Best after basic C and microcontroller fundamentals, ideally during 3rd year or summer break.',
              whyMatterMost: 'Good because it directly strengthens firmware logic, controller understanding, and embedded design workflow.',
              accent: 'swiss-sky',
              accentBg: 'bg-gradient-to-br from-swiss-sky to-swiss-sky/60',
              accentBorder: 'border-swiss-sky-foreground/12',
              accentText: 'text-swiss-sky-foreground',
            },
            {
              name: 'NPTEL — Embedded System Design with ARM',
              whyFits: 'It is India-relevant, directly tied to embedded system design concepts, ARM-based microcontroller work, and hardware-software interaction that supports both firmware execution and embedded debugging.',
              supports: 'Skill 2',
              bestTiming: 'Best in 3rd year or during a structured gap-recovery cycle after basic embedded/system fundamentals are already in place.',
              whyMatterMost: 'Good because it strengthens embedded system behavior, ARM-side understanding, and hardware-software interaction.',
              accent: 'swiss-lavender',
              accentBg: 'bg-gradient-to-br from-swiss-lavender to-swiss-lavender/60',
              accentBorder: 'border-swiss-lavender-foreground/12',
              accentText: 'text-swiss-lavender-foreground',
            },
          ].map((cert, i) => (
            <details key={`cert-${i}`} className={`group rounded-xl border ${cert.accentBorder} ${cert.accentBg} shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300`}>
              <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Award className={`w-4 h-4 sm:w-5 sm:h-5 ${cert.accentText}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${cert.accentText}`}>Certification</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">{cert.name}</h3>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                  <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${cert.accentText} mb-1.5`}>Why It Fits</p>
                  <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{cert.whyFits}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${cert.accentText} mb-1.5`}>Supports</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-[0.625rem] sm:text-xs font-medium bg-white/70 border border-white/80 text-foreground">
                      {cert.supports}
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${cert.accentText} mb-1.5`}>Best Timing</p>
                    <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{cert.bestTiming}</p>
                  </div>
                </div>

                {/* WHY MATTER MOST */}
                <div className="p-3 sm:p-3.5 bg-gradient-to-r from-swiss-rose/40 to-swiss-rose/20 border border-swiss-rose-foreground/12 rounded-lg">
                  <p className="text-[0.5625rem] sm:text-[0.625rem] font-bold tracking-[0.15em] uppercase text-swiss-rose-foreground mb-1.5">WHY MATTER MOST</p>
                  <p className="text-[0.6875rem] sm:text-xs font-medium text-swiss-rose-foreground/90 leading-relaxed">{cert.whyMatterMost}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Roles Section */}
      <section>
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-swiss-lavender to-swiss-lavender/60 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-swiss-lavender-foreground" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">Related Roles</h2>
            <p className="text-[0.6875rem] sm:text-xs text-muted-foreground">Roles sharing the same subject foundation and work layer</p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {[
            {
              role: 'Firmware Engineer',
              altTitles: ['Embedded Firmware Engineer', 'MCU Firmware Engineer'],
              match: 93,
              subjects: ['Microprocessors and Microcontrollers', 'Embedded Systems', 'Digital Electronics', 'Electronic Circuits', 'Electronic Measurements and Instrumentation'],
              sameLevel: 'Same controller-level embedded board layer where firmware directly drives hardware behavior.',
              sameWork: 'Same working output logic of board bring-up, peripheral response, and validated embedded feature execution.',
              whyNearestFitRole: 'Reachable because it reuses all 5 locked subjects and keeps the same controller-level board output logic.',
              accent: 'swiss-sky',
              accentBg: 'bg-gradient-to-br from-swiss-sky to-swiss-sky/60',
              accentBorder: 'border-swiss-sky-foreground/12',
              accentText: 'text-swiss-sky-foreground',
              accentRing: 'ring-swiss-sky-foreground/20',
            },
            {
              role: 'Embedded Validation Engineer',
              altTitles: ['Embedded Test Engineer', 'Firmware Validation Engineer'],
              match: 89,
              subjects: ['Embedded Systems', 'Microprocessors and Microcontrollers', 'Digital Electronics', 'Electronic Measurements and Instrumentation'],
              sameLevel: 'Same embedded product layer where firmware behavior must be tested against actual board-level response.',
              sameWork: 'Same validation outcome of proving whether the embedded board/system works correctly under test conditions.',
              whyNearestFitRole: 'Reachable because it reuses embedded, microcontroller, digital, and measurement logic to test whether the board/system works correctly.',
              accent: 'swiss-sage',
              accentBg: 'bg-gradient-to-br from-swiss-sage to-swiss-sage/60',
              accentBorder: 'border-swiss-sage-foreground/12',
              accentText: 'text-swiss-sage-foreground',
              accentRing: 'ring-swiss-sage-foreground/20',
            },
            {
              role: 'Board Bring-Up Engineer',
              altTitles: ['Hardware Bring-Up Engineer', 'Embedded Hardware Debug Engineer'],
              match: 85,
              subjects: ['Microprocessors and Microcontrollers', 'Embedded Systems', 'Electronic Circuits', 'Electronic Measurements and Instrumentation'],
              sameLevel: 'Same prototype-board and controller-interface layer where first-time hardware activation and debug happen.',
              sameWork: 'Same output family of boot-ready boards, interface verification, and fault-isolated bring-up evidence.',
              whyNearestFitRole: 'Reachable because it reuses microcontrollers, embedded systems, circuits, and measurements for first-time board activation and fault isolation.',
              accent: 'swiss-sand',
              accentBg: 'bg-gradient-to-br from-swiss-sand to-swiss-sand/60',
              accentBorder: 'border-swiss-sand-foreground/12',
              accentText: 'text-swiss-sand-foreground',
              accentRing: 'ring-swiss-sand-foreground/20',
            },
            {
              role: 'IoT Systems Engineer',
              altTitles: ['IoT Embedded Engineer', 'Connected Device Engineer'],
              match: 78,
              subjects: ['Embedded Systems', 'Microprocessors and Microcontrollers', 'Digital Electronics'],
              sameLevel: 'Same embedded device layer, but extended toward connected product behavior and smart-device integration.',
              sameWork: 'Same system-output logic of firmware-controlled hardware functioning correctly on embedded device platforms.',
              whyNearestFitRole: 'Reachable because it still uses embedded systems, microcontrollers, and digital electronics for firmware-controlled smart-device behavior.',
              accent: 'swiss-rose',
              accentBg: 'bg-gradient-to-br from-swiss-rose to-swiss-rose/60',
              accentBorder: 'border-swiss-rose-foreground/12',
              accentText: 'text-swiss-rose-foreground',
              accentRing: 'ring-swiss-rose-foreground/20',
            },
          ].map((item, i) => (
            <details key={i} className={`group rounded-xl border ${item.accentBorder} ${item.accentBg} shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300`}>
              <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span className={`text-sm sm:text-base font-bold ${item.accentText}`}>{item.match}%</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight">{item.role}</h3>
                    <p className="text-[0.625rem] sm:text-xs text-muted-foreground mt-0.5 truncate">
                      {item.altTitles.join(' · ')}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3 sm:space-y-4">
                {/* Match Bar */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${item.accentText}`}>Match Score</span>
                    <span className="text-xs font-bold text-foreground">{item.match}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/60 overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500`} style={{ width: `${item.match}%` }} />
                  </div>
                </div>

                {/* Sharing Subjects */}
                <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                  <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${item.accentText} mb-2`}>Sharing Subjects</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.subjects.map((s, j) => (
                      <span key={j} className={`inline-flex items-center px-2 py-1 rounded-md text-[0.625rem] sm:text-xs font-medium bg-white/70 border border-white/80 text-foreground`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Same Level & Same Work */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${item.accentText} mb-1.5`}>Same Level</p>
                    <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{item.sameLevel}</p>
                  </div>
                  <div className="p-3 sm:p-3.5 bg-white/50 border border-white/70 rounded-lg backdrop-blur-sm">
                    <p className={`text-[0.5625rem] sm:text-[0.625rem] font-semibold tracking-[0.15em] uppercase ${item.accentText} mb-1.5`}>Same Work</p>
                    <p className="text-[0.6875rem] sm:text-xs text-muted-foreground leading-relaxed">{item.sameWork}</p>
                  </div>
                </div>

                {/* WHY NEAREST FIT ROLE */}
                <div className="p-3 sm:p-3.5 bg-gradient-to-r from-swiss-rose/40 to-swiss-rose/20 border border-swiss-rose-foreground/15 rounded-lg">
                  <div className="flex items-start gap-2.5">
                    <p className="text-[0.5625rem] sm:text-[0.625rem] font-bold tracking-[0.15em] uppercase text-swiss-rose-foreground whitespace-nowrap mt-0.5">WHY NEAREST FIT ROLE</p>
                    <p className="text-[0.6875rem] sm:text-xs font-medium text-swiss-rose-foreground/90 leading-relaxed">{item.whyNearestFitRole}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
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

      {/* Why Embedded Systems Won't Disappear */}
      <section className="bg-gradient-to-br from-swiss-blue/5 via-swiss-sand/30 to-swiss-green/5 border border-swiss-border rounded-2xl p-5 sm:p-7 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-swiss-charcoal tracking-tight">
            Why Embedded Systems Jobs Won't Disappear
          </h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Core Explanation */}
          <div className="bg-white/60 backdrop-blur-sm border border-swiss-border/60 rounded-xl p-4 sm:p-6">
            <p className="text-sm sm:text-base text-swiss-charcoal/85 leading-relaxed mb-4">
              Embedded systems run real devices — cars, medical machines, mobiles, satellites, factories.
              These things must work in the real world, not just on screen.
            </p>
            <p className="text-sm sm:text-base text-swiss-charcoal/80 mb-3 font-medium">
              So companies always need people who can:
            </p>
            <ul className="space-y-2.5 ml-1">
              {[
                "Connect software with hardware",
                "Debug real signals and devices",
                "Fix problems in physical systems"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-swiss-green flex-shrink-0" />
                  <span className="text-sm sm:text-base text-swiss-charcoal/80">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-swiss-charcoal font-semibold mt-4">
              This work is hard to replace and hard to automate.
            </p>
          </div>

          {/* Why Important Today */}
          <div className="bg-white/60 backdrop-blur-sm border border-swiss-border/60 rounded-xl p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-bold text-swiss-charcoal mb-3">
              Why Embedded Systems Is Important Today
            </h4>
            <p className="text-sm sm:text-base text-swiss-charcoal/80 mb-3">
              Every smart product depends on embedded systems:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                { label: "EV Vehicles", icon: "⚡" },
                { label: "IoT Devices", icon: "📡" },
                { label: "Healthcare Machines", icon: "🏥" },
                { label: "Telecom Systems", icon: "📶" }
              ].map((item, i) => (
                <div key={i} className="bg-swiss-sand/40 border border-swiss-border/40 rounded-lg p-3 text-center">
                  <span className="text-xs sm:text-sm font-medium text-swiss-charcoal/80">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-swiss-charcoal font-semibold mt-4">
              Without embedded engineers, these products cannot work.
            </p>
          </div>

          {/* One Line */}
          <div className="bg-gradient-to-r from-swiss-charcoal to-swiss-charcoal/90 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-sm sm:text-base md:text-lg text-red-400 font-medium italic">
              "Apps can stop and restart. Machines cannot. That's why embedded engineers are always needed."
            </p>
          </div>
        </div>
      </section>

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

    </div>
  );
};

export { ECEEmbeddedSystems };
export default ECEEmbeddedSystems;
