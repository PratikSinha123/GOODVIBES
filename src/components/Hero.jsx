import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Emerald Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out transform scale-105"
        style={{ backgroundImage: `url('/images/building_exterior.png')` }}
      />
      
      {/* Gradient Overlay (emerald to dark transparent) */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-primary/90 via-emerald-primary/75 to-emerald-primary/95" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Gold Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-accent/20 border border-gold-accent/40 text-gold-accent px-4 py-2 rounded-full font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-gold-accent" />
          Booking Open — Admissions On
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-cream-bg tracking-tight leading-tight mb-4 drop-shadow-md">
          Good Vibes <span className="text-gold-accent">Residency</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans font-medium text-lg sm:text-2xl text-cream-bg/90 tracking-wide max-w-2xl mb-10 leading-relaxed">
          Premium boutique student living near UPES Bidholi Campus, Dehradun. Experience a home away from home.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto bg-gold-accent hover:bg-gold-accent-hover text-emerald-primary font-sans font-extrabold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Enquire Now
          </a>
          <a
            href="#amenities"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#amenities')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border border-cream-bg/30 hover:border-gold-accent text-cream-bg hover:text-gold-accent font-sans font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm text-center"
          >
            Explore Amenities
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => {
          document.querySelector('#amenities')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`absolute bottom-20 sm:bottom-28 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream-bg/60 hover:text-gold-accent transition-all duration-500 cursor-pointer animate-bounce ${
          showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="font-sans text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <ArrowDown size={18} />
      </div>
    </header>
  );
}
