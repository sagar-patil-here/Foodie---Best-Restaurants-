import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      {/* Other sections (products, features, pairings, etc.) will go here */}
    </Layout>
  );
}

export default App;
