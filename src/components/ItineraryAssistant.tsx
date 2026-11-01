'use client';

import React, { useState } from 'react';
import { 
  DYNAMIC_ITINERARIES, 
  DynamicItinerary 
} from '../data/pandeglangData';
import { 
  User, 
  Users, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Download, 
  Share2, 
  Sparkles, 
  DollarSign, 
  Briefcase, 
  MapPin, 
  Calendar,
  Copy,
  Check
} from 'lucide-react';

export const ItineraryAssistant: React.FC = () => {
  const [profile, setProfile] = useState<'solo' | 'family' | 'adventurer'>('solo');
  const [duration, setDuration] = useState<'24h' | '48h' | '72h'>('48h');
  const [copied, setCopied] = useState(false);

  // Find matching itinerary
  const currentItinerary: DynamicItinerary = DYNAMIC_ITINERARIES.find(
    it => it.profile === profile && it.duration === duration
  ) || DYNAMIC_ITINERARIES[0];

  const handleCopy = () => {
    const textToCopy = `Visit Pandeglang Itinerary: ${currentItinerary.title}\nProfile: ${profile.toUpperCase()} | Duration: ${duration}\nEstimated Budget: ${currentItinerary.budgetEstimate.comfort}\nSchedule:\n` +
      currentItinerary.schedule.map(s => `${s.time}: ${s.activity} (${s.location})`).join('\n');
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadText = () => {
    const content = `==========================================================\n` +
      `VISIT PANDEGLANG - OFFICIAL EXPEDITION ITINERARY\n` +
      `The Sunset of Java • Pandeglang Regency, Banten\n` +
      `==========================================================\n\n` +
      `PLAN: ${currentItinerary.title}\n` +
      `TAGLINE: ${currentItinerary.tagline}\n` +
      `TRAVELER PROFILE: ${profile.toUpperCase()}\n` +
      `DURATION: ${duration}\n\n` +
      `ESTIMATED BUDGET:\n` +
      `- Budget / Backpacker: ${currentItinerary.budgetEstimate.budget}\n` +
      `- Comfort / Mid-Range: ${currentItinerary.budgetEstimate.comfort}\n` +
      `- Luxury / Private: ${currentItinerary.budgetEstimate.luxury}\n\n` +
      `RECOMMENDED PACKING GEAR:\n` +
      currentItinerary.recommendedGear.map(g => `* ${g}`).join('\n') + `\n\n` +
      `DETAILED HOUR-BY-HOUR SCHEDULE:\n` +
      currentItinerary.schedule.map(s => `[${s.time}] ${s.activity}\n  Zone: ${s.zone} | Location: ${s.location}\n  Notes: ${s.notes}\n`).join('\n') +
      `\n==========================================================\n` +
      `Emergency Contact TNUK: +62 253 880 864 | SAR Banten: +62 254 397 788\n` +
      `Issued by Dinas Pariwisata dan Kebudayaan Kabupaten Pandeglang\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Pandeglang-${profile}-${duration}-Itinerary.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="itinerary-assistant" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0F382C] text-xs font-bold tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>UX Micro-Flow Planner</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F382C]">
          3-Step Dynamic Itinerary Assistant
        </h2>
        <p className="mt-3 text-[#555B6E] text-base sm:text-lg">
          Select your travel persona and window of exploration. Our system dynamically computes hour-by-hour schedules, budget estimates, and field-tested gear advice.
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[0_12px_40px_-8px_rgba(15,56,44,0.12)] border border-[#E9ECEF]">
        {/* Step 1 & Step 2 Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-[#E9ECEF]">
          {/* STEP 1: Traveler Profile */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#0F382C] block mb-3">
              Step 1: Select Traveler Profile
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Solo */}
              <button
                type="button"
                onClick={() => setProfile('solo')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  profile === 'solo'
                    ? 'border-[#0F382C] bg-[#0F382C] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  profile === 'solo' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-[#0F382C]'
                }`}>
                  <User className="w-4 h-4" />
                </div>
                <span className="font-bold block text-sm">Solo Explorer</span>
                <span className={`text-[11px] block mt-0.5 ${profile === 'solo' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Agile, cultural immersion & sunset chase
                </span>
              </button>

              {/* Family */}
              <button
                type="button"
                onClick={() => setProfile('family')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  profile === 'family'
                    ? 'border-[#1B4965] bg-[#1B4965] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  profile === 'family' ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#1B4965]'
                }`}>
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-bold block text-sm">Family & Leisure</span>
                <span className={`text-[11px] block mt-0.5 ${profile === 'family' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Calm sandy beaches, resorts & sweet crafts
                </span>
              </button>

              {/* Adventurer */}
              <button
                type="button"
                onClick={() => setProfile('adventurer')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  profile === 'adventurer'
                    ? 'border-[#E76F51] bg-[#E76F51] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  profile === 'adventurer' ? 'bg-white/20 text-white' : 'bg-orange-100 text-[#E76F51]'
                }`}>
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-bold block text-sm">Eco-Adventurer</span>
                <span className={`text-[11px] block mt-0.5 ${profile === 'adventurer' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Volcano summit, jungle trekking & canyons
                </span>
              </button>
            </div>
          </div>

          {/* STEP 2: Duration */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#0F382C] block mb-3">
              Step 2: Choose Exploration Duration
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setDuration('24h')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  duration === '24h'
                    ? 'border-[#0F382C] bg-[#0F382C] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <span className="text-xs font-mono font-bold block">24 Hours</span>
                <span className="font-bold block text-sm mt-0.5">Express Sprint</span>
                <span className={`text-[11px] block mt-0.5 ${duration === '24h' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Dawn springs to twilight sunset
                </span>
              </button>

              <button
                type="button"
                onClick={() => setDuration('48h')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  duration === '48h'
                    ? 'border-[#0F382C] bg-[#0F382C] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <span className="text-xs font-mono font-bold block">48 Hours</span>
                <span className="font-bold block text-sm mt-0.5">Weekend Escape</span>
                <span className={`text-[11px] block mt-0.5 ${duration === '48h' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Coast, island boats & culture
                </span>
              </button>

              <button
                type="button"
                onClick={() => setDuration('72h')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  duration === '72h'
                    ? 'border-[#0F382C] bg-[#0F382C] text-white shadow-md scale-102'
                    : 'border-[#E9ECEF] bg-slate-50 hover:bg-slate-100 text-[#1A1A1A]'
                }`}
              >
                <span className="text-xs font-mono font-bold block">72 Hours+</span>
                <span className="font-bold block text-sm mt-0.5">Deep Expedition</span>
                <span className={`text-[11px] block mt-0.5 ${duration === '72h' ? 'text-white/80' : 'text-[#555B6E]'}`}>
                  Full Ujung Kulon core trek
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3: Instant Dynamic Output */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#0F382C] text-xs font-bold mb-2 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>Generated Custom Expedition Plan</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F382C]">
                {currentItinerary.title}
              </h3>
              <p className="text-[#555B6E] text-xs sm:text-sm mt-1">
                {currentItinerary.tagline}
              </p>
            </div>

            {/* Quick Actions: Download & Copy */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all text-[#1A1A1A]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#555B6E]" />
                    <span>Copy Route</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownloadText}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#0F382C] hover:bg-[#165342] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Download Route Sheet</span>
              </button>
            </div>
          </div>

          {/* Budget Breakdown & Gear Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Budget Estimate Card (6 cols) */}
            <div className="md:col-span-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0F382C]">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>Estimated Budget Tier (per person)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-[#555B6E] font-medium text-xs">Backpacker</span>
                  <span className="font-bold text-[#0F382C] text-xs sm:text-[13px] whitespace-nowrap mt-0 sm:mt-1">
                    {currentItinerary.budgetEstimate.budget}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border-2 border-[#0F382C] flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center shadow-xs">
                  <span className="text-[#0F382C] font-bold text-xs">Comfort (Rec.)</span>
                  <span className="font-bold text-[#0F382C] text-xs sm:text-[13px] whitespace-nowrap mt-0 sm:mt-1">
                    {currentItinerary.budgetEstimate.comfort}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-[#555B6E] font-medium text-xs">Luxury / Villa</span>
                  <span className="font-bold text-[#E76F51] text-xs sm:text-[13px] whitespace-nowrap mt-0 sm:mt-1">
                    {currentItinerary.budgetEstimate.luxury}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Gear Card (6 cols) */}
            <div className="md:col-span-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0F382C]">
                <Briefcase className="w-4 h-4 text-[#E76F51]" />
                <span>Essential Gear & Packing List</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentItinerary.recommendedGear.map((gear, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#1A1A1A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hour-by-Hour Timeline Schedule */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F382C] mb-4">
              Hour-by-Hour Dynamic Expedition Schedule
            </h4>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {currentItinerary.schedule.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4 pl-1">
                  {/* Timeline Node Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#0F382C] text-amber-300 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white z-10">
                    {index + 1}
                  </div>

                  {/* Card Block */}
                  <div className="flex-1 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0F382C]/10 text-[#0F382C] font-mono font-bold text-xs">
                          {item.time}
                        </span>
                        <span className="text-xs font-semibold text-[#1B4965] flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location} ({item.zone} Zone)
                        </span>
                      </div>

                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-slate-200 text-[#555B6E] uppercase">
                        {item.type}
                      </span>
                    </div>

                    <h5 className="font-bold text-[#1A1A1A] text-sm sm:text-base">
                      {item.activity}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#555B6E] mt-1">
                      {item.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

