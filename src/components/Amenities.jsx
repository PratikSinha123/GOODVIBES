import React from 'react';
import { 
  BedDouble, 
  Flame, 
  Sparkles, 
  Bus, 
  Shirt, 
  Zap, 
  Droplets, 
  RotateCw, 
  Wifi, 
  Shield, 
  ChefHat, 
  HeartPulse, 
  Car, 
  Cake, 
  Percent, 
  Tv 
} from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Amenities() {
  const sectionRef = useAnimateOnScroll();

  const amenitiesList = [
    { icon: BedDouble, text: 'AC & Non-AC rooms well furnished' },
    { icon: Flame, text: 'Kitchen with RO, fridge & induction at every floor' },
    { icon: Sparkles, text: 'Spacious rooms with excellent housekeeping' },
    { icon: Bus, text: 'Transport facilities' },
    { icon: Shirt, text: 'Laundry services' },
    { icon: Zap, text: '24x7 power backup' },
    { icon: Droplets, text: '24x7 hot & cold water storage' },
    { icon: RotateCw, text: 'Washing machine access' },
    { icon: Wifi, text: '24x7 high speed Wi-Fi' },
    { icon: Shield, text: 'Resident Supervisor' },
    { icon: ChefHat, text: 'Catering by an experienced cook' },
    { icon: HeartPulse, text: 'Doctor on call' },
    { icon: Car, text: 'Dedicated parking space' },
    { icon: Cake, text: 'Space available for birthday celebration' },
    { icon: Percent, text: 'Pool table — 15% off @ Food Vibes' },
    { icon: Tv, text: 'Rest area with sofa & LED at every floor' }
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

        {/* Two-Column / Grid Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-gold-accent/10 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-emerald-primary transition-all duration-300 shrink-0">
                  <Icon size={20} />
                </div>
                {/* Label */}
                <span className="font-sans font-medium text-sm sm:text-base text-cream-bg/90 group-hover:text-cream-bg transition-colors">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
