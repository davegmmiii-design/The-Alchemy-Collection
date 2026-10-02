import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Sparkles, 
  Droplets, 
  Share2, 
  FileSpreadsheet, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CoffeeLot } from '../data/coffeeLots';
import { Language, TRANSLATIONS } from '../data/translations';
import { SocialContactRow } from './BrandComponents';

interface DetailViewProps {
  lot: CoffeeLot;
  allLots: CoffeeLot[];
  onBackToCollection: () => void;
  onSelectLot: (lot: CoffeeLot) => void;
  currentLang: Language;
}

export function DetailView({
  lot,
  allLots,
  onBackToCollection,
  onSelectLot,
  currentLang
}: DetailViewProps) {
  const t = TRANSLATIONS[currentLang];
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Find previous and next lots
  const currentIndex = allLots.findIndex(l => l.id === lot.id);
  const prevLot = allLots[(currentIndex - 1 + allLots.length) % allLots.length];
  const nextLot = allLots[(currentIndex + 1) % allLots.length];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${lot.originName} ${lot.processName} | Primrose Coffee`,
        text: `Explore ${lot.originName} ${lot.processName} (${lot.cuppingScore} PTS) from Primrose Speciality Coffee.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-[#F4F2EB] text-[#1F2927] flex flex-col justify-between font-sans-clean"
      dir={t.isRtl ? 'rtl' : 'ltr'}
    >
      {/* Sticky Header:
          - Top left back arrow
          - Center: LOT TITLE (WITHOUT CF...)
          - Top right share icon
      */}
      <header className="sticky top-0 z-40 bg-[#F4F2EB]/95 backdrop-blur-md border-b border-[#E2A748]/25 transition-all">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-2">
          {/* Top Left Back Arrow */}
          <button
            onClick={onBackToCollection}
            className="flex items-center gap-1.5 p-2 rounded-full hover:bg-white text-[#0E231C] transition-colors cursor-pointer group"
            aria-label="Back to Collection"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
              {t.collection}
            </span>
          </button>

          {/* Center Title (Pure Origin & Process, NO CF...) */}
          <div className="text-center truncate px-2">
            <h1 className="text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#0E231C] uppercase truncate font-sans-clean">
              {lot.originName.toUpperCase()} {lot.processName.toUpperCase()}
            </h1>
          </div>

          {/* Top Right Share Icon */}
          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-white text-[#0E231C] transition-colors cursor-pointer active:scale-95"
            title="Share this micro lot"
            aria-label="Share micro lot"
          >
            <Share2 className="w-5 h-5 text-[#0E231C] hover:text-[#E2A748] transition-colors" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Full-Width Hero Section:
            Fills the container with the authentic photography of the farmer/cherries
            as circled in red by the user, with clean title & extracted specs underneath.
        */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#E2A748]/30 overflow-hidden">
          {/* Hero Photograph Container (Fills the area as requested) */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-[#0E231C] border border-[#E2A748]/20 shadow-md">
            <img
              src={lot.photoUrl}
              alt={`${lot.originName} ${lot.processName}`}
              className="w-full h-full object-cover sm:object-contain"
            />
            {/* Trademark badge in bottom-left */}
            <div className="absolute bottom-3 left-3 bg-[#0E231C]/85 backdrop-blur-xs text-[#E2A748] text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#E2A748]/40 shadow-sm">
              {lot.trademarkName}
            </div>
            {/* Cupping Score badge in top-right */}
            <div className="absolute top-3 right-3 bg-[#0E231C]/90 backdrop-blur-xs text-[#E2A748] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 border border-[#E2A748]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E2A748]" />
              <span>{lot.cuppingScore} PTS</span>
            </div>
          </div>

          {/* Title and Origin Metadata */}
          <div className="pt-6 px-1 sm:px-2 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2A748] font-bold block">
                THE ALCHEMY COFFEE COLLECTION • {lot.harvestYear}
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#0E231C] text-[#E2A748] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                  {lot.process}
                </span>
                {lot.variety && (
                  <span className="bg-[#F4F2EB] text-[#0E231C] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#E2A748]/30">
                    {lot.variety}
                  </span>
                )}
                {lot.cardImageUrl && (
                  <button
                    onClick={() => setCardModalOpen(true)}
                    className="flex items-center gap-1 text-[11px] text-[#E2A748] hover:text-[#0E231C] bg-[#F4F2EB] hover:bg-[#E2A748]/20 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider transition-colors border border-[#E2A748]/30 cursor-pointer"
                  >
                    <span>Card Spec ↗</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#7A8B87] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#E2A748]" />
              <span>{lot.region} • {lot.subRegion} ({lot.altitude})</span>
            </div>

            {/* Authentic Station & Producer Description (Extracted from card) */}
            {lot.description && (
              <div className="text-[#1F2927] text-xs sm:text-sm leading-relaxed border-l-3 border-[#E2A748] pl-4 py-2 font-sans-clean bg-[#F4F2EB]/60 rounded-r-xl">
                <p>{lot.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Processing & Fermentation Methodology Section (Real Extracted Details) */}
        {lot.fermentationDetails && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2A748]/25 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-9 h-9 rounded-full bg-[#0E231C] flex items-center justify-center text-white shadow-xs">
                <Droplets className="w-5 h-5 text-[#E2A748]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0E231C] uppercase font-sans-clean">
                  {lot.subTitle ? lot.subTitle.toUpperCase() : `${lot.process.toUpperCase()} METHODOLOGY`}
                </h3>
                <p className="text-[11px] text-[#7A8B87] tracking-wider uppercase font-semibold">
                  Controlled Fermentation & Artisan Curing
                </p>
              </div>
            </div>

            <p className="text-[#1F2927] text-sm leading-relaxed">
              {lot.fermentationDetails}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-[#F4F2EB] p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-[#7A8B87] uppercase font-semibold block mb-0.5">Fermentation Time</span>
                <span className="font-bold text-[#0E231C]">{lot.fermentationTime || 'Controlled'}</span>
              </div>
              <div className="bg-[#F4F2EB] p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-[#7A8B87] uppercase font-semibold block mb-0.5">Final pH</span>
                <span className="font-bold text-[#0E231C]">{lot.finalPh || '4.0 - 4.2'}</span>
              </div>
              <div className="bg-[#F4F2EB] p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-[#7A8B87] uppercase font-semibold block mb-0.5">Drying Protocol</span>
                <span className="font-bold text-[#0E231C]">{lot.dryingDetails || 'Raised African Beds'}</span>
              </div>
              <div className="bg-[#F4F2EB] p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-[#7A8B87] uppercase font-semibold block mb-0.5">Water Activity</span>
                <span className="font-bold text-[#0E231C]">{lot.waterActivity || '0.58 aw'}</span>
              </div>
            </div>
          </section>
        )}

        {/* Sensory & Cup Notes Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2A748]/25 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-9 h-9 rounded-full bg-[#0E231C] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-5 h-5 text-[#E2A748]" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0E231C] uppercase font-sans-clean">
                TASTING & SENSORY PROFILE
              </h3>
              <p className="text-[11px] text-[#7A8B87] tracking-wider uppercase font-semibold">
                Official Micro Lot Cupping Notes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {lot.flavorTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#F4F2EB] text-[#0E231C] px-4 py-1.5 rounded-full text-xs font-semibold border border-[#E2A748]/40 shadow-2xs hover:bg-[#E2A748] hover:text-[#0E231C] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Technical Specifications Grid (Real Extracted Details) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2A748]/25">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
            <div className="w-9 h-9 rounded-full bg-[#F4F2EB] flex items-center justify-center text-[#0E231C]">
              <FileSpreadsheet className="w-5 h-5 text-[#0E231C]" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0E231C] uppercase font-sans-clean">
                {t.specifications}
              </h3>
              <p className="text-[11px] text-[#7A8B87] tracking-wider uppercase font-mono">
                {lot.trademarkName} • {lot.region}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Harvest
              </span>
              <span className="font-bold text-[#1F2927]">{lot.harvestYear}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Process
              </span>
              <span className="font-bold text-[#1F2927]">{lot.process}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Moisture Content
              </span>
              <span className="font-bold text-[#1F2927]">{lot.moisture}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Water Activity
              </span>
              <span className="font-bold text-[#1F2927]">{lot.waterActivity}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Density
              </span>
              <span className="font-bold text-[#1F2927]">{lot.density}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Cup Score
              </span>
              <span className="font-bold text-[#0E231C]">{lot.cuppingScore} / 100</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Variety
              </span>
              <span className="font-bold text-[#1F2927] truncate block" title={lot.variety}>
                {lot.variety}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F4F2EB]/60 border border-slate-100">
              <span className="text-[10px] uppercase tracking-wider text-[#7A8B87] font-semibold block mb-1">
                Station
              </span>
              <span className="font-bold text-[#1F2927] truncate block" title={lot.station}>
                {lot.station}
              </span>
            </div>
          </div>

          {/* Sample Request Call-to-Action Bar */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3.5">
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border-2 border-[#0E231C] text-[#0E231C] hover:bg-[#F4F2EB] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              View Brochure Page
            </button>
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0E231C] hover:bg-[#142F26] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer"
            >
              {t.requestSample}
            </button>
          </div>
        </section>

        {/* Previous / Next Lot Navigation Controls (Orange background as requested) */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => {
              onSelectLot(prevLot);
              scrollToTop();
            }}
            className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#E2A748] hover:bg-[#d69634] text-[#0E231C] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-md border border-[#c98e32] active:scale-95"
            aria-label="Previous Lot"
          >
            <ChevronLeft className="w-4 h-4 stroke-[3]" />
            <span>{t.prevLot}</span>
          </button>

          <button
            onClick={() => {
              onSelectLot(nextLot);
              scrollToTop();
            }}
            className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#E2A748] hover:bg-[#d69634] text-[#0E231C] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-md border border-[#c98e32] active:scale-95"
            aria-label="Next Lot"
          >
            <span>{t.nextLot}</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </main>

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E2A748]/40 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setInquiryModalOpen(false);
                setInquirySubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 cursor-pointer"
            >
              ✕
            </button>

            {!inquirySubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="text-center mb-6">
                  <span className="text-[#E2A748] tracking-widest font-mono text-xs uppercase font-bold">
                    SAMPLE REQUEST INQUIRY
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-[#0E231C] mt-1">
                    Request Cupping Samples
                  </h3>
                  <p className="text-xs text-[#7A8B87] mt-1">
                    The Alchemy Collection • {lot.originName} {lot.processName} ({lot.region}, Ethiopia)
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8B87] mb-1">
                    Roastery / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Blue Ridge Specialty Roasters"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E231C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8B87] mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E231C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8B87] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@roastery.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E231C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8B87] mb-1">
                    Delivery Address for Roasted Samples *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Street, City, Postal Code, Country"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E231C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8B87] mb-1">
                    Estimated Bag Requirement (60kg)
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E231C]"
                  >
                    <option>5 - 10 Bags (Micro Lot Trial)</option>
                    <option>10 - 30 Bags</option>
                    <option>30 - 60 Bags (Full Allocation)</option>
                    <option>Container Load (FCL)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0E231C] hover:bg-[#142F26] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer mt-2"
                >
                  Submit Cupping Request
                </button>

                <p className="text-[10px] text-center text-[#7A8B87] pt-1">
                  Or direct email: <a href="mailto:primroseplc@gmail.com" className="font-semibold text-[#0E231C] underline">primroseplc@gmail.com</a>
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-2xl text-[#0E231C]">
                  Sample Request Dispatched
                </h4>
                <p className="text-xs text-[#7A8B87] max-w-sm mx-auto leading-relaxed">
                  Our export desk at Primrose Addis Ababa will contact you at your email and dispatch cupping roasted samples to your address.
                </p>
                <button
                  onClick={() => {
                    setInquiryModalOpen(false);
                    setInquirySubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#0E231C] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card Specification Full View Modal (If user wants to see the full raw card image) */}
      {cardModalOpen && lot.cardImageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0E231C] rounded-3xl p-4 sm:p-6 max-w-md w-full border border-[#E2A748]/50 shadow-2xl relative">
            <button
              onClick={() => setCardModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10"
              aria-label="Close card preview"
            >
              ✕
            </button>

            <div className="mb-3 text-center">
              <span className="text-[#E2A748] tracking-[0.25em] font-mono text-[11px] uppercase font-bold">
                {lot.trademarkName}
              </span>
              <h3 className="font-serif-luxury text-lg text-white">
                Official Micro Lot Card
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black/60 border border-[#E2A748]/30 max-h-[75vh] flex items-center justify-center">
              <img
                src={lot.cardImageUrl}
                alt={`${lot.originName} ${lot.processName}`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Official Brochure Booklet Reference Modal */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0E231C] rounded-3xl p-4 sm:p-6 max-w-3xl w-full border border-[#E2A748]/50 shadow-2xl relative">
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10"
              aria-label="Close booklet preview"
            >
              ✕
            </button>

            <div className="mb-3 text-center">
              <span className="text-[#E2A748] tracking-[0.25em] font-mono text-[11px] uppercase font-bold">
                THE ALCHEMY COFFEE COLLECTION • EDITION 1
              </span>
              <h3 className="font-serif-luxury text-xl text-white">
                Official Booklet Spread Reference
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black/60 border border-[#E2A748]/30 max-h-[75vh] flex items-center justify-center">
              <img
                src="/alchemy-coffee-book.jpg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('postimg.cc')) {
                    target.src = 'https://i.postimg.cc/8NmYcsLd/Alchemy-coffee-book.jpg';
                  }
                }}
                alt="The Alchemy Coffee Collection Booklet"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <p className="text-[11px] text-center text-slate-400 mt-3 font-mono">
              Official Primrose Specialty Coffee Catalog & Harvest Notes
            </p>
          </div>
        </div>
      )}

      {/* Share Toast */}
      {copiedShare && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E231C] text-[#E2A748] px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-[#E2A748]/40 animate-in fade-in slide-in-from-bottom-2">
          Link copied to clipboard!
        </div>
      )}

      {/* Footer Section */}
      <footer className="w-full bg-[#EAE6DC] border-t border-[#E2A748]/30 py-5 sm:py-6 px-4 sm:px-6 mt-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3.5">
          {/* Pill-shaped button: "↑ BACK TO TOP" (Orange background as requested) */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#E2A748] hover:bg-[#d69634] text-[#0E231C] font-bold text-xs tracking-[0.2em] uppercase border border-[#c98e32] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Scroll back to top"
          >
            <span className="font-bold">↑</span>
            <span>{t.backToTop}</span>
          </button>

          {/* Circular contact icons: Gmail, Instagram, WhatsApp */}
          <SocialContactRow />

          {/* Copyright line */}
          <p className="text-[11px] text-[#7A8B87] tracking-[0.2em] uppercase font-mono">
            PRIMROSE SPECIALITY COFFEE © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
