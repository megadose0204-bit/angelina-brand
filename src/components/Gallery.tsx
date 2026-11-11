/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, ZoomIn, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { SmartImage } from './SmartImage.tsx';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const selectedItem = selectedIdx !== null ? t.gallery.items[selectedIdx] : null;

  const openModal = (idx: number, btnElem: HTMLButtonElement) => {
    triggerRef.current = btnElem;
    setSelectedIdx(idx);
  };

  const closeModal = () => {
    setSelectedIdx(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedIdx !== null) {
        closeModal();
      }
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A67C52] uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
            <span>{t.gallery.tag}</span>
            <span className="w-5 h-[1.5px] bg-[#C5A15A]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#234B3C] tracking-tight mb-4 text-balance">
            {t.gallery.title}
          </h2>

          <p className="text-base text-[#6B6357] leading-relaxed mb-6">
            {t.gallery.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF4EC] border border-[#E9DFD0] rounded-xl text-xs text-[#736B5E]">
            <Info className="w-4 h-4 text-[#E58B72] shrink-0" />
            <span>{t.gallery.aiBadge}</span>
          </div>
        </div>

        {/* Gallery Grid (Bento style 5-image showcase) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.gallery.items.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => openModal(index, e.currentTarget)}
                className={`group relative text-left bg-white rounded-2xl border border-[#E9DFD0] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-zoom-in flex flex-col ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                aria-label={`${item.title} - ${t.gallery.expandHint}`}
              >
                {/* Visual Area */}
                <div
                  className={`relative w-full bg-[#F5ECE0] overflow-hidden ${
                    isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <SmartImage
                    src={`/images/${item.filename}`}
                    alt={item.alt}
                    title={item.title}
                    objectPosition="center"
                    className="w-full h-full group-hover:scale-103 transition-transform duration-500"
                    aiBadge={false}
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#234B3C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-[#234B3C] text-xs font-semibold rounded-lg shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{t.gallery.expandHint}</span>
                    </span>
                  </div>

                  {/* AI Badge pill-free corner */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#234B3C] text-[10px] font-mono px-2 py-0.5 rounded-md border border-[#EAD9C3]">
                    {item.filename}
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#234B3C] group-hover:text-[#E58B72] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B6357] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-[11px] text-[#A67C52]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E58B72]" />
                      <span>{t.gallery.aiBadge}</span>
                    </span>
                    <span className="text-[#8C8275]">{t.gallery.expandHint}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        >
          <div
            className="relative bg-[#FFF9F0] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E9DFD0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#EAD9C3]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E58B72]" />
                <span className="text-xs font-semibold text-[#234B3C] uppercase tracking-wider">
                  {t.gallery.aiBadge}
                </span>
                <span className="text-[#D3C3B1]">·</span>
                <span className="text-xs text-[#8C8275] font-mono">
                  {selectedItem.filename}
                </span>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeModal}
                className="p-1.5 text-[#4A443A] hover:text-[#234B3C] hover:bg-[#F2E8DC] rounded-xl transition-colors cursor-pointer"
                aria-label={t.gallery.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-[#F4EDE2] aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
              <SmartImage
                src={`/images/${selectedItem.filename}`}
                alt={selectedItem.alt}
                title={selectedItem.title}
                objectFit="contain"
                objectPosition="center"
                className="w-full h-full"
                aiBadge={false}
              />
            </div>

            {/* Modal Footer & Description */}
            <div className="p-5 sm:p-6 bg-white">
              <h3 id="lightbox-title" className="text-lg sm:text-xl font-bold text-[#234B3C] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#4A443A] leading-relaxed mb-4">
                {selectedItem.desc}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#F2E8DC] text-xs text-[#8C8275]">
                <span>{selectedItem.alt}</span>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-3 py-1.5 bg-[#234B3C] text-white rounded-lg text-xs font-medium hover:bg-[#1B3C30] transition-colors cursor-pointer"
                >
                  {t.gallery.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
