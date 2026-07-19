import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Location() {
  const sectionRef = useAnimateOnScroll();

  return (
    <section 
      id="location" 
      ref={sectionRef} 
      className="bg-emerald-primary text-cream-bg py-24 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gold-accent mb-4">
            Prime Location
          </h2>
          <p className="font-sans text-sm sm:text-base text-cream-bg/75 max-w-2xl mx-auto">
            Conveniently situated right near the UPES Bidholi Campus in Dehradun. Perfect for students.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Outer Grid: Map on one side, location info card on other */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Map details card */}
          <div className="bg-white/5 border border-gold-accent/20 p-8 rounded-3xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-3 text-gold-accent mb-6">
                <MapPin size={28} />
                <h3 className="font-display font-bold text-xl text-cream-bg">Address</h3>
              </div>
              
              <p className="font-sans text-base text-cream-bg/95 leading-relaxed mb-6">
                <strong>Good Vibes Residency</strong><br />
                32 Bigha, Near UPES Bidholi Campus,<br />
                Bidholi, Dehradun, Uttarakhand 248007
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation size={18} className="text-gold-accent shrink-0 mt-1" />
                  <p className="font-sans text-sm text-cream-bg/80 leading-relaxed">
                    <strong>Walking Distance:</strong> Just 2-3 minutes from the UPES Bidholi campus main gate.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Compass size={18} className="text-gold-accent shrink-0 mt-1" />
                  <p className="font-sans text-sm text-cream-bg/80 leading-relaxed">
                    <strong>Surroundings:</strong> Safe, green student residential area with cafes, grocery shops, and pharmacies nearby.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=UPES+Bidholi+Campus+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-accent-hover text-emerald-primary font-sans font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Google Map Iframe */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-xl min-h-[350px] lg:min-h-full border border-gold-accent/10">
            <iframe
              title="Good Vibes Residency Location Map"
              src="https://maps.google.com/maps?q=UPES%20Bidholi%20Campus%20Dehradun&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
