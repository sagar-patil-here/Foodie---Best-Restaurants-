import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-cream font-body relative">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-heading text-lg">Save up to 50% or more on matcha powder</p>
            <p className="text-sm mt-2">Get 50% off our premium matcha powder for double deals.</p>
            <button className="mt-4 px-6 py-2 bg-matcha text-white rounded-full font-bold hover:bg-green-700 transition">Subscribe Us</button>
          </div>
          <div className="text-center md:text-right">
            <p>maton@gmail.com</p>
            <p>+62 812 3456 7890</p>
            <div className="mt-2 flex gap-2 justify-center md:justify-end">
              <a href="#" className="underline text-cream">Privacy & Policy</a>
              <a href="#" className="underline text-cream">Terms & Condition</a>
            </div>
            <p className="mt-2">© 2024 MATON</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 