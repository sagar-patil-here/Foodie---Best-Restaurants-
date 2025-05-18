import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import plate1 from '../../assets/plate 1.png';
import plate2 from '../../assets/plate 2.png';
import plate3d from '../../assets/3D Multi-Cuisine Plate.png';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ heroTextVisible }) {
  const leftInfoRef = useRef();
  const rightInfoRef = useRef();
  const lines = ["Best Food", "in Town"];
  const words = lines.map(line => line.split(" "));
  const wordRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!heroTextVisible) return;
    // Animate each word's inner span from translateY(100%) to 0
    const allWordRefs = wordRefs.current.flat();
    gsap.fromTo(
      allWordRefs,
      { y: '100%' },
      { y: '0%', duration: 0.8, ease: 'power3.out', stagger: 0.09 }
    );
    gsap.fromTo(leftInfoRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.1, ease: 'power3.out' });
    gsap.fromTo(rightInfoRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.1, ease: 'power3.out' });
  }, [heroTextVisible]);

  return (
    <section className="overflow-hidden relative h-[100vh] flex items-center justify-center bg-gradient-to-br from-[#1a2e1a] via-[#233c1e] to-[#3a5d2c] overflow-hidden">
      {/* Left Info */}
      <div
        ref={leftInfoRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 ml-10 w-64 text-white space-y-4 hidden md:block"
        style={{ opacity: heroTextVisible ? 1 : 0, transition: 'opacity 0.2s' }}
      >
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
      <div
        ref={rightInfoRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 mr-10 w-64 text-white space-y-4 hidden md:block"
        style={{ opacity: heroTextVisible ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        <div className="flex flex-col items-end">
          <img src={plate2} alt="Plate 2" className="w-[10rem] h-[10rem] rounded-full  border-white mb-2 object-cover" />
          <h3 className="font-heading text-lg mt-2 mb-1">Premium Places</h3>
          <p className="text-sm text-cream text-right font-body">Premium quality, At Your Doorstep.</p>
          <span className="text-lg mt-2 font-heading">lets goo</span>
          <button  className="mt-2 px-5 py-2 bg-lime-400 text-primary rounded-full font-bold text-base shadow hover:bg-lime-500 transition font-heading" onClick={() => navigate('/nearby')}>
            Explore NearBy <span className="ml-1">👉</span>
          </button>
        </div>
      </div>
      {/* Center Main Title and Plate Image */}
      <div className="flex flex-col items-center justify-center z-10">
        <h1
          className="font-syne text-[6rem] md:text-[5rem] text-white font-bold text-center leading-tight mb-6 mt-96"
          style={{
            letterSpacing: '-0.03em',
            opacity: heroTextVisible ? 1 : 0,
            transition: 'opacity 0.2s',
          }}
        >
          {words.map((lineWords, lineIdx) => (
            <div key={lineIdx} className="flex justify-center overflow-hidden h-[1.2em] md:h-[1.3em] w-full mb-2">
              {lineWords.map((word, wordIdx) => (
                <span key={wordIdx} className="overflow-hidden inline-block mx-2">
                  <span
                    ref={el => {
                      if (!wordRefs.current[lineIdx]) wordRefs.current[lineIdx] = [];
                      wordRefs.current[lineIdx][wordIdx] = el;
                    }}
                    className="block"
                    style={{ display: 'block' }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </h1>
        <div className="relative flex items-center justify-center mt-2">
          <img src={plate3d} alt="3D Multi Cuisine Plate" className="w-[53rem] h-[53rem] rounded-full shadow-2xl object-contain bg-cream animate-spinSlow" />
        </div>
      </div>
    </section>
  );
} 