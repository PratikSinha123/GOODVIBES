import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

export default function Gallery() {
  const sectionRef = useAnimateOnScroll();
  const [selectedTab, setSelectedTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'bedrooms', name: 'Bedrooms' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'common lounge', name: 'Common Lounge' },
    { id: 'pool table room', name: 'Pool Table Room' },
    { id: 'washrooms', name: 'Washrooms' }
  ];

  const galleryItems = [
    {
      src: '/images/bedroom.png',
      category: 'bedrooms',
      title: 'Premium Twin Sharing Room (A)',
      desc: 'Spacious well-ventilated rooms with dedicated study setups and warm lighting.',
      alt: 'Luxury student PG room near UPES Bidholi Dehradun - Good Vibes Residency'
    },
    {
      src: '/images/bedroom_2.png',
      category: 'bedrooms',
      title: 'Premium Twin Sharing Room (B)',
      desc: 'Comfortable layouts with marble finishes, dark stone styling and premium fittings.',
      alt: 'Spacious boys and girls PG accommodation Bidholi Dehradun - Good Vibes Residency'
    },
    {
      src: '/images/kitchen.png',
      category: 'kitchen',
      title: 'Modern Student Kitchen',
      desc: 'Equipped with RO water purifier, refrigerator, and induction cooktops.',
      alt: 'Hygienic student kitchen with RO purifier near UPES Bidholi - Good Vibes Residency'
    },
    {
      src: '/images/lounge.png',
      category: 'common lounge',
      title: 'Luxury Common Lounge (A)',
      desc: 'Vibrant social area with premium modular teal sofas and ambient lighting.',
      alt: 'Premium common lounge area in student hostel Bidholi - Good Vibes Residency'
    },
    {
      src: '/images/lounge_2.png',
      category: 'common lounge',
      title: 'Luxury Common Lounge (B)',
      desc: 'Clean, open-plan recreational lounge with direct access to natural lighting.',
      alt: 'Common study and recreational area in Dehradun hostel - Good Vibes Residency'
    },
    {
      src: '/images/pool_room.png',
      category: 'pool table room',
      title: 'Recreation & Play Area',
      desc: 'Professional pool table and lounge area for recreation.',
      alt: 'Student recreation pool table room near UPES campus - Good Vibes Residency'
    },
    {
      src: '/images/bathroom.png',
      category: 'washrooms',
      title: 'Attached Luxury Washroom',
      desc: 'Stunning marble-tiled walls, high-end sanitaryware, and premium geyser fittings.',
      alt: 'Attached luxury bathroom in student PG room Bidholi - Good Vibes Residency'
    }
  ];

  const filteredItems = selectedTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedTab);

  const openLightbox = (index) => {
    // Find index of the item in the filtered items array
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section 
      id="gallery" 
      ref={sectionRef} 
      className="bg-cream-bg py-24 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-emerald-primary mb-4">
            Residency Tour
          </h2>
          <p className="font-sans text-sm sm:text-base text-emerald-primary/70 max-w-2xl mx-auto">
            Step inside Good Vibes Hostel & Residency. See our premium spaces designed for student life.
          </p>
          <div className="w-24 h-1 bg-gold-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`font-sans font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-sm ${
                selectedTab === tab.id
                  ? 'bg-emerald-primary text-gold-accent border border-emerald-primary'
                  : 'bg-white text-emerald-primary/80 border border-emerald-primary/10 hover:border-emerald-primary/30 hover:bg-cream-bg'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-emerald-primary shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => openLightbox(idx)}
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-emerald-primary/20">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-primary via-emerald-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block bg-gold-accent text-emerald-primary font-sans font-bold text-xxs px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 w-max">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-lg text-cream-bg flex items-center gap-2">
                  {item.title}
                  <Maximize2 size={16} className="text-gold-accent" />
                </h3>
                <p className="font-sans text-xs text-cream-bg/75 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-emerald-primary/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream-bg hover:text-gold-accent transition-colors duration-300 z-50 p-2 rounded-full hover:bg-white/5"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Prev Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-6 text-cream-bg hover:text-gold-accent transition-colors duration-300 z-50 p-3 rounded-full bg-emerald-primary/80 hover:bg-emerald-primary border border-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Lightbox Image & Info Container */}
          <div 
            className="max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt || filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/5"
            />
            <div className="text-center mt-6 max-w-2xl">
              <span className="inline-block bg-gold-accent text-emerald-primary font-sans font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-cream-bg">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-sans text-sm text-cream-bg/85 mt-2">
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={showNext}
              className="absolute right-6 text-cream-bg hover:text-gold-accent transition-colors duration-300 z-50 p-3 rounded-full bg-emerald-primary/80 hover:bg-emerald-primary border border-white/10"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
