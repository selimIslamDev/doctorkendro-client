"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';

const cityData = [
  {
    cityName: "Lahore",
    specialists: [
      "Best Dermatologist in Lahore", "Best Gynecologist in Lahore", "Best Psychiatrist in Lahore",
      "Best Gastroenterologist in Lahore", "Best Urologist in Lahore", "Best General Practitioner in Lahore",
    ]
  },
  {
    cityName: "Karachi",
    specialists: [
      "Best Dermatologist in Karachi", "Best Gynecologist in Karachi", "Best Psychiatrist in Karachi",
      "Best Gastroenterologist in Karachi", "Best Urologist in Karachi", "Best General Physician in Karachi",
    ]
  },
  {
    cityName: "Islamabad",
    specialists: [
      "Best Psychologist in Islamabad", "Best Dermatologist in Islamabad", "Best Gynecologist in Islamabad",
      "Best Psychiatrist in Islamabad", "Best Urologist in Islamabad", "Best Gastroenterologist in Islamabad",
    ]
  },
  {
    cityName: "Other Cities",
    specialists: [
      "Best Orthopedic Surgeon in Quetta", "Best Gastroenterologist in Quetta", "Best Dermatologist in Quetta",
      "Best Dermatologist in Rawalpindi", "Best Neuro Physician in Quetta", "Best Gynecologist in Quetta",
    ]
  }
];

const DoctorByCity = () => {
  return (
    <section className="bg-slate-50/50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4 border border-blue-100">
             <Building2 size={14} />
             <span>Regional Specialists</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Find A Doctor By <span className="text-blue-600">City</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cityData.map((city, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2"
            >
              {/* City Title with Icon */}
              <div className="flex items-center gap-3 mb-8 border-b border-slate-50 pb-4 group-hover:border-blue-100 transition-colors">
                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                   <MapPin size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">
                  {city.cityName}
                </h3>
              </div>
              
              {/* Specialists List */}
              <ul className="space-y-4">
                {city.specialists.map((specialist, idx) => (
                  <li key={idx} className="relative overflow-hidden">
                    <Link 
                      href="#" 
                      className="group/link flex items-center gap-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-all duration-300"
                    >
                      {/* Hover Indicator Dot */}
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full scale-0 group-hover/link:scale-100 transition-transform duration-300" />
                      
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">
                        {specialist}
                      </span>
                      
                      <ArrowRight size={12} className="ml-auto opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-500 text-blue-400" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View More Footer inside Card */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <button className="text-[11px] font-black uppercase tracking-widest text-blue-600 hover:tracking-[0.2em] transition-all">
                  View All Doctors
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorByCity;