import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Navbar from '../components/layout/Navbar';

function PageTransition({ onComplete }) {
  const overlayRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => onComplete && onComplete() });
    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.4,
      ease: 'power4.inOut',
    })
      .fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.2'
      )
      .to({}, { duration: 0.3 })
      .to(overlayRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
      });
  }, [onComplete]);
  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(120deg, #1A2E1A 0%, #7BAE4B 60%, #F5F5DC 100%)',
        zIndex: 1000,
        transform: 'translateY(100%)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        ref={textRef}
        style={{
          display: 'block',
          color: '#fff',
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
          letterSpacing: '-0.04em',
          textAlign: 'center',
          opacity: 0,
          lineHeight: 1.05,
          textShadow: '0 2px 24px rgba(0,0,0,0.18)',
        }}
      >
        Testimonials
      </span>
    </div>
  );
}

const testimonials = [
  {
    name: 'Aarav Patel',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'Jun 12, 2024',
    text: "Foodie's recommendations are always spot on! I discovered my new favorite pizza place thanks to this app. The UI is beautiful and the experience feels premium.",
    tag: 'Recommended by Foodie',
    video: 'https://www.youtube.com/embed/d9757hgnEXE',
  },
  {
    name: 'Saanvi Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'May 28, 2024',
    text: "I love how easy it is to find healthy options nearby. The filters and search are so intuitive. Highly recommend Foodie to anyone who loves good food!",
    tag: 'Recommended by Foodie',
    video: 'https://www.youtube.com/embed/wEAm8cdVSK8',
  },
  {
    name: 'Vihaan Singh',
    avatar: '',
    date: 'May 10, 2024',
    text: "The parallax and transitions make browsing fun. I even found a hidden gem sushi spot! Foodie is my go-to for food recommendations.",
    tag: 'Recommended by Foodie',
    video: 'https://www.youtube.com/embed/HOuN1nwqksE',
  },
  {
    name: 'Anaya Gupta',
    avatar: '',
    date: 'Apr 22, 2024',
    text: "I tried Foodie's AI-powered suggestions and was blown away by the accuracy. The premium look and feel is unmatched.",
    tag: 'Recommended by Foodie',
  },
  {
    name: 'Ishaan Joshi',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    date: 'Apr 2, 2024',
    text: "Foodie helped me find the best burger in town. The card animations and gradients are so satisfying. Love it!",
    tag: 'Recommended by Foodie',
  },
  {
    name: 'Priya Mehra',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: 'Mar 18, 2024',
    text: "I always check Foodie before ordering out. The recommendations are always fresh and the design is so modern.",
    tag: 'Recommended by Foodie',
  },
];

export default function Testimonial() {
  const [transitionDone, setTransitionDone] = useState(false);
  const headingLines = ["Community love"];
  const headingRefs = useRef([[]]);

  useEffect(() => {
    if (transitionDone) {
      // Animate heading like hero section
      headingLines.forEach((line, lineIdx) => {
        gsap.fromTo(
          headingRefs.current[lineIdx],
          { y: '100%' },
          { y: '0%', duration: 0.7, ease: 'power3.out', stagger: 0.09, delay: lineIdx * 0.12 }
        );
      });
      // Animate cards
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.4
      });
    }
  }, [transitionDone]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e6f4e6] via-[#f5f5dc] to-[#d0e6c1] font-body relative">
      <Navbar />
      {!transitionDone && <PageTransition onComplete={() => setTransitionDone(true)} />}
      <div
        className="page-content container mx-auto px-4 py-32 md:py-36"
        style={{
          opacity: transitionDone ? 1 : 0,
          visibility: transitionDone ? 'visible' : 'hidden',
        }}
      >
        {/* Hero-style heading */}
        <h1 className="font-heading text-[2.5rem] md:text-[4.5rem] text-[#3a5d2c] font-bold text-center leading-tight mb-4">
          {headingLines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex justify-center overflow-hidden h-[1.2em] md:h-[1.3em] w-full mb-2">
              {line.split(' ').map((word, wordIdx) => (
                <span key={wordIdx} className="overflow-hidden inline-block mx-2">
                  <span
                    ref={el => {
                      if (!headingRefs.current[lineIdx]) headingRefs.current[lineIdx] = [];
                      headingRefs.current[lineIdx][wordIdx] = el;
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
        <p className="mb-12 text-brown text-center text-lg md:text-xl">See what the community is saying about Foodie. Share the love!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-start transition-transform hover:scale-[1.03] hover:shadow-2xl border border-[#e6f4e6] hover:border-matcha duration-300 group relative overflow-hidden"
              style={{ minHeight: '220px' }}
            >
              <div className="flex items-center gap-3 mb-2">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-matcha shadow" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7bae4b] to-[#e6f4e6] flex items-center justify-center text-white font-heading text-xl font-bold border-2 border-matcha shadow">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <div className="font-heading text-primary font-semibold text-base">{t.name}</div>
                  <div className="text-xs text-gray-500 font-body">{t.date}</div>
                </div>
              </div>
              <div className="font-body text-brown text-base mb-2">{t.text}</div>
              {t.video && (
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-cream shadow-lg">
                  <iframe
                    src={t.video}
                    title="Testimonial Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
              <div className="mt-auto flex items-center gap-2">
                <span className="text-xs bg-gradient-to-r from-[#7bae4b] to-[#e6f4e6] text-primary px-3 py-1 rounded-full font-heading font-semibold shadow-sm">{t.tag}</span>
              </div>
              {/* Premium hover effect: subtle overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-[#7bae4b] to-[#e6f4e6]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 