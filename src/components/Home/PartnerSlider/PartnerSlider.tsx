"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Handshake } from 'lucide-react';

const partners = [
  { id: 1, name: "Pfizer", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Pfizer_logo.svg" },
  { id: 2, name: "Sanofi", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Sanofi_logo.svg" },
  { id: 3, name: "GSK", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/GSK_logo_2022.svg" },
  { id: 4, name: "Roche", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Roche_Logo.svg" },
  { id: 5, name: "Novartis", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Novartis_logo.svg" },
  { id: 6, name: "Bayer", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Bayer_logo.svg" },
];

const PartnerSlider = () => {
  // Seamless loop-এর জন্য লোগো রিপিট
  const infinitePartners = [...partners, ...partners, ...partners];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-blue-100 rotate-3 group-hover:rotate-0 transition-transform">
            <Handshake size={28} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Trusted by <span className="text-blue-600">Global Leaders</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Empowering healthcare through strategic partnerships</p>
          </div>
        </div>

        <Link 
          href="/join-us" 
          className="group flex items-center gap-2 bg-slate-50 hover:bg-slate-900 hover:text-white px-7 py-3.5 rounded-2xl text-slate-700 font-bold text-sm transition-all duration-500 border border-slate-200 shadow-sm"
        >
          Become a Partner <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Marquee Slider */}
      <div className="relative overflow-hidden py-10">
        {/* Soft Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit animate-marquee-continuous hover:[animation-play-state:paused] items-center">
          {infinitePartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="mx-10 md:mx-16 flex items-center justify-center min-w-[120px] md:min-w-[150px] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-12 md:h-14 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  unoptimized // External SVG ব্যবহারের জন্য
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics/Trust Badge */}
      <div className="mt-16 flex justify-center">
        <div className="inline-flex items-center gap-6 px-8 py-4 bg-slate-50 rounded-[2rem] border border-slate-100">
           <div className="text-center border-r border-slate-200 pr-6">
              <p className="text-2xl font-black text-slate-900 leading-none">500+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Partners</p>
           </div>
           <div className="text-center border-r border-slate-200 pr-6">
              <p className="text-2xl font-black text-slate-900 leading-none">12M+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Users</p>
           </div>
           <div className="text-center">
              <p className="text-2xl font-black text-slate-900 leading-none">99%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Success</p>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-continuous {
          display: flex;
          animation: marquee-continuous 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerSlider;