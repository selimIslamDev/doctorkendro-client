"use client";

import React from 'react';
import { 
  ChevronRight, Thermometer, HeartPulse, Baby, 
  Stethoscope, Wind, Activity, Scissors, Brain,
  Sparkles
} from 'lucide-react';

const symptoms = [
  { name: 'Fever', icon: <Thermometer size={26} />, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Heart issues', icon: <HeartPulse size={26} />, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Pregnancy', icon: <Baby size={26} />, color: 'text-pink-500', bg: 'bg-pink-50' },
  { name: 'Hypertension', icon: <Stethoscope size={26} />, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Breathlessness', icon: <Wind size={26} />, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { name: 'Diarrhea', icon: <Activity size={26} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'Hairfall', icon: <Scissors size={26} />, color: 'text-slate-600', bg: 'bg-slate-50' },
  { name: 'Anxiety', icon: <Brain size={26} />, color: 'text-purple-500', bg: 'bg-purple-50' },
];

const SymptomsSection = () => {
  const infiniteSymptoms = [...symptoms, ...symptoms];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Common <span className="text-blue-600">Symptoms</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium">Identify what you're feeling</p>
          </div>
        </div>
        
        {/* Updated Button: Explore All Style */}
        <button className="group flex items-center gap-1.5 bg-slate-50 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-full text-slate-700 font-bold text-sm transition-all duration-300 shadow-sm border border-slate-200">
          Explore All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Auto-Scroll Container */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="flex w-fit animate-marquee-slow hover:[animation-play-state:paused] py-6">
          {infiniteSymptoms.map((symptom, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center mx-6 md:mx-10 group/item cursor-pointer"
            >
              <div className="relative w-24 h-24 mb-5">
                <div className={`absolute inset-0 ${symptom.bg} rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover/item:shadow-2xl group-hover/item:-translate-y-4 transition-all duration-500 relative z-10 overflow-hidden`}>
                   <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${symptom.bg} rounded-full transition-transform duration-500 group-hover/item:scale-[3] opacity-50`} />
                   
                   <div className={`${symptom.color} relative z-20 transition-transform duration-500 group-hover/item:scale-125`}>
                     {symptom.icon}
                   </div>
                </div>
              </div>

              <span className="text-[13px] font-black text-slate-700 text-center tracking-tight group-hover/item:text-blue-600 transition-colors">
                {symptom.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          animation: marquee-slow 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SymptomsSection;





// "use client";

// import React from 'react';
// import { 
//   ChevronRight, Thermometer, HeartPulse, Baby, 
//   Stethoscope, Wind, Activity, Scissors, Brain,
//   Sparkles
// } from 'lucide-react';

// const symptoms = [
//   { name: 'Fever', icon: <Thermometer size={26} />, color: 'text-orange-500', bg: 'bg-orange-50' },
//   { name: 'Heart issues', icon: <HeartPulse size={26} />, color: 'text-red-500', bg: 'bg-red-50' },
//   { name: 'Pregnancy', icon: <Baby size={26} />, color: 'text-pink-500', bg: 'bg-pink-50' },
//   { name: 'Hypertension', icon: <Stethoscope size={26} />, color: 'text-blue-500', bg: 'bg-blue-50' },
//   { name: 'Breathlessness', icon: <Wind size={26} />, color: 'text-cyan-500', bg: 'bg-cyan-50' },
//   { name: 'Diarrhea', icon: <Activity size={26} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
//   { name: 'Hairfall', icon: <Scissors size={26} />, color: 'text-slate-600', bg: 'bg-slate-50' },
//   { name: 'Anxiety', icon: <Brain size={26} />, color: 'text-purple-500', bg: 'bg-purple-50' },
// ];

// const SymptomsSection = () => {
//   // Seamless loop-এর জন্য ডেটা ডুপ্লিকেট করা হয়েছে
//   const infiniteSymptoms = [...symptoms, ...symptoms];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-10">
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
//             <Sparkles size={20} />
//           </div>
//           <div>
//             <h2 className="text-3xl font-black text-slate-900 tracking-tight">
//               Common <span className="text-blue-600">Symptoms</span>
//             </h2>
//             <p className="text-slate-500 text-sm font-medium">Identify what you're feeling</p>
//           </div>
//         </div>
        
//         <button className="group flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider hover:text-blue-700 transition-colors">
//           View All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>

//       {/* Auto-Scroll Container */}
//       <div className="relative group">
//         {/* Left & Right Faded Edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

//         {/* Marquee Track */}
//         <div className="flex w-fit animate-marquee-slow hover:[animation-play-state:paused] py-6">
//           {infiniteSymptoms.map((symptom, index) => (
//             <div 
//               key={index} 
//               className="flex flex-col items-center mx-6 md:mx-10 group/item cursor-pointer"
//             >
//               {/* Icon Sphere */}
//               <div className="relative w-24 h-24 mb-5">
//                 {/* Background Shadow Effect */}
//                 <div className={`absolute inset-0 ${symptom.bg} rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-500`} />
                
//                 {/* Main Circle */}
//                 <div className={`w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover/item:shadow-2xl group-hover/item:-translate-y-4 transition-all duration-500 relative z-10 overflow-hidden`}>
//                    {/* Background Accent for Circle */}
//                    <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${symptom.bg} rounded-full transition-transform duration-500 group-hover/item:scale-[3] opacity-50`} />
                   
//                    <div className={`${symptom.color} relative z-20 transition-transform duration-500 group-hover/item:scale-125`}>
//                      {symptom.icon}
//                    </div>
//                 </div>
//               </div>

//               {/* Text Label */}
//               <span className="text-[13px] font-black text-slate-700 text-center tracking-tight group-hover/item:text-blue-600 transition-colors">
//                 {symptom.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes marquee-slow {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee-slow {
//           display: flex;
//           animation: marquee-slow 35s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SymptomsSection;