
import React from 'react';
import { Cpu, Shield, TrendingUp, Briefcase, MapPin, Building2, Wrench, Tag, AlertTriangle, ChevronRight, Zap, Radio, Heart, BookOpen, ChevronDown } from 'lucide-react';

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
