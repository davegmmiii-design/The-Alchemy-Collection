import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SocialContactRow } from './BrandComponents';
import { PrimroseOfficialLogo } from './PrimroseOfficialLogo';
import { Language, TRANSLATIONS } from '../data/translations';

interface HomeViewProps {
  onNavigateToCollection: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export function HomeView({ onNavigateToCollection, currentLang, onSelectLang }: HomeViewProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'EN', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'AR', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'ZH', label: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'JA', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'KO', label: 'Korean', nativeName: '한국어', flag: '🇰🇷' }
  ];

  return (
    <div 
      className="relative min-h-screen bg-[#0E231C] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E2A748] selection:text-[#0E231C]"
      dir={t.isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background delicate decorative grid pattern with subtle gold particles */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(226, 167, 72, 0.45) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Bar with Language Selector */}
      <header className="relative z-30 w-full px-6 md:px-12 pt-6 flex items-center justify-between">
        {/* Language selector top-left */}
        <div className="relative">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2A748]/35 bg-[#142F26]/80 hover:bg-[#1A3B30] text-xs tracking-wider uppercase font-medium transition-all duration-200 shadow-md cursor-pointer"
            aria-expanded={langMenuOpen}
            aria-label="Select Language"
          >
            <span className="text-sm">🌐</span>
            <span className="font-semibold text-[#E2A748]">{currentLang}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#E2A748] transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {langMenuOpen && (
            <div className={`absolute ${t.isRtl ? 'right-0' : 'left-0'} mt-2 w-52 rounded-2xl bg-[#142F26] border border-[#E2A748]/40 shadow-2xl py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150`}>
              <div className="px-4 py-1.5 border-b border-white/10 mb-1 text-[10px] text-[#A2B5B0] uppercase tracking-widest font-mono">
                Select Language
              </div>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onSelectLang(l.code);
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                    currentLang === l.code 
                      ? 'text-[#E2A748] font-bold bg-[#E2A748]/15' 
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                    <span className="text-white/40 text-[11px]">({l.nativeName})</span>
                  </span>
                  {currentLang === l.code && <span className="text-[#E2A748]">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Clean top-right badge */}
        <div className="text-right">
          <span className="text-[11px] tracking-[0.3em] text-[#E2A748] font-mono uppercase font-semibold">
            ETHIOPIA
          </span>
        </div>
      </header>

      {/* Left Vertical Subtext: "EST. 2010 • ETHIOPIA" */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-4 z-20 pointer-events-none select-none">
        <span className="text-[11px] tracking-[0.35em] text-[#E2A748]/85 font-sans-clean font-semibold uppercase whitespace-nowrap drop-shadow-sm">
          {t.established}
        </span>
        <div className="w-12 h-[1px] bg-[#E2A748]/50" />
      </div>

      {/* Center Main Stage */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center max-w-4xl mx-auto">
        {/* Official Primrose Logo Plaque (HD crisp rendering, black background removed) */}
        <div className="mb-8 sm:mb-10 w-full max-w-[380px] sm:max-w-[500px] md:max-w-[560px] transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center">
          <img
            src="/official-logo-hd.png"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/official-logo-transparent.png';
            }}
            alt="Primrose Speciality Coffee Ethiopia Official Logo"
            className="w-full h-auto object-contain filter drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Hero Title in Golden Font (No quotation marks): 
            Line 1: The Alchemy coffee collection
            Line 2: Edition 1
        */}
        <h1 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] mb-6 max-w-4xl mx-auto text-center tracking-tight text-gold-luxury drop-shadow-md">
          <span className="block">The Alchemy coffee collection</span>
          <span className="block mt-2 sm:mt-3 text-gold-solid font-medium">Edition 1</span>
        </h1>

        {/* Subtitle / Edition kicker */}
        <p className="text-[#D4DFDC] text-xs sm:text-sm tracking-[0.25em] uppercase max-w-lg mb-10 font-sans-clean font-medium">
          {t.editionSubtitle}
        </p>

        {/* Main CTA Button: Large pill-shaped Ochre button */}
        <button
          onClick={onNavigateToCollection}
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-4.5 rounded-full bg-[#E2A748] hover:bg-[#d6993a] text-[#0E231C] font-bold text-sm sm:text-base tracking-[0.15em] uppercase shadow-xl shadow-[#E2A748]/25 hover:shadow-2xl hover:shadow-[#E2A748]/35 transition-all duration-200 active:scale-98 cursor-pointer"
        >
          <span>{t.viewCollection}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </main>

      {/* Footer with Contact / Social Icons (Without "PRIMROSE COFFEE EXPORTERS" and "PRIMROSEPLC@GMAIL.COM") */}
      <footer className="relative z-10 w-full px-6 py-8 flex items-center justify-center border-t border-white/10 max-w-5xl mx-auto">
        {/* Social / contact icons: Gmail, Instagram, WhatsApp */}
        <SocialContactRow />
      </footer>
    </div>
  );
}
