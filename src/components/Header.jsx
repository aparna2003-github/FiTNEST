import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
    <header className="site-header">
        <div className="topbar">
            <div className="logo">FiTNEST</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/">Women</Link>
                    <Link to="/">Men</Link>
                    <Link to="/cart" className="cart-link">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </nav>
        </div>
        <div className="hero">
            <div className='hero-content'>
                <h1>Make your <span className="accent">Fashion</span> Look more Perfect & Attractive</h1>
                <p>Explore collections from various brands. Style that fits your personality.</p>
            </div>
        </div>
        <div className='hero-div'>
            <img src="/images/hero-model.jpg" alt="model" className='hero-img'/>
            <div className='her-div2'>
                <img src="/images/hero-img2.jpg" alt="" className='div2-img1'/>
                <img src="/images/hero-img3.jpg" alt=""  className='div2-img2'/>
            </div>
        </div>
    </header>
)
}