/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { SmartImage } from './SmartImage.tsx';

export const ThreeDreams: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="dreams" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
            <span>{t.dreams.tag}</span>
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight mb-4 text-balance">
            {t.dreams.title}
          </h2>

          <p className="text-base text-[#6B6357] leading-relaxed mb-6">
            {t.dreams.subtitle}
          </p>

          {/* AI Vision Clarification Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF4EC] border border-[#E9DFD0] rounded-xl text-xs text-[#736B5E]">
            <Info className="w-4 h-4 text-[#E58B72] shrink-0" />
            <span>{t.dreams.aiBadge}</span>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.dreams.cards.map((card, index) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl border border-[#E9DFD0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-[#F7F2EB] overflow-hidden">
                <SmartImage
                  src={card.image}
                  alt={card.imageAlt}
                  title={card.title}
                  objectPosition="top center"
                  className="w-full h-full group-hover:scale-103 transition-transform duration-500"
                  aiBadge={false}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#234B3C] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#EAD9C3]/80 shadow-2xs">
                  0{index + 1} · {card.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#234B3C] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4A443A] leading-relaxed">
                    {card.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2E8DC] flex items-center justify-between text-[11px] text-[#8C8275]">
                  <span>5-Year Goal</span>
                  <span className="flex items-center gap-1 text-[#A67C52] font-medium">
                    <Sparkles className="w-3 h-3 text-[#E58B72]" />
                    {t.hero.aiImageBadge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
