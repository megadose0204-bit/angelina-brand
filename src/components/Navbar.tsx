/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Language } from '../i18n/types.ts';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#story', label: t.nav.story },
    { href: '#dreams', label: t.nav.dreams },
    { href: '#action', label: t.nav.action },
    { href: '#records', label: t.nav.records },
    { href: '#connect', label: t.nav.connect },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9F0]/95 backdrop-blur-md shadow-xs border-b border-[#EAD9C3]/70 py-3.5'
          : 'bg-[#FFF9F0] py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-baseline gap-2 shrink-0 text-decoration-none"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#234B3C] group-hover:text-[#E58B72] transition-colors whitespace-nowrap">
            {t.nav.brand}
          </span>
          <span className="hidden lg:inline text-xs font-normal text-[#8C8275] tracking-wide whitespace-nowrap">
            꿈을 기록하는 일상
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A443A]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#234B3C] transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E58B72] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Segmented Language Controls */}
          <div
            className="flex items-center p-0.5 bg-[#F2E8DC] rounded-lg border border-[#E4D5C2]"
            role="group"
            aria-label={t.nav.langSelectLabel}
          >
            <span className="sr-only">{t.nav.langSelectLabel}</span>
            <div className="pl-1.5 pr-0.5 text-[#736B5E] hidden sm:flex items-center" aria-hidden="true">
              <Globe className="w-3.5 h-3.5" />
            </div>
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  aria-pressed={isActive}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#234B3C] shadow-xs font-semibold'
                      : 'text-[#6B6357] hover:text-[#234B3C]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#234B3C] hover:bg-[#F2E8DC] rounded-lg transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-[#EAD9C3] px-6 pt-3 pb-6 shadow-md transition-all">
          <nav className="flex flex-col gap-3 py-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#234B3C] hover:text-[#E58B72] py-2 border-b border-[#F2E8DC]/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
