import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { CoffeeLot } from '../data/coffeeLots';
import { Language, TRANSLATIONS } from '../data/translations';
import { SocialContactRow } from './BrandComponents';
import { RenderCoffeeLogo } from './CoffeeLogos';

interface CollectionViewProps {
  lots: CoffeeLot[];
  onSelectLot: (lot: CoffeeLot) => void;
  onNavigateHome: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export function CollectionView({
  lots,
  onSelectLot,
  onNavigateHome,
  currentLang,
  onSelectLang
}: CollectionViewProps) {
  const t = TRANSLATIONS[currentLang];
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'AR', label: 'العربية', flag: '🇸🇦' },
    { code: 'ZH', label: '中文', flag: '🇨🇳' },
    { code: 'JA', label: '日本語', flag: '🇯🇵' },
    { code: 'KO', label: '한국어', flag: '🇰🇷' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-[#F4F2EB] text-[#1F2927] flex flex-col justify-between font-sans-clean"
      dir={t.isRtl ? 'rtl' : 'ltr'}
    >
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#F4F2EB]/95 backdrop-blur-md border-b border-[#E2A748]/25 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Breadcrumb: "HOME > COLLECTION" */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs tracking-widest text-[#7A8B87] uppercase font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0E231C] transition-colors cursor-pointer"
            >
              {t.home}
            </button>
            <span className="text-[#E2A748]" aria-hidden="true">&gt;</span>
            <span className="text-[#0E231C] font-bold">{t.collection}</span>
          </nav>

          {/* Right actions: Language Switcher with 5 languages */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#0E231C]/20 bg-white/80 hover:bg-white text-[11px] tracking-wider uppercase font-semibold text-[#0E231C] transition-all cursor-pointer shadow-2xs"
              aria-label="Language selector"
            >
              <span>🌐</span>
              <span>{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-[#0E231C]" />
            </button>

            {langMenuOpen && (
              <div className={`absolute ${t.isRtl ? 'left-0' : 'right-0'} mt-2 w-44 rounded-xl bg-white border border-[#E2A748]/35 shadow-xl py-2 z-50 text-xs`}>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onSelectLang(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 flex items-center justify-between transition-colors cursor-pointer ${
                      currentLang === l.code ? 'font-bold text-[#0E231C] bg-[#F4F2EB]' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {currentLang === l.code && <span className="text-[#E2A748] font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container: Clean Two-Column Coffee Cards Grid */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 pt-4 pb-2 sm:pt-6 sm:pb-3">
        {/* Product Grid: 2-column layout on all screen sizes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {lots.map((lot) => {
            return (
              <div
                key={lot.id}
                onClick={() => onSelectLot(lot)}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-[#E2A748]/25 flex flex-col justify-between"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectLot(lot);
                  }
                }}
                aria-label={`View details for ${lot.title}`}
              >
                {/* Square aspect ratio product image displaying only the pure trademark logo */}
                <div className="relative aspect-square w-full bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-out">
                    <RenderCoffeeLogo logoKey={lot.logoKey} className="max-w-[260px] max-h-[260px] w-full h-full object-contain" />
                  </div>
                </div>

                {/* Thin gold accent line separator below the image */}
                <div className="h-[2px] bg-[#E2A748] w-full" />

                {/* Clean Content Area: Two-line Title Format without '-' sign */}
                <div className="p-3 sm:p-4 md:p-5 bg-white text-center flex flex-col items-center justify-center flex-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#0E231C] group-hover:text-[#E2A748] transition-colors leading-tight">
                    {lot.originName}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B6D68] font-medium mt-1 leading-snug">
                    {lot.processName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer Section: Compact Spacing */}
      <footer className="w-full bg-[#EAE6DC] border-t border-[#E2A748]/30 py-4 sm:py-5 px-4 sm:px-6 mt-3 sm:mt-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3">
          {/* Pill-shaped button: "↑ BACK TO TOP" (Orange Background as requested) */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#E2A748] hover:bg-[#d69634] text-[#0E231C] font-bold text-xs tracking-[0.2em] uppercase border border-[#c98e32] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#0E231C] stroke-[3]" />
            <span>{t.backToTop}</span>
          </button>

          {/* Circular contact icons: Gmail, Instagram, WhatsApp */}
          <SocialContactRow />

          {/* Copyright line */}
          <p className="text-[10px] sm:text-[11px] text-[#7A8B87] tracking-[0.2em] uppercase font-mono">
            PRIMROSE SPECIALITY COFFEE © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
