import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';
import Preloader from './components/ui/Preloader';
import FeaturedSection from './components/home/FeaturedSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import Footer from './components/layout/Footer';
import Nearby from './pages/Nearby';
import Testimonial from './pages/Testimonial';

function HomePage({ heroTextVisible }) {
  return (
    <Layout>
      <HeroSection heroTextVisible={heroTextVisible} />
      <FeaturedSection />
      <HowItWorksSection />
      <Footer />
    </Layout>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [heroTextVisible, setHeroTextVisible] = useState(false);

  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [loading]);

  // Hide preloader from DOM after fade-out
  const handlePreloaderFinish = () => {
    setLoading(false);
    setTimeout(() => setHeroTextVisible(true), 400); // 400ms into the 800ms fade-out
    setTimeout(() => setShowPreloader(false), 800); // match fade duration in Preloader
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomePage heroTextVisible={heroTextVisible} />
            {showPreloader && (
              <div className="fixed inset-0 z-50 pointer-events-none">
                <Preloader onFinish={handlePreloaderFinish} />
              </div>
            )}
          </>
        }
      />
      <Route path="/nearby" element={<Nearby />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  );
}

