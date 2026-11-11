/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, ArrowUpRight, Heart, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { siteConfig } from '../content/siteContent.ts';

// Clean SVG icon for Naver
const NaverIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
  </svg>
);

export const Connect: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="connect" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="relative bg-gradient-to-br from-[#234B3C] to-[#173228] text-[#FFF9F0] rounded-3xl p-8 sm:p-14 overflow-hidden shadow-xl text-center flex flex-col items-center">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#E58B72]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#03C75A]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xs rounded-full text-xs font-semibold tracking-wider text-[#E58B72] uppercase mb-6">
              <Heart className="w-3.5 h-3.5 text-[#E58B72]" />
              <span>{t.connect.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-balance">
              {t.connect.title}
            </h2>

            {/* Narrative message */}
            <p className="text-base sm:text-lg text-[#E4DDD3] leading-relaxed mb-8">
              {t.connect.desc}
            </p>

            {/* Action Buttons: Blog & Instagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
              {/* Naver Blog Button */}
              <a
                href={siteConfig.social.blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#03C75A] hover:bg-[#02b350] text-white font-semibold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <NaverIcon className="w-4 h-4" />
                </div>
                <span>{t.connect.blogCta}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram Button */}
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#E58B72] hover:bg-[#D97A60] text-white font-semibold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.connect.instagramCta}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Handles display */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#D4C8B8]">
              <a
                href={siteConfig.social.blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline decoration-[#03C75A]/60 underline-offset-4"
              >
                {siteConfig.social.blog.handle}
              </a>
              <span className="text-[#8C8275]">·</span>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline decoration-[#E58B72]/60 underline-offset-4"
              >
                {siteConfig.social.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
