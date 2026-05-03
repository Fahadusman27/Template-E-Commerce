import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onNavigate }) => {
  const [isGiftWrapped, setIsGiftWrapped] = useState(false);
  const [customNotes, setCustomNotes] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const giftWrapFee = isGiftWrapped ? 15 : 0;
  const total = subtotal + giftWrapFee;

  const handleContinueShopping = () => {
    onNavigate('catalog');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors p-2 -mr-2">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <p className="font-light">Your cart is empty.</p>
              <button 
                className="mt-6 text-sm font-medium uppercase tracking-widest text-black underline underline-offset-4"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 h-32 bg-gray-50 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <button onClick={() => onRemoveItem(index)} className="text-gray-400 hover:text-black">
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{item.selectedSize}</p>
                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          className="px-3 py-1 text-gray-500 hover:text-black"
                          onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 text-gray-500 hover:text-black"
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <>
              {/* Upsell Feature */}
              <div className="mt-12 bg-parfum-light p-5 border border-gray-100">
                <h4 className="text-sm font-medium uppercase tracking-widest mb-4">Complete your experience</h4>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=200" alt="Discovery Set" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-serif text-sm mb-1">Discovery Set</h5>
                    <p className="text-xs text-gray-500 mb-2">5 x 2ml Vials • $35.00</p>
                  </div>
                  <button className="text-xs font-medium uppercase tracking-widest border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors">
                    Add
                  </button>
                </div>
              </div>

              {/* Gift Options */}
              <div className="mt-8 border-t border-gray-100 pt-8 space-y-4">
                <label className="flex items-start group cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 mt-0.5 text-black border-gray-300 focus:ring-black rounded-none cursor-pointer"
                    checked={isGiftWrapped}
                    onChange={(e) => setIsGiftWrapped(e.target.checked)}
                  />
                  <div className="ml-3">
                    <span className="block text-sm text-gray-800 group-hover:text-black">Add Signature Gift Wrapping (+$15.00)</span>
                    <span className="block text-xs text-gray-500 mt-1">Premium box, ribbon, and unboxing experience.</span>
                  </div>
                </label>
                
                <div className="pt-2">
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">Gift Message / Order Notes</label>
                  <textarea 
                    rows="3" 
                    className="w-full border border-gray-200 bg-gray-50 p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-colors resize-none"
                    placeholder="Enter your message here..."
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex justify-between text-sm mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {isGiftWrapped && (
              <div className="flex justify-between text-sm mb-2 text-gray-600">
                <span>Gift Wrapping</span>
                <span>${giftWrapFee.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-serif mb-6 pt-2 border-t border-gray-200 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;
