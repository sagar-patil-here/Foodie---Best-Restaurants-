import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-transparent absolute top-0 left-0 z-20">
      {/* Logo */}
      <div className="flex flex-col items-start">
        <span className="font-logo text-2xl tracking-tight text-white font-bold">Foodie</span>
        <span className="text-xs text-cream font-light tracking-widest uppercase font-body" style={{letterSpacing:'0.15em'}}>for town</span>
      </div>
      {/* Nav Links - now top right */}
      <div className="flex gap-8 items-center ml-auto">
        <a href="#" className="flex items-center gap-1 text-sm text-white font-heading font-medium hover:text-matcha transition">
          <span className="ml-1 text-2xl"></span>Home 
        </a>
        <a href="#" className="flex items-center gap-1 text-sm text-white font-heading font-medium hover:text-matcha transition">
          Nearby <span className="ml-1 text-base"></span>
        </a>
        <a href="#" className="flex items-center gap-1 text-sm text-white font-heading font-medium hover:text-matcha transition">
          Testimonial <span className="ml-1 text-base"></span>
        </a>
      </div>
    </nav>
  );
} 