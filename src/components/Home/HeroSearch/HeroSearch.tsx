"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Search, ChevronDown, Stethoscope, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import { cities } from "@/data/cities";
import { specialists } from "@/data/specialists";

const HeroSearch: React.FC = () => {
  const router = useRouter();

  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [searchText, setSearchText] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showSpecialistDropdown, setShowSpecialistDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const cityRef = useRef<HTMLDivElement>(null);
  const specialistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(event.target as Node))
        setShowCityDropdown(false);
      if (specialistRef.current && !specialistRef.current.contains(event.target as Node))
        setShowSpecialistDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSpecialistSelect = (specialist: string) => {
    router.push(`/doctors/${encodeURIComponent(selectedCity)}/${encodeURIComponent(specialist)}`);
    setShowSpecialistDropdown(false);
  };


  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles size={14} />
          Trusted by 10,000+ Patients
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight mb-5">
          Find the Best <span className="text-blue-600">Doctor</span>
          <br className="hidden md:block" />
          Near You
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-14">
          Book appointments with verified specialists in your city. Fast, secure and reliable.
        </p>

        <div className={`max-w-4xl mx-auto transition-all duration-300 ${isFocused ? "scale-[1.015]" : ""}`}>
          <div className={`flex flex-col md:flex-row bg-white rounded-2xl p-2 border transition-all duration-300 shadow-xl shadow-slate-200/40 ${isFocused ? "border-blue-500 ring-4 ring-blue-100" : "border-slate-200"}`}>
            
            {/* City Selector */}
            <div ref={cityRef} className="relative w-full md:w-1/3">
              <div
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="flex items-center px-6 py-4 rounded-xl cursor-pointer hover:bg-slate-50 transition"
              >
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Location</p>
                  <p className="font-semibold text-slate-800 truncate">{selectedCity}</p>
                </div>
                <ChevronDown size={18} className={`ml-auto text-slate-400 transition-transform duration-300 ${showCityDropdown ? "rotate-180" : ""}`} />
              </div>

              {showCityDropdown && (
                <div className="absolute left-0 mt-3 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {cities.map((city) => (
                      <div
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setShowCityDropdown(false);
                        }}
                        className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer text-sm font-medium transition"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:block w-px bg-slate-200 my-4" />

            {/* Specialist Search */}
            <div ref={specialistRef} className="relative w-full md:w-2/3">
              <div className="flex items-center px-6 py-4">
                <div className="p-2 bg-cyan-50 rounded-lg mr-4">
                  <Search size={18} className="text-cyan-600" />
                </div>
                <div className="flex flex-col flex-1 text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Specialty</p>
                  <input
                    type="text"
                    value={searchText}
                    onFocus={() => {
                      setShowSpecialistDropdown(true);
                      setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search specialist..."
                    className="w-full outline-none font-semibold text-slate-800 placeholder:text-slate-300 bg-transparent"
                  />
                </div>
              </div>

              {showSpecialistDropdown && (
                <div className="absolute left-0 mt-3 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="max-h-72 overflow-y-auto custom-scrollbar">
                    {specialists
                      .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
                      .map((item) => (
                        <div
                          key={item}
                          onClick={() => handleSpecialistSelect(item)}
                          className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 cursor-pointer transition"
                        >
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                            <Stethoscope size={16} className="text-slate-500" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{item}</span>
                        </div>
                      ))}

                    {specialists.filter((i) => i.toLowerCase().includes(searchText.toLowerCase())).length === 0 && (
                      <div className="px-6 py-8 text-center text-slate-400 text-sm">No specialists found.</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowSpecialistDropdown(true)}
              className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-300"
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span className="font-medium">Popular:</span>
          {["Gynecologist", "Pediatrician", "Dermatologist"].map((tag) => (
            <button key={tag} onClick={() => handleSpecialistSelect(tag)} className="hover:text-blue-600 transition font-medium">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default HeroSearch;