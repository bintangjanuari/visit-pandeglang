'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  PhoneCall,
  FileText,
  Menu,
  X,
  Sun,
  Volume2,
  VolumeX,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
  onSelectZone: (zoneId: 'north' | 'central' | 'south') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide, onSelectZone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [lang, setLang] = useState<'EN' | 'ID'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-2 bg-[#F8F9FA]/90 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(15,56,44,0.08)] border-b border-[#E9ECEF]'
          : 'py-2.5 sm:py-3 bg-gradient-to-b from-[#0F382C]/90 via-[#0F382C]/50 to-transparent'
        }`}
    >
      {/* Top utility ticker - only shown when not deeply scrolled */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2 text-xs text-white/80">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E76F51]" />
                Official Regional Portal • Government of Pandeglang Regency, Banten
              </span>
              <span className="hidden xl:inline-block text-white/40">•</span>
              <span className="hidden xl:flex items-center gap-1 text-white/90">
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                Tanjung Lesung: 28°C • Coastal Sunset 17:58 WIB • Calm Swell
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleAudio}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] transition-colors"
                title="Toggle ambient Sunda Strait ocean breeze audio"
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="w-3 h-3 text-emerald-300 animate-pulse" />
                    <span>Coastal Ambience: Active</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-white/70" />
                    <span>Sound Ambience</span>
                  </>
                )}
              </button>

              <div className="flex items-center bg-white/10 rounded-full p-0.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setLang('EN')}
                  className={`px-2 py-0.5 rounded-full font-medium transition-all ${lang === 'EN' ? 'bg-[#E76F51] text-white shadow-xs' : 'text-white/70 hover:text-white'
                    }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ID')}
                  className={`px-2 py-0.5 rounded-full font-medium transition-all ${lang === 'ID' ? 'bg-[#E76F51] text-white shadow-xs' : 'text-white/70 hover:text-white'
                    }`}
                >
                  ID
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E76F51] rounded-lg"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/30 shadow-md group-hover:scale-105 transition-transform shrink-0 bg-[#0F382C]">
            <img
              src="/logo.png"
              alt="Visit Pandeglang Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-serif tracking-wider text-base sm:text-lg font-bold transition-colors ${isScrolled ? 'text-[#0F382C]' : 'text-white'
                }`}>
                VISIT PANDEGLANG
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#E76F51] text-white">
                Banten
              </span>
            </div>
            <p className={`text-[10px] sm:text-xs tracking-widest uppercase font-medium transition-colors ${isScrolled ? 'text-[#555B6E]' : 'text-white/80'
              }`}>
              The Sunset of Java
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            type="button"
            onClick={() => scrollToSection('finder')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            Quick Finder
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('highlights')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            Curated Highlights
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('zone-map')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            3-Zone Map
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('culture')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            Cultural Heritage
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('itinerary-assistant')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            Itinerary Planner
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('emergency-directory')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isScrolled
                ? 'text-[#1A1A1A] hover:text-[#0F382C] hover:bg-black/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
          >
            Emergency & Directory
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenGuide}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${isScrolled
                ? 'border-[#0F382C]/20 text-[#0F382C] hover:bg-[#0F382C]/5'
                : 'border-white/30 text-white hover:bg-white/15'
              }`}
          >
            <FileText className="w-4 h-4 text-[#E76F51]" />
            <span>Visitor Guide</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('itinerary-assistant')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#E76F51] hover:bg-[#d65f42] text-white shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>Plan Expedition</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#0F382C] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2 bg-[#F8F9FA] text-[#1A1A1A] border-b border-[#E9ECEF] shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('finder')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#0F382C]" /> Quick Finder
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('highlights')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#0F382C]" /> Curated Bento Highlights
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('zone-map')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B4965]" /> 3-Zone Interactive Map
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('culture')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#E76F51]" /> Cultural Heritage & Stories
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('itinerary-assistant')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#0F382C]" /> 3-Step Dynamic Itinerary
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('emergency-directory')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-left font-medium"
            >
              <span className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-red-600" /> Emergency Hotline & Directory
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#0F382C] text-[#0F382C] font-semibold text-sm"
              >
                <FileText className="w-4 h-4 text-[#E76F51]" /> Download Official Visitor Guide
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('itinerary-assistant')}
                className="w-full py-3 rounded-xl bg-[#E76F51] text-white font-semibold text-sm shadow-md"
              >
                Launch Dynamic Itinerary Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

