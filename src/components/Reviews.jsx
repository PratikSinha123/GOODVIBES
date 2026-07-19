import React from 'react';
import { Star, Quote } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Reviews() {
  const sectionRef = useAnimateOnScroll();

  const testimonials = [
    {
      name: 'Dr. Suresh Rawat',
      role: 'Parent Review',
      content: 'Choosing a hostel for my son was a major concern, but Good Vibes has exceeded expectations. The security is top-notch with biometric gates, and the FSSAI-standard meals give us complete peace of mind.',
      rating: 5,
      avatarText: 'SR',
      highlighted: true,
    },
    {
      name: 'Ketan Sharma',
      role: 'UPES B.Tech CSE Student',
      content: 'The high-speed Wi-Fi has been a lifesaver for my online programming labs. Rooms are extremely spacious, and the housekeeping keeps everything completely clean and hygienic.',
      rating: 5,
      avatarText: 'KS',
      highlighted: false,
    },
    {
      name: 'Rohan Bhatia',
      role: 'UPES MBA Student',
      content: 'The rotational meals are excellent and actually taste like home. Plus, having the pool table room and common lounge is the perfect way to unwind after long lecture sessions.',
      rating: 5,
      avatarText: 'RB',
      highlighted: false,
    }
  ];

  return (
    <section 
      id="reviews" 
      ref={sectionRef} 
      className="bg-emerald-primary text-cream-bg py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-gold-accent/15"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 bg-gold-accent/20 border border-gold-accent/40 text-gold-accent px-4 py-1.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider mb-4 animate-pulse">
            <Star size={12} className="fill-gold-accent" />
            4.8 Stars (120+ Student Reviews)
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-gold-accent mb-4">
            What Parents & Students Say
          </h2>
          <p className="font-sans text-sm sm:text-base text-cream-bg/75 max-w-2xl mx-auto">
            Real feedback from our resident community members and their families.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`bg-white/5 rounded-3xl p-6 sm:p-8 hover:border-gold-accent transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between ${
                t.highlighted ? 'border-2 border-gold-accent' : 'border border-gold-accent/15'
              }`}
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-gold-accent/20">
                <Quote size={40} className="fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-accent text-gold-accent" />
                  ))}
                </div>

                {/* Testimonial body */}
                <p className="font-sans text-sm sm:text-base text-cream-bg/90 leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gold-accent/10">
                <div className="w-10 h-10 rounded-full bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent font-sans font-bold text-sm shrink-0">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-gold-accent leading-none mb-1">
                    {t.name}
                  </h4>
                  <span className="font-sans text-xs text-cream-bg/60">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
