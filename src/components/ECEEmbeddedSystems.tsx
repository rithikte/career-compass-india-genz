
import React from 'react';
import { Cpu, Shield, TrendingUp, Briefcase, MapPin, Building2, Wrench, Users, Tag, AlertTriangle, ChevronRight } from 'lucide-react';

const ECEEmbeddedSystems = () => {
  return (
    <div className="space-y-8 sm:space-y-12">

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-14">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-32 translate-x-32 opacity-60" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-50/80 rounded-full translate-y-24 -translate-x-24 opacity-40" />
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[0.6875rem] sm:text-xs tracking-widest uppercase text-slate-400 font-medium mb-6 sm:mb-8">
            <span>Degree</span>
            <ChevronRight className="w-3 h-3" />
            <span>ECE</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">Embedded Systems</span>
          </div>

          {/* Title Block */}
          <div className="max-w-3xl">
            <p className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
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
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs sm:text-sm text-slate-600 font-medium">Product Engineering · Embedded R&D · Device Development</span>
          </div>
        </div>
      </section>

      {/* Market Indicators - Swiss Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {[
          { label: 'AI Impact Exposure', value: 'LOW', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { label: 'Market Entry Reality', value: 'STRONG', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { label: 'Compensation Reality', value: 'STRONG', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { label: '5-Year Growth', value: 'STRONG', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { label: 'Oversupply Risk', value: 'MODERATE', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.bg} ${item.border} border rounded-xl p-4 sm:p-5 ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
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
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="mt-0.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
            <Shield className="w-4 h-4 text-slate-500" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide uppercase mb-1.5">
              AI Impact Reason
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Core work depends on firmware-hardware bring-up, debugging, peripheral interfacing, and bench validation.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Work */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8">
        <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5 sm:mb-6">
          Daily Work
        </h2>
        <div className="space-y-4">
          {[
            'Firmware bring-up on controller-based boards',
            'Peripheral interface validation and debugging',
            'Embedded feature test logs with hardware behavior confirmation',
          ].map((task, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                <span className="text-[0.625rem] sm:text-xs font-bold text-slate-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                {task}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Titles + Alternate Titles - Two Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Job Titles */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7">
          <div className="flex items-center gap-2.5 mb-5">
            <Briefcase className="w-4 h-4 text-slate-400" />
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400">
              Job Titles
            </h2>
          </div>
          <div className="space-y-2.5">
            {[
              'Embedded Engineer',
              'Firmware Engineer',
              'Junior Embedded Systems Engineer',
            ].map((title, i) => (
              <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-slate-50/70 border border-slate-100 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-sm text-slate-700 font-medium">{title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Alternate Titles */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7">
          <div className="flex items-center gap-2.5 mb-5">
            <Tag className="w-4 h-4 text-slate-400" />
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400">
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
              <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 bg-slate-50/70 border border-slate-100 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-sm text-slate-700 font-medium">{title}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Core Industries */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <TrendingUp className="w-4 h-4 text-slate-400" />
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400">
            Core Industries
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: 'Consumer Electronics', icon: Cpu },
            { name: 'Industrial Electronics', icon: Wrench },
            { name: 'IoT Devices', icon: Cpu },
            { name: 'Automotive Electronics', icon: Wrench },
            { name: 'MedTech Devices', icon: Shield },
          ].map((industry, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 sm:p-4 bg-slate-50/60 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="p-1.5 bg-white border border-slate-200 rounded-md">
                <industry.icon className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <span className="text-sm text-slate-700 font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Types */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <Building2 className="w-4 h-4 text-slate-400" />
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400">
            Company Types
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Embedded product companies',
            'Electronics startups',
            'Automotive electronics suppliers',
            'Industrial device manufacturers',
            'R&D engineering firms',
          ].map((company, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 sm:p-4 bg-slate-50/60 border border-slate-100 rounded-lg">
              <span className="text-[0.625rem] font-bold text-slate-300 tracking-wider">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm text-slate-700 font-medium">{company}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Workplace */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8">
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <MapPin className="w-4 h-4 text-slate-400" />
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-slate-400">
            Workplace
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            'Embedded Lab',
            'Hardware Bench',
            'Product R&D Office',
            'Prototype Testing Area',
          ].map((place, i) => (
            <div key={i} className="text-center p-4 sm:p-5 bg-slate-50/60 border border-slate-100 rounded-xl">
              <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto mb-3 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
          <p className="text-[0.6875rem] sm:text-xs text-slate-400 leading-relaxed">
            Career paths shown are patterns, not guarantees. Outcomes depend on company, skills, performance, location, and market conditions.
          </p>
        </div>
      </section>

    </div>
  );
};

export { ECEEmbeddedSystems };
export default ECEEmbeddedSystems;
