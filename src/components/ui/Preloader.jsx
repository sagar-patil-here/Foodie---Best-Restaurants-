import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const letters = "FOODIE".split("");

export default function Preloader({ onFinish }) {
  const letterRefs = useRef([]);
  const preloaderRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Animate the letters in
    gsap.fromTo(
      letterRefs.current,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        onComplete: () => {
          // Animate text out (opacity 0, translateY 40px)
          gsap.to(textRef.current, {
            opacity: 0,
            y: 40,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
              // Animate preloader background up and fade out
              gsap.to(preloaderRef.current, {
                y: '-100%',
                opacity: 0,
                duration: 0.7,
                ease: 'power4.inOut',
                pointerEvents: 'none',
                onComplete: onFinish
              });
            }
          });
        }
      }
    );
    // Clean up
    return () => {
      gsap.killTweensOf(letterRefs.current);
      gsap.killTweensOf(preloaderRef.current);
      gsap.killTweensOf(textRef.current);
    };
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="preloader-bg fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 60% 40%, rgba(245,245,220,0.10) 0%, rgba(123,174,75,0.18) 40%, rgba(26,46,26,0.98) 100%), linear-gradient(120deg, #1A2E1A 0%, #7BAE4B 60%, #F5F5DC 100%)',
        transition: 'opacity 0.7s',
        willChange: 'transform, opacity'
      }}
    >
      <h1
        ref={textRef}
        className="font-syne font-bold text-white text-[4rem] md:text-[7rem] tracking-widest flex"
        style={{
          letterSpacing: '0.15em',
          textShadow: '0 4px 32px rgba(26,46,26,0.25)',
        }}
      >
        {letters.map((l, i) => (
          <span
            key={i}
            ref={el => letterRefs.current[i] = el}
            className="inline-block mx-2"
            style={{
              display: 'inline-block',
              opacity: 0,
            }}
          >
            {l}
          </span>
        ))}
      </h1>
    </div>
  );
}
