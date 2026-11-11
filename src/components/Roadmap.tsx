/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
            <span>{t.roadmap.tag}</span>
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight mb-4 text-balance">
            {t.roadmap.title}
          </h2>

          <p className="text-base text-[#6B6357] leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#E5D7C5] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {t.roadmap.years.map((item, idx) => (
            <div key={item.yearLabel} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FFF9F0] border-2 border-[#234B3C] flex items-center justify-center group-hover:scale-110 group-hover:border-[#E58B72] transition-all">
                <div className="w-2 h-2 rounded-full bg-[#234B3C] group-hover:bg-[#E58B72] transition-colors" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 bg-white rounded-2xl border border-[#E9DFD0] shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E58B72] font-mono">
                    {item.yearLabel}
                  </span>
                  <span className="text-[#D3C3B1]">·</span>
                  <h3 className="text-lg font-bold text-[#234B3C]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#4A443A] leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F4EDE2] flex items-center justify-between text-[11px] text-[#8C8275]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A15A]" />
                    <span>Step 0{idx + 1} of 05</span>
                  </span>
                  <span>Future Roadmap</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Adaptive Notice */}
        <div className="mt-14 p-5 bg-[#FAF4EC] rounded-2xl border border-[#E8DCCB] flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#736B5E] max-w-2xl mx-auto">
          <Compass className="w-5 h-5 text-[#234B3C] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            {t.roadmap.notice}
          </p>
        </div>
      </div>
    </section>
  );
};
