'use client';

import React, { useState } from 'react';
import { 
  CULTURAL_STORIES 
} from '../data/pandeglangData';
import { 
  Volume2, 
  Play, 
  Pause, 
  Quote, 
  Sparkles, 
  Flame, 
  Fish, 
  ShieldCheck, 
  Music, 
  Compass, 
  ChevronRight,
  Info
} from 'lucide-react';

export const CulturalNarrative: React.FC = () => {
  const [activeStoryId, setActiveStoryId] = useState<string>('rampak-beduk');
  const [isPlayingBeat, setIsPlayingBeat] = useState<boolean>(false);
  const [drumBeatIndex, setDrumBeatIndex] = useState<number>(0);

  const activeStory = CULTURAL_STORIES.find(s => s.id === activeStoryId) || CULTURAL_STORIES[0];

  // Interactive Beduk Drum Simulator
  const handleDrumHit = (drumType: string) => {
    setDrumBeatIndex(prev => (prev + 1) % 6);
  };

  const toggleAutoBeat = () => {
    setIsPlayingBeat(!isPlayingBeat);
  };

  return (
    <section id="culture" className="py-20 sm:py-28 bg-[#F8F9FA] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#E76F51] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Living Heritage & Community Resilience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F382C]">
            Echoes of the Sunda Strait
          </h2>
          <p className="mt-3 text-[#555B6E] text-base sm:text-lg">
            Beyond untamed geography lies a profound tapestry of human connection — from the syncopated thunder of Rampak Beduk drums to the lantern-lit bagan fishermen and guardians of the prehistoric rhino.
          </p>
        </div>

        {/* 3 Story Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {CULTURAL_STORIES.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActiveStoryId(story.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 border ${
                activeStoryId === story.id
                  ? 'bg-[#0F382C] text-white border-[#0F382C] shadow-lg scale-102'
                  : 'bg-white text-[#555B6E] border-[#E9ECEF] hover:bg-slate-100'
              }`}
            >
              {story.id === 'rampak-beduk' && <Music className="w-4 h-4 text-amber-300" />}
              {story.id === 'maritime-bagan' && <Fish className="w-4 h-4 text-sky-400" />}
              {story.id === 'rhino-guardians' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
              <span>{story.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_-4px_rgba(15,56,44,0.06)] border border-[#E9ECEF]">
          {/* Left Column: Story Content & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E76F51]/10 text-[#E76F51] text-xs font-bold uppercase tracking-wider">
              {activeStory.tag}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F382C] tracking-tight leading-snug">
              {activeStory.title}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#1B4965]">
              {activeStory.subtitle}
            </p>

            {/* Elder Quote Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F382C]/5 border-l-4 border-[#0F382C] relative">
              <Quote className="w-6 h-6 text-[#0F382C]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-base sm:text-lg text-[#0F382C] leading-relaxed">
                {activeStory.quote}
              </p>
              <p className="mt-3 text-xs font-bold text-[#555B6E] uppercase tracking-wider">
                — {activeStory.storyteller}
              </p>
            </div>

            <p className="text-[#555B6E] text-sm sm:text-base leading-relaxed">
              {activeStory.content}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#1A1A1A]">
              <span className="font-bold text-[#0F382C] block mb-1">Cultural Significance & Protection:</span>
              <p className="text-[#555B6E]">{activeStory.culturalRole}</p>
            </div>
          </div>

          {/* Right Column: Interactive Multimedia Widget (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {activeStory.id === 'rampak-beduk' ? (
              /* Rampak Beduk Interactive Drum Simulator */
              <div className="bg-[#0F382C] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-900/40 text-center">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono uppercase text-amber-200 flex items-center gap-1.5">
                    <Music className="w-4 h-4 text-[#E76F51]" />
                    Interactive Drum Pad
                  </span>
                  <span className="text-[11px] text-white/60 font-mono">Banten Rhythm Lab</span>
                </div>

                <p className="text-xs text-white/80 mb-6">
                  Tap the virtual Beduk percussion heads to trigger the syncopated martial rhythm of Menes.
                </p>

                {/* Simulated Drum Heads */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => handleDrumHit('beduk-gedhe')}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-[#165342] to-[#0B2920] border-2 border-amber-300/40 hover:border-amber-300 flex flex-col items-center justify-center p-3 text-white shadow-lg active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Flame className="w-6 h-6 text-amber-300" />
                    </div>
                    <span className="font-serif font-bold text-sm">Beduk Ageng</span>
                    <span className="text-[10px] text-emerald-200 font-mono">Bass Pulse (Dhum)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDrumHit('beduk-cilik')}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-[#1B4965] to-[#0E2838] border-2 border-sky-300/40 hover:border-sky-300 flex flex-col items-center justify-center p-3 text-white shadow-lg active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-sky-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-sky-300" />
                    </div>
                    <span className="font-serif font-bold text-sm">Beduk Cilik</span>
                    <span className="text-[10px] text-sky-200 font-mono">Snap Treble (Tak)</span>
                  </button>
                </div>

                {/* Visualizer Metronome Bars */}
                <div className="p-3 bg-black/30 rounded-xl flex items-center justify-between gap-1 mb-4">
                  {[0, 1, 2, 3, 4, 5].map((step) => (
                    <div
                      key={step}
                      className={`h-6 flex-1 rounded-sm transition-all ${
                        drumBeatIndex === step ? 'bg-amber-400 scale-y-125' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-[11px] text-white/70 italic">
                  &quot;Tepak, tung, tak, dhum!&quot; — Synchronized by 6 master drummers simultaneously.
                </div>
              </div>
            ) : activeStory.id === 'maritime-bagan' ? (
              /* Bagan Floating Platform Showcase Card */
              <div className="bg-[#1B4965] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-sky-900/40">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono uppercase text-sky-200 flex items-center gap-1.5">
                    <Fish className="w-4 h-4 text-amber-300" />
                    Maritime Tradition
                  </span>
                  <span className="text-[11px] text-white/60">Labuan Harbor</span>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" 
                    alt="Traditional Bagan Wooden Platform" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-medium">Bagan Platform at Dusk on Sunda Strait</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/80">
                  <p>• Over 120 traditional bamboo bagan stations floating off Labuan and Panimbang.</p>
                  <p>• Sustainable scoop nets preventing benthic seafloor damage.</p>
                  <p>• Direct-to-table smoked fish markets operating every evening at Labuan docks.</p>
                </div>
              </div>
            ) : (
              /* Rhino Protection Unit Card */
              <div className="bg-[#0F382C] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-900/40">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono uppercase text-emerald-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#E76F51]" />
                    Rhino Protection Unit (RPU)
                  </span>
                  <span className="text-[11px] text-white/60">Taman Nasional UK</span>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80" 
                    alt="Ujung Kulon Rainforest Canopy" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-medium">Untouched Primary Lowland Rainforest</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/80">
                  <p>• 24/7 anti-poaching patrols across 122,956 hectares of marine & terrestrial reserve.</p>
                  <p>• Camera trap grid documenting vital calf births and maternal behaviors.</p>
                  <p>• 100% community-led homestays supporting local buffer village schools.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

