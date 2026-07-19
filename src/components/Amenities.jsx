import React from 'react';
import { 
  BedDouble, 
  ChefHat, 
  Shield, 
  Sparkles, 
  Check 
} from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Amenities() {
  const sectionRef = useAnimateOnScroll();

  const categorizedAmenities = [
    {
      category: 'Room & Living Comfort',
      icon: BedDouble,
      items: [
        'AC & Non-AC well-furnished spacious rooms',
        'Excellent daily room housekeeping services',
        'Rest areas with sofa & LED on every floor',
        'Dedicated secure parking spaces'
      ]
    },
    {
      category: 'Dining & Kitchen',
      icon: ChefHat,
      items: [
        'Catering services by experienced in-house cooks',
        'Kitchen with RO, fridge & induction on every floor',
        'Hygienic and healthy daily student meals'
      ]
    },
    {
      category: 'Utilities & Security',
      icon: Shield,
      items: [
        '24x7 power backup & high-speed Wi-Fi',
        '24x7 hot & cold water storage capacity',
        'Laundry services & washing machine access',
        'Resident Supervisor for on-site support'
      ]
    },
    {
      category: 'Recreation & Services',
      icon: Sparkles,
      items: [
        'Professional pool table — 15% off @ Food Vibes',
        'Recreational space for birthday celebrations',
        'On-call doctor & medical emergency support',
        'In-house student transport facilities'
      ]
    }
  ];

  return (
    <section 
      id="amenities" 
      ref={sectionRef} 
      className="bg-emerald-primary text-cream-bg py-24 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gold-accent mb-4">
            Elite Amenities
          </h2>
          <p className="font-sans text-sm sm:text-base text-cream-bg/75 max-w-2xl mx-auto">
            We provide premium student living with a modern, high-end ecosystem designed for comfort, study, and recreation.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorizedAmenities.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-white/5 border border-gold-accent/15 rounded-3xl p-6 sm:p-8 hover:border-gold-accent/40 transition-all duration-300 hover:shadow-xl group"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-emerald-primary transition-all duration-300 shrink-0">
                    <CategoryIcon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gold-accent tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <Check size={18} className="text-gold-accent shrink-0 mt-0.5" />
                      <span className="font-sans text-sm sm:text-base text-cream-bg/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
