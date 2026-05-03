import React from 'react';
import { Lock, X, ExternalLink } from 'lucide-react';

const PaywallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-md p-8 shadow-2xl z-10 animate-fade-in-up border-t-4 border-black">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-4 rounded-full">
            <Lock size={32} className="text-black" />
          </div>
        </div>
        
        <h3 className="text-2xl font-serif text-center mb-4">Fitur Terkunci (Preview)</h3>
        
        <p className="text-gray-600 text-center font-light leading-relaxed mb-8">
          Akses terbatas. Lanjut ke Gumroad untuk akses semua fitur interaktif, filter dinamis, dan komponen cart lengkap:
        </p>
        
        <a 
          href="https://sahlausman.gumroad.com/l/Template_E-Commerce" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-black text-white py-4 px-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Dapatkan Full Version
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default PaywallModal;
