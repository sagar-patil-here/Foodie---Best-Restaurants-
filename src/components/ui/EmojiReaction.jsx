import React, { useState } from 'react';

export default function EmojiReaction({ restaurantId, reactions, onReact }) {
  const [localReactions, setLocalReactions] = useState(reactions);

  const handleReact = async (emoji) => {
    setLocalReactions(r => ({ ...r, [emoji]: (r[emoji] || 0) + 1 }));
    await onReact(restaurantId, emoji);
  };

  return (
    <div className="flex gap-2 mt-2">
      {Object.entries(localReactions).map(([emoji, count]) => (
        <button
          key={emoji}
          onClick={() => handleReact(emoji)}
          className="hover:scale-125 transition-transform duration-200 text-2xl px-2"
        >
          {emoji} <span className="text-xs ml-1">{count}</span>
        </button>
      ))}
    </div>
  );
} 