/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Video, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { siteConfig } from '../content/siteContent.ts';

export const VideoSection: React.FC = () => {
  const { t } = useLanguage();

  // If video is disabled in siteConfig, return null to hide as required
  if (!siteConfig.video.showVideo) {
    return null;
  }

  return (
    <section id="video" className="py-20 bg-[#FAF5EE] border-t border-[#EFE5D7]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <Video className="w-4 h-4 text-[#E58B72]" />
            <span>{t.video.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#234B3C] tracking-tight mb-3">
            {t.video.title}
          </h2>

          <p className="text-sm text-[#6B6357] leading-relaxed">
            {t.video.desc}
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="relative bg-black rounded-3xl overflow-hidden shadow-xl border border-[#E9DFD0]">
          <video
            controls
            preload="metadata"
            className="w-full aspect-video"
            poster="/images/01-dream.png"
          >
            <source src={siteConfig.video.src} type="video/mp4" />
            {siteConfig.video.subtitles.ko && (
              <track
                kind="subtitles"
                src={siteConfig.video.subtitles.ko}
                srcLang="ko"
                label="한국어 자막"
              />
            )}
            {siteConfig.video.subtitles.en && (
              <track
                kind="subtitles"
                src={siteConfig.video.subtitles.en}
                srcLang="en"
                label="English Subtitles"
              />
            )}
            {siteConfig.video.subtitles.ja && (
              <track
                kind="subtitles"
                src={siteConfig.video.subtitles.ja}
                srcLang="ja"
                label="日本語字幕"
              />
            )}
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8C8275]">
          <Film className="w-3.5 h-3.5 text-[#C5A15A]" />
          <span>{siteConfig.video.src}</span>
        </div>
      </div>
    </section>
  );
};
