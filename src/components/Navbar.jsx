import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = ({ onCartOpen, onNavigate, cartCount, searchQuery, setSearchQuery }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [tempSearch, setTempSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(tempSearch);
    setTempSearch('');
    onNavigate('catalog');
    setIsSearchVisible(false);
  };

  return (
    <nav className="fixed w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button className="p-2 -ml-2 mr-2 md:hidden text-gray-600 hover:text-black">
              <Menu size={24} />
            </button>
            <div 
              className="text-2xl font-serif font-bold tracking-wider cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              AURA
            </div>
            {!isSearchVisible && (
              <div className="hidden md:flex ml-10 space-x-8">
                <button onClick={() => onNavigate('catalog')} className="text-sm font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-widest">Shop</button>
                <button onClick={() => onNavigate('collections')} className="text-sm font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-widest">Collections</button>
                <button onClick={() => onNavigate('about')} className="text-sm font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-widest">About</button>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-6">
            <div className={`flex items-center transition-all duration-300 ${isSearchVisible ? 'w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input 
                  type="text"
                  placeholder="Search fragrances..."
                  className="w-full bg-parfum-light border-b border-gray-300 px-2 py-1 text-sm focus:outline-none focus:border-black"
                  value={tempSearch}
                  onChange={(e) => setTempSearch(e.target.value)}
                  onBlur={() => !tempSearch && setIsSearchVisible(false)}
                />
                <button type="submit" className="hidden">Search</button>
              </form>
            </div>
            
            <button 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              {isSearchVisible ? <X size={20} /> : <Search size={20} />}
            </button>
            
            <button 
              className="text-gray-600 hover:text-black transition-colors relative"
              onClick={onCartOpen}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
