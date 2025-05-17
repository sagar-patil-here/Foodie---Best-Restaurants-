import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function latLngToXYZ(lat, lng, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  ];
}

function GlobeMarkers({ locations, color }) {
  return locations.map((loc, i) => (
    <mesh key={i} position={latLngToXYZ(loc.lat, loc.lng, 1.01)}>
      <sphereGeometry args={[0.025, 16, 16]} />
      <meshStandardMaterial color={color || '#C6E870'} />
    </mesh>
  ));
}

export default function Globe({ userLocation, restaurantLocations }) {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#1A2E1A" wireframe={false} />
        </mesh>
        {userLocation && <GlobeMarkers locations={[userLocation]} color="#7BAE4B" />}
        {restaurantLocations && <GlobeMarkers locations={restaurantLocations} color="#B48A5A" />}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
} 