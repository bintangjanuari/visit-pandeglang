'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { StickyQuickFinder } from '../components/StickyQuickFinder';
import { BentoGridHighlights } from '../components/BentoGridHighlights';
import { InteractiveZoneMap } from '../components/InteractiveZoneMap';
import { CulturalNarrative } from '../components/CulturalNarrative';
import { ItineraryAssistant } from '../components/ItineraryAssistant';
import { RegionalEventsCalendar } from '../components/RegionalEventsCalendar';
import { Footer } from '../components/Footer';
import { VisitorGuideModal } from '../components/VisitorGuideModal';
import { DESTINATIONS } from '../data/pandeglangData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);

  // Compute matched items count
  const matchedDestinations = DESTINATIONS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesZone = selectedZone === 'all' || item.zone === selectedZone;
    return matchesCategory && matchesZone;
  });

  const handleApplyFilters = () => {
    const highlightsElement = document.getElementById('highlights');
    if (highlightsElement) {
      highlightsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedDuration('all');
    setSelectedZone('all');
  };

  const handleExploreHero = () => {
    const highlightsElement = document.getElementById('highlights');
    if (highlightsElement) {
      highlightsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickFinderHero = () => {
    const finderElement = document.getElementById('finder');
    if (finderElement) {
      finderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZoneSelectFromMap = (zoneId: 'north' | 'central' | 'south') => {
    setSelectedZone(zoneId);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans relative selection:bg-[#E76F51]/20 selection:text-[#0F382C]">
      {/* 1. Sticky Glassmorphic Navbar */}
      <Navbar 
        onOpenGuide={() => setIsGuideModalOpen(true)}
        onSelectZone={(zoneId) => {
          setSelectedZone(zoneId);
          const mapEl = document.getElementById('zone-map');
          if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Hero Section with Cinematic Coastal & Mountain Visual */}
      <HeroSection 
        onExploreClick={handleExploreHero}
        onOpenGuide={() => setIsGuideModalOpen(true)}
        onQuickFinderClick={handleQuickFinderHero}
      />

      {/* 3. Sticky Quick-Finder (Interactive Modular Filter Bar) */}
      <StickyQuickFinder 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedDuration={selectedDuration}
        onSelectDuration={setSelectedDuration}
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
        matchCount={matchedDestinations.length}
      />

      {/* 4. Curated Highlights (Interactive Bento Grid Layout) */}
      <BentoGridHighlights 
        filterCategory={selectedCategory}
        filterZone={selectedZone}
        onSelectZone={handleZoneSelectFromMap}
      />

      {/* 5. 3-Zone Vector Interactive Map */}
      <InteractiveZoneMap 
        selectedZoneId={selectedZone === 'all' ? 'south' : selectedZone}
        onZoneSelect={handleZoneSelectFromMap}
      />

      {/* 6. Cultural Narrative & Identity (Rampak Beduk, Bagan, Conservation) */}
      <CulturalNarrative />

      {/* 7. 3-Step Dynamic Itinerary Assistant (UX Micro-Flow) */}
      <ItineraryAssistant />

      {/* 8. Regional Events Calendar & Verified Homestays */}
      <RegionalEventsCalendar 
        onOpenGuide={() => setIsGuideModalOpen(true)}
      />

      {/* 9. Verified Resource Hub & Footer */}
      <Footer 
        onOpenGuide={() => setIsGuideModalOpen(true)}
      />

      {/* 10. Visitor Guide Modal */}
      <VisitorGuideModal 
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </main>
  );
}
