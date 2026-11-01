'use client';

import React, { useState } from 'react';
import { 
  EMERGENCY_CONTACTS 
} from '../data/pandeglangData';
import { 
  PhoneCall, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Heart, 
  Check, 
  Compass, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="emergency-directory" className="bg-[#0A261E] text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= VERIFIED RESOURCE HUB: EMERGENCY HOTLINES ================= */}
        <div className="pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center border border-red-500/30">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Verified Emergency & Dispatch Hotlines
                </h3>
                <p className="text-xs text-white/70">
                  24/7 Official Command Center Numbers across Pandeglang Regency
                </p>
              </div>
            </div>

            <span className="text-xs text-emerald-300 font-mono">
              Always dial with country code +62
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_CONTACTS.map((contact, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-xs text-white">
                    {contact.name}
                  </h4>
                  <p className="text-[11px] text-white/60 mt-0.5">
                    {contact.role}
                  </p>
                  <span className="text-[10px] text-amber-200/80 block mt-1">
                    {contact.location}
                  </span>
                </div>

                <a 
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-600 text-white text-xs font-mono font-bold transition-colors shrink-0"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER MIDDLE: DIRECTORIES & BRANDING ================= */}
        <div className="py-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md shrink-0 bg-[#0F382C]">
                <img 
                  src="/logo.png" 
                  alt="Visit Pandeglang Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white tracking-wider block">
                  VISIT PANDEGLANG
                </span>
                <span className="text-xs tracking-widest uppercase text-white/70">
                  The Sunset of Java
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Official regional discovery and tourism platform of Pandeglang Regency, Banten Province. Committed to sustainable ecotourism, cultural preservation, and protecting the habitat of the critically endangered Javan Rhino.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-[#E76F51]" />
                <span>Accredited by Dinas Pariwisata dan Kebudayaan</span>
              </div>
              <p className="text-[11px] text-white/50 mt-0.5">
                Government of Pandeglang Regency • Wonderful Indonesia
              </p>
            </div>
          </div>

          {/* Directory Links: Destinations (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><a href="#highlights" className="hover:text-white transition-colors">Ujung Kulon National Park</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Tanjung Lesung SEZ</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Mount Karang Summit</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Citaman Megalithic Springs</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Cisolong Hot Springs</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Peucang Island Coral</a></li>
            </ul>
          </div>

          {/* Directory Links: Planning & Guides (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Travel Logistics
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><button onClick={onOpenGuide} className="hover:text-white transition-colors text-left">SIMAKSI Entry Permits</button></li>
              <li><a href="#itinerary-assistant" className="hover:text-white transition-colors">Itinerary Planner (24h/48h/72h)</a></li>
              <li><a href="#zone-map" className="hover:text-white transition-colors">3-Zone Territory Map</a></li>
              <li><button onClick={onOpenGuide} className="hover:text-white transition-colors text-left">Certified Guides (HPI)</button></li>
              <li><button onClick={onOpenGuide} className="hover:text-white transition-colors text-left">Toll Road & Shuttles</button></li>
              <li><button onClick={onOpenGuide} className="hover:text-white transition-colors text-left">Verified Homestays</button></li>
            </ul>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Regional Tourism Dispatch
            </h4>
            <p className="text-xs text-white/70">
              Receive monthly seasonal weather briefings, tidal advice, and invitations to the Rampak Beduk Championship and Sunset Regatta.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#E76F51]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#E76F51] hover:bg-[#d65f42] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                >
                  Subscribe
                </button>
              </div>

              {error && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{error}</span>
                </p>
              )}

              {subscribed && (
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Subscribed! Check your inbox for the Pandeglang Welcome Brief.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM: LEGAL & ACCESSIBILITY ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>© 2026 Bintang Al Akbar Januari. All rights reserved.</p>
            <p className="text-[11px] text-white/40 mt-0.5">
              Strict WCAG AAA Accessible Typography & High-Contrast Design System.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenGuide} className="hover:text-white transition-colors">
              Visitor Privacy Policy
            </button>
            <button onClick={onOpenGuide} className="hover:text-white transition-colors">
              Conservation Charter
            </button>
            <button onClick={onOpenGuide} className="hover:text-white transition-colors">
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
