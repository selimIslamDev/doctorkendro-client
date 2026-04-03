"use client";

import React from 'react';
import { Activity, Pill, Building2, FlaskConical, Stethoscope, ArrowRight, Zap } from 'lucide-react';

const ServiceGrid = () => {
  const smallServices = [
    { name: 'Labs', icon: <FlaskConical size={24} />, color: 'from-blue-500 to-cyan-400' },
    { name: 'Medicines', icon: <Pill size={24} />, color: 'from-emerald-500 to-teal-400' },
    { name: 'Health Hub', icon: <Activity size={24} />, color: 'from-purple-500 to-indigo-400' },
    { name: 'Hospitals', icon: <Building2 size={24} />, color: 'from-rose-500 to-red-400' },
    { name: 'Surgeries', icon: <Stethoscope size={24} />, color: 'from-amber-500 to-orange-400' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-[#f8fafc]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">help</span> you today?
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium">Experience the future of digital healthcare.</p>
        </div>
        <button className="flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all duration-300 group">
          View All Services <ArrowRight size={20} className="group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Main Hero Card: Video Consultation */}
        <div className="md:col-span-5 lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-[450px] cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent z-10" />
          <div className="relative z-20 p-10 h-full flex flex-col">
            <div className="bg-blue-500 w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6">Live Now</div>
            <h3 className="text-white font-bold text-4xl leading-[1.1]">Video <br /> Consultation</h3>
            <p className="text-slate-400 mt-4 text-lg max-w-[200px]">Consult with specialists in 10 mins.</p>
            
            <div className="mt-auto">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                    <ArrowRight className="text-slate-900" />
                </div>
            </div>
          </div>
          <div 
            className="absolute bottom-0 right-[-10%] w-[110%] h-[80%] bg-contain bg-bottom bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url('/doctor-mask.png')" }} 
          />
        </div>

        {/* Right Side Complex Grid */}
        <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Instant Doctor - Ultra Modern High Contrast */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,115,22,_0.3)] hover:-translate-y-2 cursor-pointer">
            <div className="bg-white h-full w-full rounded-[2.3rem] p-8 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={20} className="fill-orange-500 text-orange-500 animate-pulse" />
                        <span className="text-orange-600 font-black text-xs uppercase">Instant Access</span>
                    </div>
                    <h3 className="text-slate-900 font-black text-3xl italic tracking-tighter">INSTANT<br/>DOCTOR <span className="text-orange-500">+</span></h3>
                    <p className="text-slate-500 mt-2 font-medium">Click for immediate relief.</p>
                </div>
                <div className="absolute bottom-0 right-0 w-44 h-44 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: "url('/doctor-male.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}} />
            </div>
          </div>

          {/* In-Clinic - Soft Aesthetic */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#eff6ff] p-8 border border-blue-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer">
             <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-blue-900 font-bold text-2xl">In-clinic Visit</h3>
                <p className="text-blue-600/70 font-medium mt-1">Personalized Care</p>
                <div className="mt-8 flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={18} />
                   </div>
                   <span className="text-sm font-bold text-blue-900">Book Now</span>
                </div>
             </div>
             <div className="absolute bottom-2 right-2 w-32 h-32 bg-contain bg-no-repeat opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" style={{backgroundImage: "url('/doctor-female.png')"}} />
          </div>

          {/* Mini Services - The Icon Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {smallServices.map((item) => (
              <div 
                key={item.name} 
                className="group relative bg-white p-6 rounded-[2rem] flex flex-col items-center justify-center border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-4 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500 relative z-10`}>
                  {item.icon}
                </div>
                <span className="text-slate-800 font-black text-[13px] tracking-tight relative z-10 group-hover:text-blue-600 transition-colors">{item.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;





// "use client";

// import React from 'react';
// import { motion } from 'framer-motion'; // এনিমেশনের জন্য (optional, install with: npm install framer-motion)

// const ServiceGrid = () => {
//   const smallServices = [
//     { name: 'Labs', img: '/labs.png', color: 'bg-blue-50' },
//     { name: 'Medicines', img: '/medicines.png', color: 'bg-green-50' },
//     { name: 'Health Hub', img: '/health-hub.png', color: 'bg-purple-50' },
//     { name: 'Hospitals', img: '/hospitals.png', color: 'bg-red-50' },
//     { name: 'Surgeries', img: '/surgeries.png', color: 'bg-yellow-50' },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
//       <div className="flex justify-between items-end mb-8">
//         <div>
//           <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
//             How can we <span className="text-blue-600">help</span> you today?
//           </h2>
//           <p className="text-gray-500 mt-2">Quality healthcare services at your fingertips.</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
//         {/* Left: Video Consultation (Premium Gradient) */}
//         <div className="md:col-span-4 lg:col-span-3 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[400px] cursor-pointer">
//           <div className="relative z-10">
//             <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#006064]">Available 24/7</span>
//             <h3 className="text-[#004d40] font-black text-2xl mt-4 leading-tight">Video <br /> Consultation</h3>
//             <p className="text-[#006064]/80 text-sm mt-2 font-medium">Talk to PMC Verified Doctors within minutes.</p>
//           </div>
//           <div 
//             className="absolute bottom-0 right-0 w-[110%] h-[75%] bg-contain bg-bottom bg-no-repeat transition-transform duration-500 group-hover:scale-110" 
//             style={{ backgroundImage: "url('/doctor-mask.png')" }} 
//           />
//         </div>

//         {/* Right Side: Container */}
//         <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6">
          
//           <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
//             {/* In-clinic Visit */}
//             <div className="lg:col-span-4 group relative overflow-hidden rounded-[2rem] bg-[#fff3e0] p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 min-h-[180px] cursor-pointer border border-orange-100/50">
//               <div className="relative z-10">
//                 <h3 className="text-[#bf360c] font-bold text-xl">In-clinic Visit</h3>
//                 <p className="text-[#d84315]/70 text-sm mt-1">Book your physical appointment</p>
//                 <button className="mt-4 text-xs font-bold text-[#bf360c] bg-white px-4 py-2 rounded-full shadow-sm">Book Now</button>
//               </div>
//               <div className="absolute bottom-0 right-[-10px] w-36 h-36 bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('/doctor-female.png')"}} />
//             </div>

//             {/* Instant Doctor (Sleek Dark/Modern) */}
//             <div className="lg:col-span-6 group relative overflow-hidden rounded-[2rem] bg-[#1a1a1a] p-6 flex items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[180px] cursor-pointer">
//               <div className="relative z-10 w-2/3">
//                 <div className="flex items-center gap-2 mb-2">
//                    <div className="h-2 w-2 bg-red-500 rounded-full animate-ping" />
//                    <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Emergency</span>
//                 </div>
//                 <h3 className="text-white font-black text-3xl italic tracking-tighter">INSTANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">DOCTOR</span></h3>
//                 <p className="text-gray-400 text-sm mt-1">Get relief in just a single click</p>
//               </div>
//               <div className="absolute bottom-0 right-0 w-48 h-full bg-contain bg-right-bottom bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity" style={{backgroundImage: "url('/doctor-male.png')"}} />
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
//             {/* Weight Loss Clinic */}
//             <div className="lg:col-span-4 group relative overflow-hidden rounded-[2rem] bg-[#f1f8e9] p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 min-h-[180px] cursor-pointer border border-green-100">
//               <div className="relative z-10">
//                 <h3 className="text-[#33691e] font-bold text-xl">Weight Loss Clinic</h3>
//                 <p className="text-[#558b2f] text-sm mt-1">Personalized diet & health plans</p>
//               </div>
//               <div className="absolute bottom-2 right-2 w-32 h-32 bg-contain bg-no-repeat group-hover:rotate-3 transition-transform" style={{backgroundImage: "url('/weight-loss.png')"}} />
//             </div>

//             {/* Mini Icon Cards Grid */}
//             <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
//               {smallServices.map((item) => (
//                 <div 
//                   key={item.name} 
//                   className="group bg-white border border-gray-100 rounded-[1.5rem] p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
//                 >
//                   <div className={`w-14 h-14 ${item.color} rounded-2xl mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
//                      {/* Placeholder icon - ideally use Lucide-react icons here */}
//                      <div className="w-8 h-8 bg-white/50 rounded-lg shadow-inner" />
//                   </div>
//                   <span className="text-gray-800 font-bold text-[12px] text-center group-hover:text-blue-600">{item.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceGrid;