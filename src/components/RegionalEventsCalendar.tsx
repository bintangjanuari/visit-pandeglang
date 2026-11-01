'use client';

import React from 'react';
import { 
  REGIONAL_EVENTS 
} from '../data/pandeglangData';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Hotel, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface EventsProps {
  onOpenGuide: () => void;
}

export const RegionalEventsCalendar: React.FC<EventsProps> = ({ onOpenGuide }) => {
  return (
    <section className="py-20 bg-[#F4F1DE]/40 border-y border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0F382C] text-xs font-bold tracking-wider uppercase mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>Official 2026 / 2027 Calendar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F382C] tracking-tight">
              Festivals & Ecotourism Celebrations
            </h2>
            <p className="mt-2 text-[#555B6E] text-base max-w-xl">
              Experience the vibrant spirit of Pandeglang during our flagship annual heritage regattas, traditional percussions championships, and wilderness runs.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenGuide}
            className="self-start md:self-auto px-4 py-2 rounded-xl border border-[#0F382C] text-[#0F382C] hover:bg-[#0F382C]/5 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <span>Download Annual Event Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONAL_EVENTS.map((event, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E9ECEF] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#E76F51] bg-[#E76F51]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                  {event.month}
                </span>

                <h3 className="font-serif font-bold text-lg text-[#0F382C] mt-1 mb-2">
                  {event.title}
                </h3>

                <p className="text-xs text-[#1B4965] font-medium flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#E76F51]" />
                  <span>{event.location}</span>
                </p>

                <p className="text-xs text-[#555B6E] leading-relaxed">
                  {event.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0F382C]">
                <span>{event.category}</span>
                <span className="text-emerald-700">Official Calendar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Stay & Eco-Lodge Teaser Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F382C] via-[#0F382C] to-[#1B4965] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Hotel className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold text-amber-200 tracking-wider">
                  Accredited Lodging
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/30 text-[10px] text-emerald-200 font-mono">
                  CHSE Verified
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                Verified Homestay & Eco-Resort Registry
              </h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
                Browse our directory of 65+ certified coastal eco-resorts, family homestays in Menes, and national park basecamps.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={onOpenGuide}
              className="w-full lg:w-auto px-6 py-3 rounded-xl bg-[#E76F51] hover:bg-[#d65f42] text-white font-semibold text-xs sm:text-sm shadow-md transition-all text-center"
            >
              Access Accommodation Directory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

