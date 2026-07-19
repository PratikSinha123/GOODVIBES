import React from 'react';

export default function AdmissionsBar() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gold-accent text-emerald-primary text-center py-2.5 px-4 font-sans font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 relative z-50 shadow-sm">
      <span className="flex h-2.5 w-2.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-primary"></span>
      </span>
      <span>Admissions Open 2026-27 | Limited Premium Rooms Remaining</span>
      <a 
        href="#contact" 
        onClick={handleScrollToContact}
        className="underline hover:opacity-85 transition-opacity ml-1 inline-flex items-center gap-0.5"
      >
        Book Now &rarr;
      </a>
    </div>
  );
}
