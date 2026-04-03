"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, Star, BadgeCheck } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Umair Ali",
    initials: "UA",
    text: "I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",
    status: "Verified Patient",
    stars: 5,
    accent: "bg-teal-500",
  },
  {
    id: 2,
    name: "Misbah Khan",
    initials: "MK",
    text: "My first appointment today. It was a very smooth experience and the skin specialist was very helpful and professional experiences so far facility is also very good.",
    status: "Satisfied User",
    stars: 5,
    accent: "bg-blue-500",
  },
  {
    id: 3,
    name: "Irfan Muddassir",
    initials: "IM",
    text: "It is a really good initiative to connect with health care personals. If you feel a need for help then helpline is there to take care of it. overall very good experience.",
    status: "Top Reviewer",
    stars: 5,
    accent: "bg-orange-500",
  },
  {
    id: 4,
    name: "Irfan Muddassir",
    initials: "IM",
    text: "It is a really good initiative to connect with health care personals. If you feel a need for help then helpline is there to take care of it. overall very good experience.",
    status: "Top Reviewer",
    stars: 5,
    accent: "bg-orange-500",
  },
  {
    id: 5,
    name: "Irfan Muddassir",
    initials: "IM",
    text: "It is a really good initiative to connect with health care personals. If you feel a need for help then helpline is there to take care of it. overall very good experience.",
    status: "Top Reviewer",
    stars: 5,
    accent: "bg-orange-500",
  },
];

const ReviewSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    { align: 'start', loop: true }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-50/50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            What our <span className="text-blue-600">Users</span> say
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Join thousands of satisfied patients worldwide.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
           <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
           </div>
           <span className="font-bold text-slate-700 text-sm">4.9/5 Rating</span>
        </div>
      </div>
      
      {/* Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <div className="group h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col relative overflow-hidden">
                
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${review.accent} opacity-[0.03] rounded-bl-full transition-all duration-500 group-hover:scale-150`} />

                {/* Top Info */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${review.accent} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-current/20`}>
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg flex items-center gap-1.5">
                        {review.name}
                        <BadgeCheck size={16} className="text-blue-500" />
                      </h3>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < review.stars ? "currentColor" : "none"} className={i < review.stars ? "" : "text-slate-200"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote size={40} className="text-slate-100 group-hover:text-slate-200 transition-colors" />
                </div>

                {/* Review Text */}
                <div className="flex-1 relative z-10">
                  <p className="text-slate-600 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Status Footer */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {review.status}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;