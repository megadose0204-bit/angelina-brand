/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { siteConfig } from '../content/siteContent.ts';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5EE] border-t border-[#EAE0D2] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EBDCCB]">
          {/* Brand & Motto */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#234B3C] mb-1">
              {t.footer.brand}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6357]">
              {t.footer.motto}
            </p>
          </div>

          {/* Action Links & Back to Top Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-xs text-[#736B5E]">
              <a
                href={siteConfig.social.blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#234B3C] font-medium transition-colors"
              >
                {t.connect.blogCta}
              </a>
              <span className="text-[#D3C3B1]">·</span>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#234B3C] font-medium transition-colors"
              >
                Instagram
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF4EC] text-[#234B3C] text-xs font-semibold rounded-xl border border-[#E4D5C2] shadow-2xs hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E58B72]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8275]">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Angelina.</span>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-1 text-[#A67C52]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E58B72] fill-[#E58B72]" />
            <span>for a vibrant daily journey</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
