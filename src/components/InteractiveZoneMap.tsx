'use client';

import React, { useState } from 'react';
import { 
  ZONES, 
  ZoneInfo 
} from '../data/pandeglangData';
import { 
  MapPin, 
  Navigation, 
  Mountain, 
  Waves, 
  Compass, 
  Clock, 
  Thermometer, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface ZoneMapProps {
  selectedZoneId?: string;
  onZoneSelect?: (zoneId: 'north' | 'central' | 'south') => void;
}

export const InteractiveZoneMap: React.FC<ZoneMapProps> = ({
  selectedZoneId = 'south',
  onZoneSelect
}) => {
  const [activeZoneId, setActiveZoneId] = useState<'north' | 'central' | 'south'>('south');

  const activeZone = ZONES.find(z => z.id === activeZoneId) || ZONES[2];

  const handleZoneClick = (zoneId: 'north' | 'central' | 'south') => {
    setActiveZoneId(zoneId);
    if (onZoneSelect) {
      onZoneSelect(zoneId);
    }
  };

  return (
    <section id="zone-map" className="py-20 sm:py-28 bg-[#0F382C] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4965]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E76F51]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>Regional Territory Exploration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            The 3 Discovery Zones of Pandeglang
          </h2>
          <p className="mt-3 text-white/80 text-base sm:text-lg">
            From the misty volcanic peaks of the North to the ancient living rainforests and wild coastlines of the Far South. Select a zone to explore terrain, travel times, and key waypoints.
          </p>

          {/* Zone Selector Segmented Pill Bar */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 max-w-full overflow-x-auto">
            {ZONES.map((zone) => (
              <button
                key={zone.id}
                type="button"
                onClick={() => handleZoneClick(zone.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeZoneId === zone.id
                    ? 'bg-[#E76F51] text-white shadow-lg scale-102'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${
                  zone.id === 'north' ? 'bg-emerald-400' : zone.id === 'central' ? 'bg-sky-400' : 'bg-amber-300'
                }`} />
                <span>{zone.name}: {zone.id === 'north' ? 'Highlands' : zone.id === 'central' ? 'Culture & Coast' : 'Conservation'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Workspace: Interactive Vector Map + Dynamic Zone Intel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Vector Schematic Map (7 cols) */}
          <div className="lg:col-span-7 bg-black/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5" />
                Pandeglang Peninsula Schematic • West Banten
              </span>
              <span className="text-[11px] text-white/60">
                Interactive Vector Map
              </span>
            </div>

            {/* Custom SVG Map Representation of Pandeglang */}
            <div className="relative w-full aspect-4/3 flex items-center justify-center py-4">
              <svg 
                viewBox="0 0 650 480" 
                className="w-full h-full max-h-[420px] drop-shadow-xl select-none"
              >
                <defs>
                  {/* Gradients for active highlights */}
                  <linearGradient id="northGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0F382C" />
                    <stop offset="100%" stopColor="#1B4965" />
                  </linearGradient>
                  <linearGradient id="centralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B4965" />
                    <stop offset="100%" stopColor="#2B6E96" />
                  </linearGradient>
                  <linearGradient id="southGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E76F51" />
                    <stop offset="100%" stopColor="#9C381E" />
                  </linearGradient>
                </defs>

                {/* Ocean Water Contour */}
                <rect width="650" height="480" fill="transparent" />

                {/* 1. NORTH ZONE POLYGON PATH (Mt Karang, Cadasari, Cisolong, Citaman) */}
                <g 
                  onClick={() => handleZoneClick('north')}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  <path
                    d="M 330 30 C 430 35, 520 70, 550 140 C 510 170, 440 185, 360 175 C 290 170, 260 130, 270 90 Z"
                    fill={activeZoneId === 'north' ? '#165342' : '#0B2920'}
                    stroke={activeZoneId === 'north' ? '#5EEAD4' : '#2D6A58'}
                    strokeWidth={activeZoneId === 'north' ? '3' : '1.5'}
                    className="hover:fill-[#1b614d] transition-colors"
                  />
                  {/* Waypoint: Mount Karang */}
                  <circle cx="410" cy="100" r="7" fill="#F4A261" className="animate-pulse" />
                  <text x="425" y="105" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    Mt. Karang (1,778m)
                  </text>
                  {/* Waypoint: Cisolong */}
                  <circle cx="340" cy="130" r="5" fill="#5EEAD4" />
                  <text x="350" y="134" fill="#E9ECEF" fontSize="10" fontFamily="sans-serif">
                    Cisolong Hot Springs
                  </text>
                  <text x="360" y="65" fill="#86EFAC" fontSize="13" fontWeight="bold" fontFamily="serif">
                    NORTH ZONE
                  </text>
                </g>

                {/* 2. CENTRAL ZONE POLYGON PATH (Menes, Labuan Port, Carita Beach, Panimbang) */}
                <g 
                  onClick={() => handleZoneClick('central')}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  <path
                    d="M 270 90 C 260 130, 290 170, 360 175 C 440 185, 510 170, 550 140 C 560 210, 510 270, 430 280 C 320 290, 220 270, 190 220 C 170 180, 200 120, 270 90 Z"
                    fill={activeZoneId === 'central' ? '#1B4965' : '#0E2838'}
                    stroke={activeZoneId === 'central' ? '#38BDF8' : '#1D455E'}
                    strokeWidth={activeZoneId === 'central' ? '3' : '1.5'}
                    className="hover:fill-[#235878] transition-colors"
                  />
                  {/* Waypoint: Carita Beach */}
                  <circle cx="210" cy="180" r="6" fill="#38BDF8" />
                  <text x="225" y="184" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    Carita Coast
                  </text>
                  {/* Waypoint: Labuan Port */}
                  <circle cx="240" cy="210" r="6" fill="#F4A261" />
                  <text x="255" y="214" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    Labuan Port
                  </text>
                  {/* Waypoint: Menes */}
                  <circle cx="360" cy="225" r="6" fill="#FCD34D" />
                  <text x="375" y="229" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    Menes (Crafts)
                  </text>
                  <text x="300" y="255" fill="#7DD3FC" fontSize="13" fontWeight="bold" fontFamily="serif">
                    CENTRAL ZONE
                  </text>
                </g>

                {/* 3. SOUTH ZONE POLYGON PATH (Tanjung Lesung, Sumur, Ujung Kulon Peninsula, Peucang) */}
                <g 
                  onClick={() => handleZoneClick('south')}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  <path
                    d="M 190 220 C 220 270, 320 290, 430 280 C 470 330, 430 400, 340 420 C 240 435, 140 430, 90 390 C 40 350, 40 280, 90 270 C 130 260, 160 240, 190 220 Z"
                    fill={activeZoneId === 'south' ? '#A84832' : '#4A1D13'}
                    stroke={activeZoneId === 'south' ? '#FDBA74' : '#8A3723'}
                    strokeWidth={activeZoneId === 'south' ? '3' : '1.5'}
                    className="hover:fill-[#bd5239] transition-colors"
                  />
                  {/* Waypoint: Tanjung Lesung */}
                  <circle cx="160" cy="255" r="7" fill="#F4A261" className="animate-pulse" />
                  <text x="175" y="259" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    Tanjung Lesung SEZ
                  </text>
                  {/* Waypoint: Sumur Coast */}
                  <circle cx="140" cy="330" r="6" fill="#FFFFFF" />
                  <text x="155" y="334" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif">
                    Sumur Gateway
                  </text>
                  {/* Waypoint: Peucang Island */}
                  <circle cx="65" cy="310" r="5" fill="#38BDF8" />
                  <text x="25" y="300" fill="#BAE6FD" fontSize="10" fontFamily="sans-serif">
                    Peucang Is.
                  </text>
                  {/* Waypoint: Ujung Kulon Core */}
                  <circle cx="85" cy="360" r="7" fill="#22C55E" />
                  <text x="95" y="380" fill="#86EFAC" fontSize="12" fontWeight="bold" fontFamily="serif">
                    Ujung Kulon (UNESCO)
                  </text>
                  <text x="220" y="390" fill="#FDBA74" fontSize="13" fontWeight="bold" fontFamily="serif">
                    SOUTH ZONE
                  </text>
                </g>
              </svg>
            </div>

            {/* Map Legend Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> North (Highlands)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Central (Culture)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E76F51]" /> South (Wild Wilds)
                </span>
              </div>
              <span className="font-mono text-emerald-300">Click zones to inspect intel</span>
            </div>
          </div>

          {/* Right Column: Dynamic Zone Intel Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white text-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-[#E9ECEF]">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
                  activeZone.id === 'north' ? 'bg-[#0F382C]' : activeZone.id === 'central' ? 'bg-[#1B4965]' : 'bg-[#E76F51]'
                }`}>
                  {activeZone.name}
                </span>

                <span className="text-xs font-medium text-[#555B6E] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#E76F51]" />
                  {activeZone.travelFromJakarta}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F382C]">
                {activeZone.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#E76F51] mt-1 mb-3">
                {activeZone.subtitle}
              </p>
              <p className="text-[#555B6E] text-xs sm:text-sm leading-relaxed mb-6">
                {activeZone.summary}
              </p>

              {/* Climate & Terrain Metric Grid */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs mb-6">
                <div>
                  <span className="text-[#555B6E] block font-medium">Elevation:</span>
                  <span className="font-bold text-[#0F382C]">{activeZone.elevation}</span>
                </div>
                <div>
                  <span className="text-[#555B6E] block font-medium">Climate & Temp:</span>
                  <span className="font-bold text-[#1B4965]">{activeZone.climate}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-[#555B6E] block font-medium mb-1">Key Administrative Districts:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeZone.keyDistricts.map((d, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[#1A1A1A] text-[11px] font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Curated Spots in this Zone */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F382C] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
                  <span>Key Waypoints & Attractions</span>
                </h4>
                <div className="space-y-2.5">
                  {activeZone.topSpots.map((spot, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[#1A1A1A] block">{spot.name}</span>
                        <span className="text-[#555B6E] text-[11px]">{spot.type}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#0F382C] bg-white px-2 py-1 rounded border border-slate-200">
                        {spot.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => {
                  const itEl = document.getElementById('itinerary-assistant');
                  if (itEl) itEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#0F382C] hover:bg-[#165342] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Generate Route for {activeZone.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

