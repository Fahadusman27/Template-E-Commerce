import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-serif mb-8">Our Story</h1>
        <div className="w-16 h-px bg-black mx-auto mb-10"></div>
        
        <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
          <p>
            Founded in 2026, Aura Perfumes emerged from a simple yet profound belief: that fragrance is the most intimate form of self-expression. We believe that a scent can capture a memory, evoke an emotion, and define a moment in time.
          </p>
          <p>
            Our master perfumers travel the world sourcing the finest, most sustainable raw materials. From the sun-drenched citrus groves of Italy to the rich, earthy oud forests of Southeast Asia, every note is carefully selected and blended with precision and passion.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1608528577891-eb05eb241280?auto=format&fit=crop&q=80&w=1200" 
            alt="Perfume creation process" 
            className="w-full h-[400px] object-cover my-12"
          />
          <p>
            We are committed to crafting not just perfumes, but olfactory experiences. Each bottle of Aura is a testament to the art of fine fragrance, designed to enhance your natural aura and leave an unforgettable impression wherever you go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
