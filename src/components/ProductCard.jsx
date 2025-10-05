import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = "https://fitnest-json-server.onrender.com";

export default function ProductCard({ product, onAdd }) {
  const [inCart, setInCart] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)
  const navigate = useNavigate()

  // check if product already in cart or wishlist
  useEffect(() => {
    axios.get(`${API}/cart?id=${product.id}`).then(res => {
      if (res.data.length > 0) setInCart(true)
    })
    axios.get(`${API}/wishlist?id=${product.id}`).then(res => {
      if (res.data.length > 0) setInWishlist(true)
    })
  }, [product.id])

  const handleWishlist = async () => {
    try {
      if (inWishlist) return
      await axios.post(`${API}/wishlist`, product)
      setInWishlist(true)
      alert(`${product.name} added to wishlist`)
    } catch (e) {
      console.error(e)
      alert('Failed to add to wishlist')
    }
  }

  const handleCartClick = () => {
    if (inCart) {
      navigate('/cart')
    } else {
      onAdd(product)
      setInCart(true)
    }
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.description}</p>
        <div className="card-actions">
          <button onClick={handleCartClick}>
            {inCart ? 'Go to Cart' : 'Add to Cart'}
          </button>
          <button
            onClick={handleWishlist}
            style={{ background: inWishlist ? 'red' : '#555', color: '#fff' }}
          >
            {inWishlist ? 'Wishlisted ❤️' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  )
}
