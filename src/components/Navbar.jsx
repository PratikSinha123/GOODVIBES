import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'amenities', 'gallery', 'location', 'contact']);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav transition-all duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="font-display font-extrabold text-xl sm:text-2xl text-cream-bg tracking-wide flex flex-col leading-none"
            >
              <span>GOOD VIBES</span>
              <span className="text-gold-accent text-xs font-semibold tracking-[0.25em] mt-1">RESIDENCY</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-sans font-medium text-sm transition-all duration-300 relative py-2 ${
                    isActive ? 'text-gold-accent font-semibold' : 'text-cream-bg/80 hover:text-gold-accent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-accent rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
            <a
              href="tel:8449755034"
              className="bg-gold-accent hover:bg-gold-accent-hover text-emerald-primary font-sans font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>Call Support</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cream-bg hover:text-gold-accent hover:bg-emerald-primary/50 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Slide-out menu) */}
      <div
        className={`fixed inset-0 z-40 bg-emerald-primary/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-64 bg-emerald-primary border-l border-gold-accent/20 p-6 flex flex-col justify-between transition-transform duration-300 transform shadow-2xl ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-extrabold text-lg text-cream-bg">GOOD VIBES</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream-bg hover:text-gold-accent"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-sans text-base py-2 border-b border-white/5 transition-colors ${
                      isActive ? 'text-gold-accent font-semibold' : 'text-cream-bg/85 hover:text-gold-accent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <a
              href="tel:8449755034"
              className="w-full bg-gold-accent hover:bg-gold-accent-hover text-emerald-primary font-sans font-bold px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <Phone size={18} />
              <span>Call Support</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
