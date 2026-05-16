"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";

export const Header = () => {
  const pathname = usePathname() || "";

  const getTitle = () => {
    if (pathname === "/" || pathname === "/dashboard") return "dashboard";
    if (pathname.startsWith("/categories")) return "categories";
    if (pathname.startsWith("/menu")) return "menu";
    if (pathname.startsWith("/qr")) return "qr";
    return "dashboard";
  };

  const title = getTitle();

  return (
    <header className="h-24 bg-zinc-950 relative border-b border-white/10 px-6 md:px-10 flex items-center justify-between sticky top-0 z-30 transition-all overflow-hidden">
      <Image src="/background.png" alt="Header Background" fill className="object-cover opacity-40 absolute inset-0" priority />
      
      <div className="flex items-center gap-4 md:hidden relative z-10">
        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-[1rem] flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
          <Image src="/images/buddha.png" alt="Logo" width={32} height={32} className="object-cover w-full h-full" priority />
        </div>
        <h2 className="text-xl font-serif font-semibold tracking-tight capitalize text-white">{title}</h2>
      </div>
      
      <div className="hidden md:block relative z-10">
        <h2 className="text-3xl font-serif font-semibold capitalize tracking-tight text-white">{title}</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 mt-1">Overview</p>
      </div>

      <div className="flex items-center gap-4 md:gap-6 relative z-10">
        <div className="relative hidden sm:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={18} />
          <input
            type="text"
            placeholder="Quick search..."
            className="pl-12 pr-6 py-3 bg-white/10 border border-white/10 rounded-2xl w-48 lg:w-72 focus:ring-4 focus:ring-white/10 focus:bg-white/20 transition-all text-sm font-bold shadow-inner outline-none text-white placeholder:text-white/40"
          />
        </div>
        
        <button className="relative p-3 text-white/40 hover:text-white transition-colors hover:bg-white/10 rounded-2xl">
           <Bell size={22} />
           <span className="absolute top-2.5 right-3 w-2 h-2 bg-white rounded-full border-2 border-zinc-900 shadow-sm"></span>
        </button>

        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl hover:scale-105 transition-transform cursor-pointer">
          A
        </div>
      </div>
    </header>
  );
};
