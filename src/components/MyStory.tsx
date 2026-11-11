/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Compass, BookOpenCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { SmartImage } from './SmartImage.tsx';

export const MyStory: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = [
    <Compass key="compass" className="w-5 h-5 text-[#E58B72]" />,
    <BookOpenCheck key="book" className="w-5 h-5 text-[#C5A15A]" />,
    <Heart key="heart" className="w-5 h-5 text-[#234B3C]" />,
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF5EE] border-y border-[#EFE5D7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Container (04-learning.png) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-[#E9DFD0]">
                <SmartImage
                  src="/images/04-learning.png"
                  alt={t.gallery.items[3]?.alt || '새로운 도구를 익히는 과정 (04-learning.png)'}
                  title={t.gallery.items[3]?.title}
                  objectPosition="center 35%"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl"
                  aiBadge={true}
                />
              </div>

              {/* Caption */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#8C8275]">
                <span>04-learning.png</span>
                <span className="font-medium text-[#A67C52]">{t.dreams.aiBadge}</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
              <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
              <span>{t.story.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight leading-snug mb-6 text-balance">
              {t.story.title}
            </h2>

            {/* Paragraphs with generous leading */}
            <div className="space-y-4 text-base sm:text-lg text-[#4A443A] leading-relaxed sm:leading-loose">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p className="font-medium text-[#234B3C] bg-[#FFF9F0] p-4 rounded-xl border border-[#EAD9C3]">
                "{t.story.p3}"
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8 pt-6 border-t border-[#EBDCCB]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#736B5E] mb-4">
                {t.story.valuesTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.story.values.map((v, idx) => (
                  <div
                    key={v.title}
                    className="p-4 bg-white rounded-xl border border-[#EBDCCB] shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FAF5EE] flex items-center justify-center mb-3">
                      {valueIcons[idx] || <Compass className="w-5 h-5 text-[#234B3C]" />}
                    </div>
                    <h4 className="text-sm font-bold text-[#234B3C] mb-1">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#6B6357] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
