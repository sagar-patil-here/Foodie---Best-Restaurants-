import { useState, useEffect } from 'react';

export default function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }),
      (err) => setError(err.message)
    );
  }, []);

  return { location, error };
} 