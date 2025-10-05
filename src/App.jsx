import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from "./components/Footer";
import NotFound from './pages/NotFound';
import Wishlist from "./pages/Wishlist";
import ProductDetails from './pages/ProductDetails';
import Home from './components/Home';

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <main className="container">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Products page */}
          <Route path="/products" element={<Products />} />

          {/* Product details */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Wishlist */}
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
