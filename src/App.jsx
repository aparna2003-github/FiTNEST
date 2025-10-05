import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import Footer from "./components/Footer"
import NotFound from './pages/NotFound'
import Wishlist from "./pages/Wishlist"
import ProductDetails from './pages/ProductDetails'
import Home from './components/Home';



export default function App(){
return (
<div className="app-root">
<Header />

<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/" element={<Products/>} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route path="/cart" element={<Cart/>} />
<Route path="*" element={<NotFound />} />
<Route path="/wishlist" element={<Wishlist />} />
</Routes>
</main>
<Footer />
</div>
)
}
