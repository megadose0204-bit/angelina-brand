/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface SmartImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  aiBadge?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  title,
  className = '',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
  aiBadge = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  const filename = src.split('/').pop() || 'image.png';

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 bg-[#FAF5EE] border border-[#E9DFD0] rounded-2xl text-center overflow-hidden select-none min-h-[220px] ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Soft background texture accents */}
        <div className="absolute inset-0 bg-radial from-[#FFF9F0]/60 to-[#F4EDE2]/80 opacity-70 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-sm">
          <div className="w-12 h-12 rounded-full bg-[#EFE4D3] text-[#234B3C] flex items-center justify-center mb-3 shadow-xs">
            <ImageIcon className="w-6 h-6 stroke-[1.6]" />
          </div>

          {title && (
            <h4 className="text-base font-semibold text-[#234B3C] mb-1">
              {title}
            </h4>
          )}

          <p className="text-xs text-[#736B5E] mb-3 leading-relaxed">
            {alt}
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-[#A67C52] font-medium bg-[#FFF9F0] border border-[#EAD9C3] px-2.5 py-1 rounded-md">
            <Sparkles className="w-3 h-3 text-[#E58B72]" />
            <span>{t.hero.aiImageBadge}</span>
          </div>

          <span className="mt-2 text-[10px] text-[#8C8275] font-mono tracking-tight">
            public/images/{filename}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F4EDE2] animate-pulse flex items-center justify-center text-[#A69C8E]">
          <ImageIcon className="w-8 h-8 opacity-40" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full transition-opacity duration-500 ${
          objectFit === 'contain' ? 'object-contain' : 'object-cover'
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectPosition }}
      />

      {aiBadge && isLoaded && (
        <div className="absolute bottom-3 left-3 bg-[#234B3C]/85 backdrop-blur-xs text-[#FFF9F0] text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#E58B72]" />
          <span>{t.hero.aiImageBadge}</span>
        </div>
      )}
    </div>
  );
};
