import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import QuoteForm from './components/QuoteForm';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import SidebarWidget from './components/SidebarWidget';

function App() {
  return (
    <div className="font-sans text-darkBlack bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Main Lead Gen Form */}
        <QuoteForm />
        
        {/* Services Section */}
        <Services />

        {/* Philosophy Section (Replaces Reviews) */}
        <Philosophy />
        
        {/* Project Portfolio */}
        <Portfolio />

        {/* Ready to get started: Mid-page CTA */}
        <CtaBanner />
        
        {/* About the Business/Contractor */}
        <About />
        
        {/* Location & Map Section */}
        <MapSection />
      </main>

      <Footer />
      
      {/* Sticky Sidebar Widget */}
      <SidebarWidget />
    </div>
  );
}

export default App;