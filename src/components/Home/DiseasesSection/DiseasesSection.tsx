"use client";

import React from 'react';
import { 
  ChevronRight, Bug, Thermometer, Microscope, FlameKindling, 
  Activity, Stethoscope, Brain, Wind, ArrowUpRight 
} from 'lucide-react';

const diseases = [
  { name: 'Dengue fever', icon: <Bug size={24} />, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Typhoid Fever', icon: <Thermometer size={24} />, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Piles', icon: <Microscope size={24} />, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { name: 'Gastritis', icon: <FlameKindling size={24} />, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Hernia', icon: <Activity size={24} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Vaginal Infection', icon: <Stethoscope size={24} />, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Migraine', icon: <Brain size={24} />, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'TB', icon: <Wind size={24} />, color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

const DiseasesSection = () => {

  const infiniteDiseases = [...diseases, ...diseases];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Common <span className="text-blue-600">Diseases</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1 font-medium">Auto-updating list of health conditions</p>
        </div>
        
        <button className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-slate-900 hover:text-white px-6 py-3 rounded-2xl text-slate-700 font-bold text-sm transition-all duration-500 shadow-sm border border-slate-100">
          Explore All <ChevronRight size={18} />
        </button>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-4">
          {infiniteDiseases.map((disease, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center mx-4 md:mx-6 group/card cursor-pointer"
            >
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
          
                <div className="absolute inset-0 bg-blue-400/20 rounded-[2.5rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                <div className={`w-20 h-20 rounded-[2rem] ${disease.bg} flex items-center justify-center transition-all duration-500 shadow-sm group-hover/card:shadow-2xl group-hover/card:-translate-y-3 group-hover/card:rotate-6 border border-white relative z-10`}>
                  <div className={`${disease.color} transition-transform duration-500 group-hover/card:scale-125`}>
                    {disease.icon}
                  </div>
                  
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-slate-900 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform scale-0 group-hover/card:scale-100 rotate-12">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
              </div>

              <span className="text-sm font-extrabold text-slate-600 text-center tracking-tight group-hover/card:text-blue-600 transition-colors">
                {disease.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation Config */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DiseasesSection;