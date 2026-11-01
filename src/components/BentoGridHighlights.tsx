'use client';

import React, { useState } from 'react';
import { 
  Destination, 
  DESTINATIONS 
} from '../data/pandeglangData';
import { 
  Heart, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  ChevronRight, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Waves, 
  Mountain, 
  Coffee, 
  Info,
  X
} from 'lucide-react';

interface BentoGridProps {
  filterCategory: string;
  filterZone: string;
  onSelectZone: (zone: 'north' | 'central' | 'south') => void;
}

export const BentoGridHighlights: React.FC<BentoGridProps> = ({
  filterCategory,
  filterZone,
  onSelectZone
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter destinations if filters are active
  const filtered = DESTINATIONS.filter(item => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesZone = filterZone === 'all' || item.zone === filterZone;
    return matchesCategory && matchesZone;
  });

  // Fallback to all if none match
  const displayItems = filtered.length > 0 ? filtered : DESTINATIONS;

  const card1 = DESTINATIONS.find(d => d.id === 'ujung-kulon')!;
  const card2 = DESTINATIONS.find(d => d.id === 'tanjung-lesung')!;
  const card3 = DESTINATIONS.find(d => d.id === 'mount-karang-cisolong')!;
  const card4 = DESTINATIONS.find(d => d.id === 'flavors-crafts-labuan')!;

  return (
    <section id="highlights" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0F382C] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>Curated Regional Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F382C] tracking-tight">
            The Crown Jewels of Pandeglang
          </h2>
          <p className="mt-3 text-[#555B6E] text-base sm:text-lg max-w-2xl font-sans">
            Hand-curated destinations showcasing our UNESCO sanctuary, turquoise special economic zone, sacred highland peaks, and centuries of culinary craftsmanship.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#555B6E] font-medium hidden sm:inline">
            Click any card to inspect full logistical intel & permits
          </span>
        </div>
      </div>

      {/* 12-Column Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* ================= CARD 1: LARGE FEATURE (Ujung Kulon National Park) ================= */}
        {/* Desktop: col-span-12 lg:col-span-8 */}
        <div 
          onClick={() => setActiveModalDest(card1)}
          className="col-span-12 lg:col-span-8 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#E9ECEF] shadow-[0_4px_24px_-4px_rgba(15,56,44,0.08)] hover:shadow-[0_20px_40px_-6px_rgba(15,56,44,0.18)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[460px] sm:min-h-[520px]"
        >
          {/* Card Image with Editorial Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={card1.heroImage} 
              alt={card1.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            {/* Multi-step gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-[#0F382C]/75 to-black/25" />
          </div>

          {/* Top Badge & Favorite Bar */}
          <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/90 text-white font-semibold text-xs backdrop-blur-md shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-200" />
                {card1.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-md">
                South Zone
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => toggleFavorite(card1.id, e)}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              aria-label="Save to favorites"
            >
              <Heart 
                className={`w-5 h-5 ${favorites.includes(card1.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              />
            </button>
          </div>

          {/* Bottom Content Body */}
          <div className="relative z-10 p-6 sm:p-8 text-white mt-auto">
            {/* Wildlife Alert Chip */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-300/30 text-amber-200 text-xs font-semibold mb-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>Strict Biosphere Zone • Sanctuary of 80+ Wild Javan Rhinos</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              {card1.title}
            </h3>
            <p className="text-amber-200 text-sm sm:text-base font-medium mb-3">
              {card1.tagline}
            </p>
            <p className="text-white/85 text-xs sm:text-sm line-clamp-2 max-w-2xl mb-5 font-normal leading-relaxed">
              {card1.description}
            </p>

            {/* Quick feature pill list */}
            <div className="hidden sm:flex flex-wrap gap-2 mb-6">
              {card1.highlights.slice(0, 3).map((h, i) => (
                <span key={i} className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-white/90 backdrop-blur-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  {h}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/20 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 text-white/80">
                <Clock className="w-4 h-4 text-emerald-300" />
                {card1.travelTime}
              </span>

              <span className="inline-flex items-center gap-1 text-[#F4A261] font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Biosphere Guide & Map</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* ================= CARD 2: MEDIUM FEATURE (Tanjung Lesung SEZ) ================= */}
        {/* Desktop: col-span-12 lg:col-span-4 */}
        <div 
          onClick={() => setActiveModalDest(card2)}
          className="col-span-12 lg:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#E9ECEF] shadow-[0_4px_24px_-4px_rgba(15,56,44,0.08)] hover:shadow-[0_20px_40px_-6px_rgba(15,56,44,0.18)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[460px] sm:min-h-[520px]"
        >
          {/* Card Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={card2.heroImage} 
              alt={card2.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4965] via-[#1B4965]/80 to-black/30" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 p-6 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-[#E76F51] text-white font-semibold text-xs shadow-sm flex items-center gap-1">
              <Waves className="w-3.5 h-3.5" />
              {card2.badge}
            </span>

            <button
              type="button"
              onClick={(e) => toggleFavorite(card2.id, e)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              aria-label="Save to favorites"
            >
              <Heart 
                className={`w-4 h-4 ${favorites.includes(card2.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              />
            </button>
          </div>

          {/* Bottom Content Body */}
          <div className="relative z-10 p-6 text-white mt-auto">
            <span className="text-[11px] uppercase tracking-wider font-bold text-amber-200">
              Coastal Cerulean Retreat
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1 mb-1.5">
              {card2.title}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm line-clamp-3 mb-4 font-normal leading-relaxed">
              {card2.description}
            </p>

            <div className="flex flex-col gap-1.5 mb-5 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Krakatau Horizon Viewpoint</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>PADI Dive & Catamaran Sailing</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-white/70">{card2.travelTime}</span>
              <span className="text-amber-200 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Explore SEZ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* ================= CARD 3: VERTICAL FEATURE (Highlands & Ancient Heritage) ================= */}
        {/* Desktop: col-span-12 lg:col-span-6 */}
        <div 
          onClick={() => setActiveModalDest(card3)}
          className="col-span-12 lg:col-span-6 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#E9ECEF] shadow-[0_4px_24px_-4px_rgba(15,56,44,0.08)] hover:shadow-[0_20px_40px_-6px_rgba(15,56,44,0.18)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[380px] sm:min-h-[420px]"
        >
          {/* Card Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={card3.heroImage} 
              alt={card3.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-[#0F382C]/85 to-black/35" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 p-6 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-700 text-white font-semibold text-xs shadow-sm flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-amber-300" />
              {card3.badge}
            </span>

            <button
              type="button"
              onClick={(e) => toggleFavorite(card3.id, e)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              aria-label="Save to favorites"
            >
              <Heart 
                className={`w-4 h-4 ${favorites.includes(card3.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              />
            </button>
          </div>

          {/* Bottom Content Body */}
          <div className="relative z-10 p-6 sm:p-8 text-white mt-auto">
            <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-300">
              North Zone • 1,778m Stratovolcano
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1 mb-2">
              {card3.title}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm line-clamp-2 mb-4 font-normal leading-relaxed">
              {card3.description}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-white/90">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-xs">
                <span className="font-bold block text-amber-200">Citaman Springs</span>
                <span className="text-[11px] text-white/70">Megalithic Stone Pool</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-xs">
                <span className="font-bold block text-emerald-300">Cisolong Hot Spring</span>
                <span className="text-[11px] text-white/70">Natural Sulfur Spa</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-white/70">Best: Sunrise Hikes & Twilight Soaks</span>
              <span className="text-amber-200 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>View Trail Info</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* ================= CARD 4: SMALL ACCENT (Authentic Flavors & Crafts) ================= */}
        {/* Desktop: col-span-12 lg:col-span-6 */}
        <div 
          onClick={() => setActiveModalDest(card4)}
          className="col-span-12 lg:col-span-6 group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#E9ECEF] shadow-[0_4px_24px_-4px_rgba(15,56,44,0.08)] hover:shadow-[0_20px_40px_-6px_rgba(15,56,44,0.18)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[380px] sm:min-h-[420px]"
        >
          {/* Card Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={card4.heroImage} 
              alt={card4.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/85 to-black/35" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 p-6 flex items-start justify-between">
            <span className="px-3 py-1 rounded-full bg-[#E76F51] text-white font-semibold text-xs shadow-sm flex items-center gap-1">
              <Coffee className="w-3.5 h-3.5 text-amber-200" />
              {card4.badge}
            </span>

            <button
              type="button"
              onClick={(e) => toggleFavorite(card4.id, e)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              aria-label="Save to favorites"
            >
              <Heart 
                className={`w-4 h-4 ${favorites.includes(card4.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              />
            </button>
          </div>

          {/* Bottom Content Body */}
          <div className="relative z-10 p-6 sm:p-8 text-white mt-auto">
            <span className="text-[11px] uppercase tracking-wider font-bold text-orange-300">
              Central Zone • Culinary & Living Crafts
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1 mb-2">
              {card4.title}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm line-clamp-2 mb-4 font-normal leading-relaxed">
              {card4.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/90">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs">
                Kue Balok Menes
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs">
                Labuan Bagan Smoked Fish
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs">
                Hand-hammered Emping
              </span>
            </div>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-white/70">From IDR 5,000 / portion</span>
              <span className="text-orange-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Explore Culinary Trail</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL DETAILS POPUP ================= */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
          <div 
            className="bg-[#F8F9FA] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-[#1A1A1A] relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Hero Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl">
              <img 
                src={activeModalDest.heroImage} 
                alt={activeModalDest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-black/40 to-transparent" />
              
              <button
                type="button"
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded bg-[#E76F51] text-xs font-semibold uppercase tracking-wider">
                  {activeModalDest.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                  {activeModalDest.title}
                </h3>
                <p className="text-amber-200 text-xs sm:text-sm font-medium">
                  {activeModalDest.tagline}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F382C] mb-2">
                  Destination Overview
                </h4>
                <p className="text-[#555B6E] text-sm sm:text-base leading-relaxed">
                  {activeModalDest.description}
                </p>
              </div>

              {/* Logistical Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs">
                <div>
                  <span className="text-[#555B6E] block font-medium">Travel Time:</span>
                  <span className="font-bold text-[#0F382C]">{activeModalDest.travelTime}</span>
                </div>
                <div>
                  <span className="text-[#555B6E] block font-medium">GPS Coordinates:</span>
                  <span className="font-mono font-semibold text-[#1B4965]">{activeModalDest.coordinates}</span>
                </div>
                <div>
                  <span className="text-[#555B6E] block font-medium">Best Time to Visit:</span>
                  <span className="font-semibold text-[#0F382C]">{activeModalDest.bestTime}</span>
                </div>
                <div>
                  <span className="text-[#555B6E] block font-medium">Standard Entrance / Tariff:</span>
                  <span className="font-semibold text-[#E76F51]">{activeModalDest.ticketPrice}</span>
                </div>
              </div>

              {/* Key Highlights List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F382C] mb-3">
                  Verified Highlights & Activities
                </h4>
                <div className="space-y-2">
                  {activeModalDest.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onSelectZone(activeModalDest.zone);
                    setActiveModalDest(null);
                    const mapEl = document.getElementById('zone-map');
                    if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#0F382C] text-[#0F382C] hover:bg-[#0F382C]/5 font-semibold text-xs sm:text-sm transition-all"
                >
                  Locate on 3-Zone Interactive Map
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveModalDest(null);
                    const itEl = document.getElementById('itinerary-assistant');
                    if (itEl) itEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#E76F51] hover:bg-[#d65f42] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  Add to Custom Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

