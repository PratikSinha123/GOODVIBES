import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Contact() {
  const sectionRef = useAnimateOnScroll();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      tempErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.roomType) {
      tempErrors.roomType = 'Please select a room type';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Enquiry Form Submitted:', formData);
      
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          roomType: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="bg-cream-bg py-24 px-4 sm:px-6 lg:px-8 w-full relative"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-emerald-primary mb-4">
            Secure Your Space
          </h2>
          <p className="font-sans text-sm sm:text-base text-emerald-primary/70 max-w-2xl mx-auto">
            Admissions are open for the upcoming season. Send an enquiry or call us directly to book a visit.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Details & Direct Call Buttons */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-emerald-primary mb-6">
                Get In Touch
              </h3>
              <p className="font-sans text-sm sm:text-base text-emerald-primary/80 leading-relaxed mb-6">
                Have questions about pricing, food menus, or availability? Connect with our team directly.
              </p>
            </div>

            {/* Click to Call Buttons */}
            <div className="space-y-4">
              <a
                href="tel:8449755034"
                className="flex items-center gap-4 bg-emerald-primary hover:bg-emerald-primary/95 text-cream-bg hover:text-gold-accent p-5 rounded-2xl transition-all duration-300 shadow-md group transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-accent/15 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-emerald-primary transition-all duration-300 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream-bg/75 uppercase tracking-wider font-semibold">Enquire On Call</p>
                  <p className="font-display font-bold text-lg sm:text-xl">+91 84497 55034</p>
                </div>
              </a>

              <a
                href="tel:+919719000113"
                className="flex items-center gap-4 bg-emerald-primary hover:bg-emerald-primary/95 text-cream-bg hover:text-gold-accent p-5 rounded-2xl transition-all duration-300 shadow-md group transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-accent/15 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-emerald-primary transition-all duration-300 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream-bg/75 uppercase tracking-wider font-semibold">Enquire On Call</p>
                  <p className="font-display font-bold text-lg sm:text-xl">+91 97190 00113</p>
                </div>
              </a>
            </div>

            {/* General Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-accent shrink-0 mt-1" size={20} />
                <p className="font-sans text-sm text-emerald-primary/80 leading-relaxed">
                  32 Bigha, Near UPES Bidholi Campus, Bidholi, Dehradun, Uttarakhand
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gold-accent shrink-0" size={20} />
                <a href="mailto:info@goodvibesresidency.in" className="font-sans text-sm text-emerald-primary/80 hover:text-gold-accent transition-colors">
                  info@goodvibesresidency.in
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3 bg-white border border-emerald-primary/5 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent mb-6 animate-bounce">
                  <CheckCircle size={44} />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-emerald-primary mb-2">
                  Enquiry Submitted!
                </h3>
                <p className="font-sans text-emerald-primary/75 max-w-md mb-8">
                  Thank you for your interest in Good Vibes Residency. Our team will reach out to you on your phone number shortly to confirm availability.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-emerald-primary hover:bg-emerald-primary/95 text-gold-accent font-sans font-bold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-emerald-primary mb-6">
                  Online Booking Inquiry
                </h3>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-sans font-semibold text-emerald-primary/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full font-sans text-sm bg-cream-bg/50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold-accent/40 focus:border-gold-accent transition-all ${
                      errors.name ? 'border-red-500 bg-red-50/10' : 'border-emerald-primary/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 font-sans text-xs mt-1.5 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-sans font-semibold text-emerald-primary/90 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={`w-full font-sans text-sm bg-cream-bg/50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold-accent/40 focus:border-gold-accent transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50/10' : 'border-emerald-primary/10'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 font-sans text-xs mt-1.5 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Preferred Room Type Select */}
                <div>
                  <label htmlFor="roomType" className="block text-sm font-sans font-semibold text-emerald-primary/90 mb-2">
                    Preferred Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className={`w-full font-sans text-sm bg-cream-bg/50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold-accent/40 focus:border-gold-accent transition-all ${
                      errors.roomType ? 'border-red-500 bg-red-50/10' : 'border-emerald-primary/10'
                    }`}
                  >
                    <option value="" disabled>Select Room Type</option>
                    <option value="Single AC">Single Occupancy (AC)</option>
                    <option value="Single Non-AC">Single Occupancy (Non-AC)</option>
                    <option value="Double AC">Double Sharing (AC)</option>
                    <option value="Double Non-AC">Double Sharing (Non-AC)</option>
                    <option value="Triple Sharing">Triple Sharing (AC/Non-AC)</option>
                  </select>
                  {errors.roomType && (
                    <p className="text-red-500 font-sans text-xs mt-1.5 font-medium">{errors.roomType}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-semibold text-emerald-primary/90 mb-2">
                    Your Message / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us when you plan to join, if you require transport, or any specific requests..."
                    className={`w-full font-sans text-sm bg-cream-bg/50 border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold-accent/40 focus:border-gold-accent transition-all resize-none ${
                      errors.message ? 'border-red-500 bg-red-50/10' : 'border-emerald-primary/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 font-sans text-xs mt-1.5 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-primary hover:bg-emerald-primary/95 text-gold-accent font-sans font-extrabold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-gold-accent border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Floating WhatsApp Button (bottom-right) */}
      <a
        href="https://wa.me/919719000113"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none" />
        <MessageSquare size={24} className="relative z-10" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-emerald-primary text-cream-bg font-sans font-bold text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gold-accent/15">
          Chat on WhatsApp
        </span>
      </a>
    </section>
  );
}
