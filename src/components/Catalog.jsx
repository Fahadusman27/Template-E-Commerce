import React, { useState } from 'react';
import { Filter, X, ChevronDown, Heart, ArrowLeft } from 'lucide-react';
import PaywallModal from './PaywallModal';

const products = [
  { id: 1, name: 'Midnight Oud', family: 'Woody', gender: 'Unisex', concentration: 'EDP', price: 185, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600', notes: 'Oud, Rose, Amber, Saffron' },
  { id: 2, name: 'Citrus Breeze', family: 'Citrus', gender: 'Female', concentration: 'EDT', price: 120, image: 'https://images.unsplash.com/photo-1595425970377-c9703bc48baf?auto=format&fit=crop&q=80&w=600', notes: 'Bergamot, Lemon, Jasmine, Musk' },
  { id: 3, name: 'Velvet Rose', family: 'Floral', gender: 'Female', concentration: 'EDP', price: 145, image: 'https://images.unsplash.com/photo-1592914610354-fd354d45fe82?auto=format&fit=crop&q=80&w=600', notes: 'Damask Rose, Peony, Vanilla' },
  { id: 4, name: 'Urban Woods', family: 'Woody', gender: 'Male', concentration: 'EDP', price: 160, image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600', notes: 'Sandalwood, Cedar, Vetiver, Pepper' },
  { id: 5, name: 'Oceanic Bloom', family: 'Floral', gender: 'Unisex', concentration: 'EDT', price: 110, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600', notes: 'Sea Salt, Lily, Ambergris' },
  { id: 6, name: 'Spiced Amber', family: 'Oriental', gender: 'Male', concentration: 'EDP', price: 175, image: 'https://images.unsplash.com/photo-1628133299712-1f3eb1a052e4?auto=format&fit=crop&q=80&w=600', notes: 'Cinnamon, Amber, Patchouli' },
];

const Catalog = ({ onProductClick, searchQuery = '', wishlist = [], onToggleWishlist, showWishlistOnly = false, onBack }) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [showPaywall, setShowPaywall] = useState(false);
  
  // States for filters (Static only)
  const [selectedFamily, setSelectedFamily] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedConcentration, setSelectedConcentration] = useState([]);

  const toggleFilter = (state, setState, value) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const isLiked = (id) => wishlist.some(p => p.id === id);

  const filteredProducts = products.filter(p => {
    // Wishlist filter
    if (showWishlistOnly && !isLiked(p.id)) return false;
    
    // Search filter
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

    // Filters are static in Lite version, so we don't filter based on them
    return true;
  });

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-4 mb-2">
              {showWishlistOnly && (
                <button onClick={onBack} className="text-gray-400 hover:text-black transition-colors">
                  <ArrowLeft size={24} />
                </button>
              )}
              <h1 className="text-4xl font-serif">{showWishlistOnly ? 'Your Collection' : 'All Fragrances'}</h1>
            </div>
            <p className="text-gray-500 font-light text-sm">
              {searchQuery ? `Results for "${searchQuery}"` : `Showing ${filteredProducts.length} results`}
            </p>
          </div>
          {!showWishlistOnly && (
            <button 
              className="md:hidden flex items-center text-sm font-medium uppercase tracking-wider"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <Filter size={18} className="mr-2" /> Filters
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filter - Desktop (Hidden in Wishlist view for focus) */}
          {!showWishlistOnly && (
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-10">
                
                {/* Fragrance Family */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Fragrance Family</h3>
                  <div className="space-y-3">
                    {['Floral', 'Woody', 'Citrus', 'Oriental'].map(family => (
                      <label key={family} className="flex items-center group cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-black border-gray-300 focus:ring-black rounded-none cursor-pointer"
                          checked={selectedFamily.includes(family)}
                          onChange={(e) => {
                            e.preventDefault();
                            setShowPaywall(true);
                          }}
                        />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-black">{family}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Gender</h3>
                  <div className="space-y-3">
                    {['Female', 'Male', 'Unisex'].map(gender => (
                      <label key={gender} className="flex items-center group cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-black border-gray-300 focus:ring-black rounded-none cursor-pointer"
                          checked={selectedGender.includes(gender)}
                          onChange={(e) => {
                            e.preventDefault();
                            setShowPaywall(true);
                          }}
                        />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-black">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Concentration */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Concentration</h3>
                  <div className="space-y-3">
                    {['EDP', 'EDT'].map(conc => (
                      <label key={conc} className="flex items-center group cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-black border-gray-300 focus:ring-black rounded-none cursor-pointer"
                          checked={selectedConcentration.includes(conc)}
                          onChange={(e) => {
                            e.preventDefault();
                            setShowPaywall(true);
                          }}
                        />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-black">{conc}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${showWishlistOnly ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-8 gap-y-12`}>
              {filteredProducts.map(product => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] mb-4 bg-gray-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      onClick={() => onProductClick(product)}
                    />
                    
                    {/* Love Button on Card */}
                    <button 
                      className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${isLiked(product.id) ? 'bg-black text-white' : 'bg-white/80 text-gray-400 hover:text-black'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                    >
                      <Heart size={18} fill={isLiked(product.id) ? "currentColor" : "none"} />
                    </button>

                    {/* Quick View Button */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        className="w-full bg-white/90 backdrop-blur text-black py-3 text-sm uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setShowPaywall(true);
                        }}
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div 
                    className="text-center cursor-pointer"
                    onClick={() => onProductClick(product)}
                  >
                    <h3 className="text-lg font-serif mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.concentration} • {product.family}</p>
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                {showWishlistOnly ? "Your collection is empty. Start adding some favorites!" : "No products found matching your search or filters."}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)}></div>
          <div className="relative bg-white w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl z-10 animate-fade-in-up">
            <button 
              className="absolute top-4 right-4 z-20 text-gray-500 hover:text-black bg-white/80 p-2 rounded-full backdrop-blur"
              onClick={() => setQuickViewProduct(null)}
            >
              <X size={20} />
            </button>
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">{quickViewProduct.concentration}</div>
              <h2 className="text-3xl font-serif mb-4">{quickViewProduct.name}</h2>
              <p className="text-xl font-light mb-8">${quickViewProduct.price}</p>
              
              {/* Love Button in Modal */}
              <button 
                className={`absolute top-12 right-12 p-3 rounded-full transition-all duration-300 ${isLiked(quickViewProduct.id) ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:text-black'}`}
                onClick={() => onToggleWishlist(quickViewProduct)}
              >
                <Heart size={20} fill={isLiked(quickViewProduct.id) ? "currentColor" : "none"} />
              </button>

              <div className="mb-8">
                <h4 className="text-sm font-medium uppercase tracking-widest mb-2 border-b border-gray-100 pb-2">Key Notes</h4>
                <p className="text-gray-600 font-light">{quickViewProduct.notes}</p>
              </div>
              
              <button 
                className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors mb-4"
                onClick={() => {
                  setQuickViewProduct(null);
                  onProductClick(quickViewProduct);
                }}
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Paywall Modal */}
      <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} />

    </div>
  );
};

export default Catalog;
