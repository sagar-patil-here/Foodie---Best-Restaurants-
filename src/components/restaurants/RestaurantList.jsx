import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import EmojiReaction from '../ui/EmojiReaction';

export default function RestaurantList({ restaurants, onReact }) {
  const cardsRef = useRef([]);
  useEffect(() => {
    if (restaurants.length) {
      gsap.fromTo(cardsRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 });
    }
  }, [restaurants]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {restaurants.map((r, i) => (
        <div
          ref={el => cardsRef.current[i] = el}
          key={r.id}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <img src={r.imageUrl} alt={r.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-cream" />
          <h3 className="font-heading text-xl text-primary mb-1">{r.name}</h3>
          <div className="text-brown mb-1">{r.cuisine.join(', ')}</div>
          <div className="text-sm text-gray mb-2">{r.location}</div>
          <div className="text-sm text-matcha font-bold mb-2">⭐ {r.rating}</div>
          <EmojiReaction restaurantId={r.id} reactions={r.reactions} onReact={onReact} />
        </div>
      ))}
    </div>
  );
} 