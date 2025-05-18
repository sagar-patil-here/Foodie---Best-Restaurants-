import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import plate1 from '../../assets/plate 1.png';
import plate2 from '../../assets/plate 2.png';
import plate3d from '../../assets/3D Multi-Cuisine Plate.png';

gsap.registerPlugin(ScrollTrigger);

const featured = [
  {
    title: "Sushi Master",
    desc: "Premium Japanese cuisine, delivered fresh.",
    img: plate2
  },
  {
    title: "Pizza Paradise",
    desc: "Authentic Italian pizza, wood-fired to perfection.",
    img: plate1
  },
  {
    title: "Global Bites",
    desc: "A world of flavors on one plate.",
    img: plate3d
  }
];

export default function FeaturedSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((item, i) => (
            <div
              key={i}
              ref={el => (cardsRef.current[i] = el)}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform"
            >
              <img src={item.img} alt={item.title} className="w-32 h-32 object-cover rounded-full mb-6 border-4 border-matcha" />
              <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-brown text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 