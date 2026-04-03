"use client";

import React from 'react';
import { CheckCircle2, MessageSquarePlus, Globe, ShieldCheck } from 'lucide-react';

const AdviceBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-800">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[350px]">
          
          {/* Left Side: Content */}
          <div className="p-8 md:p-16 w-full md:w-3/5">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="text-cyan-400" size={16} />
              <span className="text-cyan-400 text-xs font-black uppercase tracking-widest">Verified Healthcare</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Free Medical</span> Advice Online
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-cyan-500/20 p-1 rounded-md">
                   <CheckCircle2 size={18} className="text-cyan-400" />
                </div>
                <div>
                   <p className="text-slate-200 font-bold text-sm">Ask Anonymously</p>
                   <p className="text-slate-400 text-xs mt-0.5">Your privacy is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-500/20 p-1 rounded-md">
                   <Globe size={18} className="text-blue-400" />
                </div>
                <div>
                   <p className="text-slate-200 font-bold text-sm">PMC Verified Doctors</p>
                   <p className="text-slate-400 text-xs mt-0.5">Direct replies from experts</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                <div className="bg-[#0f172a] group-hover:bg-transparent transition-colors duration-300 rounded-[14px] px-8 py-4 flex items-center justify-center gap-2">
                  <span className="text-white font-bold group-hover:scale-105 transition-transform">Ask a Question</span>
                  <MessageSquarePlus size={20} className="text-cyan-400 group-hover:text-white" />
                </div>
              </button>
              
              <button className="px-8 py-4 rounded-2xl font-bold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-800/40 backdrop-blur-md">
                View All Community Q&A
              </button>
            </div>
          </div>

          {/* Right Side: Visual Representation */}
          <div className="relative w-full md:w-2/5 h-[300px] md:h-[450px] flex items-end justify-end group">
            {/* The Floating Image */}
            <div 
              className="absolute bottom-0 right-0 w-[110%] h-[95%] bg-contain bg-right-bottom bg-no-repeat z-20 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
              style={{ backgroundImage: "url('/doctor-advice-banner.png')" }} 
            />
            
            {/* Abstract Decorative Shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl rotate-12 opacity-20 blur-xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-10 blur-lg animate-bounce duration-[3000ms]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdviceBanner;