"use client";

import React from 'react';
import { Star, ShieldCheck, Headset, Lock, Rocket, Smartphone, ArrowUpRight } from 'lucide-react';

const WhyMarham = () => {
  const features = [
    {
      id: 1,
      title: "PMC Verified Doctors",
      desc: "16,000+ Verified Specialists",
      icon: <ShieldCheck size={24} className="text-cyan-500" />,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 2,
      title: "24/7 Priority Support",
      desc: "Trained Healthcare Team",
      icon: <Headset size={24} className="text-purple-500" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Secure Transactions",
      desc: "SSL-Encrypted Payments",
      icon: <Lock size={24} className="text-emerald-500" />,
      color: "from-emerald-500/20 to-teal-500/20"
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden bg-[#f8fafc]">
      
      {/* Background Abstract Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 relative z-10">
        
        {/* Left Content (4 Columns) */}
        <div className="lg:col-span-4 space-y-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-2">
            <Rocket size={16} className="text-blue-600" />
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Digital Healthcare <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reimagined.</span>
          </h2>

          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.id} className="group flex items-center gap-6 p-4 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 cursor-default">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: The "Marvelous" Glassmorphism Visual (5 Columns) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] order-1 lg:order-2">
           {/* Main Glass Card (App Mockup Representation) */}
           <div className="relative w-72 h-[480px] bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
              
              {/* Internal Mockup Content */}
              <div className="p-6 space-y-6">
                 <div className="w-12 h-1.5 bg-slate-300/50 rounded-full mx-auto mb-8" />
                 <div className="h-32 bg-white/60 rounded-[2rem] animate-pulse" />
                 <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-blue-500/10 rounded-2xl" />
                    <div className="h-20 bg-purple-500/10 rounded-2xl" />
                 </div>
                 <div className="h-40 bg-white/60 rounded-[2rem]" />
              </div>

              {/* Floating Element 1: PMC Badge */}
              <div className="absolute top-20 -right-12 bg-white shadow-2xl p-4 rounded-3xl flex items-center gap-3 animate-bounce duration-[4000ms] border border-slate-50">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400">Verified</p>
                  <p className="text-xs font-bold text-slate-900">16k+ Doctors</p>
                </div>
              </div>

              {/* Floating Element 2: Appointment Card */}
              <div className="absolute bottom-16 -left-16 bg-white/80 backdrop-blur-md shadow-2xl p-5 rounded-[2rem] border border-white/50 transition-transform duration-500 hover:scale-110">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                   <span className="text-[10px] font-bold text-blue-600 uppercase">Live Session</span>
                </div>
                <p className="text-sm font-black text-slate-900 tracking-tight">Dr. Sarah Jenkins</p>
                <p className="text-[10px] text-slate-500 font-medium italic">Joining in 2 mins...</p>
              </div>
           </div>

           {/* Large Decorative Circle behind */}
           <div className="absolute -z-10 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full border border-blue-200/20 animate-spin-slow" />
        </div>

        {/* Right Content: Google/App Store (3 Columns) */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center order-3 space-y-8">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col items-center group transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 relative mb-4 transition-transform duration-500 group-hover:scale-110">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Timeline_20th_anniversary.png" alt="Google" className="object-contain w-full h-full" />
              </div>
              <div className="text-center">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">4.9</span>
                    <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avg. Playstore Rating</p>
              </div>
           </div>

           <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 group">
             <Smartphone size={20} />
             <span>Get App Now</span>
             <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyMarham;