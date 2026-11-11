/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from '../i18n/types.ts';
import { ko } from '../i18n/ko.ts';
import { en } from '../i18n/en.ts';
import { ja } from '../i18n/ja.ts';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const translationsMap: Record<Language, Translations> = {
  ko,
  en,
  ja,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'angelina_brand_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    // 1. Check URL query param ?lang=ko | en | ja
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ko' || urlLang === 'en' || urlLang === 'ja') {
        return urlLang;
      }
      // 2. Check localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ko' || stored === 'en' || stored === 'ja') {
          return stored;
        }
      } catch {
        // Ignore localStorage access errors
      }
    }
    // 3. Default to Korean
    return 'ko';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore localStorage errors
    }

    // Update URL query param smoothly without reloading
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  useEffect(() => {
    // Update document lang and title on change
    document.documentElement.lang = lang;
    const currentTranslation = translationsMap[lang];
    if (currentTranslation) {
      document.title = currentTranslation.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentTranslation.meta.description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', currentTranslation.meta.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', currentTranslation.meta.description);
      }
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translationsMap[lang] || ko,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
