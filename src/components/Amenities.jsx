import React, { useState } from 'react';
import { 
  BedDouble, 
  ChefHat, 
  Shield, 
  Sparkles, 
  Check,
  ChevronDown,
  ChevronUp,
  Bus
} from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Amenities() {
  const sectionRef = useAnimateOnScroll();
  const [showSchedule, setShowSchedule] = useState(false);

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
        'Hygienic and healthy daily student meals (FSSAI standard)',
        'Healthy diet & sick care (Khichdi, oats & light food on request)'
      ]
    },
    {
      category: 'Utilities & Security',
      icon: Shield,
      items: [
        '24x7 power backup & high-speed Wi-Fi',
        '24x7 hot & cold water storage capacity',
        'Laundry services & washing machine access',
        'Resident Supervisor & biometric gate entry system'
      ]
    },
    {
      category: 'Recreation & Services',
      icon: Sparkles,
      items: [
        'Professional pool table — 15% off @ Food Vibes',
        'Recreational space for birthday celebrations',
        'On-call doctor & medical emergency support',
        'Free bus shuttle service to UPES campuses'
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

        {/* Shuttle Bus Schedule Accordion */}
        <div className="mt-12 max-w-3xl mx-auto">
          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full flex items-center justify-between bg-white/5 border border-gold-accent/15 rounded-2xl p-5 hover:border-gold-accent/40 hover:bg-white/10 transition-all duration-300 group text-left"
          >
            <div className="flex items-center gap-3 text-gold-accent">
              <Bus size={22} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display font-bold text-base sm:text-lg tracking-wide">
                View Free Campus Shuttle Timings
              </span>
            </div>
            <div className="text-gold-accent">
              {showSchedule ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </div>
          </button>

          {showSchedule && (
            <div className="mt-4 bg-white/5 border border-gold-accent/15 rounded-2xl p-6 sm:p-8 transition-all duration-300">
              <p className="font-sans text-xs sm:text-sm text-cream-bg/75 mb-6 leading-relaxed">
                We provide a dedicated free shuttle service for our residents to make sure you never miss a lecture or lab. Multiple daily runs directly to both Bidholi and Kandoli campuses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* To Campus */}
                <div className="bg-emerald-primary/45 border border-gold-accent/10 rounded-xl p-4 sm:p-5">
                  <h4 className="font-display font-bold text-sm text-gold-accent uppercase tracking-wider mb-3">
                    Hostel &rarr; UPES Campus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:45 AM'].map((time) => (
                      <span key={time} className="bg-white/5 border border-gold-accent/10 px-2.5 py-1 rounded text-xs text-cream-bg font-semibold font-sans">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                {/* From Campus */}
                <div className="bg-emerald-primary/45 border border-gold-accent/10 rounded-xl p-4 sm:p-5">
                  <h4 className="font-display font-bold text-sm text-gold-accent uppercase tracking-wider mb-3">
                    UPES Campus &rarr; Hostel
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['1:15 PM', '2:15 PM', '3:15 PM', '4:15 PM', '5:15 PM', '5:45 PM'].map((time) => (
                      <span key={time} className="bg-white/5 border border-gold-accent/10 px-2.5 py-1 rounded text-xs text-cream-bg font-semibold font-sans">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prem Nagar */}
              <div className="mt-6 bg-gold-accent/10 border border-gold-accent/20 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="font-display font-bold text-sm text-gold-accent uppercase tracking-wider mb-1">
                    Evening City Run (Prem Nagar)
                  </h4>
                  <p className="font-sans text-xs text-cream-bg/70">
                    Daily shuttle for shopping, dining, and weekend outings.
                  </p>
                </div>
                <span className="bg-gold-accent text-emerald-primary px-3 py-1.5 rounded-lg text-xs font-bold font-sans">
                  6:45 PM Daily
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
