
import React from 'react';
import { Cpu, Shield, TrendingUp, Briefcase, MapPin, Building2, Wrench, Tag, AlertTriangle, ChevronRight, Zap, Radio, Heart, BookOpen } from 'lucide-react';

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

      {/* Job Titles + Alternate Titles - Two Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Job Titles */}
        <section className="bg-gradient-to-br from-swiss-sky via-swiss-sky/50 to-white border border-swiss-sky-foreground/10 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-1.5 bg-white/70 rounded-md border border-swiss-sky-foreground/10 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-swiss-sky-foreground" />
            </div>
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
              Job Titles
            </h2>
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
        </section>

        {/* Alternate Titles */}
        <section className="bg-gradient-to-br from-swiss-lavender via-swiss-lavender/50 to-white border border-swiss-lavender-foreground/10 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-1.5 bg-white/70 rounded-md border border-swiss-lavender-foreground/10 shadow-sm">
              <Tag className="w-3.5 h-3.5 text-swiss-lavender-foreground" />
            </div>
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
              Alternate Job Titles
            </h2>
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
        </section>
      </div>

      {/* Core Industries */}
      <section className="bg-gradient-to-br from-swiss-sand/40 via-white to-swiss-rose/30 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-swiss-sand rounded-md border border-swiss-sand-foreground/10 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-swiss-sand-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Core Industries
          </h2>
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
      </section>

      {/* Company Types */}
      <section className="bg-gradient-to-br from-swiss-rose via-swiss-rose/40 to-swiss-sand/30 border border-swiss-rose-foreground/10 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-white/70 rounded-md border border-swiss-rose-foreground/10 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-swiss-rose-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Company Types
          </h2>
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

export { ECEEmbeddedSystems };
export default ECEEmbeddedSystems;
