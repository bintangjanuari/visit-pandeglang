'use client';

import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Compass, 
  Waves, 
  TreePine, 
  Sparkles,
  Mountain,
  SunMedium
} from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenGuide: () => void;
  onQuickFinderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenGuide,
  onQuickFinderClick
}) => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-24 sm:pb-32 overflow-hidden bg-[#0F382C]"
    >
      {/* Visual Backdrop: Multi-layered cinematic gradient art representing Tanjung Lesung coast & Mount Karang silhouette */}
      <div className="absolute inset-0 z-0">
        {/* Base dark emerald to coastal cerulean gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F382C] via-[#0F382C]/90 to-[#1B4965]" />

        {/* Ambient sunset glow orb simulating 'The Sunset of Java' over Krakatau waters */}
        <div 
          className="absolute top-1/4 right-5 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#E76F51]/30 via-[#F4A261]/25 to-transparent blur-3xl pointer-events-none animate-pulse" 
          style={{ animationDuration: '8s' }}
        />

        {/* Top left emerald mist orb */}
        <div 
          className="absolute top-10 left-[-5%] w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#165342]/40 blur-3xl pointer-events-none" 
        />

        {/* SVG Landscape Silhouette: Dramatic Mount Karang peaks meeting Tanjung Lesung wave lines */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-48 sm:h-72 object-cover opacity-25 pointer-events-none" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Distant Mount Karang Peaks */}
          <path 
            fill="#09251D" 
            fillOpacity="0.8" 
            d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,186.7C840,160,960,64,1080,69.3C1200,75,1320,181,1380,234.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          {/* Coastal Swell Wave Overlay */}
          <path 
            fill="#1B4965" 
            fillOpacity="0.6" 
            d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,218.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F8F9FA_1px,transparent_1px)] [background-size:24px_24px]" 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-sm animate-fade-in">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span>Official Regional Discovery Platform • Pandeglang Regency, Banten</span>
        </div>

        {/* Master Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12] max-w-5xl mx-auto drop-shadow-md">
          Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-[#E76F51]">Untamed Beauty</span> at the Edge of Java
        </h1>

        {/* Subheadline with authentic regional resonance */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-sans font-normal leading-relaxed text-balance">
          From the prehistoric sanctuary of Ujung Kulon to pristine coastlines and centuries of cultural heritage — experience Pandeglang like never before.
        </p>

        {/* Dual CTAs Setup */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {/* Primary Solid Button */}
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#E76F51] hover:bg-[#d65f42] text-white font-semibold text-base shadow-[0_10px_25px_-5px_rgba(231,111,81,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(231,111,81,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F382C]"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Ghost Button with micro-icon */}
          <button
            type="button"
            onClick={onOpenGuide}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/25 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <FileText className="w-5 h-5 text-amber-300" />
            <span>Download Visitor Guide</span>
            <span className="text-[11px] px-1.5 py-0.5 rounded bg-white/20 text-white/90 font-mono ml-1">PDF</span>
          </button>
        </div>

        {/* Quick Finder Prompt */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onQuickFinderClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200 hover:text-white transition-colors underline underline-offset-4 decoration-emerald-400/40 hover:decoration-white"
          >
            <span>Or use the interactive trip finder to match your dates & style</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Metrics Bar / Social Proof Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 text-white">
            {/* Metric 1 */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                <span>120+</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                Curated Spots
              </p>
              <span className="text-[10px] text-white/50">Verified Attractions</span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                <Waves className="w-5 h-5 text-sky-300" />
                <span>35</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                Coastal Destinations
              </p>
              <span className="text-[10px] text-white/50">Islands & Coral Bays</span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
              <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-serif font-bold text-emerald-300">
                <ShieldCheck className="w-5 h-5 text-[#E76F51]" />
                <span>UNESCO</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                World Heritage Site
              </p>
              <span className="text-[10px] text-white/50">Ujung Kulon National Park</span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                <Mountain className="w-5 h-5 text-emerald-300" />
                <span>18</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
                Highland Springs
              </p>
              <span className="text-[10px] text-white/50">Geothermal & Citaman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ambient Atmosphere Badge */}
      <div className="hidden lg:flex absolute bottom-6 right-8 items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs z-20">
        <SunMedium className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '24s' }} />
        <div>
          <p className="font-semibold text-white">The Sunset of Java</p>
          <p className="text-white/70 text-[11px]">Sunda Strait Golden Horizon</p>
        </div>
      </div>
    </section>
  );
};

