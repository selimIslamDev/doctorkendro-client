"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, BookOpen, ArrowUpRight } from "lucide-react";

type BlogCategory = {
  id: number;
  title: string;
  image: string;
  count: string;
};

const blogCategories: BlogCategory[] = [
  {
    id: 1,
    title: "Healthy Lifestyle",
    // প্রফেশনাল হেলদি লাইফস্টাইল ইমেজ (Unsplash)
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    count: "45+ Articles",
  },
  {
    id: 2,
    title: "Women Health",
    // প্রফেশনাল উইমেন হেলথ কেয়ার ইমেজ (Unsplash)
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    count: "30+ Articles",
  },
  {
    id: 3,
    title: "Skin Care",
    // প্রফেশনাল স্কিন কেয়ার/ডার্মাটোলজি ইমেজ (Unsplash)
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    count: "25+ Articles",
  },
];

const HealthBlogs = () => {
  return (
    <section className="bg-[#fcfcfc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">Resources</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Health <span className="text-blue-600">Blogs</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium max-w-md">
              Stay updated with the latest medical insights and lifestyle tips from experts.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white px-7 py-3.5 rounded-full text-slate-700 font-bold text-sm transition-all duration-500 shadow-sm border border-slate-200"
          >
            Explore All Insights <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((blog) => (
            <div
              key={blog.id}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-white shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 border border-slate-100"
            >
              {/* Image Area */}
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized // External URL ব্যবহারের জন্য
                />
                
                {/* Overlay Gradient (ডার্ক থেকে ট্রান্সপারেন্ট) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Top Badge */}
                  <div className="self-start">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-xl">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none">
                        {blog.count}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-400 font-extrabold text-sm translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Read Articles <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Bottom Border Decor */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-blue-600 transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthBlogs;

