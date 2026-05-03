import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import About from './components/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home, catalog, product, about, wishlist
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [currentPage, selectedProduct]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page !== 'product') {
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleAddToCart = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
    );

    if (existingIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="font-sans text-parfum-dark bg-white min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Navbar 
        onCartOpen={() => setIsCartOpen(true)} 
        onNavigate={navigateTo} 
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-grow">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'catalog' && (
          <Catalog 
            onProductClick={handleProductClick} 
            searchQuery={searchQuery}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}
        {(currentPage === 'collections' || currentPage === 'wishlist') && (
          <Catalog 
            onProductClick={handleProductClick} 
            searchQuery={searchQuery}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            showWishlistOnly={true}
            onBack={() => navigateTo('home')}
          />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'product' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => {
              setSearchQuery('');
              navigateTo('catalog');
            }} 
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
