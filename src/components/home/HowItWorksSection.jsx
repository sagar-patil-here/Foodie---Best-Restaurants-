import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "AI-Powered Recommendations",
    desc: "Get personalized food suggestions based on your taste and location."
  },
  {
    title: "Premium Quality",
    desc: "We partner with the best restaurants to ensure top-notch quality."
  },
  {
    title: "Fast & Easy Delivery",
    desc: "Enjoy your favorite meals delivered to your doorstep, fast."
  }
];

export default function HowItWorksSection() {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, i) => (
            <div
              key={i}
              ref={el => (stepsRef.current[i] = el)}
              className="rounded-2xl shadow p-8 flex flex-col items-center border border-cream"
            >
              <h3 className="text-xl font-bold text-matcha mb-2">{item.title}</h3>
              <p className="text-brown text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 