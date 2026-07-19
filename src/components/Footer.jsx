import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-emerald-primary text-cream-bg/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 w-full border-t border-gold-accent/15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Left Column: Logo & Tagline */}
        <div className="space-y-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo.png" 
              alt="Good Vibes Hostel & Residency Logo" 
              className="h-12 w-12 rounded-xl border border-gold-accent/20 group-hover:scale-105 transition-transform duration-300 shadow-sm"
            />
            <div className="font-display font-extrabold text-xl text-cream-bg tracking-wide flex flex-col leading-none">
              <span>GOOD VIBES</span>
              <span className="text-gold-accent text-xs font-semibold tracking-[0.12em] mt-1">HOSTEL & RESIDENCY</span>
            </div>
          </a>
          <p className="font-sans text-sm text-cream-bg/70 leading-relaxed max-w-sm">
            Premium boutique student-living brand offering modern furnished accommodation for boys & girls near UPES Bidholi Campus.
          </p>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div>
          <h3 className="font-display font-bold text-lg text-cream-bg mb-4 tracking-wider uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-sans text-sm hover:text-gold-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact info */}
        <div>
          <h3 className="font-display font-bold text-lg text-cream-bg mb-4 tracking-wider uppercase">
            Contact Us
          </h3>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-accent shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-cream-bg/70 leading-relaxed">
                32 Bigha, Near UPES Bidholi Campus, Bidholi, Dehradun, Uttarakhand 248007
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-accent shrink-0" />
              <div className="font-sans text-sm text-cream-bg/70 space-y-0.5">
                <a href="tel:8449755034" className="hover:text-gold-accent transition-colors block">+91 84497 55034 (Enquiries)</a>
                <a href="tel:+919719000113" className="hover:text-gold-accent transition-colors block">+91 97190 00113 (Office)</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-accent shrink-0" />
              <a href="mailto:info@goodvibesresidency.in" className="font-sans text-sm hover:text-gold-accent transition-colors">
                info@goodvibesresidency.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-cream-bg/50 text-center sm:text-left">
          &copy; {currentYear} Good Vibes Hostel & Residency. All rights reserved. Developed with premium design.
        </p>

        {/* Scroll back to top button */}
        <button
          onClick={handleScrollToTop}
          className="bg-white/5 border border-white/10 hover:border-gold-accent text-cream-bg hover:text-gold-accent p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
