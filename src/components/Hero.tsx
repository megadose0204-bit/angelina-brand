/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { SmartImage } from './SmartImage.tsx';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#234B3C] tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 text-balance">
              {t.hero.headline}
            </h1>

            {/* Intro Copy */}
            <p className="text-base sm:text-lg text-[#4A443A] leading-relaxed sm:leading-loose mb-8 max-w-xl">
              {t.hero.intro}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('#dreams')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#234B3C] hover:bg-[#1B3C30] text-[#FFF9F0] text-sm sm:text-base font-semibold rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                <span>{t.hero.primaryCta}</span>
                <Sparkles className="w-4 h-4 text-[#E58B72]" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#action')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF4EC] text-[#234B3C] border border-[#E4D5C2] text-sm sm:text-base font-semibold rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#C5A15A]" />
              </button>
            </div>

            {/* Editorial Highlight Strip */}
            <div className="mt-10 pt-6 border-t border-[#EBDCCB] w-full flex items-center gap-6 text-xs text-[#736B5E]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E58B72]" />
                <span className="font-medium text-[#234B3C]">Life & Content</span>
              </div>
              <span className="text-[#D3C3B1]">·</span>
              <span>Senior Digital Mentor</span>
              <span className="text-[#D3C3B1]">·</span>
              <span>Couple Travel Future</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm background glow */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-[#E58B72]/15 via-[#C5A15A]/15 to-[#234B3C]/10 rounded-3xl filter blur-xl opacity-70 -z-10"
                aria-hidden="true"
              />

              {/* Main Image Frame with generous framing and protective aspect ratio */}
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-[#E9DFD0]">
                <SmartImage
                  src="/images/01-dream.png"
                  alt="꿈을 적는 시간 - 미래를 향한 계획을 기록하는 모습 (01-dream.png)"
                  title="꿈을 적는 시간"
                  priority={true}
                  objectPosition="center 35%"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl"
                  aiBadge={false}
                />
              </div>

              {/* Ambient quote label */}
              <div className="mt-3 px-3 flex items-center justify-between text-xs text-[#8C8275]">
                <span>01-dream.png</span>
                <span className="font-medium text-[#A67C52]">{t.hero.aiImageBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
