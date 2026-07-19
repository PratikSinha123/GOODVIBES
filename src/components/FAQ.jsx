import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function FAQ() {
  const sectionRef = useAnimateOnScroll();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How far is Good Vibes Hostel & Residency from the UPES campus?',
      a: 'We are located in the 32 Bigha area, just minutes from the UPES Bidholi Campus in Dehradun. To make travel even easier, we provide a free daily campus shuttle bus for all our residents.'
    },
    {
      q: 'What room types are available?',
      a: 'We offer fully furnished single occupancy and premium twin sharing rooms. Every room comes equipped with study desks, study chairs, wardrobes, comfortable beds with storage, and attached modern washrooms. AC and Non-AC options are available.'
    },
    {
      q: 'What is the food quality and menu structure?',
      a: 'Our meals are prepared under strict FSSAI hygiene standards by experienced cooks. We serve 4 vegetarian meals daily (breakfast, lunch, evening snacks, and dinner). For students who fall ill, we provide custom light meals like khichdi and oats on request.'
    },
    {
      q: 'What safety and security protocols are in place?',
      a: 'Your safety is our top priority. The property is secured with 24/7 CCTV security monitoring, biometric gate entry control systems, on-site security personnel, and a Resident Supervisor living on-site to handle any overnight needs.'
    },
    {
      q: 'Are high-speed Wi-Fi and power backup included?',
      a: 'Yes, unlimited high-speed Wi-Fi and 24/7 power backup via a silent generator set are fully included in the package. There are no hidden or extra utility fees.'
    },
    {
      q: 'How do I book a room or check availability?',
      a: 'Simply fill out the booking form at the bottom of this website, or call our enquiry lines directly at +91 84497 55034 or +91 97190 00113. We will instantly check availability and guide you through the registration process.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef} 
      className="bg-cream-bg text-emerald-primary py-24 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-4xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-emerald-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-emerald-primary/70 max-w-2xl mx-auto">
            Everything students and parents need to know about joining our hostel community.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-emerald-primary/10 rounded-2xl overflow-hidden hover:border-gold-accent transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-emerald-primary">
                    {faq.q}
                  </span>
                  <span className="text-gold-accent ml-4 shrink-0">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-emerald-primary/75 leading-relaxed font-sans border-t border-emerald-primary/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
