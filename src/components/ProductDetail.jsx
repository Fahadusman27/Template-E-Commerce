import React, { useState } from 'react';
import { ChevronRight, Heart, Share2, ArrowLeft, Gift } from 'lucide-react';
import PaywallModal from './PaywallModal';

const ProductDetail = ({ product, onBack, onAddToCart, wishlist = [], onToggleWishlist }) => {
  const [selectedSize, setSelectedSize] = useState('100ml');
  const [showPaywall, setShowPaywall] = useState(false);
  
  const sizes = [
    { id: '5ml', label: 'Vial 5ml', priceMult: 0.15 },
    { id: '30ml', label: '30ml', priceMult: 0.45 },
    { id: '100ml', label: '100ml', priceMult: 1 },
  ];

  const currentPrice = (product.price * sizes.find(s => s.id === selectedSize).priceMult).toFixed(2);
  const isLiked = wishlist.some(p => p.id === product.id);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest mb-8">
          <button onClick={onBack} className="flex items-center hover:text-black transition-colors">
            <ArrowLeft size={14} className="mr-2" />
            Back to Shop
          </button>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-black">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden sticky top-24">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 py-4">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">{product.concentration} • {product.family}</div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl font-light mb-8">${currentPrice}</p>

            <p className="text-gray-600 font-light leading-relaxed mb-10">
              An olfactory masterpiece that captures the essence of {product.family.toLowerCase()} notes. 
              Meticulously crafted for those who appreciate the finer details of perfumery. 
              This {product.gender.toLowerCase()} fragrance leaves an unforgettable trail.
            </p>

            {/* Sizes */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium uppercase tracking-widest">Select Size</h3>
                <span className="text-xs text-gray-400 underline cursor-pointer hover:text-black">Size Guide</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <label 
                    key={size.id} 
                    className={`
                      border cursor-pointer text-center py-4 transition-all duration-300
                      ${selectedSize === size.id ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-black'}
                    `}
                  >
                    <input 
                      type="radio" 
                      name="size" 
                      className="hidden" 
                      checked={selectedSize === size.id}
                      onChange={(e) => {
                        e.preventDefault();
                        setShowPaywall(true);
                      }}
                    />
                    <span className="text-sm font-medium">{size.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="mb-8">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-5 w-5 text-black border-gray-300 focus:ring-black rounded-none cursor-pointer"
                  checked={false}
                  onChange={(e) => {
                    e.preventDefault();
                    setShowPaywall(true);
                  }}
                />
                <Gift size={18} className="text-gray-500" />
                <span className="text-sm font-medium uppercase tracking-widest text-gray-700 group-hover:text-black">Add Gift Wrapping (+$15)</span>
              </label>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4 mb-16">
              <button 
                className="flex-1 bg-black text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPaywall(true);
                }}
              >
                Add to Cart — ${currentPrice}
              </button>
              <button 
                className={`p-4 border transition-colors ${isLiked ? 'bg-black border-black text-white' : 'border-gray-200 text-gray-600 hover:border-black hover:text-black'}`}
                onClick={() => onToggleWishlist(product)}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Fragrance Notes Pyramid */}
            <div className="mb-16">
              <h3 className="text-lg font-serif mb-6 border-b border-gray-100 pb-4">Fragrance Pyramid</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-24 flex-shrink-0 text-xs font-medium uppercase tracking-widest text-gray-400 pt-1">Top</div>
                  <div className="text-gray-800 font-light">Bergamot, Pink Pepper, Lemon</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 flex-shrink-0 text-xs font-medium uppercase tracking-widest text-gray-400 pt-1">Middle</div>
                  <div className="text-gray-800 font-light">{product.notes}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 flex-shrink-0 text-xs font-medium uppercase tracking-widest text-gray-400 pt-1">Base</div>
                  <div className="text-gray-800 font-light">Sandalwood, Vanilla, Musk</div>
                </div>
              </div>
            </div>

            {/* Review Bar Indicator */}
            <div>
              <h3 className="text-lg font-serif mb-6 border-b border-gray-100 pb-4">Performance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    <span>Longevity</span>
                    <span>Long Lasting</span>
                  </div>
                  <div className="h-1 bg-gray-100 w-full overflow-hidden">
                    <div className="h-full bg-black w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    <span>Sillage</span>
                    <span>Strong</span>
                  </div>
                  <div className="h-1 bg-gray-100 w-full overflow-hidden">
                    <div className="h-full bg-black w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Paywall Modal */}
      <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} />

    </div>
  );
};

export default ProductDetail;
