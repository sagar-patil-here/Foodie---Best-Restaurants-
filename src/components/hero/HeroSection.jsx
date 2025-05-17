import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import plate1 from '../../assets/plate 1.png';
import plate2 from '../../assets/plate 2.png';
import plate3d from '../../assets/3D Multi-Cuisine Plate.png';

export default function HeroSection() {
  const titleRef = useRef();
  const leftInfoRef = useRef();
  const rightInfoRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
    gsap.fromTo(leftInfoRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.fromTo(rightInfoRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' });
  }, []);

  return (
    <section className="overflow-hidden relative h-[100vh] flex items-center justify-center bg-gradient-to-br from-[#1a2e1a] via-[#233c1e] to-[#3a5d2c] overflow-hidden">
      {/* Left Info */}
      <div ref={leftInfoRef} className="absolute left-0 top-1/2 -translate-y-1/2 ml-10 w-64 text-white space-y-4 hidden md:block">
      <div className="flex items-center gap-2 mt-2">
          <img src={plate1} alt="Plate 1" className="w-[10rem] h-[10rem] rounded-full  border-white object-cover" />
        </div>
        <div>
          <h3 className="font-heading text-lg mt-2 mb-1">Ai Powered</h3>
          <p className="text-sm text-cream font-body">Free recommendations based on your location.</p>
        </div>
        
        <p className="text-xs text-cream mt-2 font-body"></p>
        <p className="text-base mt-2 font-heading">いただきます</p>
      </div>
      {/* Right Info */}
      <div ref={rightInfoRef} className="absolute right-0 top-1/2 -translate-y-1/2 mr-10 w-64 text-white space-y-4 hidden md:block">
        <div className="flex flex-col items-end">
          <img src={plate2} alt="Plate 2" className="w-[10rem] h-[10rem] rounded-full  border-white mb-2 object-cover" />
          <h3 className="font-heading text-lg mt-2 mb-1">Premium Places</h3>
          <p className="text-sm text-cream text-right font-body">Premium quality, At Your Doorstep.</p>
          <span className="text-lg mt-2 font-heading">lets goo</span>
          <button className="mt-2 px-5 py-2 bg-lime-400 text-primary rounded-full font-bold text-base shadow hover:bg-lime-500 transition font-heading">Explore NearBy  <span className="ml-1">👉</span></button>
        </div>
      </div>
      {/* Center Main Title and Plate Image */}
      <div className="flex flex-col items-center justify-center z-10">
        <h1 ref={titleRef} className="font-syne text-[3rem] md:text-[5rem] text-white font-bold text-center leading-tight mb-6 mt-96" style={{letterSpacing:'-0.03em'}}>Best Food<br />in Town</h1>
        <div className="relative flex items-center justify-center mt-2">
          <img src={plate3d} alt="3D Multi Cuisine Plate" className="w-[53rem] h-[53rem] rounded-full shadow-2xl object-contain bg-cream animate-spinSlow" />
        </div>
      </div>
    </section>
  );
} 