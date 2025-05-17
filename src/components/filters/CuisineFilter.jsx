import React from 'react';

const cuisines = [
  { id: 'italian', name: 'Italian', emoji: '🍝' },
  { id: 'japanese', name: 'Japanese', emoji: '🍣' },
  { id: 'mexican', name: 'Mexican', emoji: '🌮' },
  { id: 'indian', name: 'Indian', emoji: '🍛' },
  { id: 'chinese', name: 'Chinese', emoji: '🥡' },
  { id: 'american', name: 'American', emoji: '🍔' },
  { id: 'thai', name: 'Thai', emoji: '🍜' },
  { id: 'dessert', name: 'Dessert', emoji: '🍰' }
];

export default function CuisineFilter({ selected, onSelect }) {
  const handleClick = (id) => {
    if (selected.includes(id)) {
      onSelect(selected.filter(c => c !== id));
    } else {
      onSelect([...selected, id]);
    }
  };
  return (
    <div className="flex flex-wrap gap-3 justify-center my-6">
      {cuisines.map(c => (
        <button
          key={c.id}
          className={`px-4 py-2 rounded-full font-medium shadow transition-all duration-200 flex items-center gap-2 border-2 border-transparent hover:border-matcha hover:scale-105 ${selected.includes(c.id) ? 'bg-matcha text-white' : 'bg-cream text-primary'}`}
          onClick={() => handleClick(c.id)}
        >
          <span className="text-xl">{c.emoji}</span>
          {c.name}
        </button>
      ))}
    </div>
  );
} 