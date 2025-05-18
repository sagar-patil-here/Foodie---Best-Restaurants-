import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';
import Preloader from './components/ui/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [loading]);

  // Hide preloader from DOM after fade-out
  const handlePreloaderFinish = () => {
    setLoading(false);
    setTimeout(() => setShowPreloader(false), 800); // match fade duration in Preloader
  };

  return (
    <div className="relative">
      <Layout>
        <HeroSection />
        {/* Other sections (products, features, pairings, etc.) will go here */}
      </Layout>
      {showPreloader && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Preloader onFinish={handlePreloaderFinish} />
        </div>
      )}
    </div>
  );
}

export default App;
