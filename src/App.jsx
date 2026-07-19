import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsStrip from './components/HighlightsStrip';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

function App() {
  // Activate scroll-reveal animations across all sections on the page
  useAnimateOnScroll();

  return (
    <div className="flex flex-col min-h-screen bg-cream-bg text-emerald-primary select-none antialiased">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Main marketing sections */}
      <main className="flex-grow">
        <Hero />
        <HighlightsStrip />
        
        {/* We add reveal-on-scroll to animate entire sections or their items */}
        <div className="reveal-on-scroll">
          <Amenities />
        </div>
        
        <div className="reveal-on-scroll">
          <Gallery />
        </div>
        
        <div className="reveal-on-scroll">
          <Location />
        </div>
        
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* Corporate footer */}
      <Footer />
    </div>
  );
}

export default App;
