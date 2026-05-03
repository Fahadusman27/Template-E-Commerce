import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Date Night',
    description: 'Seductive & mysterious scents',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Office Friendly',
    description: 'Clean, subtle & professional',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703bc48baf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Weekend Escapes',
    description: 'Fresh & energetic notes',
    image: 'https://images.unsplash.com/photo-1592914610354-fd354d45fe82?auto=format&fit=crop&q=80&w=800',
  }
];

const Home = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-parfum-light">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=2000" 
            alt="Perfume Hero" 
            className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply filter grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="block text-sm md:text-base tracking-[0.3em] text-white/90 uppercase mb-4 font-medium">New Collection 2026</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-md">
            The Essence of <br/><span className="italic font-light">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-sm">
            Discover a world of olfactory art. Handcrafted fragrances that speak before you do.
          </p>
          <button 
            onClick={() => onNavigate('catalog')}
            className="group inline-flex items-center bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Explore Collection
            <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Curated Collections Section */}
      <section id="collections-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Curated by Mood</h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              Find the perfect scent tailored to your moments. From boardroom confidence to romantic evenings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className="group relative h-[450px] overflow-hidden cursor-pointer"
                onClick={() => onNavigate('catalog')}
              >
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif text-white mb-2">{collection.title}</h3>
                  <p className="text-white/80 font-light mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-white text-sm font-medium uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    Shop Now <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Quote */}
      <section className="py-24 bg-parfum-light text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-serif italic font-light text-gray-800 leading-relaxed">
            "Perfume is the art that makes memory speak. It is the invisible, unforgettable, ultimate accessory."
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
