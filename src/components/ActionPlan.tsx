/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Share2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const ActionPlan: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Target key="target" className="w-5 h-5 text-[#234B3C]" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-[#E58B72]" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#C5A15A]" />,
    <Share2 key="share" className="w-5 h-5 text-[#234B3C]" />,
    <TrendingUp key="trending" className="w-5 h-5 text-[#E58B72]" />,
  ];

  return (
    <section id="action" className="py-20 sm:py-28 bg-[#FAF5EE] border-t border-[#EFE5D7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
            <span>{t.action.tag}</span>
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight mb-4 text-balance">
            {t.action.title}
          </h2>

          {/* Clarity notice ensuring no confusion with past achievements */}
          <p className="text-xs sm:text-sm text-[#736B5E] bg-[#FFF9F0] px-4 py-2.5 rounded-xl border border-[#E9DFD0]">
            {t.action.notice}
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.action.steps.map((step, idx) => (
            <div
              key={step.number}
              className={`p-6 sm:p-7 bg-white rounded-2xl border border-[#E9DFD0] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center border border-[#EFE5D7]">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-2xl font-bold font-mono text-[#D6C4B0]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#234B3C] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-[#4A443A] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F4EDE2] flex items-center justify-between text-xs text-[#8C8275]">
                <span className="font-medium text-[#A67C52]">Daily Practice</span>
                <span>Habit 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
