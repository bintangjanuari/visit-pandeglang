'use client';

import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Map, 
  PhoneCall, 
  Printer, 
  Check 
} from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitorGuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simulate generation of download
    const guideText = `========================================================================\n` +
      `OFFICIAL VISITOR GUIDE & SAFETY MANUAL\n` +
      `PANDEGLANG REGENCY, BANTEN - "THE SUNSET OF JAVA"\n` +
      `Dinas Pariwisata dan Kebudayaan Kabupaten Pandeglang\n` +
      `========================================================================\n\n` +
      `1. BIOSPHERE ENTRY PERMITS (UJUNG KULON NATIONAL PARK)\n` +
      `- Standard SIMAKSI entry permits are mandatory for all visitors entering the core zone.\n` +
      `- Certified local HPI ranger escort is strictly required on all forest and savannah tracks.\n` +
      `- Camera drone permits must be cleared at Balai TNUK Labuan or Tamanjaya post.\n\n` +
      `2. CONSERVATION PROTOCOLS\n` +
      `- Maintain minimum 50m distance from any wildlife encountered in Cidaon grazing ground.\n` +
      `- No single-use plastics permitted beyond Sumur buffer posts.\n` +
      `- Use reef-safe mineral sunblock on Peucang Island and Tanjung Lesung coral gardens.\n\n` +
      `3. EMERGENCY CONTACT HOTLINES\n` +
      `- TNUK Ranger Command: +62 253 880 864\n` +
      `- SAR Banten Marine Dispatch: +62 254 397 788\n` +
      `- Tourist Police Station: +62 253 201 110\n` +
      `- RSUD Berkah General Hospital: +62 253 202 056\n\n` +
      `4. ACCREDITED HIGHWAY & TOLL ACCESS\n` +
      `- Jakarta to Pandeglang via Serang Timur Toll Exit (approx. 2.0 hrs)\n` +
      `- Direct Coastal Expressway corridor to Panimbang / Tanjung Lesung (3.5 hrs)\n` +
      `- Daily public commuter shuttles operate from Kalideres & Kampung Rambutan to Labuan.\n\n` +
      `Visit Pandeglang 2026/2027 • Wonderful Indonesia Accredited\n`;

    const blob = new Blob([guideText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Visit-Pandeglang-Official-Visitor-Guide.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#F8F9FA] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-[#1A1A1A] relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0F382C] text-white p-6 sm:p-8 rounded-t-3xl relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-[#E76F51] text-[11px] font-bold uppercase tracking-wider">
              Official Document
            </span>
            <span className="text-xs text-emerald-200">2026 / 2027 Edition</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Pandeglang Visitor Field Guide & Safety Manual
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Complete logistical briefing, UNESCO reserve regulations, permit protocols, and offline emergency directories.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
          {/* Official Accreditation note */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0F382C] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#0F382C] block">
                Issued by Dinas Pariwisata dan Kebudayaan Kabupaten Pandeglang
              </span>
              <p className="text-[#555B6E] text-xs mt-0.5">
                In formal partnership with Balai Taman Nasional Ujung Kulon and the Ministry of Tourism & Creative Economy (Wonderful Indonesia).
              </p>
            </div>
          </div>

          {/* Section 1: Permits */}
          <div>
            <h4 className="font-bold text-sm text-[#0F382C] uppercase tracking-wider mb-2">
              1. Permits & Biosphere Regulations
            </h4>
            <div className="space-y-2 text-[#555B6E]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>SIMAKSI National Park Entry:</strong> Available online or on-site at Tamanjaya & Sumur ranger posts. Passport / KTP required.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Certified Eco-Guides:</strong> Independent forest treks require certified HPI Pandeglang ranger escorts to safeguard wildlife corridors.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Drone & Commercial Media:</strong> Commercial aerial filming requires prior clearance from Balai TNUK Labuan headquarters.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Code of Conduct */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <h4 className="font-bold text-xs text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#E76F51]" />
              <span>Conservation Etiquette</span>
            </h4>
            <ul className="list-disc list-inside text-xs text-amber-900 space-y-1">
              <li>Strict Zero-Plastic policy on Peucang Island and river safaris.</li>
              <li>Maintain silent vigil in Cidaon savannah; no artificial lighting at night.</li>
              <li>Do not touch, anchor on, or step on shallow coral reefs at Tanjung Lesung & Liwungan.</li>
            </ul>
          </div>

          {/* Section 3: Emergency Dispatch */}
          <div>
            <h4 className="font-bold text-sm text-[#0F382C] uppercase tracking-wider mb-2">
              2. 24/7 Emergency Dispatch
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-[#555B6E] block font-medium">Ujung Kulon Ranger Command:</span>
                <span className="font-mono font-bold text-[#0F382C]">+62 253 880 864</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-[#555B6E] block font-medium">SAR Banten Marine Rescue:</span>
                <span className="font-mono font-bold text-[#1B4965]">+62 254 397 788</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-[#555B6E] block font-medium">Pandeglang Tourist Police:</span>
                <span className="font-mono font-bold text-[#0F382C]">+62 253 201 110</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-[#555B6E] block font-medium">RSUD Berkah General Hospital:</span>
                <span className="font-mono font-bold text-red-600">+62 253 202 056</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-100 rounded-b-3xl border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#555B6E]">
            Format: Text & Printable PDF Ready (Includes offline GPS map coords)
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#E76F51] hover:bg-[#d65f42] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Guide Pack</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

