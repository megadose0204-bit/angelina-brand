/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookMarked, ExternalLink, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { siteConfig } from '../content/siteContent.ts';

export const BlogTrilogy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="records" className="py-20 sm:py-28 bg-[#FAF5EE] border-y border-[#EFE5D7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
            <span>{t.records.tag}</span>
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight mb-4 text-balance">
            {t.records.title}
          </h2>

          <p className="text-base text-[#6B6357] leading-relaxed">
            {t.records.subtitle}
          </p>
        </div>

        {/* 3 Trilogy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.records.articles.map((article, idx) => {
            const configItem = siteConfig.blogTrilogy[idx];
            const hasUrl = Boolean(configItem && configItem.url && configItem.url.trim().length > 0);

            return (
              <div
                key={article.part}
                className="bg-white rounded-2xl border border-[#E9DFD0] p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono tracking-wider text-[#E58B72] bg-[#FAF4EC] px-2.5 py-1 rounded-md border border-[#F2E8DC]">
                      {article.part}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#736B5E] bg-[#F2EFEA] px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-[#A67C52]" />
                      <span>{t.records.statusScheduled}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#234B3C] leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#4A443A] leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#F4EDE2]">
                  {hasUrl ? (
                    <a
                      href={configItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#234B3C] hover:bg-[#1B3C30] text-[#FFF9F0] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      <span>{t.records.readArticle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F2EB] text-[#8C8275] text-xs font-medium rounded-xl border border-[#EBE0D2] select-none cursor-not-allowed"
                      aria-disabled="true"
                      title={t.records.preparingNotice}
                    >
                      <BookMarked className="w-3.5 h-3.5 opacity-60" />
                      <span>{t.records.statusScheduled} ({t.records.preparingNotice})</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link to Main Blog */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.social.blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#FAF4EC] text-[#234B3C] border border-[#E4D5C2] text-sm font-semibold rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <span>{t.connect.blogCta}</span>
            <ExternalLink className="w-4 h-4 text-[#03C75A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
