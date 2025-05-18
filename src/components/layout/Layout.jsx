import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-cream font-body relative">
      <Navbar />
      <main>{children}</main>
     
    </div>
  );
} 