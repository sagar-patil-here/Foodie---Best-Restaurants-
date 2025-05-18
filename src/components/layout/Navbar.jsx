import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isGreen = location.pathname === '/nearby' || location.pathname === '/testimonial';
  // Use green for text on Nearby and Testimonial pages, else white
  const textColor = isGreen ? 'text-[#3a5d2c]' : 'text-white';
  const subTextColor = isGreen ? 'text-[#7bae4b]' : 'text-cream';

  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-transparent absolute top-0 left-0 z-20">
      {/* Logo */}
      <div className="flex flex-col items-start">
        <span className={`font-logo text-2xl tracking-tight font-bold ${textColor}`}>Foodie</span>
        <span className={`text-xs font-light tracking-widest uppercase font-body ${subTextColor}`} style={{letterSpacing:'0.15em'}}>for town</span>
      </div>
      {/* Nav Links */}
      <div className="flex gap-8 items-center ml-auto">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center gap-1 text-sm font-heading font-medium hover:text-matcha transition bg-transparent border-none outline-none cursor-pointer ${textColor}`}
          style={{ background: 'none' }}
        >
          Home
        </button>
        <button
          onClick={() => navigate('/nearby')}
          className={`flex items-center gap-1 text-sm font-heading font-medium hover:text-matcha transition bg-transparent border-none outline-none cursor-pointer ${textColor}`}
          style={{ background: 'none' }}
        >
          Nearby
        </button>
        <button
          onClick={() => navigate('/testimonial')}
          className={`flex items-center gap-1 text-sm font-heading font-medium hover:text-matcha transition bg-transparent border-none outline-none cursor-pointer ${textColor}`}
          style={{ background: 'none' }}
        >
          Testimonial
        </button>
      </div>
    </nav>
  );
} 