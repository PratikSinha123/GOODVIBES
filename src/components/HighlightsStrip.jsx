import React from 'react';
import { Wifi, ShieldCheck, Utensils, Home } from 'lucide-react';

export default function HighlightsStrip() {
  const highlights = [
    {
      icon: Wifi,
      title: 'High Speed Wi-Fi',
      desc: 'Seamless streaming & study',
    },
    {
      icon: ShieldCheck,
      title: '24x7 Security',
      desc: 'CCTV & warden surveillance',
    },
    {
      icon: Utensils,
      title: 'Delicious Food',
      desc: 'Experienced in-house cook',
    },
    {
      icon: Home,
      title: 'Comfortable Living',
      desc: 'Spacious & premium layout',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-16 max-w-6xl mx-auto px-4">
      <div className="bg-emerald-primary/75 backdrop-blur-xl border border-gold-accent/30 rounded-3xl shadow-2xl p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {highlights.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left p-4 rounded-2xl hover:bg-white/5 hover:scale-[1.03] hover:shadow-lg border border-transparent hover:border-gold-accent/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-emerald-primary transition-all duration-500 shadow-md shrink-0">
                <IconComponent size={28} className="transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-cream-bg tracking-wide">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-cream-bg/70 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
