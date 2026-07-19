import React from 'react';
import AdmissionsBar from './components/AdmissionsBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsStrip from './components/HighlightsStrip';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Guides from './components/Guides';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

function App() {
  // Activate scroll-reveal animations across all sections on the page
  useAnimateOnScroll();

  return (
    <div className="flex flex-col min-h-screen bg-cream-bg text-emerald-primary select-none antialiased">
      {/* Top Admissions Announcement Bar */}
      <AdmissionsBar />

      {/* Sticky top navigation */}
      <Navbar />

      {/* Main marketing sections */}
      <main className="flex-grow">
        <Hero />
        <HighlightsStrip />
        <Amenities />
        <Gallery />
        <Reviews />
        <Guides />
        <Location />
        <FAQ />
        <Contact />
      </main>

      {/* Corporate footer */}
      <Footer />
    </div>
  );
}

export default App;
