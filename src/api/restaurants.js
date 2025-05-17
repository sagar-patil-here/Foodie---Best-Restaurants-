// Mock API for demonstration
const mockRestaurants = [
  {
    id: 1,
    name: "Pizza Paradise",
    cuisine: ["Italian"],
    rating: 4.7,
    location: "Downtown",
    lat: 12.9716,
    lng: 77.5946,
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    reactions: { "😋": 124, "❤️": 87, "🔥": 203 }
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: ["Japanese"],
    rating: 4.9,
    location: "Harborview",
    lat: 12.9721,
    lng: 77.5950,
    imageUrl: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
    reactions: { "😋": 158, "❤️": 112, "🔥": 240 }
  },
];

export async function fetchRestaurants({ lat, lng, cuisine }) {
  // Simulate filtering by cuisine and proximity
  let filtered = mockRestaurants;
  if (cuisine && cuisine.length > 0) {
    filtered = filtered.filter(r => r.cuisine.some(c => cuisine.includes(c.toLowerCase())));
  }
  // In a real API, filter by lat/lng proximity
  return new Promise(res => setTimeout(() => res(filtered), 500));
}

export async function reactToRestaurant(restaurantId, emoji) {
  // Simulate updating emoji reaction
  const restaurant = mockRestaurants.find(r => r.id === restaurantId);
  if (restaurant) {
    restaurant.reactions[emoji] = (restaurant.reactions[emoji] || 0) + 1;
  }
  return new Promise(res => setTimeout(res, 200));
} 