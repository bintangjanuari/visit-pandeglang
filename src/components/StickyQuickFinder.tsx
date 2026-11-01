'use client';

import React from 'react';
import {
  Sparkles,
  Clock,
  MapPin,
  SlidersHorizontal,
  RotateCcw,
  Check,
  Compass,
  Leaf,
  Waves,
  Landmark,
  UtensilsCrossed
} from 'lucide-react';

interface QuickFinderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedDuration: string;
  onSelectDuration: (duration: string) => void;
  selectedZone: string;
  onSelectZone: (zone: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
  matchCount: number;
}

export const StickyQuickFinder: React.FC<QuickFinderProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDuration,
  onSelectDuration,
  selectedZone,
  onSelectZone,
  onApplyFilters,
  onResetFilters,
  matchCount
}) => {
  return (
    <div
      id="finder"
      className="relative z-30 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="bg-[#F8F9FA] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_12px_40px_-8px_rgba(15,56,44,0.18)] border border-[#E9ECEF] backdrop-blur-md">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#E9ECEF] gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0F382C] text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F382C]">
                Interactive Quick-Finder
              </h3>
              <p className="text-xs text-[#555B6E]">
                Filter by interest, trip duration, or regional micro-zone
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#0F382C] border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>{matchCount} Destinations Match</span>
            </span>

            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs text-[#555B6E] hover:text-[#0F382C] flex items-center gap-1 font-medium transition-colors"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 3 Modular Selectors in 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Module 1: Experience Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#0F382C] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>1. Experience Type</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onSelectCategory(selectedCategory === 'eco-tourism' ? 'all' : 'eco-tourism')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border text-left ${selectedCategory === 'eco-tourism'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-emerald-700/50 hover:bg-emerald-50/50'
                  }`}
              >
                <Leaf className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">Eco-Tourism</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory(selectedCategory === 'coastal' ? 'all' : 'coastal')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border text-left ${selectedCategory === 'coastal'
                    ? 'bg-[#1B4965] text-white border-[#1B4965] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-sky-700/50 hover:bg-sky-50/50'
                  }`}
              >
                <Waves className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="truncate">Coastal & Marine</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory(selectedCategory === 'heritage' ? 'all' : 'heritage')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border text-left ${selectedCategory === 'heritage'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-amber-700/50 hover:bg-amber-50/50'
                  }`}
              >
                <Landmark className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="truncate">Heritage & Trails</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory(selectedCategory === 'culinary' ? 'all' : 'culinary')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border text-left ${selectedCategory === 'culinary'
                    ? 'bg-[#E76F51] text-white border-[#E76F51] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-orange-700/50 hover:bg-orange-50/50'
                  }`}
              >
                <UtensilsCrossed className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="truncate">Culinary & Crafts</span>
              </button>
            </div>
          </div>

          {/* Module 2: Duration */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#0F382C] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>2. Travel Duration</span>
            </label>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onSelectDuration(selectedDuration === '24h' ? 'all' : '24h')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedDuration === '24h'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-emerald-700/50 hover:bg-slate-50'
                  }`}
              >
                <span>Day Trip (24 Hours)</span>
                <span className="text-[10px] opacity-80">Express Highlights</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectDuration(selectedDuration === '48h' ? 'all' : '48h')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedDuration === '48h'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-emerald-700/50 hover:bg-slate-50'
                  }`}
              >
                <span>Weekend (48 Hours)</span>
                <span className="text-[10px] opacity-80">Coast & Culture</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectDuration(selectedDuration === '72h' ? 'all' : '72h')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedDuration === '72h'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-emerald-700/50 hover:bg-slate-50'
                  }`}
              >
                <span>Multi-Day (72h+ Expedition)</span>
                <span className="text-[10px] opacity-80">Ujung Kulon Safari</span>
              </button>
            </div>
          </div>

          {/* Module 3: Regional Zone */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#0F382C] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>3. Regional Zone</span>
            </label>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onSelectZone(selectedZone === 'north' ? 'all' : 'north')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedZone === 'north'
                    ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-emerald-700/50 hover:bg-slate-50'
                  }`}
              >
                <div>
                  <span className="block font-bold">North Pandeglang</span>
                  <span className="text-[10px] opacity-75">Mt. Karang & Geothermal</span>
                </div>
                {selectedZone === 'north' && <Check className="w-4 h-4 text-emerald-300" />}
              </button>

              <button
                type="button"
                onClick={() => onSelectZone(selectedZone === 'central' ? 'all' : 'central')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedZone === 'central'
                    ? 'bg-[#1B4965] text-white border-[#1B4965] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-sky-700/50 hover:bg-slate-50'
                  }`}
              >
                <div>
                  <span className="block font-bold">Central Pandeglang</span>
                  <span className="text-[10px] opacity-75">Menes Crafts & Labuan Port</span>
                </div>
                {selectedZone === 'central' && <Check className="w-4 h-4 text-sky-300" />}
              </button>

              <button
                type="button"
                onClick={() => onSelectZone(selectedZone === 'south' ? 'all' : 'south')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border text-left ${selectedZone === 'south'
                    ? 'bg-[#E76F51] text-white border-[#E76F51] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#E9ECEF] hover:border-orange-700/50 hover:bg-slate-50'
                  }`}
              >
                <div>
                  <span className="block font-bold">South Pandeglang</span>
                  <span className="text-[10px] opacity-75">Ujung Kulon & Tanjung Lesung</span>
                </div>
                {selectedZone === 'south' && <Check className="w-4 h-4 text-amber-200" />}
              </button>
            </div>
          </div>
        </div>

        {/* Action Trigger Bar */}
        <div className="mt-6 pt-4 border-t border-[#E9ECEF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#555B6E] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active filters update curated highlights and itinerary options dynamically.</span>
          </div>

          <button
            type="button"
            onClick={onApplyFilters}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0F382C] hover:bg-[#165342] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Explore Matched Highlights</span>
            <Compass className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

