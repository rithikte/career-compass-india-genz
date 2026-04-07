
import React from 'react';
import { Cpu, Shield, TrendingUp, Briefcase, MapPin, Building2, Wrench, Tag, AlertTriangle, ChevronRight, Zap, Radio, Heart } from 'lucide-react';

const ECEEmbeddedSystems = () => {
  return (
    <div className="space-y-8 sm:space-y-12">

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(210_32%_97%)] via-white to-[hsl(262_26%_97%)] border border-slate-200/80 p-6 sm:p-10 lg:p-14">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(210_32%_94%)] rounded-full -translate-y-36 translate-x-36 opacity-40 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[hsl(262_26%_94%)] rounded-full translate-y-28 -translate-x-28 opacity-30 blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[hsl(152_24%_94%)] rounded-full opacity-25 blur-xl" />
        
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
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-swiss-sky/60 border border-[hsl(210_28%_85%)] rounded-lg backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-swiss-sky-foreground" />
            <span className="text-xs sm:text-sm text-swiss-sky-foreground font-medium">Product Engineering · Embedded R&D · Device Development</span>
          </div>
        </div>
      </section>

      {/* Market Indicators - Swiss Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {[
          { label: 'AI Impact Exposure', value: 'LOW', bg: 'bg-swiss-sage', border: 'border-[hsl(152_22%_85%)]', color: 'text-swiss-sage-foreground' },
          { label: 'Market Entry Reality', value: 'STRONG', bg: 'bg-swiss-sky', border: 'border-[hsl(210_28%_85%)]', color: 'text-swiss-sky-foreground' },
          { label: 'Compensation Reality', value: 'STRONG', bg: 'bg-swiss-lavender', border: 'border-[hsl(262_22%_86%)]', color: 'text-swiss-lavender-foreground' },
          { label: '5-Year Growth', value: 'STRONG', bg: 'bg-swiss-sage', border: 'border-[hsl(152_22%_85%)]', color: 'text-swiss-sage-foreground' },
          { label: 'Oversupply Risk', value: 'MODERATE', bg: 'bg-swiss-sand', border: 'border-[hsl(38_24%_84%)]', color: 'text-swiss-sand-foreground' },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.bg} ${item.border} border rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-sm ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
          >
            <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-slate-400 mb-2 sm:mb-3">
              {item.label}
            </p>
            <p className={`text-base sm:text-lg font-bold ${item.color} tracking-wide`}>
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* AI Impact Reason */}
      <section className="bg-gradient-to-r from-swiss-sage/50 to-swiss-sage/20 border border-[hsl(152_22%_85%)] rounded-xl p-5 sm:p-7">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="mt-0.5 p-2.5 bg-white/80 rounded-lg border border-[hsl(152_22%_85%)] shadow-sm">
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
      <section className="bg-white border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5 sm:mb-6">
          Daily Work
        </h2>
        <div className="space-y-3.5">
          {[
            { task: 'Firmware bring-up on controller-based boards', accent: 'swiss-sky' },
            { task: 'Peripheral interface validation and debugging', accent: 'swiss-lavender' },
            { task: 'Embedded feature test logs with hardware behavior confirmation', accent: 'swiss-sage' },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-lg bg-${item.accent}/40 border border-${item.accent}/60 transition-all duration-200 hover:bg-${item.accent}/60`}>
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/90 border border-slate-200/60 flex items-center justify-center shadow-sm">
                <span className="text-[0.625rem] sm:text-xs font-bold text-slate-400">
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
        <section className="bg-gradient-to-br from-swiss-sky/30 to-white border border-[hsl(210_28%_85%)]/60 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-1.5 bg-swiss-sky rounded-md">
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
              <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-white/70 border border-slate-100/80 rounded-lg backdrop-blur-sm hover:bg-white transition-colors duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-swiss-sky-foreground/50" />
                <span className="text-sm text-slate-700 font-medium">{title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Alternate Titles */}
        <section className="bg-gradient-to-br from-swiss-lavender/30 to-white border border-[hsl(262_22%_86%)]/60 rounded-xl p-5 sm:p-7 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-1.5 bg-swiss-lavender rounded-md">
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
              <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-white/70 border border-slate-100/80 rounded-lg backdrop-blur-sm hover:bg-white transition-colors duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-swiss-lavender-foreground/50" />
                <span className="text-sm text-slate-700 font-medium">{title}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Core Industries */}
      <section className="bg-white border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-swiss-sand rounded-md">
            <TrendingUp className="w-3.5 h-3.5 text-swiss-sand-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Core Industries
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: 'Consumer Electronics', icon: Cpu, accent: 'bg-swiss-sky' },
            { name: 'Industrial Electronics', icon: Wrench, accent: 'bg-swiss-sage' },
            { name: 'IoT Devices', icon: Radio, accent: 'bg-swiss-lavender' },
            { name: 'Automotive Electronics', icon: Zap, accent: 'bg-swiss-sand' },
            { name: 'MedTech Devices', icon: Heart, accent: 'bg-swiss-rose' },
          ].map((industry, i) => (
            <div key={i} className={`flex items-center gap-3 p-3.5 sm:p-4 ${industry.accent}/40 border border-slate-100/80 rounded-lg hover:${industry.accent}/70 transition-all duration-200`}>
              <div className={`p-2 ${industry.accent}/80 rounded-lg`}>
                <industry.icon className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <span className="text-sm text-slate-700 font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Types */}
      <section className="bg-gradient-to-br from-swiss-sand/30 via-white to-swiss-rose/20 border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-swiss-rose rounded-md">
            <Building2 className="w-3.5 h-3.5 text-swiss-rose-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Company Types
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Embedded product companies', accent: 'swiss-sky' },
            { name: 'Electronics startups', accent: 'swiss-sage' },
            { name: 'Automotive electronics suppliers', accent: 'swiss-sand' },
            { name: 'Industrial device manufacturers', accent: 'swiss-lavender' },
            { name: 'R&D engineering firms', accent: 'swiss-rose' },
          ].map((company, i) => (
            <div key={i} className={`flex items-center gap-3 p-3.5 sm:p-4 bg-white/60 border border-slate-100/80 rounded-lg hover:bg-${company.accent}/30 transition-all duration-200`}>
              <span className={`text-[0.625rem] font-bold text-${company.accent}-foreground/60 tracking-wider`}>{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm text-slate-700 font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Workplace */}
      <section className="bg-white border border-slate-200/80 rounded-xl p-5 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <div className="p-1.5 bg-swiss-sage rounded-md">
            <MapPin className="w-3.5 h-3.5 text-swiss-sage-foreground" />
          </div>
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
            Workplace
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { place: 'Embedded Lab', accent: 'swiss-sky', icon: Cpu },
            { place: 'Hardware Bench', accent: 'swiss-sage', icon: Wrench },
            { place: 'Product R&D Office', accent: 'swiss-lavender', icon: Building2 },
            { place: 'Prototype Testing Area', accent: 'swiss-sand', icon: Zap },
          ].map((item, i) => (
            <div key={i} className={`text-center p-4 sm:p-5 bg-${item.accent}/50 border border-${item.accent}/70 rounded-xl hover:bg-${item.accent} transition-all duration-200`}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-3 bg-white/80 border border-slate-200/60 rounded-lg flex items-center justify-center shadow-sm">
                <item.icon className={`w-4 h-4 text-${item.accent}-foreground`} />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{item.place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-swiss-sand/50 border border-[hsl(38_24%_84%)]/60 rounded-xl p-4 sm:p-5">
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
