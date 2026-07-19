import React from 'react';
import { Coffee, CloudRain, Navigation } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Guides() {
  const sectionRef = useAnimateOnScroll();

  const guides = [
    {
      title: 'Best Student Cafes near UPES',
      desc: 'Discover the top student hangouts, pocket-friendly eateries, and late-night coffee spots around Bidholi.',
      icon: Coffee,
      badge: 'Food & Hangouts',
    },
    {
      title: 'Dehradun Weather & Packing Guide',
      desc: 'Everything you need to know about preparing for Dehradun monsoons, winters, and packing essentials.',
      icon: CloudRain,
      badge: 'Packing Tips',
    },
    {
      title: 'UPES Campus Transit & Routes',
      desc: 'A complete guide to navigating shuttle routes, local transit, auto stands, and getting around Dehradun.',
      icon: Navigation,
      badge: 'Local Travel',
    }
  ];

  return (
    <section 
      id="guides" 
      ref={sectionRef} 
      className="bg-cream-bg text-emerald-primary py-24 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-emerald-primary mb-4">
            UPES Student Guides
          </h2>
          <p className="font-sans text-sm sm:text-base text-emerald-primary/70 max-w-2xl mx-auto">
            Everything you need to know about living, studying, and thriving as a student near UPES Bidholi campus.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-emerald-primary/10 rounded-3xl p-6 sm:p-8 hover:border-gold-accent transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block bg-gold-accent/15 text-emerald-primary font-sans font-bold text-xs px-3 py-1 rounded-full mb-6">
                    {guide.badge}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-primary/5 flex items-center justify-center text-emerald-primary group-hover:bg-emerald-primary group-hover:text-gold-accent transition-all duration-300 mb-6">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-emerald-primary mb-4">
                    {guide.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-emerald-primary/75 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-emerald-primary/10">
                  <span className="text-xs sm:text-sm font-sans font-bold text-gold-accent group-hover:underline inline-flex items-center gap-1">
                    Read Guide &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
