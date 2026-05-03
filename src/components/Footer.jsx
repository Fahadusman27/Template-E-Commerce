import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6">AURA</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevating your presence with curated scents from around the globe. Discover your signature aura.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">All Fragrances</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Discovery Sets</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">About</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-50 border border-gray-200 px-4 py-2 w-full text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">&copy; 2026 Aura Perfumes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
